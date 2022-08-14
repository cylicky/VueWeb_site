<template>
  <p><a href="https://eloam.cn/"><img src="../../../../public/eloamlogo.jpg" alt="" /></a></p>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#0396FF "
    text-color="#fff" active-text-color="#ABDCFF" @select="handleSelect">
    <el-menu-item index="home">
      <router-link to="/home">首页</router-link>
    </el-menu-item>
    <el-menu-item index="windows">
      <router-link to="/windows">Windows SDK</router-link>
    </el-menu-item>
    <el-menu-item index="linux">
      <router-link to="/linux">Linux SDK </router-link>
    </el-menu-item>
    <el-menu-item index="android">
      <router-link to="/android">Android SDK </router-link>
    </el-menu-item>
    <el-menu-item index="test">
      <router-link to="/test">test SDK </router-link>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import { ref, onBeforeMount, onMounted, onUpdated, onUnmounted } from "vue";
let activeIndex = ref("home");


// onBeforeMount() : 组件挂载到节点上之前执行的函数； 挂载之前去请求
onBeforeMount(() => {
  let Tiele = sessionStorage.getItem('mykey')
  activeIndex.value = Tiele ? Tiele : ref("home");
});
// onMounted() : 组件挂载完成后执行的函数；
// onBeforeUpdate(): 组件更新之前执行的函数；
// onUpdated(): 组件更新完成之后执行的函数；
// onBeforeUnmount(): 组件卸载之前执行的函数；
// onUnmounted(): 组件卸载完成后执行的函数；

// 组件挂载完成后执行的函数；
onMounted(() => {
 
 // console.log("mounted!");

});
// 组件更新完成之后执行的函数；
onUpdated(() => {
  console.log("updated!");

});
//组件卸载完成后执行的函数；
onUnmounted(() => {
  console.log("unmounted!");
});

const handleSelect = (key, keyPath) => {
  //保存当前用户点击的哪一个导航栏
  sessionStorage.setItem('mykey', key)
};


</script>

<style scoped>
.el-header>p {
  width: 30%;
  display: flex;
  justify-content: center;
}

.el-header>p img {
  height: 50px;
  border: none;
}

.el-menu-demo {
  justify-content: flex-end;
  width: 100%;
  color: #fff !important;
}

.el-menu-item {
  padding: 0px;

}

.el-menu-item a {
  display: inline-block;
  padding: 20px;
}

.el-menu--horizontal {
  border: none;
}
</style>
