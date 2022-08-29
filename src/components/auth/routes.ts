import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: "/auth",
        name: "auth",
        component: () => import("./AuthView.vue"),
        children: [
            {
                path: "login",
                name: 'auth.login',
                component: () => import("./componets/Login.vue"),
                meta: {
                    title: 'Login'
                }
            }
        ]
    }
]

export default routes