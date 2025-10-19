import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import {PlanModuleHomeView, PlanModuleRealGridView} from '@re-mes2/plan-module'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/planModule',
      name: 'hoplanModuleme',
      component: PlanModuleHomeView,
    },
        {
      path: '/planModuleRealGrid',
      name: 'planModuleRealGrid',
      component: PlanModuleRealGridView,
    },

  ],
})

export default router
