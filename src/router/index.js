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
        path: "/resetpassword",
        name: "ResetPassword",
        component: () =>
            import ( /* webpackChunkName: "login" */ "@/views/ResetPassword.vue"),
        meta: {
            isToken: true // 在需要權限的路由裡個別設定 meta
        }
    },
    {
        path: "/userinfo",
        name: "UserInfo",
        redirect: "/userinfo/view", // default page
        component: () =>
            import ( /* webpackChunkName: "user-info" */ "@/views/UserInfo.vue"),
        children: [{
                path: "view",
                name: "UserInfoHome",
                component: () =>
                    import (
                        /* webpackChunkName: "user-info" */
                        "@/views/UserInfoView.vue"
                    ),
                meta: {
                    isToken: true // 在需要權限的路由裡個別設定 meta
                }
            },
            {
                path: "edit",
                name: "UserInfoEdit",
                component: () =>
                    import ("@/views/UserInfoEdit.vue"),
                meta: {
                    isToken: true // 在需要權限的路由裡個別設定 meta
                }
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