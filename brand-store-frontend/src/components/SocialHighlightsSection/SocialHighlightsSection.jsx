'use client';

import { useRef } from 'react';
import { useAirline } from '@/context/AirlineContext';

const SocialHighlightsSection = () => {
  const airline = useAirline();
  const items = airline?.config?.socialHighlights;
  const videoRefs = useRef({});

  if (!items?.length) return null;

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-(--background-dark) border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[color:var(--primary)]/20 to-transparent" />
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 md:mb-14">
          <span className="text-xs font-bold tracking-[0.25em] sm:tracking-[0.3em] text-(--primary) uppercase block mb-2 md:mb-3">
            From Our Destinations
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white mb-3">
            Social Highlights
          </h2>
          <p className="text-white/60 text-sm md:text-base max-w-xl">
            Glimpses from the places we fly. Tap to play and explore.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-4">
          {items.map((item) => {
            return (
              <div
                key={item.id}
                className="group relative aspect-video md:aspect-[16/10] rounded-xl overflow-hidden bg-black border border-white/10 hover:border-(--primary)/50 hover:shadow-[0_0_30px_rgba(214,176,109,0.15)] transition-all duration-300"
              >
                <video
                  ref={(el) => { videoRefs.current[item.id] = el; }}
                  src={item.videoSrc}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  muted
                  loop
                  autoPlay
                  controls
                  preload="metadata"
                  aria-label={`Video: ${item.label}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-4 pointer-events-none">
                  <span className="text-white text-sm font-semibold tracking-wide drop-shadow-md">
                    {item.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SocialHighlightsSection;
