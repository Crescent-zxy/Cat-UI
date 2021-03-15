<template>
  <h1>Button 示例</h1>
  <Demo :component="ButtonDemo1" />
  <Demo :component="ButtonDemo2" />
  <Demo :component="ButtonDemo3" />
  <Demo :component="ButtonDemo4" />
  <Demo :component="ButtonDemo5" />
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import ButtonDemo1 from "./ButtonDemo1.vue";
import ButtonDemo2 from "./ButtonDemo2.vue";
import ButtonDemo3 from "./ButtonDemo3.vue";
import ButtonDemo4 from "./ButtonDemo4.vue";
import ButtonDemo5 from "./ButtonDemo5.vue";
export default {
  components: { Demo },
  setup() {
    return {
      ButtonDemo1,
      ButtonDemo2,
      ButtonDemo3,
      ButtonDemo4,
      ButtonDemo5,
    };
  },
};
</script>

<style lang="scss">
.border {
  border-bottom: 1px solid rgb(217, 217, 217);
}
</style>