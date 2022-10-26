import React, { useEffect } from "react";
import Backdrop from "./Backdrop";
import "../css/Modal.css";

export default function Modal({ show, onClose, message }) {
  useEffect(() => {
    const listener = (event) => {
      if (
        event.code === "Enter" ||
        event.code === "NumpadEnter" ||
        event.code === "Escape"
      ) {
        console.log("Enter key was pressed. Run your function.");
        event.preventDefault();
        onClose();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);

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
