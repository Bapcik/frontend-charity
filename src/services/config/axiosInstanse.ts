import axios from "axios";

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:3000/",
});

axiosInstance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    config.headers.Authorization = accessToken;
  }

  return config;
});

export default axiosInstance;
