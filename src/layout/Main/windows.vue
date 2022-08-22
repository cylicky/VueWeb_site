<template>
  <div class="main-content">
    <div class="main-content-nav">
      <div v-for="(item, key) in subList" :key="key" @click="showDetail(item)">
        {{ item.name }}
        <ul v-if="item.child">
          <li
            :class="sub.id == detail.id ? 'active' : ''"
            v-for="(sub, key) in item.child"
            :key="key"
          >
            <router-link
              :to="`/${$route.params.page}/${activeMenu}?id=${sub.id}&cid=${item.id}`"
            >
              {{ sub.name }}</router-link
            >
          </li>
        </ul>
      </div>
    </div>
    <div>api 详情</div>
  </div>
</template>
<script>
import { windowsfunctionTest } from "@/services";
export default {
  data() {
    return {
      activeMenu: "eloamview",
      subList: [],
      detail: {},
    };
  },
  watch: {
    "$route.params.subpage"(value, old) {
        console.log("subpage",value)
      this.activeMenu = value || "eloamview";
    },
    activeMenu(value, old) {
      this.getList();
    },
  },
  mounted() {
    this.activeMenu = this.$route.parms
      ? this.$route.parms.subpage
      : "eloamview";
      console.log("mounted123",this.activeMenu )
    this.getList();
  },
  methods: {
    showDetail(data) {
      console.log("data", data);
      if (data) {
        this.getDetail(data.id);
      }
    },
    getDetail(id) {
      console.log(id);
    },
    getCurrent() {   
        console.log("store",this.$store.state.a.list);
      return this.$store.state.a.list.filter((value) => {
        return value.name.toLowerCase() == this.activeMenu;
      })[0];
    },

    async getList() {
      try {
        const current = this.getCurrent();
        console.log("current",current);
        if (!current) {
          return;
        }
        const res = await windowsfunctionTest(current.id);
        this.subList = res.results;
      } catch (err) {
        console.log("api 下拉菜单数据拿去失败", err);
      }
    },
  },
};
</script>