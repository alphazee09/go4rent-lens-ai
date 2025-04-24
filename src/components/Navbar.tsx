
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Camera, User, Search } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 glass-effect p-2">
      <div className="flex justify-around items-center">
        <Link to="/" className={`flex flex-col items-center py-2 px-5 ${isActive('/') ? 'text-go4rent-turquoise' : 'text-gray-400'}`}>
          <Home size={24} />
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link to="/search" className={`flex flex-col items-center py-2 px-5 ${isActive('/search') ? 'text-go4rent-turquoise' : 'text-gray-400'}`}>
          <Search size={24} />
          <span className="text-xs mt-1">Search</span>
        </Link>
        <Link to="/scanner" className="flex flex-col items-center">
          <div className="bg-go4rent-turquoise rounded-full p-3 -mt-8 shadow-lg">
            <Camera size={24} className="text-go4rent-dark" />
          </div>
          <span className="text-xs mt-1 text-go4rent-turquoise">Scan</span>
        </Link>
        <Link to="/profile" className={`flex flex-col items-center py-2 px-5 ${isActive('/profile') ? 'text-go4rent-turquoise' : 'text-gray-400'}`}>
          <User size={24} />
          <span className="text-xs mt-1">Profile</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
