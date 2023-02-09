import React from "react";
import { accordionItems } from "../../utils/data";
import "./FAQ.scss";
import FAQAccordion from "./FAQAccordion";

const FAQ = () => {
  return (
    <section className="FAQ" id="FAQ">
      <div className="container">
        <div className="FAQ__content">
          <h2 className="FAQ__title">KO'P BERILADIGAN SAVOLLAR</h2>

          <div className="FAQ__accordions">
            {accordionItems.map((accordionItem) => {
              return (
                <FAQAccordion key={accordionItem.id} item={accordionItem} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
