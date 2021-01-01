<template>
  <a-card size="small" title="订单详情" style="width: 1200px;height:650px">
    <template #extra><a href="#"></a></template>
    <img src="../assets/image1.png" style="width: 240px; height: 180px;margin-right:0px" align="left" />
    <div style="position: absolute;right: 700px;top: 80px;">
    <p><b>商品名称：草莓</b></p>
    <p><b>商品类别：水果</b></p>
    <p><b>商品金额：￥50</b></p>
    <p><b>实际付款：￥50</b></p>
    <p><b>卖家：sortedList</b></p>
    </div>
    <br/>
    <br/>
    <div style="position: absolute;right: 60px;top: 100px;">
    <b>第三方支付方式：支付宝</b>
    <img src="../assets/alipayimg.png" >
    </div>
  <div style="position: absolute;left: 600px;top: 400px;">
  <a-button type="primary" style="position: absolute;right: 230px;top: 20px;">评价订单</a-button>
  <a-button type="primary" style="position: absolute;right:-20px;top: 20px;">申请退款</a-button>
  <a-button type="primary" style="position: absolute;left: 160px;top: 20px;">进入卖家店铺</a-button>
  </div>
  <div style="position: absolute;right: 400px;top: 80px;">
    <a-timeline pending="待收货" :reverse="reverse">
    <p><b>订单编号：000001</b></p>
      <a-timeline-item><b>下单时间 2015-09-01</b></a-timeline-item>
      <a-timeline-item><b>付款时间 2015-09-01</b></a-timeline-item>
      <a-timeline-item><b>发货时间 2015-09-01</b></a-timeline-item>
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
      reverse: false
    }
  },
  methods: {
    handleClick () {
      this.reverse = !this.reverse;
    }
  }
}
</script>
