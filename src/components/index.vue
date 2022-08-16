<template>
  <div v-if="key === 'windows'">
    <div class="winflex">
      <div class="button" v-for="(value, key) in source" :key="key" @click="changeActiveKey(value[0].id)">
        {{ key }}
      </div>
    </div>
    <!-- <div v-for="(value, key) in secondkey" :key="key"> -->
    <el-col :span="16">
      <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" :unique-opened="true" :router="true"
        @close="handleClose" v-for="(value, key) in secondkey" :key="key">
        <el-sub-menu :index="String(value.id)">
          <template #title>
            <el-icon>
              <location />
            </el-icon>
            <span>{{ value.name }}</span>
          </template>
          <el-menu-item-group v-for="(value, key) in itemkey" :key="key">
            <el-menu-item :index='"/windows/"+value.id' @click="kkkk()">{{ value.name }}</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
    </el-col>
    <div >
     <router-view />
    </div>
    <!-- </div> -->

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
import Doc from "./Doc.vue"
import { FunctionductLis, ProductList, ApiductList } from "@/services";
export default {
  data() {
    return {
      source: {},
      loading: false,
      key: "", //当前路由名称
      activeKey: "", //一级菜单
      secondkey: {},
      itemkey: {}
    };
  },
  watch: {
    // 监听路由变化
    "$route.params"(toParams, previousParams) {
      this.key = toParams.id;
      this.fetchData(toParams.id);
    },
  },
  methods: {
    kkkk() {
      console.log(123)
    },
    async handleOpen(key, keypath) {
      console.log(key)
      const res = await ApiductList(key);
      this.itemkey = res.results;
      console.log(res.results);
    },
    handleClose(key, keypath) {
      console.log(key)
    },
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
