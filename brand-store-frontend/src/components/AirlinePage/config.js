import { unrivaledComfortImage, immersiveWorldImage, gourmetDiningImage } from '@/utils/constants';

export const featureCards = [
  {
    id: 1,
    alt: 'Comfort Onboard',
    img: unrivaledComfortImage,
    icon: 'airline_seat_flat',
    title: 'Unrivaled Comfort',
    description: 'Lie-flat beds and private suites designed for restorative rest.',
    mtClass: '',
  },
  {
    id: 2,
    alt: 'In-Flight Entertainment',
    img: immersiveWorldImage,
    icon: 'live_tv',
    title: 'Immersive World',
    description: 'E-BOX entertainment with live news, sports, and blockbusters.',
    mtClass: 'mt-12 md:mt-0',
  },
  {
    id: 3,
    alt: 'Dining',
    img: gourmetDiningImage,
    icon: 'restaurant',
    title: 'Culinary Art',
    description: 'Gourmet menus paired with fine wines, served anytime you desire.',
    mtClass: 'mt-12 md:mt-0',
  },
];

