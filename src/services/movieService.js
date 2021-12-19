import http from "./httpService";
import { SERVER_REST_API } from "./../constants/apiConfig";

function movieUrl(id) {
  return `${SERVER_REST_API}/api/movies/${id}`;
}

export function getMovies() {
  return http.get(`${SERVER_REST_API}/api/movies`);
}

export function getMovie(id) {
  return http.get(movieUrl(id));
}

export function saveMovie(movie) {
  return http.post(`${SERVER_REST_API}/api/movies`, movie);
}
