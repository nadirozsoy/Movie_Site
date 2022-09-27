class Storage {
  static addMovieToStorage(newMovie) {
    let movies = this.getMoviesFromStorage()
    movies.push(newMovie)
    localStorage.setItem('movies', JSON.stringify(movies))
  }
  static getMoviesFromStorage() {
    let movies
    if (localStorage.getItem('movies') === null) {
      movies = []
    } else {
      movies = JSON.parse(localStorage.getItem('movies'))
    }
    return movies
  }
}
