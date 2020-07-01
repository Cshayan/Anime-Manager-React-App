export const bookReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return [{
          title: action.book.title,
          year: action.book.year,
          status: action.book.status,
        },
        ...state
      ];
    case "REMOVE_BOOK":
      return state.filter((book) => book.title !== action.book.title);
    case "CHANGE_STATUS":
      return state.map((book) => book.title === action.book.title ? action.book : book);
    default:
      return state;
  }
};