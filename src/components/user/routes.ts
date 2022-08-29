import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: "/user",
        name: "user",
        component: () => import("./UserView.vue"),
        children: [
            {
                path: "dahsboard",
                name: 'user.dashboard',
                component: () => import("./components/Dashboard.vue"),
                meta: {
                    title: 'Dashboard'
                }
            }
        ]
    }
]

export default routes