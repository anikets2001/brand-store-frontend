'use client';

import React from 'react';
import { useAirline } from '@/context/AirlineContext';

const Footer = () => {
  const airline = useAirline();
  if (!airline?.config) return null;
  const { brand } = airline.config;
  return (
    <footer className="footer-responsive text-[#f9f6ee] section-divider fixed bottom-0 left-0 right-0 w-full z-99 shadow-[0_-1px_0_rgba(235,190,105,0.08),0_-16px_48px_rgba(83,18,81,0.25)]">
      <div className="px-4 py-4 sm:px-6 sm:py-4 lg:px-8">
        <div className="flex justify-center items-center max-w-7xl mx-auto">
          <button className="cursor-pointer w-full sm:w-auto min-h-[48px] px-6 py-3.5 sm:py-4 rounded-lg sm:rounded-sm font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-xs transition-all duration-300 touch-manipulation text-center bg-[#f9f6ee] text-[#b61032] hover:bg-[#ebbe69] hover:text-[#531251] border border-[#ebbe69]/30 shadow-[0_2px_12px_rgba(83,18,81,0.2)] hover:shadow-[0_4px_20px_rgba(235,190,105,0.25)]">
            {brand.bookCtaText || `Book Now With ${brand.name}`}
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
