import React from "react";
import { AboutBg } from "../../assets/images";
import { aboutCards } from "../../utils/data";
import "./About.scss";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__content">
          <h2 className="about__title">LOYIHA MAQSADI</h2>
          <div className="about__cards">
            {aboutCards.map((item) => {
              return <AboutCard key={item.id} item={item} />;
            })}
          </div>
        </div>
      </div>

      <div className="about__bg">
        <img src={AboutBg} alt="Background image" />
      </div>
    </section>
  );
};

export default About;
