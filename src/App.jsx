import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

const sections = ['about', 'education', 'projects', 'skills', 'contact'];

const App = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.35 }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative min-h-screen bg-slate-950 overflow-hidden text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-12 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute top-1/4 right-0 h-80 w-80 rounded-full bg-pink-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <div className="relative z-10">
        <Navbar
          activeSection={activeSection}
          onSectionChange={setActiveSection}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
        <div className="pt-24 pb-14 px-4 sm:px-6 lg:px-8 space-y-10">
          <Hero />
          <Education />
          <Projects />
          <Skills />
          <Contact />
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default App;