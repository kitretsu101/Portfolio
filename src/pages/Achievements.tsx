import { ArrowLeft, Trophy, Award, Medal, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

const achievements = [
  {
    id: 1,
    title: 'Full Stack Developer Certification',
    issuer: 'Tech Institute',
    date: '2024',
    description: 'Completed comprehensive full-stack development program covering React, Node.js, and cloud technologies.',
    icon: Trophy,
    category: 'Certification'
  },
  {
    id: 2,
    title: 'Hackathon Winner',
    issuer: 'CodeFest 2023',
    date: '2023',
    description: 'First place in 48-hour hackathon for developing an innovative AI-powered task management application.',
    icon: Award,
    category: 'Competition'
  },
  {
    id: 3,
    title: 'Open Source Contributor',
    issuer: 'GitHub',
    date: '2023',
    description: 'Active contributor to multiple open-source projects with over 500+ stars and 100+ forks.',
    icon: Star,
    category: 'Community'
  },
  {
    id: 4,
    title: 'Mentorship Program Graduate',
    issuer: 'DevMentor',
    date: '2023',
    description: 'Successfully completed 6-month mentorship program, mentoring junior developers and leading code reviews.',
    icon: Medal,
    category: 'Education'
  },
  {
    id: 5,
    title: 'Cloud Architecture Specialist',
    issuer: 'AWS',
    date: '2024',
    description: 'Certified in AWS cloud architecture and deployment strategies for scalable applications.',
    icon: Trophy,
    category: 'Certification'
  },
  {
    id: 6,
    title: 'Tech Conference Speaker',
    issuer: 'ReactConf 2024',
    date: '2024',
    description: 'Presented on "Modern React Patterns" at international developer conference with 500+ attendees.',
    icon: Award,
    category: 'Speaking'
  }
];

export default function Achievements() {
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
    <div ref={sectionRef} className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-red-500 to-crimson-600 text-white font-semibold hover:shadow-glow transition-all duration-300 hover:scale-105 mb-8"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-crimson-600">Achievements</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of certifications, awards, and milestones that showcase my journey and expertise in software development.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.id}
              className={`group glass-card-premium glass-card-hover rounded-2xl p-8 transition-all duration-300 hover:shadow-glow hover:-translate-y-2 ${isVisible ? `scroll-reveal revealed stagger-${Math.min(index + 1, 8)}` : 'scroll-reveal'}`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500/20 to-crimson-600/10 rounded-xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                  <achievement.icon className="text-red-500 group-hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.8)] transition-all duration-300" size={28} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-red-500/10 text-red-400 text-xs font-semibold rounded-full border border-red-500/20">
                      {achievement.category}
                    </span>
                    <span className="text-gray-400 text-sm">{achievement.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">
                    Issued by: <span className="text-red-400">{achievement.issuer}</span>
                  </p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            These achievements represent my commitment to continuous learning and professional growth.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-xl bg-gradient-to-r from-red-500 to-crimson-600 text-white font-bold text-lg hover:shadow-glow-lg transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
}