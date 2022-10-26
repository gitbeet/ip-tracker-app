import React from "react";
import { states } from "../utilities/abbrState";
import "../css/DataDisplay.css";

export default function DataDisplay({ data }) {
  if (!data) return <h1>loading...</h1>;
  return (
    <div className="data-display">
      <div className="data-container">
        <p className="data-container-text-small">IP ADDRESS</p>
        <p className="data-container-text-medium">{data.ip}</p>
      </div>
      <div className="data-container">
        <p className="data-container-text-small">LOCATION</p>
        <s className="data-container-text-medium" pan>
          {data.location.city},
          {(states.find((state) => state[0] === data.location.region) &&
            states.find((state) => state[0] === data.location.region)[1]) ||
            data.location.region}{" "}
          {data.location.postalCode}
        </s>
      </div>
      <div className="data-container">
        <p className="data-container-text-small">TIMEZONE</p>
        <p className="data-container-text-medium">
          UTC{data.location.timezone}
        </p>
      </div>
      <div className="data-container">
        <p className="data-container-text-small">ISP</p>
        <p className="data-container-text-medium">{data.isp || ""}</p>
      </div>
    </div>
  );
}
