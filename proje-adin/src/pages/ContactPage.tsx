import { Clock, MapPin, Phone } from 'lucide-react';
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
        tel: '040 73673650',
        mapQuery: 'Hisar Backhaus Billstedter Hauptstraße 51, 22111 Hamburg, Germany',
      },
      {
        id: 'stgeorg' as const,
        name: 'Harburg',
        addr: t(language, 'contact.stGeorg.addr'),
        hours: t(language, 'contact.stGeorg.hours'),
        tel: '040 73673651',
        mapQuery: 'Steindamm 27, 20099 Hamburg, Almanya',
      },
      {
        id: 'altona' as const,
        name: 'Altona',
        addr: t(language, 'contact.altona.addr'),
        hours: t(language, 'contact.altona.hours'),
        tel: '040 73673652',
        mapQuery: 'Hisar Backhaus Altona, Hamburg, Germany',
      },
    ],
    [language],
  );

  const [selectedStoreId, setSelectedStoreId] = useState<StoreId>('billstedt');
  const selectedStore = stores.find((s) => s.id === selectedStoreId) ?? stores[0];

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    selectedStore.mapQuery,
  )}&output=embed`;

  return (
    <div className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-12">
        <div className="mb-20">
          <span className="text-tertiary font-bold tracking-[0.2em] mb-4 uppercase text-sm">
            {t(language, 'contact.letsConnect')}
          </span>
          <h1 className="text-7xl md:text-9xl font-headline font-black text-primary leading-[0.9] tracking-tighter mb-10">
            {t(language, 'contact.getInTouch')}
          </h1>
          <p className="text-2xl text-on-surface-variant max-w-2xl leading-relaxed">{t(language, 'contact.intro')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Store List */}
          <div className="lg:col-span-4 space-y-4">
            {stores.map((loc) => {
              const active = loc.id === selectedStoreId;
              return (
                <button
                  key={loc.id}
                  type="button"
                  onClick={() => setSelectedStoreId(loc.id)}
                  aria-pressed={active}
                  className={`w-full text-left rounded-2xl border p-6 transition-colors ${
                    active
                      ? 'border-primary bg-surface-container-low'
                      : 'border-outline-variant/40 hover:border-outline-variant'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-4xl font-headline font-bold text-primary">{loc.name}</h3>
                  </div>

                  <div className="mt-4 space-y-3 text-on-surface-variant">
                    <p className="flex items-center gap-3">
                      <MapPin size={18} className="text-tertiary shrink-0" /> {loc.addr}
                    </p>
                    <p className="flex items-center gap-3">
                      <Clock size={18} className="text-tertiary shrink-0" /> {loc.hours}
                    </p>
                    <p className="flex items-center gap-3">
                      <Phone size={18} className="text-tertiary shrink-0" /> {loc.tel}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Google Maps */}
          <div className="lg:col-span-8">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-outline-variant/30">
              <iframe
                title={`Google Maps - ${selectedStore.name}`}
                src={mapSrc}
                className="w-full h-[560px]"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

