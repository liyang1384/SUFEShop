<template>
  <a-layout>
    <Header />
    <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
      <div
        style="
          background: #fff;
          padding: 24px;
          margin: 40px 0;
          minheight: 600px;
        "
      >
        <router-view />
      </div>
    </a-layout-content>
  </a-layout>
</template>

<script>
import Header from '@/layouts/UserHeader.vue'

export default {
  name: 'UserLayout',
  components: {
    Header
  }
}
</script>
