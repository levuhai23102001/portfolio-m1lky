import React from "react";
import SectionWrapper from "../../../../layouts/components/Section";

import "./skills.scss";

const Skills = (props) => {
  return (
    <>
      <SectionWrapper
        className={`skills-section ${props.isActive ? "active" : ""}`}
      >
        <div className="skills-container">
          <div className="skills-content-left">Content Left</div>
          <div className="skills-content-right">Content Right</div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Skills;
