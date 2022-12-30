import React, { useState } from "react";
import "./Modal.scss";
import Overlay from "./Overlay";
import { modalCardContent, modalTexts } from "../../utils/constants";
import { interviewPrices } from "../../utils/data";
import { MdContentCopy } from "react-icons/md";
import { TbBrandTelegram } from "react-icons/tb";
import {IoMdCheckboxOutline} from "react-icons/io"
import { CgClose } from "react-icons/cg";

const Modal = ({ isOpenModal, setIsOpenModal }) => {
  const [copyHandler, setCopyHandler] = useState(false);

  async function copyContent() {
    try {
      setCopyHandler(true);
      await navigator.clipboard.writeText(modalCardContent);
    } catch (err) {
      console.error("Не удалось скопировать: ", err);
    }
  }

  const closeModal = () => {
    setCopyHandler(false);
    setIsOpenModal(false);
  }

  return (
    <>
      <div className={isOpenModal ? "modal modal--open" : "modal"}>
        <div className="modal__content">
          <div className="modal__header">
            <h3 className="modal__title">Bog'lanish</h3>
            <div onClick={closeModal} className="modal__close-icon">
              <CgClose />
            </div>
          </div>

          <div className="modal__body">
            <h5 className="modal__subtitle">
              Adminga bog'lanishda quyidagi ma'lumotlarni berishingiz shart:
            </h5>
            <div className="modal__card">
              <div className="modal__card-texts">
                {
                  modalTexts.texts.map((modalText) => {
                    const { id, content } = modalText;

                    return (
                      <h3 key={id} className="modal__card-text">
                        {id + 1}. {content} 
                      </h3>
                    );
                  })
                }
              </div>
              <div onClick={copyContent} className="modal__copy">
                {copyHandler ? <IoMdCheckboxOutline /> : <MdContentCopy />}
              </div>
            </div>
            <a className="modal__button" href={modalTexts.contactUrl}>
              <TbBrandTelegram />          
              <span>BOG'LANISH</span>
            </a>
          </div>

          <div className="modal__footer">
            <h5 className="modal__footer-text">
              Eslatma: Intervyu barcha yo'nalishlar bo'yicha quyidagi narxlarda:
            </h5>
            <div className="modal__footer-prices">
              {interviewPrices.map(item=>{
                const {id, price, position} = item;

                return(
                  <h4 className="modal__footer-price" key={id}>
                    <span>{position}</span>{" " + price} UZS
                  </h4>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Overlay show={isOpenModal} />
    </>
  );
}

export default Modal;
