const form = document.querySelector('#movie-form')
const titleElement = document.querySelector('#title')
const directorElement = document.querySelector('#director')
const urlElement = document.querySelector('#url')
const cardBody = document.getElementsByClassName('card-body')[1]

eventListeners()

function eventListeners() {
  form.addEventListener('submit', addMovie)
  document.addEventListener('DOMContentLoaded', function () {
    let movies = Storage.getMoviesFromStorage()
    UI.loadAllMovies(movies)
  })
  cardBody.addEventListener('click', deleteMovie)
}
function addMovie(a) {
  const title = titleElement.value
  const director = directorElement.value
  const url = urlElement.value

  if (title === '' || director === '' || url === '') {
    //Alert Message
    UI.displayMessages('Please do not leave the fields blank!', 'danger')
  } else {
    const newMovie = new Movie(title, director, url)
    UI.addMovieToUI(newMovie)
    UI.displayMessages('Movie successfully added!', 'success')
    Storage.addMovieToStorage(newMovie)
  }
  UI.clearInputs(titleElement, directorElement, urlElement)
  a.preventDefault()
}
function deleteMovie(b) {
  if (confirm('Are you sure you want to delete?')) {
    if (b.target.id === 'delete-movie') {
      UI.deleteMoviesFromUI(b.target)
      UI.displayMessages('Successfully deleted!', 'warning')
      Storage.deleteMovieFromStorage(
        b.target.parentElement.previousElementSibling.previousElementSibling
          .textContent
      )
    }
  }
}
