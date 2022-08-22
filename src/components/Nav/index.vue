<template>
  <header class="site-nav">
    <a href="http://elam.cn/" target="_blank"
      ><img src="/eloamlogo.jpg" alt=""
    /></a>
    <menu>
      <router-link
        :to="{ path: '/home' }"
        :class="$route.path.replace('/', '') === 'home' ? 'active' : ''"
      >
        首页
      </router-link>
      <router-link
        :class="
          item.name.toLowerCase() === $route.params.layout ? 'active' : ''
        "
        :to="'/' + item.name.toLowerCase()"
        v-for="(item, index) in list"
        :key="index"
        >{{ item.name }}
        <div v-if="item.child">
          <router-link
            :to="`/${item.name.toLowerCase()}/${sub.name.toLowerCase()}`"
            v-for="(sub, key) in activeMenu"
            :key="key"
            >{{ sub.name }}</router-link
          >
        </div>
      </router-link>
    </menu>
  </header>
</template>
<script>
import { windowsproductTest } from "@/services";
export default {
  data() {
    return {
      activeMenu: {},
      list: [
        {
          id: 1,
          name: "Windows",
          child: true,
        },
        {
          id: 2,
          name: "Linux",
        },
        {
          id: 3,
          name: "Android",
        },
      ],
    };
  },
  watch: {},
  mounted() {
    this.getList();
  },
  methods: {
    async getList() {
      const res = await windowsproductTest();
      this.activeMenu = res.results;
      this.$store.commit("activeMenu",res.results);
    },
  },
};
</script>
