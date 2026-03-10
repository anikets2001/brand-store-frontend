'use client';

import Image from 'next/image';
import { useAirline } from '@/context/AirlineContext';

const ExperienceSection = () => {
  const airline = useAirline();
  const items = airline?.config?.experienceItems;

  if (!items?.length) return null;

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-premium-purple section-divider">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 md:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl heading-premium leading-tight">
            Elevated Journeys
          </h2>
        </div>

        {/* 3-2-2 layout: all tiles same size; rows 2 & 3 centered with space on both ends */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8">
          {items.map((item, index) => {
            let desktopPosition = "lg:col-span-2";

            if (index === 3) desktopPosition += " lg:col-start-2";
            if (index === 4) desktopPosition += " lg:col-start-4";
            if (index === 5) desktopPosition += " lg:col-start-2";
            if (index === 6) desktopPosition += " lg:col-start-4";

            return (
              <div
                key={item.id}
                className={`group relative rounded-lg overflow-hidden premium-card transition-all duration-300 bg-premium-darkred ${desktopPosition}`}
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={item.imageSrc}
                    alt={item.alt || item.title}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (min-width: 1024px) 33vw"
                    fetchPriority="low"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-display text-lg md:text-xl heading-premium">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="p-4 md:p-5">
                  <p className="heading-premium text-sm font-medium leading-snug">
                    {item.line1}
                  </p>
                  {item.line2 && (
                    <p className="subtext-premium text-sm mt-1 leading-snug">
                      {item.line2}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
