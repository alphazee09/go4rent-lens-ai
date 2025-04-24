
// Device types and interfaces
export interface Device {
  id: string;
  name: string;
  category: string;
  price: number;
  currency: string;
  image: string;
  rating: number;
  featured?: boolean;
  description: string;
  specifications: Record<string, string | number>;
  benefits: string[];
  photographyTypes: string[];
  accessories: Accessory[];
}

export interface Accessory {
  id: string;
  name: string;
  price: number;
  currency: string;
  image: string;
  compatible: string[];
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  image: string;
}

// Mock device data
export const devices: Device[] = [
  {
    id: 'canon-r5',
    name: 'Canon EOS R5',
    category: 'Mirrorless Camera',
    price: 55,
    currency: 'OMR',
    image: 'https://images.unsplash.com/photo-1516724562728-afc824a36e84',
    rating: 4.9,
    featured: true,
    description: 'Professional high-resolution mirrorless camera with 8K video capability and advanced autofocus system.',
    specifications: {
      sensor: 'Full-Frame 45MP',
      video: '8K RAW, 4K 120fps',
      iso: '100-51,200',
      stabilization: '5-axis IBIS',
      autofocus: 'Dual Pixel CMOS AF II'
    },
    benefits: [
      'High resolution 45MP sensor for detailed images',
      'Impressive 8K video recording capability',
      'Advanced animal detection autofocus',
      'Weather-sealed body for outdoor shooting',
      '5.76M-dot electronic viewfinder'
    ],
    photographyTypes: [
      'Landscape Photography',
      'Portrait Photography',
      'Wildlife Photography',
      'Wedding Photography',
      'Commercial Photography'
    ],
    accessories: [
      {
        id: 'rf24-70',
        name: 'RF 24-70mm f/2.8L IS USM',
        price: 25,
        currency: 'OMR',
        image: 'https://images.unsplash.com/photo-1617005082133-45b311278641',
        compatible: ['canon-r5', 'canon-r6'],
      },
      {
        id: 'canon-flash',
        name: 'Canon Speedlite 600EX-RT',
        price: 15,
        currency: 'OMR',
        image: 'https://images.unsplash.com/photo-1522991088665-a4ded92f5929',
        compatible: ['canon-r5', 'canon-r6', 'canon-5d'],
      }
    ]
  },
  {
    id: 'sony-a7siii',
    name: 'Sony A7S III',
    category: 'Mirrorless Camera',
    price: 50,
    currency: 'OMR',
    image: 'https://images.unsplash.com/photo-1588069356416-80ef5539c03a',
    rating: 4.8,
    description: 'Full-frame mirrorless camera optimized for video and low light performance.',
    specifications: {
      sensor: 'Full-Frame 12.1MP',
      video: '4K 120fps, 10-bit 4:2:2',
      iso: '80-102,400',
      stabilization: '5-axis IBIS',
      autofocus: '759 phase-detection points'
    },
    benefits: [
      'Exceptional low-light performance',
      'Professional video recording features',
      'Fast and accurate autofocus',
      'Fully articulating touchscreen',
      'Excellent battery life'
    ],
    photographyTypes: [
      'Low Light Photography',
      'Documentary Filmmaking',
      'Event Videography',
      'Music Videos',
      'Astrophotography'
    ],
    accessories: [
      {
        id: 'sony-24-70gm',
        name: 'Sony FE 24-70mm f/2.8 GM',
        price: 25,
        currency: 'OMR',
        image: 'https://images.unsplash.com/photo-1599843231356-8e8897fa21f1',
        compatible: ['sony-a7siii', 'sony-a7iv', 'sony-a1'],
      },
      {
        id: 'sony-mic',
        name: 'Sony ECM-B1M Digital Shotgun Microphone',
        price: 12,
        currency: 'OMR',
        image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc',
        compatible: ['sony-a7siii', 'sony-a7iv', 'sony-a1'],
      }
    ]
  },
  {
    id: 'blackmagic-6k',
    name: 'Blackmagic Pocket 6K',
    category: 'Cinema Camera',
    price: 65,
    currency: 'OMR',
    image: 'https://images.unsplash.com/photo-1585155802409-129fb855414a',
    rating: 4.7,
    description: 'Compact cinema camera with 6K resolution, Super 35 sensor and EF lens mount.',
    specifications: {
      sensor: 'Super 35 6K',
      video: '6K 50fps, 4K 60fps',
      iso: 'Dual Native ISO 400 & 3200',
      dynamic_range: '13 stops',
      recording: 'BRAW, ProRes'
    },
    benefits: [
      'Hollywood-quality 6K video recording',
      'Cinema-grade color science',
      'Blackmagic RAW recording',
      'Large Super 35 sensor',
      'Compatible with EF lenses'
    ],
    photographyTypes: [
      'Narrative Filmmaking',
      'Commercial Production',
      'Documentary Production',
      'Music Videos',
      'Short Films'
    ],
    accessories: [
      {
        id: 'sigma-18-35',
        name: 'Sigma 18-35mm f/1.8 DC HSM Art',
        price: 20,
        currency: 'OMR',
        image: 'https://images.unsplash.com/photo-1609178016676-c5b8e34ebdba',
        compatible: ['blackmagic-6k', 'canon-c200'],
      },
      {
        id: 'smallhd-monitor',
        name: 'SmallHD 502 Bright Monitor',
        price: 18,
        currency: 'OMR',
        image: 'https://images.unsplash.com/photo-1607968302777-fa0bb1a38818',
        compatible: ['blackmagic-6k', 'sony-fx6', 'canon-c200'],
      }
    ]
  },
  {
    id: 'dji-ronin-rs3',
    name: 'DJI Ronin RS3',
    category: 'Stabilizers',
    price: 30,
    currency: 'OMR',
    image: 'https://images.unsplash.com/photo-1652728423241-c913165764c7',
    rating: 4.6,
    description: 'Professional 3-axis handheld gimbal stabilizer for mirrorless and DSLR cameras.',
    specifications: {
      payload: '3.0 kg',
      battery_life: '12 hours',
      weight: '1.3 kg',
      wireless_control: 'Bluetooth & Wi-Fi',
      axes: '3-axis stabilization'
    },
    benefits: [
      'Super smooth footage for professional productions',
      'Lightweight but sturdy construction',
      'Automated axis locks for quick setup',
      'Touch screen for easy control',
      'Advanced stabilization algorithms'
    ],
    photographyTypes: [
      'Action Videography',
      'Wedding Videography',
      'Documentary Production',
      'Travel Videos',
      'Music Videos'
    ],
    accessories: [
      {
        id: 'dji-focus-motor',
        name: 'DJI Focus Motor',
        price: 10,
        currency: 'OMR',
        image: 'https://images.unsplash.com/photo-1586253634026-8cb574908d1e',
        compatible: ['dji-ronin-rs3', 'dji-ronin-rs2'],
      },
      {
        id: 'smallrig-plate',
        name: 'SmallRig Mounting Plate',
        price: 5,
        currency: 'OMR',
        image: 'https://images.unsplash.com/photo-1565071783289-203929e7dab1',
        compatible: ['dji-ronin-rs3', 'dji-ronin-rs2', 'zhiyun-crane-3s'],
      }
    ]
  }
];

// Categories
export const categories: Category[] = [
  {
    id: 'cameras',
    name: 'Cameras',
    icon: 'camera',
    description: 'DSLR, Mirrorless, and Cinema Cameras',
    image: 'https://images.unsplash.com/photo-1516724562728-afc824a36e84'
  },
  {
    id: 'lenses',
    name: 'Lenses',
    icon: 'aperture',
    description: 'Prime and Zoom Lenses for all systems',
    image: 'https://images.unsplash.com/photo-1617005082133-45b311278641'
  },
  {
    id: 'lighting',
    name: 'Lighting',
    icon: 'zap',
    description: 'Studio and On-location Lighting Equipment',
    image: 'https://images.unsplash.com/photo-1522991088665-a4ded92f5929'
  },
  {
    id: 'audio',
    name: 'Audio',
    icon: 'mic',
    description: 'Microphones, Recorders, and Audio Accessories',
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc'
  },
  {
    id: 'stabilizers',
    name: 'Stabilizers',
    icon: 'shuffle',
    description: 'Gimbals, Steadicams, and Stabilization Systems',
    image: 'https://images.unsplash.com/photo-1652728423241-c913165764c7'
  },
  {
    id: 'drones',
    name: 'Drones',
    icon: 'send',
    description: 'Professional Aerial Photography Drones',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f'
  }
];

// Get a device by ID
export const getDeviceById = (id: string): Device | undefined => {
  return devices.find(device => device.id === id);
};

// Get compatible accessories for a device
export const getCompatibleAccessories = (deviceId: string): Accessory[] => {
  const device = getDeviceById(deviceId);
  if (!device) return [];
  
  return device.accessories;
};

// Find a device by barcode (mock implementation)
export const findDeviceByBarcode = (barcode: string): Device | undefined => {
  // Mock mapping of barcodes to device IDs
  const barcodeMap: Record<string, string> = {
    'CAM12345-A': 'canon-r5',
    'CAM12345-B': 'sony-a7siii',
    'CAM12345-C': 'blackmagic-6k',
    'CAM12345-D': 'dji-ronin-rs3'
  };
  
  const deviceId = barcodeMap[barcode];
  if (!deviceId) return undefined;
  
  return getDeviceById(deviceId);
};

// Get featured devices
export const getFeaturedDevices = (): Device[] => {
  return devices.filter(device => device.featured);
};

// Search devices
export const searchDevices = (query: string): Device[] => {
  const lowerQuery = query.toLowerCase();
  return devices.filter(device => 
    device.name.toLowerCase().includes(lowerQuery) ||
    device.category.toLowerCase().includes(lowerQuery) ||
    device.description.toLowerCase().includes(lowerQuery)
  );
};
