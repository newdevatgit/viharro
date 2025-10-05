import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const registerUser = (userData) => API.post("register/", userData);

export const loginUser = (credentials) => API.post("login/", credentials);

export default API;
