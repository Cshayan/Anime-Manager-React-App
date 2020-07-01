import React, { useReducer, createContext } from "react";
import axios from "axios";
import { animeReducer } from "../reducer/animeReducer";

// initialState
const initialState = {
  animeList: [],
  loading: false,
  animeListDrop: [],
};

export const AnimeContext = createContext(initialState);

export const AnimeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(animeReducer, initialState);

  // ACTIONS
  const fetchAnimes = async (animeName) => {
    const url = `https://api.jikan.moe/v3/search/anime?q=${animeName}&limit=6`;
    try {
      const res = await axios.get(url);
      dispatch({
        type: "FETCH_ANIME",
        payload: res.data.results,
      });
    } catch (error) {
      return error;
    }
  };

  const startLoading = () => {
    dispatch({
      type: "START_LOADING",
    });
  };

  const clearAnimeList = () => {
    dispatch({
      type: "CLEAR_LIST",
    });
  };

  const animeListDropPush = (anime) => {
    dispatch({
      type: "ANIME_PUSH",
      payload: anime,
    });
  };

  return (
    <AnimeContext.Provider
      value={{
        animeList: state.animeList,
        loading: state.loading,
        animeListDrop: state.animeListDrop,
        fetchAnimes,
        startLoading,
        clearAnimeList,
        animeListDropPush,
      }}
    >
      {children}
    </AnimeContext.Provider>
  );
};
