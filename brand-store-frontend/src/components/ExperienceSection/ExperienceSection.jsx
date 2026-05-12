"use client";

import Image from "next/image";
import { useAirline } from "@/context/AirlineContext";

const ExperienceSection = () => {
  const airline = useAirline();
  const items = airline?.config?.experienceItems;

  if (!items?.length) return null;

  return (
    <section className="border-b border-[rgba(61,54,48,0.14)] bg-jaali px-4 py-20 pb-24 sm:px-6 md:py-24 md:pb-28 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-8 md:mb-12">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl heading-brand-main leading-tight">
            Elevated Journeys
          </h2>
        </div>

        {/* 3-2-2 layout: uniform square media + text; rows 2 & 3 centered */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 md:gap-7 lg:grid-cols-6 lg:gap-8">
          {items.map((item, index) => {
            let desktopPosition = "lg:col-span-2";

            if (index === 3) desktopPosition += " lg:col-start-2";
            if (index === 4) desktopPosition += " lg:col-start-4";
            if (index === 5) desktopPosition += " lg:col-start-2";
            if (index === 6) desktopPosition += " lg:col-start-4";

            return (
              <div
                key={item.id}
                className={`group relative flex flex-col overflow-hidden rounded-lg premium-card transition-all duration-300 bg-premium-darkred ${desktopPosition}`}
              >
                {/* Square frame: square key art fills width; landscapes crop evenly — slightly tighter than ultra-wide layout */}
                <div className="relative aspect-square w-full shrink-0 overflow-hidden bg-black/20">
                  <Image
                    src={item.imageSrc}
                    alt={item.alt || item.title}
                    fill
                    className="object-cover object-center transition-all duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (min-width: 1024px) 30vw"
                    fetchPriority="low"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-60" />
                  <div className="absolute bottom-0 w-full p-3 md:p-4">
                    <h3 className="text-center font-display text-lg text-white drop-shadow-md md:text-xl">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-4 md:p-5">
                  <div className="flex items-center gap-4">
                    <Image
                      src={
                        "/assets/air-india/images/aircraft-images/bullet.png"
                      }
                      alt="Bullet point"
                      width={20}
                      height={20}
                    />
                    <p className="text-sm font-medium leading-snug text-white">
                      {item.line1}
                    </p>
                  </div>
                  {item.line2 && (
                    <div className="flex items-center gap-4 mt-4">
                      <Image
                        src={
                          "/assets/air-india/images/aircraft-images/bullet.png"
                        }
                        alt="Bullet point"
                        width={20}
                        height={20}
                      />
                      <p className="text-sm font-medium leading-snug text-white">
                        {item.line2}
                      </p>
                    </div>
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
