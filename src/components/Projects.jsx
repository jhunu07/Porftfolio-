import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import tourImage from '../assets/tour.png.png';


import jobImage from '../assets/coffee.png.png';


const Projects = () => {
  const projects = [
    {
      title: "Coffee Booking Website",
      description: "An intuitive application designed to let users discover cafés, check availability, and book tables ahead of time for a smooth, hassle-free experience.",
      technologies: ['React', "Vite", "TypeScript", "Supabase", "Tailwind CSS"],
      image: jobImage,
      github: "https://github.com/jhunu07/coffeebooking",
      demo: "https://coffeebooking-three.vercel.app/"
    },
    {
      title: "Tour and Travels",
      description: "A feature-rich platform that empowers users to explore tourist destinations, browse curated travel packages, and navigate locations through interactive maps—all tailored to user preferences.",
      technologies: ["React", "TypeScript", "Tailwind CSS", 'Vite'],
      image: tourImage,
      github: "https://github.com/jhunu07/tour_travel",
      demo: "https://tour-travel-jet.vercel.app/"
    },
    {
      title: "Job Portal",
      description: "A full stack modern job portal enabling users to browse job listings, apply for positions, and monitor application progress, built with a scalable architecture and secure authentication.",
      technologies: ["React", "JavaScript", "Node.js", "Express", "Clerk", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop", // Fallback image
      github: " ", // Leave empty if unavailable
      demo: ""
    }
  ];

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          My Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-purple-600/20 text-purple-300 px-2 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
