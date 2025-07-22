import React from 'react';
import { Github, Linkedin, Mail, Download, User } from 'lucide-react';

const Hero = () => {
  return (
    <section id="about" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="relative inline-block mb-8">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                <User className="w-20 h-20 text-purple-400" />
              </div>
            </div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-green-500 w-6 h-6 rounded-full border-4 border-slate-800"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
           Jhunnu kumar
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Computer Science Student & Full Stack Developer
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Passionate about creating innovative web solutions and building user-friendly applications. 
            Currently pursuing my Bachelor's degree while working on exciting projects that push the boundaries of technology.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-3 rounded-full transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-purple-500/25">
              <Download className="w-5 h-5" />
              <a href="https://drive.google.com/file/d/1Weefbo7Xgw-gsTWd_UrdO1rAQNO6PSu0/view?usp=drive_link">Download Resume</a> 
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full transition-all duration-300">
             <a href="#projects" >
              View My Work
                 
              </a>
            </button>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="https://github.com/jhunu07" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/jhunnu-k-0a5419267/" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
              <Linkedin className="w-6 h-6" />
            </a>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;