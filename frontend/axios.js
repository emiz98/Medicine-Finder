import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:8080/api/v1",
});

request.interceptors.request.use(
  (request) => {
    const token = localStorage.getItem("token");
    if (token) {
      console.log("token");
      request.headers.Authorization = token;
    }

    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default request;
