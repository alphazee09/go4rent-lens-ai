
import React, { useState } from 'react';
import { Aperture, Camera, ChevronRight, Search, Zap, ThumbsUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import EquipmentCard from '@/components/EquipmentCard';
import AIRecommendation from '@/components/AIRecommendation';
import { categories, devices, getFeaturedDevices } from '@/utils/deviceData';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [recommendations, setRecommendations] = useState<any[]>([]);
  
  const featuredDevices = getFeaturedDevices();

  return (
    <div className="min-h-screen bg-go4rent-dark pb-20">
      {/* Header */}
      <div className="p-4 pt-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <img 
              src="/lovable-uploads/b1966c7b-cd0c-4480-ab0c-f9b823e53984.png" 
              alt="Go4Rent Logo" 
              className="h-10"
            />
          </div>
          <Link to="/search">
            <div className="p-2 rounded-full bg-secondary">
              <Search size={20} className="text-go4rent-gray" />
            </div>
          </Link>
        </div>
        
        <div className="mb-6">
          <h1 className="text-2xl font-semibold mb-1">Hi there</h1>
          <p className="text-go4rent-gray">What equipment will you rent today?</p>
        </div>
        
        {/* Search bar */}
        <div className="relative mb-8">
          <input 
            type="text" 
            placeholder="Search for cameras, lenses, lighting..."
            className="w-full bg-secondary rounded-xl px-4 py-3 pl-10 text-white focus:outline-none focus:ring-1 focus:ring-go4rent-turquoise"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="absolute left-3 top-3.5">
            <Search size={18} className="text-go4rent-gray" />
          </div>
        </div>
      </div>
      
      {/* Recommendations */}
      {recommendations.length > 0 && (
        <div className="px-4 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium flex items-center">
              <ThumbsUp size={18} className="text-go4rent-turquoise mr-2" />
              AI Recommendations
            </h2>
            <Link to="/search" className="text-go4rent-turquoise text-sm flex items-center">
              View all <ChevronRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            {recommendations.map((device) => (
              <EquipmentCard 
                key={device.id}
                id={device.id}
                name={device.name}
                category={device.category}
                price={device.price}
                currency={device.currency}
                image={device.image}
                rating={device.rating}
                featured={device.featured}
              />
            ))}
          </div>
        </div>
      )}
      
      {/* Categories */}
      <div className="px-4 mb-8">
        <h2 className="text-lg font-medium mb-4">Categories</h2>
        <div className="grid grid-cols-2 gap-3">
          {categories.map((category) => (
            <Link to={`/category/${category.id}`} key={category.id}>
              <div className="category-card h-28">
                <div 
                  className="absolute inset-0 bg-cover bg-center rounded-2xl opacity-20"
                  style={{ backgroundImage: `url(${category.image})` }}
                />
                <div className="relative h-full flex flex-col justify-between">
                  <div className="p-2 bg-go4rent-turquoise rounded-lg w-10 h-10 flex items-center justify-center">
                    {category.icon === 'camera' && <Camera size={20} className="text-go4rent-dark" />}
                    {category.icon === 'aperture' && <Aperture size={20} className="text-go4rent-dark" />}
                    {category.icon === 'zap' && <Zap size={20} className="text-go4rent-dark" />}
                    {/* Add more icon conditions as needed */}
                  </div>
                  <div>
                    <h3 className="font-medium">{category.name}</h3>
                    <p className="text-xs text-gray-400 truncate">{category.description}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      {/* Featured Equipment */}
      <div className="px-4 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">Featured Equipment</h2>
          <Link to="/search" className="text-go4rent-turquoise text-sm flex items-center">
            View all <ChevronRight size={16} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 gap-4">
          {devices.slice(0, 4).map((device) => (
            <EquipmentCard 
              key={device.id}
              id={device.id}
              name={device.name}
              category={device.category}
              price={device.price}
              currency={device.currency}
              image={device.image}
              rating={device.rating}
              featured={device.featured}
            />
          ))}
        </div>
      </div>
      
      {/* AI Recommendation Button */}
      <AIRecommendation onRecommendation={setRecommendations} />
      
      {/* Navigation */}
      <Navbar />
    </div>
  );
};

export default Index;
