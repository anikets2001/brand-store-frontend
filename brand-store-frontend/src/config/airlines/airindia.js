/**
 * Air India brand-store config.
 * All copy, asset paths, and section data for the Air India brand page.
 * Uses only images from public/assets/air-india/ (no utils/constants).
 */

/** Must match basePath in next.config.mjs so image requests use the correct URL */
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '/brand-store';

/** Build full asset URL and encode spaces/special chars so images load correctly */

// Cover & logo (1- Aircraft Image_Logo_Background)
const heroCoverImage = `/assets/air-india/images/aircraft-images/Reference.jpg`;
const imgWiFi = `/assets/air-india/images/experience/in-flight-wifi.jpg`;
const imgSignatureAmenities = `/assets/air-india/images/experience/business-class-coupe.jpg`;
const imgGourmetDining = `/assets/air-india/images/experience/business.jpg`;
const imgEntertainment = `/assets/air-india/images/experience/PEY_IFE.jpg`;
const imgMaharajaClub = `/assets/air-india/images/experience/MC.png`;
const imgLounges = `/assets/air-india/images/experience/lounges.jpg`;
const imgWarmHospitality = `/assets/air-india/images/experience/Crew_Group.jpg`;


const config = {
  brand: {
    name: 'Air India',
    displayName: 'Air India',
    logoUrl: `/assets/air-india/images/aircraft-images/AI logo.png`,
    bookCtaText: 'Book Now With Air India',
    partnerLogoUrl: `/assets/air-india/images/yatra-logo.png`,
    partnerLogoAlt: 'Yatra – booking partner',
  },

  assets: {
    vrBasePath: `/assets/air-india/air-india-vr/VR`,
  },

  /** VR WebGL cabin experiences; path is relative to assets.vrBasePath, ending at WebGL folder that contains index.html */
  vrExperiences: [
    { id: 'all-cabins', label: 'Explore All Cabins (VR)', path: 'Builds/All Cabins Build/WebGL' },
    { id: 'business', label: 'Business cabin (VR)', path: 'Builds/Individual Builds/Business/WebGL' },
    { id: 'economy', label: 'Economy cabin (VR)', path: 'Builds/Individual Builds/Economy/WebGL' },
    { id: 'premium-economy', label: 'Premium Economy cabin (VR)', path: 'Builds/Individual Builds/PremiumEconomy/WebGL' },
  ],

  hero: {
    defaultTitleHtml: 'The New Air India <br /><span class="text-gold-gradient italic pr-2 font-light">Experience</span>',
    defaultBackgroundImage: heroCoverImage,
    defaultBackgroundAlt: 'Aircraft with golden hued sky',
    businessTitleHtml: 'The New Air India <br /><span class="text-gold-gradient italic pr-2 font-light">Experience</span>',
    businessSubtitle: 'Exclusively Business',
    firstTitleHtml: 'The New Air India <br/><span class="text-gold-gradient italic pr-2 font-light">Experience</span>',
    firstSubtitle: 'Exclusively First',
    businessImage: imgSignatureAmenities,
    firstImage: imgSignatureAmenities,
    economyImage: heroCoverImage,
  },

  /** Flight result / experience cards in hero (Select Your Experience). Images from assets, not constants. */
  heroFlightCards: [
    {
      id: 1,
      img: imgGourmetDining,
      fromTime: '10:00',
      fromCode: 'LHR',
      toTime: '20:30',
      toCode: 'AUH',
      duration: '7h 30m',
      price: '4,250',
      fare: 'Business Saver',
    },
    {
      id: 2,
      img: imgSignatureAmenities,
      fromTime: '14:15',
      fromCode: 'LHR',
      toTime: '00:45',
      toCode: 'AUH',
      duration: '7h 30m',
      price: '4,520',
      fare: 'Business Flex',
    },
    {
      id: 3,
      img: imgLounges,
      fromTime: '21:00',
      fromCode: 'LHR',
      toTime: '07:30',
      toCode: 'AUH',
      duration: '7h 30m',
      price: '3,980',
      fare: 'Business Choice',
    },
  ],

  distinction: {
    sectionLabel: 'The Air-India Distinction',
    sectionTitle: 'Elevating Every',
    sectionTitleItalic: 'Moment',
    sectionTagline: 'Experience the art of travel with our award-winning service.',
  },

  cabinVideos: [
    {
      id: 1,
      videoSrc: 'https://ns.yatracdn.com/common/airIndia/B787-9_50secs_1.mp4',
      headline: 'Experience our bespoke B787-9',
      body: 'Designed and built exclusively for Air India, the first line-fit wide-body aircraft delivers a world-class flying experience.',
    },
    {
      id: 2,
      videoSrc: 'https://ns.yatracdn.com/common/airIndia/A350_Business-Hires.mp4',
      headline: 'Business on A350',
      body: 'Experience long-haul journeys on the A350-900, where luxury, privacy, and comfort come together.',
    },
    {
      id: 3,
      videoSrc: 'https://ns.yatracdn.com/common/airIndia/A320_Business-Hires.mp4',
      headline: 'Business on A320',
      body: 'Fly in refined comfort with advanced features and an unparalleled flying experience on short-haul travel.',
    },
    {
      id: 4,
      videoSrc: 'https://ns.yatracdn.com/common/airIndia/A320_PEY-Hires.mp4',
      headline: 'Premium Economy',
      body: "Experience India's only premium economy with priority check-in and boarding, hot gourmet meals and extra leg space.",
    },
    {
      id: 5,
      videoSrc: 'https://ns.yatracdn.com/common/airIndia/A320_Economy-Hires.mp4',
      headline: 'Economy',
      body: 'Sit back and relax with comfortable seating and warm hospitality.',
    },
  ],

  campaign: {
    headline: "India's Only Premium Economy",
    bodyCopy:
      'Enjoy priority check-in and boarding, extra legroom, gourmet meals, hot towel to keep you fresh, all complemented by our warm and intuitive service.',
    tagline: "It is your place in the sky, it's the premium you deserve.",
    videoSrc: 'https://ns.yatracdn.com/common/airIndia/Film_1-30sec_HD.mp4',
  },

  experienceItems: [
    {
      id: 1,
      title: 'Warm Indian Hospitality',
      line1: '5000+ newly trained cabin crew',
      line2: 'Half a million passengers experiencing the change every week',
      imageSrc: imgWarmHospitality,
      alt: 'Cabin crew',
    },
    {
      id: 2,
      title: 'In-Flight Wi-Fi',
      line1: 'Seamless connectivity at 35000 ft.',
      line2: 'Available on select routes and aircraft',
      imageSrc: imgWiFi,
      alt: 'In-Flight Wi-Fi',
    },
    {
      id: 3,
      title: 'Gourmet Dining in the skies',
      line1: 'Specially curated meals',
      line2: 'Wide selection of premium beverages',
      imageSrc: imgGourmetDining,
      alt: 'Gourmet dining',
    },
    {
      id: 4,
      title: 'Signature Amenities',
      line1: 'Luxury amenity kits on select routes and cabin class',
      line2: 'Full-flat beds with award winning soft-furnishing',
      imageSrc: imgSignatureAmenities,
      alt: 'Signature amenities',
    },
    {
      id: 5,
      title: 'Non-Stop Entertainment',
      line1: 'Enjoy 1200+ hrs of entertainment with latest movies, TV shows and music',
      line2: 'Stream content on personal devices. Available on select routes and aircraft',
      imageSrc: imgEntertainment,
      alt: 'In-flight entertainment',
    },
    {
      id: 6,
      title: 'Maharaja Club',
      line1: 'Exclusive rewards and privileges for frequent flyers',
      line2: 'Earn Maharaja points on Air India and redeem across 24 Star Alliance partner airlines',
      imageSrc: imgMaharajaClub,
      alt: 'Maharaja Club',
    },
    {
      id: 7,
      title: 'World-Class Lounges',
      line1: 'Exclusive Air India lounges now open in Bengaluru, Delhi and New York.',
      line2: 'Flagship Maharaja lounges coming soon to international terminals at New Delhi and San Francisco.',
      imageSrc: imgLounges,
      alt: 'World-class lounges',
    },
  ],

  featureCards: [
    {
      id: 1,
      alt: 'Signature Amenities',
      img: imgSignatureAmenities,
      icon: 'airline_seat_flat',
      title: 'Unrivaled Comfort',
      description: 'Lie-flat beds and private suites designed for restorative rest.',
      mtClass: '',
    },
    {
      id: 2,
      alt: 'Non-Stop Entertainment',
      img: imgEntertainment,
      icon: 'live_tv',
      title: 'Immersive World',
      description: 'E-BOX entertainment with latest movies, TV shows and music.',
      mtClass: 'mt-12 md:mt-0',
    },
    {
      id: 3,
      alt: 'Gourmet Dining',
      img: imgGourmetDining,
      icon: 'restaurant',
      title: 'Culinary Art',
      description: 'Gourmet menus paired with fine wines, served anytime you desire.',
      mtClass: 'mt-12 md:mt-0',
    },
  ],

  network: {
    headline: 'Connecting India to the World',
    subline: '45+ Global Destinations and 80+ within India',
    domesticTitle: 'Domestic',
    internationalTitle: 'International',
    domesticTiles: [
      { city: 'Amritsar', img: `/assets/air-india/images/network/Domestic/Amritsar.jpg` },
      { city: 'Jodhpur', img: `/assets/air-india/images/network/Domestic/Jodhpur.jpg` },
      { city: 'Bodh Gaya', img: `/assets/air-india/images/network/Domestic/Bodh_Gaya.jpg` },
      { city: 'Kochi', img: `/assets/air-india/images/network/Domestic/Kochi.jpg` },
      { city: 'Goa', img: `/assets/air-india/images/network/Domestic/Goa.jpg` },
      { city: 'Kolkata', img: `/assets/air-india/images/network/Domestic/Kolkata.jpg` },
      { city: 'Guwahati', img: `/assets/air-india/images/network/Domestic/Guwahati.jpg` },
      { city: 'Srinagar', img: `/assets/air-india/images/network/Domestic/Srinagar.jpg` },
      { city: 'Jaisalmer', img: `/assets/air-india/images/network/Domestic/Jaisalmer.jpg` },
      { city: 'Varanasi', img: `/assets/air-india/images/network/Domestic/Varanasi.jpg` },
    ],
    internationalTiles: [
      { city: 'Amsterdam', country: 'Netherlands', img: `/assets/air-india/images/network/International/Amsterdam.jpg` },
      { city: 'New York', country: 'USA', img: `/assets/air-india/images/network/International/New_York.jpg` },
      { city: 'Bali', country: 'Indonesia', img: `/assets/air-india/images/network/International/Bali.jpg` },
      { city: 'Paris', country: 'France', img: `/assets/air-india/images/network/International/Paris.jpg` },
      { city: 'Bangkok', country: 'Thailand', img: `/assets/air-india/images/network/International/Bangkok.jpg` },
      { city: 'Rome', country: 'Italy', img: `/assets/air-india/images/network/International/Rome.jpg` },
      { city: 'Dubai', country: 'UAE', img: `/assets/air-india/images/network/International/Dubai.jpg` },
      { city: 'San Francisco', country: 'USA', img: `/assets/air-india/images/network/International/San_Francisco.jpg` },
      { city: 'Frankfurt', country: 'Germany', img: `/assets/air-india/images/network/International/Frankfurt.jpg` },
      { city: 'Shanghai', country: 'China', img: `/assets/air-india/images/network/International/Shanghai.jpg` },
      { city: 'Hong Kong', country: 'Hong Kong', img: `/assets/air-india/images/network/International/Hong_Kong.jpg` },
      { city: 'Singapore', country: 'Singapore', img: `/assets/air-india/images/network/International/Singapore.jpg` },
      { city: 'London', country: 'UK', img: `/assets/air-india/images/network/International/london.jpg` },
      { city: 'Sydney', country: 'Australia', img: `/assets/air-india/images/network/International/Sydney.jpg` },
      { city: 'Tokyo', country: 'Japan', img: `/assets/air-india/images/network/International/Haneda.jpg` },
    ],
  },

  destinations: [
    { id: 1, country: 'India', city: 'Amritsar', img: `/assets/air-india/images/network/Domestic/Amritsar.jpg` },
    { id: 2, country: 'India', city: 'Jodhpur', img: `/assets/air-india/images/network/Domestic/Jodhpur.jpg` },
    { id: 3, country: 'India', city: 'Bodh Gaya', img: `/assets/air-india/images/network/Domestic/Bodh_Gaya.jpg` },
    { id: 4, country: 'India', city: 'Kochi', img: `/assets/air-india/images/network/Domestic/Kochi.jpg` },
    { id: 5, country: 'India', city: 'Goa', img: `/assets/air-india/images/network/Domestic/Goa.jpg` },
    { id: 6, country: 'India', city: 'Kolkata', img: `/assets/air-india/images/network/Domestic/Kolkata.jpg` },
    { id: 7, country: 'India', city: 'Guwahati', img: `/assets/air-india/images/destinations/Guwahati.jpg` },
    { id: 8, country: 'India', city: 'Srinagar', img: `/assets/air-india/images/destinations/Srinagar.jpg` },
    { id: 9, country: 'India', city: 'Jaisalmer', img: `/assets/air-india/images/network/Domestic/Jaisalmer.jpg` },
    { id: 10, country: 'India', city: 'Varanasi', img: `/assets/air-india/images/network/Domestic/Varanasi.jpg` },
    { id: 11, country: 'Netherlands', city: 'Amsterdam', img: `/assets/air-india/images/network/International/Amsterdam.jpg` },
    { id: 12, country: 'USA', city: 'New York', img: `/assets/air-india/images/network/International/New_York.jpg` },
    { id: 13, country: 'Indonesia', city: 'Bali', img: `/assets/air-india/images/network/International/Bali.jpg` },
    { id: 14, country: 'France', city: 'Paris', img: `/assets/air-india/images/network/International/Paris.jpg` },
    { id: 15, country: 'Thailand', city: 'Bangkok', img: `/assets/air-india/images/network/International/Bangkok.jpg` },
    { id: 16, country: 'Italy', city: 'Rome', img: `/assets/air-india/images/network/International/Rome.jpg` },
    { id: 17, country: 'UAE', city: 'Dubai', img: `/assets/air-india/images/network/International/Dubai.jpg` },
    { id: 18, country: 'USA', city: 'San Francisco', img: `/assets/air-india/images/network/International/San_Francisco.jpg` },
    { id: 19, country: 'Germany', city: 'Frankfurt', img: `/assets/air-india/images/network/International/Frankfurt.jpg` },
    { id: 20, country: 'China', city: 'Shanghai', img: `/assets/air-india/images/network/International/Shanghai.jpg` },
    { id: 21, country: 'Hong Kong', city: 'Hong Kong', img: `/assets/air-india/images/network/International/Hong_Kong.jpg` },
    { id: 22, country: 'Singapore', city: 'Singapore', img: `/assets/air-india/images/network/International/Singapore.jpg` },
    { id: 23, country: 'UK', city: 'London', img: `/assets/air-india/images/network/International/london.jpg` },
    { id: 24, country: 'Australia', city: 'Sydney', img: `/assets/air-india/images/network/International/Sydney.jpg` },
    { id: 25, country: 'Japan', city: 'Tokyo', img: `/assets/air-india/images/network/International/Haneda.jpg` },
  ],

  offers: [],

  cities: [
    { id: 1, city: 'Amritsar', sub: 'Domestic', img: `/assets/air-india/images/network/Domestic/Amritsar.jpg` },
    { id: 2, city: 'Jodhpur', sub: 'Domestic', img: `/assets/air-india/images/network/Domestic/Jodhpur.jpg` },
    { id: 3, city: 'Kochi', sub: 'Domestic', img: `/assets/air-india/images/network/Domestic/Kochi.jpg` },
    { id: 4, city: 'Goa', sub: 'Domestic', img: `/assets/air-india/images/network/Domestic/Goa.jpg` },
    { id: 5, city: 'Kolkata', sub: 'Domestic', img: `/assets/air-india/images/network/Domestic/Kolkata.jpg` },
    { id: 6, city: 'Srinagar', sub: 'Domestic', img: `/assets/air-india/images/network/Domestic/Srinagar.jpg` },
  ],

  whatsNew: {
    sectionTitle: "What's New at Air India",
    items: [
      {
        title: "Air India unveils custom-styled cabin interiors of the first made-for-Air India B787-9; New interiors to become standard across B787 fleet",
        url: 'https://www.airindia.com/in/en/newsroom/press-release/Air-India-unveils-custom-styled-cabin-interiors-of-the-first-made-for-Air-India-B787-9.html',
      },
      {
        title: 'Air India completes first phase of legacy retrofit programme; 104 A320 family aircraft now feature new or upgraded cabin interiors',
        url: 'https://www.airindia.com/in/en/newsroom/press-release/Air-India-completes-first-phase-of-legacy-retrofit-programme.html',
      },
      {
        title: 'Air India unveils a refreshed beverage collection featuring celebrated wines and spirits from across the world',
        url: 'https://www.airindia.com/in/en/newsroom/press-release/Air-India-unveils-a-refreshed-beverage-collection-featuring-celebrated-wines-and-spirits.html',
      },
      {
        title: 'Air India to resume non-stop flights to Rome from March 2026',
        url: 'https://www.airindia.com/content/air-india/in/en/newsroom/press-release/Air-India-to-resume-non-stop-flights-to-Rome-from-March-2026.html',
      },
      {
        title: 'Air India wins Best Domestic Airline at Travel + Leisure Best Awards 2025',
        url: 'https://www.airindia.com/in/en/newsroom/articles/Air-India-wins-Best-Domestic-Airline-at-Travel-and-Leisure-Best-Awards-2025.html',
      },
      {
        title: "Air India earns recognition as the 'Most Improved Airline' at APEX Awards",
        url: 'https://www.airindia.com/in/en/newsroom/articles/Air-India-earns-recognition-as-the-Most-Improved-Airline-at-APEX-Awards.html',
      },
      {
        title: 'Air India expands UK connectivity this winter with fourth daily flight between Delhi and London Heathrow',
        url: 'https://www.airindia.com/in/en/newsroom/press-release/Air-India-expands-UK-connectivity-this-winter-with-fourth-daily-flight.html',
      },
      {
        title: "Air India cabin crew's guide to Manila",
        url: 'https://www.airindia.com/in/en/newsroom/articles/Air-India-cabin-crew-s-guide-to-Manila.html',
      },
      {
        title: 'Air India elevates its inflight dining experience with refreshed global menu',
        url: 'https://www.airindia.com/in/en/newsroom/press-release/Air-India-elevates-its-inflight-dining-experience-with-refreshed-global-menu.html',
      },
      {
        title: 'Air India to resume operations to mainland China with non-stop flights to Shanghai from February 2026',
        url: 'https://www.airindia.com/in/en/newsroom/press-release/Air-India-to-resume-operations-to-China-with-non-stop-flights-to-Shanghai.html',
      },
    ],
  },

  socialHighlights: [
    { id: 'phuket', label: 'Phuket', videoSrc: 'https://ns.yatracdn.com/common/airIndia/Phuket.mp4' },
    { id: 'seoul', label: 'Seoul', videoSrc: 'https://ns.yatracdn.com/common/airIndia/Seoul.mp4' },
    { id: 'bali', label: 'Bali', videoSrc: 'https://ns.yatracdn.com/common/airIndia/bali.mp4' },
    { id: 'saigon', label: 'Saigon', videoSrc: 'https://ns.yatracdn.com/common/airIndia/Saigon_Video2.mp4' },
    { id: 'shanghai', label: 'Shanghai', videoSrc: 'https://ns.yatracdn.com/common/airIndia/Shanghai.mp4' },
    { id: 'aircraft', label: 'Aircraft', videoSrc: 'https://ns.yatracdn.com/common/airIndia/Aircraft.mp4' },
    { id: 'manila', label: 'Manila', videoSrc: 'https://ns.yatracdn.com/common/airIndia/manila_mmt.mp4' },
  ],

  galleryImages: [
    { alt: 'In-Flight Wi-Fi', src: imgWiFi },
    { alt: 'Signature Amenities', src: imgSignatureAmenities },
    { alt: 'Gourmet Dining', src: imgGourmetDining },
    { alt: 'Non-Stop Entertainment', src: imgEntertainment },
    { alt: 'Maharaja Club', src: imgMaharajaClub },
    { alt: 'World-Class Lounges', src: imgLounges },
  ],
};

export default config;
