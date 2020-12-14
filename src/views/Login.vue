<template>
  <a-layout id="LoginLayout">
    <div class="title">财小二</div>
    <a-form :model="form" :wrapper-col="{ span: 24 }">
      <a-form-item>
        <a-input
          v-model:value="form.username"
          :maxlength="300"
          allow-clear
          placeholder="用户名"
        />
      </a-form-item>
      <a-form-item>
        <a-input-password
          v-model:value="form.password"
          :maxlength="300"
          allow-clear
          placeholder="密码"
        />
      </a-form-item>
      <a-form-item style="margin-bottom: 12px">
        <a-button type="primary" @click="onLogin" style="width: 100%">
          登录
        </a-button>
      </a-form-item>
      <a-form-item>
        <a-button type="link" style="float: right">
          <router-link to="/register">注册</router-link>
        </a-button>
      </a-form-item>
    </a-form>
  </a-layout>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      form: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    onLogin (e) {
      console.log(this.form.username);
    }
  }
};
</script>

<style lang="scss" scoped>
#LoginLayout {
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  .title {
    font-size: 30px;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 600;
    margin-bottom: 40px;
  }
}
</style>
