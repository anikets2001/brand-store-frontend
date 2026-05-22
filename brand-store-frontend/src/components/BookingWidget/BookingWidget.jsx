'use client';

import { useState } from 'react';
import FromDropdown from './subcomponents/FromDropdown';
import ToDropdown from './subcomponents/ToDropdown';
import DatesDropdown from './subcomponents/DatesDropdown';
import PassengersDropdown from './subcomponents/PassengersDropdown';
import { ArrowRightLeft } from 'lucide-react';

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
  const [fromAirport, setFromAirport] = useState({ code: 'DEL', city: 'Delhi', country: 'India' });
  const [toAirport, setToAirport] = useState({ code: 'BOM', city: 'Mumbai', country: 'India' });
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
    <div className="w-full mx-auto lg:mt-[280px]">
      <div
        className={[
          'airindia-panel rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-10 border border-white/[0.06] shadow-[0_1px_0_rgba(249,246,238,0.04),0_20px_50px_rgba(83,18,81,0.4)] relative overflow-visible group mt-4 z-40',
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
          <div className="relative pb-4 text-(--primary) text-xs md:text-xl font-bold uppercase tracking-widest after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-(--primary) after:shadow-[0_0_10px_rgba(214,176,109,0.5)]">
            Book Flight
          </div>
        </div>

        
        <div className="flex flex-col xl:flex-row gap-3 xl:gap-4 relative z-10">
          <div className="flex flex-col md:flex-row md:flex-wrap xl:flex-nowrap items-stretch md:items-end gap-3 md:gap-3 flex-1 min-w-0">
          {/* From */}
          <div className="w-full md:w-[15rem] md:shrink-0">
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

          {/* Swap (mobile) */}
          <div className="flex md:hidden items-center justify-center shrink-0 -my-1">
            <button
              onClick={handleSwap}
              className="cursor-pointer w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-(--primary) hover:border-(--primary) transition-all bg-white/5 hover:bg-white/10 transform hover:rotate-180 duration-500"
            >
              <ArrowRightLeft size={16}/>
            </button>
          </div>

          {/* Swap (desktop) */}
          <div className="hidden md:flex items-center justify-center shrink-0 md:pb-2">
            <button
              onClick={handleSwap}
              className="cursor-pointer w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-(--primary) hover:border-(--primary) transition-all bg-white/5 hover:bg-white/10 transform hover:rotate-180 duration-500"
            >
              <ArrowRightLeft size={16}/>
            </button>
          </div>

          {/* To */}
          <div className="w-full md:w-[15rem] md:shrink-0">
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
          <div className="w-full md:flex-1 md:min-w-[17rem]">
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
          <div className="w-full md:w-[11rem] md:shrink-0">
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

          <div className="flex items-center justify-center w-full xl:w-auto xl:pt-6 shrink-0">
            <button className="cursor-pointer w-full md:w-auto min-h-[48px] px-8 md:px-10 py-3.5 h-14 bg-linear-to-r from-(--primary) to-(--primary-dark) text-(--navy-deep) font-bold uppercase tracking-[0.2em] text-xs rounded shadow-[0_4px_20px_-5px_rgba(214,176,109,0.3)] hover:shadow-[0_0_30px_rgba(214,176,109,0.4)] transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center border border-white/10 touch-manipulation whitespace-nowrap">
              Search Flights
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingWidget;