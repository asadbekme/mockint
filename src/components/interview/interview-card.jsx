import React from "react";

const InterviewCard = ({ item }) => {
  const { id, title, description } = item;

  return (
    <div className="interview__card">
      <h4 className="interview__card-title">
        {id + 1}. {title}
      </h4>
      <p className="interview__card-description">{description}</p>
    </div>
  );
};

export default InterviewCard;
