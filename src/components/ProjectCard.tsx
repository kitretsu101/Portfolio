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
            className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900/40 to-gray-900/20 border border-gray-800 shadow-sm hover:border-red-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10 hover:-translate-y-2"
        >
            <div className="h-56 md:h-64 bg-gray-800/30 flex items-center justify-center">
                <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-105 cursor-pointer"
                    onClick={() => onImageClick?.(project.image)}
                />
            </div>

            <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap items-center gap-2 mb-4">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-xs bg-red-500/10 text-red-300 px-2 py-1 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {showButtons && (
                    <div className="flex items-center gap-3">
                        <a
                            href={project.liveDemo}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500 text-white text-sm hover:bg-red-600 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
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
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-700 text-gray-300 text-sm hover:border-red-500 hover:text-red-400 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
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
