<!-- TODO: 添加响应式功能 -->
<template>
  <!-- Header部分 -->
  <a-layout-header id="header" style="position: fixed; z-index: 1; width: 100%">
    <!-- 导航菜单组件 -->
    <a-menu
      theme="dark"
      mode="horizontal"
      v-model:selectedKeys="selectedKeys"
      style="line-height: 64px; display: flex"
    >
      <a-menu-item class="header-title">财小二</a-menu-item>
      <span style="flex-grow: 1"></span>
      <!-- 以列表形式渲染导航项目 -->
      <a-menu-item v-for="navRoute in navigationRoute" :key="navRoute.name">
        <!-- 嵌入 router link 网页链接-->
        <router-link :to="navRoute.path">
          {{ navRoute.name }}
        </router-link>
      </a-menu-item>
      <span style="flex-grow: 1"></span>
      <!-- 通知图标和用户头像图标 -->
      <a-menu-item>
        <a-avatar style="background-color: #001529">
          <template #icon>
            <router-link to="/messageview">
              <BellOutlined />
            </router-link>
          </template>
        </a-avatar>
      </a-menu-item>
      <a-menu-item>
        <a-avatar>
          <template #icon>
            <router-link to="/messageview">
              <img v-if="$store.avatar" :src="$store.avatar.url" alt="avatar" />
              {{ $store.user_name }}
            </router-link>
          </template>
        </a-avatar>
      </a-menu-item>
    </a-menu>
  </a-layout-header>
</template>

<script>
// 导入需要使用的图标组件
import { BellOutlined } from '@ant-design/icons-vue'

// 导出本模块供其他组件使用
export default {
  // 命名本模块为 Header
  name: 'UserHeader',
  // 注册导入的图标组件
  components: {
    BellOutlined
  },
  // 设置响应式数据
  data () {
    return {
      navigationRoute: [
        {
          path: '/',
          name: '首页'
        },
        {
          path: '/orderlist',
          name: '我的订单'
        },
        {
          path: '/myfavourites',
          name: '我的收藏夹'
        },
        {
          path: '/commoditylist',
          name: '我的商品'
        }
      ],
      selectedKeys: ['首页']
    }
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#header {
  flex-direction: row;
  justify-content: space-around;
  .header-title {
    color: white;
    font-weight: 600;
    font-size: 20px;
  }
  .ant-menu-item .anticon{
    margin-right: 0
  }
}
</style>

<style lang="scss">
#header {
  .ant-page-header-heading-title {
    color: white;
  }
  .ant-menu-item-selected {
    background-color: #001529;
  }
}
</style>
