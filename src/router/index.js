// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/',
        name: 'Todo',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Todo.vue'),
      },
      {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "home" */ '@/views/About.vue'),
      },
      {
        path: '/pictures',
        name: 'Gallery',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Pictures.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
