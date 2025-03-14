import React from 'react';
import { Link } from 'react-router-dom';
import { Database, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Database className="h-8 w-8 mr-2" />
              <span className="text-xl font-bold">CloseBy</span>
            </div>
            <p className="text-gray-400 mb-4">
              Transforming location data into actionable insights for businesses worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-white">Pricing</Link></li>
              <li><Link to="/integration" className="text-gray-400 hover:text-white">Integration</Link></li>
              <li><Link to="/demo" className="text-gray-400 hover:text-white">Book a Demo</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-gray-400 hover:text-white">Terms & Conditions</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Acceptable Use</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin size={16} className="mr-2 text-indigo-400" />
                <span className="text-gray-400">1 Finsbury Ave, City of London, London EC2M 2PF</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-indigo-400" />
                <span className="text-gray-400">info@closeby.com</span>
              </li>
              <li className="mt-4">
                <Link to="/contact-sales" className="text-gray-400 hover:text-white">
                  Contact Sales
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} CloseBy Data Service. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;