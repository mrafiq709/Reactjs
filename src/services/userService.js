import http from "./httpService";
import { SERVER_AUTH_PASSPORT } from "./../constants/apiConfig";

export function register(user) {
  return http.post(`${SERVER_AUTH_PASSPORT}/oauth/register`, {
    email: user.email,
    password: user.password,
    password_confirmation: user.password_confirmation,
    name: user.name,
  });
}
