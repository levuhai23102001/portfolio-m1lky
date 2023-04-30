import React from "react";
import { meta } from "../../../../../assets";
import "./expCard.scss";

const ExpCard = ({ icon, title, company, date, points }) => {
  return (
    <>
      <div className="exp-card">
        <div className="exp-card__logo">
          <img src={icon} alt="" />
        </div>
        <div className="exp-card__content">
          <div className="exp-card__header">
            <h3 className="exp-card__title">{title}</h3>
            <span className="exp-card__subtitle">{company}</span> |{" "}
            <span className="exp-card__date">{date}</span>
          </div>
          <ul className="exp-card__list">{points}</ul>
        </div>
      </div>
    </>
  );
};

export default ExpCard;
