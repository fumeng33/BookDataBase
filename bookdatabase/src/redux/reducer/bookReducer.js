import * as ActionTypes from "../action/actionTypes";
import storeState from '../state';


const books = (state = storeState.books, action) => {
  switch(action.type){
    case ActionTypes.LOAD_BOOKS_BEGIN:
      return {
        ...state,
        loading: !state.loading,
        error: null,
        books: []
      }

    case ActionTypes.LOAD_BOOKS_SUCCESS:
      return {
        ...state,
        loading: !state.loading,
        books: action.value
      }
    case ActionTypes.LOAD_BOOKS_FAILURE:
      return {
        ...state,
        loading: !state.loading,
        error: action.value,
        books: []
      }
    default:
      return {...state}
  }
}

export default books;