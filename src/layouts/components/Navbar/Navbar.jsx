import React from "react";

import { Link } from "react-scroll";
import { Link as SocialLink, NavLink } from "react-router-dom";

import {
  DiscordIcon,
  DribbleIcon,
  FacebookIcon,
  GithubIcon,
  LinkedInIcon,
  TwitterIcon,
} from "../../../components/Icons";

import "./navbar.scss";

const socialLinks = [
  {
    icon: <FacebookIcon />,
    path: "https://www.facebook.com/Milky2310",
  },
  {
    icon: <TwitterIcon />,
    path: "https://twitter.com/iah_le",
  },
  {
    icon: <GithubIcon />,
    path: "https://github.com/levuhai23102001",
  },
  {
    icon: <LinkedInIcon />,
    path: "https://www.linkedin.com/in/h%E1%BA%A3i-v%C5%A9-889958219/",
  },
  {
    icon: <DiscordIcon />,
    path: "https://www.facebook.com/Milky2310",
  },
  {
    icon: <DribbleIcon />,
    path: "https://www.facebook.com/Milky2310",
  },
];

const Navbar = () => {
  return (
    <>
      <nav className="m1lky-navbar navbar-fixed">
        <div className="navbar-wrapper">
          <ul className="navbar-menu">
            <li className="navbar-menu__item">
              <NavLink to="#main" className="navbar-menu__item--link">
                Home
              </NavLink>
            </li>
            <li className="navbar-menu__item">
              <NavLink to="#about" className="navbar-menu__item--link">
                About
              </NavLink>
            </li>
            <li className="navbar-menu__item">
              <NavLink to="#projects" className="navbar-menu__item--link">
                Projects
              </NavLink>
            </li>
            <li className="navbar-menu__item">
              <NavLink to="#skills" className="navbar-menu__item--link">
                Skills
              </NavLink>
            </li>
            <li className="navbar-menu__item">
              <NavLink to="#contact" className="navbar-menu__item--link">
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="navbar-brand">
            <span className="navbar-brand__name" data-text="M 1 L K Y">
              M 1 L K Y
            </span>
          </div>
          <ul className="social-menu">
            {socialLinks.map((item, index) => (
              <li key={index} className="social-menu__item">
                <SocialLink to={item.path}>{item.icon}</SocialLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
