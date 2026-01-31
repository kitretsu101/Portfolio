import { Briefcase, Users, Clock } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const stats = [
  { icon: Briefcase, label: 'Projects Completed', value: 60 },
  { icon: Users, label: 'Happy Clients', value: 20 },
  { icon: Clock, label: 'Years Experience', value: 4 }
];

function CountUp({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const countRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const startTime = Date.now();
          const animate = () => {
            const currentTime = Date.now();
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            setCount(Math.floor(progress * end));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          animate();
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [end, duration, hasAnimated]);

  return (
    <div ref={countRef} className="text-5xl md:text-6xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
      {count}+
    </div>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-card glass-card-hover rounded-2xl p-8 hover:shadow-glow transition-all duration-300 text-center group hover:scale-[1.02]"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-red-500/20 to-crimson-600/10 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                <stat.icon className="text-red-500 group-hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.8)] transition-all duration-300" size={36} />
              </div>
              <CountUp end={stat.value} />
              <div className="text-gray-400 font-semibold text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
