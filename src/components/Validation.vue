<template>
  <el-form :model="ruleForm" status-icon ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="项目名称" prop="name">
      <el-input v-model.number="ruleForm.name" placeholder="选填项，可为空"></el-input>
    </el-form-item>
    <el-form-item label="销售姓名" prop="sale_name">
      <el-input v-model.number="ruleForm.sale_name" placeholder="选填项，可为空"></el-input>
    </el-form-item>
    <el-form-item label="客户姓名" prop="customer_name">
      <el-input v-model.number="ruleForm.customer_name" placeholder="选填项，可为空"></el-input>
    </el-form-item>
    <el-form-item label="电话号码" prop="phone">
      <el-input v-model.number="ruleForm.phone" placeholder="选填项，可为空"></el-input>
    </el-form-item>
    <el-form-item label="邮箱" prop="email">
      <el-input v-model.number="ruleForm.email" placeholder="选填项，可为空"></el-input>
    </el-form-item>
    <el-form-item label="设备型号" prop="type">
      <el-input v-model.number="ruleForm.type" placeholder="选填项，可为空"></el-input>
    </el-form-item>
    <el-form-item label="SDK名称" prop="sdk_name">
      <el-input v-model.number="ruleForm.sdk_name" placeholder="选填项，可为空"></el-input>
    </el-form-item>
    <el-form-item label="开发语言" prop="language">
      <el-input v-model.number="ruleForm.language" placeholder="选填项，可为空"></el-input>
    </el-form-item>
    <el-form-item label="开发需求" prop="content">
      <el-input v-model.number="ruleForm.content" type="textarea" placeholder="选填项，可为空"></el-input>
    </el-form-item>
    <el-form-item >
      <el-button  type="primary" @click="submitForm('ruleForm')">
        <el-link v-bind:href="url.downloadUrl" target="_blank">
          提交 </el-link>
      </el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>
<script >
import { ref } from "vue";
export default {
  props: {
    downloadUrl: String,
  },
  setup(props) {
    const url = props
    return {
      url
    }

  },
  data() {
    return {
      ruleForm: {
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
    submitForm() {
      console.log("123", this.ruleForm)
      //子调用父级方法
      this.$emit("handleClose");
    },
    resetForm() {
      this.ruleForm = {
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
      }
    },
  },
};
</script>
<style >

</style>