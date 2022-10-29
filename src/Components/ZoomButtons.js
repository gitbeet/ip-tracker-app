import "../css/ZoomButtons.css";
import { useDarkMode } from "../context/darkModeContext";

export default function ZoomButtons({ zoomIn, zoomOut }) {
  const { darkMode } = useDarkMode();
  return (
    <div className={`zoom-buttons`}>
      <div
        onClick={zoomIn}
        className={
          darkMode
            ? "zoom-button-dark-mode zoom-button-border-dark-mode"
            : "zoom-button zoom-button-border"
        }
      >
        +
      </div>
      <div
        onClick={zoomOut}
        className={darkMode ? "zoom-button-dark-mode" : "zoom-button"}
      >
        -
      </div>
    </div>
  );
}
