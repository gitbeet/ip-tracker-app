import React from "react";
import "../css/Background.css";
import bg from "../images/pattern-bg.png";

export default function Background() {
  return (
    <>
      <img className="background-image" src={bg} alt="background" />
    </>
  );
}
