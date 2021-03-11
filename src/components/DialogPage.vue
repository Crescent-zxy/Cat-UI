<template>
  <h2>Dialog 示例</h2>
  <hr />
  <p>
    <Button @click="toggle">toggle</Button>
    <Dialog :visible="bool"></Dialog>
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
    return { bool, toggle };
  },
};
</script>