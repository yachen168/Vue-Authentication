import axios from "axios";
import router from "../router";

const Api = axios.create({
  baseURL: "http://112.74.99.5:3000/web/api"
});

Api.interceptors.request.use(
  function(config) {
    const id = localStorage.getItem("id");
    const token = localStorage.getItem("token");
    if (id && token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

Api.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    // 當 token 失效時，導回登入頁(但有些頁面並不需要 ajax 請求，所以須在 router.beforeEach 另外設定)
    if (error.response.status === 401 || error.response.status === 402) {
      router.push("/login");
    }
    return Promise.reject(error);
  }
);

export default Api;
