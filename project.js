const form = document.querySelector('#movie-form')
const titleElement = document.querySelector('#title')
const directorElement = document.querySelector('#director')
const urlElement = document.querySelector('#url')

eventListeners()

function eventListeners() {
  form.addEventListener('submit', addMovie)
}
function addMovie(e) {
  const title = titleElement.value
  const director = directorElement.value
  const url = urlElement.value

  if (title === '' || director === '' || url === '') {
    //Alert Message
  } else {
    const newMovie = new Movie(title, director, url)
    UI.addMovieToUI(newMovie)
  }
  UI.clearInputs(titleElement, directorElement, urlElement)
  e.preventDefault()
}