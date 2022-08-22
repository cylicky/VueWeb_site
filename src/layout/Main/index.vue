<template>
  <Windows v-if="$route.params.layout == 'windows'" />
  <Linux v-if="$route.params.layout == 'linux'" />
  <Android v-if="$route.params.layout == 'android'" />
</template>
<script>
import Windows from "@/layout/Main/windows.vue";
import Linux from "@/layout/Main/linux.vue";
import Android from "@/layout/Main/android.vue";
export default {
  components: {
    Windows,
    Linux,
    Android,
  },
};
</script>
<style >
</style>
