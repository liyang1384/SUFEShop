<template>
  <a-card title="退款申请" style="width: 1200px">
    <template #extra><a href="#"></a></template>
    <a-card size="small" title="退款商品信息" style="width: 1200px">
    <template #extra><a href="#"></a></template>
    <img src="../assets/image1.png" style="width: 120px; height: 100px;margin-right:0px" align="left" />
    <div style="position: absolute;right: 300px;top: 60px;">
    <p>商品类别：草莓</p>
    <p>卖家名称：sortedList</p>
    <p>支付方式：支付宝 <img src="../assets/alipayimg.png" style="width:30px;lenght:30px"></p>
    </div>
    <div style="position: absolute;right: 700px;top: 60px;">
    <p>商品名称：草莓</p>
    <p>商品金额：￥50</p>
    <p>实际付款：￥50</p>
    </div>
    </a-card>
    <br/>
    <a-radio-group v-model:value="value" @change="onChange">
    <a-radio :style="radioStyle" :value="true">只退款</a-radio>
    <a-radio :style="radioStyle" :value="false">退货退款
    </a-radio>
    <p style="position: absolute;left: 200px;top: 270px;">退款类型:</p>
    <br/><br/>
    <div style="width=300"><a-input  v-model:value="value1" placeholder="退款金额" /></div>
    <p style="position: absolute;left: 200px;top: 320px;">退款金额:</p>
    <br/>
    <span v-if=value >
    <p style="position: absolute;left: 200px;top: 370px;">货物状态:</p>
    <a-radio-group name="radioGroup" v-model:value="value2">
    <a-radio value="1">已收到</a-radio>
    <a-radio value="2">未收到</a-radio>
    </a-radio-group>
    </span>
    <span v-if=!value>
    <p style="position: absolute;left: 200px;top: 370px;">退货方式:</p>
    <a-radio-group name="radioGroup" v-model:value="value2">
    <a-radio value="1">上门退货</a-radio>
    <a-radio value="2">自行送回</a-radio>
    </a-radio-group>
    </span>
    <br/><br/>
  </a-radio-group>
    <a-card size="small" title="" style="width: 1200px">
    <div>
    <p>退款原因</p>
    <a-textarea v-model:value="value3" placeholder="退款原因" :rows="7" />
    </div>
    <br/><br/>
    <p>补充描述与凭证</p>
    <div><a-textarea v-model:value="value4" placeholder="补充描述与凭证" :rows="7" /></div>
    </a-card>
    <a-button type="primary" style="margin-left:50px;">提交</a-button>
  </a-card>
  <br/><br/><br/>
<a href="#" style="margin-left:0px">帮助</a>
    <a href="#" style="margin-left:200px">隐私</a>
    <a href="#" style="margin-left:200px">条款</a>
</template>

<script>
export default {
  data () {
    return {
      value: '0',
      value1: '',
      value2: '',
      value3: '',
      value4: ''
    }
  }
}
</script>
