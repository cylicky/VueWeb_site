<template>
  <h3 class="title-h3">Windows SDK 下载</h3>
  <div class="linux-nav">
    <router-link
      :class="activeMenu === 'home' ? 'active' : ''"
      :to="`/${$route.params.layout}/home`"
      >下载说明</router-link
    >
    <router-link
      :class="
        item[0].sdkname.toLowerCase() === activeMenu.toLowerCase()
          ? 'active'
          : ''
      "
      :to="`/${$route.params.layout}/${item[0].sdkname.toLowerCase()}`"
      v-for="(item, key) in list"
      :key="key"
    >
      <span v-if="item">
        {{ item[0].sdkname }}
      </span>
    </router-link>
  </div>
  <div class="android-content">
    <div v-if="activeMenu === 'home'">
      <div v-html="logDoc ? logDoc : ''"></div>
    </div>
    <div v-else class="android-sdk">
      <div v-for="(item, key) in listsdk" :key="key">
        <a :href="`${item.address}`" target="_blank">{{ item.title }}</a>
      </div>
    </div>
  </div>
</template>
<script>
import {
  windowssdkdownloadmessageTest,
  windowssdkdownloadaddressTest,
} from "@/services";
export default {
  data() {
    return {
      list: {},
      activeMenu: "home",
      logDoc: {},
      listsdk: {},
    };
  },
  watch: {
    "$route.params.subpage"(value, old) {
      this.activeMenu = value ? value : "home";
      this.getSdk(this.list);
    },
  },
  mounted() {
    this.logIntroduce();
    this.activeMenu = this.$route.params.subpage || "home";
  },
  methods: {
    getSdk(value) {
      if (this.$route.params.subpage == "webcamera") {
        this.listsdk = value[3];
        // this.list = value[3];
      } else if (this.$route.params.subpage == "eloamview") {
        this.listsdk = value[1];
      }else if(this.$route.params.subpage == "eloamdll"){
           this.listsdk = value[2];
      }
    
    },
    async logIntroduce() {
      const res = await windowssdkdownloadmessageTest();
      const res_SDK = await windowssdkdownloadaddressTest();
      const data = {};
      for (let item of res_SDK) {
        if (!data[item.sdkname]) {
          data[item.sdkname] = [];
        }
        data[item.sdkname] = [...data[item.sdkname], ...item.results];
      }
      this.list = data;
      this.logDoc = res.results[0].desc;
      this.getSdk(data);
    },
  },
};
</script>
<style>
</style>