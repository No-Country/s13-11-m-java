import { User } from "@/app/services/api/types";

export const setUser = (user: User) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const getUser = () => {
  return JSON.parse(localStorage.getItem("user")!) ?? null;
};

export const removeUser = () => {
  localStorage.removeItem("user");
};

export const setToken = (token: string) => {
  sessionStorage.setItem("token", token);
};

export const getToken = () => {
  return sessionStorage.getItem("token");
};

export const removeToken = () => {
  sessionStorage.removeItem("token");
};

export const removeAuth = () => {
  removeUser();
  removeToken();
};

export const setAuth = (user: User, token: string) => {
  setUser(user);
  setToken(token);
};
