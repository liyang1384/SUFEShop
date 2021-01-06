<template>
  <a-card title="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;订单评价" style="width:1200px">
    <template #extra><a href="#"></a></template>
    <br/>
    <a-card size="small" title="交易信息" style="width: 1200px">
    <template #extra><a href="#"></a></template>
    <img :src="commidity_picture" style="width: 120px; height: 100px;margin-right:0px" align="left" />
    <div style="position: absolute;right: 500px;top: 60px;">
    <p>商品类别：<span v-html="commidity_type"></span></p>
    <p>卖家名称：<span v-html="seller"></span></p>
    <p>支付方式：<span v-html="payment_platform"></span></p>
    </div>
    <div style="position: absolute;right: 700px;top: 60px;">
    <p>商品名称：<span v-html="commidity_name"></span></p>
    <p>商品金额：<span v-html="price"></span></p>
    <p>实际付款：<span v-html="amount"></span></p>
    </div>
    <div style="position: absolute;right: 200px;top: 60px;">
    <p>订单编号：<span v-html="order_id"></span></p>
    </div>
    </a-card>
    <br/>
    <span v-if="this.order_type==1">对买家的评价 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
    <a-rate v-if="this.order_type==1" v-model:value="score" />
    <a-card v-if="this.order_type==0" size="small" title="评分" style="width: 1200px">
    <template #extra><a href="#"></a></template>
    描述相符合 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a-rate v-model:value="commidity_quality" />
    <br/>
    送货速度 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a-rate v-model:value="deal_speed" />
    <br/>
    交流态度 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a-rate v-model:value="seller_attitude" />
    <br/>
    </a-card>
    <a-card size="small" title="" style="width: 1200px">
    <a-textarea v-model:value="comment" placeholder="输入评价" :rows="4" />
    </a-card>
  <br/>
  <br/>
    <a-button type="primary" @click="showModal">
      提交评价
    </a-button>
    <a-modal
      v-if="order_type==0"
      v-on="onpostOrderReview_Buyer"
      title="确认提交吗？"
      v-model:visible="visible"
      :confirm-loading="confirmLoading"
      @ok="handleOk"
    >
      <p>{{ ModalText }}</p>
    </a-modal>
    <a-modal
      v-if="order_type==1"
      v-on="onpostOrderReview_Seller"
      title="确认提交？"
      v-model:visible="visible"
      :confirm-loading="confirmLoading"
      @ok="handleOk"
    >
      <p>{{ ModalText }}</p>
    </a-modal>
  </a-card>
  <br/><br/><br/>
<a href="#" style="margin-left:0px">帮助</a>
    <a href="#" style="margin-left:200px">隐私</a>
    <a href="#" style="margin-left:200px">条款</a>
</template>

<script>
import { getOrderInfo_Review, postOrderReview_Buyer, postOrderReview_Seller } from '../axios/order';

function getBase64 (file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
export default {
  data () {
    return {
      status_of_order: '0',
      commidity_picture: require('../assets/image1.png'),
      fileList: [],
      ModalText: '',
      visible: false,
      confirmLoading: false,
      comment: '',
      commidity_quality: 2,
      deal_speed: 3,
      seller_attitude: 4,
      commidity_name: '草莓',
      commidity_type: '水果',
      price: '50',
      amount: '50',
      payment_platform: '支付宝',
      seller: 'sorted',
      user_id: this.$store.user_id,
      order_id: this.$store.order_id,
      buyer: '',
      order_type: '0',
      score: 4
    }
  },
  created: function () {
    const form_0 = {
      user_id: this.user_id,
      order_id: this.order_id
    };
    getOrderInfo_Review(form_0).then((response) => {
      this.commidity_name = response.data.commidity_name;
      this.commidity_type = response.data.commidity_type;
      this.price = response.data.price;
      this.amount = response.data.amount;
      this.payment_platform = response.data.payment_platform;
      this.seller = response.data.seller;
      this.commidity_picture = response.data.commidity_picture.url;
      this.buyer = response.data.buyer;
      this.order_type = response.data.order_type
    })
  },
  methods: {
    onpostOrderReview_Seller (e) {
      const form_1 = {
        order_id: this.order_id,
        comment: this.comment,
        commidity_quality: this.commidity_quality,
        deal_speed: this.deal_speed,
        seller_attitude: this.seller
      };
      postOrderReview_Seller(form_1)
    },
    onpostOrderReview_Buyer (e) {
      const form_1 = {
        order_id: this.order_id,
        comment: this.comment,
        commidity_quality: this.commidity_quality,
        deal_speed: this.deal_speed,
        seller_attitude: this.seller
      };
      postOrderReview_Buyer(form_1)
    },
    handleCancel () {
      this.previewVisible = false;
    },
    async handlePreview (file) {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }
      this.previewImage = file.url || file.preview;
      this.previewVisible = true;
    },
    handleChange ({ fileList }) {
      this.fileList = fileList;
    },
    showModal () {
      this.visible = true;
    },
    handleOk (e) {
      this.ModalText = 'The modal will be closed after two seconds';
      this.confirmLoading = true;
      setTimeout(() => {
        this.visible = false;
        this.confirmLoading = false;
      }, 2000);
    }
  }
}
</script>

<style scoped>
    div{width:200px};
    div img {width:100%;}
</style>
