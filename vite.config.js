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

  // 跨域

  server: {
    // cors: true, // 默认启用并允许任何源
    proxy: {
      '/api': {
        target: 'http://172.16.200.37:8023/api/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  }
});

