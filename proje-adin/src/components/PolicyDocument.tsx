export type PolicyBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'address'; lines: string[] };

export type PolicySection = {
  title?: string;
  blocks?: PolicyBlock[];
  subsections?: PolicySection[];
};

export function PolicyDocument({ title, sections }: { title: string; sections: PolicySection[] }) {
  return (
    <article className="bg-background pt-28 sm:pt-36 pb-12 sm:pb-20 md:pt-56">
      <div className="max-w-3xl mx-auto page-x-padding space-y-8 sm:space-y-12">
        <header className="space-y-3 border-b border-outline-variant/40 pb-6 sm:pb-10">
          <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-black text-on-surface leading-tight">{title}</h1>
        </header>
        <div className="space-y-12">
          {sections.map((section, i) => (
            <PolicySectionBlock key={section.title ?? i} section={section} />
          ))}
        </div>
      </div>
    </article>
  );
}

function PolicySectionBlock({ section, depth = 0 }: { section: PolicySection; depth?: number }) {
  const HeadingTag = depth === 0 ? 'h2' : 'h3';
  const headingClass =
    depth === 0
      ? 'font-headline text-2xl font-black text-primary'
      : 'font-headline text-xl font-bold text-on-surface';

  return (
    <section className="space-y-4">
      {section.title && <HeadingTag className={headingClass}>{section.title}</HeadingTag>}
      {section.blocks?.map((block, i) => (
        <PolicyBlockView key={`${block.type}-${i}`} block={block} />
      ))}
      {section.subsections?.map((sub, i) => (
        <PolicySectionBlock key={sub.title ?? i} section={sub} depth={depth + 1} />
      ))}
    </section>
  );
}

function PolicyBlockView({ block }: { block: PolicyBlock }) {
  if (block.type === 'list') {
    return (
      <ul className="list-disc pl-6 space-y-2 text-base leading-relaxed text-on-surface-variant">
        {block.items.map((item) => (
          <li key={item.slice(0, 48)}>{item}</li>
        ))}
      </ul>
    );
  }

  if (block.type === 'address') {
    return (
      <address className="not-italic text-base leading-relaxed text-on-surface-variant space-y-1">
        {block.lines.map((line) => (
          <div key={line}>{line}</div>
        ))}
      </address>
    );
  }

  return <p className="text-base leading-relaxed text-on-surface-variant">{block.text}</p>;
}
