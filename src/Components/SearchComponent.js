import React, { useEffect } from "react";
import "../css/SearchComponent.css";
import iconArrow from "../images/icon-arrow.svg";

export default function SearchComponent({ handleChange, handleSubmit }) {
  useEffect(() => {
    const listener = (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        console.log("Enter key was pressed. Run your function.");
        event.preventDefault();
        handleSubmit();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <div className="search-component">
      <input placeholder="Search IP ..." onChange={handleChange} />
      <button className="search-button" onClick={handleSubmit}>
        <img
          className="search-button-arrow"
          src={iconArrow}
          alt="search button"
        />
      </button>
    </div>
  );
}
