import React from "react";

const HeroInfoItem = ({ title, subtitle }) => {
  return (
    <div className="hero__info-item">
      <h5>{title}</h5>
      <p>{subtitle}</p>
    </div>
  );
}

export default HeroInfoItem;