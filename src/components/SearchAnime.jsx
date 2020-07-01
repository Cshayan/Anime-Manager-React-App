import React, { useState, useContext } from "react";
import { AnimeContext } from "../context/AnimeContext";
import { DarkModeContext } from "../context/DarkModeContext";

const SearchAnime = () => {
  // set state
  const [animeName, setAnimeName] = useState("");

  // use context
  const { clearAnimeList, fetchAnimes, startLoading } = useContext(
    AnimeContext
  );
  const { darkMode } = useContext(DarkModeContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    startLoading();
    fetchAnimes(animeName);
    setAnimeName("");
  };

  return (
    <div
      className={`book-list-container ${darkMode === true ? "dark-mode" : ""}`}
    >
      <div className="anime-search-title">
        <h3>Search any anime</h3>
        <button
          className="delete-anime-btn"
          title="Clear the search list"
          onClick={() => clearAnimeList()}
        >
          <i className="fas fa-trash"></i>
        </button>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search the anime"
          value={animeName}
          onChange={(e) => setAnimeName(e.target.value)}
        />
        <button type="submit" className="add-btn" disabled={animeName === ""}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchAnime;
