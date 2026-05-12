'use client';

import React from 'react';
import { useAirline } from '@/context/AirlineContext';

const Footer = () => {
  const airline = useAirline();
  if (!airline?.config) return null;
  const { brand } = airline.config;
  return (
    <footer
      className="footer-responsive fixed bottom-0 left-0  right-0 z-99 border-t-2 border-[color:var(--primary)]/55 text-[#f9f6ee] shadow-[0_-6px_32px_rgba(0,0,0,0.35)]"
      
    >
      <div className="px-4 py-4 sm:px-6 sm:py-4 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-center">
          <button
            type="button"
            className="min-h-[48px] w-full cursor-pointer rounded-md border border-[#f9f6ee]/30 bg-linear-to-r from-(--primary) to-(--primary-dark) px-8 py-3.5 text-center text-xs font-bold tracking-[0.15em] text-[#3a0f36] uppercase shadow-[inset_0_1px_0_rgba(255,255,255,0.28),0_4px_20px_rgba(0,0,0,0.35)] transition-all duration-300 hover:border-[#f9f6ee]/50 hover:from-[#fed9a0] hover:to-(--primary) hover:text-[#2a0818] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_6px_28px_rgba(235,190,105,0.35)] sm:w-auto sm:tracking-[0.2em] touch-manipulation"
          >
            {brand.bookCtaText || `Book Now With ${brand.name}`}
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
