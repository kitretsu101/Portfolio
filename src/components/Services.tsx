import {
  ArrowRight,
  Blocks,
  Briefcase,
  Code2,
  Layout,
  Palette,
  Workflow,
} from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Website Design',
    description:
      'Creating modern, responsive, and visually engaging websites tailored to your brand and audience.',
  },
  {
    icon: Code2,
    title: 'Website Development',
    description:
      'Building fast, scalable, and responsive web applications using modern frontend and backend technologies.',
  },
  {
    icon: Layout,
    title: 'UI/UX Design',
    description:
      'Designing intuitive user experiences and clean interfaces with a strong focus on usability and visual consistency.',
  },
  {
    icon: Blocks,
    title: 'Full-Stack Solutions',
    description:
      'Delivering complete web solutions from frontend and backend development to databases, APIs, authentication, and deployment.',
  },
  {
    icon: Workflow,
    title: 'System Design & Architecture',
    description:
      'Designing scalable software systems, database architecture, APIs, workflows, and technical structures for real-world applications.',
  },
  {
    icon: Briefcase,
    title: 'Business & Digital Solutions',
    description:
      'Turning business ideas into practical digital solutions through business planning, system analysis, feature planning, and technology strategy.',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative px-4 py-20 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(239,68,68,0.08),_transparent_28%),linear-gradient(180deg,_rgba(5,9,18,0.96),_rgba(2,6,23,1))]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 text-center sm:mb-16">
          <h2 className="text-4xl font-black tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
            My <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
            Comprehensive digital solutions tailored to bring your ideas to life.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/70 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:shadow-[0_0_0_1px_rgba(239,68,68,0.18),0_0_30px_rgba(239,68,68,0.08)]"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500/70 to-transparent" />

                <div className="relative flex h-full flex-col">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-red-400/20 bg-red-500/8 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.12)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_24px_rgba(239,68,68,0.2)]">
                    <Icon className="h-6 w-6" />
                  </div>

                  <div className="mb-4 flex items-center justify-between gap-3">
                    <h3 className="text-2xl font-bold tracking-[-0.04em] text-white">{service.title}</h3>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-red-300">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>

                  <p className="text-base leading-7 text-slate-300">{service.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
