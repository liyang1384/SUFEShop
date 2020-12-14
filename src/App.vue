<template>
  <a-config-provider :locale="locale">
    <router-view />
  </a-config-provider>
</template>

<script>
import zhCN from 'ant-design-vue/es/locale/zh_CN'

export default {
  name: 'App',
  data () {
    return {
      locale: zhCN
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
