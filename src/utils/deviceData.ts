
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
      description: 'Professional full-frame mirrorless camera perfect for photography and videography.'
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
      description: 'Versatile full-frame camera with excellent stills and video performance.'
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
      mountCompatibility: ['Sony E', 'Leica L'],
      aperture: 'f/2.8',
      description: 'Professional-grade standard zoom lens with exceptional image quality.'
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
  }
];

export const getFeaturedDevices = () => devices.filter(device => device.featured);
export const getCategoryDevices = (categoryId: string) => devices.filter(device => 
  device.category.toLowerCase() === categoryId.replace('-', ' ')
);

