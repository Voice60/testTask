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
  }
}