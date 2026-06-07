import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import tourImage from '../assets/tour.png';
import jobImage from '../assets/coffee.png';


const Projects = () => {
  const projects = [
    {
      title: 'Coffee Booking Website',
      description:
        'An intuitive product that helps coffee enthusiasts discover cafés, check availability in real time, and reserve seats effortlessly. Built with Supabase for lightning fast data sync.',
      impact: 'Reduced booking friction by 60% during user testing.',
      technologies: ['React', 'Vite', 'TypeScript', 'Supabase', 'Tailwind CSS'],
      image: jobImage,
      github: 'https://github.com/jhunu07/coffeebooking',
      demo: 'https://coffeebooking-three.vercel.app/',
    },
    {
      title: 'Tour and Travels',
      description:
        'A curated travel experience platform that pairs interactive maps with custom itineraries. Includes location intelligence, wishlist syncing, and responsive storytelling layouts.',
      impact: 'Crafted a modular UI kit that cut new destination launch time in half.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      image: tourImage,
      github: 'https://github.com/jhunu07/tour_travel',
      demo: 'https://tour-travel-jet.vercel.app/',
    },
    {
      title: 'Job Portal',
      description:
        'A full-stack hiring marketplace with secure authentication, saved searches, and recruiter dashboards. Architected REST APIs, role-based access, and reusable UI primitives.',
      impact: 'Deployed scalable Node services with automated email triggers.',
      technologies: [
        'React',
        'Node.js',
        'Express',
        'MongoDB',
        'Clerk',
        'Tailwind CSS',
      ],
      image:
        'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=520&fit=crop',
      github: 'https://github.com/jhunu07/job-portal',
      demo: 'https://jobportal-seven-alpha.vercel.app/',
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, delay: index * 0.1 },
    }),
  };

  return (
    <motion.section
      id="projects"
      className="py-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-purple-200/70">
            Selected Work
          </p>
          <h2 className="mt-3 text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Projects with measurable impact
          </h2>
          <p className="mt-4 text-gray-400">
            Each build balances engineering rigor with thoughtful UX, grounded
            by clean architecture, performance budgets, and clear success
            metrics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70" />
                <div className="absolute bottom-4 left-4 rounded-full bg-black/60 px-4 py-1 text-xs uppercase tracking-wider text-white/80">
                  Case Study
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-purple-200 transition">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <p className="text-sm text-purple-200/80">{project.impact}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={`${project.title}-${tech}`}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
