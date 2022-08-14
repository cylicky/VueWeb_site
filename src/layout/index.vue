<script setup>
import Header from "@/layout/components/Herder/index.vue";
import PageMain from "@/layout/components/PageMain/index.vue";
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-main>
        <PageMain />
      </el-main>
    </el-container>
  </div>
</template>
<style scoped>
.el-main {
  padding: 0px;
  overflow: hidden;
}



header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0396FF !important;
  color: #fff;
  height: 99px;
  overflow: hidden;
}
</style>
