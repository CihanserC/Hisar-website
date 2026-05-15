import { ChevronRight, Clock, MapPin } from 'lucide-react';
import { useMemo, useState } from 'react';

import { useLanguage } from '../i18n/LanguageContext';
import { t } from '../i18n/translations';

type StoreId = 'billstedt' | 'stgeorg' | 'altona';

export function ContactPage() {
  const { language } = useLanguage();

  const stores = useMemo(
    () => [
      {
        id: 'billstedt' as const,
        name: 'Billstedt',
        addr: t(language, 'contact.billstedt.addr'),
        hours: t(language, 'contact.billstedt.hours'),
        // Coordinates → no white search-result panel appears in the iframe
        lat: 53.5516,
        lng: 10.0942,
        mapQuery: 'Billstedter Hauptstraße 51, 22111 Hamburg, Germany',
      },
      {
        id: 'stgeorg' as const,
        name: 'Harburg',
        addr: t(language, 'contact.stGeorg.addr'),
        hours: t(language, 'contact.stGeorg.hours'),
        lat: 53.4580,
        lng: 9.9885,
        mapQuery: 'Lüneburger Str. 37, 21073 Hamburg, Germany',
      },
      {
        id: 'altona' as const,
        name: 'Altona',
        addr: t(language, 'contact.altona.addr'),
        hours: t(language, 'contact.altona.hours'),
        lat: 53.5566,
        lng: 9.9358,
        mapQuery: 'Barner Str. 44-46, 22765 Hamburg, Germany',
      },
    ],
    [language],
  );

  const [selectedStoreId, setSelectedStoreId] = useState<StoreId>('billstedt');
  const selectedStore = stores.find((s) => s.id === selectedStoreId) ?? stores[0];

  // Using lat,lng avoids the Google Maps search-result info panel entirely.
  // z=16 keeps the location well-centred so our CSS dot overlay aligns correctly.
  const mapSrc = `https://www.google.com/maps?q=${selectedStore.lat},${selectedStore.lng}&z=16&output=embed`;

  // Directions link still uses the readable address string
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedStore.mapQuery)}`;

  return (
    <section className="bg-background pt-32 pb-0 md:pt-36">
      {/* Map block: full bleed horizontally, fixed height so footer stays visible */}
      <div className="relative h-[70vh] min-h-[28rem] w-full overflow-hidden border-y border-outline-variant/25 md:h-[75vh] md:max-h-[44rem]">
        <iframe
          title={`Google Maps — ${selectedStore.name}`}
          src={mapSrc}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer"
        />

        {/* Branch list overlaid on the map */}
        <div className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-end p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:block md:p-0">
          <div className="pointer-events-auto mx-auto flex w-full max-w-md flex-col md:absolute md:inset-y-0 md:left-12 md:my-6 md:mx-0 md:w-[min(22rem,calc(100vw-3rem))] lg:left-16 lg:my-8 lg:w-[26rem]">
            <div className="flex max-h-[min(80vh,36rem)] flex-col overflow-hidden rounded-2xl border border-outline-variant/50 bg-surface/95 shadow-2xl backdrop-blur-md md:max-h-full md:h-full">
              <div className="border-b border-outline-variant/40 px-4 py-3 text-center md:px-5 md:py-4">
                <h1 className="font-headline text-xl font-bold tracking-tight text-primary md:text-2xl">
                  {t(language, 'footer.locationsTitle')}
                </h1>
              </div>

              <ul className="min-h-0 flex-1 divide-y divide-outline-variant/30 overflow-y-auto overscroll-contain px-2 py-2">
                {stores.map((loc) => {
                  return (
                    /* group + hover:bg on the <li> so background and child group-hover:
                       colours all fire from the exact same hovered element.
                       Hover applies to every item (including the currently selected one). */
                    <li
                      key={loc.id}
                      className="group rounded-xl transition-colors hover:bg-[#d40304]"
                    >
                      <button
                        type="button"
                        onClick={() => setSelectedStoreId(loc.id)}
                        className="w-full px-3 py-4 text-left md:px-4"
                      >
                        <span className="flex items-start gap-3">
                          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-white/20 group-hover:text-white">
                            <MapPin className="h-4 w-4" aria-hidden />
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="flex items-center justify-between gap-2">
                              <span className="font-headline text-lg font-semibold text-primary transition-colors group-hover:text-white md:text-xl">
                                {loc.name}
                              </span>
                              <ChevronRight
                                className="h-4 w-4 shrink-0 text-tertiary opacity-40 transition-colors group-hover:text-white/70"
                                aria-hidden
                              />
                            </span>
                            <span className="mt-1 block text-sm leading-snug text-on-surface-variant transition-colors group-hover:text-white/80">
                              {loc.addr}
                            </span>
                            <span className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
                              <span className="inline-flex items-center gap-1 text-on-surface-variant transition-colors group-hover:text-white/70">
                                <Clock className="h-3.5 w-3.5 shrink-0" aria-hidden />
                                {loc.hours}
                              </span>
                            </span>
                          </span>
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>

              <div className="border-t border-outline-variant/40 p-3 md:p-4">
                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center rounded-lg bg-[#d40304] px-4 py-2.5 text-center text-sm font-semibold tracking-wide text-white transition-opacity hover:opacity-90"
                >
                  {t(language, 'locations.getDirections')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
