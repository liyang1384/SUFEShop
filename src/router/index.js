import { createRouter, createWebHistory } from 'vue-router'
import UserLayout from '../layouts/UserLayout.vue'
import OrderList from '../views/OrderList.vue'
import HistoryList from '../views/HistoryList.vue'
import MyFavourites from '../views/MyFavourites.vue'
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
      },
      {
        path: 'myfavourites',
        name: 'MyFavourites',
        component: MyFavourites
      },
      {
        path: 'historylist',
        name: 'historylist',
        component: HistoryList
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
