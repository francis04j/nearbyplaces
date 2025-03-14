import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, BarChart, Zap, Shield, Users, Globe } from 'lucide-react';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Location Data Intelligence for the Modern Business
              </h1>
              <p className="text-xl mb-8 text-indigo-100">
                Using the power of A.I and Data analytics, CloseBy provides location data to help businesses create exceptional customer experiences and make smarter decisions.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/playground" className="bg-transparent border border-white text-white px-6 py-3 rounded-md font-medium text-center hover:bg-white/10 transition">
                  Try Playground
                </Link>
                <Link to="/demo" className="bg-white text-indigo-900 px-6 py-3 rounded-md font-medium text-center hover:bg-indigo-100 transition">
                  Book a Demo
                </Link>
                
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://imagesforcloseby.blob.core.windows.net/closeby/amenities.png" 
                alt="Nearby amenities" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful Location Data Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive suite of location-based services helps businesses understand customer behavior, optimize operations, and drive growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="bg-indigo-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-5">
                <MapPin className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Precise Geolocation</h3>
              <p className="text-gray-600">
                Access highly accurate location data with our advanced positioning technology, supporting both indoor and outdoor environments.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="bg-indigo-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-5">
                <BarChart className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Advanced Analytics</h3>
              <p className="text-gray-600">
                Transform raw location data into actionable insights with our powerful analytics platform and customizable dashboards.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="bg-indigo-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-5">
                <Zap className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Real-time Processing</h3>
              <p className="text-gray-600">
                Process millions of location events in real-time to enable instant decision-making and responsive customer experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose CloseBy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're trusted by businesses worldwide for our reliable data, innovative solutions, and exceptional support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex">
              <div className="mr-4">
                <Globe className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Better than Google</h3>
                <p className="text-gray-600">
                  Our API result is the correct and reflective of what you see on our site unlike Google. We also support all types of amenities unlike Google API.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4">
                <Zap className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Unmatched Performance</h3>
                <p className="text-gray-600">
                  Our infrastructure is built to handle billions of data points with minimal latency and maximum reliability.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4">
                <Users className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Dedicated Support</h3>
                <p className="text-gray-600">
                  Our team of experts is available 24/7 to help you implement and optimize our solutions for your business.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4">
                <Globe className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">UK Coverage</h3>
                <p className="text-gray-600">
                  Our services cover over all counties and regions, providing truly british location intelligence.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4">
                <BarChart className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Actionable Insights</h3>
                <p className="text-gray-600">
                  Turn complex location data into clear, actionable insights that drive business growth and innovation.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4">
                <MapPin className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Precision Targeting</h3>
                <p className="text-gray-600">
                  Reach the right customers at the right time with location-based targeting and personalization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to transform your business with location data?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join thousands of businesses that trust CloseBy for their location intelligence needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/demo" className="bg-white text-indigo-900 px-6 py-3 rounded-md font-medium text-center hover:bg-indigo-100 transition">
                Book a Demo
              </Link>
              <Link to="/playground" className="bg-transparent border border-white text-white px-6 py-3 rounded-md font-medium text-center hover:bg-white/10 transition">
                Try Playground
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;