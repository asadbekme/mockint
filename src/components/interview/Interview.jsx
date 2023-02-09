import React, { useState } from "react";
import { interviewCards, interviewPrices } from "../../utils/data";
import { Modal } from "../index";
import "./Interview.scss";
import InterviewCard from "./InterviewCard";
import InterviewPricesCard from "./InterviewPricesCard";

const Interview = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div className="interview" id="interview">
      <div className="container">
        <div className="interview__content">
          <h2 className="interview__title">INTERVYU TARTIBI</h2>

          <div className="interview__cards" id="interview__cards">
            {interviewCards.map((interviewCard) => {
              return (
                <InterviewCard key={interviewCard.id} item={interviewCard} />
              );
            })}
          </div>

          <div className="interview__prices" id="interview__prices">
            <div className="interview__prices-header">
              <h2 className="interview__prices-title">NARXLAR</h2>
              <h4 className="interview__prices-subtitle">
                NARXLAR BARCHA YO'NALISHLAR UCHUN BIR XIL MIQDORDA
              </h4>
            </div>
            <div className="interview__prices-cards">
              {interviewPrices.map((item) => {
                return <InterviewPricesCard key={item.id} item={item} />;
              })}
            </div>
            <button
              className="interview__prices-button"
              onClick={() => setIsOpenModal(true)}
            >
              TOPSHIRISH
            </button>
          </div>
        </div>
      </div>

      <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
    </div>
  );
};

export default Interview;
