import React from "react";
import { FiMinimize2, FiMaximize2 } from "react-icons/fi";

export default function MinimizeButton({ minimized, onClick }) {
  return (
    <div onClick={onClick}>
      {minimized ? (
        <FiMaximize2 size="1.5rem" />
      ) : (
        <FiMinimize2 size="1.5rem" />
      )}
    </div>
  );
}
