'use client';

import { useAirline } from '@/context/AirlineContext';
import LazyVideo from '@/components/ui/LazyVideo';

const SocialHighlightsSection = () => {
  const airline = useAirline();
  const items = airline?.config?.socialHighlights;

  if (!items?.length) return null;

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-premium-darkred section-divider relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[color:var(--primary)]/25 to-transparent" />
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 md:mb-14">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl heading-premium mb-3">
            Social Highlights
          </h2>
          <p className="subtext-premium text-sm md:text-base max-w-xl">
            Glimpses from the places we fly. Tap to play and explore.
          </p>
        </div>

        {/* Reels: one video per row, stacked vertically, portrait 9:16 */}
        <div className="flex flex-col items-center gap-6 md:gap-8">
          {items.map((item, index) => (
            <div
              key={item.id}
              className="group relative w-full max-w-md aspect-[9/16] rounded-xl overflow-hidden bg-black premium-card transition-all duration-300"
            >
              <LazyVideo
                src={item.videoSrc}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                muted
                loop
                autoPlay={index === 0}
                controls
                preloadWhenVisible="metadata"
                aria-label={`Video: ${item.label}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-4 pointer-events-none">
                <span className="text-white text-sm font-semibold tracking-wide drop-shadow-md">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialHighlightsSection;
