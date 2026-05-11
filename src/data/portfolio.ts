export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  logo?: string;
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  github?: string;
  thumbnail: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  about: string;
  profileImage: string;
  social: SocialLink[];
  skills: {
    frontend: string[];
    backend: string[];
    database: string[];
    cloudAndDevOps: string[];
    tools: string[];
    languages: string[];
    methodologies: string[];
  };

  experience: Experience[];
  projects: Project[];
}

export const portfolioData: PortfolioData = {
  name: "Abishek A S",
  role: "Software Engineer",
  about:
    "Welcome! I'm a passionate software engineer with a knack for crafting elegant solutions and pushing the boundaries of technology. Specializing in Full Stack Development, Software Development, and Coding, I bring a wealth of experience in building robust microservices, implementing automation testing frameworks, and creating intuitive user interfaces. Let's embark on a journey of innovation and discovery together!",
  profileImage: "/hero/DP.jpg",
  social: [
    {
      platform: "GitHub",
      url: "https://github.com/abishek-as",
      icon: "Github",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/abishek-as",
      icon: "Linkedin",
    },
    {
      platform: "Email",
      url: "mailto:abishek.codes@outlook.com",
      icon: "Mail",
    },
  ],
  skills: {
    frontend: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "Responsive Design",
      "shadcn/ui",
    ],

    backend: [
      "C#",
      ".NET",
      "ASP.NET Core",
      "Node.js",
      "Express.js",
      "Python",
      "Django",
      "FastAPI",
      "REST APIs",
      "Microservices",
      "JWT Authentication",
      "Entity Framework Core",
      "Prisma ORM",
      "API Integration",
      "Authentication & Authorization",
      "Background Services",
      "Webhooks",
      "System Design Basics",
    ],

    database: [
      "PostgreSQL",
      "MySQL",
      "Azure SQL",
      "SQLite",
      "Database Design",
      "Stored Procedures",
      "Query Optimization",
    ],

    cloudAndDevOps: [
      "Azure",
      "Azure App Services",
      "Azure DevOps",
      "CI/CD Pipelines",
      "Git",
      "GitHub Actions",
      "Docker",
      "Vercel",
    ],

    tools: [
      "Visual Studio",
      "VS Code",
      "Postman",
      "Swagger",
      "GitHub",
      "Azure Boards",
      "Figma",
      "IntelliJ IDEA",
      "JIRA",
    ],

    languages: ["C#", "Java", "Python", "JavaScript", "TypeScript", "SQL"],

    methodologies: [
      "Agile",
      "Scrum",
      "SDLC",
      "Requirement Gathering",
      "Technical Documentation",
    ],
  },
  experience: [
    {
      company: "Maersk Training",
      role: "Technical Business Analyst",
      period: "May 2024 - Present",
      description: [
        "Built a Certificate Management module for the TMS app using React and ASP.NET Core MVC, enabling secure access, download, and offline viewing of certificates, increasing retrieval usage by 40%.",
        "Developed a centralized Vendor Management System using React, Django, and PostgreSQL, handling onboarding, performance tracking, compliance, SLAs, and risk, reducing manual work by 60%.",
        "Created internal tools like Booking Tracker, Productivity Tracker, and real-time dashboards using Next.js and ASP.NET Core, improving data visibility and reducing manual reporting by 50%.",
        "Led Agile processes across 20+ sprints, managed JIRA boards, and refined 150+ user stories, reducing bug-fixing time by 30% and improving delivery speed by 25%.",
        "Reduced support tickets by 20% by improving UI workflows, creating help documentation, and conducting live demos for internal and enterprise users.",
      ],
    },
    {
      company: "Maersk Training",
      role: "Software Engineer Trainee",
      period: "Feb 2024 - Apr 2024",
      description: [
        "Developed frontend modules using React and TypeScript based on Figma designs, improving development speed and consistency by 30%.",
        "Built reusable UI components and integrated them with ASP.NET Core MVC APIs, improving feature delivery and issue resolution by 25%.",
        "Improved team collaboration by implementing Git and Azure DevOps workflows, reducing merge conflicts by 20%.",
      ],
    },
    {
      company: "Stryker",
      role: "Research and Development Intern",
      period: "Sep 2022 - Jul 2023",
      description: [
        "Automated 100+ test cases using PyTest and built Flask mocks for testing 10+ microservices, helping identify bugs early.",
        "Used Docker to containerize services and enable local testing, reducing deployment time by 30% and easing QA efforts.",
        "Contributed to CI/CD pipelines on GitLab and collaborated with developers, reducing code conflicts by 20% and improving deployment stability.",
      ],
    },
  ],
  projects: [
    {
      thumbnail: "/project-images/task_flow_homePage.png",
      title: "TaskFlow",
      description:
        "TaskFlow is a feature-rich app enabling seamless organisation collaboration through kanban-style boards, lists, and cards, backed by secure authentication, activity tracking, and Stripe-based subscriptions for unlimited board access. Powered by PostgreSQL, Prisma ORM, and styled with shadcnUI and TailwindCSS.",
      link: "https://task-flow-lac.vercel.app/",
      github: "https://github.com/abishek-as/TaskFlow.git",
      techStack: [
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "Clerk Auth",
        "shadcn-ui",
        "Stripe",
        "PostgreSQL",
        "Prisma",
        "Supabase",
        "TypeScript",
      ],
    },
    {
      thumbnail: "/project-images/pdfprompt_homepage.png",
      title: "PDFPrompt",
      description:
        "PDFPrompt is a comprehensive SaaS application designed to streamline the management and interaction with PDF documents. It offers secure sign-in via Kinde authentication, AI-powered PDF summarisation, natural language Q&A on documents, and subscription management through Stripe.",
      link: "https://pdf-prompt.vercel.app/",
      github: "https://github.com/abishek-as/PDFPrompt",
      techStack: [
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "Kinde Auth",
        "shadcn-ui",
        "OpenAI",
        "Stripe",
        "MySQL",
        "Prisma",
        "PlanetScale",
        "TypeScript",
        "UploadThing",
      ],
    },
    {
      thumbnail: "/project-images/realtor_homepage.png",
      title: "RealTor",
      description:
        "RealTor is a feature-rich house real estate application that simplifies property search and management. Users can sign up via Google OAuth, create and manage listings with images, and contact property owners directly — all in one seamless platform.",
      link: "https://realtor-akaj.onrender.com/",
      github: "https://github.com/abishek-as/realtor.git",
      techStack: [
        "Node.js",
        "Express",
        "React.js",
        "MongoDB",
        "Firebase",
        "Vite",
      ],
    },
    {
      thumbnail: "/project-images/ecom_homepage.png",
      title: "Full Stack E-Commerce + Dashboard & CMS",
      description:
        "A full-stack e-commerce solution with a multi-vendor CMS admin dashboard. Manage categories, products, billboards, orders, and sales with graphical revenue tracking. Built with Clerk auth, Stripe checkout, and a MySQL + Prisma + PlanetScale backend.",
      link: "https://ecommerce-store-theta-gray.vercel.app/",
      github: "https://github.com/abishek-as/ecommerce-store",
      techStack: [
        "React.js",
        "Next.js",
        "Tailwind",
        "Clerk Auth",
        "shadcn-ui",
        "Stripe",
        "MySQL",
        "Prisma",
        "PlanetScale",
        "Cloudinary",
        "TypeScript",
      ],
    },
    {
      thumbnail: "/project-images/acd_homepage.png",
      title: "Audio Classification using Deep Learning",
      description:
        "Explores audio classification using ANN, 1D CNN, and 2D CNN on a dataset of 8732 labelled urban sound excerpts across ten categories. Includes data preprocessing, feature extraction, model comparison by accuracy and inference time, and a Django deployment for live predictions.",
      link: "https://github.com/abishek-as/Audio-Classification-Deep-Learning",
      github:
        "https://github.com/abishek-as/Audio-Classification-Deep-Learning",
      techStack: [
        "Deep Learning",
        "Python",
        "Django",
        "Audio Classification",
        "Jupyter Notebook",
      ],
    },
    {
      thumbnail: "/project-images/recom.png",
      title: "Netflix Movie Recommendation",
      description:
        "A movie recommendation system built on a Netflix dataset using collaborative filtering and content-based filtering algorithms. Developed in response to the surge in OTT viewership during the pandemic.",
      link: "https://github.com/abishek-as/Netflix-Movie-Recommendation",
      github: "https://github.com/abishek-as/Netflix-Movie-Recommendation",
      techStack: [
        "Python",
        "Jupyter Notebook",
        "Collaborative Filtering",
        "Content-Based Filtering",
      ],
    },
    {
      thumbnail: "/project-images/pc_homepage.jpg",
      title: "Personal Companion",
      description:
        "A Flutter cross-platform app combining an expense tracker with bar-chart visualisation, a step counter via the pedometer plugin, and a quick note-taking module — all backed by a local SQLite database.",
      link: "https://github.com/abishek-as/Personal-Companion",
      github: "https://github.com/abishek-as/Personal-Companion",
      techStack: ["Flutter", "Dart", "SQLite", "Physical Activity"],
    },
  ],
};
