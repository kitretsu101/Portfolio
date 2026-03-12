export interface Project {
    id: number;
    title: string;
    description: string;
    fullDescription: string;
    image: string; // will be a resolved URL
    tags: string[];
    liveDemo: string;
    sourceCode: string;
    featured: boolean;
    features: string[];
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
        fullDescription: 'TechHive Studio Platform is a comprehensive portfolio solution designed for tech companies to showcase their services, projects, and team expertise. Built with modern web technologies, it provides a professional and interactive experience for potential clients.',
        image: resolveImage('project-techhive.jpg'),
        tags: ['UI/UX', 'WEb Development', 'Front End', 'SQLite'],
        liveDemo: '#',
        sourceCode: '#',
        featured: true,
        features: [
            'Responsive Design',
            'Interactive Project Gallery',
            'Team Showcase',
            'Service Descriptions',
            'Contact Forms',
            'Performance Optimized'
        ]
    },
    {
        id: 2,
        title: 'Gaming Website Home Screen',
        description: 'A bold, immersive hero design for a gaming product — rich visuals, strong typography and interaction-ready CTA.',
        fullDescription: 'This gaming website features a cutting-edge hero design with stunning visuals and smooth interactions. The interface is crafted to engage gamers with dynamic animations, rich typography, and a compelling call-to-action that drives conversions. Perfect for gaming companies and esports platforms.',
        image: resolveImage('project-gaming.jpg'),
        tags: ['Web', 'Hero', 'Interaction'],
        liveDemo: '#',
        sourceCode: '#',
        featured: false,
        features: [
            'Dynamic Hero Section',
            'Smooth Animations',
            'Call-to-Action Buttons',
            'Game Showcase Grid',
            'Player Profiles',
            'Tournament Rankings'
        ]
    },
    {
        id: 3,
        title: 'Personal Portfolio',
        description: 'A modern portfolio landing page showcasing identity, services and contact — optimized for conversions.',
        fullDescription: 'A sleek and modern personal portfolio designed to showcase your work, skills, and services. Built with conversion optimization in mind, this landing page features smooth scrolling, beautiful animations, and strategically placed CTAs to help you connect with potential clients and employers.',
        image: resolveImage('project-portfolio.jpg'),
        tags: ['Portfolio', 'Responsive', 'Branding'],
        liveDemo: '#',
        sourceCode: '#',
        featured: false,
        features: [
            'Smooth Scrolling',
            'Project Showcase',
            'Skills Section',
            'Contact Form',
            'Dark Mode Ready',
            'SEO Optimized'
        ]
    },

     
    {
        id: 4,
        title: 'La Belle Maison - Hotel Website',
        description: 'Luxury hotel booking website with elegant design and seamless reservation system',
        fullDescription: 'La Belle Maison is a premium hotel website showcasing luxury hospitality. The platform features an elegant pink-themed design with high-quality imagery, room showcases, amenities, gallery, and a robust booking system. Built for an upscale hotel brand, it delivers a sophisticated user experience for travelers seeking luxury accommodations.',
        image: resolveImage('project-hotel.png'),
        tags: ['Web Development', 'UI/UX', 'E-Commerce', 'Responsive Design'],
        liveDemo: '#',
        sourceCode: '#',
        featured: true,
        features: [
            'Room Showcase',
            'Booking System',
            'Amenities Display',
            'Gallery Section',
            'Reservation Management',
            'Responsive Design'
        ]
    },
    {
        id: 5,
        title: 'Revaan - E-Commerce Shop',
        description: 'Premium menswear e-commerce platform featuring heritage fashion collections',
        fullDescription: 'Revaan is an upscale e-commerce platform specializing in heritage menswear. The website showcases premium fashion collections with a tagline "Crafted for the Modern King." It features product browsing, collections exploration, and seamless shopping experience with elegant design and high-quality product imagery.',
        image: resolveImage('project-revan.png'),
        tags: ['E-Commerce', 'Web Development', 'UI/UX', 'Fashion'],
        liveDemo: '#',
        sourceCode: '#',
        featured: true,
        features: [
            'Product Catalog',
            'Collection Categories',
            'Shopping Cart',
            'Product Filters',
            'Search Functionality',
            'Premium Design'
        ]
    },
    {
        id: 6,
        title: 'E-learning App',
        description: 'An app for BCS Students for their preparation by Exams andsd notes',
        fullDescription: 'LeanInX is a comprehensive e-learning platform designed specifically for BCS (Bachelor of Computer Science) students. It provides study materials, practice exams, notes, and progress tracking features to help students prepare effectively for their examinations.',
        image: resolveImage('project-leaninx.jpg'),
        tags: ['UI/UX', 'Front End', 'Android App'],
        liveDemo: '#',
        sourceCode: '#',
        featured: false,
        features: [
            'Study Materials',
            'Practice Exams',
            'Progress Tracking',
            'Notes Section',
            'Discussion Forums',
            'Offline Access'
        ]
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
