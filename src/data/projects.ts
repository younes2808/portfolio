// data/projects.ts
export interface Project {
  id: number;
  name: string;
  description: string;
  githubUrl: string;
  liveDemoUrl?: string;
  imageUrl?: string;
  tags?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Sci2XML",
    description: "This bachelor project, developed with SINTEF for the enRichMyData initiative, converts research PDFs into structured XML using GROBID, a custom classifier, and OCR tools, with support for both UI and terminal modes",
    githubUrl: "https://github.com/younes2808/Sci2XML",
    imageUrl: "/portfolio/assets/RightPic.png",
    tags: ["Python","ML","AI", "OCR"],
  },
  {
    id: 2,
    name: "Millenium Falcon Viewer",
    description: "An interactive web viewer for the 3D model of the millenium falcon",
    githubUrl: "https://github.com/younes2808/StarWars_Falcon",
    imageUrl: "/portfolio/assets/M1.png",
    liveDemoUrl: "https://younes2808.github.io/StarWars_Falcon/",
    tags: ["Three.js", "3D","HTML/CSS"],
  },{
    id: 53,
    name: "Apple Landing Page",
    description: "This is a recreation of the official iPhone 15 Pro Apple website, built using React and Vite. The project utilizes GSAP and Three.js frameworks to create dynamic and interactive animations",
    githubUrl: "https://github.com/younes2808/AppleLandingPage",
    liveDemoUrl: "https://younes2808.github.io/AppleLandingPage/",
    imageUrl: "/portfolio/assets/APPLE1.png",
    tags: ["React", "Three.js", "GSAP","3D"],
  },
  {
    id: 4,
    name: "RAYS (React)",
    description: "A social media app with features like post creation/editing and friend management. We built two versions: one fully in C# (frontend and backend), and another with a C# backend and React frontend",
    githubUrl: "https://github.com/younes2808/RAYS-Social-Media-App",
    imageUrl: "/portfolio/assets/rays.png",
    tags: ["React", ".Net","Full-stack"],
  },{
    id: 5,
    name: "NAVATAR-Helper",
    description: "NAVATAR-Helper is an AI chatbot for health-related NEET queries, using RAG to deliver accurate, bilingual (Norwegian/English) answers from verified sources with minimal hallucinations",
    githubUrl: "https://github.com/younes2808/NAVATAR-Helper",
     imageUrl: "/portfolio/assets/123.jfif",
    tags: ["Python", "AI", "LangChain"],
  },{
    id: 6,
    name: "File transfer application",
    description: "The Reliable Transport Protocol (DRTP) is a file transfer application that ensures reliable data transmission over UDP. This project was developed as part of the Exam for DATA2410 class, focusing on data networks and cloud services.",
    githubUrl: "https://github.com/younes2808/DRTP_Using_UDP",
     imageUrl: "/portfolio/assets/ftp.png",
    tags: ["Python", "TCP & UDP", "Networking"],
  },{
    id: 7,
    name: "Portfolio",
    description: "Here you can find the repo for this page",
    githubUrl: "https://github.com/younes2808/portfolio",
     imageUrl: "/portfolio/assets/gbb.png",
    tags: ["Typescript", "React", "Portfolio"],
  },{
    id: 8,
    name: "RAYS (C#)",
    description: "A social media app with features like post creation/editing and friend management. We built two versions: one fully in C# (frontend and backend), and another with a C# backend and React frontend",
    githubUrl: "https://github.com/younes2808/RAYS-SocialMediaApp-ASP.NET",
    imageUrl: "/portfolio/assets/rays.png",
    tags: [ ".Net","Full-stack"],
  }
  
  
];
