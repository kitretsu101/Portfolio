import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import { getAllProjects } from '../data/projectsData';

export default function AllProjects() {
    const [openImage, setOpenImage] = useState<string | null>(null);
    const projects = getAllProjects();

    useEffect(() => {
        // Scroll to top when page loads
        window.scrollTo(0, 0);

        // Handle escape key for modal
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
        <>
            <Navbar />
            <div className="min-h-screen bg-navy-950 text-white pt-24 pb-20">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Back Navigation */}
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors duration-300 mb-8 group"
                    >
                        <ArrowLeft size={20} className="transition-transform duration-300 group-hover:-translate-x-1" />
                        <span className="font-semibold">Back to Home</span>
                    </Link>

                    {/* Page Header */}
                    <div className="text-center mb-12 animate-fade-in">
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
                            All <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-crimson-600">Projects</span>
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            A complete collection of my works — exploring design, development, and innovation
                        </p>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                onImageClick={openModal}
                                showButtons={false}
                            />
                        ))}
                    </div>
                </div>

                {/* Image Modal */}
                {openImage && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
                        onClick={closeModal}
                    >
                        <div
                            className="relative max-w-5xl w-full h-full md:h-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={closeModal}
                                className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-gradient-to-r from-red-600 to-crimson-700 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-glow-lg hover:shadow-glow transition-all duration-300 hover:scale-110"
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
            </div>
        </>
    );
}
