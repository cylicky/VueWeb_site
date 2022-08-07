import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import Layout from "@/layout/index.vue";
import Home from "@components/home.vue";
import Windows from "@components/Windows.vue";
import Linux from "@components/Linux.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "home",
        component: Home,
        //  component: () => import("@components/home.vue")
        // meta: { title: "首页", icon: "el-icon-s-data" }
      },
      {
        path: ":id",
        name: "windows",
        component: Windows,
        // component: () => import("@components/Windows.vue")
        // meta: { title: "首页", icon: "el-icon-s-data" }
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(), // createWebHashHistory(),
  routes,
});
export default router;
