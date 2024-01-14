<script setup lang="ts">
import { RouterView } from 'vue-router'
import BarMenu from '../components/BarMenu.vue'
import SideMenu from '../components/SideMenu.vue'
</script>

<template>
    <main class="main-layout">
        <BarMenu />
        <div class="main-layout__wrapper">
            <SideMenu />
            <RouterView />
        </div>
    </main>
</template>


<style scoped lang="scss">
.main-layout {

    &__wrapper {
        position: relative;
        display: grid;
        grid-template-columns: 280px 1fr;
    }
}
</style>