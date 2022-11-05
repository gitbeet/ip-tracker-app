import React, { useEffect, useRef } from "react";
import Backdrop from "./Backdrop";
import "../css/Modal.css";
import { useDarkMode } from "../context/darkModeContext";

interface Props {
  show: boolean;
  onClose: () => void;
  message: string;
}

const Modal = ({ show, onClose, message }: Props): JSX.Element | null => {
  const { darkMode } = useDarkMode();
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!show || !modalRef.current) return;
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
};

export default Modal;
