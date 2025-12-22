import React, { useEffect, useState } from 'react';
import leaninx from '../../project-leaninx.jpg';
import gaming from '../../project-gaming.jpg';
import portfolio from '../../project-portfolio.jpg';

const projects = [
  {
    id: 1,
    title: 'Leaninx (Educational App)',
    description:
      'A learning app UI/UX design focused on exams, mock tests and performance tracking. Designed screens, flows and onboarding.',
    image: leaninx,
    tags: ['UI/UX', 'Mobile App', 'Education']
  },
  {
    id: 2,
    title: 'Gaming Website Home Screen',
    description:
      'A bold, immersive hero design for a gaming product — rich visuals, strong typography and interaction-ready CTA.',
    image: gaming,
    tags: ['Web', 'Hero', 'Interaction']
  },
  {
    id: 3,
    title: 'Personal Portfolio',
    description:
      'A modern portfolio landing page showcasing identity, services and contact — optimized for conversions.',
    image: portfolio,
    tags: ['Portfolio', 'Responsive', 'Branding']
  }
];

export default function Projects() {
  const [openImage, setOpenImage] = useState<string | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpenImage(null);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  function openModal(src: string) {
    setOpenImage(src);
  }

  function closeModal() {
    setOpenImage(null);
  }

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            My <span className="text-red-500">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of projects showing UI design and web work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.id}
              className={
                'relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900/40 to-gray-900/20 border border-gray-800 shadow-sm'
              }
            >
              <div className="h-56 md:h-64 bg-gray-800/30 flex items-center justify-center">
                <img
                  src={p.image}
                  alt={p.title}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105 cursor-pointer"
                  onClick={() => openModal(p.image)}
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{p.description}</p>

                <div className="flex flex-wrap items-center gap-3 mb-4">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-red-500/10 text-red-300 px-2 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <button
                    onClick={() => openModal(p.image)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500 text-white text-sm hover:opacity-90"
                  >
                    View
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {openImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-5xl w-full h-full md:h-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
              aria-label="Close"
            >
              ✕
            </button>

            <img
              src={openImage}
              alt="project preview"
              className="w-full h-full md:rounded-lg object-contain max-h-[90vh]"
            />
          </div>
        </div>
      )}
    </section>
  );
}
