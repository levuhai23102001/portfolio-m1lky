import React from "react";
import Card from "../../../../components/Card";
import SectionWrapper from "../../../../layouts/components/Section/";
import { overviewList } from "../../../../constants";
import "./about.scss";

const About = (props) => {
  return (
    <>
      <SectionWrapper
        className={`about-section ${props.isActive ? "active" : ""}`}
      >
        <div className="about-container">
          <div className="about-content-left">
            <div className="about-header">
              <p className="about-subtitle">Introduction</p>
              <h2 className="about-title">Overview</h2>
            </div>
            <p>
              I'm a skilled software developer with experience in TypeScript and
              JavaScript, and expertise in frameworks like React, Node.js, and
              Three.js. I'm a quick learner and collaborate closely with clients
              to create efficient, scalable, and user-friendly solutions that
              solve real-world problems. Let's work together to bring your ideas
              to life!
            </p>
          </div>
          <div className="about-content-right">
            <div className="about-content-right-wrapper">
              {overviewList.map((item, index) => (
                <Card key={index} icon={item.icon} title={item.title} />
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default About;
