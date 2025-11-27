import React from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = ({ activeSection, onSectionChange, isMenuOpen, setIsMenuOpen }) => {
  const sections = ['about', 'education', 'projects', 'skills', 'contact'];

  const handleScroll = (sectionId) => {
    onSectionChange(sectionId);
    setIsMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full bg-slate-950/70 backdrop-blur-xl z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300 bg-clip-text text-transparent">
              Jhunnu&nbsp;Kumar
            </span>
          </div>
          
          <div className="hidden md:flex space-x-6 lg:space-x-8 text-sm uppercase tracking-wide">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => handleScroll(section)}
                className={`relative transition-colors duration-300 hover:text-purple-300 ${
                  activeSection === section ? 'text-purple-300' : 'text-gray-300'
                }`}
              >
                {section}
                {activeSection === section && (
                  <motion.div
                    className="absolute bottom-[-4px] left-0 right-0 h-[2px] bg-purple-400"
                    layoutId="underline"
                  />
                )}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

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