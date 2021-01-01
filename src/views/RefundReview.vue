<template>
<div v-if="seen">
<img src="../assets/logo.png"  v-if="seen" style="width: 50px; height: 20px;position:absolute;margin-left:0px" />
  <a-card title="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;退款审核" size="small" style="width: 1200px">
    <template #extra><a href="#"></a></template>
    <a-card size="small" title="交易信息" style="width: 1200px">
    <template #extra><a href="#"></a></template>
    <img src="../assets/image1.png" style="width: 120px; height: 100px;margin-right:0px" align="left" />
    <div style="position: absolute;right: 500px;top: 60px;">
    <p>商品类别：草莓</p>
    <p><a href="#">卖家名称：sortedList</a></p>
    <p><a href="#">买家名称：sorted</a></p>
    </div>
    <div style="position: absolute;right: 300px;top: 60px;">
    <p>支付方式：支付宝 <img src="../assets/alipayimg.png" style="width:30px;lenght:30px"></p>
    <p><a href="#">订单明细</a></p>
    </div>
    <div style="position: absolute;right: 700px;top: 60px;">
    <p>商品名称：草莓</p>
    <p>商品金额：￥50</p>
    <p>实际付款：￥50</p>
    </div>
    </a-card>
  <br />
  <br/>
  <a-card size="small" title="退款申请信息" style="width: 1200px">
    <template #extra><a href="#"></a></template>
    <br/><br/><br/><br/><br/><br/>
    <div style="position: absolute;right: 700px;top: 50px;">
    <p>退款申请类型：退款退货</p>
    <p>退款金额：￥50</p>
    <p>退款原因：不想买了</p>
    </div>
    <div style="position: absolute;right: 400px;top: 50px;">
    <p>退款时间:2020/12/30</p>
    <p>买家信誉分：90</p>
    <p>卖家信誉分：80</p>
    </div>
  </a-card>
  <br/>
  <br/>
  <a-card size="small" title="补充说明与凭证" style="width: 1200px">
    <template #extra><a href="#"></a></template>
    <p>商品名称：草莓物品已经变质，质量和价格不匹配；物品已经变质，质量和价格不匹配；物品已经变质，质量和价格不匹配；物品已经变质，质量和价格不匹配；物品已经变质，质量和价格不匹配；物品已经变质，质量和价格不匹配；物品已经变质，质量和价格不匹配；
    物品已经变质，质量和价格不匹配；物品已经变质，质量和价格不匹配；物品已经变质，质量和价格不匹配；物品已经变质，质量和价格不匹配；物品已经变质，质量和价格不匹配；物品已经变质，质量和价格不匹配；物品已经变质，质量和价格不匹配；
    </p>
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
      seen: true
    }
  }
}
</script>>
