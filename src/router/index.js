import Vue from "vue";
import store from "../store";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "authentication" */ "@/views/Register.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "authentication" */ "@/views/Login.vue")
  },
  {
    path: "/forgetpassword",
    name: "ForgetPassword",
    component: () =>
      import(
        /* webpackChunkName: "authentication" */ "@/views/ForgetPassword.vue"
      )
  },
  {
    path: "/userinfo",
    name: "UserInfo",
    redirect: "/userinfo/view", // default page
    meta: {
      isToken: true
    },
    component: () =>
      import(/* webpackChunkName: "user-info" */ "@/views/UserInfo.vue"),
    children: [
      {
        path: "view",
        name: "UserInfoView",
        component: () =>
          import(
            /* webpackChunkName: "user-info" */
            "@/views/UserInfoView.vue"
          ),
        async beforeEnter(routerTo, routerFrom, next) {
          await store.dispatch("setToken");
          await store.dispatch("fetchUserInfo", {
            remember_token: store.getters.token
          });
          next();
        }
      },
      {
        path: "edit",
        name: "UserInfoEdit",
        component: () =>
          /* webpackChunkName: "user-info" */
          import("@/views/UserInfoEdit.vue"),
        async beforeEnter(routerTo, routerFrom, next) {
          await store.dispatch("setToken");
          await store.dispatch("fetchUserInfo", {
            remember_token: store.getters.token
          });
          next();
        }
      },
      {
        path: "resetpassword",
        name: "ResetPassword",
        component: () =>
          import(
            /* webpackChunkName: "user-info" */
            "@/views/ResetPassword.vue"
          )
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  // 若無權限且該頁面需要權限，則導回登入頁面
  if (!localStorage.getItem("remember_token") && to.meta.isToken) {
    router.push("/login");
    return;
  }
  next();
});

export default router;
