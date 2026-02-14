import { Code2, Braces, Coffee, FileCode, Database, GitBranch, Box, Zap } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'JavaScript', icon: FileCode },
      { name: 'C++', icon: Code2 },
      { name: 'Python', icon: Coffee },
      { name: 'C', icon: Code2 },
      { name: 'java', icon: FileCode },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'React', icon: Code2 },
      { name: 'Node.js', icon: Braces },
      { name: 'Tailwind CSS', icon: Code2 },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MongoDB', icon: Database },
      { name: 'MySQL', icon: Database },
      { name: 'Firebase', icon: Zap },
      { name: 'SQLite', icon: Database },
    ],
  },
  {
    title: 'Tools & Technologies',
    skills: [
      { name: 'Git', icon: GitBranch },
      { name: 'Docker', icon: Box },
    ],
  },
];

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-20 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-crimson-600">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Proficient across the full technology stack with expertise in multiple languages and frameworks
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${isVisible ? 'scroll-reveal revealed' : 'scroll-reveal'}`}>
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`group glass-card-premium rounded-2xl p-8 transition-all duration-500 hover:shadow-glow hover:-translate-y-2 hover:border-red-500/30 ${isVisible ? `scroll-reveal revealed stagger-${Math.min(categoryIndex + 1, 4)}` : 'scroll-reveal'}`}
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center group-hover:text-red-400 transition-colors duration-300">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group/skill glass-card rounded-xl p-4 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-red-500/10"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500/20 to-crimson-600/10 rounded-lg flex items-center justify-center group-hover/skill:shadow-glow transition-all duration-300">
                      <skill.icon className="text-red-500 group-hover/skill:drop-shadow-[0_0_8px_rgba(239,68,68,0.8)] transition-all duration-300" size={24} />
                    </div>
                    <span className="text-gray-300 font-medium text-sm text-center group-hover/skill:text-white transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
