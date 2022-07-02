import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

const path = require("path");
export default defineConfig({
  publicPath:
    process.env.NODE_ENV === "production" ? "/production-sub-path/" : "/",
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), //文件别名配置 resolve（key,value）
      "@components": path.resolve(__dirname, "./src/components"),
    },
  },
  // devServer: {
  //   proxy: "127.0.0.1:8080",
  // },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/element.scss" as *;`, // 路径根据配置改变，没有别名就⽤相对路径和绝对路径
      },
    },
  },
});
