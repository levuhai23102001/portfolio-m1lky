import React from "react";
import SectionWrapper from "../../../../layouts/components/Section";

import "./projects.scss";

const Projects = (props) => {
  return (
    <>
      <SectionWrapper
        className={`projects-section ${props.isActive ? "active" : ""}`}
      >
        <div className="projects-container">
          <div className="projects-content-left">Content Left</div>
          <div className="projects-content-right">Content Right</div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Projects;
