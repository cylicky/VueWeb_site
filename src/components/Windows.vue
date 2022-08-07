<template>
  <div v-if="key === 'windows'">
    <div class="winflex">
      <div
        class="button"
        v-for="(value, key) in source"
        :key="key"
        @click="changeActiveKey(key)"
      >
        {{ key }}
      </div>
    </div>

    <div>
      <div>
        <div
          v-for="(values, key) in source1[this.activeKey]"
          :key="key"
          @click="changeData(key)"
        >
          {{ values.name }}
          <div></div>
        </div>
      </div>
      <div>
        {{ this.source[this.activeKey] }}
      </div>
    </div>
  </div>
  <div v-if="key === 'linux'">linux</div>
  <div v-if="key === 'android'">android</div>
</template>
<script >
import { ref } from "vue";
import { getData, getTitle } from "@/services";

export default {
  data() {
    return {
      list: [],
      source: {},
      loading: false,
      key: "", //当前路由名称
      activeKey: "", //当前激活的一级菜单
      subData: {}, //二级菜单详情数据
      source1: {},
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
    async test() {
      const res = await getTitle();
      const data = {};
      for (let item of res.results) {
        if (!data[item.sdkname]) {
          data[item.sdkname] = [];
        }
        data[item.sdkname].push(item);
      }
      this.source1 = data;
      console.log(this.source1);
    },
    async fetchData(id) {
      try {
        const res = await getData(id);
        if (id === "windows") {
          const data = {};
          for (let item of res.results) {
            if (!this.activeKey) {
              this.activeKey = item.productname;
            }
            if (!data[item.productname]) {
              data[item.productname] = [];
            }
            if (data[item.productname].length === 0) {
              this.subData[item.productname] = item;
            }
            data[item.productname].push(item);
          }
          this.source = data;
          return;
        }
      } catch (error) {
        console.log(id, error);
      } finally {
        this.loading = true;
      }
    },
    // 切换一级菜单
    changeActiveKey(key) {
      console.log(key);
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
    this.key = this.$route.params.id;
    this.test();
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
  height: 35px;
  line-height: 35px;
  padding: 5px;
}
</style>
