import React, { useState } from "react";
import { directionsCards as cards } from "../../utils/data";
import "./Directions.scss";
import DirectionsCard from "./DirectionsCard";
import { Modal } from '../index';

const Directions = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <section className="directions" id="directions">
      <div className="container">
        <div className="directions__content">
          <div className="directions__header">
            <h2>YO'NALISHLAR</h2>
            <h5>
              O'ZINGIZGA MOS YO'NALISHNI TANLAB, BILIMINGIZNI SINAB KO'RING
            </h5>
          </div>

          <div className="directions__cards">
            {cards.map((card) => {
              const { id, names, title, src, description } = card;

              return (
                <DirectionsCard
                  key={id}
                  names={names}
                  title={title}
                  src={src}
                  description={description}
                  setIsOpenModal={setIsOpenModal}
                />
              );
            })}
          </div>
        </div>
      </div>
      {isOpenModal ? (
        <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
      ) : null}
    </section>
  );
};

export default Directions;
