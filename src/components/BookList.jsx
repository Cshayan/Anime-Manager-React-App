import React, { useContext } from "react";
import { bookContext } from "../context/BookContext";

import BookDetails from "./BookDetails";
import { DarkModeContext } from "../context/DarkModeContext";
import AnimeCounter from "./AnimeCounter";

const BookList = () => {
  const { books } = useContext(bookContext);
  const { darkMode } = useContext(DarkModeContext);

  return books.length === 0 ? (
    <div
      className={`book-list-container ${darkMode === true ? "dark-mode" : ""}`}
    >
      No Anime in your watch list now. Type below to add or search any anime
      above.
    </div>
  ) : (
    <div
      className={`book-list-container ${darkMode === true ? "dark-mode" : ""}`}
    >
      <div>
        <h3>
          <i className="fas fa-eye"></i> Your Watchlist
        </h3>
        <hr />
        <AnimeCounter />
      </div>
      <div>
        {books.map((book, index) => (
          <BookDetails key={index} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
