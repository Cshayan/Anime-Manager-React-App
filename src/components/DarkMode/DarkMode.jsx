import React, { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import "./darkmode.css";

const DarkMode = () => {
  // use context
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div>
      <button
        title="Dark Mode Toogle"
        className="dark-mode-toggle"
        onClick={() => toggleDarkMode(darkMode)}
      >
        <svg
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 496 496"
        >
          <path
            fill="#fff"
            d="M8,256C8,393,119,504,256,504S504,393,504,256,393,8,256,8,8,119,8,256ZM256,440V72a184,184,0,0,1,0,368Z"
            transform="translate(-8 -8)"
          />
        </svg>
      </button>
    </div>
  );
};

export default DarkMode;
