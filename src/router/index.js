import { createRouter, createWebHistory } from 'vue-router'
import UserLayout from '../layouts/UserLayout.vue'
import OrderList from '../views/OrderList.vue'
import HistoryList from '../views/HistoryList.vue'
import MyFavourites from '../views/MyFavourites.vue'
import CommodityDetail from '../views/CommodityDetail.vue'
import CreateOrder from '../views/CreateOrder.vue'
import UserView from '../views/UserView.vue'
import MessageView from '../views/MessageView.vue'
import Login from '../views/Login.vue'

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
      },
      {
        path: 'commoditydetail',
        name: 'CommodityDetail',
        component: CommodityDetail
      },
      {
        path: 'createorder',
        name: 'CreateOrder',
        component: CreateOrder
      },
      {
        path: '',
        name: 'userview',
        component: UserView
      },
      {
        path: 'messageview',
        name: 'messageview',
        component: MessageView
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
