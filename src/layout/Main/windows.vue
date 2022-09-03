<template>
  <div class="main-content">
    <div class="main-content-nav">
      <div v-for="(item, key) in subList" :key="key" @click="showDetail(item)">
        {{  item.name  }}
        <ul v-if="item.child">
          <li :class="sub.id == detail.id ? 'active' : ''" v-for="(sub, key) in item.child" :key="key">
            <router-link :to="`/${$route.params.layout}/${activeMenu}?id=${sub.id}&cid=${item.id}`">
              {{  sub.name  }}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="main-content-detail" v-html="detail.desc || ''"></div>
  </div>
</template>
<script>
import { windowsfunctionTest, windowsapiTest } from "@/services";

export default {
  data() {
    return {
      activeMenu: "eloamview",
      subList: [],
      detail: {},
      list: [
        {
          id: 1,
          name: "EloamView",
          desc: "<h2>简介</h2>\r\n\r\n<p>采用C++开发，将所有高拍仪功能封装成ocx控件</p>",
          create_at: "2021-06-08T01:17:51.243055+08:00",
        },
        {
          id: 2,
          name: "EloamDll",
          desc: "<h2>简介</h2>\r\n\r\n<p>提供dll进行对接</p>",
          create_at: "2021-06-08T01:20:44.675876+08:00",
        },
        {
          id: 3,
          name: "WebCamera",
          desc: "<h2>简介</h2>\r\n\r\n<p>将所有高拍仪功能封装成一个本地服务器（webCamera），当本地启动服务后，可以发送http请求，获取对应的接口数据</p>",
          create_at: "2021-06-08T01:22:13.258799+08:00",
        },
      ],
    };
  },
  watch: {
    "$route.params.subpage"(value, old) {
      this.activeMenu = value
    },
    "$route.query"(value, old) {
   
      this.setDetail(value);
    },
    activeMenu(value, old) {
      this.getList();
    },
  },
  mounted() {
    this.activeMenu = this.$route.params.subpage
      ? this.$route.params.subpage
      : "eloamview";
    this.getList();
  },
  methods: {
    setDetail(query) {
      const data = this.subList.filter(item => {
        return item.id == query.cid;
      })
      if (data[0] && data[0].child) {
        const datail = data[0].child.filter(item => {
          return item.id == query.id
        })
        this.detail = datail[0] || {};
      }
    },
    showDetail(data) {
      if (data) {
        this.getDetail(data.id);
      }
    },
    async getDetail(id) {
      try {
        console.log("id",id)
        const res = await windowsapiTest(id);
        console.log("res", res)
        for (let subitem of this.subList) {
          if (subitem.id == id) {
            subitem.child = res.results;
            if (this.$route.query && this.$route.query.id) {
              this.detail = res.results.filter(item => {
                return item.id == this.$route.query.id;
              })[0] || {};
            } else {
              this.detail = res.results[0];
            }
          }
        }
      } catch (error) {
        console.log("详细列表获失败", error);
      }

    },
    getCurrent() {
      // console.log("store", this.$store.state.a.list);
      // return this.$store.state.a.list.filter((value) => {
      //   return value.name.toLowerCase() == this.activeMenu;
      // })[0];
      return this.list.filter((value) => {
        return value.name.toLowerCase() == this.activeMenu;
      })[0];
    },
    async getList() {
      try {
        const current = this.getCurrent();
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