import React from 'react';
import { Code, Globe, Database, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Engineering',
      description: 'Design systems, component libraries, and performant SPA architectures.',
      icon: <Code className="h-5 w-5 text-purple-300" />,
      skills: ['React / Next.js', 'TypeScript', 'Tailwind CSS', 'Accessibility (a11y)'],
    },
    {
      title: 'Backend & Cloud',
      description: 'API-first development with security, caching, and monitoring in mind.',
      icon: <Database className="h-5 w-5 text-purple-300" />,
      skills: ['Node.js / Express', 'MongoDB / Supabase', 'REST & GraphQL', 'CI/CD (GitHub Actions)'],
    },
    {
      title: 'Programming Languages',
      description: 'Writing clean, maintainable code across paradigms.',
      icon: <Globe className="h-5 w-5 text-purple-300" />,
      skills: ['JavaScript / TypeScript', 'Python', 'Java', 'C Programming'],
    },
    {
      title: 'Tools & Craft',
      description: 'Processes that keep teams aligned and shipping fast.',
      icon: <Wrench className="h-5 w-5 text-purple-300" />,
      skills: ['Git / GitHub', 'Docker & containerization', 'Figma & design handoff', 'Agile rituals & documentation'],
    },
  ];

  return (
    <motion.section
      id="skills"
      className="py-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-purple-200/70">
            Core expertise
          </p>
          <h2 className="mt-3 text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & technologies
          </h2>
          <p className="mt-4 text-gray-400">
            A balanced toolkit across design, development, and delivery pipelines to
            ship polished products end-to-end.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                  <p className="text-sm text-gray-400">{category.description}</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={`${category.title}-${skill}`}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-100 hover:border-purple-300 hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
