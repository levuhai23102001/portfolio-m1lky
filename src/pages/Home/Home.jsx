import React, { useState } from "react";
import Navbar from "../../layouts/components/Navbar";
import Footer from "../../layouts/components/Footer";
import { sections } from "../../../src/constants";
import { ArrowRightIcon } from "../../components/Icons";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Mousewheel } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./home.scss";

SwiperCore.use([EffectFade, Mousewheel]);

const Home = () => {
  const [activeSection, setActiveSection] = useState(1);
  const [showScrollRight, setShowScrollRight] = useState(true);

  const swiperOptions = {
    spaceBetween: 0,
    effect: "fade",
    effectFade: {
      crossFade: true,
    },
    noSwiping: true,
    noSwipingClass: {
      el: "no-swiper",
    },
    onSwiper: (swiper) => {
      const items = document.querySelectorAll(".navbar-menu__item--link");
      for (let i = 0; i < items.length; i++) {
        items[i].onclick = () => {
          swiper.slideTo(i);
          setActiveSection(swiper.activeIndex + 1);
        };
      }
    },
    onSlideChange: (index) => {
      const sectionLength = sections.length - 1;
      if (index.activeIndex === sectionLength) {
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
      const items = document.querySelectorAll(".navbar-menu__item--link");
      for (let i = 0; i < items.length; i++) {
        if (index.activeIndex === i) {
          items[i].classList.add("active");
        } else {
          items[i].classList.remove("active");
        }
      }
    },
    mousewheel: true,
    speed: 1000,
  };

  return (
    <>
      <div className="wrapper">
        <Navbar />
        <div className="main-container">
          <Swiper {...swiperOptions} className="mySwiper">
            {sections.map((section, index) => (
              <SwiperSlide key={index} id={section.id}>
                {({ isActive }) => <section.component isActive={isActive} />}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className={showScrollRight ? "scroll" : "scroll hide"}>
          <span>Scroll to see effect</span>
          <ArrowRightIcon />
        </div>

        <Footer current={`0${activeSection}`} pages={`0${sections.length}`} />
      </div>
    </>
  );
};

export default Home;
