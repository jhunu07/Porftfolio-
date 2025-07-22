import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Computer Engineering',
      school: 'Marwadi university University',
      year: '2022 - 2026',
      gpa: '7.7 / 10.0',
      relevant: ['Data Structures', 'Web Development', 'Database Systems'],
    },
    {
      degree: 'Secondary High School',
      school: 'MSSG College',
      year: '2020 - 2022',
      gpa: '77.2%',
      relevant: [ 'Maths', 'Science', 'English', 'Hindi', ],
    },
  ];

  return (
    <section
      id="education"
      className= "text-white"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Education
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-purple-400 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-semibold">{edu.degree.trim()}</h3>
              </div>

              {edu.school?.trim() && (
                <p className="text-gray-300 text-lg mb-2">{edu.school}</p>
              )}

              <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-4 text-sm">
                {edu.year && (
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {edu.year}
                  </span>
                )}
                {edu.gpa && <span>GPA: {edu.gpa}</span>}
              </div>

              {edu.relevant && edu.relevant.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {edu.relevant.map((course, i) => (
                    <span
                      key={i}
                      className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
