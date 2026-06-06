export interface Project {
  _id: string;
  title: string;
  slug: string;
  category: 'Complete House' | 'Interior' | 'Exterior' | 'Basic Naksha' | '3D Naksha';
  mainImage: {
    asset: {
      _ref: string;
      _type: string;
    };
    _type: string;
  } | string; // Supporting both Sanity image object and fallback string URL
  gallery?: Array<any>;
  description: string;
  completionDate?: string;
  location?: string;
  area?: string;
  client?: string;
}

export interface Service {
  _id: string;
  title: string;
  description: string;
  icon?: any;
  order: number;
}

export const MOCK_PROJECTS: Project[] = [
  {
    _id: 'mock-1',
    title: 'The Obsidian Villa',
    slug: 'the-obsidian-villa',
    category: 'Complete House',
    mainImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    description: 'A striking modern concrete and glass luxury residence featuring cantilevered wings, infinity pool integration, and seamless indoor-outdoor transition planes.',
    completionDate: '2025-08-15',
    location: 'Beverly Hills, CA',
    area: '8,500 Sq. Ft.',
    client: 'Vanguard Properties',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    _id: 'mock-2',
    title: 'Nordic Calm Apartment',
    slug: 'nordic-calm-apartment',
    category: 'Interior',
    mainImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    description: 'A minimalist penthouse focusing on natural raw oak finishes, neutral warm-toned textures, and large window profiles that flood the space with natural ambient daylight.',
    completionDate: '2025-11-20',
    location: 'Copenhagen, Denmark',
    area: '2,400 Sq. Ft.',
    client: 'The Nord Group',
    gallery: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    _id: 'mock-3',
    title: 'The Brutalist Cliffside',
    slug: 'the-brutalist-cliffside',
    category: 'Exterior',
    mainImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    description: 'A raw, monolithic board-formed concrete structure emerging directly from volcanic cliffs overlooking the Mediterranean. Focused on stark lines and heavy shadows.',
    completionDate: '2026-03-10',
    location: 'Amalfi Coast, Italy',
    area: '6,200 Sq. Ft.',
    client: 'D\'Angelo Estates',
    gallery: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    _id: 'mock-4',
    title: 'Luxury Lounge Curation',
    slug: 'luxury-lounge-curation',
    category: 'Interior',
    mainImage: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=80',
    description: 'A private residential lounge integrating rich brushed gold trims, bronze-toned mirrors, plush custom velvet seating, and strategic micro-lighting structures.',
    completionDate: '2024-05-18',
    location: 'Dubai, UAE',
    area: '1,850 Sq. Ft.',
    client: 'Al-Maktoum Private Residence',
    gallery: [
      'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    _id: 'mock-5',
    title: 'Open-Concept Spatial Naksha',
    slug: 'open-concept-spatial-naksha',
    category: 'Basic Naksha',
    mainImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    description: 'A highly optimized, ventilation-first basic structural map layout designed for passive cooling and open double-height lounge transitions.',
    completionDate: '2026-01-05',
    location: 'Seattle, WA',
    area: '3,200 Sq. Ft.',
    client: 'Synergy Devs',
    gallery: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    _id: 'mock-6',
    title: 'Bespoke Mansion 3D Naksha',
    slug: 'bespoke-mansion-3d-naksha',
    category: '3D Naksha',
    mainImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    description: 'A full three-dimensional structural walkthrough and blueprint showing layered load-bearing geometries and interior spatial volumes.',
    completionDate: '2026-05-24',
    location: 'Dallas, TX',
    area: '5,500 Sq. Ft.',
    client: 'Legacy Builders',
    gallery: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=80'
    ]
  }
];

export const MOCK_SERVICES: Service[] = [
  {
    _id: 'srv-1',
    title: 'Architectural Design',
    description: 'We conceptualize and detail luxury residential estates and commercial markers, focusing on light interplay, geometric precision, and contextual integration.',
    order: 1
  },
  {
    _id: 'srv-2',
    title: '3D Elevation Design',
    description: 'Bespoke outer facade renders that preview materiality, shadows, and volumetric forms before construction, ensuring your building is visually striking.',
    order: 2
  },
  {
    _id: 'srv-3',
    title: 'Basic Naksha (Vastu Map)',
    description: 'Precise and compliant structural map layout schemes focusing on space optimization, structural loading pathways, and harmonious ventilation flows.',
    order: 3
  },
  {
    _id: 'srv-4',
    title: '3D Naksha (Digital Twins)',
    description: 'Immersive virtual spatial mockups and walkthrough models that let you experience layouts, ceiling volumes, and lighting angles digitally.',
    order: 4
  },
  {
    _id: 'srv-5',
    title: 'Turnkey Execution',
    description: 'From concrete to custom lighting. Our team manages materials sourcing, design alignment, and site construction with absolute premium quality.',
    order: 5
  }
];
