import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
//import {PlanModuleHomeView, PlanModuleRealGridView} from '@re-mes2/plan-module'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
//import {sharedRoute3} from '@re-mes2/plan-module'

import type { RouteRecordRaw } from 'vue-router';

type PathMap = Record<string, { default: RouteRecordRaw[] }>;

// 모든 모듈의 routes.ts 자동 import
const modules = import.meta.glob<PathMap>(
  '../../../../packages/**/src/**/routes.ts',
  { eager: true }
);

interface MenuItem {
  name: string;
  path: string;
  moduleName: string;
}

const menuList: MenuItem[] = [
  { name: "planModule",      path: "planModule",      moduleName: "plan-module" },
  { name: "planModuleRealGrid", path: "planModuleRealGrid", moduleName: "plan-module" },
  // { name: "workOrderGrid",   path: "workOrderGrid",   moduleName: "workorder-module" },
  // { name: "workOrderRealGrid", path: "workOrderRealGrid", moduleName: "workorder-module" },
];

function filterMapByModules(
  map: PathMap,
  menuList: MenuItem[]
): PathMap {
  const result: PathMap = {};
  for (const key in map) {
    // key: import.meta.glob에서 생성된 파일 경로
    const entry = map[key];
    if (menuList.some(menu =>
      key.includes(menu.moduleName) || key.includes(menu.path)
    )) {
      result[key] = entry;
    }
  }
  return result;
}

const filteredModules = filterMapByModules(modules, menuList);

console.log('filteredModules',filteredModules)
// let modules2;
// if(moduleName == "workorder-module") {
//   modules2 = import.meta.glob("../../../../packages/workorder-module/src/**/routes.ts", { eager: true }) as Record<
//   string,
//   { default: RouteRecordRaw[] }
// >;
// }

// 2️⃣ 모든 layout 컴포넌트 자동 import
const layoutModules = import.meta.glob("@/layouts/**/*.vue", { eager: true });

// layout 이름 → 컴포넌트 매핑
const layoutMap: Record<string, any> = {};
for (const [path, module] of Object.entries(layoutModules)) {
  const name = path.split("/").pop()?.replace(".vue", "")!;
  layoutMap[name] = (module as any).default;
}

// 3️⃣ 문자열 meta.layout → 실제 layout 컴포넌트로 변환
const dynamicRoutes: RouteRecordRaw[] = Object.values(filteredModules).flatMap((mod) =>
  mod.default.map((route) => {
    const layoutKey = route.meta?.layout as string | undefined;
    const layoutComponent = layoutKey && layoutMap[layoutKey] ? layoutMap[layoutKey] : layoutMap["DefaultLayout"];

    return {
      ...route,
      meta: {
        ...(route.meta || {}),
        layout: layoutComponent, // 실제 컴포넌트로 교체
      },
    };
  })
);

console.log('dynamicRoutes', dynamicRoutes)
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
     ...dynamicRoutes,
      {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'home' }
  }
    // {
    //   path: '/about',
    //   name: 'about',
    //     // route level code-splitting
    //     // this generates a separate chunk (About.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () => import('../views/AboutView.vue'),
    //     meta: {
    //     // meta field 추가
    //     layout: DefaultLayout,
    //   },
    // },
    // {
    //   path: '/planModuleRealGrid',
    //   name: 'planModuleRealGrid',
    //     // route level code-splitting
    //     // this generates a separate chunk (About.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () => import('@re-mes2/plan-module').then(m=>m['PlanModuleRealGridView']),
    //     meta: {
    //     // meta field 추가
    //     layout: DefaultLayout,
    //   },
    // }
  ],
})
import { defineAsyncComponent } from 'vue';




//console.log('sharedRoute3 eeee', sharedRoute3 )
//sharedRoute3.forEach((route) => router.addRoute(route));

console.log('router', router)
export default router
