import React from "react";
import SectionWrapper from "../../../../layouts/components/Section";
import CardPJ from "./card-project/";

import { projects } from "../../../../constants";

import "./projects.scss";

const Projects = (props) => {
  return (
    <>
      <SectionWrapper
        className={`projects-section ${props.isActive ? "active" : ""}`}
      >
        <div className="projects-container">
          <div className="projects-main-content">
            {projects.map((project, index) => (
              <CardPJ
                key={index}
                img={project.img}
                title={project.title}
                subtitle={project.subtitle}
                tags={project.tags.map((tag, index) => (
                  <span className="card-project-tags" key={index}>
                    {tag}
                  </span>
                ))}
              />
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Projects;
