'use client';

import FlightCard from '../FlightCard/FlightCard';
import { flightData } from '../FlightCard/config';
import BookingWidget from '../BookingWidget/BookingWidget';

const HeroBanner = ({
  premiumMode,
  headerImg,
  headerAlt,
  headerOpacity,
  headerFilter,
  heroTitleClass,
  heroTitleHtml,
  heroSubtitle,
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
  return (
    <header
      className="relative overflow-hidden min-h-screen flex flex-col justify-center premium-theme"
      style={{ background: 'var(--navy-deep)' }}
      id="mainHeader"
    >
      <div className="absolute inset-0 z-0">
        <img
          alt={headerAlt}
          className="w-full h-full object-cover scale-105 float-slow transition-opacity duration-1000"
          src={headerImg}
          style={{ opacity: headerOpacity, filter: headerFilter }}
        />
      </div>

      <div className="absolute inset-0 z-0 bg-linear-to-br from-[#0f172a]/60 via-[#1e293b]/40 to-[#000000]/50 mix-blend-multiply" />
      <div className="absolute inset-0 z-0 bg-linear-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/20" />
      <div className="absolute top-1/4 right-0 w-200 h-200 bg-blue-500/5 rounded-full blur-[120px] mix-blend-overlay animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 w-full relative z-10 pt-10 pb-20">
        {/* HERO */}
        <div
          className={`text-center mb-16 ${premiumMode === 'business' || premiumMode === 'first' ? 'space-y-6' : 'space-y-8'
            }`}
          id="heroSection"
        >
          <h1 className={heroTitleClass} dangerouslySetInnerHTML={{ __html: heroTitleHtml }} id="heroTitle" />
          <div
            className={[
              'text-sm md:text-lg font-light tracking-[0.2em] uppercase max-w-2xl mx-auto pt-8 mt-8 transition-all duration-700',
              premiumMode === 'economy' ? 'text-blue-100/70 border-t border-white/10' : '',
            ].join(' ')}
            id="heroSubtitle"
          >
            {/* {heroSubtitle} */}
            <div className="flex items-center justify-center space-x-4">
              <span className="h-px w-16 bg-linear-to-r from-transparent to-(--primary)" />
              <p className="text-(--primary)/90 text-sm md:text-base font-display italic tracking-[0.15em] uppercase drop-shadow-md">
                {heroSubtitle}
              </p>
              <span className="h-px w-16 bg-linear-to-l from-transparent to-(--primary)" />
            </div>
          </div>
        </div>

        {/* BOOKING WIDGET */}
        <BookingWidget
          premiumMode={premiumMode}
          passengers={passengers}
          passengerDisplay={passengerDisplay}
          classDisplay={classDisplay}
          selectedClass={selectedClass}
          dropdownOpen={dropdownOpen}
          setDropdownOpen={setDropdownOpen}
          setSelectedClass={setSelectedClass}
          updatePassengers={updatePassengers}
          onDone={onDone}
        />

        {/* EXPERIENCE CARDS */}
        <div className="mt-12 flex flex-col space-y-6 relative z-20">
          <div className="flex justify-between items-end mb-2 px-1">
            <h3 className="text-(--primary) text-sm font-bold uppercase tracking-[0.25em] drop-shadow-md">
              Select Your Experience
            </h3>
            <span className="text-(--primary)/60 text-[10px] uppercase tracking-wider">
              Prices per person
            </span>
          </div>

          {flightData.map((flight) => (
            <FlightCard
              key={flight.id}
              badge={flight.badge}
              img={flight.img}
              fromTime={flight.fromTime}
              fromCode={flight.fromCode}
              toTime={flight.toTime}
              toCode={flight.toCode}
              duration={flight.duration}
              price={flight.price}
              fare={flight.fare}
            />
          ))}

          <div className="flex justify-center pt-8 pb-4">
            <button className="text-white/40 hover:text-white transition-colors duration-300 text-[10px] font-bold uppercase tracking-[0.25em] flex flex-col items-center group">
              View All Flights
              <span className="material-symbols-outlined text-lg mt-2 group-hover:translate-y-1 transition-transform text-(--primary)">
                keyboard_arrow_down
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroBanner;