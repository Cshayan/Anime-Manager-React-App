import React, { useContext } from "react";
import { bookContext } from "../context/BookContext";
import { DarkModeContext } from "../context/DarkModeContext";
import { notifier } from "../utils/notification";

import "./AnimeList.css";

const Anime = (props) => {
  // destructure the props
  const {
    anime: { url, image_url, episodes, score, start_date, title, airing, type },
  } = props;

  // use context
  const { dispatch } = useContext(bookContext);
  const { darkMode } = useContext(DarkModeContext);

  const addToWatchList = (title, start_date) => {
    dispatch({
      type: "ADD_BOOK",
      book: {
        title,
        year: new Date(start_date).getFullYear(),
        status: "Unwatched",
      },
    });
    notifier("Added", "Anime added to watchlist", "success");
  };

  return (
    <div className={`card ${darkMode === true ? "dark-mode" : ""}`}>
      <img src={image_url} alt="Avatar" />
      <div className="card-body">
        <h3>
          <b>Title:</b> {title}
        </h3>
        <p>
          <b>Episodes:</b> {episodes}
        </p>
        <p>
          <b>Ongoing?</b> {airing === true ? "Yes" : "No"}
        </p>
        <p>
          <b>Score:</b> {score}
        </p>
        <p>
          <b>Type:</b> {type}
        </p>
        <p>
          <b>Release Date:</b> {new Date(start_date).toDateString()}
        </p>
        <div className="mal-btn-cont">
          <a
            href={url}
            className="mal-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View in MAL
          </a>
          <br />
          <button
            className="mal-btn"
            onClick={() => addToWatchList(title, start_date)}
          >
            Add to Watchlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Anime;
