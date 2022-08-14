import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import Layout from "@/layout/index.vue";
import Home from "@components/home.vue";
import mainBody from "@components/index.vue";
import test from "@components/test.vue";

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
        component: mainBody,
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
