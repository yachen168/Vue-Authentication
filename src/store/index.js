import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { Toast } from "vant";
import { domainURL, API } from "@/api/service";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: "",
    userInfo: {}
  },
  mutations: {
    setUserInfo(state, userInfo) {
      if (userInfo.image_path) {
        const image_path = `${domainURL}${userInfo.image_path}`; // add domainURL
        state.userInfo = { ...userInfo, image_path };
      } else {
        state.userInfo = userInfo;
      }
    },
    uploadFile(state, url) {
      state.userInfo.image_path = `${domainURL}${url}`;
    },
    setToken(state, token) {
      state.token = token;
    }
  },
  actions: {
    async register({}, userInfo) {
      try {
        await API.post("/register", userInfo);
        Toast.success("註冊成功");
        router.push("/login"); // 跳轉到登入頁面
      } catch (error) {
        Toast.fail("註冊失敗，格式有誤或該帳號已經存在");
      }
    },
    async login({ commit }, userInfo) {
      try {
        const response = await API.post("/login", userInfo);
        const token = response.data.data["remember_token"];
        Toast.success("登入成功");

        localStorage.setItem("remember_token", token);
        commit("setToken", token);
        router.push("/userinfo"); // 跳轉到個人資訊頁面
      } catch (error) {
        Toast.fail("帳號密碼錯誤");
      }
    },
    async logout({}, token) {
      try {
        await API.post("/logout", token);
        localStorage.setItem("remember_token", "");
        Toast.success("已登出");
        router.push("/login");
      } catch (error) {
        Toast.fail("發生錯誤");
      }
    },
    async fetchUserInfo({ commit }, token) {
      const response = await API.post("/info", token);
      commit("setUserInfo", response.data);
    },
    async uploadFile({ commit }, formdata) {
      try {
        const response = await API.post("/uploadImageAPI", formdata, {
          headers: {
            "Content-Type": "image/png",
            Accept: "application/json"
          }
        }); // 返回一組 url
        commit("uploadFile", response.data.data.url); // 先改畫面
      } catch (error) {
        Toast.fail("發生錯誤");
      }
    },
    async resetPassword({getters}, data) {
      try {
        await API.post("/reset", data);
        localStorage.setItem("remember_token", "");
        Toast.success("新密碼設定成功，請重新登入");
        router.push("/login");
      } catch (error) {
        Toast.fail("發生錯誤");
      }
    },
    async forgetPassword({}, data) {
      try {
        await API.post("/forget", data);
        Toast.success("新密碼設定成功，請重新登入");
        router.push("/login");
      } catch (error) {
        Toast.fail("發生錯誤");
      }
    },
    setToken({ commit }) {
      const token = localStorage.getItem("remember_token");
      commit("setToken", token);
    }
  },
  getters: {
    userInfo(state) {
      return state.userInfo;
    },
    token(state) {
      return state.token;
    }
  },
  modules: {}
});
