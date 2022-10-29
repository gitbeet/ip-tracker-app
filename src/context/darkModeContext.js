import { createContext, useContext, useState } from "react";

const darkModeContext = createContext();

export function useDarkMode() {
  const context = useContext(darkModeContext);
  if (!context) throw new Error("Dark mode context was not found");
  return context;
}

export default function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode((prev) => !prev);
  }

  return (
    <darkModeContext.Provider value={{ toggleDarkMode, darkMode }}>
      {children}
    </darkModeContext.Provider>
  );
}
