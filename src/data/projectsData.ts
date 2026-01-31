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
        title: 'Learnix (Educational App)',
        description: 'A learning app UI/UX design focused on exams, mock tests and performance tracking. Designed screens, flows and onboarding.',
        image: leaninx,
        tags: ['UI/UX', 'Mobile App', 'Education'],
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
    // Additional Projects
    {
        id: 4,
        title: 'E-Commerce Platform',
        description: 'Full-stack e-commerce solution with product catalog, shopping cart, and secure payment integration.',
        image: portfolio, // Using placeholder image
        tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        liveDemo: '#',
        sourceCode: '#',
        featured: false
    },
    {
        id: 5,
        title: 'Social Media Dashboard',
        description: 'Analytics dashboard for tracking social media metrics with real-time data visualization and reports.',
        image: gaming, // Using placeholder image
        tags: ['Vue.js', 'Chart.js', 'API Integration'],
        liveDemo: '#',
        sourceCode: '#',
        featured: false
    },
    {
        id: 6,
        title: 'Task Management App',
        description: 'Collaborative task manager with drag-and-drop interface, team collaboration, and deadline tracking.',
        image: leaninx, // Using placeholder image
        tags: ['TypeScript', 'React', 'Firebase'],
        liveDemo: '#',
        sourceCode: '#',
        featured: false
    },
    {
        id: 7,
        title: 'Weather Forecast App',
        description: 'Beautiful weather application with 7-day forecasts, location detection, and animated weather icons.',
        image: portfolio, // Using placeholder image
        tags: ['React Native', 'API', 'Mobile'],
        liveDemo: '#',
        sourceCode: '#',
        featured: false
    },
    {
        id: 8,
        title: 'Recipe Finder',
        description: 'Search and discover recipes from around the world with ingredient filters and nutritional information.',
        image: gaming, // Using placeholder image
        tags: ['Next.js', 'TailwindCSS', 'API'],
        liveDemo: '#',
        sourceCode: '#',
        featured: false
    },
    {
        id: 9,
        title: 'Fitness Tracker',
        description: 'Track workouts, set fitness goals, and monitor progress with detailed statistics and charts.',
        image: leaninx, // Using placeholder image
        tags: ['React', 'Redux', 'Chart.js'],
        liveDemo: '#',
        sourceCode: '#',
        featured: false
    },
    {
        id: 10,
        title: 'Blog Platform',
        description: 'Modern blogging platform with markdown support, category tags, and SEO optimization.',
        image: portfolio, // Using placeholder image
        tags: ['Gatsby', 'GraphQL', 'CMS'],
        liveDemo: '#',
        sourceCode: '#',
        featured: false
    },
    {
        id: 11,
        title: 'Music Player',
        description: 'Sleek music player with playlist creation, audio visualization, and offline playback support.',
        image: gaming, // Using placeholder image
        tags: ['JavaScript', 'Web Audio API', 'UI/UX'],
        liveDemo: '#',
        sourceCode: '#',
        featured: false
    },
    {
        id: 12,
        title: 'Chat Application',
        description: 'Real-time messaging app with group chats, file sharing, and end-to-end encryption.',
        image: leaninx, // Using placeholder image
        tags: ['Socket.io', 'Node.js', 'Express'],
        liveDemo: '#',
        sourceCode: '#',
        featured: false
    }
];

// Helper function to get featured projects
export const getFeaturedProjects = (): Project[] => {
    return projectsData.filter(project => project.featured);
};

// Helper function to get all projects
export const getAllProjects = (): Project[] => {
    return projectsData;
};
