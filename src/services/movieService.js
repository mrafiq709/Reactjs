import http from "./httpService";
import { SERVER_REST_API } from "./../constants/apiConfig";
import { getHeaders } from "../utils/heades";

function movieUrl(id) {
  return `${SERVER_REST_API}/api/movies/${id}`;
}

export function getMovies() {
  return http.get(`${SERVER_REST_API}/api/movies`, getHeaders());
}

export function getMovie(id) {
  return http.get(movieUrl(id), getHeaders());
}

export function saveMovie(movie) {
  return http.post(`${SERVER_REST_API}/api/movies`, movie, getHeaders());
}
