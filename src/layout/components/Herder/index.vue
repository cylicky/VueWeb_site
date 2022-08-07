<template>
  <p><a href="https://eloam.cn/"><img src="../../../../public/1.jpg" alt="" /></a></p>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#736EFE"
    text-color="#fff" active-text-color="#ABDCFF" @select="handleSelect">
    <el-menu-item index="1">
      <router-link to="/home">首页</router-link>
    </el-menu-item>
    <el-menu-item index="2">
      <router-link to="/windows">Windows SDK</router-link>
    </el-menu-item>
    <el-menu-item index="3">
      <router-link to="/linux">Linux SDK </router-link>
    </el-menu-item>
    <el-menu-item index="4">
      <router-link to="/android">Android SDK </router-link>
    </el-menu-item>
    <el-menu-item index="5">
      <router-link to="/test">Test 测试页面</router-link>
    </el-menu-item>
  </el-menu>
  <!-- {{ props.msg }}
  <button @click="tttt()">组件你好</button> -->
</template>

<script setup>
import { ref, onBeforeMount, onMounted, onUpdated, onUnmounted } from "vue";
import { useStore, mapState } from "vuex";
const store = useStore();
let a = 1, b = 2;
defineExpose({
  a, b
})
let activeIndex = ref("1");
const props = defineProps({
  msg: String
})
let emit = defineEmits(['test']);
let tttt = function () {
  console.log("heheh")
  emit('test', activeIndex.value);
}


// onBeforeMount() : 组件挂载到节点上之前执行的函数； 挂载之前去请求
onBeforeMount(() => {
  let Tiele = sessionStorage.getItem('mykey')
  activeIndex.value = Tiele ? Tiele : ref("1");
});
// onMounted() : 组件挂载完成后执行的函数；
// onBeforeUpdate(): 组件更新之前执行的函数；
// onUpdated(): 组件更新完成之后执行的函数；
// onBeforeUnmount(): 组件卸载之前执行的函数；
// onUnmounted(): 组件卸载完成后执行的函数；

// 组件挂载完成后执行的函数；
onMounted(() => {
  console.log(store.state.a.count);
  console.log("mounted!");

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
  height: 70px;
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
