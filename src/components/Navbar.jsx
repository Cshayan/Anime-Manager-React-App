import React, { useContext } from "react";
import seal from "../images/seal1.png";

import { bookContext } from "../context/BookContext";
import { DarkModeContext } from "../context/DarkModeContext";
import DarkMode from "./DarkMode/DarkMode";

const Navbar = () => {
  // use context
  const { books } = useContext(bookContext);
  const { darkMode } = useContext(DarkModeContext);
  return (
    <nav
      className={`book-list-container ${darkMode === true ? "dark-mode" : ""}`}
    >
      <h1 className="heading">
        <img src={seal} alt="logo" className="logo" /> AnimeManager
      </h1>

      <p className="book-count">
        You have <span className="cnt">{books.length}</span> animes in your
        current watchlist.
      </p>
      <DarkMode />
    </nav>
  );
};

export default Navbar;
