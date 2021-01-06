<template>
  <a-card title="退款申请" style="width: 1200px">
    <template #extra><a href="#"></a></template>
    <a-card size="small" title="退款商品信息" style="width: 1200px">
    <template #extra><a href="#"></a></template>
    <img :src="commidity_picture" style="width: 120px; height: 100px;margin-right:0px" align="left" />
    <div style="position: absolute;right: 300px;top: 60px;">
    <p>商品类别：<span v-html="commidity_type"></span></p>
    <p>卖家名称：<span v-html="seller"></span></p>
    <p>支付方式：<span v-html="payment_platform"></span></p>
    </div>
    <div style="position: absolute;right: 700px;top: 60px;">
    <p>商品名称：<span v-html="commidity_name"></span></p>
    <p>商品金额：￥<span v-html="price"></span></p>
    <p>实际付款：￥<span v-html="amount"></span></p>
    </div>
    </a-card>
    <br/>
    <a-radio-group v-model:value="refund_type" @change="onChange">
    <a-radio :style="radioStyle" :value= true>只退款</a-radio>
    <a-radio :style="radioStyle" :value= false>退货退款
    </a-radio>
    <p style="position: absolute;left: 200px;top: 270px;">退款类型:</p>
    <br/><br/>
    <div style="width=300"><a-input  v-model:value="refund_amount" placeholder="退款金额：￥" /></div>
    <p style="position: absolute;left: 200px;top: 320px;">退款金额:</p>
    <br/>
    <br/><br/>
    </a-radio-group>
    <a-card size="small" title="" style="width: 1200px">
    <div>
    <p>退款原因</p>
    <a-textarea v-model:value="refund_reason" placeholder="退款原因" :rows="7" />
    </div>
    <br/><br/>
    <p>补充描述与凭证</p>
    <div class="clearfix">
    <a-upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      list-type="picture-card"
      :file-list="fileList"
      @preview="handlePreview"
      @change="handleChange"
    >
      <div v-if="fileList.length < 8">
        <plus-outlined />
        <div class="ant-upload-text">Upload</div>
      </div>
    </a-upload>
    <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
      <img alt="example" style="width: 100%" :src="previewImage" />
    </a-modal>
    </div>
    </a-card>
    <a-button v-on="onPostRefundInfo"  type="primary" style="margin-left:50px;">提交</a-button>
  </a-card>
  <br/><br/><br/>
<a href="#" style="margin-left:0px">帮助</a>
    <a href="#" style="margin-left:200px">隐私</a>
    <a href="#" style="margin-left:200px">条款</a>
</template>

<script>
import { PlusOutlined } from '@ant-design/icons-vue';
import { getOrderInfo_appeal, postRefundInfo } from '../axios/refund';
// import { getRefundDetail } from '@/axios/refund.js';

function getBase64 (file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

export default {
  created: function () {
    const form_0 = {
      user_id: this.user_id,
      order_id: this.order_id
    };
    getOrderInfo_appeal(form_0).then((response) => {
      this.commidity_picture = response.data.commidity_picture.url;
      this.commidity_name = response.data.commidity_name;
      this.commidity_type = response.data.commidity_type;
      this.price = response.data.price;
      this.amount = response.data.amount;
      this.seller = response.data.seller;
      this.order_id = response.data.order_id;
      this.order_time = response.data.order_time;
      this.payment_time = response.data.payment_time;
      this.payment_platform = response.data.payment_platform
    })
  },
  components: {
    PlusOutlined
  },
  data () {
    return {
      order_status: '1',
      refund_type: '',
      refund_amount: '',
      reason_of_refund: '',
      commidity_picture: require('../assets/image1.png'),
      commidity_type: '水果',
      seller: 'sortedList',
      payment_platform: '支付宝',
      commidity_name: '草莓',
      price: '50',
      amount: '50',
      previewVisible: false,
      previewImage: '',
      user_id: this.$store.user_id,
      order_id: this.$store.order_id
    }
  },
  methods: {
    onPostRefundInfo (e) {
      const form_1 = {
        user_id: this.user_id,
        order_id: this.order_id,
        refund_type: this.refund_type,
        refund_amount: this.refund_amount,
        refund_reason: this.refund_reason,
        refund_time: this.refund_time
      };
      postRefundInfo(form_1)
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
    }
    /*
    submit (e) {
      // data
      getRefundDetail(data)
        .then(function (response) {

        })
    }
    */
  }
}
</script>

<style>
/* you can make up upload button and sample style by using stylesheets */
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>
