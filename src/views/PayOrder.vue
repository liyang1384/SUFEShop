<template>
  <div id="payorder">
    <a-row>
      <a-col :span="14" :offset="8">
        <p class="height-100">
        <a-steps :current="1">
          <a-step>
            <template #title> 确认订单 </template>
          </a-step>
          <a-step title="支付订单" />
          <a-step title="确认收货" />
          <a-step title="双方互评" />
        </a-steps>
        </p>
      </a-col>
    </a-row>
      <a-page-header
        :ghost="false"
        title="支付订单"
        sub-title="请在下单后尽快付款"
        @back="() => $router.go(-1)"
      >
      <a-descriptions size="small" >
        <a-descriptions-item label="订单编号">
          10000421421
        </a-descriptions-item>
      <a-descriptions-item label="商品名称">
          全新高数配套教辅
        </a-descriptions-item>
        <a-descriptions-item label="下单时间">
          2020-12-10
        </a-descriptions-item>
      </a-descriptions>
      </a-page-header>
      <a-divider />
  <p style="position:absolute; left: 85px; color:#BEBEBE">付款方式：中介保护（付款到中介保护平台，完成交易后才会把款项支付给卖家）</p><br/><br/>
      <div align="left">
      <a-radio-group v-model:value="value" @change="onChange" >
    <a-radio :style="radioStyle" :value="1">
      <img src="../assets/alipayimg.png" style="width: 20px; height: 20px" />
      支付宝&nbsp;&nbsp;/&nbsp;&nbsp;支付宝平台将收取您￥0.13 手续费
      <a-divider type="vertical" />
    </a-radio>
    <a-radio :style="radioStyle" :value="2">
      <img src="../assets/bankimg.png" style="width: 20px; height: 20px" />
      网上银行&nbsp;&nbsp;/&nbsp;&nbsp;无手续费，支持借记卡和信用卡
    </a-radio>
    <a-radio :style="radioStyle" :value="3">
      <img src="../assets/wechatimg.png" style="width: 20px; height: 20px" />
      微信支付&nbsp;&nbsp;/&nbsp;&nbsp;微信支付将收取您￥0.15 手续费
    </a-radio>
    <a-radio :style="radioStyle" :value="4">
      <img src="../assets/jingdongimg.png" style="width: 20px; height: 20px" />
      京东支付&nbsp;&nbsp;/&nbsp;&nbsp;京东支付将收取您￥0.13 手续费
    </a-radio>
  </a-radio-group>
      </div>
      <a-divider />
      <p style="position:absolute; right: 200px;bottom: 190px; color:red; font-size:20px">实付款：￥25.05</p>
      <a-button size="large" style="position:absolute; right: 200px;bottom: 160px">确认支付</a-button>
    </div>
</template>

<script>
export default {
  name: 'PayOrder',
  components: {},
  data () {
    return {
      value: 1,
      radioStyle: {
        display: 'block',
        height: '50px',
        lineHeight: '40px'
      }
    }
  },
  methods: {
    onChange (e) {
      console.log('radio checked', e.target.value)
    }
  }
}
</script>

<style>
</style>
