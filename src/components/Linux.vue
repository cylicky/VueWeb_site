
<template>
  <div class="linux-main">
    <el-tabs type="border-card" class="demo-tabs">
      <el-tab-pane label="下载说明">
        <div v-for="(value, index) in LinuxDownloadMessageList">
          <div v-html="LinuxDownloadMessageList[0].desc"></div>
        </div>

      </el-tab-pane>
      <el-tab-pane :label="item[0].linux_type" v-for="(item, key) in linuxSDK" :key="key">
        <div v-for="(value, index) in  item" :key="key" class="link_a">
          <el-link v-bind:href="value.download" target="_blank" :underline="false">
            {{ value.name }}</el-link>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>

</template>
<script >
import { LinuxDownloadMessageList, LinuxSdkList } from "@/services";
export default {

  data() {
    return {
      LinuxDownloadMessageList: {},
      linuxSDK: {},
      linux_type: "sub",
      linux_down: {},
    }
  }, methods: {
    linuxSub(linux_type) {
      this.linux_type = linux_type.linux_type;
      this.linux_down = this.linuxSDK[linux_type.linux_type];

    },
    async AndroidList() {
      const res_log = await LinuxDownloadMessageList();
      const resSDK = await LinuxSdkList();
      this.LinuxDownloadMessageList = res_log.results;
      const data = {};
      for (let item of resSDK.results) {
        if (!data[item.linux_type]) {
          data[item.linux_type] = [];
        }
        data[item.linux_type].push(item);
      }
      this.linuxSDK = data;
      console.log("data", data)
      return;

    }
  },
  beforeCreate() {

  },
  created() {
    this.AndroidList();
  },



}

</script>
<style scoped>
.el-tabs__content {
  padding: 15px 30px;
}
.el-tab-pane {
  height: 800px;
}
.link_a {
  display: flex;
  width: 50%;
  justify-content: center;
  background-color: #0396FF;
  border-radius: 30px;
  padding: 15px 20px;
  margin: 15px 0px;
}

.el-link {

  color: #fff;
}
</style>
