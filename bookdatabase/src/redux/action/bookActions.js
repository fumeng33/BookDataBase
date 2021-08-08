import * as ActionTypes from "./actionTypes";
import * as bookApi from "../../api/bookApi";

const mockBooks = [
  {
    "id": 1,
    "Title":"Frankenstein",
    "Author": "Jamie Lee",
    "Category": "Romance"
  },
  {
    "id": 2,
    "Title":"Pride and Prejudice",
    "Author": "Jane Austle",
    "Category": "fiction"
  },
  {
    "id": 3,
    "Title":"The Silent Patient",
    "Author": "Alex Michaelides",
    "Category": "Non-fiction"
  },
  {
    "id": 4,
    "Title":"The Lord of The Rings",
    "Author": "JRR Tolkier",
    "Category": "Horror"
  },
  {
    "id": 5,
    "Title":"On the Green side",
    "Author": "Suny Wynn",
    "Category": "Crime"
  }
]

const loadBooksBegin = () => {
  return {
    type: ActionTypes.LOAD_BOOKS_BEGIN
  }
}

const loadBooksSuccess = (data) => {
  return {
    type: ActionTypes.LOAD_BOOKS_SUCCESS,
    value: data
  }
}

const loadBooksFailure = (error) => {
  return {
    type: ActionTypes.LOAD_BOOKS_FAILURE,
    value: error
  }
}

export const loadBooks = () => {
  return dispatch => {
    dispatch(loadBooksBegin())
    // setTimeout(() => {
    //   dispatch(loadBooksSuccess(mockBooks))
    // }, 2000)
    return fetch('http://localhost:3001/books')
    .then(res => {
      console.log("RESPONSE:", res)
      dispatch(loadBooksSuccess(mockBooks))
    })
    .catch(error => {
      console.log("ERROR:", error)
      dispatch(loadBooksFailure("ERROR"))
    })
  }
}

// export function loadBooks() {
//   return function (dispatch) {
//     return bookApi
//       .getBooks()
//       .then((booksFromApi) => dispatch(loadBooksSuccess(booksFromApi)))
//       .catch((error) => console.log(error));
//   };
// }

// export function loadBooksSuccess(books) {
//   return {
//     type: ActionTypes.LOAD_BOOKS_SUCCESS,
//     books,
//   };
// }

export function createBook(book) {
  return function (dispatch) {
    return bookApi
      .createBook(book)
      .then((newBook) => dispatch(createBookSuccess(newBook)))
      .catch((error) => console.log(error));
  };
}

export function createBookSuccess(book) {
  return {
    type: ActionTypes.CREATE_BOOKS,
    book,
  };
}