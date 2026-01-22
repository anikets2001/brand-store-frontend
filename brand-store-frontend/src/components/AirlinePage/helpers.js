import { businessImage, economyImage, firstImage } from '@/utils/constants';

export function getPassengerDisplay(passengers) {
  let displayText = `${passengers.adults} Adult${passengers.adults > 1 ? 's' : ''}`;
  if (passengers.children > 0) displayText += `, ${passengers.children} Child${passengers.children > 1 ? 'ren' : ''}`;
  if (passengers.infants > 0) displayText += `, ${passengers.infants} Infant${passengers.infants > 1 ? 's' : ''}`;
  return displayText;
}

export function getClassDisplay(selectedClass) {
  const classNames = { economy: 'Economy', business: 'Business', first: 'First' };
  return classNames[selectedClass] ?? 'Economy';
}

export function applyPremiumTheme(
  mode,
  setPremiumMode,
  setHeaderImg,
  setHeaderAlt,
  setHeaderFilter,
  setHeaderOpacity
) {
  setPremiumMode(mode);
  setHeaderOpacity(0);
  setTimeout(() => {
    if (mode === 'business') {
      setHeaderImg(businessImage);
      setHeaderAlt('Etihad Business Studio Interior');
      setHeaderFilter('brightness(0.75) contrast(1.1) saturate(1.1)');
      setHeaderOpacity(0.95);
    } else if (mode === 'first') {
      setHeaderImg(firstImage);
      setHeaderAlt('Premium First Class');
      setHeaderFilter('');
      setHeaderOpacity(0.95);
    } else {
      setHeaderImg(economyImage);
      setHeaderAlt('High Altitude Clouds');
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
  setHeaderOpacity
) {
  applyPremiumTheme(
    'economy',
    setPremiumMode,
    setHeaderImg,
    setHeaderAlt,
    setHeaderFilter,
    setHeaderOpacity
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
  setHeaderOpacity
) {
  setDropdownOpen(false);
  if (selectedClass === 'business' || selectedClass === 'first') {
    applyPremiumTheme(
      selectedClass,
      setPremiumMode,
      setHeaderImg,
      setHeaderAlt,
      setHeaderFilter,
      setHeaderOpacity
    );
  } else {
    removePremiumTheme(
      setPremiumMode,
      setHeaderImg,
      setHeaderAlt,
      setHeaderFilter,
      setHeaderOpacity
    );
  }
}

export function getHeroTitleClass(premiumMode) {
  return premiumMode === 'business' || premiumMode === 'first'
    ? 'font-display text-5xl md:text-7xl lg:text-9xl text-white tracking-wide leading-tight hero-title-shadow'
    : 'font-display text-5xl md:text-7xl lg:text-8xl text-white tracking-wide leading-none drop-shadow-2xl transition-all duration-700';
}

export function getHeroTitleHtml(premiumMode) {
  return premiumMode === 'business' || premiumMode === 'first'
    ? 'The Art of <br/><span class="text-gold-gradient italic pr-2 font-light">Arriving</span>'
    : 'Fly Beyond <br /><span class="text-gold-gradient italic pr-2 font-light">the Expected</span>';
}

export function getHeroSubtitle(premiumMode) {
  if (premiumMode === 'business') {
    return 'Exclusively Business';
  } else if (premiumMode === 'first') {
    return 'Exclusively First';
  } else {
    return 'Curated for the connoisseur of travel';
  }
}