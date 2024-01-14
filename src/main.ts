import '../src/assets/style/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import { i18n } from '@/i18n'
import App from './App.vue'
import Router from './router'

const app = createApp(App)

app.use(i18n)
app.use(createPinia())
app.use(Router)
app.use(PrimeVue)

app.mount('#app')
