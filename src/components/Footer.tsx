import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Heart className="h-6 w-6 text-red-500 mr-2" />
            <span className="text-xl font-semibold">GiftWave</span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-purple-400 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              Support
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          © {new Date().getFullYear()} GiftWave. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;