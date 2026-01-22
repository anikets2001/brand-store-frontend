'use client';

import { useRef, useEffect } from 'react';
import RowCounter from '../../HeroBanner/subcomponents/RowCounter';
import ClassOption from '../../HeroBanner/subcomponents/ClassOption';

const PassengersDropdown = ({
  passengers,
  passengerDisplay,
  classDisplay,
  selectedClass,
  isOpen,
  onToggle,
  onClose,
  setSelectedClass,
  updatePassengers,
  onDone,
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

  return (
    <div className="relative" ref={dropdownRef} style={isOpen ? { zIndex: 99999 } : undefined}>
      <label className="text-[10px] text-(--primary) uppercase font-bold tracking-widest mb-2 block pl-1">
        Passengers
      </label>

      <div
        className="relative group h-16 bg-white/5 border border-white/10 rounded hover:border-(--primary)/50 transition-all cursor-pointer flex items-center px-4"
        onClick={(e) => {
          e.stopPropagation();
          onToggle();
        }}
      >
        <span className="material-symbols-outlined text-white/40 mr-3 group-hover:text-(--primary) transition-colors font-light shrink-0">
          group
        </span>
        <div className="flex flex-col flex-1 min-w-0">
          <span className="text-white font-display text-lg leading-tight whitespace-nowrap truncate">{passengerDisplay}</span>
          <span className="text-[10px] text-white/40 uppercase tracking-widest whitespace-nowrap truncate">{classDisplay}</span>
        </div>
        <span
          className="material-symbols-outlined text-white/40 text-sm transition-transform shrink-0 ml-2"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          expand_more
        </span>
      </div>

      {isOpen && (
        <div
          className="absolute w-full md:w-100 bg-[#0B1019]/95 backdrop-blur-xl border border-(--primary)/30 rounded-lg shadow-2xl overflow-hidden z-50"
          style={{ top: '100%', left: 0, marginTop: 8, zIndex: 99999 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 space-y-6">
            {/* Passengers */}
            <div>
              <h3 className="text-(--primary) text-xs font-bold uppercase tracking-widest mb-4">
                Passengers
              </h3>

              <div className="space-y-4">
                <RowCounter
                  title="Adults"
                  subtitle="12+ years"
                  value={passengers.adults}
                  onMinus={() => updatePassengers('adults', -1)}
                  onPlus={() => updatePassengers('adults', 1)}
                />

                  <RowCounter
                    title="Children"
                    subtitle="2-11 years"
                    value={passengers.children}
                    onMinus={() => updatePassengers('children', -1)}
                    onPlus={() => updatePassengers('children', 1)}
                  />

                  <RowCounter
                    title="Infants"
                    subtitle="Under 2 years"
                    value={passengers.infants}
                    onMinus={() => updatePassengers('infants', -1)}
                    onPlus={() => updatePassengers('infants', 1)}
                  />
              </div>
            </div>

            {/* Cabin class */}
            <div className="border-t border-white/10 pt-6">
              <h3 className="text-(--primary) text-xs font-bold uppercase tracking-widest mb-4">
                Cabin Class
              </h3>

              <div className="grid grid-cols-3 gap-3">
                <ClassOption
                  active={selectedClass === 'economy'}
                  icon="airline_seat_recline_normal"
                  label="Economy"
                  onClick={() => setSelectedClass('economy')}
                />
                <ClassOption
                  active={selectedClass === 'business'}
                  icon="airline_seat_flat"
                  label="Business"
                  onClick={() => setSelectedClass('business')}
                />
                <ClassOption
                  active={selectedClass === 'first'}
                  icon="airline_seat_individual_suite"
                  label="First"
                  onClick={() => setSelectedClass('first')}
                />
              </div>
            </div>

            <button
              onClick={onDone}
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

export default PassengersDropdown;