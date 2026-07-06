export interface Project {
    id: number;
    title: string;
    description: string;
    fullDescription: string;
    image: string;
    tags: string[];
    liveDemo: string;
    sourceCode: string;
    featured: boolean;
    features: string[];
}

const resolveImage = (filename: string) => {
    try {
        return new URL(`../../${filename}`, import.meta.url).href;
    } catch (e) {
        return filename;
    }
};

export const projectsData: Project[] = [
    {
        id: 1,
        title: 'Medixa — Digital Hospital Management System',
        description: 'Laravel-based healthcare platform for patients, appointments, and doctor workflows',
        fullDescription: 'Built a full-stack hospital management platform handling patient records, appointment scheduling, and doctor-patient assignment using Laravel MVC architecture. The system also includes a relational MySQL schema designed for multi-role access and appointment workflows.',
        image: resolveImage('project-placeholder.svg'),
        tags: ['Laravel', 'MySQL', 'Full-Stack', 'Healthcare'],
        liveDemo: '#',
        sourceCode: '#',
        featured: true,
        features: [
            'Patient record management',
            'Appointment scheduling',
            'Doctor-patient assignment',
            'Role-based access control',
            'Relational database design',
            'Workflow-driven operations'
        ]
    },
    {
        id: 2,
        title: 'Club Portfolio Website',
        description: 'Responsive university club website with dynamic content and member registration',
        fullDescription: 'Developed a university club website with dynamic content management, event listings, and member registration using PHP and MySQL as the backend. The interface uses responsive layouts and interactive UI elements built with vanilla JavaScript.',
        image: resolveImage('project-placeholder.svg'),
        tags: ['HTML', 'CSS', 'PHP', 'JavaScript'],
        liveDemo: '#',
        sourceCode: '#',
        featured: true,
        features: [
            'Dynamic content updates',
            'Event listings',
            'Member registration flow',
            'Responsive UI',
            'Interactive front-end elements',
            'PHP and MySQL backend'
        ]
    },
    {
        id: 3,
        title: 'TechHive Studio — Tech Company Portfolio App',
        description: 'Cross-platform portfolio application for showcasing services, team, and projects',
        fullDescription: 'Designed and built a cross-platform company portfolio application showcasing services, team, and past projects using JavaFX for UI and Android Studio for development. The app uses reusable components for consistent branding across screens.',
        image: resolveImage('project-placeholder.svg'),
        tags: ['Java', 'JavaFX', 'Android Studio', 'UI Design'],
        liveDemo: '#',
        sourceCode: '#',
        featured: true,
        features: [
            'Service showcase',
            'Team profile views',
            'Project gallery',
            'Reusable UI components',
            'Cross-platform experience',
            'Consistent visual branding'
        ]
    },
    {
        id: 4,
        title: 'Blind Stick — Smart Assistive Device (IoT)',
        description: 'ESP32-powered obstacle detection stick with real-time feedback for accessibility',
        fullDescription: 'Engineered a smart walking stick for visually impaired users, using ESP32 and multiple sensors to detect nearby obstacles in real time. The system implements buzzer and vibration feedback logic to alert users of obstacle distance, combining embedded systems with practical accessibility design.',
        image: resolveImage('project-placeholder.svg'),
        tags: ['ESP32', 'Embedded C', 'IoT', 'Sensors'],
        liveDemo: '#',
        sourceCode: '#',
        featured: true,
        features: [
            'Obstacle detection',
            'Real-time sensor feedback',
            'Buzzer and vibration alerts',
            'Accessible assistive design',
            'Embedded systems implementation',
            'Practical user-focused logic'
        ]
    },
    {
        id: 5,
        title: 'Shop Management System',
        description: 'Inventory and billing system built in C++ using OOP principles',
        fullDescription: 'Built a complete shop management solution for inventory, billing, and transaction handling using C++ and object-oriented programming concepts such as classes, inheritance, and polymorphism.',
        image: resolveImage('project-placeholder.svg'),
        tags: ['C++', 'OOP', 'Software', 'Inventory'],
        liveDemo: '#',
        sourceCode: '#',
        featured: false,
        features: [
            'Inventory tracking',
            'Billing workflow',
            'Transaction management',
            'Reusable class design',
            'Object-oriented structure',
            'Scalable console-based system'
        ]
    },
    {
        id: 6,
        title: 'Student Library Management System',
        description: 'Console-based library system with persistent file storage in C',
        fullDescription: 'Developed a console-based library management system in C using structs, file I/O, and preprocessor directives for persistent record management and data organization.',
        image: resolveImage('project-placeholder.svg'),
        tags: ['C', 'File I/O', 'Data Structures', 'Console App'],
        liveDemo: '#',
        sourceCode: '#',
        featured: false,
        features: [
            'Persistent record storage',
            'File-based data handling',
            'Library record management',
            'Structured C implementation',
            'Efficient data organization',
            'Simple and reliable workflow'
        ]
    },
    {
        id: 7,
        title: 'Digital Logic Gate Simulator',
        description: 'Visual simulator for AND, OR, NOT, NAND, NOR, and XOR logic gates',
        fullDescription: 'Created a digital logic simulator to visualize core logic gates and their truth tables, helping users better understand logical circuit behavior and design principles.',
        image: resolveImage('project-placeholder.svg'),
        tags: ['Logic Design', 'Digital Systems', 'Simulation', 'Education'],
        liveDemo: '#',
        sourceCode: '#',
        featured: false,
        features: [
            'Interactive gate simulation',
            'Truth table visualization',
            'Logic design fundamentals',
            'Educational utility',
            'Clear circuit representation',
            'Core digital concepts'
        ]
    },
    {
        id: 8,
        title: 'Shop Card & Management System',
        description: 'Oracle-based relational database system for inventory and transactions',
        fullDescription: 'Designed a relational database solution in Oracle for inventory and transaction tracking, with SQL-based reporting and structured data management for business operations.',
        image: resolveImage('project-placeholder.svg'),
        tags: ['Oracle', 'SQL', 'Database', 'Reporting'],
        liveDemo: '#',
        sourceCode: '#',
        featured: false,
        features: [
            'Relational database design',
            'Inventory tracking',
            'Transaction records',
            'SQL-based reporting',
            'Data integrity',
            'Structured business workflow'
        ]
    },
    {
        id: 9,
        title: 'Personal Portfolio App',
        description: 'Java-based application for presenting resume, skills, and projects',
        fullDescription: 'Developed a Java-based application to present resume details, skills, and completed projects in an interactive and polished format.',
        image: resolveImage('project-placeholder.svg'),
        tags: ['Java', 'Desktop App', 'Portfolio', 'UI'],
        liveDemo: '#',
        sourceCode: '#',
        featured: false,
        features: [
            'Interactive portfolio presentation',
            'Resume display',
            'Skills showcase',
            'Project highlights',
            'Structured app layout',
            'Desktop-friendly experience'
        ]
    },
    {
        id: 10,
        title: 'Branded Clothing E-Commerce Site',
        description: 'AI-assisted prototype featuring product catalog, cart, and responsive design',
        fullDescription: 'Created a branded clothing e-commerce prototype with a product catalog, cart experience, and responsive design, developed with AI-assisted rapid prototyping tools.',
        image: resolveImage('project-placeholder.svg'),
        tags: ['E-Commerce', 'Responsive', 'UI/UX', 'Prototype'],
        liveDemo: '#',
        sourceCode: '#',
        featured: false,
        features: [
            'Product catalog',
            'Shopping cart experience',
            'Responsive layout',
            'Brand-focused design',
            'Rapid prototype workflow',
            'Modern storefront feel'
        ]
    },
    {
        id: 11,
        title: 'Hotel Booking Website',
        description: 'Responsive booking experience built with AI-assisted development tools',
        fullDescription: 'Built a hotel booking website with a complete reservation flow and polished responsive UI, using AI-assisted development tools such as Lovable and Claude to accelerate delivery.',
        image: resolveImage('project-placeholder.svg'),
        tags: ['Web Development', 'Booking', 'Responsive', 'AI-Assisted'],
        liveDemo: '#',
        sourceCode: '#',
        featured: false,
        features: [
            'Booking flow',
            'Responsive design',
            'Hotel showcase',
            'User-friendly interface',
            'Fast prototyping',
            'Modern web experience'
        ]
    }
];

export const getFeaturedProjects = (): Project[] => {
    return projectsData.filter(project => project.featured);
};

export const getAllProjects = (): Project[] => {
    return projectsData;
};
