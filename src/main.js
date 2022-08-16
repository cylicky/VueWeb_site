import { createApp, version } from 'vue'
import App from './App.vue'
import "./global.css"
import router from './router';
import store from "./store"
console.log("vue 当前版本", version)
createApp(App).use(router).use(store).mount('#app');
