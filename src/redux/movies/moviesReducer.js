import { SET_MOVIES, SET_MOVIES_COUNT, SET_PAGE_NUMBER } from "./moviesConstants"


const initialState = {
  movies: [],
  movie_count: 0,
  page_number: 1,
  movies_comments: []
}

const moviesReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case SET_MOVIES:
      return { ...state, movies: [...payload] }
    case SET_MOVIES_COUNT:
      debugger
      return { ...state, movie_count: payload }
    case SET_PAGE_NUMBER:
      debugger
      return { ...state, page_number: payload }
    default:
      return state
  }
}

export default moviesReducer

