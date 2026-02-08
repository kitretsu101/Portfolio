import { useParams, Link, useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import { ArrowLeft, ExternalLink, Github, Check } from 'lucide-react';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projectsData.find(p => p.id === parseInt(id || '0'));

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-crimson-600 rounded-xl hover:shadow-glow transition-all duration-300"
          >
            <ArrowLeft size={20} />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header with back button */}
      <div className="bg-gradient-to-b from-gray-900 to-gray-950 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900/50 hover:bg-gray-800 transition-colors duration-300 mb-6"
          >
            <ArrowLeft size={20} />
            Back
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Left Column - Content */}
          <div className="md:col-span-2 space-y-8">
            {/* Title and Description */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                {project.title}
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed mb-4">
                {project.fullDescription}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-red-500/10 to-crimson-600/10 text-red-300 border border-red-500/30 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Features Section */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 p-4 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-red-500/50 transition-colors duration-300"
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-red-500 to-crimson-600 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check size={16} className="text-white" />
                    </div>
                    <span className="text-gray-200">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Buttons Section */}
            <div className="flex flex-wrap gap-4 pt-6">
              <a
                href={project.liveDemo}
                onClick={(e) => {
                  if (project.liveDemo === '#') e.preventDefault();
                }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-red-500 to-crimson-600 text-white font-bold hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                <ExternalLink size={20} />
                View Live Demo
              </a>
              <a
                href={project.sourceCode}
                onClick={(e) => {
                  if (project.sourceCode === '#') e.preventDefault();
                }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl glass-card glass-card-hover text-gray-300 font-bold transition-all duration-300 hover:scale-105"
              >
                <Github size={20} />
                Source Code
              </a>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="md:col-span-1">
            <div className="sticky top-20 space-y-4">
              <div className="relative rounded-2xl overflow-hidden h-80 md:h-96 glass-card-premium shadow-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
              </div>
              <div className="glass-card-premium rounded-2xl p-6">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Project Info</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-gray-500 uppercase">Status</p>
                    <p className="text-lg font-semibold text-red-400">Completed</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase">Category</p>
                    <p className="text-lg font-semibold">{project.tags[0]}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase">All Tags</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded bg-gray-800 text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Projects Section */}
        <div className="border-t border-gray-800 pt-16">
          <h2 className="text-3xl font-bold mb-8">More Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projectsData
              .filter(p => p.id !== project.id && p.featured)
              .slice(0, 3)
              .map((relatedProject) => (
                <Link
                  key={relatedProject.id}
                  to={`/project/${relatedProject.id}`}
                  className="group relative rounded-2xl overflow-hidden glass-card glass-card-hover shadow-glass hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="h-48 bg-gray-800/30 flex items-center justify-center relative overflow-hidden">
                    <img
                      src={relatedProject.image}
                      alt={relatedProject.title}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-red-900/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold mb-2">{relatedProject.title}</h3>
                    <p className="text-gray-400 text-sm line-clamp-2">{relatedProject.description}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
