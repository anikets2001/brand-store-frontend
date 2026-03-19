'use client';

import { Calendar1, ChevronDown, ChevronUp } from 'lucide-react';
import { useRef, useEffect } from 'react';
import BookingCalendar, { parseISODateLocal } from './BookingCalendar';

const DatesDropdown = ({
  departureDate,
  returnDate,
  onDepartureDateChange,
  onReturnDateChange,
  isOpen,
  onToggle,
  onClose,
}) => {
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

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = parseISODateLocal(dateString);
    if (!date) return '';
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  /** Shorter range for the trigger (avoids awkward mid-date line breaks). */
  const formatCompactRange = (depIso, retIso) => {
    const dep = parseISODateLocal(depIso);
    const ret = parseISODateLocal(retIso);
    if (!dep || !ret) return '';
    const sameYear = dep.getFullYear() === ret.getFullYear();
    const depPart = sameYear
      ? dep.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
      : dep.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    const retPart = ret.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    return `${depPart} – ${retPart}`;
  };

  const displayText = () => {
    if (departureDate && returnDate) {
      return formatCompactRange(departureDate, returnDate);
    }
    if (departureDate) {
      return formatDate(departureDate);
    }
    return 'Select Dates';
  };

  const fullRangeTitle =
    departureDate && returnDate
      ? `${formatDate(departureDate)} – ${formatDate(returnDate)}`
      : undefined;

  return (
    <div className="relative" ref={dropdownRef}>
      <label className="text-[10px] text-(--primary) uppercase font-bold tracking-widest mb-2 block pl-1">
        Dates
      </label>
      <div
        className="relative group h-16 bg-white/5 border border-white/10 rounded hover:border-(--primary)/50 transition-all cursor-pointer flex items-center px-4"
        onClick={(e) => {
          e.stopPropagation();
          onToggle();
        }}
      >
        <Calendar1 className="text-white/40 mr-3 shrink-0 group-hover:text-(--primary) transition-colors font-light" />
        <div className="flex min-w-0 flex-1 flex-col justify-center gap-0.5 pr-1">
          <span
            className="block min-w-0 font-display text-base leading-snug text-white sm:text-lg [overflow-wrap:anywhere] md:whitespace-nowrap md:overflow-hidden md:text-ellipsis"
            title={fullRangeTitle ?? (departureDate ? formatDate(departureDate) : undefined)}
          >
            {displayText()}
          </span>
          {/* <span className="text-[10px] uppercase tracking-widest text-white/40">Round Trip</span> */}
        </div>
        {isOpen ? (
          <ChevronUp className="h-4 w-4 shrink-0 text-white/40 transition-transform" />
        ) : (
          <ChevronDown className="h-4 w-4 shrink-0 text-white/40 transition-transform" />
        )}
      </div>

      {isOpen && (
        <div
          className="absolute w-full md:w-100 airindia-panel border border-(--primary)/20 rounded-lg overflow-hidden z-50"
          style={{ top: '100%', left: 0, marginTop: 8 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">
                <p className="text-[10px] font-bold uppercase tracking-widest text-(--primary)">Departure</p>
                <p className="mt-1 font-display text-lg text-white">
                  {departureDate ? formatDate(departureDate) : '—'}
                </p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">
                <p className="text-[10px] font-bold uppercase tracking-widest text-(--primary)">Return</p>
                <p className="mt-1 font-display text-lg text-white">
                  {returnDate ? formatDate(returnDate) : '—'}
                </p>
              </div>
            </div>

            <BookingCalendar
              departureDate={departureDate}
              returnDate={returnDate}
              onDepartureDateChange={onDepartureDateChange}
              onReturnDateChange={onReturnDateChange}
              minDate={new Date().toISOString().split('T')[0]}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DatesDropdown;