<template>
  <a-card v-if="code_show" size="small" title="忘记密码" style="width: 600px; margin-left:200px">
    <template #extra><a href="#"></a></template>
    <a-input v-model:value="value1" placeholder="输入注册邮箱:" />
    <br/><br/>
    <a-input v-model:value="value1" placeholder="输入验证码:" />
    <a href="#"><a-button type="primary" style="position: absolute;right: 10px;top: 103px;">获取验证码</a-button></a>
    <br/><br/>
    <a-input v-model:value="value2" placeholder="输入新密码:" />
    <br/><br/>
    <a-input v-model:value="value3" placeholder="确认新密码:" />
    <br/><br/>
    <a href="#"><a-button type="primary" style="margin-right:0px;">确认</a-button></a>
    <br/><br/><br/><br/><br/>
    <a href="#" style="margin-left:0px">帮助</a>
    <a href="#" style="margin-left:200px">隐私</a>
    <a href="#" style="margin-left:200px">条款</a>
    </a-card>
</template>

<script>
export default {
  data () {
    return {
      code_show: true,
      value1: '',
      value2: '',
      value3: ''
    }
  }
}
</script>
