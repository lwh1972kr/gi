
import type { RouteRecordRaw } from "vue-router";

export default [
{
    path: '/workOrderGrid',
    name: 'planModulworkOrderGrideRealGrid',
    component: () => import('../views/DxRealGrid.vue'),
  },
{
    path: '/workOrderRealGrid', 
    name: 'workOrderRealGrid',
    component: () => import('../views/HelloWorld.vue'),
  },
] as RouteRecordRaw[];