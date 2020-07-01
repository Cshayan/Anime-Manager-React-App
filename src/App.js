import React, { useEffect, useState } from "react";
import {
  Navbar,
  BookList,
  // AddBook,
  SearchAnime,
  AnimeList,
} from "./components";

import BookContextProvider from "./context/BookContext";
import { AnimeContextProvider } from "./context/AnimeContext";
import { DarkModeContextProvider } from "./context/DarkModeContext";
import ReactNotification from "react-notifications-component";
import Loader from "react-loader-spinner";
import "react-notifications-component/dist/theme.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import "./App.css";

const App = () => {
  // loader state
  const [loaderState, setloaderState] = useState(true);

  // runs only once
  useEffect(() => {
    setloaderState(false);
  }, []);

  return loaderState ? (
    <Loader
      type="Grid"
      color="#00BFFF"
      height={80}
      width={80}
      className="main-loader"
    />
  ) : (
    <DarkModeContextProvider>
      <AnimeContextProvider>
        <BookContextProvider>
          <ReactNotification />
          <div className="container">
            <Navbar />
            <SearchAnime />
            <AnimeList />
            <BookList />
            {/* <AnimeDrop /> */}
            {/* <AddBook /> */}
          </div>{" "}
        </BookContextProvider>{" "}
      </AnimeContextProvider>
    </DarkModeContextProvider>
  );
};

export default App;
