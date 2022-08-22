import { createApp, version } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/common.scss";
console.log("vue 版本", version);
createApp(App).use(router).use(store).mount("#app");
