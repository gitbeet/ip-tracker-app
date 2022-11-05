import "../css/ZoomButtons.css";
import { useDarkMode } from "../context/darkModeContext";

const ZoomButtons = ({
  setZoom,
}: {
  setZoom: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const { darkMode } = useDarkMode();
  return (
    <div className={`zoom-buttons`}>
      <div
        onClick={() => setZoom((prev) => prev + 1)}
        className={
          darkMode
            ? "zoom-button-dark-mode zoom-button-border-dark-mode"
            : "zoom-button zoom-button-border"
        }
      >
        +
      </div>
      <div
        onClick={() => setZoom((prev) => prev - 1)}
        className={darkMode ? "zoom-button-dark-mode" : "zoom-button"}
      >
        -
      </div>
    </div>
  );
};

export default ZoomButtons;
