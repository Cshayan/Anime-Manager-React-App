import React, { useState, useContext } from "react";
import { notifier } from "../utils/notification";

import { bookContext } from "../context/BookContext";

const AddBook = () => {
  // use context
  const { dispatch } = useContext(bookContext);

  // Set state
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [status, setStatus] = useState("Unwatched");

  // Handle the form submission and call the reducer method based on its type
  const handleSubmit = (e) => {
    e.preventDefault();
    if (year.length !== 4)
      return notifier("Error", "Invalid year provided", "danger");
    dispatch({
      type: "ADD_BOOK",
      book: {
        title,
        year,
        status,
      },
    });
    setTitle("");
    setYear("");
    setStatus("Unwatched");
    notifier("Added", "Anime added to watchlist", "success");
  };

  return (
    <div className="book-list-container">
      <h3>Add anime to your watchlist</h3>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Type the anime name"
        />
        <input
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          placeholder="Anime release year"
        />
        <select
          onChange={(e) => setStatus(e.target.value)}
          className="select-css select-form"
        >
          <option defaultValue="Select a status">Select a status</option>
          <option value="Watching">Watching</option>
          <option value="Completed">Completed</option>
          <option value="Unwatched">Unwatched</option>
          <option value="Dropped">Dropped</option>
          <option value="On-Hold">On-Hold</option>
        </select>
        <button type="submit" className="add-btn" disabled={title === ""}>
          Add the anime
        </button>
      </form>
    </div>
  );
};

export default AddBook;
