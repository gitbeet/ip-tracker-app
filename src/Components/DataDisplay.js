import React, { useState } from "react";
import { states } from "../utilities/abbrState";
import "../css/DataDisplay.css";
import MinimizeButton from "./MinimizeButton";
import { useDarkMode } from "../context/darkModeContext";

export default function DataDisplay({ data }) {
  const { darkMode } = useDarkMode();
  const [minimized, setMinimized] = useState(true);
  function toggleMinimize() {
    setMinimized((prev) => !prev);
  }
  if (!data) return <h1>loading...</h1>;
  return (
    <div
      className={
        minimized
          ? `data-display-minimized${darkMode ? "-dark-mode" : ""}`
          : `data-display${darkMode ? "-dark-mode" : ""}`
      }
    >
      <div
        className={
          minimized
            ? "data-display-minimize-button-minimized"
            : "data-display-minimize-button"
        }
      >
        <MinimizeButton minimized={minimized} onClick={toggleMinimize} />
      </div>
      <div className={minimized ? "hidden" : " data-container"}>
        <p className="data-container-text-small">IP ADDRESS</p>
        <p
          className={`data-container-text-medium${
            darkMode ? "-dark-mode" : ""
          }`}
        >
          {data.ip}
        </p>
      </div>
      <div
        className={minimized ? "data-container-minimized" : "data-container"}
      >
        <p className="data-container-text-small">LOCATION</p>
        <div
          className={`data-container-text-medium${
            darkMode ? "-dark-mode" : ""
          }`}
          pan
        >
          {data.location.city},
          {(states.find((state) => state[0] === data.location.region) &&
            states.find((state) => state[0] === data.location.region)[1]) ||
            data.location.region}{" "}
          {data.location.postalCode}
        </div>
      </div>
      <div className={minimized ? "hidden" : " data-container"}>
        <p className="data-container-text-small">TIMEZONE</p>
        <p
          className={`data-container-text-medium${
            darkMode ? "-dark-mode" : ""
          }`}
        >
          UTC{data.location.timezone}
        </p>
      </div>
      <div className={minimized ? "hidden" : " data-container"}>
        <p className="data-container-text-small">ISP</p>
        <p
          className={`data-container-text-medium${
            darkMode ? "-dark-mode" : ""
          }`}
        >
          {data.isp || ""}
        </p>
      </div>
    </div>
  );
}
