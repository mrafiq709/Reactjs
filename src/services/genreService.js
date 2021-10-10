import http from "./httpService";

export function getGenres() {
  return http.get("https://rest-api.ml/api/genres");
}

export function getGenre($id) {
  console.log($id);
  return http.get("https://rest-api.ml/api/genres/" + $id);
}
