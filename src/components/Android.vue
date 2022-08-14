<script >
import { computed,ref } from "vue";
import { useStore } from "vuex";
import test from "./test.vue";
import {
  AndroidAppList,
  AndroidSdkList,
  AndroidDownloadMessageList,
} from "@/services";
export default {
  setup() {
    const store = useStore();
   
    return {
      AndroidStore: computed(() => store.state),
      store,
      
    };
  },
  data() {
    return {
      count: 1,
      AndroidList_data: {},
      AndroidSdkList_data: {},
      android_data: {},
      dialogVisible: false,
    };
  },
  methods: {
    async AndroidList() {
      const android_res = await AndroidDownloadMessageList();
      const AndroidList_res = await AndroidAppList();
      const AndroidSdkList_res = await AndroidSdkList();
      this.AndroidList_data = AndroidList_res.results;
      this.AndroidSdkList_data = AndroidSdkList_res.results;
      this.android_data = android_res.results;
    },
    handleOpen() {
      console.log(this.dialogVisible);
      this.dialogVisible = true;
      
    },
    handleClose(){
      this.dialogVisible = false;
    
    }
  },
  beforeCreate() {
    console.log("beforeCreate--- 实例初始化完成之后立即调用");
  },
  created() {
    console.log("created--- 组件实例处理完所有与状态相关的选项后调用");
    this.AndroidList();
  },
  beforeMount() {
    console.log("beforeMount--- 组件被挂载之前调用。");
  },
  mounted() {
    console.log("mounted--- 组件被挂载之后调用。");
  },
  beforeUpdate() {
    console.log(
      "beforeUpdate--- 组件即将因为一个响应式状态变更而更新其 DOM 树之前调用"
    );
  },
  updated() {
    console.log(
      "updated--- 在组件因为一个响应式状态变更而更新其 DOM 树之后调用。"
    );
  },
  beforeUnmount() {
    console.log("beforeUnmount--- 在一个组件实例被卸载之前调用。");
  },
  unmounted() {
    console.log("unmounted--- 在一个组件实例被卸载之后调用。");
  },
};
</script>

<template>
  <el-tabs type="border-card" class="demo-tabs">
    <el-tab-pane label="下载说明">
      <button @click="handleOpen">点击</button>
      <!-- <test v-show="dialogVisible"></test> -->

      <el-dialog
        title="提示"
       v-model="dialogVisible"
        width="50%"
        center
      >
        <test ></test>
        <span  class="dialog-footer">
          <el-button @click="handleClose">取 消</el-button>
          <el-button type="primary" @click="handleClose"
            >确 定</el-button
          >
        </span>
      </el-dialog>
      <div v-for="item in android_data">
        <div v-html="item.desc"></div>
        <div>
          <p>&nbsp;</p>
          <p><strong>打开高拍仪【</strong>openCamera<strong>】</strong></p>

          <p>功能包含：</p>

          <p>
            1.高拍仪打开方式：使用UVC协议打开高拍仪，支持打开彩色摄像头、支持打开黑白摄像头、支持同时打开多个摄像头。<br />
            2.图片合成：左右合成、上下合成<br />
            3.图片操作：图片压缩、添加水印、设置图片格式，拍照保存
          </p>

          <p>&nbsp;</p>

          <p><strong>读身份证【</strong>IDCardReader<strong>】</strong></p>

          <p>
            功能包含：读取身份证内容：姓名、性别、年龄、出生年月日、户籍地、签发机关
          </p>

          <p>&nbsp;</p>

          <p>
            <strong>纠偏裁边【</strong>RectifyingAndCutEdge<strong>】</strong>
          </p>

          <p>
            功能包含：单纠（单张图片自动框选中单个物品）、多久（单张图片自动框选中多个物品）、图片合成
          </p>

          <p>&nbsp;</p>

          <p>
            <strong>指纹仪【</strong>zaz_V8a_(20200105)_androidstudio<strong
              >】</strong
            >
          </p>

          <p>
            功能包含：打开指纹仪、关闭指纹仪、录制指纹、搜索指纹、清除指纹、上传图像、上传特征、下载特征
          </p>

          <p>&nbsp;</p>

          <p><strong>四合一【</strong>fourInOne<strong>】</strong></p>

          <p>功能包含：读取身份证、读取社保卡、读取磁条卡、读取IC卡</p>

          <p>&nbsp;</p>

          <p><strong>人证比对【</strong>WithnessCheck<strong>】</strong></p>

          <p>
            <strong>签批屏和评价器【</strong>DrawingBoardView<strong>】</strong>
          </p>

          <p><strong>密码键盘【</strong>NumberKeyboard<strong>】</strong></p>

          <p>&nbsp;</p>
          <p>
            *：如果您需要使用人证比对功能，请使用带有IC的高拍仪，如果高拍仪不带IC，请联系销售更换成带IC的高拍仪
          </p>
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="APP下载">
      <div class="appdata" v-for="item in AndroidList_data">
        <el-link v-bind:href="item.download" target="_blank">
          {{ item.name }}</el-link
        >
      </div>
    </el-tab-pane>
    <el-tab-pane label="SDk下载">
      <div class="appdata" v-for="item in AndroidSdkList_data">
        <el-link v-bind:href="item.download" target="_blank">
          {{ item.name }}</el-link
        >
      </div>
    </el-tab-pane>
  </el-tabs>
</template>
<style scoped>
.appdata a {
  display: inline-block;
  height: 50px;
  width: 160px;
  text-decoration: none;
  background-color: #0396ff;
  color: #fff;
  border-radius: 30px;
  line-height: 50px;
  text-align: center;
}

.el-link.is-underline:hover:after {
  border-bottom: none;
}

.appdata {
  margin: 5px 0;
}
</style>
