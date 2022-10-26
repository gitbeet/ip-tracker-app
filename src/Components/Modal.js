import React from "react";
import Backdrop from "./Backdrop";
import "../css/Modal.css";

export default function Modal({ show, onClose, message }) {
  if (!show) return null;
  return (
    <>
      <div className="modal">
        <p className="modal-message">{message}</p>
        <button className="button-primary" onClick={onClose}>
          Close
        </button>
      </div>

      <Backdrop clickFn={onClose} />
    </>
  );
}
