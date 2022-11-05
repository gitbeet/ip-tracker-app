import React from "react";
import { FiMinimize2, FiMaximize2 } from "react-icons/fi";

const MinimizeButton = ({
  minimized,
  onClick,
}: {
  minimized: boolean;
  onClick: () => void;
}) => {
  return (
    <>
      {minimized ? (
        <FiMaximize2 size="1.5rem" onClick={onClick} />
      ) : (
        <FiMinimize2 size="1.5rem" onClick={onClick} />
      )}
    </>
  );
};

export default MinimizeButton;
