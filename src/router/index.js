import { createRouter, createWebHistory } from 'vue-router'
import UserLayout from '../layouts/UserLayout.vue'
import OrderList from '../views/OrderList.vue'
import HistoryList from '../views/HistoryList.vue'
import MyFavourites from '../views/MyFavourites.vue'
import CommodityDetail from '../views/CommodityDetail.vue'
import ModifyCommodityDetail from '../views/ModifyCommodityDetail.vue'
import CreateOrder from '../views/CreateOrder.vue'
import PayOrder from '../views/PayOrder.vue'
import RefundReview from '../views/RefundReview.vue'
import OrderReview from '../views/OrderReview.vue'
import RefundAppeal from '../views/RefundAppeal.vue'
import ModifyCode from '../views/ModifyCode.vue'
import OrderInformation from '../views/OrderInformation.vue'
import PersonalPage from '../views/PersonalPage.vue'
import UserView from '../views/UserView.vue'
import MessageView from '../views/MessageView.vue'
import Login from '../views/Login.vue'
import ForgetCode from '../views/ForgetCode.vue'
import CommodityPublish from '../views/CommodityPublish.vue'
import CommodityList from '../views/CommodityList.vue'
import Register from '../views/Register.vue'
import AdminLayout from '../layouts/AdminLayout.vue'

const routes = [
  {
    path: '/',
    name: 'UserLayout',
    component: UserLayout,
    children: [
      {
        path: 'forgetcode',
        name: 'ForgetCode',
        component: ForgetCode
      },
      {
        path: 'personalpage',
        name: 'PersonalPage',
        component: PersonalPage
      },
      {
        path: 'orderinformation',
        name: 'OrderInformation',
        component: OrderInformation
      },
      {
        path: 'modifycode',
        name: 'ModifyCode',
        component: ModifyCode
      },
      {
        path: 'refundappeal',
        name: 'RefundAppeal',
        component: RefundAppeal
      },
      {
        path: 'orderreview',
        name: 'OrderReview',
        component: OrderReview
      },
      {
        path: 'refundreview',
        name: 'RefundReview',
        component: RefundReview
      },
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
        path: 'commoditydetail/:id',
        name: 'CommodityDetail',
        component: CommodityDetail
      },
      {
        path: 'modifycommoditydetail',
        name: 'ModifyCommodityDetail',
        component: ModifyCommodityDetail
      },
      {
        path: 'createorder/:id',
        name: 'CreateOrder',
        component: CreateOrder
      },
      {
        path: 'payorder/:id',
        name: 'PayOrder',
        component: PayOrder
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
      },
      {
        path: 'commoditypublish/:id',
        name: 'commoditypublish',
        component: CommodityPublish
      },
      {
        path: 'commoditylist',
        name: 'commoditylist',
        component: CommodityList
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/admin',
    name: 'AdminLayout',
    component: AdminLayout,
    children: [
      {
        path: '',
        name: 'CommodityReview',
        component: () => import('@/views/CommodityReview')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
