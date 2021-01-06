<template>
  <a-layout-header theme="light">
      <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="toggleCollapse"/>
  </a-layout-header>
</template>

<script>
export default {
  name: 'AdminHeader',
  props: ['collapsed'],
  data () {
    return {}
  },
  computed: {
  },
  methods: {
    toggleCollapse () {
      this.$emit('toggle-collapse')
    }
  }
}
</script>
