export interface Project {
    id: number;
    title: string;
    description: string;
    image: string; // will be a resolved URL
    tags: string[];
    liveDemo: string;
    sourceCode: string;
    featured: boolean;
}

// Helper to resolve image filename (placed at repo root) to a URL usable by Vite
const resolveImage = (filename: string) => {
    try {
        return new URL(`../../${filename}`, import.meta.url).href;
    } catch (e) {
        return filename; // fallback: return as-is
    }
};

export const projectsData: Project[] = [
    // Featured Projects (shown on home page)
    {
        id: 1,
        title: 'TechHive Studio Platform',
        description: 'Tech Company portfolio',
        image: resolveImage('project-techhive.jpg'),
        tags: ['UI/UX', 'WEb Development', 'Front End', 'SQLite'],
        liveDemo: '#',
        sourceCode: '#',
        featured: true
    },
    {
        id: 2,
        title: 'Gaming Website Home Screen',
        description: 'A bold, immersive hero design for a gaming product — rich visuals, strong typography and interaction-ready CTA.',
        image: resolveImage('project-gaming.jpg'),
        tags: ['Web', 'Hero', 'Interaction'],
        liveDemo: '#',
        sourceCode: '#',
        featured: true
    },
    {
        id: 3,
        title: 'Personal Portfolio',
        description: 'A modern portfolio landing page showcasing identity, services and contact — optimized for conversions.',
        image: resolveImage('project-portfolio.jpg'),
        tags: ['Portfolio', 'Responsive', 'Branding'],
        liveDemo: '#',
        sourceCode: '#',
        featured: true
    },

    {
        id: 6,
        title: 'E-learning App',
        description: 'An app for BCS Students for their preparation by Exams andsd notes',
        image: resolveImage('project-leaninx.jpg'), // Using placeholder image
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
