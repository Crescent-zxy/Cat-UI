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
  <h3>一句话打开 Dialog 示例</h3>
  <p>
    <Button @click="showDialog">函数打开 Dialog</Button>
  </p>
</template>

<script lang="ts">
import { ref } from "vue";
import Button from "../lib/Button.vue";
import Dialog from "../lib/Dialog.vue";
import { openDialog } from "../lib/openDialog";
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
    const showDialog = () => {
      openDialog({
        title: "提示",
        content: "你好",
        ok() {
          console.log("ok");
        },
        cancel() {
          console.log("cancel");
        },
      });
    };
    return { bool, toggle, f1, f2, showDialog };
  },
};
</script>