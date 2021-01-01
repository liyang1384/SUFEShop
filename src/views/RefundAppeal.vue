<template>
  <a-card title="退款申请" style="width: 1200px">
    <template #extra><a href="#"></a></template>
    <a-card size="small" title="退款商品信息" style="width: 1200px">
    <template #extra><a href="#"></a></template>
    <img src="../assets/image1.png" style="width: 120px; height: 100px;margin-right:0px" align="left" />
    <div style="position: absolute;right: 300px;top: 60px;">
    <p>商品类别：<span v-html="class_of_commidity"></span></p>
    <p>卖家名称：<span v-html="seller_of_commidity"></span></p>
    <p>支付方式：<span v-html="pay_method"></span>
    <img src="url_of_pay_method" style="width:30px;lenght:30px"/></p>
    </div>
    <div style="position: absolute;right: 700px;top: 60px;">
    <p>商品名称：<span v-html="name_of_commidity"></span></p>
    <p>商品金额：￥<span v-html="price_of_commidity"></span></p>
    <p>实际付款：￥<span v-html="real_price_of_commidity"></span></p>
    </div>
    </a-card>
    <br/>
    <a-radio-group v-model:value="value" @change="onChange">
    <a-radio :style="radioStyle" :value="true">只退款</a-radio>
    <a-radio :style="radioStyle" :value="false">退货退款
    </a-radio>
    <p style="position: absolute;left: 200px;top: 270px;">退款类型:</p>
    <br/><br/>
    <div style="width=300"><a-input  v-model:value="value1" placeholder="退款金额" /></div>
    <p style="position: absolute;left: 200px;top: 320px;">退款金额:</p>
    <br/>
    <span v-if=value >
    <p style="position: absolute;left: 200px;top: 370px;">货物状态:</p>
    <a-radio-group name="radioGroup" v-model:value="value2">
    <a-radio value="1">已收到</a-radio>
    <a-radio value="2">未收到</a-radio>
    </a-radio-group>
    </span>
    <span v-if=!value>
    <p style="position: absolute;left: 200px;top: 370px;">退货方式:</p>
    <a-radio-group name="radioGroup" v-model:value="value2">
    <a-radio value="1">上门退货</a-radio>
    <a-radio value="2">自行送回</a-radio>
    </a-radio-group>
    </span>
    <br/><br/>
    </a-radio-group>
    <a-card size="small" title="" style="width: 1200px">
    <div>
    <p>退款原因</p>
    <a-textarea v-model:value="value3" placeholder="退款原因" :rows="7" />
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
    <a-button type="primary" style="margin-left:50px;">提交</a-button>
  </a-card>
  <br/><br/><br/>
<a href="#" style="margin-left:0px">帮助</a>
    <a href="#" style="margin-left:200px">隐私</a>
    <a href="#" style="margin-left:200px">条款</a>
</template>

<script>
import { PlusOutlined } from '@ant-design/icons-vue';

function getBase64 (file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

export default {
  components: {
    PlusOutlined
  },
  data () {
    return {
      value: '0',
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      class_of_commidity: '水果',
      seller_of_commidity: 'sortedList',
      pay_method: '支付宝',
      name_of_commidity: '草莓',
      price_of_commidity: '50',
      real_price_of_commidity: '50',
      url_of_pay_method: '../assets/alipayimg.png',
      previewVisible: false,
      previewImage: '',
      fileList: [
      ]
    }
  },
  methods: {
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
