import { acquadipramaImage, businessStudioImage, gourmetDiningImage } from "@/utils/constants";

export const flightData = [
  {
    id: 1,
    badge: 'Gourmet Dining',
    img: gourmetDiningImage,
    fromTime: '10:00',
    fromCode: 'LHR',
    toTime: '20:30',
    toCode: 'AUH',
    duration: '7h 30m',
    price: '$4,250',
    fare: 'Business Saver',
  },
  {
    id: 2,
    badge: 'Business Studio',
    img: businessStudioImage,
    fromTime: '14:15',
    fromCode: 'LHR',
    toTime: '00:45',
    toCode: 'AUH',
    duration: '7h 30m',
    price: '$4,520',
    fare: 'Business Flex',
  },
  {
    id: 3,
    badge: 'Acqua Di Parma',
    img: acquadipramaImage,
    fromTime: '21:00',
    fromCode: 'LHR',
    toTime: '07:30',
    toCode: 'AUH',
    duration: '7h 30m',
    price: '$3,980',
    fare: 'Business Choice',
  },
];

