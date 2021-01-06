<template>
<div v-if="seen">
<img src="../assets/logo.png"  v-if="seen" style="width: 50px; height: 20px;position:absolute;margin-left:0px" />
  <a-card title="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;退款审核" size="small" style="width: 1200px">
    <template #extra><a href="#"></a></template>
    <a-card size="small" title="交易信息" style="width: 1200px">
    <template #extra><a href="#"></a></template>
    <img :src="commidity_picture" style="width: 120px; height: 100px;margin-right:0px" align="left" />
    <div style="position: absolute;right: 500px;top: 60px;">
    <p>商品类别：<span v-html="commidity_type"></span></p>
    <p>卖家名称：<span v-html="seller"></span></p>
    <p>买家名称：<span v-html="buyer"></span></p>
    </div>
    <div style="position: absolute;right: 300px;top: 60px;">
    <p>支付方式：<span v-html="payment_platform"></span></p>
    <p>订单编号：<span v-html="order_id"></span></p>
    </div>
    <div style="position: absolute;right: 700px;top: 60px;">
    <p>商品名称：<span v-html="commidity_name"></span></p>
    <p>商品金额：<span v-html="price"></span></p>
    <p>实际付款：<span v-html="amount"></span></p>
    </div>
    </a-card>
  <br />
  <br/>
  <a-card size="small" title="退款申请信息" style="width: 1200px">
    <template #extra><a href="#"></a></template>
    <br/><br/><br/><br/><br/><br/>
    <div style="position: absolute;right: 700px;top: 50px;">
    <p>退款申请类型：<span v-html="refund_type"></span></p>
    <p>退款金额：￥<span v-html="refund_amount"></span></p>
    </div>
    <div style="position: absolute;right: 400px;top: 50px;">
    <p>退款时间: <span v-html="refund_time"></span></p>
    </div>
  </a-card>
  <br/>
  <br/>
  <a-card size="small" title="退款理由与凭证" style="width: 1200px">
    <template #extra><a href="#"></a></template>
    <p>退款原因：<span v-html="refund_reason"></span></p>
  <img src="../assets/image1.png" style="width: 120px; height: 100px;margin-right:0px" align="left" />
  <img src="../assets/image1.png" style="width: 120px; height: 100px;margin-right:0px" align="left" />
  <img src="../assets/image1.png" style="width: 120px; height: 100px;margin-right:0px" align="left" />
  </a-card>
  <br/>
  <br/>
  <a-card size="small" title="操作项" style="width: 1200px">
    <template #extra><a href="#"></a></template>
    <a-button type="primary" style="margin-right:300px;" @click="showConfirm_admit" >同意</a-button>
    <a-button type="primary" style="margin-right:100px;" @click="showConfirm_reject">拒绝</a-button>
    <a-button style="margin-left:200px;">取消</a-button>
  </a-card>
  </a-card>
  </div>
  <br/><br/><br/>
<a href="#" style="margin-left:0px">帮助</a>
    <a href="#" style="margin-left:200px">隐私</a>
    <a href="#" style="margin-left:200px">条款</a>
</template>

<script>
import { ExclamationCircleOutlined } from '@ant-design/icons-vue'
import { createVNode } from 'vue'
import { Modal } from 'ant-design-vue'
export default {
  methods: {
    showConfirm_reject () {
      Modal.confirm({
        title: '确认拒绝？',
        icon: createVNode(ExclamationCircleOutlined),
        content: '拒绝后，将使得买家此次退款申请无效',
        onOk () {
          return new Promise((resolve, reject) => {
            setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
          }).catch(() => console.log('Oops errors!'))
        },
        onCancel () {}
      })
    },
    showConfirm_admit () {
      Modal.confirm({
        title: '确认同意？',
        icon: createVNode(ExclamationCircleOutlined),
        content: '确认后，将判定卖家退款',
        onOk () {
          return new Promise((resolve, reject) => {
            setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
          }).catch(() => console.log('Oops errors!'))
        },
        onCancel () {}
      })
    }
  },
  data () {
    return {
      seen: true,
      commidity_picture: require('../assets/image1.png'),
      payment_platform: '支付宝',
      commidity_name: '草莓',
      commidity_type: '水果',
      seller: 'sorted',
      buyer: 'sortedList',
      refund_time: '2020/12/11',
      price: 30,
      amount: 30,
      amount_of_refund: 30,
      type_of_refund: '退货退款',
      refund_reason: '不想买了不想买了不想买了不想买了不想买了不想买了不想买了不想买了不想买了不想买了不想买了不想买了不想买了不想买了不想买了不想买了不想买了不想买了不想买了不想买了不想买了不想买了',
      order_status: '',
      user_id: this.$store.user_id,
      order_id: this.$store.order_id
    }
  }
}
</script>>
