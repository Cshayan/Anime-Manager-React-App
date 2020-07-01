import React, { useReducer, createContext, useEffect } from "react";
import { bookReducer } from "../reducer/bookReducer";

// Create context
export const bookContext = createContext();

const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    return localStorage.getItem("anime-list")
      ? JSON.parse(localStorage.getItem("anime-list"))
      : [];
  });

  // add the book to localStorage
  useEffect(() => {
    localStorage.setItem("anime-list", JSON.stringify(books));
  }, [books]);

  return (
    <bookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </bookContext.Provider>
  );
};

export default BookContextProvider;
