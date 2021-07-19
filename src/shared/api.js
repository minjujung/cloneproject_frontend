import axios from "axios";

const accessToken = document.cookie.split("=")[1];

const instance = axios.create({
  baseURL: "http://52.79.234.172/",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
    Authorization: `${accessToken}`,
  },
});

// instance.defaults.headers.common["Authorization"] = USER_TOKEN;

export default instance;
