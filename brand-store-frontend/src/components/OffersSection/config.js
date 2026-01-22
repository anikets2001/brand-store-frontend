import { businessClassOfferImage, hsbcOfferImage } from '@/utils/constants';

export const offers = [
  {
    id: 1,
    tag: 'Business Class',
    headline: '10% OFF',
    desc: 'Experience luxury for less on your next business trip.',
    code: 'ETIHAD10',
    img: businessClassOfferImage,
  },
  {
    id: 2,
    tag: 'Partner Offer',
    headline: '8% OFF',
    desc: 'Exclusive savings when you book with HSBC cards.',
    code: 'HSBCINT',
    img: hsbcOfferImage,
  },
];