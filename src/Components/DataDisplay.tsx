import { useState } from "react";
import { states } from "../utilities/abbrState";
import "../css/DataDisplay.css";
import MinimizeButton from "./MinimizeButton";
import { useDarkMode } from "../context/darkModeContext";
import { Data } from "../models";

//  REMOVE ANY !!!
export default function DataDisplay({ data }: { data: Data }) {
  const { darkMode } = useDarkMode();
  const [minimized, setMinimized] = useState(true);

  if (!data) return <h1>loading...</h1>;
  return (
    <div
      onClick={() => setMinimized((prev) => !prev)}
      className={
        minimized
          ? `data-display-minimized${darkMode ? "-dark-mode" : ""}`
          : `data-display${darkMode ? "-dark-mode" : ""}`
      }
    >
      <div className="data-display-container">
        <div
          onClick={() => setMinimized((prev) => !prev)}
          className="data-display-minimize-button"
        >
          <MinimizeButton
            onClick={() => setMinimized((prev) => !prev)}
            minimized={minimized}
          />
        </div>
        <div className={!minimized ? "data-container" : "data-container"}>
          <p className="data-container-text-small">LOCATION</p>
          <div
            className={`data-container-text-medium${
              darkMode ? "-dark-mode" : ""
            }`}
            // pan
          >
            {data.location.city},
            {states?.find((state) => state[0] === data.location.region)?.[1] ||
              data.location.region}{" "}
            {data.location.postalCode}
          </div>
        </div>
        <div className={minimized ? "data-container" : " data-container"}>
          <p className="data-container-text-small">IP ADDRESS</p>
          <p
            className={`data-container-text-medium${
              darkMode ? "-dark-mode" : ""
            }`}
          >
            {data.ip}
          </p>
        </div>
        <div className={minimized ? "data-container" : " data-container"}>
          <p className="data-container-text-small">TIMEZONE</p>
          <p
            className={`data-container-text-medium${
              darkMode ? "-dark-mode" : ""
            }`}
          >
            UTC{data.location.timezone}
          </p>
        </div>
        <div className={minimized ? "data-container" : " data-container"}>
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
    </div>
  );
}
