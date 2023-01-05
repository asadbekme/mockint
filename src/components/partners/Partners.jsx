import React from "react";
import "./Partners.scss";
import { partnersItems } from "../../utils/data";

const Partners = () => {
  return (
    <section className="partners" id="partners">
      <div className="container">
        <div className="partners__content">
          <h2 className="partners__title">HAMKORLARIMIZ</h2>

          <div className="partners__items">
            {
              partnersItems.map((partnersItem) => {
                const { id, src, title } = partnersItem;

                return (
                  <div key={id} className="partners__item">
                    <img src={src} alt={title} />
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partners;