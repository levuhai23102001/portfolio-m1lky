import React from "react";
import { GithubIcon } from "../../../../../components/Icons";

import "./cardPJ.scss";

const CardPJ = ({ img, title, subtitle, tags }) => {
  return (
    <>
      <div className="card-project">
        <div className="card-project-top">
          <img src={img} alt="" className="card-project-img" />
          <div className="card-project-icon">
            <GithubIcon />
          </div>
        </div>
        <div className="card-project-content">
          <h2 className="card-project-title">{title}</h2>
          <p className="card-project-subtitle">{subtitle}</p>
          <div className="card-project-list-tags">{tags}</div>
        </div>
      </div>
    </>
  );
};

export default CardPJ;
