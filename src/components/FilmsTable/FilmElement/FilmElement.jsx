import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import styles from './FilmElement.module.scss'

const FilmElement = ({ m }) => {
  // const comments = useSelector(state => state.movies.comments)
  const dispatch = useDispatch()
  const [commentsOn, setCommentsOn] = useState(false)
  let ratingColor = 'white'
  if (m.rating >= 0 && m.rating <= 4) {
    ratingColor = '#fe2d2d'
  } else if (m.rating > 4 && m.rating <= 6) {
    ratingColor = '#e9ef36'
  } else {
    ratingColor = '#1afa25'
  }

  return (
    <li onClick={() => {
      // dispatch(getComments(m.id))
      // setCommentsOn(true) 
    }} className={styles.li}>
      <div className={styles.movie}>
        <div style={{ backgroundImage: `URL(${m.medium_cover_image})` }} className={styles.img}>
        </div>
        <div className={styles.movieInfo}>
          <h2 className={styles.title}>{m.title_english}</h2>
          <p className={styles.tags + ' ' + styles.mb10px}>{m.genres.join(', ')}</p>
          <p className={styles.mb10px}>Year: <span className={styles.darkText}>{m.year}</span></p>
          <p></p>
          <p className={styles.language}>language: <span className={styles.darkText}>{m.language}</span></p>
          <div className={styles.blockInfo}>
            <div style={{ color: ratingColor }} className={styles.rating}>
              <img className={styles.icon} src="https://img.icons8.com/fluent/24/000000/star.png" alt='star icon'/>
              {m.rating}/10
          </div>
            <div className={styles.clock}>
              <img className={styles.icon} src="https://img.icons8.com/material-outlined/24/def1ff/wall-clock.png" alt='clock icon'/>
            &nbsp;{m.runtime}
            </div>
          </div>
        </div>
      </div>
      { commentsOn &&
        <div className={styles.comments}>

        </div>}
    </li>
  )
}

export default FilmElement
