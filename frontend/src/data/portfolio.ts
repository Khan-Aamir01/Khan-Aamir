export type SkillsGroup = {
  frontend: string[];
  backend: string[];
  database: string[];
  tools: string[];
};

export type Profile = {
  logoName: string;
  fullName: string;
  role: string;
  imageUrl: string;
  about: string;
  email: string;
  phone: string;
  location: string;
  footerText: string;
  skills: SkillsGroup;
  social: {
    github: string;
    linkedin: string;
    twitter: string;
  };
};

export type Project = {
  _id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
};

export const dummyProfile: Profile = {
  logoName: "Khan Aamir",
  fullName: "Khan Mohd Aamir",
  role: "Software Developer",
  imageUrl: "",
  about:
    "I’m a Computer Engineering graduate with a B.E. degree from Mumbai University and a strong passion for computer science. I enjoy exploring how things work under the hood and building practical, real-world projects. I’ve worked on several full-stack projects using React, Node.js, MongoDB, and PostgreSQL, and I’m comfortable with concepts like authentication, APIs, and basic networking. I enjoy turning ideas into working products and continuously improving my engineering skills. Outside of building, I spend a lot of time watching, learning, and experimenting with computer science topics, from system design to low-level concepts. I’m driven by curiosity and a love for creating things that actually work.",
  email: "aamir989280@gmail.com",
  phone: "9892808248",
  location: "Mumbai, India",
  footerText: "Made with Hope!",
  skills: {
    frontend: ["React", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
    backend: ["Node.js", "Express", "REST APIs", "Java"],
    database: ["MongoDB", "PostgreSQL", "MySQL"],
    tools: ["Git", "Postman", "VS Code", "IntelliJ Idea"],
  },
  social: {
    github: "https://github.com/khan-aamir01",
    linkedin:
      "https://www.linkedin.com/in/mohd-aamir-khan-197715332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    twitter: "#",
  },
};

export const dummyProjects: Project[] = [
  {
    _id: "1",
    title: "Real-time Chat Application",
    description:
      "A full-stack real-time chat app with authentication, WebSocket-based messaging, and responsive UI. Implemented message persistence with a database, handled room/channel logic, and ensured seamless live updates across clients.",
    techStack: ["React", "Node.js", "WebSocket", "MongoDB"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    _id: "2",
    title: "Library Management System",
    description:
      "Developed a web application to streamline library operations, integrating functionalities like user authentication, book management, and fine tracking. Utilized the MERN stack (MongoDB, Express.js, React.js, Node.js) to build a responsive and intuitive user interface.",
    techStack: ["React", "Node.js", "Express", "JWT", "MongoDB"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    _id: "3",
    title: "Smart Feedback System",
    description:
      "Built a SaaS MVP for small businesses to collect customer feedback through voice recording and speech-to-text. Implemented a sentiment analysis pipeline to classify positive/negative feedback and generate insights.",
    techStack: ["Python", "Supabase", "FastAPI", "ML"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    _id: "4",
    title: "Glaucoma Detection and Monitoring",
    description:
      "Developed an AI-based system for glaucoma detection and monitoring using retinal images captured with a 20D lens. Implemented deep learning models including ResNet, YOLO, and U-Net for image classification, segmentation, and preprocessing. Built a React UI for visualization and reporting, with a Python Flask backend handling model inference.",
    techStack: ["Python", "Flask", "Deep Learning", "Hardware"],
    githubUrl: "#",
    liveUrl: "#",
  },
];
