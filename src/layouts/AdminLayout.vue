<template>
  <a-layout id="AdminLayout">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div style="width: 100%; display: flex; justify-content: center">
        <h1 class="title">财小二</h1>
      </div>
      <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
        <a-menu-item key="1">
          <router-link to="/admin">
            <ShoppingCartOutlined />
            <span>商品审核</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <router-link to="/admin/usermanagement">
            <UserSwitchOutlined />
            <span>用户管理</span>
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="admin-header">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined
          v-else
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content>
        <a-breadcrumb style="padding: 16px 24px">
          <a-breadcrumb-item>首页</a-breadcrumb-item>
          <a-breadcrumb-item>{{ breadcrumbItem }}</a-breadcrumb-item>
        </a-breadcrumb>
        <div style="padding: 0 16px 24px 24px">
          <router-view/>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserSwitchOutlined,
  ShoppingCartOutlined
} from '@ant-design/icons-vue';
export default {
  name: 'AdminLayout',
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserSwitchOutlined,
    ShoppingCartOutlined
  },
  data () {
    return {
      minHeight: window.innerHeight - 64 - 122,
      collapsed: false,
      selectedKeys: ['1']
    };
  },
  computed: {
    breadcrumbItem: function () {
      return this.selectedKeys[0] === '1' ? '商品审核' : '用户管理';
    }
  }
};
</script>

<style lang="scss" scoped>
#AdminLayout {
  .title {
    color: #fefefe;
    font-size: 25px;
    height: 64px;
    line-height: 64px;
    display: inline-block;
  }
  .admin-header {
    background: #fff;
    justify-content: flex-start;
  }
  .trigger {
    font-size: 18px;
    line-height: 64px;
    cursor: pointer;
    transition: color 0.3s;
  }
  .trigger:hover {
    color: #13c2c2;
  }
  .ant-menu-item-selected {
    background-color: #13c2c2;
  }
}
</style>
