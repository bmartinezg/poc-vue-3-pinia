<script setup lang="ts">
import { ref } from 'vue'
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import { useAuthStore } from '../../store'

const storeAuth = useAuthStore()
const emailInput = ref('')
const passwordInput = ref('')

const handleSubmitForm = async () => {
    storeAuth.increment()
}

</script>

<template>
    <div class="login-form">
        <form class="login-form__form" @submit.prevent="handleSubmitForm">
            <figure class="login-form__logo">
                <img src="/images/svgs/icono-white.svg" alt="">
            </figure>
            <InputText v-model="emailInput" :placeholder="$t('auth.loginForm.email')" size="large" type="email" />
            <InputText v-model="passwordInput" :placeholder="$t('auth.loginForm.password')" size="large" type="password" />
            <div class="login-form__actions">
                <Button @click="$router.push({ name: 'todo' })" label="Recuperar contraseña" plain text />
                <Button type="submit">{{ $t('auth.loginForm.email') }}</Button>
            </div>
        </form>
    </div>
</template>

<style scoped lang="scss">
.login-form {
    display: grid;
    align-items: center;
    padding: 32px;

    &__logo {
        width: 200px;
        height: auto;
    }

    &__form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 32px;
    }

    &__actions {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
}

/*
    Override Input Styles
*/
.p-inputtext {
    width: 100%;
}
</style>