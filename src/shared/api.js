import axios from "axios";

const accessToken = document.cookie.split("=")[1];

const instance = axios.create({
  baseURL: "http://13.124.107.195",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
    Authorization: `Bearer ${accessToken}`,
  },
});

// instance.defaults.headers.common["Authorization"] = USER_TOKEN;

export default instance;
