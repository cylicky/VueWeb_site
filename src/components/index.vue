<template>
  <div v-if="key === 'windows'">

    <div class="winflex">
      <div class="button" v-for="(value, key) in source" :key="key" @click="changeActiveKey(value[0].id)">
        {{ key }}
      </div>
    </div>
    <div v-for="(value, key) in secondkey" :key="key">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link" >
         {{ value.name }}
         
        </span>
        <template #dropdown slot="dropdown-methods">
          <el-dropdown-menu>
            <el-dropdown-item>Action 1</el-dropdown-item>
            <el-dropdown-item>Action 2</el-dropdown-item>
            <el-dropdown-item>Action 3</el-dropdown-item>
            <el-dropdown-item disabled>Action 4</el-dropdown-item>
            <el-dropdown-item divided>Action 5</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>

     
    </div>
  </div>
  <div v-if="key === 'linux'">
    <Linux></Linux>
  </div>
  <div v-if="key === 'android'">
    <Android></Android>
  </div>
</template>
<script >
import Linux from "./Linux.vue"
import Android from "./Android.vue"
import { FunctionductLis, ProductList, } from "@/services";
export default {
  data() {
    return {
      source: {},
      loading: false,
      key: "", //当前路由名称
      activeKey: "", //一级菜单
      secondkey: {}
    };
  },
  watch: {
    // 监听路由变化
    "$route.params"(toParams, previousParams) {
      console.log("路由", toParams.id);
      this.key = toParams.id;
      this.fetchData(toParams.id);
    },
  },
  methods: {
    async fetchData(id) {
      if (id) {
        try {
          if (id === "windows") {
            const res = await ProductList();
            const data = {};
            for (let item of res.results) {
              if (!data[item.name]) {
                data[item.name] = [];
              }
              data[item.name].push(item);
            }

            this.source = data;
            return;
          } else if (id === "linux") {

          } else if (id === "android") {

          }
        } catch (error) {
          console.log(id, error);
        } finally {
          this.loading = true;
        }
      }
    },
    async getFunctionductLis(key) {
      const res = await FunctionductLis(key);
      this.secondkey = res.results
    },
    // 切换一级菜单
    changeActiveKey(key) {
      this.getFunctionductLis(key);

      this.activeKey = key;
    },
    // 切换二级菜单数据
    changeData(data) {
      console.log(data);
      // this.subData[this.activeKey] = data;
    },
  },
  beforeCreate() {
    // console.log("beforeCreate");
  },
  created() {
    // console.log("created");
    this.fetchData(this.$route.params.id);
    this.getFunctionductLis(1);
    this.key = this.$route.params.id;


  },
  beforeMount() {
    // console.log("beforeMount");
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
  errorCaptured() {
    // console.log("errorCaptured");
  },
  renderTracked() {
    // console.log("renderTracked");
  },
  renderTriggered() {
    // console.log("renderTriggered");
  },
  activated() {
    // console.log("activated");
  },
  deactivated() {
    // console.log("deactivated");
  },
  serverPrefetch() {
    // console.log("serverPrefetch");
  },
};
</script>
<style scoped>
.winflex {
  display: flex;
}

.button {
  height: 30px;
  line-height: 30px;
  padding: 5px;
  border: 1px solid #736EFE;
  background-color: #736EFE;
  color: #fff;
  margin: 3px 10px 3px 0;
}


.demo-tabs>.el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.demo-tabs .custom-tabs-label .el-icon {
  vertical-align: middle;
}

.demo-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}

.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
