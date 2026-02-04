import { Code2, Braces, Coffee, FileCode, Globe, Palette, Wrench, Database, Layers } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const skills = [
  { name: 'React', icon: Code2, color: 'blue' },
  { name: 'Node.js', icon: Braces, color: 'red' },
  { name: 'JavaScript', icon: FileCode, color: 'red' },
  { name: 'Python', icon: Coffee, color: 'red' },
  { name: 'Docker', icon: Globe, color: 'blue' },
  { name: 'Firebase', icon: Palette, color: 'red' },
  { name: 'MongoDB', icon: Database, color: 'red' },
  { name: 'MySQL', icon: Database, color: 'red' },
  { name: 'C++', icon: Wrench, color: 'red' },
  { name: 'Git', icon: Layers, color: 'red' },
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
              className={`group glass-card-premium glass-card-hover rounded-2xl p-6 transition-all duration-300 hover:shadow-glow hover:-translate-y-2 flex flex-col items-center justify-center gap-4 ${isVisible ? `scroll-reveal revealed stagger-${Math.min(index + 1, 8)}` : 'scroll-reveal'
                }`}
            >
              <div className={`w-16 h-16 ${skill.color === 'blue' ? 'bg-gradient-to-br from-blue-500/20 to-cyan-600/10' : 'bg-gradient-to-br from-red-500/20 to-crimson-600/10'} rounded-xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300 group-hover:scale-125`}>
                <skill.icon className={`${skill.color === 'blue' ? 'text-blue-500 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]' : 'text-red-500 group-hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]'} transition-all duration-300`} size={32} />
              </div>
              <span className="text-white font-semibold text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
