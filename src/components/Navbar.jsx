import React from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ activeSection, onSectionChange, isMenuOpen, setIsMenuOpen }) => {
  const sections = ['about', 'education', 'projects', 'skills', 'contact'];

  const handleScroll = (sectionId) => {
    onSectionChange(sectionId);
    setIsMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
           Portfolio
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => handleScroll(section)}
                className={`capitalize transition-all duration-300 hover:text-purple-400 ${
                  activeSection === section ? 'text-purple-400' : 'text-gray-300'
                }`}
              >
                {section}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => handleScroll(section)}
                className="block w-full text-left px-4 py-2 capitalize rounded-lg hover:bg-white/10 transition-colors"
              >
                {section}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;