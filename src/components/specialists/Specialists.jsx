import React from 'react';
import { specialistsCards } from '../../utils/data';
import SpecialistsCard from './SpecialistsCard';
import './Specialists.scss';
import Interview from '../interview/Interview';

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
        <Interview />
      </div>
    </section>
  );
}

export default Specialists;