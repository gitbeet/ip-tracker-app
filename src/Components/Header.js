import React from "react";
import "../css/Header.css";
import DarkModeButton from "./DarkModeButton";

export default function Header() {
  return (
    <div className="header">
      <h2 className="color-white">IP Address Info</h2>
      <div className="header-dark-mode-button">
        <DarkModeButton />
      </div>
    </div>
  );
}
