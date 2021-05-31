import axios from "axios";

const instance = axios.create({
  baseURL: 'https://yts.mx/api/v2/'
})

export const listMoviesAPI = {
  getMovies(page_number = 1) {
    debugger
    return instance.get(`list_movies.json?limit=20&page=${page_number}`)
      .then(response => {
        debugger
        return response.data
      })
  },
  getComments(movie_id) {
    return instance.get(`movie_comments.json?movie_id=${movie_id}`)
    .then(response => {
      return response.data
    })
  }
}