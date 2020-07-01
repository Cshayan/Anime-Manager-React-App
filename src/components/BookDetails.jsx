import React, { useContext } from "react";
import { bookContext } from "../context/BookContext";
import { DarkModeContext } from "../context/DarkModeContext";
import { notifier } from "../utils/notification";

const BookDetails = ({ book }) => {
  // use conext
  const { dispatch } = useContext(bookContext);
  const { darkMode } = useContext(DarkModeContext);

  const deleteAnime = (title) => {
    dispatch({ type: "REMOVE_BOOK", book: { title } });
    notifier("Removed", "Anime removed from watchlist", "danger");
  };

  const onStatusChange = (status, title, year) => {
    dispatch({ type: "CHANGE_STATUS", book: { title, status, year } });
    notifier("Updated", "Your Anime status has been updated", "warning");
  };

  return (
    <div className={`book-details ${darkMode === true ? "dark-mode" : ""}`}>
      <div>
        <p>
          <i className="fas fa-video"></i> <b>Anime name</b> : {book.title}
        </p>
        <p>
          <i className="fab fa-discourse"></i> <b>Release Year</b> :{" "}
          {book.year === "" ? "Not mentioned" : book.year}
        </p>
        <p>
          <i className="far fa-clock"></i> <b>Status</b>:
          <select
            onChange={(e) =>
              onStatusChange(e.target.value, book.title, book.year)
            }
            className={`select-css ${book.status}`}
          >
            <option value={book.status}>{book.status}</option>
            {book.status !== "Watching" ? (
              <option value="Watching">Watching</option>
            ) : null}
            {book.status !== "Completed" ? (
              <option value="Completed">Completed</option>
            ) : null}
            {book.status !== "Unwatched" ? (
              <option value="Unwatched">Unwatched</option>
            ) : null}
            {book.status !== "Dropped" ? (
              <option value="Dropped">Dropped</option>
            ) : null}
            {book.status !== "On-Hold" ? (
              <option value="On-Hold">On-Hold</option>
            ) : null}
          </select>{" "}
          <span className="tooltip">
            <i className="fas fa-info-circle"></i>
            <span className="tooltiptext">
              Select from the dropdown to change its status
            </span>
          </span>
        </p>
      </div>
      <div>
        <button
          className="delete-anime-btn"
          title="Click to delete from the list"
          onClick={() => deleteAnime(book.title)}
        >
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default BookDetails;
