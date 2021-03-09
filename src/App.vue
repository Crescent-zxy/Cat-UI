<template>
  <router-view />
</template>

<script lang="ts">
import { provide, ref } from "vue";
import { router } from "./router";

export default {
  name: "App",
  setup() {
    const width = document.documentElement.clientWidth;
    const asideVisible = ref(width > 500 ? true : false);
    provide("asideVisible", asideVisible);
    router.afterEach((to, from) => {
      if (width <= 500) {
        asideVisible.value = false;
      }
    });
  },
};
</script>
