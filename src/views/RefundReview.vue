<template>
<div v-if="seen">
<img src="../assets/logo.png"  v-if="seen" style="width: 50px; height: 20px;position:absolute;margin-left:0px" />
  <a-card title="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;退款审核" size="small" style="width: 1200px">
    <template #extra><a href="#"></a></template>
    <a-card size="small" title="交易信息" style="width: 1200px">
    <template #extra><a href="#"></a></template>
    <img :src="Image" style="width: 120px; height: 100px;margin-right:0px" align="left" />
    <div style="position: absolute;right: 500px;top: 60px;">
    <p>商品类别：<span v-html="clas_of_commidity"></span></p>
    <p>卖家名称：<span v-html="seller"></span></p>
    <p>买家名称：<span v-html="buyer"></span></p>
    </div>
    <div style="position: absolute;right: 300px;top: 60px;">
    <p>支付方式：<span v-html="pay_method"></span> <img src="../assets/alipayimg.png" style="width:30px;lenght:30px"></p>
    <p>订单编号：<span v-html="no_of_order"></span></p>
    </div>
    <div style="position: absolute;right: 700px;top: 60px;">
    <p>商品名称：<span v-html="name_of_commidity"></span></p>
    <p>商品金额：<span v-html="price_of_commidity"></span></p>
    <p>实际付款：<span v-html="real_price_of_commidity"></span></p>
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
    <p>买家信誉分：<span v-html="credit_of_buyer"></span></p>
    <p>卖家信誉分：<span v-html="credit_of_seller"></span></p>
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
      Image: require('../assets/image1.png'),
      pay_method: '支付宝',
      no_of_order: '0001',
      name_of_commidity: '草莓',
      clas_of_commidity: '水果',
      seller: 'sorted',
      buyer: 'sortedList',
      credit_of_buyer: 80,
      credit_of_seller: 80,
      refund_time: '2020/12/11',
      price_of_commidity: 30,
      real_price_of_commidity: 30,
      refund_amount: 30,
      refund_type: '退货退款',
      seller_info: 'https://www.qq.com',
      buyer_info: 'https://www.qq.com',
      refund_reason: '不想买了不想买了不想买了不想买了不想买了不想买了不想买了不想买了不想买了不想买了不想买了不想买了不想买了不想买了不想买了不想买了不想买了不想买了不想买了不想买了不想买了不想买了'
    }
  }
}
</script>>
