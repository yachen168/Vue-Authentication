import Vue from "vue";
import Vuex from "vuex";
import router from "../router"; // 暫時
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
        const image_path = `${domainURL}${userInfo.image_path}`; // 加上 domainURL
        state.userInfo = { ...userInfo, image_path };
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
      const response = await Api.post("/register", userInfo);
      console.log(commit);
      if (response.status === 200) {
        Toast.success("註冊成功");
        router.push("/login"); // 跳轉到登入頁面
      }
      if (response.data.status === 400) {
        Toast.fail("註冊失敗，格式有誤或該帳號已經存在");
      }
    },
    async postLogin({ commit }, userInfo) {
      try {
        const response = await Api.post("/login", userInfo);
        Toast.success("登入成功");
        // 將 token 存到 localStorage
        localStorage.setItem(
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
      console.log(response.data);
      commit("setUserInfo", response.data);
    },
    async uploadFile({ commit, dispatch }, formdata) {
      const response = await apiUploadImg.post("/uploadImageAPI", formdata); // 返回一組 url
      commit("uploadFile", response.data.data.url); // 先改畫面
      dispatch("updateUserInfo");
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
