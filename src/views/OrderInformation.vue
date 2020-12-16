<template>
  <a-card size="small" title="订单详情" style="width: 1200px;height:650px">
    <template #extra><a href="#"></a></template>
    <img src="../assets/image1.png" style="width: 240px; height: 180px;margin-right:0px" align="left" />
    <div style="position: absolute;right: 700px;top: 80px;">
    <p>商品名称：草莓</p>
    <p>商品类别：水果</p>
    <p>商品金额：￥50</p>
    <p>实际付款：￥50</p>
    <p><a href="#">卖家：sortedList</a></p>
    </div>
    <br/>
    <br/>
    <div style="position: absolute;right: 60px;top: 100px;">
    第三方支付方式：支付宝
    <img src="../assets/alipayimg.png" >
    </div>
  <div style="position: absolute;left: 600px;top: 400px;">
  <a-button type="primary" style="position: absolute;right: 200px;top: 20px;">评价订单</a-button>
  <a-button type="primary" style="position: absolute;top: 20px;">申请退款</a-button>
  <a-button type="primary" style="position: absolute;left: 230px;top: 20px;">进入卖家店铺</a-button>
  </div>
  <div style="position: absolute;right: 400px;top: 80px;">
    <a-timeline pending="待收货" :reverse="reverse">
    <p>订单编号：000001</p>
      <a-timeline-item>下单时间 2015-09-01</a-timeline-item>
      <a-timeline-item>付款时间 2015-09-01</a-timeline-item>
      <a-timeline-item>发货时间 2015-09-01</a-timeline-item>
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
