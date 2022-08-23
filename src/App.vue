<script>
import Nav from "@components/Nav/index.vue";
import Footer from "@components/Footer/index.vue";

import { windowsproductTest } from "@/services";
export default {

  components: {
    Nav,
    Footer,
  },
  mounted() {
    this.getList();
  },
  methods: {
    async getList() {
      const res = await windowsproductTest();
      this.$store.commit("activeMenu", res.results);
    },
  },
};

</script>

<template>
  <Nav />
  <router-view />
  <Footer />
</template>

<style>
</style>
