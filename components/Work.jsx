"use client";
import Link from "next/link";
import "swiper/css"; // import swiper styles
import "swiper/css/pagination";
import { Pagination } from "swiper/modules"; // import required modules
import { Swiper, SwiperSlide } from "swiper/react"; // import swiper react components
import ProjectCard from "./ProjectCard";
import { Button } from "./ui/button";

const projectData = [
  {
    image: "/project-images/task_flow_homePage.png",
    category: "NextJS",
    name: "TaskFlow",
    description:
      "TaskFlow is a feature-rich app enabling seamless organization collaboration through kanban-sty le boards, lists, and cards, backed by secure authentication, activity tracking, and Stripe-based subscriptions for unlimited board access. Powered by PostgreSQL, Prisma ORM, and styled with shadcnUI and TailwindCSS.",
    link: "https://task-flow-lac.vercel.app/",
    github: "https://github.com/abishek-as/TaskFlow.git",
    tools: [
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
    date: "Nov 2023",
    width: 1000,
    height: 950,
    cardWidth: 800,
    cardHeight: 750,
  },
  {
    image: "/project-images/pdfprompt_homepage.png",
    category: "NextJs",
    name: "PDFPrompt",
    description:
      "PDFPrompt is a comprehensive SaaS application designed to streamline the management and interaction with PDF documents. It offers a range of features, including secure sign-in and sign-up using Kindle authentication, enabling users to upload and delete PDFs effortlessly. The application utilizes AI technology to automatically summarize PDF content and facilitate natural language interactions, allowing users to ask questions related to the document and receive accurate responses. Additionally, PDFPrompt provides subscription management through Stripe, offering access to premium features. The user-friendly frontend is built using React and Shadcn-ui, while the responsive backend relies on tRPC and the Next.js framework, ensuring efficient handling of PDF documents and a seamless user experience. Overall, PDFPrompt simplifies the way users work with PDFs, making it an indispensable tool for document management and information retrieval.",
    link: "https://pdf-prompt.vercel.app/",
    github: "https://github.com/abishek-as/PDFPrompt",
    tools: [
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
    width: 2000,
    height: 2000,
    cardWidth: 230,
    cardHeight: 700,
  },
  {
    image: "/project-images/realtor_homepage.png",
    category: "NodeJS",
    name: "RealTor",
    description:
      "RealTor is a feature-rich house real estate application designed to simplify the property search and management process. Users can create accounts with ease, either through traditional signup or by using Google OAuth for added convenience. Once logged in, they have the power to create, update, and delete property listings, providing essential information such as property names, descriptions, addresses, rental or sale pricing, number of bedrooms and bathrooms, parking availability, and furnishing details. To make listings more appealing, users can upload up to six images per property. Personalization is also a priority, allowing users to edit their usernames, email addresses, passwords, and avatars. For those seeking to discontinue their usage, account deletion is an option. When browsing property listings, users can swiftly access crucial information, including property names, descriptions, pricing, and key features, along with the ability to easily contact property owners for inquiries. RealTor delivers a seamless, all-in-one solution for navigating the complex world of real estate.",
    link: "https://realtor-akaj.onrender.com/",
    github: "https://github.com/abishek-as/realtor.git",
    tools: ["NodeJs", "express", "React.js", "MongoDB", "Firebase", "vite"],
    width: 2500,
    height: 2500,
    cardWidth: 230,
    cardHeight: 700,
  },
  {
    image: "/project-images/ecom_homepage.png",
    category: "NextJs",
    name: "Full Stack E-Commerce + Dashboard & CMS Project",
    description:
      "I utilize Shadcn UI for the administration interface. The admin dashboard serves as a versatile system for CMS, admin functions, and API operations. Multiple vendors and stores are efficiently managed through this centralized CMS, with automated API route generation for each. Comprehensive management of categories, products, filters, and image updates is handled seamlessly. Administration includes overseeing 'Billboards' and their associations with categories or standalone displays. Implementation of a robust search functionality across various aspects, complete with pagination features. Oversight of featured products on the homepage, order management, and sales monitoring with revenue tracking through graphical representation. Authentication is managed using Clerk. Order creation is streamlined, integrating Stripe checkout and webhooks for efficient processing. Database setup is established using MySQL, Prisma, and PlanetScale for optimal performance and reliability.",
    link: "https://ecommerce-store-theta-gray.vercel.app/",
    github: "https://github.com/abishek-as/ecommerce-store",
    tools: [
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
    width: 2500,
    height: 2500,
    cardWidth: 300,
    cardHeight: 600,
  },
  {
    image: "/project-images/acd_homepage.png",
    category: "Python",
    name: "Audio Classification using Deep Learning",
    description:
      "Audio classification or sound classification can be referred to as the process of analysing audio recordings. This amazing technique has multiple applications in the fields of AI and data science. In this project, we will explore audio classification using deep learning concepts involving algorithms like Artificial Neural Network (ANN), 1D Convolutional Neural Network (CNN1D), and CNN2D. The dataset contains 8732 labelled sound excerpts (=4s) of urban sounds from ten categories: air for audio prediction, car horns, children playing, dog barking, drilling, engine idling, gunshots, jackhammers, sirens, and street music are used for audio prediction. Before we develop models, we do some basic data preprocessing and feature extraction on audio signals. As a result, each model is compared in terms of accuracy, training time, and prediction time. This is explained by model deployment, where users are allowed to load a desired sound output for each model being deployed successfully, which will be discussed in detail.",
    link: "https://github.com/abishek-as/Audio-Classification-Deep-Learning",
    github: "https://github.com/abishek-as/Audio-Classification-Deep-Learning",
    tools: [
      "Deep Learing",
      "Python",
      "Django",
      "Audio Classification",
      "Jupyter Notebook",
    ],
    width: 3000,
    height: 2000,
    cardWidth: 400,
    cardHeight: 700,
  },
  {
    image: "/project-images/recom.png",
    category: "Python",
    name: "Netflix Movie Recommendation",
    description:
      "Our lives have been drastically altered as a result of the coronavirus pandemic. The general public is advised to keep a social distance and stay at home. So, besides online school and work, what do they do at home? They require some form of entertainment. We have no other options for entertainment besides watching TV, going to the movies, or engaging in indoor activities. Statistics show that the number of people watching movies on OTT services like Netflix has increased since the lockdown. So we gathered a dataset containing information such as movie title, cast, type, and ratings and used various algorithms to recommend films.",
    link: "https://github.com/abishek-as/Netflix-Movie-Recommendation",
    github: "https://github.com/abishek-as/Netflix-Movie-Recommendation",
    tools: [
      "Python",
      "Jupyter Notebook",
      "Collaborative filtering",
      "Content-Based Filtering",
    ],
    width: 2000,
    height: 1000,
    cardWidth: 400,
    cardHeight: 700,
  },
  {
    image: "/project-images/pc_homepage.jpg",
    category: "Flutter",
    name: "Personal Companion",
    description:
      "The requirement for numerous functions in a single app is expanding and becoming important as the number of apps increases and challenges with maintainability and storage arise. 'Personal Companion,' the proposed solution, contains tools for keeping track of spending, taking notes, and calculating the user's steps. The database is SQLite, and the program is created with flutter. Flutter makes developing cross-platform apps simple. Flutter was the ideal choice for our solution because it is available on numerous platforms and has a shorter time to market. The expense tracker function is designed to keep track of spending by allowing users to enter transactions and generate bar charts that show the percentage of total expenses. The pedometer plugin is also used to calculate steps. It will also have goals (for motivating the user). Note-taking gives us a quick and simple notepad editing experience when we write notes, memos, emails, messages, shopping lists, and to-do lists.",
    link: "https://github.com/abishek-as/Personal-Companion",
    github: "https://github.com/abishek-as/Personal-Companion",
    tools: ["Flutter", "Dart", "SQLite", "Physical Activity"],
    width: 1250,
    height: 1250,
    cardWidth: 130,
    cardHeight: 200,
  },
];

const Work2 = () => {
  return (
    <div className="p-10 flex flex-row items-center justify-center">
      <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
        <h2 className="section-title mb-4"> My Latest Projects</h2>
        <p className="subtitle mb-8">
          Step into the code I've built and brought to life.
        </p>
        <Link href="/projects">
          <Button>All Projects</Button>
        </Link>
      </div>
      <div className="xl:max-w-[1000px] ml-40">
        <Swiper
          className="h-[500px]"
          slidesPerView={1}
          breakpoints={{ 640: { slidesPerView: 2 } }}
          freeMode={true}
          spacebetween={100}
          modules={[Pagination]}
          pagination={{ clickable: true }}
        >
          {/* show only the first 4 projects for the slides  */}
          {projectData.map((project, index) => {
            return (
              <SwiperSlide key={index}>
                <ProjectCard project={project} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Work2;
