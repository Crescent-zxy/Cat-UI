<demo>
常规使用
</demo>
<template>
  <Tabs v-model:selected="x">
    <TabPane title="导航1">内容1</TabPane>
    <TabPane title="导航2">内容2</TabPane>
  </Tabs>
</template>

<script lang="ts">
import Tabs from "../lib/Tabs.vue";
import TabPane from "../lib/TabPane.vue";
import { ref } from "vue";
export default {
  components: {
    Tabs,
    TabPane,
  },
  setup() {
    const x = ref("导航1");
    return {
      x,
    };
  },
};
</script>