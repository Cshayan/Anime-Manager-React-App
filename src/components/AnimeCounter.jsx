import React, { useContext } from "react";
import { bookContext } from "../context/BookContext";

const AnimeCounter = () => {
  // use context
  const { books } = useContext(bookContext);

  // calculate the various parameters
  const completed = books.filter((book) => book.status === "Completed").length;
  const watching = books.filter((book) => book.status === "Watching").length;
  const unwatched = books.filter((book) => book.status === "Unwatched").length;
  const onhold = books.filter((book) => book.status === "On-Hold").length;
  const dropped = books.filter((book) => book.status === "Dropped").length;

  return (
    <div className="anime-counter">
      <div className="anime-counter-up">
        <p>
          Watching : <span className="cnt">{watching}</span>
        </p>
        <p>
          Completed : <span className="cnt">{completed}</span>
        </p>
        <p>
          Unwatched : <span className="cnt">{unwatched}</span>
        </p>
      </div>
      <div className="anime-counter-down">
        <p>
          On-Hold : <span className="cnt">{onhold}</span>
        </p>
        <p>
          Dropped : <span className="cnt">{dropped}</span>
        </p>
      </div>
    </div>
  );
};

export default AnimeCounter;
