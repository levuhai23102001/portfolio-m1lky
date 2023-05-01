import Hero from "../pages/Home/home-section/Hero";
import About from "../pages/Home/home-section/About";
import Projects from "../pages/Home/home-section/Projects";
import Contact from "../pages/Home/home-section/Contact";
import Skills from "../pages/Home/home-section/Skills";

import {
  DiscordIcon,
  DribbleIcon,
  FacebookIcon,
  GithubIcon,
  LinkedInIcon,
  TwitterIcon,
} from "../components/Icons";

import {
  web,
  mobile,
  backend,
  creator,
  astro,
  astroGun,
  lumbur,
  pinkbur,
  whitebur,
  meta,
  starbucks,
  tesla,
  css,
  docker,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  typescript,
  portfolio,
  blob,
  aniM1lky,
  photoApp,
} from "../assets";

export const socialLinks = [
  {
    icon: FacebookIcon,
    path: "https://www.facebook.com/Milky2310",
  },
  {
    icon: TwitterIcon,
    path: "https://twitter.com/iah_le",
  },
  {
    icon: GithubIcon,
    path: "https://github.com/levuhai23102001",
  },
  {
    icon: LinkedInIcon,
    path: "https://www.linkedin.com/in/h%E1%BA%A3i-v%C5%A9-889958219/",
  },
  {
    icon: DiscordIcon,
    path: "https://www.facebook.com/Milky2310",
  },
  {
    icon: DribbleIcon,
    path: "https://www.facebook.com/Milky2310",
  },
];

export const sections = [
  {
    id: "main",
    component: Hero,
  },
  {
    id: "about",
    component: About,
  },
  {
    id: "skills",
    component: Skills,
  },
  {
    id: "projects",
    component: Projects,
  },

  {
    id: "contact",
    component: Contact,
  },
];

export const overviewList = [
  {
    icon: web,
    title: "Web Developer",
  },
  {
    icon: mobile,
    title: "Mobile Developer",
  },
  {
    icon: backend,
    title: "Fullstack Developer",
  },
  {
    icon: creator,
    title: "Content Creator",
  },
];

export const characterList = [
  {
    name: "Astro",
    img: astro,
  },
  {
    name: "AstroGun",
    img: astroGun,
  },
  {
    name: "Lumbur",
    img: lumbur,
  },
  {
    name: "White Lumbur",
    img: whitebur,
  },
  {
    name: "Pink Lumbur",
    img: pinkbur,
  },
];

export const experiences = [
  {
    title: "Web Developer",
    company_name: "Meta",
    icon: meta,
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "React.js Developer",
  //   company_name: "Starbucks",
  //   icon: starbucks,
  //   date: "March 2020 - April 2021",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

export const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

export const projects = [
  {
    img: portfolio,
    title: "M1LKY - Portfolio Website",
    subtitle: "My Portfolio Website",
    tags: [
      "portfolio",
      "threejs",
      "reactjs",
      "canvas",
      "frame-motion",
      "vitejs",
      "threejs-fiber",
    ],
  },
  {
    img: aniM1lky,
    title: "Ani - M1LKY",
    subtitle: "Ani - M1LKY: Animes Website ReactJS",
    tags: ["social-media", "anime", "reactjs", "webapp", "movie-app"],
  },
  {
    img: blob,
    title: "WebGL - Blob",
    subtitle: "WebGL Blob using three/fiber",
    tags: ["threejs-fiber", "threejs", "reactjs", "canvas"],
  },
  {
    img: photoApp,
    title: "PHOTOGRAPHY APPLICATION",
    subtitle: "Basic Photo App ReactJS",
    tags: ["reactjs", "redux", "redux-toolkit", "hooks", "react-router-dom"],
  },
];
