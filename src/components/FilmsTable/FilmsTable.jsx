import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovies } from '../../redux/movies/moviesActions'
import FilmElement from './FilmElement/FilmElement'

const FilmsTable = () => {
  const page_number = useSelector(state => state.movies.page_number)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getMovies(page_number))
  }, [page_number])
  const movies = useSelector(state => state.movies.movies)

  return (
    <div>
      <ul>
        {movies.map((m) => {
          return <FilmElement key={m.id} m={m} />
        })}
      </ul>
    </div>
  )
}
export default FilmsTable