import { useTitle } from "@vueuse/core";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import AuthRoutes from "./components/auth/routes";
import UserRoutes from "./components/user/routes";


const routes: RouteRecordRaw[] = [
    ...UserRoutes,
    ...AuthRoutes
]

const customerRouter = createRouter({
    history: createWebHistory(),
    routes
})

customerRouter.beforeEach((to) => {
    const title = useTitle()
    if (to.meta.title) {
        title.value = 'Social Share | ' + to.meta.title as string
    } else {
        title.value = 'Social Share'
    }
})

export default customerRouter;