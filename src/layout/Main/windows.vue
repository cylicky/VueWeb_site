<template>
  <div class="main-content">
    <div class="main-content-nav">
      <div
        v-for="(item, key) in subList"
        :key="key"
        @click="showDetail(item)"
        class="menu-item"
      >
        <div
          @click="toggle(item)"
          :class="`menu-item_title ${
            substate.includes(item.id) ? 'active' : ''
          }`"
        >
          {{ item.name }}
        </div>
        <ul
          v-if="item.child"
          :class="substate.includes(item.id) ? 'active' : ''"
        >
          <li
            :class="sub.id == detail.id ? 'active' : ''"
            v-for="(sub, key) in item.child"
            :key="key"
          >
            <router-link
              :to="`/${$route.params.layout}/${activeMenu}?id=${sub.id}&cid=${item.id}`"
            >
              {{ sub.name }}</router-link
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="main-content-detail" v-html="detail.desc || ''"></div>
    <div class="main-download"><router-link to="/windowsdownload">开发包下载{{ activeMenu }}</router-link> </div>
  </div>
</template>
<script>
import {
  windowsfunctionTest,
  windowsapiTest,
  windowsproductTest,
} from "@/services";

export default {
  data() {
    return {
      activeMenu: "eloamview",
      subList: [],
      detail: {},
      substate: [],
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
      this.activeMenu = value;
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
    async dropDown() {
      const res = await windowsproductTest();
      this.list = res.results;
    },
    toggle(item) {
      if (this.substate.includes(item.id)) {
        this.substate = this.substate.filter((id) => id !== item.id);
      } else {
        this.substate.push(item.id);
      }
    },
    setDetail(query) {
      this.substate.push(query.cid);
      const data = this.subList.filter((item) => {
        return item.id == query.cid;
      });
      if (data[0] && data[0].child) {
        const datail = data[0].child.filter((item) => {
          return item.id == query.id;
        });
        this.detail = datail[0] || {};
      }
    },
    showDetail(data) {
      if (!data.child) {
        this.getDetail(data.id);
      }
    },
    async getDetail(id) {
      try {
        const res = await windowsapiTest(id);
        for (let subitem of this.subList) {
          if (subitem.id == id) {
            subitem.child = res.results;
            if (this.$route.query && this.$route.query.id) {
              this.detail =
                res.results.filter((item) => {
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
        //默认打开第一项
        this.getDetail(res.results[0].id);
        this.substate.push(res.results[0].id);
      } catch (err) {
        console.log("api 下拉菜单数据拿去失败", err);
      }
    },
  },
};
</script>