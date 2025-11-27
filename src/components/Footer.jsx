import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-10 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-slate-950/80">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-4 text-center">
        <p className="text-gray-400 max-w-2xl text-sm">
          Designed and built with ❤
        </p>
        <div className="flex space-x-5 text-gray-400">
          <a
            href="mailto:kumarjhunu7@gmail.com"
            className="flex items-center gap-2 text-sm transition hover:text-white"
          >
            <Mail className="w-4 h-4" />
            Email
          </a>
          <a
            href="https://github.com/jhunu07"
            className="flex items-center gap-2 text-sm transition hover:text-white"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jhunnu-k-0a5419267/"
            className="flex items-center gap-2 text-sm transition hover:text-white"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;