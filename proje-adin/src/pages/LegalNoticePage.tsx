import { useLanguage } from '../i18n/LanguageContext';
import { t } from '../i18n/translations';

function LegalSection({ title, paragraphs }: { title: string; paragraphs: string[] }) {
  return (
    <section className="space-y-4">
      <h2 className="font-headline text-2xl font-black text-primary">{title}</h2>
      {paragraphs.map((text) => (
        <p key={text.slice(0, 48)} className="text-base leading-relaxed text-on-surface-variant">
          {text}
        </p>
      ))}
    </section>
  );
}

export function LegalNoticePage() {
  const { language } = useLanguage();

  const sections = [
    {
      title: t(language, 'legal.liabilityContent.title'),
      paragraphs: [
        t(language, 'legal.liabilityContent.p1'),
        t(language, 'legal.liabilityContent.p2'),
      ],
    },
    {
      title: t(language, 'legal.liabilityLinks.title'),
      paragraphs: [
        t(language, 'legal.liabilityLinks.p1'),
        t(language, 'legal.liabilityLinks.p2'),
      ],
    },
    {
      title: t(language, 'legal.copyright.title'),
      paragraphs: [
        t(language, 'legal.copyright.p1'),
        t(language, 'legal.copyright.p2'),
        t(language, 'legal.copyright.p3'),
      ],
    },
  ];

  return (
    <article className="bg-background pt-48 pb-20 md:pt-56">
      <div className="max-w-3xl mx-auto px-8 md:px-12 space-y-12">
        <header className="space-y-3 border-b border-outline-variant/40 pb-10">
          <h1 className="font-headline text-4xl md:text-5xl font-black text-on-surface leading-tight">
            {t(language, 'legal.title')}
          </h1>
        </header>

        <div className="space-y-12">
          {sections.map((section) => (
            <LegalSection key={section.title} title={section.title} paragraphs={section.paragraphs} />
          ))}
        </div>
      </div>
    </article>
  );
}
