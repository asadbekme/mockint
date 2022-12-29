import React from 'react';

const DirectionsCard = ({ names, title, description, src }) => {
  console.log(src);

  return (
    <div className='directions__card'>
      <div className="directions__card-main">
        <div className="directions__card-header">
          <h2 className='directions__card-title'>{title}</h2>
          <button className='directions__card-button'>
            BATAFSIL
          </button>
        </div>

        <div className="directions__card-footer">
          <div className="directions__card-footer__texts">
            <h5>MUTAXASSIS:</h5>
            <div className="directions__card-specialists">
              {
                names.map((name, index) => {
                  return (
                    <h4 key={index} className='directions__card-specialist'>{name}</h4>
                  );
                })
              }
            </div>
          </div>
          <div className="directions__card-image">
            <img src={src} alt="technology icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DirectionsCard;