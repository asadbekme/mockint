import React from 'react';

const InterviewPricesCard = ({ item }) => {
  const { position, price } = item;

  return (
    <div className="interview__prices-card">
      <h3>{position} - {price} SO'M</h3>
    </div>
  );
}

export default InterviewPricesCard;