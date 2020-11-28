import { createRouter, createWebHistory } from 'vue-router'
import UserLayout from '../layouts/UserLayout.vue'
import OrderList from '../views/OrderList.vue'

const routes = [
  {
    path: '/',
    name: 'UserLayout',
    component: UserLayout,
    children: [
      {
        path: 'orderlist',
        name: 'OrderList',
        component: OrderList
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
