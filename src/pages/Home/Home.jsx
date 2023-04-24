import React, { useEffect, useRef, useState } from "react";
import Navbar from "../../layouts/components/Navbar";
import Hero from "./home-section/Hero";
import About from "./home-section/About";
import Projects from "./home-section/Projects";
import Contact from "./home-section/Contact";
import Skills from "./home-section/Skills";
import Footer from "../../layouts/components/Footer";
import { ArrowLeftIcon, ArrowRightIcon } from "../../components/Icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Mousewheel } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./home.scss";

const sections = [
  {
    id: 1,
    component: <Hero />,
  },
  {
    id: 2,
    component: <About />,
  },
  {
    id: 3,
    component: <Projects />,
  },
  {
    id: 4,
    component: <Contact />,
  },
  {
    id: 5,
    component: <Skills />,
  },
];

const Home = () => {
  const [activeSection, setActiveSection] = useState(1);
  const [showScrollRight, setShowScrollRight] = useState(true);

  return (
    <>
      <div className="wrapper">
        <Navbar />
        <div className="main-container">
          <Swiper
            spaceBetween={1}
            effect={"fade"}
            fadeEffect={{
              crossFade: true,
            }}
            onSlideChange={(index) => {
              const sectionLength = sections.length - 1;
              if (index.activeIndex == sectionLength) {
                console.log("Slide" + index.activeIndex);
                setShowScrollRight(false);
              } else {
                console.log("Slide" + index.activeIndex);
                setShowScrollRight(true);
              }

              const counter = document.querySelector(".current-page");
              if (index.activeIndex === activeSection) {
                setActiveSection(activeSection + 1);
                counter.animate(
                  [
                    { transform: "translate(0, 6px)", opacity: 0 },
                    { transform: "translate(0, 0)", opacity: 1 },
                  ],
                  {
                    duration: 500,
                  }
                );
              } else {
                setActiveSection(activeSection - 1);
                counter.animate(
                  [
                    { transform: "translate(0, -6px)", opacity: 0 },
                    { transform: "translate(0, 0)", opacity: 1 },
                  ],
                  {
                    duration: 500,
                  }
                );
              }
            }}
            speed={1000}
            mousewheel={true}
            modules={[EffectFade, Mousewheel]}
            className="mySwiper"
          >
            {sections.map((section, index) => (
              <SwiperSlide key={index}>
                <div className="wrapper-content">{section.component}</div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {showScrollRight && (
          <div className="scroll">
            <span>Scroll to see effect</span>
            <ArrowRightIcon />
          </div>
        )}

        <Footer current={activeSection} pages={sections.length} />
      </div>
    </>
  );
};

export default Home;
