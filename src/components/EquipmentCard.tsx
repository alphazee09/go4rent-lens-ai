
import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

interface EquipmentCardProps {
  id: string;
  name: string;
  category: string;
  price: number;
  currency: string;
  image: string;
  rating: number;
  featured?: boolean;
}

const EquipmentCard: React.FC<EquipmentCardProps> = ({
  id,
  name,
  category,
  price,
  currency,
  image,
  rating,
  featured = false
}) => {
  return (
    <Link to={`/equipment/${id}`}>
      <div className={`device-card mb-4 ${featured ? 'border border-go4rent-turquoise/50' : ''}`}>
        <div className="relative">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-48 object-cover"
          />
          {featured && (
            <div className="absolute top-2 right-2 bg-go4rent-turquoise px-2 py-1 rounded text-xs font-medium text-go4rent-dark">
              Featured
            </div>
          )}
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium text-white">{name}</h3>
              <p className="text-sm text-gray-400">{category}</p>
            </div>
            <div className="flex items-center text-sm">
              <Star size={14} className="text-yellow-400 mr-1" fill="currentColor" />
              <span>{rating.toFixed(1)}</span>
            </div>
          </div>
          <div className="mt-3 text-go4rent-turquoise font-semibold">
            {currency} {price.toFixed(2)}/day
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EquipmentCard;
