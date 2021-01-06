<template>
  <a-card v-if="code_show" size="small" title="修改密码" style="width: 900px; margin-left:200px">
    <template #extra><a href="#"></a></template>
    <a-input v-model:value="password" placeholder="输入旧密码:" />
    <br/><br/><br/>
    <a-input v-model:value="new_password" placeholder="输入新密码:" />
    <br/><br/><br/>
    <a-input v-model:value="new_password_0" placeholder="确认新密码:" />
    <br/><br/><br/>
    <a href="#"><a-button v-on:click="oncheckPassword" type="primary" style="margin-right:0px;">确认</a-button></a>
    <br/><br/><br/><br/><br/>
    <a href="#" style="margin-left:0px">帮助</a>
    <a href="#" style="margin-left:200px">隐私</a>
    <a href="#" style="margin-left:200px">条款</a>
    </a-card>
</template>

<script>
import { checkPassword, setPassword } from '@/axios/user.js';
export default {
  data () {
    return {
      code_show: true,
      password: '',
      new_password: '',
      new_password_0: '',
      user_id: this.$store.user_id
    }
  },
  methods: {
    oncheckPassword (e) {
      const form_0 = {
        user_id: this.user_id,
        password: this.password
      };
      const form_1 = {
        user_id: this.user_id,
        password: this.new_password
      };
      checkPassword(form_0).then(response => {
        if (response.data.falg) {
          setPassword(form_1)
        }
      })
    }
  }
}
</script>
