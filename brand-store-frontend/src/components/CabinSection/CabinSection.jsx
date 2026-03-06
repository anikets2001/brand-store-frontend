'use client';

import { useAirline } from '@/context/AirlineContext';
import LazyVideo from '@/components/ui/LazyVideo';

const CabinSection = () => {
  const airline = useAirline();
  const videos = airline?.config?.cabinVideos;

  if (!videos?.length) return null;

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-premium-purple section-divider">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 md:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl heading-premium leading-tight">
            Upgraded Fleet and Cabins
          </h2>
        </div>

        <div className="space-y-12 md:space-y-20">
          {videos.map((item, index) => {
            const swapOrder = index % 2 === 1;
            const isFirst = index === 0;
            return (
              <div
                key={item.id}
                className="grid md:grid-cols-2 gap-10 items-center gap-y-8"
              >
                <div
                  className={`relative aspect-video md:aspect-[16/10] rounded-lg overflow-hidden bg-black premium-card ${swapOrder ? 'md:order-2' : 'md:order-1'}`}
                >
                  <LazyVideo
                    src={item.videoSrc}
                    className="w-full h-full object-contain"
                    muted
                    loop
                    autoPlay={isFirst}
                    controls
                    preloadWhenVisible="metadata"
                    aria-label={item.headline}
                  />
                  <div className="absolute inset-0 bg-black/20 pointer-events-none" />
                </div>
                <div className={swapOrder ? 'md:order-1' : 'md:order-2'}>
                  <h3 className="font-display text-2xl md:text-3xl heading-premium mb-4">
                    {item.headline}
                  </h3>
                  <p className="subtext-premium text-sm md:text-base leading-relaxed">
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