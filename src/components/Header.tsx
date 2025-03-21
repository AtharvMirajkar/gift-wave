import React from 'react';
import { Link } from 'react-router-dom';
import { Gift } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Gift className="h-8 w-8" />
            <span className="text-2xl font-bold">GiftWave</span>
          </Link>
          <div className="flex items-center space-x-6">
            <Link to="/" className="hover:text-purple-200 transition-colors">
              Home
            </Link>
            <Link to="/contact" className="hover:text-purple-200 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;