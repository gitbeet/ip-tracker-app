import React, { useCallback, useEffect, useRef } from "react";
import "../css/SearchComponent.css";
import iconArrow from "../images/icon-arrow.svg";
import { useDarkMode } from "../context/darkModeContext";

function useEnterKey(func: () => void, element: HTMLElement | null) {
  const handleEnterKey: (event: KeyboardEvent) => void = useCallback(
    (event) => {
      if (event.key === "Enter") {
        func();
      }
    },
    [func]
  );

  useEffect(() => {
    if (element == null) return;
    element.addEventListener("keyup", handleEnterKey, false);

    return () => {
      element.removeEventListener("keyup", handleEnterKey, false);
    };
  }, [handleEnterKey, element]);
}

interface Props {
  handleChange: (e: React.FormEvent) => void;
  handleSubmit: () => void;
}

export default function SearchComponent({ handleChange, handleSubmit }: Props) {
  const { darkMode } = useDarkMode();
  const searchComponentRef = useRef<HTMLDivElement>(null);

  useEnterKey(handleSubmit, searchComponentRef.current);
  return (
    <div
      ref={searchComponentRef}
      className={`search-component${darkMode ? "-dark-mode" : ""}`}
    >
      <input
        className={`search-component-input${darkMode ? "-dark-mode" : ""}`}
        autoFocus
        placeholder="Search"
        onChange={handleChange}
      />
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
