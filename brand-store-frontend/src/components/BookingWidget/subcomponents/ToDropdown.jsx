'use client';

import { useRef, useEffect } from 'react';
import { airports } from '../config';

const ToDropdown = ({ selectedAirport, onSelect, isOpen, onToggle, onClose, excludeCode }) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const displayAirport = selectedAirport || { code: '', city: 'Destination' };
  const availableAirports = excludeCode ? airports.filter((a) => a.code !== excludeCode) : airports;

  return (
    <div className="relative" ref={dropdownRef}>
      <label className="text-[10px] text-(--primary) uppercase font-bold tracking-widest mb-2 block pl-1">
        To
      </label>
      <div
        className="relative group h-16 bg-white/5 border border-white/10 rounded hover:border-(--primary)/50 transition-all cursor-pointer flex items-center px-4"
        onClick={(e) => {
          e.stopPropagation();
          onToggle();
        }}
      >
        <span className="material-symbols-outlined text-white/40 mr-3 group-hover:text-(--primary) transition-colors font-light">
          flight_land
        </span>
        <div className="flex flex-col flex-1">
          <span className="text-white font-display text-lg leading-tight">{displayAirport.city}</span>
          <span className="text-[10px] text-white/40 uppercase tracking-widest">{displayAirport.code}</span>
        </div>
        <span
          className="material-symbols-outlined text-white/40 text-sm transition-transform"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          expand_more
        </span>
      </div>

      {isOpen && (
        <div
          className="absolute w-full md:w-87.5 bg-[#0B1019]/95 backdrop-blur-xl border border-(--primary)/30 rounded-lg shadow-2xl overflow-hidden z-50"
          style={{ top: '100%', left: 0, marginTop: 8 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="max-h-64 overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-(--primary)/40 [&::-webkit-scrollbar-thumb]:transition-colors">
            {availableAirports.map((airport) => (
              <div
                key={airport.code}
                className="px-4 py-3 hover:bg-white/5 cursor-pointer transition-colors border-b border-white/5 last:border-b-0"
                onClick={() => {
                  onSelect(airport);
                  onClose();
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-white font-display text-base">{airport.city}</span>
                    <span className="text-[10px] text-white/40 uppercase tracking-widest">
                      {airport.code} • {airport.country}
                    </span>
                  </div>
                  {selectedAirport?.code === airport.code && (
                    <span className="material-symbols-outlined text-(--primary) text-sm">
                      check
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ToDropdown;