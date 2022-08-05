<script setup>
import { ref, getCurrentInstance } from "vue"
import Header from "@/layout/components/Herder/index.vue";
import PageMain from "@/layout/components/PageMain/index.vue";
const instance = getCurrentInstance()
let ceshis = function (e) {
  console.log(instance);
  console.log(e);
}


</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header >
        <Header ref="stateab" msg="nihaohashd" @test="ceshis" ></Header>
      </el-header>
      <el-main>
        <PageMain />
      </el-main>
      <el-footer>© 2018 新良田 粤ICP备09092426号-3</el-footer>
    </el-container>
  </div>
</template>
<style scoped>
.el-main {
  padding: 0px;
  overflow: hidden;
}

footer {
  background-color: #0396FF !important;
  color: #fff;
  height: 50px;
  line-height: 50px;
  display: flex;
  justify-content: center;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #736EFE !important;
  color: #fff;
  height: 99px;
  overflow: hidden;
}
</style>
