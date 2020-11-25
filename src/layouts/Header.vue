<template>
  <a-layout-header id="header" style="padding: 0;">
    <a-space :size="spaceSize">
      <a-page-header title="财小二" />
      <a-menu
        theme="dark"
        mode="horizontal"
        v-model:selectedKeys="selectedKeys"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item v-for="navRoute in navigationRoute" :key="navRoute.name">
          <router-link :to="navRoute.path">
            {{ navRoute.name }}
          </router-link>
        </a-menu-item>
      </a-menu>
      <a-space size='large'>
        <a-avatar>
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
import { BellOutlined, UserOutlined } from '@ant-design/icons-vue'
export default {
  name: 'Header',
  components: {
    BellOutlined,
    UserOutlined
  },
  data () {
    return {
      navigationRoute: [{
        path: '/',
        name: '首页'
      }, {
        path: '/',
        name: '我的订单'
      }, {
        path: '/',
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
