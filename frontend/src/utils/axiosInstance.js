import axios from "axios";
import { BASE_URL } from "./apiPaths";

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});


//request interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("token");
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

//response interceptor
axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response) {
        const status = error.response.status;
        const url = error.config?.url || "";
        // Do NOT redirect on 401 for auth endpoints so UI can show messages
        const isAuthRoute = url.includes("/api/v1/auth/login") || url.includes("/api/v1/auth/register");
        if (status === 401 && !isAuthRoute) {
          window.location.href = "/login";
        } else if (status === 500) {
          console.error("Server error.Please try again later.");
        }
      } else if (error.code === "ECONNABORTED") {
        console.error("Request timed out. Please try again.");
      }
      return Promise.reject(error);
    }
  );
    
export default axiosInstance;