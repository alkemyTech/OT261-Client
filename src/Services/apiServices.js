import axios from "axios";

const user = JSON.parse(localStorage.getItem("user"));

const url = process.env.REACT_APP_URL;

export const instance = axios.create({
  baseURL: url,
  timeout: 1000,
});

instance.interceptors.request.use(
  (request) => {
    request.headers["token"] = user.token || {};
    return request;
  },
  (err) => err
);
