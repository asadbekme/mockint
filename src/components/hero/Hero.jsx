import React from "react";
import { heroInfoItems as items } from "../../utils/constants";
import HeroInfoItem from "./HeroInfoItem";
import "./Hero.scss";
import { BsChevronDown } from "react-icons/bs";
import HeroButton from "../button/HeroButton";
import { heroBg } from "../../assets/images";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero__content">
          <div className="hero__info">
            <div className="hero__info-items">
              {items.map((item, index) => {
                const { title, subtitle } = item;
                return (
                  <HeroInfoItem key={index} title={title} subtitle={subtitle} />
                );
              })}
            </div>

            <div className="hero__info-main">
              <h1 className="hero__title">MOCKINT - MOCK INTERVIEW</h1>
              <p className="hero__description">
                SINOV INTERVYULAR TOPSHIRISH, BILIM VA TAJRIBANGIZNI SINASH,
                SHUNINGDEK TAJRIBALI DASTURCHILARDAN "FEEDBACK"LAR OLISH UCHUN
                MO'LJALLANGAN LOYIHA.
              </p>
              <HeroButton url={"#directions"} text={"INTERVYU TOPSHIRISH"} />
            </div>
          </div>
        </div>
      </div>
      <div className="hero__bg">
        <img src={heroBg} alt="Hero background" />
      </div>
      <a href="#directions" className="hero__icon">
        <BsChevronDown />
      </a>
    </section>
  );
};

export default Hero;
