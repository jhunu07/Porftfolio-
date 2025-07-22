import React from 'react';
import { Code, Globe, Database, Palette, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML/CSS", category: "frontend" },
        { name: "JavaScript", category: "frontend" },
        { name: "React", category: "frontend" },
        { name: "TypeScript", category: "frontend" },
        { name: "Tailwind CSS", category: "frontend" }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", category: "backend" },
        { name: "PHP", category: "backend" },
        { name: "Express", category: "backend" },
        { name: "MongoDB", category: "backend" },
        { name: "mySQL", category: "backend" },
      
      ]
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "C", category: "languages" },
        { name: "Python", category: "languages" },
        { name: "Java", category: "languages" },
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git/GitHub", category: "tools" },
        { name: "Docker", category: "tools" },
        { name: "Figma", category: "tools" },
        { name: "VS Code", category: "tools" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>

        <div className="space-y-10">
          {skillCategories.map((category, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-semibold text-white mb-4 border-l-4 border-purple-500 pl-3">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 flex flex-col items-center text-center"
                  >
                    <div className="text-purple-400 mb-2">{skill.icon}</div>
                    <h4 className="text-sm font-medium text-white">{skill.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
