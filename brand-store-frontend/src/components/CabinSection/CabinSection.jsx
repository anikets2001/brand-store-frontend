'use client';

import { useAirline } from '@/context/AirlineContext';

const CabinSection = () => {
  const airline = useAirline();
  const videos = airline?.config?.cabinVideos;

  if (!videos?.length) return null;

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-(--background-charcoal) border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 md:mb-16">
          <span className="text-xs font-bold tracking-[0.25em] sm:tracking-[0.3em] text-(--primary) uppercase block mb-2 md:mb-3">
            Fleet & Cabins
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
            Upgraded Fleet and Cabins
          </h2>
        </div>

        <div className="space-y-12 md:space-y-20">
          {videos.map((item, index) => {
            const swapOrder = index % 2 === 1;
            return (
              <div
                key={item.id}
                className="grid md:grid-cols-2 gap-10 items-center gap-y-8"
              >
                <div
                  className={`relative aspect-video md:aspect-[16/10] rounded-sm overflow-hidden bg-black border border-white/10 ${swapOrder ? 'md:order-2' : 'md:order-1'}`}
                >
                  <video
                    src={item.videoSrc}
                    className="w-full h-full object-contain"
                    muted
                    loop
                    autoPlay
                    controls
                    preload="metadata"
                    aria-label={item.headline}
                  />
                  <div className="absolute inset-0 bg-black/20 pointer-events-none" />
                </div>
                <div className={swapOrder ? 'md:order-1' : 'md:order-2'}>
                  <h3 className="font-display text-2xl md:text-3xl text-white mb-4">
                    {item.headline}
                  </h3>
                  <p className="text-white/70 text-sm md:text-base leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CabinSection;