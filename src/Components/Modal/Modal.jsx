import React from "react";
import style from "./Modal.module.css";
const Modal = ({ children, close }) => {
  return (
    <div className={style.backdrop} onClick={close}>
      {children}
    </div>
  );
};

export default Modal;
