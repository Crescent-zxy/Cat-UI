<template>
  <div class="layout">
    <TopNav toggleAsideButtonVisible class="nav" />
    <div class="content">
      <aside v-if="asideVisible">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">开始使用</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
        </ol>
        <h2>其他作品</h2>
        <ol>
          <li>
            <router-link to="/doc/jiang-nan">江南百景图</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from "../components/TopNav.vue";
import { inject, Ref } from "vue";

export default {
  components: { TopNav },
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    return { asideVisible };
  },
};
</script>

<style lang="scss" scoped>
$aside-index: 10;
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 100px;
    padding-left: 240px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
    background: #f9f6f1;
    color: #370210;
  }
}
aside {
  background-color: #f9f6f1;
  width: 220px;
  padding: 16px 0;
  position: fixed;
  top: 30px;
  left: 0;
  padding-top: 70px;
  height: 100%;
  z-index: $aside-index;
  box-shadow: 5px 0 5px rgb(51 51 51 / 10%);
  > h2 {
    margin-bottom: 4px;
    padding: 5px 20px;
    font-weight: bold;
  }
  > ol {
    > li {
      > a {
        display: block;
        padding: 10px 30px;
        text-decoration: none;
        transition: all 250ms;
      }
      .router-link-active {
        color: #f29c9f;
        font-weight: bold;
        border-right: 5px solid #f29c9f;
        padding-left: 50px;
      }
    }
  }
}
main {
  overflow: auto;
}
</style> 