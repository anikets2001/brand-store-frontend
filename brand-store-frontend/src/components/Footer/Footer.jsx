'use client';

import React from 'react';
import { useAirline } from '@/context/AirlineContext';

const Footer = () => {
  const airline = useAirline();
  if (!airline?.config) return null;
  const { brand } = airline.config;
  return (
    <footer className="footer-responsive text-[#f9f6ee] section-divider fixed bottom-0 left-0 right-0 w-full z-99 shadow-[0_-4px_24px_rgba(0,0,0,0.15)]">
      <div className="px-4 py-4 sm:px-6 sm:py-4 lg:px-8">
        <div className="flex justify-center items-center max-w-7xl mx-auto">
          <button className="cursor-pointer w-full sm:w-auto min-h-[48px] px-6 py-3.5 sm:py-4 rounded-lg sm:rounded-sm font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-xs hover:bg-(--primary) hover:text-white transition-colors duration-300 touch-manipulation bg-white text-black text-center">
            {brand.bookCtaText || `Book Now With ${brand.name}`}
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
