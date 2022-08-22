<template>
  <div class="home_main">
    <h2>windows</h2>
    <div class="main_detailed" v-for="res in windwos_list">
      <b>SDK--{{ res.name }}</b>
      <div v-html="res.desc"></div>
      <div v-if="res.name === 'EloamView'">
        <div>
          <b> 支持哪些语言？调用方式是什么？</b>
          <p>此SDK采用调用ocx控件接口的方式获取数据，所以主流语言都是支持的。包含但不限于：C++、C#、Java、Python、JavaScript、vue等。</p>
        </div>
        <div>
          <b> 适用场景</b>
          <p>无论您的项目是C/S架构，亦或者是B/S架构，都是支持的。由于现代浏览器都不支持ocx控件，所以浏览器只支持IE。</p>
        </div>
        <div>
          <b> SDK功能</b>
          <p>功能包含常规高拍仪功能（预览图像、拍照、旋转、纠偏、读取身份证等），人脸功能（活体检测、人证比对等），OCR功能等。 >>> 详细</p>
        </div>
      </div>
      <div v-else-if="res.name === 'EloamDll'">
        <div>
          <b> 支持哪些语言？调用方式是什么？</b>
          <p> 此SDK采用调用dll动态库的方式获取数据，所以主流语言都是支持的。包含但不限于：C++、C#、Java、Python等。</p>
        </div>
        <div>
          <b> 适用场景</b>
          <p> 此SDK适用于C/S架构软件开发</p>
        </div>
        <div>
          <b> SDK功能</b>
          <p> 功能包含常规高拍仪功能（预览图像、拍照、旋转、纠偏、读取身份证等），人脸功能（活体检测、人证比对等），OCR功能等。 >>> 详细</p>
        </div>

      </div>
      <div v-else-if="res.name === 'WebCamera'">
        <div>
          <b> 支持哪些语言？调用方式是什么？</b>
          <p> 此SDK采用http请求的方式获取数据，所以主流语言都是支持的。包含但不限于：C++、C#、Java、Python、JavaScript、vue等。</p>
        </div>
        <div>
          <b> 适用场景</b>
          <p> 此SDK适用于B/S架构软件开发，并支持多浏览器调用：谷歌、火狐、IE等。</p>
        </div>
        <div>
          <b> SDK功能</b>
          <p> 功能包含常规高拍仪功能（预览图像、拍照、旋转、纠偏、读取身份证等），人脸功能（活体检测、人证比对等），OCR功能等。 >>> 详细</p>
        </div>


      </div>
    </div>
  </div>
  <div class="home_main">
    <h2>Android</h2>
    <div class="main_detailed" v-for="res in android_list">
      <h5>{{ res.name }}</h5>
      <div v-html="res.desc"></div>
    </div>
  </div>
  <div class="home_main">
    <h2>Linux</h2>
    <div class="main_detailed" v-for="res in linux_list">
      <h5>{{ res.name }}</h5>
      <div v-html="res.desc"></div>
    </div>
  </div>
</template>
<script >
import { computed } from 'vue'
import { useStore } from "vuex";

import { ProductList, AndroidDownloadMessageList, WindowsDownloadMessageList, LinuxDownloadMessageList } from "@/services";


export default {
  setup() {
    const store = useStore();
    return {
      AndroidStore: computed(() => store.state),
      store
    };
  },
  data() {
    return {
      windwos_list: {},
      android_list: {},
      linux_list: {}
    };
  }, methods: {
    async listdata() {

      const windwos_res = await ProductList();
      const android_res = await AndroidDownloadMessageList();
      const linux_res = await LinuxDownloadMessageList();
      this.windwos_list = windwos_res.results;
      this.linux_list = linux_res.results;
      this.android_list = android_res.results;
      const res = {
        AndroidDownloadMessageList: android_res.results,
      }
      this.store.commit("androiddlist", res);

    }


  }, beforeCreate() {
    // console.log("beforeCreate");

  },
  created() {
    this.listdata();
    // console.log("created");

  },
  beforeMount() {
    // console.log("beforeMount");
    // this.android_list = this.AndroidStore.a.androiddlist.AndroidDownloadMessageList;
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
}



</script>

<style scoped>
.home_main {
  padding: 5px 80px;
  border-bottom: 2px dashed #0396FF;
}

.home_main h2 {
  font-size: 30px !important;
}

.main_detailed {
  padding: 10px 30px;
  margin: 3px 0;
  border: 1px solid #0396FF;
  border-radius: 10px;
}

.main_detailed:hover {
  /* font-size: 20px; */

}
</style>
