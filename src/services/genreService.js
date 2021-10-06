import http from "./httpService";

export function getGenres() {
  return http.get("https://rest-api.ml/api/genres");
}
