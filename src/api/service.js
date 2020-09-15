import axios from "axios";
import router from "../router";
const domainURL = "https://k88d02.ml";

const Api = axios.create({
    baseURL: `${domainURL}/api`,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    }
});

const apiUploadImg = axios.create({
    baseURL: `${domainURL}/api`,
    headers: {
        "Content-Type": "image/png",
        Accept: "application/json"
    }
});

Api.interceptors.request.use(
    function(config) {
        const token = localStorage.getItem("remember_token");
        if (token) {
            config.headers.Authorization = `${token}`;
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

export { domainURL, Api, apiUploadImg };