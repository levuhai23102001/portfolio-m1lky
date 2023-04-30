import React from "react";

import { BallCanvas } from "../../../../../components/Canvas";
import { technologies } from "../../../../../constants";

import "./tech.scss";

const Tech = () => {
  return (
    <>
      <div className="tech-container">
        {technologies.map((tech, index) => (
          <div className="tech-ball__icon" key={index}>
            <BallCanvas icon={tech.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Tech;
