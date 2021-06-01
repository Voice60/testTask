import { setMovieCount, setMovies, setPageNumber } from "./moviesActions"
import moviesReducer from "./moviesReducer"

const state = {
  movies: [],
  movie_count: 0,
  page_number: 1,
  movies_comments: []
}

it('new movie should be added', () => {
  const action = setMovies([{id: 1}])
  
  const newState = moviesReducer(state, action)

  expect(newState.movies.length).toBe(1)
})

it('movie_count should be equal 10', () => {
  const action = setMovieCount(10)

  const newState = moviesReducer(state, action)
  expect(newState.movie_count).toEqual(10)
})

it('page_number should be equal 5', () => {
  const action = setPageNumber(5)

  const newState = moviesReducer(state, action)
  expect(newState.page_number).toEqual(5)
})