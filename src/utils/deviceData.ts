export const categories = [
  {
    id: 'cameras',
    name: 'Cameras',
    description: 'Professional & Mirrorless Cameras',
    icon: 'camera',
    image: 'https://images.unsplash.com/photo-1519638399535-1b036603ac77'
  },
  {
    id: 'lenses',
    name: 'Lenses',
    description: 'High-Quality Camera Lenses',
    icon: 'aperture',
    image: 'https://images.unsplash.com/photo-1581525119579-1d9365a6b716'
  },
  {
    id: 'lighting',
    name: 'Lighting',
    description: 'Pro Lighting Equipment',
    icon: 'zap',
    image: 'https://images.unsplash.com/photo-1615228402326-7adf9a257f2b'
  },
  {
    id: 'video-gear',
    name: 'Video Gear',
    description: 'Filmmaking Essentials',
    icon: 'film',
    image: 'https://images.unsplash.com/photo-1516873940853-increased-size-of-camera-sensor'
  },
  {
    id: 'audio',
    name: 'Audio',
    description: 'Professional Audio Equipment',
    icon: 'headphones',
    image: 'https://images.unsplash.com/photo-1590979775267-75d2d93f8265'
  },
  {
    id: 'tripods',
    name: 'Tripods',
    description: 'Camera Supports & Stabilizers',
    icon: 'award',
    image: 'https://images.unsplash.com/photo-1504764166400-8e7d78c3d736'
  },
  {
    id: 'drones',
    name: 'Drones',
    description: 'Aerial Photography Equipment',
    icon: 'send',
    image: 'https://images.unsplash.com/photo-1501088659689-7959482a3011'
  },
  {
    id: 'accessories',
    name: 'Accessories',
    description: 'Essential Photography Add-ons',
    icon: 'package',
    image: 'https://images.unsplash.com/photo-1519458246479-6acae7536988'
  }
];

export const devices = [
  {
    id: 'canon-eos-r5',
    name: 'Canon EOS R5',
    category: 'Cameras',
    price: 250.00,
    currency: 'OMR',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32',
    rating: 4.8,
    featured: true,
    details: {
      type: 'Mirrorless Camera',
      megapixels: 45,
      sensor: 'Full-Frame CMOS',
      videoResolution: '8K RAW',
      description: 'Professional full-frame mirrorless camera perfect for photography and videography.',
      benefits: [
        'Exceptional image quality with 45MP sensor',
        '8K RAW video recording capability',
        'Advanced autofocus with animal detection',
        'In-body image stabilization up to 8 stops'
      ],
      uses: [
        'Professional Photography',
        'Landscape',
        'Portrait',
        'Wildlife',
        'Sports',
        'Event Photography'
      ],
      compatibleAccessories: [
        {
          id: 'canon-rf-24-70mm',
          name: 'Canon RF 24-70mm f/2.8L',
          price: 80.00,
          currency: 'OMR',
          image: 'https://images.unsplash.com/photo-1617004884534-bdc511bf159f'
        },
        {
          id: 'canon-battery-grip',
          name: 'Canon BG-R10 Battery Grip',
          price: 25.00,
          currency: 'OMR',
          image: 'https://images.unsplash.com/photo-1584479898061-15742a14c650'
        },
        {
          id: 'sandisk-cfexpress',
          name: 'SanDisk CFexpress Type B',
          price: 15.00,
          currency: 'OMR',
          image: 'https://images.unsplash.com/photo-1590845947376-2638caa89309'
        }
      ]
    }
  },
  {
    id: 'sony-a7-iv',
    name: 'Sony A7 IV',
    category: 'Cameras',
    price: 200.00,
    currency: 'OMR',
    image: 'https://images.unsplash.com/photo-1614750606168-0fabab5410aa',
    rating: 4.7,
    details: {
      type: 'Mirrorless Camera',
      megapixels: 33,
      sensor: 'Full-Frame BSI CMOS',
      videoResolution: '4K 60fps',
      description: 'Versatile full-frame camera with excellent stills and video performance.',
      benefits: [
        '33MP full-frame sensor',
        'Improved color science',
        'Real-time tracking autofocus',
        'Up to 10fps continuous shooting'
      ],
      uses: [
        'Hybrid Photo/Video',
        'Content Creation',
        'Studio Photography',
        'Street Photography'
      ],
      compatibleAccessories: [
        {
          id: 'sony-24-70mm-gm',
          name: 'Sony 24-70mm f/2.8 GM',
          price: 75.00,
          currency: 'OMR',
          image: 'https://images.unsplash.com/photo-1595619868239-5670a72515ad'
        },
        {
          id: 'sony-battery-grip',
          name: 'Sony VG-C4EM Battery Grip',
          price: 22.00,
          currency: 'OMR',
          image: 'https://images.unsplash.com/photo-1584479898061-15742a14c650'
        }
      ]
    }
  },
  {
    id: 'sigma-24-70mm',
    name: 'Sigma 24-70mm f/2.8 DG DN',
    category: 'Lenses',
    price: 100.00,
    currency: 'OMR',
    image: 'https://images.unsplash.com/photo-1554177255-61bd4fbb3f9b',
    rating: 4.9,
    details: {
      type: 'Standard Zoom Lens',
      mountCompatibility: 'Sony E, Leica L',
      aperture: 'f/2.8',
      filterSize: '82mm',
      weight: '830g',
      description: 'Professional-grade standard zoom lens with exceptional image quality.',
      benefits: [
        'Outstanding optical performance',
        'Fast constant f/2.8 aperture',
        'Weather-sealed construction',
        'Lightweight design'
      ],
      uses: [
        'Event Photography',
        'Portrait Photography',
        'Landscape Photography',
        'Documentary'
      ],
      compatibleAccessories: [
        {
          id: 'lens-hood',
          name: 'Sigma Lens Hood',
          price: 10.00,
          currency: 'OMR',
          image: 'https://images.unsplash.com/photo-1615417788827-5e395c28ade8'
        },
        {
          id: 'polarizing-filter',
          name: '82mm Circular Polarizer',
          price: 15.00,
          currency: 'OMR',
          image: 'https://images.unsplash.com/photo-1524065783975-a726c68948bd'
        }
      ]
    }
  },
  {
    id: 'godox-sl60w',
    name: 'Godox SL60W LED Video Light',
    category: 'Lighting',
    price: 75.00,
    currency: 'OMR',
    image: 'https://images.unsplash.com/photo-1615208075287-7c0127751d4c',
    rating: 4.6,
    details: {
      type: 'LED Video Light',
      power: '60W',
      colorTemperature: '5600K',
      description: 'Powerful and versatile continuous LED light for video and photography.'
    }
  },
  {
    id: 'dji-ronin-rs3',
    name: 'DJI Ronin RS3',
    category: 'Video Gear',
    price: 150.00,
    currency: 'OMR',
    image: 'https://images.unsplash.com/photo-1617634667039-414c28a7125f',
    rating: 4.8,
    details: {
      type: 'Camera Stabilizer',
      maxPayload: '4.5kg',
      batteryLife: '12 hours',
      description: 'Professional-grade camera gimbal for smooth cinematic shots.'
    }
  },
  {
    id: 'sony-a7siii',
    name: 'Sony A7S III',
    category: 'Cameras',
    price: 230.00,
    currency: 'OMR',
    image: 'https://images.unsplash.com/photo-1588069356416-80ef5539c03a',
    rating: 4.9,
    featured: true,
    details: {
      type: 'Mirrorless Camera',
      megapixels: 12,
      sensor: 'Full-Frame BSI CMOS',
      videoResolution: '4K 120fps',
      description: 'Low-light specialist with incredible video capabilities.',
      benefits: [
        '12MP full-frame sensor',
        'Improved color science',
        'Real-time tracking autofocus',
        'Up to 10fps continuous shooting'
      ],
      uses: [
        'Hybrid Photo/Video',
        'Content Creation',
        'Studio Photography',
        'Street Photography'
      ],
      compatibleAccessories: [
        {
          id: 'sony-24-70mm-gm',
          name: 'Sony 24-70mm f/2.8 GM',
          price: 75.00,
          currency: 'OMR',
          image: 'https://images.unsplash.com/photo-1595619868239-5670a72515ad'
        },
        {
          id: 'sony-battery-grip',
          name: 'Sony VG-C4EM Battery Grip',
          price: 22.00,
          currency: 'OMR',
          image: 'https://images.unsplash.com/photo-1584479898061-15742a14c650'
        }
      ]
    }
  },
  {
    id: 'canon-rf-85mm',
    name: 'Canon RF 85mm f/1.2L USM',
    category: 'Lenses',
    price: 120.00,
    currency: 'OMR',
    image: 'https://images.unsplash.com/photo-1598083841673-392401426e93',
    rating: 4.8,
    details: {
      type: 'Portrait Lens',
      mountCompatibility: ['Canon RF'],
      aperture: 'f/1.2',
      description: 'Premium portrait lens with stunning bokeh and sharpness.',
      benefits: [
        '1.2 aperture',
        'Stunning bokeh',
        'Sharp focus',
        'In-body image stabilization'
      ],
      uses: [
        'Portrait Photography',
        'Landscape Photography',
        'Wildlife',
        'Sports'
      ],
      compatibleAccessories: [
        {
          id: 'canon-rf-24-70mm',
          name: 'Canon RF 24-70mm f/2.8L',
          price: 80.00,
          currency: 'OMR',
          image: 'https://images.unsplash.com/photo-1617004884534-bdc511bf159f'
        },
        {
          id: 'canon-battery-grip',
          name: 'Canon BG-R10 Battery Grip',
          price: 25.00,
          currency: 'OMR',
          image: 'https://images.unsplash.com/photo-1584479898061-15742a14c650'
        },
        {
          id: 'sandisk-cfexpress',
          name: 'SanDisk CFexpress Type B',
          price: 15.00,
          currency: 'OMR',
          image: 'https://images.unsplash.com/photo-1590845947376-2638caa89309'
        }
      ]
    }
  },
  {
    id: 'dji-mavic-3',
    name: 'DJI Mavic 3',
    category: 'Drones',
    price: 180.00,
    currency: 'OMR',
    image: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc',
    rating: 4.9,
    featured: true,
    details: {
      type: 'Professional Drone',
      camera: 'Hasselblad 4/3 CMOS',
      flightTime: '46 minutes',
      maxRange: '30km',
      description: 'Professional aerial imaging system with Hasselblad camera.'
    }
  },
  {
    id: 'rode-videomic',
    name: 'RØDE VideoMic Pro+',
    category: 'Audio',
    price: 40.00,
    currency: 'OMR',
    image: 'https://images.unsplash.com/photo-1590979775267-75d2d93f8265',
    rating: 4.7,
    details: {
      type: 'Shotgun Microphone',
      pattern: 'Supercardioid',
      batteryLife: '100+ hours',
      description: 'Premium on-camera microphone for high-quality audio recording.'
    }
  },
  {
    id: 'manfrotto-befree',
    name: 'Manfrotto BeFree Advanced',
    category: 'Tripods',
    price: 35.00,
    currency: 'OMR',
    image: 'https://images.unsplash.com/photo-1504764166400-8e7d78c3d736',
    rating: 4.6,
    details: {
      type: 'Travel Tripod',
      maxHeight: '151cm',
      maxLoad: '8kg',
      weight: '1.5kg',
      description: 'Lightweight and versatile travel tripod for photographers on the go.'
    }
  },
  {
    id: 'atomos-ninja-v',
    name: 'Atomos Ninja V',
    category: 'Video Gear',
    price: 90.00,
    currency: 'OMR',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
    rating: 4.8,
    details: {
      type: 'External Monitor/Recorder',
      screenSize: '5 inch',
      resolution: '1920x1080',
      recording: 'ProRes RAW',
      description: 'Compact HDR monitor-recorder for professional video production.'
    }
  },
  {
    id: 'profoto-b10',
    name: 'Profoto B10 Plus',
    category: 'Lighting',
    price: 110.00,
    currency: 'OMR',
    image: 'https://images.unsplash.com/photo-1543915477-f5275c6bc589',
    rating: 4.9,
    details: {
      type: 'Studio Flash',
      power: '500Ws',
      batteryCapacity: '200 full-power flashes',
      description: 'Powerful and portable studio flash for professional photography.'
    }
  },
  {
    id: 'blackmagic-pocket-6k',
    name: 'Blackmagic Pocket Cinema 6K',
    category: 'Cameras',
    price: 180.00,
    currency: 'OMR',
    image: 'https://images.unsplash.com/photo-1585155802409-129fb855414a',
    rating: 4.7,
    details: {
      type: 'Cinema Camera',
      sensor: 'Super 35',
      videoResolution: '6K',
      dynamicRange: '13 stops',
      description: 'Compact cinema camera with professional-grade image quality.'
    }
  },
  {
    id: 'sennheiser-mke-600',
    name: 'Sennheiser MKE 600',
    category: 'Audio',
    price: 45.00,
    currency: 'OMR',
    image: 'https://images.unsplash.com/photo-1505672984986-b7c468c7a134',
    rating: 4.8,
    details: {
      type: 'Shotgun Microphone',
      pattern: 'Supercardioid',
      batteryLife: '150 hours',
      description: 'Professional shotgun microphone with excellent directivity and sound quality.'
    }
  },
  {
    id: 'zhiyun-crane-3s',
    name: 'Zhiyun Crane 3S',
    category: 'Video Gear',
    price: 120.00,
    currency: 'OMR',
    image: 'https://images.unsplash.com/photo-1617634667039-414c28a7125f',
    rating: 4.6,
    details: {
      type: 'Gimbal Stabilizer',
      maxPayload: '6.5kg',
      batteryLife: '12 hours',
      description: 'High-payload gimbal stabilizer for professional cinema cameras.'
    }
  },
  {
    id: 'godox-ad400pro',
    name: 'Godox AD400Pro',
    category: 'Lighting',
    price: 85.00,
    currency: 'OMR',
    image: 'https://images.unsplash.com/photo-1615228402326-7adf9a257f2b',
    rating: 4.7,
    details: {
      type: 'Portable Flash',
      power: '400Ws',
      batteryCapacity: '390 full-power flashes',
      recycleTime: '0.01-1s',
      description: 'Portable and powerful flash unit for studio and location work.'
    }
  }
];

export const getDeviceById = (id: string) => {
  const device = devices.find(device => device.id === id);
  
  if (device) {
    if (!device.details.benefits) {
      device.details.benefits = [];
    }
    if (!device.details.uses) {
      device.details.uses = [];
    }
    if (!device.details.compatibleAccessories) {
      device.details.compatibleAccessories = [];
    }
  }
  
  return device;
};

export const findDeviceByBarcode = (barcode: string) => {
  return devices.find(device => device.id === barcode);
};

export const getFeaturedDevices = () => devices.filter(device => device.featured);

export const getCategoryDevices = (categoryId: string) => devices.filter(device => 
  device.category.toLowerCase() === categoryId.replace('-', ' ')
);

export const getRecommendedAccessories = (deviceId: string) => {
  const device = getDeviceById(deviceId);
  if (!device) return [];
  
  switch(device.category) {
    case 'Cameras':
      return devices.filter(d => d.category === 'Lenses' || d.category === 'Audio' || d.category === 'Tripods').slice(0, 3);
    case 'Lenses':
      return devices.filter(d => d.category === 'Filters' || d.category === 'Accessories').slice(0, 3);
    case 'Lighting':
      return devices.filter(d => d.category === 'Accessories' || d.category === 'Lighting').slice(0, 3);
    default:
      return devices.filter(d => d.category === 'Accessories').slice(0, 3);
  }
};

export const searchDevices = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  return devices.filter(device => 
    device.name.toLowerCase().includes(lowercaseQuery) || 
    device.category.toLowerCase().includes(lowercaseQuery) || 
    device.details.description.toLowerCase().includes(lowercaseQuery)
  );
};
