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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-red-500">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive solutions tailored to bring your digital vision to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10 hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-500/20 transition-colors duration-300">
                <service.icon className="text-red-500" size={28} />
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
