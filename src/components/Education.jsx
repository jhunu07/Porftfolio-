import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const milestones = [
  {
    degree: 'Bachelor of Computer Engineering',
    school: 'Marwadi University',
    location: 'Rajkot, Gujarat',
    year: '2022 – 2026',
    gpa: '7.7 / 10.0',
    highlight: 'Focusing on full‑stack development, system design, and problem solving.',
    relevant: ['Data Structures', 'Web Development', 'Database Systems'],
  },
  {
    degree: 'Senior Secondary School (Class 12)',
    school: 'MSSG College',
    location: 'Bihar, India',
    year: '2020 – 2022',
    percentage: '77.2%',
    highlight: 'Built a strong foundation in mathematics, science, and communication.',
    relevant: ['Mathematics', 'Science', 'English', 'Hindi'],
  },
];

const Education = () => {
  return (
    <motion.section
      id="education"
      className="py-10 text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-purple-200/70">
            Academic Journey
          </p>
          <h2 className="mt-3 text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base">
            A brief look at the learning path that shaped my fundamentals in computer science,
            engineering, and problem‑solving.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] items-start">
          {/* Timeline */}
          <div className="space-y-6">
            {milestones.map((edu, index) => (
              <div key={edu.degree} className="relative pl-6">
                <div className="absolute left-0 top-2 h-full w-px bg-white/10" />
                <div className="absolute left-0 top-2 -translate-x-1/2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-purple-500/20 border border-purple-400/60">
                    <GraduationCap className="w-4 h-4 text-purple-200" />
                  </span>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur-md">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-white">
                      {edu.degree}
                    </h3>
                    <span className="flex items-center gap-1 text-xs text-gray-300">
                      <Calendar className="w-3 h-3" />
                      {edu.year}
                    </span>
                  </div>

                  <p className="mt-1 text-sm text-gray-300">
                    {edu.school}
                    {edu.location ? ` · ${edu.location}` : ''}
                  </p>

                  <div className="mt-2 flex flex-wrap gap-3 text-xs text-purple-200/80">
                    {edu.gpa && (
                      <span className="rounded-full border border-purple-400/40 bg-purple-500/10 px-3 py-1">
                        CGPA: {edu.gpa}
                      </span>
                    )}
                    {edu.percentage && (
                      <span className="rounded-full border border-purple-400/40 bg-purple-500/10 px-3 py-1">
                        Percentage: {edu.percentage}
                      </span>
                    )}
                  </div>

                  {edu.highlight && (
                    <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                      {edu.highlight}
                    </p>
                  )}

                  {edu.relevant && edu.relevant.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {edu.relevant.map((course) => (
                        <span
                          key={`${edu.degree}-${course}`}
                          className="rounded-full bg-purple-600/15 px-3 py-1 text-[11px] font-medium text-purple-200"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Summary card */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-7 backdrop-blur-md space-y-4">
            <h3 className="text-lg font-semibold text-white">Beyond the classroom</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
            Alongside my formal education, I love diving into hackathons, online courses,
             and open-source projects. Mixing structured learning with hands-on experimentation
              helps me stay sharp and up-to-date with modern web technologies.
            </p>
            <ul className="mt-3 space-y-2 text-sm text-gray-300">
              <li className="flex gap-2">
                <span className="text-purple-300">•</span>
                Regularly building small experimental projects to strengthen my core CS foundations.
              </li>
              <li className="flex gap-2">
                <span className="text-purple-300">•</span>
                Working on real-world applications that turn classroom concepts into practical, usable products.
              </li>
              <li className="flex gap-2">
                <span className="text-purple-300">•</span>
                Picking up insights from engineering blogs, official documentation, and conference talks.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Education;
