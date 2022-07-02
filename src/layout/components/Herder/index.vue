<template>
  <p><img src="../../../../public/1.jpg" alt=""></p>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
  
    <el-menu-item index="1"> <router-link to="/home">首页</router-link></el-menu-item>
    <el-menu-item index="2"> <router-link to="/Windows">Windows SDK</router-link></el-menu-item>
    <el-menu-item index="3"> <router-link to="/Linux">Linux SDK </router-link></el-menu-item>
    <el-menu-item index="4"> <router-link to="/Android">Android SDK </router-link></el-menu-item>
   <el-menu-item index="5"><router-link to="/test">Test 测试页面</router-link></el-menu-item>
  </el-menu>
</template>

<script setup>
import { ref } from "vue";

const activeIndex = ref("1");
const activeIndex2 = ref("1");
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath);
};
</script>

<style scoped>
.el-header>p{
  width:30%;

}
.el-header>p img{
  height: 70px;
}
.el-menu-demo{
  justify-content: flex-end;
  width: 100%;
   background-color: #393d49 !important;
   color: #fff !important;
}
.el-menu--horizontal{
  border:none;
}
.el-menu--horizontal>.el-menu-item.is-active{
  border-bottom: 5px solid var(--el-menu-active-color);
}
</style>
