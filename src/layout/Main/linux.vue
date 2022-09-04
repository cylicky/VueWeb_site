<template>
  <h3 class="title-h3">Linux SDK 下载</h3>
  <div class="linux-nav">
    <router-link
      :class="activeMenu === 'home' ? 'active' : ''"
      :to="`/${$route.params.layout}/home`"
      >下载说明</router-link
    >
    <router-link
      :class="
        item[0].linux_type.toLowerCase() === activeMenu.toLowerCase()
          ? 'active'
          : ''
      "
      :to="`/${$route.params.layout}/${item[0].linux_type.toLowerCase()}`"
      v-for="(item, key) in list"
      :key="key"
      >{{ item[0].linux_type }}
    </router-link>
  </div>
  <div class="linux-content">
    <div
      class="linux-log"
      v-if="activeMenu === 'home'"
      v-html="logLinux.desc ? logLinux.desc : ''"
    ></div>
    <div v-else class="linux-sdk">
      <div v-for="(value, key) in list[activeMenu.toUpperCase()]" :key="key">
        <a :href="value.download" target="_blank"> {{ value.name }}</a>
      </div>
    </div>
  </div>
</template>
<script>
import { linuxsdkTest, linuxdownloadmessageTest } from "@/services";
export default {
  data() {
    return {
      list: {},
      activeMenu: "home",
      logLinux: {},
    };
  },
  watch: {
    "$route.params.subpage"(value, old) {

      this.activeMenu = value ? value : "home";
    },
  },
  mounted() {
    this.getlinuxSdk();
    this.activeMenu = this.$route.params.subpage
      ? this.$route.params.subpage
      : "home";
  },
  methods: {
    async getlinuxSdk() {
      try {
        const res_SDK = await linuxsdkTest();
        const res_introduce = await linuxdownloadmessageTest();
        const data = {};
        for (let item of res_SDK.results) {
          // 判断是否有这个数组
          if (!data[item.linux_type]) {
            data[item.linux_type] = [];
          }
          data[item.linux_type].push(item);
        }
        this.list = data;
        this.logLinux = res_introduce.results[0] || {};
      } catch (error) {
        console.log(" 数据获取失败    ");
      }
    },
  },
};
</script>
<style>

</style>