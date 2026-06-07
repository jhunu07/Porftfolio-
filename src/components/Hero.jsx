import React from 'react';
import {
  Github,
  Linkedin,
  Download,
  User,
  ArrowDownRight,
  Sparkles,
} from 'lucide-react';



const Hero = () => {
  return (
    <section id="about" className="pt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
              <Sparkles className="w-4 h-4 text-purple-300" />
              Open to 2025 SDE internships & freelance collaborations
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
              Building human-centered products with{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300 bg-clip-text text-transparent">
                modern web engineering.
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              I'm Jhunnu Kumar, a Computer Science student focused on crafting
              refined digital experiences. I combine strong fundamentals in
              full-stack development with product thinking, designing solutions
              that are performant, accessible, and ready for real users.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://drive.google.com/file/d/1Weefbo7Xgw-gsTWd_UrdO1rAQNO6PSu0/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 text-base font-medium text-white shadow-lg shadow-purple-500/30 transition duration-300 hover:translate-y-0.5"
              >
                <Download className="w-5 h-5" />
                Download resume
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-3 text-base font-medium text-gray-100 transition duration-300 hover:border-purple-300 hover:text-white"
              >
                View selected work
                <ArrowDownRight className="w-5 h-5" />
              </a>
            </div>

            <div className="mt-10 flex items-center gap-5 text-gray-400">
              <a
                href="https://github.com/jhunu07"
                className="rounded-full border border-white/10 p-3 transition hover:border-purple-300 hover:text-white"
                aria-label="GitHub profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/jhunnu-k-0a5419267/"
                className="rounded-full border border-white/10 p-3 transition hover:border-purple-300 hover:text-white"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-r from-purple-500/40 to-pink-500/40 blur-2xl" />
            <div className="relative rounded-[32px] border border-white/10 bg-slate-900/60 p-10 backdrop-blur-xl">
              <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-[2px]">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-950">
                  <User className="h-16 w-16 text-purple-200" />
                </div>
              </div>

              <div className="mt-8 space-y-4 text-center">
                <p className="text-lg font-medium text-white">
                  Product-minded full-stack developer
                </p>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Currently pursuing B.Tech at Marwadi University with a focus
                  on scalable frontend systems, backend APIs, and thoughtful UX.
                </p>
              </div>

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-gray-300">
                <p className="font-semibold text-white">What I bring</p>
                <ul className="mt-3 space-y-2 text-left list-none">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-300">•</span>
                    End-to-end React + Node projects with clean architecture
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-300">•</span>
                    Collaborative mindset across design, dev, and product teams
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-300">•</span>
                    Strong fundamentals in data structures & problem solving
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;