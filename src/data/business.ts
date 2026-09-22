import { ServicePillar } from '../types';

export const BUSINESS_INFO = {
  name: 'Kreuz Garage Gebr. Görgin GmbH',
  legalName: 'Kreuz Garage Gebr. Görgin GmbH',
  category: 'Garage / Service',
  address: 'Rheinstrasse 1, 9469 Haag, Switzerland',
  street: 'Rheinstrasse 1',
  postalCode: '9469',
  locality: 'Haag',
  canton: 'St. Gallen',
  country: 'Switzerland',
  phone: '081 771 16 16',
  phoneClean: '0817711616',
  phoneInternational: '+41817711616',
  description: 'Garage with service station, workshop, café shop and vehicle services',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Kreuz+Garage+Gebr.+G%C3%B6rgin+GmbH+Rheinstrasse+1+9469+Haag+Switzerland',
} as const;

// Few, carefully selected high-fidelity imagery respecting the authentic service-station & workshop atmosphere
export const CURATED_IMAGES = {
  // Classic/contemporary service station & garage entrance
  hero: 'https://images.unsplash.com/photo-1613214149922-f1809c99b414?auto=format&fit=crop&w=1600&q=80',
  heroAlt: 'Clean, modern automotive workshop and service facility with vehicle on hydraulic lift',

  // Vehicle workshop inspection
  workshop: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1200&q=80',
  workshopAlt: 'Precision automotive workshop bay with mechanic tools and vehicle maintenance station',

  // Service station & fueling area
  serviceStation: 'https://images.unsplash.com/photo-1545459720-aac8509eb02c?auto=format&fit=crop&w=1200&q=80',
  serviceStationAlt: 'Modern service station pumps and canopy for refuelling on the road',

  // On-site Café Shop
  cafeShop: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80',
  cafeShopAlt: 'Fresh coffee and café shop counter for a warm pause while servicing or traveling',
} as const;

// Core pillars strictly derived from the business description:
// "Garage with service station, workshop, café shop and vehicle services"
export const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: 'garage',
    title: 'Garage & Vehicle Services',
    tagline: 'Dedicated vehicle care & assistance in Haag',
    description:
      'Complete automotive garage handling essential vehicle maintenance, tire changes, fluid checks, and vehicle services to ensure your car remains reliable on Swiss roads.',
    features: [
      'Comprehensive vehicle service & maintenance',
      'Diagnostic checks and safety inspections',
      'Seasonal tire fitting and wheel balancing',
      'Battery, brake, and essential component care',
    ],
    image: CURATED_IMAGES.workshop,
    imageAlt: 'Automotive vehicle servicing at Kreuz Garage in Haag',
  },
  {
    id: 'workshop',
    title: 'Mechanical Workshop',
    tagline: 'Equipped workshop for routine and specialized repairs',
    description:
      'Our on-site workshop is outfitted with professional lifts, diagnostic equipment, and specialized automotive tools to resolve mechanical issues directly in Haag.',
    features: [
      'Engine and transmission mechanical repairs',
      'Suspension, exhaust, and steering alignment',
      'Braking system repair and replacement',
      'Underbody and structural safety checks',
    ],
    image: CURATED_IMAGES.hero,
    imageAlt: 'Mechanical workshop facilities at Kreuz Garage Haag',
  },
  {
    id: 'station',
    title: 'Service Station',
    tagline: 'Quick and convenient refuelling on Rheinstrasse',
    description:
      'Conveniently positioned on Rheinstrasse 1 near key transit routes in Haag, our service station provides fuel, windshield supplies, air/water stations, and roadside essentials.',
    features: [
      'Easy-access fuel dispensers for passenger & commercial cars',
      'Windshield cleaning fluids, motor oils, and car care items',
      'Tire pressure and radiator water replenishment points',
      'Strategic roadside position for commuters and local drivers',
    ],
    image: CURATED_IMAGES.serviceStation,
    imageAlt: 'Service station canopy and fuel pumps on Rheinstrasse Haag',
  },
  {
    id: 'cafe',
    title: 'Café Shop',
    tagline: 'Fresh refreshments, snacks & hot coffee',
    description:
      'Take a comfortable break while your vehicle is in the workshop or stop in during your drive. Enjoy barista-grade coffee, refreshing cold drinks, sweet pastries, and daily travel provisions.',
    features: [
      'Fresh hot coffee, espresso, and warm beverages',
      'Chilled soft drinks, mineral water, and energy drinks',
      'Snacks, sandwiches, confectionery, and travel sundries',
      'Welcoming indoor pause area while your vehicle is serviced',
    ],
    image: CURATED_IMAGES.cafeShop,
    imageAlt: 'Café shop at Kreuz Garage Gebr. Görgin GmbH',
  },
];
