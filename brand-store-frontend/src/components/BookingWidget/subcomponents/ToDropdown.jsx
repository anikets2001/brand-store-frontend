"use client";

import { useRef, useEffect, useState } from "react";
import { airports } from "../config";
import { Check, ChevronDown, ChevronUp, PlaneLanding, Search } from "lucide-react";

const ToDropdown = ({
  selectedAirport,
  onSelect,
  isOpen,
  onToggle,
  onClose,
  excludeCode,
}) => {
  const dropdownRef = useRef(null);
  const [citySearch, setCitySearch] = useState("");

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) setCitySearch("");
  }, [isOpen]);

  const displayAirport = selectedAirport || { code: "", city: "Destination" };
  const availableAirports = excludeCode
    ? airports.filter((a) => a.code !== excludeCode)
    : airports;

  return (
    <div className="relative w-full" ref={dropdownRef}>
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
        <PlaneLanding className="text-white/40 mr-3 group-hover:text-(--primary) transition-colors font-light" />
        <div className="flex flex-col flex-1">
          <span className="text-white font-display text-lg leading-tight">
            {displayAirport.city}
          </span>
          <span className="text-[10px] text-white/40 uppercase tracking-widest">
            {displayAirport.code}
          </span>
        </div>

        {isOpen ? (
          <ChevronUp className="text-white/40 text-sm transition-transform" />
        ) : (
          <ChevronDown className="text-white/40 text-sm transition-transform" />
        )}
      </div>

      {isOpen && (
        <div
          className="absolute w-full md:w-87.5 airindia-panel border border-(--primary)/20 rounded-lg overflow-hidden z-50"
          style={{ top: "100%", left: 0, marginTop: 8 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="border-b border-white/10 p-3">
            <label htmlFor="to-city-search" className="sr-only">
              Search cities
            </label>
            <div className="relative flex items-center">
              <Search
                className="pointer-events-none absolute left-3 h-4 w-4 text-white/35"
                strokeWidth={2}
                aria-hidden
              />
              <input
                id="to-city-search"
                type="search"
                value={citySearch}
                onChange={(e) => setCitySearch(e.target.value)}
                placeholder="Search cities…"
                autoComplete="off"
                className="w-full rounded-md border border-white/10 bg-white/5 py-2.5 pl-9 pr-3 text-sm text-white placeholder:text-white/35 outline-none transition-colors focus:border-(--primary)/50 focus:ring-1 focus:ring-(--primary)/30"
                onClick={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
              />
            </div>
          </div>
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
                    <span className="text-white font-display text-base">
                      {airport.city}
                    </span>
                    <span className="text-[10px] text-white/40 uppercase tracking-widest">
                      {airport.code} • {airport.country}
                    </span>
                  </div>
                  {selectedAirport?.code === airport.code && (
                    <Check className="text-(--primary) text-sm"/>
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
