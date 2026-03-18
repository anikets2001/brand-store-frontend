export function getPassengerDisplay(passengers) {
  let displayText = `${passengers.adults} Adult${passengers.adults > 1 ? 's' : ''}`;
  if (passengers.children > 0) displayText += `, ${passengers.children} Child${passengers.children > 1 ? 'ren' : ''}`;
  if (passengers.infants > 0) displayText += `, ${passengers.infants} Infant${passengers.infants > 1 ? 's' : ''}`;
  return displayText;
}

export function getClassDisplay(selectedClass) {
  const classNames = {
    economy: 'Economy',
    business: 'Business',
    premiumEconomy: 'Premium Economy',
  };
  return classNames[selectedClass] ?? 'Economy';
}

export function applyPremiumTheme(
  mode,
  setPremiumMode,
  setHeaderImg,
  setHeaderAlt,
  setHeaderFilter,
  setHeaderOpacity,
  hero
) {
  const h = hero || {};
  setPremiumMode(mode);
  setHeaderOpacity(0);
  setTimeout(() => {
    if (mode === 'business') {
      setHeaderImg(h.economyImage ?? h.defaultBackgroundImage ?? '');
      setHeaderAlt('Business Studio Interior');
      setHeaderFilter('brightness(0.75) contrast(1.1) saturate(1.1)');
      setHeaderOpacity(0.95);
    } else if (mode === 'premiumEconomy') {
      setHeaderImg(h.economyImage ?? h.defaultBackgroundImage ?? '');
      setHeaderAlt('Premium Economy cabin');
      setHeaderFilter('brightness(0.8) contrast(1.05) saturate(1.05)');
      setHeaderOpacity(0.95);
    } else {
      setHeaderImg(h.economyImage ?? h.defaultBackgroundImage ?? '');
      setHeaderAlt(h.defaultBackgroundAlt || 'High Altitude Clouds');
      setHeaderFilter('');
      setHeaderOpacity(0.9);
    }
  }, 300);
}

export function removePremiumTheme(
  setPremiumMode,
  setHeaderImg,
  setHeaderAlt,
  setHeaderFilter,
  setHeaderOpacity,
  hero
) {
  applyPremiumTheme(
    'economy',
    setPremiumMode,
    setHeaderImg,
    setHeaderAlt,
    setHeaderFilter,
    setHeaderOpacity,
    hero
  );
}

export function updatePassengers(setPassengers, type, change) {
  setPassengers((prev) => {
    const next = { ...prev };
    if (type === 'adults') next.adults = Math.max(1, Math.min(9, next.adults + change));
    if (type === 'children') next.children = Math.max(0, Math.min(8, next.children + change));
    if (type === 'infants') next.infants = Math.max(0, Math.min(8, next.infants + change));
    return next;
  });
}

export function onDone(
  selectedClass,
  setDropdownOpen,
  setPremiumMode,
  setHeaderImg,
  setHeaderAlt,
  setHeaderFilter,
  setHeaderOpacity,
  hero
) {
  setDropdownOpen(false);
  if (
    selectedClass === 'business' ||
    selectedClass === 'premiumEconomy'
  ) {
    applyPremiumTheme(
      selectedClass,
      setPremiumMode,
      setHeaderImg,
      setHeaderAlt,
      setHeaderFilter,
      setHeaderOpacity,
      hero
    );
  } else {
    removePremiumTheme(
      setPremiumMode,
      setHeaderImg,
      setHeaderAlt,
      setHeaderFilter,
      setHeaderOpacity,
      hero
    );
  }
}

export function getHeroTitleClass(premiumMode) {
  /* Slightly reduced sizes so the hero can accommodate the aircraft in full */
  return premiumMode === 'business' || premiumMode === 'premiumEconomy'
    ? 'font-display text-2xl sm:text-4xl md:text-6xl lg:text-8xl text-white tracking-wide leading-tight hero-title-shadow px-2'
    : 'font-display text-2xl sm:text-4xl md:text-6xl lg:text-7xl text-white tracking-wide leading-none drop-shadow-2xl transition-all duration-700 px-2';
}

export function getHeroTitleHtml(premiumMode, hero) {
  const h = hero || {};
  if (premiumMode === 'business' && h.businessTitleHtml) return h.businessTitleHtml;
  if (premiumMode === 'premiumEconomy' && h.premiumEconomyTitleHtml) {
    return h.premiumEconomyTitleHtml;
  }
  if (premiumMode === 'business' || premiumMode === 'premiumEconomy') {
    return 'The Art of <br/><span class="text-gold-gradient italic pr-2 font-light">Arriving</span>';
  }
  return h.defaultTitleHtml || 'Fly Beyond <br /><span class="text-gold-gradient italic pr-2 font-light">the Expected</span>';
}