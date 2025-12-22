import { Code2, Braces, Coffee, FileCode, Globe, Palette, Wrench, Database, Layers, Binary } from 'lucide-react';

const skills = [
  { name: 'C', icon: Code2 },
  { name: 'C++', icon: Braces },
  { name: 'Java', icon: Coffee },
  { name: 'Python', icon: FileCode },
  { name: 'HTML', icon: Globe },
  { name: 'CSS', icon: Palette },
  { name: 'JavaScript', icon: Wrench },
  { name: 'Oracle', icon: Database },
  { name: 'MySQL', icon: Database },
  { name: 'MongoDB', icon: Layers },
  { name: 'Data Structures & Algorithms', icon: Binary }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-red-500">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Proficient across the full technology stack with expertise in multiple languages and frameworks
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-red-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10 hover:-translate-y-2 flex flex-col items-center justify-center gap-4"
            >
              <div className="w-16 h-16 bg-red-500/10 rounded-xl flex items-center justify-center group-hover:bg-red-500/20 transition-colors duration-300 group-hover:scale-110 transform">
                <skill.icon className="text-red-500" size={32} />
              </div>
              <span className="text-white font-semibold text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
