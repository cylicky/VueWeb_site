<template>
  <div class="layui-bg-green">
    <div class="main_txt">
      <h1>{{ body_list.title }}</h1>
      <h2>{{ body_list.title2 }}</h2>
      <cite>{{ body_list.title3 }}</cite>
    </div>
  </div>
  <div>
    
  </div>
</template>
<script >
export default {
  data() {
    return {
      body_list: {
        title: "E l o a m",
        title2: "Eloam SDK 在线对接平台",
        title3: "多种对接方式,轻松对接。及时获取最新版SDK开发包。"
      }
    }
  }
};
</script>
<style >
.layui-bg-green {
  height: 500px;
  background-color: #009688;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}


.main_txt h1,
.main_txt h2,
.main_txt cite {
  display: flex;
  justify-content: center;
}

.main_txt h1 {
  font-size: 80px;
  padding: 20px 0;
}

.main_txt h2 {
  font-size: 50px;
  padding: 35px 0;
}
</style>
