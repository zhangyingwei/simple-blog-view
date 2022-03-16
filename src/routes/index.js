import {createRouter,createWebHashHistory} from 'vue-router'

const routes = [
  {path: "/",component: () => import('@/views/main/Index.vue')},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router