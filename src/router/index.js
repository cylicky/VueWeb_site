import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import Home from "@/layout/index.vue";
import mainBody from "@/layout/Main/index.vue";
import GaoPaiyi from "@/layout/GaoPaiyi/index.vue";
import testBody from "@/layout/Main/Validation.vue";
const routes = [
  {
    path: "/",
    component: Home,
    redirect: "/home",
  },
  { path: "/home", component: Home },
  {
    path: "/:layout",
    component: mainBody,
  },
  { path: "/:layout/:subpage", component: mainBody },
  { path: "/webgaopaiyi", component: GaoPaiyi },
  { path: "/test", component: testBody },
];
const router = createRouter({
  history: createWebHistory(), // createWebHashHistory(),
  routes,
});
export default router;
