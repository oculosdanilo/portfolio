import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SobreMimView from '@/views/SobreMimView.vue'
import ProjetosView from '@/views/ProjetosView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/projetos',
      name: 'projetos',
      component: ProjetosView
    },
    {
      path: '/sobremim',
      name: 'sobremim',
      component: SobreMimView
    }
  ]
})

export default router