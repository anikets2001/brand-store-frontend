'use client';

import { useAirline } from '@/context/AirlineContext';

const WhatsNewSection = () => {
  const airline = useAirline();
  const whatsNew = airline?.config?.whatsNew;

  if (!whatsNew?.items?.length) return null;

  const { sectionTitle, items } = whatsNew;

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-premium-purple section-divider">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 md:mb-12">
          <span className="text-xs font-bold tracking-[0.25em] sm:tracking-[0.3em] text-(--primary) uppercase block mb-2 md:mb-3">
            News & Updates
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl heading-premium">
            {sectionTitle || "What's New"}
          </h2>
        </div>

        <ul className="space-y-0">
          {items.map((item, index) => (
            <li key={index}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 min-h-[48px] py-3 px-1 -mx-1 rounded-lg touch-manipulation border-b border-white/10 last:border-0 hover:border-(--primary)/40 hover:bg-white/5 transition-colors"
              >
                <span className="material-icons text-(--primary) text-lg mt-0.5 shrink-0 opacity-80 group-hover:opacity-100" aria-hidden>
                  arrow_forward
                </span>
                <span className="heading-premium group-hover:text-[#f9f6ee] text-sm md:text-base leading-snug transition-colors flex-1 min-w-0">
                  {item.title}
                </span>
                <span className="material-icons text-white/40 text-sm shrink-0 group-hover:text-(--primary)" aria-hidden>
                  open_in_new
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhatsNewSection;
