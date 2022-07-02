<script setup>
import Header from "@/layout/components/Herder/index.vue";
import PageMain from "@/layout/components/PageMain/index.vue";
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header style="padding: 0px">
          <Header />
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
  height: 70px;
  line-height: 70px;
  display: flex;
justify-content:center;
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
