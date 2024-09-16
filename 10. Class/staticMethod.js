class Films {
  static getFilms() {
    return ['Movie', 'Drama', 'Anime', 'Sports'];
  }

  static findFilm(targetFilm) {
    const films = ['Movie', 'Drama', 'Anime', 'Sports'];
    return films.find((film) => film === targetFilm)
  }
}

const films = Films.getFilms();
console.log(films);

const film = Films.findFilm('Drama');
console.log(film);