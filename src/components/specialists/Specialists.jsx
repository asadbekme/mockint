import React from 'react';
import { specialistsCards } from '../../utils/data';
import SpecialistsCard from './SpecialistsCard';
import './Specialists.scss';

const Specialists = () => {
  return (
    <section className='specialists' id='specialists'>
      <div className="container">
        <div className="specialists__content">
          <h2 className="specialists__title">MUTAXASSISLAR</h2>

          <div className="specialists__cards">
            {
              specialistsCards.map((item) => {
                return (
                  <SpecialistsCard key={item.id} item={item} />
                );
              })
            }
          </div>
        </div>
      </div>
    </section>
  );
}

export default Specialists;