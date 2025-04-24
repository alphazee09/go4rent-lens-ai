
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Star, Calendar, Camera, Info, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { getDeviceById } from '@/utils/deviceData';
import { useToast } from '@/hooks/use-toast';

const Equipment = () => {
  const { id } = useParams<{ id: string }>();
  const [rentalDays, setRentalDays] = useState(1);
  const [activeTab, setActiveTab] = useState<'specs' | 'benefits' | 'uses'>('specs');
  const { toast } = useToast();
  
  const device = getDeviceById(id || '');
  
  if (!device) {
    return (
      <div className="min-h-screen bg-go4rent-dark flex flex-col items-center justify-center p-4">
        <div className="text-center">
          <h2 className="text-xl font-medium mb-2">Equipment Not Found</h2>
          <p className="text-gray-400 mb-6">The equipment you're looking for doesn't exist or has been removed.</p>
          <Link to="/" className="button-primary">Back to Home</Link>
        </div>
      </div>
    );
  }

  const handleIncrement = () => {
    setRentalDays((prev) => Math.min(prev + 1, 30));
  };

  const handleDecrement = () => {
    setRentalDays((prev) => Math.max(prev - 1, 1));
  };
  
  const handleRentNow = () => {
    toast({
      title: "Equipment Reserved",
      description: `${device.name} has been reserved for ${rentalDays} days.`,
    });
  };

  const totalPrice = device.price * rentalDays;

  return (
    <div className="min-h-screen bg-go4rent-dark pb-20">
      {/* Back Navigation */}
      <div className="relative">
        <div className="absolute top-4 left-4 z-10">
          <Link to="/" className="p-2 glass-effect rounded-full">
            <ChevronLeft size={24} className="text-white" />
          </Link>
        </div>
        
        {/* Equipment Image */}
        <div className="h-72 bg-black">
          <img 
            src={device.image} 
            alt={device.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      {/* Equipment Details */}
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-semibold">{device.name}</h1>
            <p className="text-gray-400">{device.category}</p>
          </div>
          <div className="flex items-center bg-secondary px-2 py-1 rounded">
            <Star size={16} className="text-yellow-400 mr-1" fill="currentColor" />
            <span className="font-medium">{device.rating.toFixed(1)}</span>
          </div>
        </div>
        
        <div className="mt-4">
          <p className="text-gray-300">{device.description}</p>
        </div>
        
        {/* Rental Period Selection */}
        <div className="mt-6 glass-effect p-4 rounded-lg">
          <div className="flex items-center mb-4">
            <Calendar size={18} className="text-go4rent-turquoise mr-2" />
            <h3 className="font-medium">Rental Period</h3>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button 
                onClick={handleDecrement}
                disabled={rentalDays <= 1}
                className={`w-8 h-8 flex items-center justify-center rounded-full border ${rentalDays <= 1 ? 'border-gray-700 text-gray-700' : 'border-go4rent-turquoise text-go4rent-turquoise'}`}
              >
                -
              </button>
              <span className="mx-4 font-medium text-lg">{rentalDays} day{rentalDays > 1 ? 's' : ''}</span>
              <button 
                onClick={handleIncrement}
                disabled={rentalDays >= 30}
                className={`w-8 h-8 flex items-center justify-center rounded-full border ${rentalDays >= 30 ? 'border-gray-700 text-gray-700' : 'border-go4rent-turquoise text-go4rent-turquoise'}`}
              >
                +
              </button>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-400">Total</p>
              <p className="text-xl font-semibold text-go4rent-turquoise">
                {device.currency} {totalPrice.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
        
        {/* Information Tabs */}
        <div className="mt-6">
          <div className="flex border-b border-gray-700">
            <button 
              onClick={() => setActiveTab('specs')}
              className={`flex-1 pb-2 text-center ${activeTab === 'specs' ? 'text-go4rent-turquoise border-b-2 border-go4rent-turquoise' : 'text-gray-400'}`}
            >
              Specifications
            </button>
            <button 
              onClick={() => setActiveTab('benefits')}
              className={`flex-1 pb-2 text-center ${activeTab === 'benefits' ? 'text-go4rent-turquoise border-b-2 border-go4rent-turquoise' : 'text-gray-400'}`}
            >
              Benefits
            </button>
            <button 
              onClick={() => setActiveTab('uses')}
              className={`flex-1 pb-2 text-center ${activeTab === 'uses' ? 'text-go4rent-turquoise border-b-2 border-go4rent-turquoise' : 'text-gray-400'}`}
            >
              Uses
            </button>
          </div>
          
          <div className="mt-4">
            {activeTab === 'specs' && (
              <div className="space-y-3">
                {Object.entries(device.specifications).map(([key, value], index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-400 capitalize">{key.replace('_', ' ')}</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </div>
            )}
            
            {activeTab === 'benefits' && (
              <div className="space-y-3">
                {device.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle size={16} className="text-go4rent-turquoise mr-2 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            )}
            
            {activeTab === 'uses' && (
              <div className="grid grid-cols-2 gap-3">
                {device.photographyTypes.map((type, index) => (
                  <div key={index} className="glass-effect p-3 rounded-lg">
                    <Camera size={16} className="text-go4rent-turquoise mb-2" />
                    <span className="text-sm text-gray-300">{type}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        
        {/* Compatible Accessories */}
        <div className="mt-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium flex items-center">
              <Info size={18} className="text-go4rent-turquoise mr-2" />
              Compatible Accessories
            </h3>
            <Link to={`/accessories/${device.id}`} className="text-sm text-go4rent-turquoise">
              View All
            </Link>
          </div>
          
          <div className="overflow-x-auto pb-2">
            <div className="flex space-x-3" style={{minWidth: "max-content"}}>
              {device.accessories.map((accessory) => (
                <div key={accessory.id} className="glass-effect rounded-lg w-40 flex-shrink-0">
                  <img 
                    src={accessory.image}
                    alt={accessory.name}
                    className="w-full h-24 object-cover rounded-t-lg"
                  />
                  <div className="p-2">
                    <h4 className="text-sm font-medium truncate">{accessory.name}</h4>
                    <p className="text-xs text-gray-400">Compatible</p>
                    <p className="text-go4rent-turquoise text-sm font-medium mt-1">
                      {accessory.currency} {accessory.price.toFixed(2)}/day
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Rent Button */}
      <div className="fixed bottom-20 left-0 right-0 p-4 bg-gradient-to-t from-go4rent-dark to-transparent">
        <button 
          onClick={handleRentNow}
          className="button-primary w-full"
        >
          Rent Now
        </button>
      </div>
      
      <Navbar />
    </div>
  );
};

export default Equipment;
