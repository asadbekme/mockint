import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";

const DirectionsCard = ({ names, title, src, description, setIsOpenModal }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="directions__card">
      <div className="directions__card-main">
        <div className="directions__card-header">
          <h2 className="directions__card-title">{title}</h2>
          <button
            className="directions__card-button"
            onClick={() => setIsOpen(true)}
          >
            BATAFSIL
          </button>
        </div>

        <div className="directions__card-footer">
          <div className="directions__card-footer__texts">
            <h5>MUTAXASSIS:</h5>
            <div className="directions__card-specialists">
              {names.map((name, index) => {
                return (
                  <h4 key={index} className="directions__card-specialist">
                    {name}
                  </h4>
                );
              })}
            </div>
          </div>
          <div className="directions__card-image">
            <img src={src} alt="technology icon" />
          </div>
        </div>
      </div>

      <div
        className={
          isOpen
            ? "directions__card-overlay active--overlay"
            : "directions__card-overlay"
        }
      >
        <div className="directions__card-overlay__header">
          <h3 className="directions__card-overlay__title">{title}</h3>
          <div
            onClick={() => setIsOpen(false)}
            className="directions__card-close__icon"
          >
            <MdOutlineClose />
          </div>
        </div>

        <div className="directions__card-overlay__main">
          <p className="directions__card-description">{description}</p>
          <button
            onClick={() => setIsOpenModal(true)}
            className="directions__card-button directions__card-overlay__button"
          >
            TOPSHIRISH
          </button>
        </div>
      </div>
    </div>
  );
};

export default DirectionsCard;
