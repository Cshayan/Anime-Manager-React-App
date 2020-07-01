import React, { useContext } from "react";
import Anime from "./Anime";
import Loader from "react-loader-spinner";
import { AnimeContext } from "../context/AnimeContext";

import "./AnimeList.css";

const AnimeList = () => {
  // use context
  const { animeList, loading } = useContext(AnimeContext);

  return !loading ? (
    <div className="grid">
      {animeList.map((anime) => (
        <Anime key={anime.mal_id} anime={anime} />
      ))}
    </div>
  ) : (
    <Loader type="Puff" color="#00BFFF" height={100} width={100} />
  );
};

export default AnimeList;
