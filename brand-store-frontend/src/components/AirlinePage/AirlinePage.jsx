'use client';

import { useState } from 'react';
import { useAirline } from '@/context/AirlineContext';
import Header from '../Header/Header';
import HeroBanner from '../HeroBanner/HeroBanner';
import CabinSection from '../CabinSection/CabinSection';
// import VRLinksSection from '../VRLinksSection/VRLinksSection';
import ExperienceSection from '../ExperienceSection/ExperienceSection';
import CampaignSection from '../CampaignSection/CampaignSection';
import NetworkProwess from '../NetworkProwess/NetworkProwess';
import WhatsNewSection from '../WhatsNewSection/WhatsNewSection';
import SocialHighlightsSection from '../SocialHighlightsSection/SocialHighlightsSection';
import Footer from '../Footer/Footer';
import {
  getPassengerDisplay,
  getClassDisplay,
  updatePassengers as updatePassengersHelper,
  onDone as onDoneHelper,
  getHeroTitleClass,
  getHeroTitleHtml,
} from './helpers';

export default function AirlinePage() {
  const airline = useAirline();
  const config = airline?.config || {};
  const hero = config.hero || {};
  // const featureCards = config.featureCards || [];
  // const distinction = config.distinction || {};

  const [passengers, setPassengers] = useState({ adults: 1, children: 0, infants: 0 });
  const [selectedClass, setSelectedClass] = useState('economy');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const passengerDisplay = getPassengerDisplay(passengers);
  const classDisplay = getClassDisplay(selectedClass);

  const [premiumMode, setPremiumMode] = useState('economy');
  const [headerImg, setHeaderImg] = useState(hero.defaultBackgroundImage || '');
  const [headerAlt, setHeaderAlt] = useState(hero.defaultBackgroundAlt || '');
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
      setHeaderOpacity,
      hero
    );
  };

  const heroTitleClass = getHeroTitleClass(premiumMode);
  const heroTitleHtml = getHeroTitleHtml(premiumMode, hero);

  if (!airline?.config) return null;

  return (
    <div className="min-h-screen antialiased selection:bg-(--primary) selection:text-black overflow-x-hidden pb-28 md:pb-24">
      <Header />

      <HeroBanner
        premiumMode={premiumMode}
        headerImg={headerImg}
        headerAlt={headerAlt}
        headerOpacity={headerOpacity}
        headerFilter={headerFilter}
        heroTitleClass={heroTitleClass}
        heroTitleHtml={heroTitleHtml}
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

      {/* SECTION: Upgraded Fleet and Cabins */}
      <CabinSection />

      {/* SECTION: Explore cabins in VR */}
      {/* <VRLinksSection /> */}

      {/* SECTION: Elevated Journeys */}
      <ExperienceSection />

      {/* SECTION: India's Only Premium Economy */}
      <CampaignSection />

      <NetworkProwess />

      {/* <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-(--background-charcoal) relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-black/40 to-transparent pointer-events-none" />
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20 relative z-10 border-b border-white/5 pb-6 md:pb-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-[0.25em] sm:tracking-[0.3em] text-(--primary) uppercase block mb-2 md:mb-4">
              {distinction.sectionLabel || 'The Air-India Distinction'}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
              {distinction.sectionTitle || 'Elevating Every'} <br />
              <span className="italic text-white/50">{distinction.sectionTitleItalic || 'Moment'}</span>
            </h2>
          </div>
          <div className="hidden md:block pb-2">
            <p className="text-white/40 text-sm tracking-wide max-w-xs text-right">
              {distinction.sectionTagline || 'Experience the art of travel with our award-winning service.'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {featureCards.map((card) => (
            <div key={card.id} className={`group relative ${card.mtClass}`}>
              <div className="h-64 sm:h-80 md:h-112.5 overflow-hidden relative rounded-sm">
                <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-500" />
                <Image
                  alt={card.alt}
                  src={card.img}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8 bg-linear-to-t from-black via-black/80 to-transparent z-20">
                  <div className="mb-4">
                    <span className="material-icons text-(--primary) text-3xl font-light">
                      {card.icon}
                    </span>
                  </div>
                  <h3 className="font-display text-xl md:text-2xl text-white mb-2">{card.title}</h3>
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
      </section> */}

      {/* SECTION: Exceptional Comfort */}
      {/* <ExceptionalComfort /> */}

      {/* SECTION: From 11 Cities */}
      {/* <CitiesSection cities={config.cities} /> */}

      {/* SECTION: Unmissable Offers */}
      {/* <OffersSection offers={config.offers} /> */}


      {/* SECTION: What's New at Air India */}
      <WhatsNewSection />

      {/* SECTION: Social Highlights */}
      <SocialHighlightsSection />

      {/* <ImageGallery images={config.galleryImages} /> */}

      {/* FOOTER (fixed bottom) */}
      <Footer />
    </div>
  );
}