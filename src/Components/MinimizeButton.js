import React from "react";
import { FiMinimize2, FiMaximize2 } from "react-icons/fi";

export default function MinimizeButton({ minimized, onClick }) {
  return (
    <>
      {minimized ? (
        <FiMaximize2 size="1.5rem" onClick={onClick} />
      ) : (
        <FiMinimize2 size="1.5rem" onClick={onClick} />
      )}
    </>
  );
}
