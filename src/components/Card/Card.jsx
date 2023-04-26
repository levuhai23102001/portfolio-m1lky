import React from "react";
import "./card.scss";

const Card = ({ icon, title }) => {
  return (
    <>
      <div className="card">
        <div className="card-top">
          <img className="card-img" src={icon} alt="" />
        </div>
        <div className="card-content">
          <p className="card-title">{title}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
