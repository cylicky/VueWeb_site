<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="下载说明" name="InstruCtions">
      为什么SDK下载下来是exe？


      SDK包涉及到控件的注册、模块驱动的安装等操作，为了简化对接的复杂度，方便您快速的对接集成，我们是将SDK打包成exe了，这样做到了一键操作部署环境，所以您下载下来后是一个exe执行程序。双击exe进行安装，安装后的文件夹就是SDK对接集成需要的文件。




      为什么每种SDK开发包都有多个下载地址？它们有什么区别？我应该下载哪一个SDK开发包？


      由于人脸库、ocr库文件比较大，有的项目中是不需要使用到这些库的，所以我们将同一种SDK开发包会打包成多个包，您需要使用哪些功能下载对应的SDK开发包就可以了。



      SDK开发包我们会打包成四种：
      1.开发包名称_版本号
      2.开发包名称_版本号_faceDetect
      3.开发包名称_版本号_ocr
      4.开发包名称_版本号_faceDetect_ocr


      四种SDK开发包的区别：
      1.高拍仪基础包，包含除去人脸功能+ocr功能的所有功能。
      2.高拍仪基础包的基础上添加人脸功能。
      3.高拍仪基础包的基础上添加ocr功能
      4.高拍仪基础包的基础上添加人脸功能+ocr功能


      您只需要根据您的项目需求，下载对应的SDK包即可。



      *：如果您需要使用身份证功能，除了下载对应的SDK包，还需要硬件高拍仪配备身份证模块，才可以使用此功能

      *：如果您需要使用指纹功能，除了下载对应的SDK包，还需要硬件高拍仪配备模块模块，才可以使用此功能

      *：如果您需要使用人脸功能，除了下载对应的SDK包，还需要硬件高拍仪配备人脸芯片，才可以使用此功能




      如果现有的SDK开发包不满足我的功能，我应该怎么做？


      如果现有SDK的功能不能满足您的项目需求，您可以联系销售人员（高拍仪卖家）提出您的需求，由销售人员填写立项单交给研发部定制开发。




      如果demo出现bug，我可以提Issues吗？


      可以的，如果您测试出demo中的bug，亦或者您对demo有什么好的建议，都是可以前往对应的demo仓库中提Issues的。Issues标题要求：SDK名称 - 开发语言 - 功能接口 - 问题。

    </el-tab-pane>
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
.demo-tabs>.el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
