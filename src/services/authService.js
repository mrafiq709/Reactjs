import jwtDecode from "jwt-decode";
import http from "./httpService";
import { SERVER_AUTH_PASSPORT } from "./../constants/apiConfig";

const tokenKey = "token";

http.setJwt(getJwt());

export async function login(email, password) {
  const { data: jwt } = await http.post(`${SERVER_AUTH_PASSPORT}/oauth/token`, {
    grant_type: "password",
    client_id: 6,
    client_secret: "HFcjyllZjXoZMmVstZpEqq4vu476Cb68LCWJx1pB",
    username: email,
    password: password,
  });

  localStorage.setItem(tokenKey, jwt.access_token);
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (error) {
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export default {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt,
};
