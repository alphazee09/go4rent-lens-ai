
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search as SearchIcon, X, Filter } from 'lucide-react';
import Navbar from '@/components/Navbar';
import EquipmentCard from '@/components/EquipmentCard';
import { searchDevices } from '@/utils/deviceData';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  
  useEffect(() => {
    if (searchQuery) {
      const results = searchDevices(searchQuery);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (searchQuery) {
      setSearchParams({ q: searchQuery });
      const results = searchDevices(searchQuery);
      setSearchResults(results);
    }
  };
  
  const clearSearch = () => {
    setSearchQuery('');
    setSearchParams({});
    setSearchResults([]);
  };

  return (
    <div className="min-h-screen bg-go4rent-dark pb-20">
      <div className="p-4 pt-8">
        <h1 className="text-2xl font-semibold mb-4">Search Equipment</h1>
        
        <form onSubmit={handleSearch} className="mb-6">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search for cameras, lenses, lighting..."
              className="w-full bg-secondary rounded-xl px-4 py-3 pl-10 pr-10 text-white focus:outline-none focus:ring-1 focus:ring-go4rent-turquoise"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute left-3 top-3.5">
              <SearchIcon size={18} className="text-go4rent-gray" />
            </div>
            {searchQuery && (
              <button 
                type="button"
                onClick={clearSearch}
                className="absolute right-12 top-3.5"
              >
                <X size={18} className="text-go4rent-gray" />
              </button>
            )}
            <button 
              type="button"
              onClick={() => setIsFiltersOpen(!isFiltersOpen)}
              className="absolute right-3 top-3.5"
            >
              <Filter size={18} className={isFiltersOpen ? "text-go4rent-turquoise" : "text-go4rent-gray"} />
            </button>
          </div>
        </form>
        
        {isFiltersOpen && (
          <div className="mb-6 p-4 bg-secondary/50 rounded-lg glass-effect">
            <h2 className="font-medium mb-3">Filters</h2>
            <div className="space-y-3">
              <div>
                <h3 className="text-sm text-gray-400 mb-1">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  <button className="text-xs px-3 py-1 bg-go4rent-turquoise/20 rounded-full border border-go4rent-turquoise/40">Cameras</button>
                  <button className="text-xs px-3 py-1 bg-secondary/80 rounded-full border border-gray-700">Lenses</button>
                  <button className="text-xs px-3 py-1 bg-secondary/80 rounded-full border border-gray-700">Lighting</button>
                  <button className="text-xs px-3 py-1 bg-secondary/80 rounded-full border border-gray-700">Audio</button>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm text-gray-400 mb-1">Price Range</h3>
                <div className="flex items-center space-x-3">
                  <input 
                    type="range" 
                    min="0" 
                    max="500" 
                    className="w-full accent-go4rent-turquoise"
                    defaultValue="250"
                  />
                </div>
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>0 OMR</span>
                  <span>500 OMR</span>
                </div>
              </div>
              
              <div className="flex justify-end">
                <button className="text-sm text-go4rent-turquoise">Apply Filters</button>
              </div>
            </div>
          </div>
        )}
        
        <div className="mt-4">
          {searchQuery ? (
            <>
              <p className="text-gray-400 mb-4">
                {searchResults.length} results for "{searchQuery}"
              </p>
              
              {searchResults.length > 0 ? (
                <div className="grid grid-cols-1 gap-4 mt-4">
                  {searchResults.map((device) => (
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
              ) : (
                <div className="text-center py-12">
                  <p>No results found for your search.</p>
                  <p className="text-gray-400 mt-2">Try using different keywords.</p>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <SearchIcon size={48} className="mx-auto text-gray-600 mb-4" />
              <p>Search for equipment by name, category, or features</p>
            </div>
          )}
        </div>
      </div>
      
      <Navbar />
    </div>
  );
};

export default Search;
