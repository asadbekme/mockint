import React, { useState } from "react";
import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";
import "./Accordion.scss";

const FAQAccordion = ({ item }) => {
  const [selected, setSelected] = useState(false);
  const { header, description } = item;

  const toggle = (i) => {
    if (i === selected) {
      setSelected(false);
    } else {
      setSelected(i);
    }
  };

  return (
    <div className={selected ? "FAQ__accordion show" : "FAQ__accordion"}>
      <div onClick={() => toggle(true)} className="FAQ__accordion-header">
        <h3 className="FAQ__accordion-title">{header}</h3>
        <div className="FAQ__accordion-icon">
          {selected ? <BsCaretUpFill /> : <BsCaretDownFill />}
        </div>
      </div>

      <div className="FAQ__accordion-body">{description}</div>
    </div>
  );
};

export default FAQAccordion;
