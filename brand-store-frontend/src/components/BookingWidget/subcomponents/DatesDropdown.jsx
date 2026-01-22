'use client';

import { useRef, useEffect } from 'react';

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
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const displayText = () => {
    if (departureDate && returnDate) {
      return `${formatDate(departureDate)} - ${formatDate(returnDate)}`;
    }
    if (departureDate) {
      return formatDate(departureDate);
    }
    return 'Select Dates';
  };

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
        <span className="material-symbols-outlined text-white/40 mr-3 group-hover:text-(--primary) transition-colors font-light">
          calendar_month
        </span>
        <div className="flex flex-col flex-1">
          <span className="text-white font-display text-lg leading-tight">{displayText()}</span>
          <span className="text-[10px] text-white/40 uppercase tracking-widest">Round Trip</span>
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
          className="absolute w-full md:w-100 bg-[#0B1019]/95 backdrop-blur-xl border border-(--primary)/30 rounded-lg shadow-2xl overflow-hidden z-50"
          style={{ top: '100%', left: 0, marginTop: 8 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 space-y-6">
            {/* Date Selection */}
            <div className="space-y-4">
              <div>
                <label className="text-(--primary) text-xs font-bold uppercase tracking-widest mb-2 block">
                  Departure Date
                </label>
                <input
                  type="date"
                  value={departureDate || ''}
                  onChange={(e) => onDepartureDateChange(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-2 text-white focus:border-(--primary) focus:outline-none"
                />
              </div>

              <div>
                <label className="text-(--primary) text-xs font-bold uppercase tracking-widest mb-2 block">
                  Return Date
                </label>
                <input
                  type="date"
                  value={returnDate || ''}
                  onChange={(e) => onReturnDateChange(e.target.value)}
                  min={departureDate || new Date().toISOString().split('T')[0]}
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-2 text-white focus:border-(--primary) focus:outline-none"
                />
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full bg-(--primary) hover:bg-(--primary-dark) text-(--navy-deep) font-bold uppercase tracking-[0.15em] text-xs py-3 rounded transition-colors duration-300"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DatesDropdown;