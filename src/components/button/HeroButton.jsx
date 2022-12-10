import React from 'react';

const HeroButton = ({ text, url }) => {
  return (
    <a href={url} className='hero__button'>
      {text}
    </a>
  );
}

export default HeroButton;