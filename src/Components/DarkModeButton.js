import { useDarkMode } from "../context/darkModeContext";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import "../css/DarkModeButton.css";

export default function DarkModeButton() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <div
      onClick={toggleDarkMode}
      className={`dark-mode-button${darkMode ? "-dark-mode" : ""}`}
    >
      <HiOutlineMoon
        className={`dark-mode-button-icon-left${darkMode ? "-dark-mode" : ""}`}
      />
      <HiOutlineSun
        className={`dark-mode-button-icon-right${darkMode ? "-dark-mode" : ""}`}
      />
      <div
        className={
          darkMode
            ? "dark-mode-button-circle-right"
            : "dark-mode-button-circle-left"
        }
      ></div>
    </div>
  );
}
