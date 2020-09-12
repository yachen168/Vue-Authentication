import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Register",
        component: () =>
            import ( /* webpackChunkName: "register" */ "@/views/Register.vue")
    },
    {
        path: "/login",
        name: "Login",
        component: () =>
            import ( /* webpackChunkName: "login" */ "@/views/Login.vue")
    },
    {
        path: "/userinfo",
        name: "UserInfo",
        component: () =>
            import ( /* webpackChunkName: "user-info" */ "@/views/UserInfo.vue"),
        meta: {
            isToken: true
        }
    },
    {
        path: "/edit",
        name: "Edit",
        component: () =>
            import ( /* webpackChunkName: "edit" */ "@/views/Edit.vue"),
        meta: {
            isToken: true // 在需要權限的路由裡個別設定 meta
        }
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;