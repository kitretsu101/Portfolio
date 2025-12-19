import { Briefcase, Users, Clock } from 'lucide-react';

const stats = [
  { icon: Briefcase, label: 'Projects Completed', value: '150+' },
  { icon: Users, label: 'Happy Clients', value: '80+' },
  { icon: Clock, label: 'Years Experience', value: '5+' }
];

export default function Stats() {
  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10 text-center group"
            >
              <div className="w-16 h-16 bg-red-500/10 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-red-500/20 transition-colors duration-300">
                <stat.icon className="text-red-500" size={32} />
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-white">{stat.value}</div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
