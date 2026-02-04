import { Code, Palette, Layout, Database, Layers } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Website Design',
    description: 'Creating visually stunning and user-friendly interfaces that captivate and engage your audience.'
  },
  {
    icon: Code,
    title: 'Website Development',
    description: 'Building responsive, performant web applications with modern technologies and best practices.'
  },
  {
    icon: Layout,
    title: 'UI/UX Design',
    description: 'Designing intuitive user experiences with focus on usability, accessibility, and aesthetics.'
  },
  {
    icon: Database,
    title: 'Database Expert',
    description: 'Architecting robust database solutions with optimal performance, security, and scalability.'
  },
  {
    icon: Layers,
    title: 'Full-Stack Solutions',
    description: 'End-to-end development from database design to frontend implementation and deployment.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-crimson-600">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive solutions tailored to bring your digital vision to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group glass-card-premium glass-card-hover rounded-2xl p-8 transition-all duration-300 hover:shadow-glow hover:scale-[1.02] hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-red-500/30 to-crimson-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-glow-lg transition-all duration-300 group-hover:scale-110 animate-glow-pulse">
                <service.icon className="text-red-500 group-hover:drop-shadow-[0_0_12px_rgba(239,68,68,1)] transition-all duration-300" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
