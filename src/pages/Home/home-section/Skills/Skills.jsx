import React from "react";
import SectionWrapper from "../../../../layouts/components/Section";
import ExpCard from "./card-vertical/";

import { experiences } from "../../../../constants";

import "./skills.scss";

const Skills = (props) => {
  return (
    <>
      <SectionWrapper
        className={`skills-section ${props.isActive ? "active" : ""}`}
      >
        <div className="skills-container">
          <div className="skills-content-left">
            <div className="skills-content-left-wrapper">
              {experiences.map((item, index) => (
                <ExpCard
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  company={item.company_name}
                  date={item.date}
                  points={item.points.map((point, index) => (
                    <li className="exp-card__list__item" key={index}>
                      {point}
                    </li>
                  ))}
                />
              ))}
            </div>
          </div>
          <div className="skills-content-right">Content Right</div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Skills;
