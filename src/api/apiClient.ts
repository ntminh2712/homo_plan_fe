import qs from "qs";
import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import Cookies from "universal-cookie";
import { ToastError } from "../components/common/toast";

const baseURLApp =
  "https://api.homoplan.com/api/";

const apiClient = axios.create({
  baseURL: baseURLApp,
  headers: {
    "content-type": "application/json",
  },

  paramsSerializer: (params) => {
    return qs.stringify(params);
  },
});

const cookies = new Cookies();

apiClient.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const jwt = cookies.get("jwt");

    if (jwt && config.headers) {
      config.headers["Authorization"] = "Bearer " + jwt;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response) {
      return response;
    }
    return response;
  },
  (error) => {
    if (error.message === "Network Error") {
      ToastError(error.message);
    }
    if (typeof window === "undefined") {
      throw error;
    }
    return Promise.reject(error);
  }
);
export default apiClient;
