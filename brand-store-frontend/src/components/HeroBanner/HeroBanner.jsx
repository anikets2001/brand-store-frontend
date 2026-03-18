"use client";

import Image from "next/image";
import { useAirline } from "@/context/AirlineContext";
import BookingWidget from "../BookingWidget/BookingWidget";

const HeroBanner = ({
  premiumMode,
  headerImg,
  headerAlt,
  headerOpacity,
  headerFilter,
  heroTitleClass,
  heroTitleHtml,
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
      className="relative overflow-visible min-h-screen flex flex-col justify-center premium-theme z-20"
      style={{ background: 'var(--airindia-beige-warm)' }}
      id="mainHeader"
    >
      <div
        className="absolute inset-0 z-0 overflow-hidden"
        style={{ opacity: headerOpacity, filter: headerFilter }}
      >
        <div className="relative w-full h-full">
          <Image
            alt={headerAlt}
            src={headerImg}
            fill
            className="object-cover object-[center_42%] transition-opacity duration-1000"
            sizes="(max-width: 768px) 100vw, (max-width: 1920px) 100vw, 1920px"
            priority
            fetchPriority="high"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10 pt-6 sm:pt-10 pb-12 sm:pb-20">
        {/* HERO */}
        <div
          className={`text-center mb-16 ${
            premiumMode === "business" || premiumMode === "premiumEconomy"
              ? "space-y-6"
              : "space-y-8"
          }`}
          id="heroSection"
        >
          <h1
            className={heroTitleClass}
            dangerouslySetInnerHTML={{ __html: heroTitleHtml }}
            id="heroTitle"
            style={{ marginTop: "32px" }}
          />
          <div className="max-w-2xl mx-auto pt-8 transition-all duration-700 border-t border-[#f9f6ee]/12 shadow-[0_1px_0_rgba(235,190,105,0.12)]"></div>
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
      </div>
    </header>
  );
};

export default HeroBanner;
