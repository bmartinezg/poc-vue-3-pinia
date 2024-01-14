<script setup lang="ts">
import LoginForm from './components/LoginForm.vue'
</script>

<template>
    <main class="login-view">
        <figure class="login-view__cover">
            <img src="https://images.unsplash.com/photo-1696075513508-6c057e89f72b?auto=format&fit=crop&q=80&w=1287&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="home cover image" loading="lazy">
        </figure>
        <LoginForm />
    </main>
</template>

<style scoped lang="scss">
.login-view {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100%;

    &__cover {
        background-color: red;
        overflow: hidden;
        max-height: 100vh;
        object-fit: cover;
    }
}
</style>