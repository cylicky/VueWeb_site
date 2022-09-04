<template>
  <Windows v-if="$route.params.layout == 'windows'" />
  <Linux v-if="$route.params.layout == 'linux'" />
  <Android v-if="$route.params.layout == 'android'" />
 <WinDownload v-if="$route.params.layout == 'windowsdownload'"/>
</template>
<script>
import Windows from "@/layout/Main/windows.vue";
import Linux from "@/layout/Main/linux.vue";
import Android from "@/layout/Main/android.vue";
import WinDownload from "@/layout/Main/windownload.vue";
export default {
  components: {
    Windows,
    Linux,
    Android,
    WinDownload
  },
};
</script>
<style >
</style>
