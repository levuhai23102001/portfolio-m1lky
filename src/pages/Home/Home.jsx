import React, { useEffect, useRef, useState } from "react";
import Navbar from "../../layouts/components/Navbar";
import Footer from "../../layouts/components/Footer";
import { sections } from "../../../src/constants";
import { ArrowRightIcon } from "../../components/Icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Mousewheel, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./home.scss";

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
            // navigation={true}
            noSwiping={true}
            noSwipingClass={{
              el: "no-swiper",
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
            modules={[EffectFade, Mousewheel, Navigation]}
            className="mySwiper"
          >
            {sections.map((section, index) => (
              <SwiperSlide key={index} id={section.id}>
                <div className="wrapper-content">{<section.component />}</div>
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
