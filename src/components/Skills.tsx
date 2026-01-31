import { Code2, Braces, Coffee, FileCode, Globe, Palette, Wrench, Database, Layers, Binary } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`group glass-card glass-card-hover rounded-2xl p-6 transition-all duration-300 hover:shadow-glow hover:-translate-y-2 flex flex-col items-center justify-center gap-4 ${isVisible ? `scroll-reveal revealed stagger-${Math.min(index + 1, 8)}` : 'scroll-reveal'
                }`}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-red-500/20 to-crimson-600/10 rounded-xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300 group-hover:scale-125">
                <skill.icon className="text-red-500 group-hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.8)] transition-all duration-300" size={32} />
              </div>
              <span className="text-white font-semibold text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
