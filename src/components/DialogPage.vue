<template>
  <h2>Dialog 示例</h2>
  <hr />
  <p>
    <Button @click="toggle">toggle</Button>
    <Dialog
      v-model:visible="bool"
      :closeOnClickOverlay="false"
      :ok="f1"
      :cancel="f2"
    >
      <template v-slot:title>
        <h3>标题</h3>
      </template>
      <template v-slot:content>
        <p>第一行</p>
        <p>第二行</p>
      </template>
    </Dialog>
  </p>
</template>

<script lang="ts">
import { ref } from "vue";
import Button from "../lib/Button.vue";
import Dialog from "../lib/Dialog.vue";
export default {
  components: { Dialog, Button },
  setup() {
    const bool = ref(false);
    const toggle = () => {
      bool.value = !bool.value;
    };
    const f1 = () => {
      console.log("ok");
      return true;
    };
    const f2 = () => {
      return true;
    };
    return { bool, toggle, f1, f2 };
  },
};
</script>