import React from "react";
import { useDarkMode } from "../context/darkModeContext";
import "../css/Background.css";

const Background = (): JSX.Element => {
  const { darkMode } = useDarkMode();
  return (
    <div className={darkMode ? "background-dark-mode" : "background"}>
      {/* <img className="background-image" src={bg} alt="background" /> */}
    </div>
  );
};

export default Background;
