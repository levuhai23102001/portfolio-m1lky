import React, { useRef, useState } from "react";
import { Link } from "react-scroll";
import { Link as SocialLink } from "react-router-dom";
import { navLinks, socialLinks } from "../../../constants";
import sound from "../../../assets/bg-sound.mp3";

import "./navbar.scss";

const Navbar = () => {
  //State
  const [isPlay, setIsPlay] = useState(false);
  //Ref
  const soundRef = useRef(null);

  const handlePlayMusic = () => {
    setIsPlay(!isPlay);
    if (!isPlay) {
      soundRef.current.volume = 0.3;
      soundRef.current.play();
    } else {
      soundRef.current.volume = 0;
      soundRef.current.pause();
    }
  };

  const onEnded = () => {
    setIsPlay(false);
  };

  return (
    <>
      <nav className="m1lky-navbar navbar-fixed">
        <div className="navbar-wrapper">
          <ul className="navbar-menu">
            {navLinks.map((link, index) => (
              <li className="navbar-menu__item" key={index}>
                <Link
                  to={link.id}
                  spy
                  activeClass="active"
                  className="navbar-menu__item--link"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="navbar-brand">
            <span className="navbar-brand__name" data-text="M 1 L K Y">
              M 1 L K Y
            </span>
          </div>
          <ul className="social-menu">
            {socialLinks.map((item, index) => (
              <li key={index} className="social-menu__item">
                <SocialLink to={item.path}>{<item.icon />}</SocialLink>
              </li>
            ))}
          </ul>
          <div
            className={isPlay ? "btn-play-music isPlay" : "btn-play-music"}
            onClick={handlePlayMusic}
          >
            <span className="stroke"></span>
            <span className="stroke"></span>
            <span className="stroke"></span>
            <span className="stroke"></span>
            <span className="stroke"></span>
          </div>
          <audio
            ref={soundRef}
            src={sound}
            onEnded={onEnded}
            className="sound-background"
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
