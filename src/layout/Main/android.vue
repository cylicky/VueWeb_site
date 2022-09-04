<template>
  <h3 class="title-h3">Android SDK 下载</h3>
  <div class="android-nva">
    <router-link
      :class="activeMenu === 'home' ? 'active' : ''"
      :to="`/${$route.params.layout}/home`"
      >下载说明
    </router-link>
    <router-link
      :to="`/${$route.params.layout}/${item[0].android_type.toLowerCase()}`"
      :class="item[0].android_type.toLowerCase() === activeMenu ? 'active' : ''"
      v-for="(item, key) in androidsdk"
      :key="key"
      >{{ item[0].android_type }}
    </router-link>
  </div>
  <div class="android-content">
    <div v-if="activeMenu === 'home'">
      <div v-html="androidLog.desc ? androidLog.desc : ''"></div>
    </div>
    <div v-else class="android-sdk">
      <div v-for="(item, key) in androidsdk[activeMenu.toUpperCase()]" :key="key">
        <a :href="`${item.download}`" target="_blank">{{ item.name }}</a>
      </div>
    </div>
  </div>
</template>
<script>
import {
  androidsdkTest,
  androidappTest,
  androiddownloadmessageTest,
} from "@/services";

export default {
  data() {
    return {
      activeMenu: "home",
      androidsdk: {},
      androidLog: {},
    };
  },
  watch: {
    "$route.params.subpage"(value, old) {
      console.log(value);
      this.activeMenu = value ? value : "home";
    },
  },
  mounted() {
    this.getSdk();
    console.log("$route.params.subpage", this.$route.params.subpage);
    this.activeMenu = this.$route.params.subpage || "home";
  },
  methods: {
    async getSdk() {
      const res_sdk = await androidsdkTest();
      const res_app = await androidappTest();
      const res_log = await androiddownloadmessageTest();
      this.androidLog = res_log.results[0] || {};
      const data_sdk = {};
      const data_app = {};
      for (let item of res_sdk.results) {
        // 判断是否有这个数组
        if (!data_sdk[item.android_type]) {
          data_sdk[item.android_type] = [];
        }
        data_sdk[item.android_type].push(item);
      }
      for (let item of res_app.results) {
        // 判断是否有这个数组
        if (!data_app[item.android_type]) {
          data_app[item.android_type] = [];
        }
        data_app[item.android_type].push(item);
      }
      this.androidsdk = { ...data_app, ...data_sdk };
    },
  },
};
</script>