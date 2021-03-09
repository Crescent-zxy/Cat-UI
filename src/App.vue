<template>
  <div>导航栏 | 
    <router-link to="/">Home</router-link>
  </div>
  <hr />
  <router-view />
</template>

<script>
export default {
  name: 'App',
}
</script>
