<template>
  <a-card size="small" title="订单详情" style="width: 1200px;height:650px">
    <template #extra><a href="#"></a></template>
    <img src="../assets/image1.png" style="width: 240px; height: 180px;margin-right:0px" align="left" />
    <div style="position: absolute;right: 300px;top: 80px;">
    <p>商品名称：草莓</p>
    <p>商品类别：水果</p>
    <p>商品金额：￥50</p>
    <p>实际付款：￥50</p>
    <p><a href="#">卖家：sortedList</a></p>
    </div>
    <br/>
    <br/>
    <div>
    <p>第三方支付方式：云闪付</p>
    <img src="../assets/alipayimg.png" style="width: 50px; height: 50px;margin-right:0px" align="left" />
    </div>
  <div style="position: absolute;right: 20px;top: 80px;">
    <a-timeline pending="待收货" :reverse="reverse">
    <p>订单编号：000001</p>
      <a-timeline-item>下单时间 2015-09-01</a-timeline-item>
      <a-timeline-item>付款时间 2015-09-01</a-timeline-item>
      <a-timeline-item>发货时间 2015-09-01</a-timeline-item>
    </a-timeline>
  </div>
    <a-button type="primary">评价订单</a-button>
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
