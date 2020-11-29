<!-- TODO: 添加响应式功能 -->
<template>
  <!-- Header部分 -->
  <a-layout-header id="header" style="position: fixed; zindex: 1; width: 100%">
    <!-- 组件间隙包裹 -->
    <a-space :size="spaceSize">
      <!-- 网站标题组件 -->
      <a-page-header title="财小二" />
      <!-- 导航菜单组件 -->
      <a-menu
        theme="dark"
        mode="horizontal"
        v-model:selectedKeys="selectedKeys"
        style="line-height: 64px"
      >
        <!-- 以列表形式渲染导航项目 -->
        <a-menu-item v-for="navRoute in navigationRoute" :key="navRoute.name">
          <!-- 嵌入 router link 网页链接-->
          <router-link :to="navRoute.path">
            {{ navRoute.name }}
          </router-link>
        </a-menu-item>
      </a-menu>
      <!-- 通知图标和用户头像图标 -->
      <a-space size="large">
        <a-avatar style="background-color: #001529">
          <template #icon>
            <BellOutlined />
          </template>
        </a-avatar>
        <a-avatar>
          <template #icon>
            <UserOutlined />
          </template>
        </a-avatar>
      </a-space>
    </a-space>
  </a-layout-header>
</template>

<script>
// 导入需要使用的图标组件
import { BellOutlined, UserOutlined } from '@ant-design/icons-vue'

// 导出本模块供其他组件使用
export default {
  // 命名本模块为 Header
  name: 'Header',
  // 注册导入的图标组件
  components: {
    BellOutlined,
    UserOutlined
  },
  // 设置响应式数据
  data () {
    return {
      navigationRoute: [{
        path: '/',
        name: '首页'
      }, {
        path: '/orderlist',
        name: '我的订单'
      }, {
        path: '/myfavourites',
        name: '我的收藏夹'
      }, {
        path: '/',
        name: '我的商品'
      }],
      selectedKeys: ['首页']
    }
  },
  methods: {},
  computed: {
    spaceSize: function () {
      return document.body.scrollWidth * 0.23
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#header {
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
