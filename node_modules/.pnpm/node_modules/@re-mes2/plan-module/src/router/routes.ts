
import type { RouteRecordRaw } from "vue-router";

export default [
{
    path: '/planModuleRealGrid',
    name: 'planModuleRealGrid',
    component: () => import('../views/DxRealGrid.vue'),
  },
{
    path: '/planModule', 
    name: 'planModuleDxGrid',
    component: () => import('../views/HelloWorld.vue'),
  },
] as RouteRecordRaw[];