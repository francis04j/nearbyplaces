import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, RefreshCw, Database, Shield, Phone, CheckCircle } from 'lucide-react';

const DayCareDataPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Comprehensive DayCare & Nursery Location Data
              </h1>
              <p className="text-xl mb-8 text-indigo-100">
                Access detailed information about childcare facilities near any location. Help your customers make informed decisions about properties based on nearby childcare options.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/demo" className="bg-white text-indigo-900 px-6 py-3 rounded-md font-medium text-center hover:bg-indigo-100 transition">
                  Book a Demo
                </Link>
                <Link to="/pricing" className="bg-transparent border border-white text-white px-6 py-3 rounded-md font-medium text-center hover:bg-white/10 transition">
                  View Pricing
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://i.dailymail.co.uk/i/newpix/2018/06/28/01/4D9AD92500000578-5806899-Luxury_childcare_centres_are_on_the_rise_across_Australia_with_m-a-25_1530146116263.jpg" 
                alt="Luxury daycare facility" 
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Childcare Facility Data</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our API provides detailed information about daycare centers and nurseries, helping businesses make data-driven decisions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="bg-indigo-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-5">
                <MapPin className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Location Details</h3>
              <p className="text-gray-600">
                Get precise location data including address, coordinates, and accessibility information for childcare facilities.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="bg-indigo-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-5">
                <Database className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Facility Information</h3>
              <p className="text-gray-600">
                Access detailed facility data including capacity, age groups served, operating hours, and available services.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="bg-indigo-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-5">
                <Shield className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Licensing & Safety</h3>
              <p className="text-gray-600">
                View licensing information, safety records, and inspection history for each facility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Elements Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Available Data Elements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive dataset includes the following information for each childcare facility:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Basic Information</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Facility name</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Full address</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Contact information</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Operating hours</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Facility Details</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Licensed capacity</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Age groups served</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Available programs</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Facility amenities</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Compliance Data</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>License status</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Last inspection date</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Quality ratings</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Accreditations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our daycare and nursery data services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-lg font-semibold mb-2">Where do you source your data?</h3>
              <p className="text-gray-600">
                We collect data from multiple authoritative sources, including government databases, licensing authorities, and direct partnerships with childcare providers. All data is verified and regularly updated to ensure accuracy.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">How often is the data updated?</h3>
              <p className="text-gray-600">
                Our database is updated daily with new facilities and changes to existing records. Major updates to inspection records and licensing information are processed within 24 hours of their release.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">What geographical areas do you cover?</h3>
              <p className="text-gray-600">
                We currently cover all registered childcare facilities in the United States, with plans to expand to additional countries. Our data includes both urban and rural areas.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">How can I access the data?</h3>
              <p className="text-gray-600">
                Data is available through our REST API with flexible query options. We offer multiple subscription tiers to suit different needs, from startups to enterprise organizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="bg-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to integrate childcare facility data?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact our team to learn more about how our daycare and nursery data can enhance your applications.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/demo" className="bg-white text-indigo-900 px-6 py-3 rounded-md font-medium text-center hover:bg-indigo-100 transition">
                Schedule a Demo
              </Link>
              <a href="mailto:sales@closeby.com" className="bg-transparent border border-white text-white px-6 py-3 rounded-md font-medium text-center hover:bg-white/10 transition">
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DayCareDataPage;