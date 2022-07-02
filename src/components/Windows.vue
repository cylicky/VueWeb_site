<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="下载说明" name="InstruCtions">下载说明 </el-tab-pane>
    <el-tab-pane label="EloamView" name="first">EloamView </el-tab-pane>
    <el-tab-pane label="EloamDll" name="second">EloamDll </el-tab-pane>
    <el-tab-pane label="WebCamera" name="third">WebCamera</el-tab-pane>
  </el-tabs>
</template>
<script setup>
import { ref } from "vue";

const activeName = ref("InstruCtions");
const handleClick = (tab, event) => {
  console.log(tab, event);
};
</script>
<style scoped>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
