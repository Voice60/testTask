import axios from "axios";

const instance = axios.create({
  baseURL: 'https://yts.mx/api/v2/'
})

export const listMoviesAPI = {
  getMovies(page_number = 1) {
    return instance.get(`list_movies.json?limit=20&page=${page_number}`)
      .then(response => {
        return response.data
      })
  },
  getComments(movie_id) {
    debugger
    return instance.get(`movie_comments.json?movie_id=${movie_id}`)
    .then(response => {
      debugger
      return response.data
    })
  },
  makeComment(movie_id) {
    return instance.get(`make_comment.json?movie_id=${movie_id}&comment_text='123'`)
    .then(response => {
      return response.data
    })
  },
  getUserKey() {
    return instance.get(`user_get_key.json?username='Voice60'&password='test'`)
    .then(response => {
      return response.data
    })
  },
}