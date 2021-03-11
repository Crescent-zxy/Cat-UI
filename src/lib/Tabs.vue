<template>
  <div v-for="(t, index) in titles" :key="index">{{ t }}</div>
  <component v-for="(c, index) in defaults" :is="c" :key="index" />
</template>

<script lang="ts">
import TabPane from "./TabPane.vue";
export default {
  setup(props, context) {
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== TabPane) {
        throw new Error("Tabs 子标签必须是 TabPane");
      }
    });
    const titles = defaults.map((tag) => tag.props.title);
    return { defaults, titles };
  },
};
</script>