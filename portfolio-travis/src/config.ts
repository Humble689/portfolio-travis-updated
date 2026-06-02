export const config = {
    developer: {
        name: "Travis",
        fullName: "Lufene Mark Travis",
        title: "Software Developer & CS Graduate",
        description: "Building secure, intelligent systems - from full-stack web applications to ML-powered infrastructure tools - with a focus on real-world impact across Africa."
    },
    social: {
        github: "Humble689",
        email: "marktravis689@gmail.com",
        location: "Kampala, Uganda"
    },
    about: {
        title: "About Me",
        description: "I'm a Computer Science graduate from Uganda Christian University with a passion for turning complex engineering challenges into clean, working systems. My foundation spans full-stack web development, cybersecurity, AI/ML, and enterprise networking.\n\nWhat drives me is building things that matter - whether that's a machine-learning intrusion detection system protecting SME networks, a gym management platform for a business in South Sudan, or contributing to data quality for international research. I bring an infrastructure-first mindset: reliability, security, and scalability from the ground up."
    },
    experiences: [
        {
            position: "Digital Growth Support Intern",
            company: "Absa Bank Uganda",
            period: "Jun 2025 – Aug 2025",
            location: "Kampala, Uganda",
            description: "Supported digital banking growth initiatives, contributing to customer-facing digital product improvements and internal data analysis workflows.",
            responsibilities: [
                "Supporting digital product rollouts and customer onboarding flows",
                "Analysing digital channel performance metrics",
                "Collaborating with cross-functional teams on growth experiments",
                "Documenting processes and preparing insight reports"
            ],
            technologies: ["Digital Banking", "Data Analysis", "Process Documentation"]
        },
        {
            position: "Learning Something New",
            company: "Self-Development",
            period: "Present",
            location: "Remote",
            description: "NOW",
            responsibilities: [],
            technologies: []
        },
        {
            position: "Property Manager",
            company: "Jokolera Estate",
            period: "2023 – 2024",
            location: "Uganda",
            description: "Managed day-to-day operations of a residential estate, overseeing tenant relations, maintenance coordination, and financial reporting.",
            responsibilities: [
                "Coordinating property maintenance and repairs",
                "Managing tenant communications and contracts",
                "Preparing monthly financial and occupancy reports",
                "Overseeing vendor relationships"
            ],
            technologies: ["Operations Management", "Financial Reporting", "Client Relations"]
        }
    ],
    projects: [
        {
            id: 1,
            title: "Vanguard - NIDS",
            category: "AI / Cybersecurity",
            technologies: "Python, FastAPI, Scikit-learn, XGBoost, LightGBM, Scapy, React, WebSocket",
            image: "/images/project-1.webp",
            description: "A hybrid ML-based Network Intrusion Detection System targeting Ugandan SMEs. Combines Random Forest, Isolation Forest, SVM, XGBoost, and LightGBM with a real-time React/WebSocket dashboard.",
            github: "https://github.com/Group-Firewall/Vanguard",
            demo: ""
        },
        {
            id: 2,
            title: "CineQuest",
            category: "Full Stack",
            technologies: "React, Node.js, REST APIs, TailwindCSS, Vercel",
            image: "/images/project-2.webp",
            description: "A movie discovery platform featuring search, filtering, and detailed film pages powered by public movie APIs. Clean, responsive UI optimised for fast browsing.",
            github: "https://github.com/Humble689/CineQuest-",
            demo: "https://cinequeatexam.vercel.app/"
        },
        {
            id: 3,
            title: "Job Portal",
            category: "Full Stack",
            technologies: "React, Node.js, Express, MongoDB, JWT Authentication",
            image: "/images/project-3.webp",
            description: "A full-stack job portal platform with employer and job-seeker flows, authentication, job listings management, and application tracking.",
            github: "https://github.com/Humble689/JobPortalFullStack_689689",
            demo: ""
        },
        {
            id: 4,
            title: "AI Study Buddy",
            category: "Agentic AI",
            technologies: "Python, Google Cloud Run, Gemini API, LangChain, React",
            image: "/images/project-4.webp",
            description: "An agentic AI study assistant tailored for CS students in Uganda. Supports Q&A, topic explanations, and study planning via a conversational interface deployed on Google Cloud Run.",
            github: "https://github.com/Humble689/study-buddy",
            demo: "https://uganda-cs-study-buddy-892028429960.europe-west2.run.app/"
        },
        {
            id: 5,
            title: "AgroSmart",
            category: "Database / Agriculture",
            technologies: "SQL, PostgreSQL, Relational Modelling, Data Analysis",
            image: "/images/project-5.webp",
            description: "A SQL relational database system designed to support smart agriculture workflows - tracking crops, resources, and yield analytics for smallholder farmers.",
            github: "https://github.com/Humble689",
            demo: ""
        }
    ],
    contact: {
        email: "marktravis689@gmail.com",
        github: "https://github.com/Humble689",
        linkedin: "https://www.linkedin.com/in/lufene-mark-travis-97679134b",
        kaggle: "https://www.kaggle.com/marktravis689",
        datacamp: "https://www.datacamp.com/portfolio/marktravis689",
        resume: "/resume.pdf",
        formspree: "https://formspree.io/f/xnjzekdg"
    },
    skills: {
        develop: {
            title: "SECURITY & ML",
            description: "Building intelligent, secure infrastructure",
            details: "Designing ML-powered security systems and AI tools using Python, Scikit-learn, TensorFlow, and FastAPI. Specialising in network intrusion detection, agentic AI, and data analysis pipelines for real-world impact.",
            tools: ["Python", "Scikit-learn", "TensorFlow", "XGBoost", "LightGBM", "FastAPI", "Scapy", "Cisco Networking", "VPN", "Linux", "Docker", "NLP"]
        },
        design: {
            title: "FULL-STACK",
            description: "Modern web applications, end to end",
            details: "Building responsive and scalable web applications using React, Node.js, and cloud platforms. Delivering clean UIs with Tailwind CSS, robust APIs, and reliable deployments via Vercel and Firebase.",
            tools: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "PostgreSQL", "TailwindCSS", "Vite", "Firebase", "Git", "REST APIs", "WebSocket"]
        }
    }
};
