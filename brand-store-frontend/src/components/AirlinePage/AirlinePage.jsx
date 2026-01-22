'use client';

import { economyImage } from '@/utils/constants';
import { useState } from 'react';
import Header from '../Header/Header';
import HeroBanner from '../HeroBanner/HeroBanner';
import { featureCards } from './config';
import GlobalConnections from '../GlobalConnections/GlobalConnections';
import ExceptionalComfort from '../ExceptionalComfort/ExceptionalComfort';
import CitiesSection from '../CitiesSection/CitiesSection';
import OffersSection from '../OffersSection/OffersSection';
import Footer from '../Footer/Footer';
import ImageGallery from '../ImageGallery/ImageGallery';
import {
  getPassengerDisplay,
  getClassDisplay,
  updatePassengers as updatePassengersHelper,
  onDone as onDoneHelper,
  getHeroTitleClass,
  getHeroTitleHtml,
  getHeroSubtitle,
} from './helpers';

export default function AirplanePage() {
  const [passengers, setPassengers] = useState({ adults: 1, children: 0, infants: 0 });
  const [selectedClass, setSelectedClass] = useState('economy');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const passengerDisplay = getPassengerDisplay(passengers);
  const classDisplay = getClassDisplay(selectedClass);

  const [premiumMode, setPremiumMode] = useState('economy');
  const [headerImg, setHeaderImg] = useState(economyImage);
  const [headerAlt, setHeaderAlt] = useState('High Altitude Clouds');
  const [headerOpacity, setHeaderOpacity] = useState(0.9);
  const [headerFilter, setHeaderFilter] = useState('');

  const updatePassengers = (type, change) => {
    updatePassengersHelper(setPassengers, type, change);
  };

  const onDone = () => {
    onDoneHelper(
      selectedClass,
      setDropdownOpen,
      setPremiumMode,
      setHeaderImg,
      setHeaderAlt,
      setHeaderFilter,
      setHeaderOpacity
    );
  };

  const heroTitleClass = getHeroTitleClass(premiumMode);
  const heroTitleHtml = getHeroTitleHtml(premiumMode);
  const heroSubtitle = getHeroSubtitle(premiumMode);

  return (
    <div className="min-h-screen antialiased selection:bg-(--primary) selection:text-black">
      <Header />

      <HeroBanner
        premiumMode={premiumMode}
        headerImg={headerImg}
        headerAlt={headerAlt}
        headerOpacity={headerOpacity}
        headerFilter={headerFilter}
        heroTitleClass={heroTitleClass}
        heroTitleHtml={heroTitleHtml}
        heroSubtitle={heroSubtitle}
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

      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-(--background-charcoal) relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-black/40 to-transparent pointer-events-none" />
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 relative z-10 border-b border-white/5 pb-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-[0.3em] text-(--primary) uppercase block mb-4">
              The Air-India Distinction
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-white leading-tight">
              Elevating Every <br />
              <span className="italic text-white/50">Moment</span>
            </h2>
          </div>
          <div className="hidden md:block pb-2">
            <p className="text-white/40 text-sm tracking-wide max-w-xs text-right">
              Experience the art of travel with our award-winning service.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {featureCards.map((card) => (
            <div key={card.id} className={`group relative ${card.mtClass}`}>
              <div className="h-112.5 overflow-hidden relative rounded-sm">
                <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-500" />
                <img
                  alt={card.alt}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                  src={card.img}
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-linear-to-t from-black via-black/80 to-transparent z-20">
                  <div className="mb-4">
                    <span className="material-icons text-(--primary) text-3xl font-light">
                      {card.icon}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl text-white mb-2">{card.title}</h3>
                  <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
                    <p className="text-white/70 text-sm leading-relaxed mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION: Global Connections */}
      <GlobalConnections />

      {/* SECTION: Exceptional Comfort */}
      <ExceptionalComfort />

      {/* SECTION: From 11 Cities */}
      <CitiesSection />

      {/* SECTION: Unmissable Offers */}
      <OffersSection />

      {/* SECTION: U.S. Preclearance */}
      {/* <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[color:var(--background-dark)]">
          <div className="max-w-6xl mx-auto bg-gradient-to-r from-[#151515] to-[#1a1a1a] rounded-2xl overflow-hidden shadow-2xl border border-white/5">
            <div className="grid md:grid-cols-2">
              <div className="relative h-80 md:h-auto overflow-hidden">
                <img
                  alt="US Preclearance"
                  className="absolute inset-0 w-full h-full object-cover opacity-90"
                  src={usPreclearanceImage}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
              </div>

              <div className="p-12 md:p-16 flex flex-col justify-center">
                <span className="text-[color:var(--primary)] text-xs font-bold uppercase tracking-[0.2em] mb-4">
                  Seamless Travel
                </span>
                <h3 className="font-display text-3xl mb-6 text-white">U.S. Preclearance</h3>
                <p className="text-white/60 mb-8 text-sm leading-relaxed font-light">
                  Exclusively with Etihad, complete your US immigration and customs inspections in Abu Dhabi. Arrive in
                  the US as a domestic passenger, bypassing queues and stepping straight into your journey.
                </p>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-[color:var(--primary)]" />
                  <span className="w-2 h-2 rounded-full bg-white/10" />
                  <span className="w-2 h-2 rounded-full bg-white/10" />
                </div>
              </div>
            </div>
          </div>
        </section> */}

      <ImageGallery />

      {/* FOOTER (fixed bottom like original) */}
      <Footer />
    </div>
  );
}