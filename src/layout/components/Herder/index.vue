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

  </el-menu>
</template>

<script >
import { watchEffect, ref, isRef, shallowRef } from "vue"
import { linuxTest, WindowsDownloadAddressListtest } from "@/services"
export default {
  setup() {

    // watchEffect(() => console.log("嘿嘿12323"))
  },
  data() {
    return {
      activeIndex: "home"
    };
  },
  watch: {
    //  监听路由变化
    "$route.params"(toParams, previousParams) {
      //  console.log("toParams", toParams)

    },
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
      let Tiele = sessionStorage.setItem('mykey', key)
      this.activeIndex = Tiele ? Tiele : this.activeIndex;
    },
    async test() {
      const res = await linuxTest();
      const res2 = await WindowsDownloadAddressListtest(1, 1)
      console.log("res2", res2);
      console.log(res);
    }
  },
  beforeCreate() {
    //  console.log("beforeCreate");

  },
  created() {
    console.log("created");
    console.log("activeIndex", this.activeIndex);
    const keyd = sessionStorage.getItem("mykey")
    this.activeIndex = keyd;
    this.test();


  },
  beforeMount() {

  },
  mounted() {
    // console.log("mounted");
  },
  beforeUpdate() {
    // console.log("beforeUpdate");
  },
  updated() {
    // console.log("updated");
  },
  beforeUnmount() {
    // console.log("beforeUnmount");
  },
  unmounted() {
    // console.log("unmounted");
  },
  errorCaptured() {
    // console.log("errorCaptured");
  },
  renderTracked() {
    // console.log("renderTracked");
  },
  renderTriggered() {
    // console.log("renderTriggered");
  },
  activated() {
    // console.log("activated");
  },
  deactivated() {
    // console.log("deactivated");
  },
  serverPrefetch() {
    // console.log("serverPrefetch");
  },
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
