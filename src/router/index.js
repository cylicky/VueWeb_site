import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import Layout from "@/layout/index.vue";
import Home from "@components/home.vue";
import mainBody from "@components/index.vue";
import Doc from "@components/Doc.vue";
const routes = [
  {
    path: "/",
 
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "home",
        component: Home,
      
      },
      // {
      //   path: ":id",
      //   name: "windows",
      //   component: mainBody,
      //   // component: () => import("@components/Windows.vue")
      //   // meta: { title: "首页", icon: "el-icon-s-data" }
      // },
      {
        path: ":id",
        component: mainBody,
       
      },
      {
        path: ":id/:linux",
        component: Doc,
       
      },
      // {
      //   path: "/windows",
      //   name: "Doc",
      //   component: mainBody,
        
        
      //   //  component: () => import("@components/home.vue")
      //   // meta: { title: "首页", icon: "el-icon-s-data" }
      // },

    ],
  },
 
];
const router = createRouter({
  history: createWebHistory(), // createWebHashHistory(),
  routes,
});
export default router;
