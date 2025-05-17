export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Emily Johnson',
        position: 'Marketing Director at GreenLeaf',
        img: 'assets/review1.png',
        review:
            'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
        id: 2,
        name: 'Mark Rogers',
        position: 'Founder of TechGear Shop',
        img: 'assets/review2.png',
        review:
            'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
        id: 3,
        name: 'John Dohsas',
        position: 'Project Manager at UrbanTech ',
        img: 'assets/review3.png',
        review:
            'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
        id: 4,
        name: 'Ether Smith',
        position: 'CEO of BrightStar Enterprises',
        img: 'assets/review4.png',
        review:
            'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
];

export const myProjects = [
    {
        title: 'WellCo - Your Wellness Companion',
        desc: 'WellCo is an AI-powered wellness assistant designed to support both mental and physical health. It serves as a holistic companion that helps users manage stress, anxiety, and fitness routines through multimodal interactions.',
        subdesc:
            'The architecture consists of a React.js front-end that communicates with the Node.js/Express.js back-end through API requests. The back-end handles user authentication, data management, and API integrations. The AI models and Gemini API are accessed via well-defined endpoints to generate responses based on user queries. User inputs are stored securely in Firebase Firestore to maintain context and enable personalized responses in future interactions.',
        href: 'https://github.com/Raiyanhq/WellCo',
        texture: '/textures/project/project1.mp4',
        logo: '/assets/project-logo1.png',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'NodeJS',
                path: 'assets/nodejs.png',
            },
            {
                id: 3,
                name: 'JavaScript',
                path: '/assets/javascript.png',
            },
            {
                id: 4,
                name: 'GeminiAPI',
                path: '/assets/geminiapi.png',
            },
        ],
    },
    {
        title: 'PopDaLock',
        desc: 'Welcome to Pop the Lock! This is a simple yet challenging game developed using Swift. The objective is to unlock the lock by tapping at the right moment.',
        subdesc:
            'The PopDaLock App is a mobile application written in Swift that simulates an interactive locking mechanism game. It features responsive gameplay with animations and increasing difficulty, designed for iOS devices.',
        href: 'https://github.com/Raiyanhq/PopDaLock-app',
        texture: '/textures/project/project2.mp4',
        logo: '/assets/project-logo2.png',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'Xcode',
                path: '/assets/xcode.png',
            },
            {
                id: 2,
                name: 'Swift',
                path: 'assets/swift.png',
            },
            {
                id: 3,
                name: 'iOS',
                path: '/assets/ios.png',
            },
            {
                id: 4,
                name: 'Apple',
                path: '/assets/apple.png',
            },
        ],
    },
    {
        title: 'Golapi-Care',
        desc: 'We\'re trying to identify Mild Cognitive Impairment symptoms among the elderly by identifying and classifying different behavioral and sensor data. Specifically, we\'re using wearable sensor data that is readily available and accessible to everyone.',
        subdesc:
            'For the front end, we\'re using HTML, CSS, and JS and for the back end, we\'re using Python. Firstly we\'re authenticating the user and connecting to their main health wearable device by authenticating through Terra API. We then fetch the data using webhooks to our local machine using port forwarding from Terra API. Later we process and clean the data and compare them to the data that\'s from an MCI patient\'s wearable device and try to find patterns.',
        href: 'https://github.com/Raiyanhq/Golapi-Care',
        texture: '/textures/project/project3.mp4',
        logo: '/assets/project-logo3.png',
        logoStyle: {
            backgroundColor: '#60f5a1',
            background:
                'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
            border: '0.2px solid rgba(208, 213, 221, 1)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'Python',
                path: '/assets/python.png',
            },
            {
                id: 2,
                name: 'TerraAPI',
                path: 'assets/terraapi.png',
            },
            {
                id: 3,
                name: 'JavaScript',
                path: '/assets/javascript.png',
            },
            {
                id: 4,
                name: 'Xcode',
                path: '/assets/xcode.png',
            },
        ],
    },
    {
        title: 'Flower Project',
        desc: 'The Flower Project is a simple website that provides information about flowers. It features beautifully styled pages with images and descriptions, offering users a visually appealing way to explore different types of flowers.',
        subdesc:
            'Created using HTML and CSS, designed to showcase information about flowers. The project likely includes styled web pages with a responsive layout, integrating visual elements like images and text to create an aesthetically pleasing user experience.',
        href: 'https://github.com/Raiyanhq/Flower_Project_HTML',
        texture: '/textures/project/project4.mp4',
        logo: '/assets/project-logo4.png',
        logoStyle: {
            backgroundColor: '#0E1F38',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'HTML',
                path: '/assets/html.png',
            },
            {
                id: 2,
                name: 'CSS',
                path: 'assets/css.png',
            },
            {
                id: 3,
                name: '',
                path: '',
            },
            {
                id: 4,
                name: '',
                path: '',
            },
        ],
    },
    {
        title: 'Rotating Dodecahedron',
        desc: 'The Three.js Project is a web app that brings 3D graphics to life in your browser. It allows users to interact with 3D models, animations, and scenes, showcasing stunning visuals and smooth rendering right on a webpage.',
        subdesc:
            'Web-based application utilizing Three.js, a JavaScript 3D library, to create and render interactive 3D graphics directly in the browser. It employs WebGL for real-time 3D rendering, and may include features like animated objects, custom geometries, textures, and camera controls for an immersive user experience.',
        href: 'https://github.com/Raiyanhq/three.js-project',
        texture: '/textures/project/project5.mp4',
        logo: '/assets/project-logo5.png',
        logoStyle: {
            backgroundColor: '#1C1A43',
            border: '0.2px solid #252262',
            boxShadow: '0px 0px 60px 0px #635BFF4D',
        },
        spotlight: '/assets/spotlight5.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'CSS',
                path: 'assets/css.png',
            },
            {
                id: 3,
                name: 'NodeJS',
                path: '/assets/nodejs.png',
            },
            {
                id: 4,
                name: 'HTML',
                path: '/assets/html.png',
            },
        ],
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'Cox Communications Inc.',
        pos: 'Incoming Software Engineering Intern',
        duration: 'May 2025-August 2025',
        title: "",
        icon: '/assets/CoxComms.png',
        animation: 'victory',
    }, //Add picture and description of experiance
    {
        id: 2,
        name: 'Georgia State University',
        pos: 'Undergraduate Research Assistant',
        duration: 'October 2023-Present',
        title: "At Georgia State University, I developed a front-end website integrated with DataHub, improving data access for 500+ researchers and boosting efficiency by 30%. I deployed a Virtual Machine with Docker, reducing setup time by 40% and enhancing data management for 400+ users. Additionally, I optimized server performance through requirements analysis and improved data organization using SQL.",
        icon: '/assets/gsu.png',
        animation: 'victory',
    },
    {
        id: 3,
        name: 'RocketTech GSU',
        pos: 'Software Engineer',
        duration: 'February 2024-Present',
        title: "At Georgia State University’s Rocket Club, I developed C++ flight control software, integrating the MPU6050 for motion sensing with 98% accuracy and 35% lower latency. I optimized accelerometer data with smoothing algorithms, improving reliability by 40%, and implemented BMP280 sensor data logging for precise temperature and pressure recording. Additionally, I built a real-time wireless data transmission system using nRF24, achieving a 1 Mbps transfer rate with 50% reduced latency.",
        icon: '/assets/rocket-tech.png',
        animation: 'clapping',
    },
    {
        id: 4,
        name: 'Georgia State University',
        pos: 'Student Assistant (Event Coordinator) ',
        duration: 'September 2023-Present',
        title: "As a Student Assistant Event Coordinator at Georgia State University, I help organize graduation events for 8,000+ attendees, manage 1,000+ student records using advanced Excel, improving data accuracy by 20%, and handle phone and email inquiries with professionalism.",
        icon: '/assets/event-work.png',
        animation: 'salute',
    },
];