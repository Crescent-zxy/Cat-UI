<template>
  <h1>Switch 示例</h1>
  <Demo :component="SwitchDemo1" />
  <Demo :component="SwitchDemo2" />
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import SwitchDemo1 from "../components/SwitchDemo1.vue";
import SwitchDemo2 from "../components/SwitchDemo2.vue";

export default {
  components: { Demo },
  setup() {
    return { SwitchDemo1, SwitchDemo2 };
  },
};
</script>