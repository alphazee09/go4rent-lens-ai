
import React from 'react';
import { User, Settings, LogOut, Package, Clock, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { toast } = useToast();
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut();
    navigate('/auth/login');
  };

  // Mock rental history data
  const rentalHistory = [
    {
      id: 'rent-1',
      device: 'Canon EOS R5',
      date: '15 Apr 2025',
      status: 'active',
      image: 'https://images.unsplash.com/photo-1516724562728-afc824a36e84'
    },
    {
      id: 'rent-2',
      device: 'DJI Ronin RS3',
      date: '10 Apr 2025',
      status: 'returned',
      image: 'https://images.unsplash.com/photo-1652728423241-c913165764c7'
    }
  ];

  return (
    <div className="min-h-screen bg-go4rent-dark pb-20">
      {/* Profile Header */}
      <div className="pt-8 pb-6 px-4 border-b border-gray-800">
        <div className="flex items-center">
          <div className="bg-secondary w-16 h-16 rounded-full flex items-center justify-center mr-4">
            <User size={28} className="text-go4rent-turquoise" />
          </div>
          <div>
            <h1 className="text-xl font-semibold">{user?.email || 'User'}</h1>
            <p className="text-gray-400">{user?.email}</p>
          </div>
        </div>
      </div>
      
      {/* Active Rentals */}
      <div className="px-4 pt-6 pb-4">
        <h2 className="text-lg font-medium mb-4 flex items-center">
          <Package size={18} className="text-go4rent-turquoise mr-2" />
          Active Rentals
        </h2>
        
        {rentalHistory.filter(item => item.status === 'active').map(rental => (
          <div key={rental.id} className="glass-effect rounded-lg p-3 mb-3">
            <div className="flex">
              <img 
                src={rental.image} 
                alt={rental.device}
                className="w-16 h-16 object-cover rounded-lg mr-3" 
              />
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium">{rental.device}</h3>
                  <span className="text-xs bg-go4rent-turquoise text-go4rent-dark px-2 py-0.5 rounded">Active</span>
                </div>
                <p className="text-sm text-gray-400 mt-1">Rented on {rental.date}</p>
                <button className="text-sm text-go4rent-turquoise mt-2">View Details</button>
              </div>
            </div>
          </div>
        ))}
        
        {rentalHistory.filter(item => item.status === 'active').length === 0 && (
          <div className="text-center py-8 text-gray-400">
            <Package size={36} className="mx-auto mb-3 text-gray-600" />
            <p>No active rentals</p>
          </div>
        )}
      </div>
      
      {/* Rental History */}
      <div className="px-4 pt-4 pb-6">
        <h2 className="text-lg font-medium mb-4 flex items-center">
          <Clock size={18} className="text-go4rent-turquoise mr-2" />
          Rental History
        </h2>
        
        {rentalHistory.filter(item => item.status === 'returned').map(rental => (
          <div key={rental.id} className="glass-effect rounded-lg p-3 mb-3">
            <div className="flex">
              <img 
                src={rental.image} 
                alt={rental.device}
                className="w-16 h-16 object-cover rounded-lg mr-3" 
              />
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium">{rental.device}</h3>
                  <span className="text-xs bg-gray-700 text-gray-300 px-2 py-0.5 rounded">Returned</span>
                </div>
                <p className="text-sm text-gray-400 mt-1">Rented on {rental.date}</p>
                <button className="text-sm text-go4rent-turquoise mt-2">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Settings */}
      <div className="px-4">
        <div className="glass-effect rounded-lg divide-y divide-gray-800">
          <div className="p-4 flex justify-between items-center">
            <div className="flex items-center">
              <Settings size={18} className="text-go4rent-turquoise mr-3" />
              <span>Settings</span>
            </div>
            <ChevronRight size={18} className="text-gray-400" />
          </div>
          
          <div 
            className="p-4 flex justify-between items-center cursor-pointer"
            onClick={handleLogout}
          >
            <div className="flex items-center">
              <LogOut size={18} className="text-red-500 mr-3" />
              <span>Log Out</span>
            </div>
            <ChevronRight size={18} className="text-gray-400" />
          </div>
        </div>
      </div>
      
      <Navbar />
    </div>
  );
};

export default Profile;
