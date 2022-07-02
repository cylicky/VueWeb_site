import {createRouter, createWebHistory,createWebHashHistory} from "vue-router";
import Layout from "@/layout/index.vue";

 const routes = [
    {
      path: "/",
      name: "Home",
      component:Layout, 
      redirect: "/home",
      children: [
        {
          path: "home",
          name: "home",
          component: () => import("@components/home.vue")
         // meta: { title: "首页", icon: "el-icon-s-data" }
        },
        {
          path: "Windows",
          name: "Windows",
          component: () => import("@components/Windows.vue")
         // meta: { title: "首页", icon: "el-icon-s-data" }
        },
        {
          path: "Linux",
          name: "Linux",
          component: () => import("@components/Linux.vue")
         // meta: { title: "首页", icon: "el-icon-s-data" }
        },
        {
          path: "Android",
          name: "Android",
          component: () => import("@components/Android.vue")
         // meta: { title: "首页", icon: "el-icon-s-data" }
        },
        {
          path: "test",
          name: "test",
          component: () => import("@components/test.vue")
         // meta: { title: "首页", icon: "el-icon-s-data" }
        },
      ]
    },
   
  ];
  const router = createRouter({
    history:  createWebHistory(),  // createWebHashHistory(),
    routes
  });
  export default router;