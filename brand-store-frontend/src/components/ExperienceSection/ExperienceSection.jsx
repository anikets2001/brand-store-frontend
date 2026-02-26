'use client';

import Image from 'next/image';
import { useAirline } from '@/context/AirlineContext';

const ExperienceSection = () => {
  const airline = useAirline();
  const items = airline?.config?.experienceItems;

  if (!items?.length) return null;

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 md:mb-16">
          <span className="text-xs font-bold tracking-[0.25em] sm:tracking-[0.3em] text-(--primary) uppercase block mb-2 md:mb-3">
            Experience
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
            Elevated Journeys
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-sm overflow-hidden border border-white/10 hover:border-(--primary)/30 transition-colors duration-300 bg-(--background-charcoal)"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={item.imageSrc}
                  alt={item.alt || item.title}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  fetchPriority="low"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-display text-lg md:text-xl text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
              <div className="p-4 md:p-5">
                <p className="text-white/90 text-sm font-medium leading-snug">
                  {item.line1}
                </p>
                {item.line2 && (
                  <p className="text-white/60 text-sm mt-1 leading-snug">
                    {item.line2}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
