import React, { useEffect, useRef } from "react";
import Backdrop from "./Backdrop";
import "../css/Modal.css";
import { useDarkMode } from "../context/darkModeContext";

export default function Modal({ show, onClose, message }) {
  const { darkMode } = useDarkMode();
  const modalRef = useRef();
  useEffect(() => {
    if (!show) return;
    modalRef.current.focus();
  }, [show]);

  if (!show) return null;
  return (
    <>
      <div
        ref={modalRef}
        onKeyUp={(e) => {
          if (e.key === "Enter" || e.key === "Escape") {
            onClose();
          }
        }}
        tabIndex={0}
        className={darkMode ? "modal-dark-mode" : "modal"}
      >
        <p className="modal-message">{message}</p>
        <button className="button-primary" onClick={onClose}>
          Close
        </button>
      </div>
      <Backdrop clickFn={onClose} />
    </>
  );
}
