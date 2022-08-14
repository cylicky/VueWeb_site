<script setup>
import { onBeforeMount, onMounted, onUpdated, onUnmounted } from "vue";
// onBeforeMount() : 组件挂载到节点上之前执行的函数；
onBeforeMount(() => {
  console.log("挂载之前去请求");
 
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

</script>

<template>
  <router-view />
</template>
<style scoped>
a {
  color: #42b983;
}
</style>
