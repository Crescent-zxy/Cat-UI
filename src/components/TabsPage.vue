<template>
  <h2>Tabs 示例</h2>
  <hr />
  <h3>示例1</h3>
  <p>
    <Tabs v-model:selected="key">
      <TabPane title="导航1">内容1</TabPane>
      <TabPane title="导航2222">内容2</TabPane>
    </Tabs>
  </p>
</template>

<script lang="ts">
import Tabs from "../lib/Tabs.vue";
import TabPane from "../lib/TabPane.vue";
import { ref } from "vue";
export default {
  components: { Tabs, TabPane },
  setup() {
    const key = ref("导航1");
    return { key };
  },
};
</script>