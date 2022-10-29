import React from "react";
import { useDarkMode } from "../context/darkModeContext";
import "../css/Background.css";
import bg from "../images/pattern-bg.png";

export default function Background() {
  const { darkMode } = useDarkMode();
  return (
    <div className={darkMode ? "background-dark-mode" : "background"}>
      {/* <img className="background-image" src={bg} alt="background" /> */}
    </div>
  );
}
