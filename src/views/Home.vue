<template>
  <div class="homePage">
    <TopNav />
    <div class="banner">
      <h1>CatUI</h1>
      <h2>一个基于 Vue3 的 UI 框架</h2>
      <p class="actions">
        <a href="">GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from "../components/TopNav.vue";
export default {
  components: { TopNav },
};
</script>

<style lang="scss" scoped>
.homePage {
  background: linear-gradient(
    145deg,
    rgba(254, 211, 225, 1) 0%,
    rgba(251, 171, 187, 1) 100%
  );
}
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: #fff;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 8px;
    }
  }
}
</style> 