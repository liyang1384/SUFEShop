<template>
  <a-layout>
    <Header />
    <router-view />
  </a-layout>
</template>

<script>
import Header from '@/layouts/Header.vue'

export default {
  name: 'UserLayout',
  components: {
    Header
  }
}
</script>
