import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    type: 'education',
    title: 'Bachelor of Science in Computer Science and Engineering',
    organization: 'Khulna University of Engineering and Technology',
    period: '2023 - Present',
    description: 'Currently pursuing a degree in Computer Science and Engineering, focusing on software development, algorithms, and web technologies.'
  },
  {
    type: 'work',
    title: 'Intern Developer',
    organization: 'Symbex IT',
    period: '2025 - 2025',
    description: 'Developing web applications and gaining practical experience in full-stack development.'
  }
];

export default function Resume() {
  return (
    <section id="resume" className="py-20 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-red-900/5 via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-red-500">Resume</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A journey of continuous learning and professional growth
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center group-hover:bg-red-500/20 transition-colors duration-300">
                  {exp.type === 'work' ? (
                    <Briefcase className="text-red-500" size={28} />
                  ) : (
                    <GraduationCap className="text-red-500" size={28} />
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <span className="text-red-500 font-semibold">{exp.period}</span>
                  </div>
                  <p className="text-gray-400 font-medium mb-2">{exp.organization}</p>
                  <p className="text-gray-500 leading-relaxed">{exp.description}</p>
                </div>
              </div>

              <div className="absolute left-[2.75rem] top-[5rem] bottom-[-1.5rem] w-0.5 bg-gradient-to-b from-red-500/50 to-transparent"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
