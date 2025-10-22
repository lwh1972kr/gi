import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
//import {PlanModuleHomeView, PlanModuleRealGridView} from '@re-mes2/plan-module'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import {sharedRoute3} from '@re-mes2/plan-module'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
      // meta field 추가
      layout: DefaultLayout,
    },
    },
    {
      path: '/about',
      name: 'about',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/AboutView.vue'),
        meta: {
        // meta field 추가
        layout: DefaultLayout,
      },
    },
    {
      path: '/planModuleRealGrid',
      name: 'planModuleRealGrid',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@re-mes2/plan-module').then(m=>m['PlanModuleRealGridView']),
        meta: {
        // meta field 추가
        layout: DefaultLayout,
      },
    }
  ],
})
import { defineAsyncComponent } from 'vue';




console.log('sharedRoute3 eeee', sharedRoute3 )
//sharedRoute3.forEach((route) => router.addRoute(route));

console.log('router', router)
export default router
