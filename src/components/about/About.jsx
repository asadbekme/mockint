import React from 'react';
import { aboutCards } from '../../utils/data';
import './About.scss';
import AboutCard from './AboutCard';
import AboutBg from '../../images/about-bg.jpg';

const About = () => {
  return (
    <section className='about' id='about'>
      <div className="container">
        <div className="about__content">
          <h2 className="about__title">LOYIHA MAQSADI</h2>
          <div className="about__cards">
            {
              aboutCards.map((item) => {
                return <AboutCard key={item.id} item={item} />
              })
            }
          </div>
        </div>
      </div>
      
      <div className="about__bg">
        <img src={AboutBg} alt="About background image" />
      </div>
    </section>
  );
}

export default About;