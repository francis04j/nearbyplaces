import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Database, ChevronDown, MapPin, History, Wifi, TrendingUp, Gamepad2, UserCircle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { trackEvent } from '../utils/analytics';

const Navbar = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const productCategories = {
    'Location Amenities Data': {
      icon: <MapPin className="w-6 h-6 text-indigo-600" />,
      description: 'Discover nearby points of interest and amenities',
      items: [
        { name: 'DayCare/Nursery', path: '/product/amenities/daycare' },
        { name: 'API Playground', path: '/playground' },
        { name: 'Gym', path: '#' },
        { name: 'Supermarkets', path: '#' },
        { name: 'Restaurants', path: '#' },
        { name: 'Parks', path: '#' }
      ]
    },
    'Location Historical Data': {
      icon: <History className="w-6 h-6 text-indigo-600" />,
      description: 'Access historical location data and trends',
      items: []
    },
    'Location Broadband Data': {
      icon: <Wifi className="w-6 h-6 text-indigo-600" />,
      description: 'Analyze internet connectivity and speeds',
      items: []
    },
    'Location Prospects': {
      icon: <TrendingUp className="w-6 h-6 text-indigo-600" />,
      description: 'Identify growth opportunities in locations',
      items: []
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsProductMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleAccountClick = () => {
    trackEvent({
      category: 'Navigation',
      action: 'Click',
      label: currentUser ? 'Account' : 'Sign Up'
    });
    
    if (currentUser) {
      navigate('/account');
    } else {
      navigate('/signup');
    }
  };

  const handleNavClick = (label: string) => {
    trackEvent({
      category: 'Navigation',
      action: 'Click',
      label
    });
  };

  const handleProductItemClick = (name: string) => {
    trackEvent({
      category: 'Product Navigation',
      action: 'Click',
      label: name
    });
    setIsProductMenuOpen(false);
  };

  return (
    <nav className="bg-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" onClick={() => handleNavClick('Home')} className="flex items-center">
              <Database className="h-8 w-8 mr-2" />
              <div className="flex flex-col">
                <span className="text-xl font-bold">CloseBy</span>
                <span className="text-xs italic -mt-1">amenities</span>
              </div>
            </Link>
          </div>
          <div className="hidden md:block relative">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link 
                to="/" 
                onClick={() => handleNavClick('Home')}
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-800"
              >
                Home
              </Link>
              
              {/* Product Dropdown */}
              <div className="relative" ref={menuRef}>
                <button
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-800 flex items-center"
                  onClick={() => {
                    setIsProductMenuOpen(!isProductMenuOpen);
                    handleNavClick('Product Menu');
                  }}
                >
                  Product
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isProductMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isProductMenuOpen && (
                  <div className="absolute left-[-120px] mt-2 w-[700px] bg-white rounded-lg shadow-lg z-50">
                    <div className="grid grid-cols-2 gap-x-8 gap-y-6 p-8">
                      {Object.entries(productCategories).map(([category, { icon, description, items }]) => (
                        <div key={category} className="group">
                          <div className="flex items-start">
                            <div className="flex-shrink-0">{icon}</div>
                            <div className="ml-4">
                              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600">
                                {category}
                              </h3>
                              <p className="mt-1 text-sm text-gray-500">{description}</p>
                              {items.length > 0 && (
                                <div className="mt-4 space-y-2">
                                  {items.map((item) => (
                                    <Link
                                      key={item.name}
                                      to={item.path}
                                      className="block text-sm text-gray-600 hover:bg-indigo-600 hover:text-white px-2 py-1 rounded-md transition-colors duration-150"
                                      onClick={() => handleProductItemClick(item.name)}
                                    >
                                      {item.name}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link 
                to="/pricing" 
                onClick={() => handleNavClick('Pricing')}
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-800"
              >
                Pricing
              </Link>
              <Link 
                to="/integration" 
                onClick={() => handleNavClick('Integration')}
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-800"
              >
                Integration
              </Link>
              <Link 
                to="/demo" 
                onClick={() => handleNavClick('Book a Demo')}
                className="px-3 py-2 rounded-md text-sm font-medium bg-indigo-600 hover:bg-indigo-700"
              >
                Book a Demo
              </Link>
              <button
                onClick={handleAccountClick}
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-800 flex items-center"
              >
                <UserCircle className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-indigo-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-800"
              onClick={() => {
                handleNavClick('Home');
                setIsOpen(false);
              }}
            >
              Home
            </Link>
            
            {/* Mobile Product Menu */}
            {Object.entries(productCategories).map(([category, { icon, description, items }]) => (
              <div key={category} className="block px-3 py-2">
                <div className="flex items-center text-base font-medium">
                  {icon}
                  <span className="ml-2">{category}</span>
                </div>
                <p className="mt-1 text-sm text-gray-300">{description}</p>
                {items.length > 0 && (
                  <div className="pl-8 mt-2 space-y-1">
                    {items.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="block px-3 py-2 text-sm text-gray-300 hover:bg-indigo-800 rounded-md"
                        onClick={() => {
                          handleProductItemClick(item.name);
                          setIsOpen(false);
                        }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <Link 
              to="/pricing" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-800"
              onClick={() => {
                handleNavClick('Pricing');
                setIsOpen(false);
              }}
            >
              Pricing
            </Link>
            <Link 
              to="/integration" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-800"
              onClick={() => {
                handleNavClick('Integration');
                setIsOpen(false);
              }}
            >
              Integration
            </Link>
            <Link 
              to="/demo" 
              className="block px-3 py-2 rounded-md text-base font-medium bg-indigo-600 hover:bg-indigo-700"
              onClick={() => {
                handleNavClick('Book a Demo');
                setIsOpen(false);
              }}
            >
              Book a Demo
            </Link>
            <button
              onClick={() => {
                handleAccountClick();
                setIsOpen(false);
              }}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-800"
            >
              Account
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;