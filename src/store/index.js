import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { Toast } from "vant";
import { domainURL, Api, apiUploadImg } from "@/api/service";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        userInfo: {}
    },
    mutations: {
        setUserInfo(state, userInfo) {
            if (userInfo.image_path) {
                const image_path = `${domainURL}${userInfo.image_path}`; // add domainURL
                state.userInfo = {...userInfo, image_path };
            } else {
                state.userInfo = userInfo;
            }
        },
        uploadFile(state, url) {
            state.userInfo.image_path = `${domainURL}${url}`;
        }
    },
    actions: {
        async postRegister({ commit }, userInfo) {
            try {
                await Api.post("/register", userInfo);
                console.log(commit);
                Toast.success("註冊成功");
                router.push("/login"); // 跳轉到登入頁面
            } catch (error) {
                Toast.fail("註冊失敗，格式有誤或該帳號已經存在");
            }
        },
        async postLogin({ commit }, userInfo) {
            try {
                const response = await Api.post("/login", userInfo);
                Toast.success("登入成功");
                localStorage.setItem( // 將 token 存到 localStorage
                    "remember_token",
                    response.data.data["remember_token"]
                );
                router.push("/userinfo"); // 跳轉到個人資訊頁面
            } catch (error) {
                Toast.fail("帳號密碼錯誤");
            }
            console.log(commit);
        },
        async fetchUserInfo({ commit }) {
            const token = localStorage.getItem("remember_token");
            const response = await Api.post("/info", { remember_token: token });
            commit("setUserInfo", response.data);
        },
        async uploadFile({ commit, dispatch }, formdata) {
            try {
                const response = await apiUploadImg.post("/uploadImageAPI", formdata); // 返回一組 url
                commit("uploadFile", response.data.data.url); // 先改畫面
                dispatch("updateUserInfo");
            } catch (error) {
                Toast.fail("發生錯誤");
            }

        },
        async updateUserInfo({ commit }) {
            commit("setUserInfo");
            const token = localStorage.getItem("remember_token");
            await Api.post("/info", token);
        }
    },
    getters: {
        userInfo(state) {
            return state.userInfo;
        }
    },
    modules: {}
});