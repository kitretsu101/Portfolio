export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    liveDemo: string;
    sourceCode: string;
    featured: boolean;
}

// Import project images
import leaninx from '../../project-leaninx.jpg';
import gaming from '../../project-gaming.jpg';
import portfolio from '../../project-portfolio.jpg';

export const projectsData: Project[] = [
    // Featured Projects (shown on home page)
    {
        id: 1,
        title: 'TechHive Studio Platform',
        description: 'Tech Company portfolio',
        image: 'project-techhive.jpg',
        tags: ['UI/UX', 'WEb Development', 'Front End', 'SQLite'],
        liveDemo: '#',
        sourceCode: '#',
        featured: true
    },
    {
        id: 2,
        title: 'Gaming Website Home Screen',
        description: 'A bold, immersive hero design for a gaming product — rich visuals, strong typography and interaction-ready CTA.',
        image: gaming,
        tags: ['Web', 'Hero', 'Interaction'],
        liveDemo: '#',
        sourceCode: '#',
        featured: true
    },
    {
        id: 3,
        title: 'Personal Portfolio',
        description: 'A modern portfolio landing page showcasing identity, services and contact — optimized for conversions.',
        image: portfolio,
        tags: ['Portfolio', 'Responsive', 'Branding'],
        liveDemo: '#',
        sourceCode: '#',
        featured: true
    },

    {
        id: 6,
        title: 'E-learning App',
        description: 'An app for BCS Students for their preparation by Exams andsd notes',
        image: leaninx, // Using placeholder image
        tags: ['UI/UX', 'Front End', 'Android App'],
        liveDemo: '#',
        sourceCode: '#',
        featured: false
    },
];

// Helper function to get featured projects
export const getFeaturedProjects = (): Project[] => {
    return projectsData.filter(project => project.featured);
};

// Helper function to get all projects
export const getAllProjects = (): Project[] => {
    return projectsData;
};
