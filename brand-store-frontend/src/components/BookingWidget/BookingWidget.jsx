'use client';

import { useState } from 'react';
import FromDropdown from './subcomponents/FromDropdown';
import ToDropdown from './subcomponents/ToDropdown';
import DatesDropdown from './subcomponents/DatesDropdown';
import PassengersDropdown from './subcomponents/PassengersDropdown';

const BookingWidget = ({
  premiumMode,
  passengers,
  passengerDisplay,
  classDisplay,
  selectedClass,
  dropdownOpen,
  setDropdownOpen,
  setSelectedClass,
  updatePassengers,
  onDone,
}) => {
  const [fromAirport, setFromAirport] = useState({ code: 'BOM', city: 'Mumbai', country: 'UAE' });
  const [toAirport, setToAirport] = useState(null);
  const [fromDropdownOpen, setFromDropdownOpen] = useState(false);
  const [toDropdownOpen, setToDropdownOpen] = useState(false);
  const [datesDropdownOpen, setDatesDropdownOpen] = useState(false);
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const handleSwap = () => {
    const temp = fromAirport;
    setFromAirport(toAirport);
    setToAirport(temp);
  };
  return (
    <div className="max-w-6xl mx-auto">
      <div
        className={[
          'bg-[#0B1019]/70 backdrop-blur-2xl border border-(--primary)/20 rounded-2xl p-6 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-visible group mt-4 z-40',
          premiumMode !== 'economy' ? 'premium-glow premium-border' : '',
        ].join(' ')}
        style={
          premiumMode !== 'economy'
            ? {
              borderColor: 'rgba(214, 176, 109, 0.6)',
              boxShadow: '0 20px 60px rgba(214, 176, 109, 0.3), 0 0 100px rgba(214, 176, 109, 0.1)',
            }
            : undefined
        }
        id="bookingWidget"
      >
        <div className="absolute top-0 right-0 w-125 h-125 bg-(--primary)/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
        <div className="flex items-center space-x-8 mb-8 border-b border-white/5 pb-1 relative z-10">
          <div className="relative pb-4 text-(--primary) text-xs md:text-sm font-bold uppercase tracking-widest after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-(--primary) after:shadow-[0_0_10px_rgba(214,176,109,0.5)]">
            Book Flight
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 relative z-10">
          {/* From */}
          <div className="md:col-span-3">
            <FromDropdown
              selectedAirport={fromAirport}
              onSelect={setFromAirport}
              isOpen={fromDropdownOpen}
              onToggle={() => {
                setFromDropdownOpen((v) => !v);
                setToDropdownOpen(false);
                setDatesDropdownOpen(false);
                setDropdownOpen(false);
              }}
              onClose={() => setFromDropdownOpen(false)}
            />
          </div>

          {/* Swap */}
          <div className="md:col-span-1 flex items-center justify-center md:pt-6">
            <button
              onClick={handleSwap}
              className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-(--primary) hover:border-(--primary) transition-all bg-white/5 hover:bg-white/10 transform hover:rotate-180 duration-500"
            >
              <span className="material-symbols-outlined text-sm">swap_horiz</span>
            </button>
          </div>

          {/* To */}
          <div className="md:col-span-3">
            <ToDropdown
              selectedAirport={toAirport}
              onSelect={setToAirport}
              isOpen={toDropdownOpen}
              onToggle={() => {
                setToDropdownOpen((v) => !v);
                setFromDropdownOpen(false);
                setDatesDropdownOpen(false);
                setDropdownOpen(false);
              }}
              onClose={() => setToDropdownOpen(false)}
              excludeCode={fromAirport?.code}
            />
          </div>

          {/* Dates */}
          <div className="md:col-span-3">
            <DatesDropdown
              departureDate={departureDate}
              returnDate={returnDate}
              onDepartureDateChange={setDepartureDate}
              onReturnDateChange={setReturnDate}
              isOpen={datesDropdownOpen}
              onToggle={() => {
                setDatesDropdownOpen((v) => !v);
                setFromDropdownOpen(false);
                setToDropdownOpen(false);
                setDropdownOpen(false);
              }}
              onClose={() => setDatesDropdownOpen(false)}
            />
          </div>

          {/* Passengers */}
          <div className="md:col-span-2">
            <PassengersDropdown
              passengers={passengers}
              passengerDisplay={passengerDisplay}
              classDisplay={classDisplay}
              selectedClass={selectedClass}
              isOpen={dropdownOpen}
              onToggle={() => {
                setDropdownOpen((v) => !v);
                setFromDropdownOpen(false);
                setToDropdownOpen(false);
                setDatesDropdownOpen(false);
              }}
              onClose={() => setDropdownOpen(false)}
              setSelectedClass={setSelectedClass}
              updatePassengers={updatePassengers}
              onDone={onDone}
            />
          </div>
        </div>

        {/* Return / One Way / Multi + Search */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 relative z-0">
          <div className="flex space-x-6">
            <label className="flex items-center space-x-2 cursor-pointer group">
              <div className="w-4 h-4 rounded-full border border-white/30 flex items-center justify-center group-hover:border-(--primary)" />
              <span className="text-xs text-white/50 uppercase tracking-wider group-hover:text-white transition-colors">
                One Way
              </span>
            </label>

            <label className="flex items-center space-x-2 cursor-pointer group">
              <div className="w-4 h-4 rounded-full border border-white/30 flex items-center justify-center group-hover:border-(--primary) relative">
                <div className="absolute inset-0.5 rounded-full bg-(--primary)" />
              </div>
              <span className="text-xs text-white/90 font-medium uppercase tracking-wider group-hover:text-(--primary) transition-colors">
                Return
              </span>
            </label>
          </div>

          <button className="w-full md:w-auto px-12 h-14 bg-linear-to-r from-(--primary) to-(--primary-dark) text-(--navy-deep) font-bold uppercase tracking-[0.2em] text-xs rounded shadow-[0_4px_20px_-5px_rgba(214,176,109,0.3)] hover:shadow-[0_0_30px_rgba(214,176,109,0.4)] transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center border border-white/10">
            Search Flights
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingWidget;