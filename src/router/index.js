import { createRouter, createWebHistory } from 'vue-router'
import FormView from '../views/FormView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: FormView
    },
    {
      path: '/main/:userObject',
      name: 'main',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      props: true,
      component: () => import('../views/MainView.vue')
    },
    {
      path: '/Movie/:idMovie',
      name: 'movie',
      props: true,
      component: () => import('../views/MovieView.vue')
    }
  ]
})

export default router
