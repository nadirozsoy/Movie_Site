class UI {
  static addMovieToUI(newMovie) {
    const movieList = document.querySelector('#movies')
    movieList.innerHTML += `
      <tr>
          <td><img src="${newMovie.url}" class="img-fluid img-thumbnail"></td>
          <td>${newMovie.title}</td>
          <td>${newMovie.director}</td>
          <td><a href="#" id = "delete-movie" class = "btn btn-danger">Filmi Sil</a></td>
      </tr>
      `
  }
  static clearInputs(e1, e2, e3) {
    e1.value = ''
    e2.value = ''
    e3.value = ''
  }
}
