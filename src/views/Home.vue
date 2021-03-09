<template>
    <div>
        <Topnav />
        <div class="banner">
            <h1>CatUI</h1>
            <h2>一个基于 Vue3 的 UI 框架</h2>
            <p class="actions">
                <a href="">GitHub</a>
                <a href="">开始</a>
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue'
export default {
    components: { Topnav }
}
</script>