class UI {
  static addMovieToUI(newMovie) {
    const movieList = document.querySelector('#movies')
    movieList.innerHTML += `
      <tr>
          <td><img style="width: 20rem" src="${newMovie.url}" class="img-fluid img-thumbnail"></td>
          <td>${newMovie.title}</td>
          <td>${newMovie.director}</td>
          <td><a href="#" id = "delete-movie" class = "btn btn-danger">Delete Movie</a></td>
      </tr>
      `
  }
  static clearInputs(e1, e2, e3) {
    e1.value = ''
    e2.value = ''
    e3.value = ''
  }
  static displayMessages(message, type) {
    const cardBody = document.querySelector('.card-body')
    const div = document.createElement('div')
    div.className = `alert alert-${type}`
    div.textContent = `${message}`
    cardBody.appendChild(div)
    setTimeout(() => {
      div.remove()
    }, 1500)
  }
}
