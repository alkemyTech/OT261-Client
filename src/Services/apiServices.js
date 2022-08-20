import axios from "axios";

function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.token) {
    return { token: user.token };
  } else {
    return {};
  }
}
const url = process.env.REACT_APP_URL

export const instance = axios.create({
  baseURL: url,
  timeout: 1000,
  headers: authHeader() 
})

