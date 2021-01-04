<template>
<div class="box">
  <span>
    <a-card size="small" title="基本设置" style="width:900px; margin-left: 200" align="left">
    <template #extra><a href="#"></a></template>
    <br/><p><b>用户名</b></p>
    <a-input v-model:value="value1" placeholder="用户名" />
    <br/><br/><p><b>昵称</b></p>
    <a-input v-model:value="value2" placeholder="昵称" />
    <br/><br/><p><b>真实姓名</b></p>
    <a-input v-model:value="value3" placeholder="真实姓名" />
    <br/><br/><p><b>邮箱</b></p>
    <a-input v-model:value="value4" placeholder="邮箱" />
    <br/><br/><p><b>手机号</b></p>
    <a-input v-model:value="value5" placeholder="手机号" />
    <br/><br/><br/><h4><b>信用分: <span v-html="credit"></span></b></h4>
    <br/>
    <p><a-button type="primary">确认修改</a-button></p>
    </a-card>
    </span>
    <span style="position: absolute;right: 100px;top: 140px;">
    <a-avatar size="large">
        <template #icon><UserOutlined /></template>
      </a-avatar>
      <a-button type="primary">更换头像</a-button>
  </span>
</div>
<br/><br/><br/>
<a href="#" style="margin-left:0px">帮助</a>
    <a href="#" style="margin-left:200px">隐私</a>
    <a href="#" style="margin-left:200px">条款</a>
</template>

<style scoped>
    .box {
    width: 100%;
    height: 100%;
    text-align: justify;
    }
    .box:after {
    content: "";
    display: inline-block;
    overflow: hidden;
    width: 100%;
    }
    .box span {
    width: 100px;
    height: 100px;
    display: inline-block;
    text-align: center;
    line-height: 50px;
}
</style>

<script>

import { UserOutlined } from '@ant-design/icons-vue'

export default {
  components: { UserOutlined },
  data () {
    return {
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
      value6: '',
      credit: '80'
    }
  }
}
</script>
