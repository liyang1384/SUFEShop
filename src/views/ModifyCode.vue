<template>
  <a-card size="small" title="修改密码" style="width: 600px; margin-left:200px">
    <template #extra><a href="#"></a></template>
    <a-input v-model:value="value1" placeholder="输入旧密码:" />
    <br/><a href="#" style="margin-left:400px">忘记密码</a><br/>
    <a-input v-model:value="value2" placeholder="输入新密码:" />
    <br/><br/>
    <a-input v-model:value="value3" placeholder="确认新密码:" />
    <br/><br/>
    <a-button type="primary" style="margin-right:0px;">登录</a-button>
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
      value1: '',
      value2: '',
      value3: ''
    }
  }
}
</script>
