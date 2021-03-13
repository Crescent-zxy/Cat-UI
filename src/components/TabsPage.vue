<template>
  <h1>Tabs 示例</h1>
  <Demo :component="TabsDemo1" />
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import TabsDemo1 from "./TabsDemo1.vue";
export default {
  components: { Demo },
  setup() {
    return { TabsDemo1 };
  },
};
</script>