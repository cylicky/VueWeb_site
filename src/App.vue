<script>
import Nav from "@components/Nav/index.vue";
import Footer from "@components/Footer/index.vue";
export default {
  components: {
    Nav,
    Footer,
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
