import getGenres from "./fakeGenreService";

const movies = [
  {
    _id: "1abc",
    title: "Movie 1",
    stock: 10,
    rate: 2.5,
    liked: true,
    genre: {
      _id: "615c539644ee3a0d1513e4c2",
      name: "Action",
    },
  },
  {
    _id: "2abc",
    title: "Movie 2",
    stock: 15,
    rate: 3.5,
    genre: {
      _id: "abcdefgh1",
      name: "Action",
    },
  },
  {
    _id: "3abc",
    title: "Movie 3",
    stock: 30,
    rate: 4.5,
    genre: {
      _id: "abcdefgh2",
      name: "Commedy",
    },
  },
  {
    _id: "4abc",
    title: "Movie 4",
    stock: 10,
    rate: 2.5,
    liked: true,
    genre: {
      _id: "abcdefgh3",
      name: "Thriller",
    },
  },
  {
    _id: "5abc",
    title: "Movie 5",
    stock: 15,
    rate: 3.5,
    genre: {
      _id: "abcdefgh4",
      name: "Animation",
    },
  },
  {
    _id: "6abc",
    title: "Movie 6",
    stock: 30,
    rate: 4.5,
    genre: {
      _id: "abcdefgh2",
      name: "Commedy",
    },
  },
  {
    _id: "7abc",
    title: "Movie 7",
    stock: 10,
    rate: 2.5,
    liked: true,
    genre: {
      _id: "abcdefgh3",
      name: "Thriller",
    },
  },
  {
    _id: "8abc",
    title: "Movie 8",
    stock: 15,
    rate: 3.5,
    genre: {
      _id: "abcdefgh1",
      name: "Action",
    },
  },
  {
    _id: "9abc",
    title: "Movie 9",
    stock: 30,
    rate: 4.5,
    genre: {
      _id: "abcdefgh4",
      name: "Animation",
    },
  },
];

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.filter((m) => m._id === id)[0];
}

export function saveMovie(movie) {
  let movieInDb = movies.find((m) => m._id === movie._id) || {};
  movieInDb.title = movie.title;
  movieInDb.genre = getGenres().find((g) => g._id === movie.genreId);
  movieInDb.stock = movie.stock;
  movieInDb.rate = movie.rate;

  if (!movieInDb._id) {
    movieInDb._id = Date.now().toString();
    movies.push(movieInDb);
  }

  return movieInDb;
}
