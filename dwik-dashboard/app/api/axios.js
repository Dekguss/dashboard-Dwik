import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "localhost:8000/motors",
});

export default axiosInstance;
