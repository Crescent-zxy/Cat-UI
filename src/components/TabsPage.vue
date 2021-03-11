<template>
  <h2>Tabs 示例</h2>
  <hr />
  <h3>示例1</h3>
  <p>
    <Tabs>
      <TabPane title="导航1">内容1</TabPane>
      <TabPane title="导航2">内容2</TabPane>
    </Tabs>
  </p>
</template>

<script lang="ts">
import Tabs from "../lib/Tabs.vue";
import Tab from "../lib/TabPane.vue";
export default {
  components: { Tabs, Tab },
};
</script>