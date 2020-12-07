<template>
  <a-layout id="LoginLayout">
    <a-form>
      <a-form-item label="用户名">
        <a-input
          v-model:value="form.username"
          :maxlength="300"
          allow-clear
          @change="onChange"
        />
      </a-form-item>
    </a-form>
  </a-layout>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      form: {
        username: ''
      }
    }
  },
  methods: {
    onChange (e) {
      console.log(this.form.username)
    }
  }
}
</script>

<style lang="scss" scoped>
#LoginLayout{
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
}
</style>
