import type { LucideIcon } from 'lucide-react';
import {
  Atom,
  Box,
  Braces,
  Cloud,
  Code2,
  Cpu,
  Database,
  FileCode2,
  Figma,
  GitBranch,
  Globe,
  Layers3,
  Palette,
  Server,
  Shield,
  Smartphone,
  Sparkles,
  Terminal,
  Workflow,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

type SkillItem = {
  name: string;
  icon: LucideIcon;
};

type Category = {
  title: string;
  accent: string;
  glow: string;
  badge: string;
  tile: string;
  icon: LucideIcon;
  skills: SkillItem[];
};

const skillCategories: Category[] = [
  {
    title: 'Programming Languages',
    accent: 'text-sky-300',
    glow: 'shadow-[0_0_0_1px_rgba(96,165,250,0.18),0_0_30px_rgba(59,130,246,0.12)]',
    badge: 'border-sky-400/25 bg-sky-500/10 text-sky-200',
    tile: 'border-sky-400/15 bg-sky-500/5 hover:border-sky-400/30 hover:bg-sky-500/10',
    icon: Code2,
    skills: [
      { name: 'C', icon: Code2 },
      { name: 'C++', icon: Code2 },
      { name: 'Java', icon: Cpu },
      { name: 'Python', icon: Terminal },
      { name: 'JavaScript', icon: FileCode2 },
      { name: 'PHP', icon: Server },
      { name: 'HTML', icon: FileCode2 },
      { name: 'CSS', icon: Palette },
      { name: 'SQL', icon: Database },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    accent: 'text-violet-300',
    glow: 'shadow-[0_0_0_1px_rgba(167,139,250,0.18),0_0_30px_rgba(168,85,247,0.12)]',
    badge: 'border-violet-400/25 bg-violet-500/10 text-violet-200',
    tile: 'border-violet-400/15 bg-violet-500/5 hover:border-violet-400/30 hover:bg-violet-500/10',
    icon: Layers3,
    skills: [
      { name: 'React', icon: Atom },
      { name: 'Next.js', icon: Layers3 },
      { name: 'Node.js', icon: Braces },
      { name: 'Express.js', icon: Server },
      { name: 'NestJS', icon: Workflow },
      { name: 'Laravel', icon: Globe },
      { name: 'Tailwind CSS', icon: Palette },
      { name: 'Bootstrap', icon: Code2 },
      { name: 'Flutter', icon: Smartphone },
    ],
  },
  {
    title: 'Databases & Cloud',
    accent: 'text-cyan-300',
    glow: 'shadow-[0_0_0_1px_rgba(34,211,238,0.18),0_0_30px_rgba(6,182,212,0.12)]',
    badge: 'border-cyan-400/25 bg-cyan-500/10 text-cyan-200',
    tile: 'border-cyan-400/15 bg-cyan-500/5 hover:border-cyan-400/30 hover:bg-cyan-500/10',
    icon: Cloud,
    skills: [
      { name: 'MySQL', icon: Database },
      { name: 'PostgreSQL', icon: Database },
      { name: 'MongoDB', icon: Database },
      { name: 'Oracle', icon: Database },
      { name: 'SQLite', icon: Database },
      { name: 'Firebase', icon: Cloud },
      { name: 'AWS', icon: Cloud },
      { name: 'Azure', icon: Cloud },
    ],
  },
  {
    title: 'Tools, Design & Systems',
    accent: 'text-pink-300',
    glow: 'shadow-[0_0_0_1px_rgba(244,114,182,0.18),0_0_30px_rgba(236,72,153,0.12)]',
    badge: 'border-pink-400/25 bg-pink-500/10 text-pink-200',
    tile: 'border-pink-400/15 bg-pink-500/5 hover:border-pink-400/30 hover:bg-pink-500/10',
    icon: Sparkles,
    skills: [
      { name: 'Git', icon: GitBranch },
      { name: 'GitHub', icon: GitBranch },
      { name: 'Docker', icon: Box },
      { name: 'VS Code', icon: Terminal },
      { name: 'Postman', icon: Workflow },
      { name: 'Figma', icon: Figma },
      { name: 'Adobe XD', icon: Palette },
      { name: 'Canva', icon: Palette },
      { name: 'Linux', icon: Shield },
      { name: 'XAMPP', icon: Server },
      { name: 'Jira', icon: Workflow },
      { name: 'Agile/Scrum', icon: Sparkles },
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
      { threshold: 0.12 }
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
    <section
      ref={sectionRef}
      id="skills"
      className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.12),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.08),_transparent_30%),linear-gradient(180deg,_rgba(5,9,18,0.96),_rgba(2,6,23,1))]" />
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.05)_1px,transparent_1px)] [background-size:36px_36px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 text-center sm:mb-16">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.25em] text-slate-300 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-sky-400 to-violet-500" />
            Core Stack
          </div>

          <h2 className="text-4xl font-black tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
            Technical <span className="bg-gradient-to-r from-sky-400 via-violet-400 to-fuchsia-500 bg-clip-text text-transparent">Skills</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
            Building reliable, scalable digital products across front-end, back-end, data, and product workflows.
          </p>
        </div>

        <div
          className={`grid grid-cols-1 gap-6 lg:grid-cols-2 ${
            isVisible ? 'opacity-100 transition-all duration-700' : 'opacity-0 translate-y-6'
          }`}
        >
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;

            return (
              <article
                key={category.title}
                className={`group relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/70 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/15 ${category.glow} ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transitionDelay: `${categoryIndex * 120}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent" />

                <div className="relative space-y-6">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className={`flex h-11 w-11 items-center justify-center rounded-2xl border ${category.badge}`}>
                        <Icon className={`h-5 w-5 ${category.accent}`} />
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-white sm:text-2xl">{category.title}</h3>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {category.skills.map((skill) => {
                      const SkillIcon = skill.icon;

                      return (
                        <div
                          key={skill.name}
                          className={`group/skill flex items-center gap-3 rounded-2xl border px-3 py-2.5 text-sm font-medium text-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 ${category.tile}`}
                        >
                          <div className={`flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-slate-950/80 ${category.accent}`}>
                            <SkillIcon className="h-4 w-4 transition-transform duration-300 group-hover/skill:scale-110" />
                          </div>

                          <span className="truncate text-[13px] font-medium tracking-[-0.02em] text-slate-200">
                            {skill.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
