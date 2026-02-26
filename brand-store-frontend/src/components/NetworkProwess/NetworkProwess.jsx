'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useAirline } from '@/context/AirlineContext';

const TAB_DOMESTIC = 'domestic';
const TAB_INTERNATIONAL = 'international';

const NetworkProwess = () => {
  const airline = useAirline();
  const network = airline?.config?.network;
  const [activeTab, setActiveTab] = useState(TAB_DOMESTIC);

  if (!network?.headline) return null;

  const { headline, subline, domesticTitle, internationalTitle, domesticTiles = [], internationalTiles = [] } = network;
  const tiles = activeTab === TAB_DOMESTIC ? domesticTiles : internationalTiles;

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#050505] relative overflow-hidden border-t border-white/5">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[color:var(--primary)]/30 to-transparent" />
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 md:mb-16">
          <span className="text-xs font-bold tracking-[0.25em] sm:tracking-[0.3em] text-[color:var(--primary)] uppercase block mb-2 md:mb-3">
            Network
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white mb-2 md:mb-3">
            {headline}
          </h2>
          <p className="text-white/60 text-sm md:text-base">
            {subline}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 p-1 rounded-lg bg-white/5 border border-white/10 w-fit mb-8">
          <button
            type="button"
            onClick={() => setActiveTab(TAB_DOMESTIC)}
            className={`cursor-pointer px-5 py-2.5 rounded-md text-sm font-bold uppercase tracking-[0.15em] transition-colors min-h-[44px] touch-manipulation ${
              activeTab === TAB_DOMESTIC
                ? 'bg-(--primary) text-black'
                : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
            aria-pressed={activeTab === TAB_DOMESTIC}
            aria-label={`Show ${domesticTitle || 'Domestic'} destinations`}
          >
            {domesticTitle || 'Domestic'}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab(TAB_INTERNATIONAL)}
            className={`cursor-pointer px-5 py-2.5 rounded-md text-sm font-bold uppercase tracking-[0.15em] transition-colors min-h-[44px] touch-manipulation ${
              activeTab === TAB_INTERNATIONAL
                ? 'bg-(--primary) text-black'
                : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
            aria-pressed={activeTab === TAB_INTERNATIONAL}
            aria-label={`Show ${internationalTitle || 'International'} destinations`}
          >
            {internationalTitle || 'International'}
          </button>
        </div>

        {/* Grid – same layout for both tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
          {tiles.map((tile, index) => (
            <div
              key={activeTab === TAB_DOMESTIC ? `dom-${index}-${tile.city}` : `intl-${index}-${tile.city}`}
              className="group relative aspect-[3/4] rounded-sm overflow-hidden border border-white/10 hover:border-(--primary)/40 transition-colors"
            >
              <Image
                src={tile.img}
                alt={tile.country ? `${tile.city}, ${tile.country}` : `Destination: ${tile.city}`}
                fill
                className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                fetchPriority="low"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <span className="font-display text-white text-sm md:text-base drop-shadow-md block">
                  {tile.city}
                </span>
                {tile.country && (
                  <span className="text-white/70 text-xs block">
                    {tile.country}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NetworkProwess;
