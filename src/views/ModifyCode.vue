<template>
  <a-card v-if="code_show" size="small" title="修改密码" style="width: 900px; margin-left:200px">
    <template #extra><a href="#"></a></template>
    <a-input v-model:value="value1" placeholder="输入旧密码:" />
    <a href="#" style="margin-left:800px">忘记密码</a><br/><br/>
    <a-input v-model:value="value2" placeholder="输入新密码:" />
    <br/><br/><br/>
    <a-input v-model:value="value3" placeholder="确认新密码:" />
    <br/><br/><br/>
    <a href="#"><a-button v-on:click="code_show=false" type="primary" style="margin-right:0px;">确认</a-button></a>
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
