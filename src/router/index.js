import { createRouter, createWebHistory } from 'vue-router'
import FirstVue from '../views/First.vue'
import SecondVue from '@/views/Second.vue'
import ThirdVue from '@/views/Third.vue'
import FourthVue from '@/views/Fourth.vue'
import FifthVue from '@/views/Fifth.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'first',
      component: FirstVue
    },
    {
      path: '/second',
      name: 'second',
      component: SecondVue
    },
    {
      path: '/third',
      name: 'third',
      component: ThirdVue
    },
    {
      path: '/fourth',
      name: 'fourth',
      component: FourthVue
    },
    {
      path: '/fifth',
      name: 'fifth',
      component: FifthVue
    },
  ]
})

export default router
