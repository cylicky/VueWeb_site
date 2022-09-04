<template>
  {{ listdata.name }}
  <div class="dialog">
    <!-- 不透明遮罩 -->
    <div class="dialog-modal"></div>
    <!-- 主体 -->
    <div class="dialog-main">
      <div class="dialog-head">
        <button class="dialog-close-button icon-botton">x</button>
      </div>
      <!-- 内容区 -->
      <div class="dialog-body">
        <h3>用户信息留存</h3>
        <div>
          <label class="regist-label"> 项目名称：</label
          ><input
            type="text"
            v-model="listdata.name"
            placeholder="选填项，可为空"
          />
        </div>
        <div>
          <label class="regist-label"> 销售姓名：</label
          ><input
            type="text"
            v-model="listdata.sale_name"
            placeholder="选填项，可为空"
          />
        </div>
        <div>
          <label class="regist-label"> 客户姓名：</label
          ><input
            type="text"
            v-model="listdata.customer_name"
            placeholder="选填项，可为空"
          />
        </div>
        <div>
          <label class="regist-label"> 电话号码：</label
          ><input
            type="text"
            v-model="listdata.phone"
            placeholder="选填项，可为空"
          />
        </div>
        <div>
          <label class="regist-label"> 邮 箱：</label
          ><input
            type="text"
            v-model="listdata.email"
            placeholder="选填项，可为空"
          />
        </div>
        <div>
          <label class="regist-label"> 设备型号：</label
          ><input
            type="text"
            v-model="listdata.type"
            placeholder="选填项，可为空"
          />
        </div>
        <div>
          <label class="regist-label"> SDK名称：</label
          ><input
            type="text"
            v-model="listdata.sdk_name"
            placeholder="选填项，可为空"
          />
        </div>
        <div>
          <label class="regist-label"> 开发语言：</label
          ><input
            type="text"
            v-model="listdata.language"
            placeholder="选填项，可为空"
          />
        </div>
        <div>
          <label class="regist-label"> 开发需求：</label
          ><textarea
            type="textarea"
            v-model="listdata.content"
            placeholder="选填项，可为空"
          />
        </div>
        <div>
          <button class="dialog-close-button" @click="confirmReset">重置</button>
          <button class="dialog-close-button" @click="confirmModal">
            提交
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

 
<script>
export default {
  name: "modal",
  props: {},
  data() {
    return {
      listdata: {
        ip: "192.16.5.2",
        name: "",
        sale_name: "",
        customer_name: "",
        phone: "",
        email: "",
        type: "",
        sdk_name: "",
        language: "",
        content: "",
      },
    };
  },
  methods: {
    confirmModal() {
      console.log("listdata", this.listdata);
    },
    confirmReset() {
      this.listdata = {
        ip: "192.16.5.2",
        name: "",
        sale_name: "",
        customer_name: "",
        phone: "",
        email: "",
        type: "",
        sdk_name: "",
        language: "",
        content: "",
      };
    },
  },
};
</script>
 
<style>
.dialog {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
}
.dialog-main {
  min-width: unset;
  border-radius: 20px 20px 0 0;
  background: #fff4cf;
}
.dialog-main {
  transform: translateY(0);
  transition: 0.3s;
  min-width: 450px;
  min-height: 100px;
  position: relative;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);
  transform: translateY(10%);
}
.dialog-head {
  text-align: right;
}
.dialog-body {
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.dialog-body input {
  margin: 10px 0;
}
.dialog-body .regist-label {
  width: 70px;
  padding-top: 10px;
  float: left;
  white-space: nowrap;
}
.dialog-close-button {
  margin: 0 15px;
}
</style>