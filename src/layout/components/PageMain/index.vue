<script setup>
import { ref, onBeforeMount, onMounted, onUpdated, onUnmounted } from "vue";
import axios from "axios";
import { useStore, mapState } from "vuex";

const store = useStore();

// onBeforeMount() : 组件挂载到节点上之前执行的函数；
onBeforeMount(() => {
  console.log("挂载之前去请求");
  // axios.get("/findHomePageCard").then((res) => console.log(res));
  console.log(store.state.count);
  store.commit("increment", 10);
  console.log(store.state.count);
  // console.log(this.$store.state.count);
});
// onMounted() : 组件挂载完成后执行的函数；
// onBeforeUpdate(): 组件更新之前执行的函数；
// onUpdated(): 组件更新完成之后执行的函数；
// onBeforeUnmount(): 组件卸载之前执行的函数；
// onUnmounted(): 组件卸载完成后执行的函数；

// 组件挂载完成后执行的函数；
onMounted(() => {
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

const cuntdata = () => {
  store.commit("increment");
};
const Reduction = () => {
  store.commit("Reduction");
};
const doneTodos = () => {
  store.commit("doneTodos");
  console.log(store.state.a.todos);
};
const disoatchdata = () => {
  store.dispatch("actionA").then((s) => console.log(s));
};
</script>

<template>
  <!-- <button @click="cuntdata()">增加</button>
<button @click="Reduction()">减一</button>
<button @click="doneTodos()">为真显示出来</button>
<button @click="disoatchdata()">disoatch</button>
  <div>{{ store.state.a.count }}</div>
  <div>{{ store.state.a.todos }}</div> -->
  <router-view />
</template>
<style scoped>
a {
  color: #42b983;
}
</style>
