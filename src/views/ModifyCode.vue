<template>
  <a-card v-if="code_show" size="small" title="修改密码" style="width: 900px; margin-left:200px">
    <template #extra><a href="#"></a></template>
    <a-input v-model:value="password" placeholder="输入旧密码:" />
    <span v-if="check_right === '0'"><br/><br/>原密码错误</span>
    <br/><br/><br/>
    <a-input v-model:value="new_password" placeholder="输入新密码:" />
    <span v-if="check_same === '0'"><br/><br/>两次输入的新密码不一致</span>
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
      check_same: '1',
      check_right: '1',
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
      if (this.new_password === this.password) {
        checkPassword(form_0).then(response => {
          if (response.data.falg === '1') {
            setPassword(form_1)
          } else {
            this.check_right = '0'
          }
        })
      } else {
        this.check_same = '0'
      }
    }
  }
}
</script>
