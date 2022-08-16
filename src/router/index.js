import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import Layout from "@/layout/index.vue";
import Home from "@components/home.vue";
import mainBody from "@components/index.vue";
<<<<<<< HEAD
import Doc from "@components/Doc.vue";
=======
import test from "@components/test.vue";

>>>>>>> 7acebc23b84d1b64be916f31ed211e64da19cb4c
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
      // {
      //   path: ":id",
      //   name: "windows",
      //   component: mainBody,
      //   // component: () => import("@components/Windows.vue")
      //   // meta: { title: "首页", icon: "el-icon-s-data" }
      // },
      {
        path: ":id",
        name: "mainBody",
        component: mainBody,
        children: [
        ]
      },
<<<<<<< HEAD
      // {
      //   path: "/windows",
      //   name: "Doc",
      //   component: mainBody,
        
        
      //   //  component: () => import("@components/home.vue")
      //   // meta: { title: "首页", icon: "el-icon-s-data" }
      // },

=======
      
>>>>>>> 7acebc23b84d1b64be916f31ed211e64da19cb4c
    ],
  },
 
];
const router = createRouter({
  history: createWebHistory(), // createWebHashHistory(),
  routes,
});
export default router;
