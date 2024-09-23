import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `I have completed my Master’s in Advanced Computer Science. With hands-on experience in software development, I have honed my skills in front-end technologies such as React and Next.js, as well as back-end technologies including Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage this expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile software developer with a passion for creating efficient and user-friendly applications. I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in software development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I'm a polyglot who loves learning new languages and is also a sports and fitness enthusiast, enjoying football, cricket, and working out at the gym. Feel free to connect to discuss anything from technical challenges to hobbies I'm always eager to help and share insights`;

export const EXPERIENCES = [
  {
    year: "Jan 2021 - Present",
    role: "Freelance Developer",
    company: "Personal Agency / Chegg",
    description: `I leveraged my expertise in Computer Science to deliver tailored software projects and comprehensive solutions, enhancing user engagement, optimizing workflows, and contributing to business growth while helping students deepen their understanding of complex subjects.`,
    technologies: [
      "Javascript",
      "React.js",
      "Next.js",
      "mongoDB",
      "Express.js",
      "SQL",
      "Python",
    ],
  },
  {
    year: "May 2022 - Sept 2022",
    role: "Software Developer",
    company: "Mitacs Globalink Research Organization",
    description: `I developed an interactive, React-based software tool for analyzing educational activities, improving data visualization efficiency by 25%, enhancing accessibility for color-blind users, and reducing manual analysis time by 20%, with adoption by over 200 users across multiple institutions.`,
    technologies: [
      "React.js",
      "Node.js",
      "mySQL",
      "Vue.js",
      "mongoDB",
      "Three.js",
    ],
  },
  {
    year: "Jan 2022 - April 2022",
    role: "Software Developer",
    company: "National Institute of Hydrology",
    description: `I developed a React application for visualizing rainfall runoff models, boosting presentation engagement by 40% and streamlining hydrological simulations for over 100 researchers, reducing manual data handling efforts by 25%.`,
    technologies: ["React.js", "MongoDB", "Express", "Node.js"],
  },
  {
    year: "August 2022 - Nov 2022",
    role: "Artificial Intelligence and Machine Learning Intern",
    company: "QM Technologies Pvt.Ltd",
    description: `I gained foundational knowledge in machine learning concepts, including linear and logistic regression, clustering, and KNN, and successfully developed an automatic number-plate recognition system using Tesseract OCR for text recognition in vehicle registration plates.`,
    technologies: ["Python", "Tesseract", "OCR", "Regression", "Clustering"],
  },
];

export const PROJECTS = [
  {
    title: "Technical Blog Platform -  Web Application",
    image: project1,
    description:
      "Developed an advanced blogging platform using the MERN stack, featuring comprehensive blog management, robust admin capabilities, and user authentication with Google OAuth. ",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Express.js",
      "Node.js",
      "MongoDB",
      "Firebase",
    ],
    githubLink: "https://github.com/gopinathvarad/mern-blog",
  },
  {
    title:
      "MasteryGrids TeacherDashboard - A tool to analyse students academic performance",
    image: project2,
    description:
      "This project involves designing and evaluating visualisations to support instructor and student planning of learning activities.",
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Vue.js",
      "Three.js",
    ],
    githubLink: "https://github.com/gopinathvarad/Teacher-Dashboard-Project",
  },
  {
    title: "Group Call Application with WebRTC Mesh Architecture",
    image: project3,
    description:
      "Developed a real-time communication application supporting group calls using WebRTC with a Mesh architecture. Utilised SocketIO for signalling to establish and manage peer connections. Implemented a dynamic and responsive user interface with React.js, enabling seamless user interactions",
    technologies: [
      "React.js",
      "WebRTC",
      "Simple-peer",
      "SocketIO",
      "Node.js",
      "Express.js",
    ],
    githubLink:
      "https://github.com/gopinathvarad/Group-Video-Chat-Application-using-WebRTC",
  },
  {
    title: "Augmented Reality App for Education",
    image: project4,
    description:
      "I developed a marker-based AR technology with virtual buttons and AR video, providing an immersive and interactive learning experience for users of all ages, allowing in-depth concept understanding through mobile devices.",
    technologies: ["C#", "Unity", "Vuforia", "Blender"],
    githubLink:
      "https://github.com/gopinathvarad/Augmented-Reality-Education-App",
  },
];

export const CONTACT = {
  address: "York House, 50 York Road, Leicester LE15TT ",
  phoneNo: "+44 7549297783",
  email: "gvarad2001@gmail.com",
};
