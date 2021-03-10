<template>
  <div>Button 示例</div>
  <hr />
  <h2>theme 示例</h2>
  <p>
    <Button @click="onClick">你好</Button>
    <Button theme="button">你好</Button>
    <Button theme="link">你好</Button>
    <Button theme="text">你好</Button>
  </p>
  <h2>size 示例</h2>
  <p>
    <Button size="big">大大大</Button>
    <Button>普普通</Button>
    <Button size="small">小小小</Button>
  </p>
  <p>
    <Button theme="link" size="big">大大大</Button>
    <Button theme="link">普普通</Button>
    <Button size="small" theme="link">小小小</Button>
  </p>
  <p>
    <Button size="big" theme="text">大大大</Button>
    <Button theme="text">普普通</Button>
    <Button size="small" theme="text">小小小</Button>
  </p>
  <h2>level 示例</h2>
  <p>
    <Button level="main">主要按钮</Button>
    <Button>普通按钮</Button>
    <Button level="danger">危险按钮</Button>
  </p>
  <p>
    <Button theme="link" level="main">主要链接按钮</Button>
    <Button theme="link">普通链接按钮</Button>
    <Button theme="link" level="danger">危险链接按钮</Button>
  </p>
  <p>
    <Button theme="text" level="main">主要文字按钮</Button>
    <Button theme="text">普通文字按钮</Button>
    <Button theme="text" level="danger">危险文字按钮</Button>
  </p>
  <h2>disabled 示例</h2>
  <p>
    <Button disabled>禁用按钮</Button>
    <Button theme="link" disabled>禁用链接按钮</Button>
    <Button theme="text" disabled>禁用按钮</Button>
  </p>
  <h2>loading 示例</h2>
  <p>
    <Button loading>加载中</Button>
    <Button>加载完毕</Button>
  </p>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: { Button },
  setup() {
    const onClick = () => {
      console.log("hi");
    };
    return { onClick };
  },
};
</script>