import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/modules/auth/ui/LoginView.vue')
    },
    {
      path: '/',
      component: () => import('@/modules/common/ui/layouts/MainLayout.vue'),
      children: [
        { path: '/', name: 'home', component: () => import('@/modules/home/ui/HomeView.vue') }
      ]
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/modules/user/ui/UserView.vue')
    }
  ]
})

export default router
