import React from 'react';

const AboutCard = ({ item }) => {
  const { src, text } = item;
  // console.log(src);

  return (
    <div className="about__card">
      <div className="about__card-image">
        <img src={src} alt="about card image" />
      </div>
      <h5 className='about__card-text'>{text}</h5>
    </div>
  );
}

export default AboutCard;