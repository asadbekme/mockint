import React from 'react';
import { directionsCards as cards } from '../../utils/data';
import './Directions.scss';
import DirectionsCard from './DirectionsCard';

const Directions = () => {
  return (
    <section className='directions' id='directions'>
      <div className="container">
        <div className="directions__content">
          <div className="directions__header">
            <h2>YO‘NALISHLAR</h2>
            <h5>O’ZINGIZGA MOS YO’NALISHNI TANLAB, BILIMINGIZNI SINAB KO’RING</h5>
          </div>

          <div className="directions__cards">
            {
              cards.map((card) => {
                const { id, names, title, description, src } = card;

                return (
                  <DirectionsCard
                    key={id}
                    names={names}
                    title={title}
                    description={description}
                    src={src}
                  />
                );
              })
            }
          </div>
        </div>
      </div>
    </section>
  );
}

export default Directions;