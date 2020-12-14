<template>
  <a-layout id="RegisterLayout">
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
      <a-form-item>
        <a-input
          v-model:value="form.email"
          :maxlength="300"
          allow-clear
          placeholder="邮箱"
        />
      </a-form-item>
      <a-form-item>
        <a-input
          v-model:value="form.realname"
          :maxlength="300"
          allow-clear
          placeholder="姓名"
        />
      </a-form-item>
      <a-form-item>
        <a-input
          v-model:value="form.mobile"
          :maxlength="300"
          allow-clear
          placeholder="手机号"
        />
      </a-form-item>
      <a-form-item label="性别" :label-col="{ span: 5 }" :wrapper-col="{ span: 18 }">
        <a-radio-group v-model:value="form.sex">
          <a-radio value="MALE"> 男 </a-radio>
          <a-radio value="FEMALE"> 女 </a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item style="margin-bottom: 12px">
        <a-button type="primary" @click="onRegister" style="width: 100%">
          注册
        </a-button>
      </a-form-item>
      <a-form-item>
        <a-button type="link" style="float: right">
          <router-link to="/login">登录</router-link>
        </a-button>
      </a-form-item>
    </a-form>
  </a-layout>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      wrapperCol: { span: 24 },
      form: {
        username: '',
        password: '',
        email: '',
        realname: '',
        mobile: '',
        sex: undefined
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
#RegisterLayout {
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
