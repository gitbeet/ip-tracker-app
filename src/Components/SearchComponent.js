import React from "react";
import "../css/SearchComponent.css";
import iconArrow from "../images/icon-arrow.svg";

export default function SearchComponent({ handleChange, handleSubmit }) {
  return (
    <div className="search-component">
      <input placeholder="Search IP ..." onChange={handleChange} />
      <button onClick={handleSubmit}>
        <img src={iconArrow} alt="search button" />
      </button>
    </div>
  );
}
