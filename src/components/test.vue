

<template>
  <div>
    <label>项目名称</label> <input type="text">
    <button onclick="tijiao()">提交</button>
  </div>
</template>
<script >


export default {

  data() {
    return {

    }
  },
  methods: {
    resetForm() {
      if (!formEl) return
      formEl.resetFields()
    },
    submitForm() {
      if (!formEl) return
      formEl.validate((valid) => {
        if (valid) {
          console.log('submit!')
        } else {
          console.log('error submit!')
          return false
        }
      })
    }
  },
  beforeCreate() {
    console.log("beforeCreate--- 实例初始化完成之后立即调用")
  },
  created() {
    console.log("created--- 组件实例处理完所有与状态相关的选项后调用");
    this.AndroidList();
  },
  beforeMount() {
    console.log("beforeMount--- 组件被挂载之前调用。")
  },
  mounted() {
    console.log("mounted--- 组件被挂载之后调用。")
  },
  beforeUpdate() {
    console.log("beforeUpdate--- 组件即将因为一个响应式状态变更而更新其 DOM 树之前调用")

  },
  updated() {
    console.log("updated--- 在组件因为一个响应式状态变更而更新其 DOM 树之后调用。")

  },
  beforeUnmount() {
    console.log("beforeUnmount--- 在一个组件实例被卸载之前调用。")
  },
  unmounted() {
    console.log("unmounted--- 在一个组件实例被卸载之后调用。")
  }
}

</script>
<style >
</style>
