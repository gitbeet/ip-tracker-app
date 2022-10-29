import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App";
import DarkModeProvider from "./context/darkModeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DarkModeProvider>
    <App />
  </DarkModeProvider>
);
