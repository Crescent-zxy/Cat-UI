<template>
  <div class="topnav">
    <div
      v-if="toggleAsideButtonVisible"
      class="toggleAside"
      @click="toggleAside"
    >
      <img src="../../images/favicon.png" alt="" width="32" height="32" />
    </div>
    <router-link to="/" class="logo">
      <img src="../../images/cat-logo.png" alt="" width="48" height="48" />
    </router-link>
    <ul class="menu">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";

export default {
  props: {
    toggleAsideButtonVisible: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value;
    };
    return { toggleAside };
  },
};
</script>

<style lang="scss" scoped>
$color: #fcf0e6;
.topnav {
  background-color: #f29c9f;
  color: $color;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  box-shadow: 0 5px 5px rgb(51 51 51 / 10%);
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
      a:hover {
        text-decoration: none;
      }
    }
  }
  > .toggleAside {
    display: none;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>