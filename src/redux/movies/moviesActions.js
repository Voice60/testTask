import { listMoviesAPI } from "../../api/api"
import { SET_MOVIES, SET_MOVIES_COUNT, SET_PAGE_NUMBER } from "./moviesConstants"

export const setMovies = (payload) => ({
  type: SET_MOVIES,
  payload
})
export const setMovieCount = (payload) => ({
  type: SET_MOVIES_COUNT,
  payload
})
export const setPageNumber = (payload) => ({
  type: SET_PAGE_NUMBER,
  payload
})

export const getMovies = (page_number) => async (dispatch) => {
  let response = await listMoviesAPI.getMovies(page_number)
  if (response.status === 'ok') {
    debugger
    dispatch(setMovieCount(response.data.movie_count))
    dispatch(setMovies(response.data.movies))
  }
}