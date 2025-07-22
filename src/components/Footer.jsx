import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-400 mb-4">
          © 2025 Jhunnu kumar. Built with ❤ 
        </p>
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/jhunu07" className="text-gray-400 hover:text-purple-400 transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/jhunnu-k-0a5419267/" className="text-gray-400 hover:text-purple-400 transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
      
        </div>
      </div>
    </footer>
  );
};

export default Footer;