<template>
  <a-layout id="RegisterLayout">
    <div class="title">财小二</div>
    <a-form :model="form" :wrapper-col="{ span: 24 }">
      <a-form-item>
        <a-input
          v-model:value="form.user_name"
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
          v-model:value="form.real_name"
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
import { postUserDetail } from '@/axios/user.js'
export default {
  name: 'Register',
  data () {
    return {
      wrapperCol: { span: 24 },
      form: {
        user_name: '',
        password: '',
        email: '',
        real_name: '',
        mobile: ''
      }
    };
  },
  methods: {
    onRegister (e) {
      postUserDetail(this.form)
        .then((response) => {
          const status_code = response.data.status_code
          if (status_code === 200) {
            // this.$router.push({ path: 'login' })
            this.$message.info('注册成功')
          }
        })
        .catch((error) => {
          console.log(error)
          this.$message.info('注册失败')
        });
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
