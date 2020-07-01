import React, { useReducer, createContext } from "react";
import { darkModeReducer } from "../reducer/darkModeReducer";

// initial state
const initialState = {
  darkMode: false,
};

export const DarkModeContext = createContext(initialState);

export const DarkModeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(darkModeReducer, initialState, () => {
    return localStorage.getItem("dark-mode")
      ? { darkMode: JSON.parse(localStorage.getItem("dark-mode")) }
      : { darkMode: false };
  });

  // ACTION
  const toggleDarkMode = (darkMode) => {
    dispatch({
      type: "TOOGLE_DARK_MODE",
      payload: darkMode,
    });
  };
  return (
    <DarkModeContext.Provider
      value={{
        darkMode: state.darkMode,
        toggleDarkMode,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};
