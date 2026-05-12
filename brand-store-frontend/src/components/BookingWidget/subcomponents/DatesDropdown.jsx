'use client';

import { Calendar1 } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';
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
  const [activeField, setActiveField] = useState('departure');

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

  const fullRangeTitle =
    departureDate && returnDate
      ? `${formatDate(departureDate)} – ${formatDate(returnDate)}`
      : undefined;

  const openCalendar = (field) => {
    setActiveField(field);
    if (!isOpen) {
      onToggle();
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <label className="text-[10px] text-(--primary) uppercase font-bold tracking-widest mb-2 block pl-1">
        Dates
      </label>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        <button
          type="button"
          className={[
            'relative group h-16 bg-white/5 border rounded transition-all cursor-pointer flex items-center px-4 text-left',
            activeField === 'departure' && isOpen ? 'border-(--primary)/60' : 'border-white/10 hover:border-(--primary)/50',
          ].join(' ')}
          onClick={(e) => {
            e.stopPropagation();
            openCalendar('departure');
          }}
        >
          <Calendar1 className="text-white/40 mr-3 shrink-0 group-hover:text-(--primary) transition-colors font-light" />
          <div className="flex min-w-0 flex-1 flex-col justify-center gap-0.5 pr-1">
            <span className="text-[10px] uppercase tracking-widest text-white/45">Departure Date</span>
            <span className="block min-w-0 font-display text-base leading-snug text-white sm:text-lg md:whitespace-nowrap md:overflow-hidden md:text-ellipsis">
              {departureDate ? formatDate(departureDate) : 'Select Date'}
            </span>
          </div>
        </button>

        <button
          type="button"
          className={[
            'relative group h-16 bg-white/5 border rounded transition-all cursor-pointer flex items-center px-4 text-left',
            activeField === 'return' && isOpen ? 'border-(--primary)/60' : 'border-white/10 hover:border-(--primary)/50',
          ].join(' ')}
          onClick={(e) => {
            e.stopPropagation();
            openCalendar('return');
          }}
        >
          <Calendar1 className="text-white/40 mr-3 shrink-0 group-hover:text-(--primary) transition-colors font-light" />
          <div className="flex min-w-0 flex-1 flex-col justify-center gap-0.5 pr-1">
            <span className="text-[10px] uppercase tracking-widest text-white/45">Return Date</span>
            <span
              className="block min-w-0 font-display text-base leading-snug text-white sm:text-lg md:whitespace-nowrap md:overflow-hidden md:text-ellipsis"
              title={fullRangeTitle ?? (returnDate ? formatDate(returnDate) : undefined)}
            >
              {returnDate ? formatDate(returnDate) : 'Select Date'}
            </span>
          </div>
        </button>
      </div>

      {isOpen && (
        <div
          className="absolute left-0 right-0 top-full z-50 mt-2 w-full max-w-[min(100%,calc(100vw-2rem))] airindia-panel border border-(--primary)/20 rounded-lg overflow-hidden"
          style={{ zIndex: 99999 }}
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
              activeField={activeField}
              onActiveFieldChange={setActiveField}
              minDate={new Date().toISOString().split('T')[0]}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DatesDropdown;