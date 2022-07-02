<template>
  <p><img src="../../../../public/1.jpg" alt=""></p>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#736EFE"
    text-color="#fff"
    active-text-color="#ABDCFF"
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
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath);
};
</script>

<style scoped>
.el-header>p{
  width:30%;
display: flex;
justify-content: center;
}
.el-header>p img{
  height: 70px;
}
.el-menu-demo{
  justify-content:center;
  width: 100%;
   color: #fff !important;
}
.el-menu-item {
  padding: 0px;

}
.el-menu-item  a{
  display:inline-block;
  padding: 20px;
}
.el-menu--horizontal{
  border:none;
}
</style>
