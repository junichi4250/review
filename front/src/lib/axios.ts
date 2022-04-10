import Axios from "axios";

const axios = Axios.create({
  //   baseURL: process.env.API_URL,
  baseURL: "http://localhost:80",
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
  withCredentials: true,
});

export default axios;
