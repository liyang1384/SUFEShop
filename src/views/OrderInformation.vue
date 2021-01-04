<template>
  <a-card size="small" title="订单详情" style="width: 1200px;height:650px">
    <template #extra><a href="#"></a></template>
    <img :src="Image" style="width: 240px; height: 180px;margin-right:0px" align="left" />
    <div style="position: absolute;right: 700px;top: 80px;">
    <p><b>商品名称：<span v-html="name_of_commidity"></span></b></p>
    <p><b>商品类别：<span v-html="class_of_commidity"></span></b></p>
    <p><b>商品金额：<span v-html="price_of_commidity"></span></b></p>
    <p><b>实际付款：<span v-html="real_price_of_commidity"></span></b></p>
    <p><b>卖家：<span v-html="seller"></span></b></p>
    </div>
    <br/>
    <br/>
    <div style="position: absolute;right: 60px;top: 100px;">
    <b>第三方支付方式：<span v-html="pay_method"></span></b>
    <img src="../assets/alipayimg.png" >
    </div>
  <div style="position: absolute;left: 600px;top: 400px;">
  <a-button type="primary" style="position: absolute;right: 230px;top: 20px;">评价订单</a-button>
  <a-button type="primary" style="position: absolute;right:-20px;top: 20px;">申请退款</a-button>
  <a-button type="primary" style="position: absolute;left: 160px;top: 20px;">进入卖家店铺</a-button>
  </div>
  <div style="position: absolute;right: 400px;top: 80px;">
    <a-timeline pending="" :reverse="reverse">
    <p><b>订单编号：000001</b></p>
      <a-timeline-item><b>下单时间 <span v-html="time_of_deal"></span></b></a-timeline-item>
      <a-timeline-item><b>付款时间 <span v-html="time_of_pay"></span></b></a-timeline-item>
      <a-timeline-item><b>发货时间 <span v-html="time_of_delivery"></span></b></a-timeline-item>
      <a-timeline-item><b>收货时间 <span v-html="time_of_receive"></span></b></a-timeline-item>
    </a-timeline>
  </div>
  </a-card>
  <br/><br/><br/>
<div style="position: absolute;right:400px;top: 700px;">
<a href="#" style="margin-left:0px">帮助</a>
    <a href="#" style="margin-left:200px">隐私</a>
    <a href="#" style="margin-left:200px">条款</a>
</div>
</template>

<script>
export default {
  data () {
    return {
      reverse: false,
      Image: require('../assets/image1.png'),
      name_of_commidity: '草莓',
      class_of_commidity: '水果',
      price_of_commidity: '50',
      real_price_of_commidity: '50',
      pay_method: '支付宝',
      time_of_deal: '2020/12/20',
      time_of_pay: '2020/12/20',
      time_of_delivery: '2020/12/20',
      time_of_receive: '2020/12/20',
      no_of_order: '0001',
      seller: 'sorted'
    }
  },
  methods: {
    handleClick () {
      this.reverse = !this.reverse;
    }
  }
}
</script>
