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
