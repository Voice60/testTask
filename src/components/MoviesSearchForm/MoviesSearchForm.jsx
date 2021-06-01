import React from 'react'
import Pagination from 'react-js-pagination'
import { useDispatch, useSelector } from 'react-redux'

import { setPageNumber } from '../../redux/movies/moviesActions'
import styles from './MoviesSearchForm.module.scss'

const MoviesSearchForm = () => {
  const limit = useSelector(state => state.movies.limit)
  const movie_count = useSelector(state => state.movies.movie_count)
  const page_number = useSelector(state => state.movies.page_number)
  const dispatch = useDispatch()
  return (
    <div>
      <Pagination
        totalItemsCount={movie_count}
        activePage={page_number}
        itemsCountPerPage={limit}
        onChange={(newPage) => {dispatch(setPageNumber(newPage))}}
        hideFirstLastPages={true}
        innerClass={styles.pagUl}
        linkClass={styles.pagLi}
        activeLinkClass={styles.pagLiActive}
       />
    </div>
  )
}
export default MoviesSearchForm
