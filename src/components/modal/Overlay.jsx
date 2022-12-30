import React from 'react';

const Overlay = ({ show }) => {
  return (
    <div className={show ? 'modal__overlay show' : 'modal__overlay'}></div>
  );
}

export default Overlay;