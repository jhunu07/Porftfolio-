import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-[#1e1e2f] via-[#2b2b40] to-[#1e1e2f] py-20 px-6 overflow-hidden text-white">
      <Navbar 
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <Hero />
      <Education />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;