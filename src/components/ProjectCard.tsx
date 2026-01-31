import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../data/projectsData';

interface ProjectCardProps {
    project: Project;
    onImageClick?: (image: string) => void;
    showButtons?: boolean;
}

export default function ProjectCard({ project, onImageClick, showButtons = true }: ProjectCardProps) {
    return (
        <article
            className="group relative rounded-2xl overflow-hidden glass-card glass-card-hover shadow-glass hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
        >
            <div className="h-56 md:h-64 bg-gray-800/30 flex items-center justify-center relative overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 cursor-pointer"
                    onClick={() => onImageClick?.(project.image)}
                />
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="p-5">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap items-center gap-2 mb-4">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-xs bg-gradient-to-r from-red-500/10 to-crimson-600/10 text-red-300 px-2 py-1 rounded-full border border-red-500/20"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {showButtons && (
                    <div className="flex items-center gap-3">
                        <a
                            href={project.liveDemo}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-red-500 to-crimson-600 text-white text-sm hover:shadow-glow transition-all duration-300 hover:scale-105 font-semibold"
                            onClick={(e) => {
                                if (project.liveDemo === '#') {
                                    e.preventDefault();
                                }
                            }}
                        >
                            <ExternalLink size={16} />
                            Live Demo
                        </a>
                        <a
                            href={project.sourceCode}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass-card glass-card-hover text-gray-300 text-sm transition-all duration-300 hover:scale-105 font-semibold"
                            onClick={(e) => {
                                if (project.sourceCode === '#') {
                                    e.preventDefault();
                                }
                            }}
                        >
                            <Github size={16} />
                            Source
                        </a>
                    </div>
                )}
            </div>
        </article>
    );
}
