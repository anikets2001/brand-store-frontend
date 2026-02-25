'use client';

import Image from 'next/image';
import React from 'react';
import { useAirline } from '@/context/AirlineContext';

const Footer = () => {
  const airline = useAirline();
  if (!airline?.config) return null;
  const { brand } = airline.config;
  return (
    <footer className="footer-responsive bg-black text-white border-t border-white/10 fixed bottom-0 left-0 right-0 w-full z-99 opacity-85">
      <div className="px-4 py-4 sm:px-6 sm:py-4 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 max-w-7xl mx-auto">
          {/* CTA first on mobile for prominence */}
          <button className="cursor-pointer w-full sm:w-auto min-h-[48px] px-6 py-3.5 sm:py-4 rounded-lg sm:rounded-sm font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-xs hover:bg-(--primary) hover:text-white transition-colors duration-300 touch-manipulation bg-white text-black text-center order-1 sm:order-2">
            {brand.bookCtaText || `Book Now With ${brand.name}`}
          </button>
          {/* Logo: centered on mobile, left on desktop; width allows full logo (text + symbol) */}
          <div className="hidden sm:flex relative h-10 w-28 sm:w-32 md:h-12 md:w-40 lg:w-44 shrink-0 order-2 sm:order-1 mx-auto sm:mx-0 overflow-visible">
            <Image
              src={brand.logoUrl}
              alt={`${brand.displayName || brand.name} Logo`}
              fill
              className="object-contain object-center sm:object-left"
              sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, (max-width: 1024px) 176px, 208px"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
