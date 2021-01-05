<template>
  <a-card title="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;订单评价" style="width:1200px">
    <template #extra><a href="#"></a></template>
    <br/>
    <a-card size="small" title="交易信息" style="width: 1200px">
    <template #extra><a href="#"></a></template>
    <img :src="Image" style="width: 120px; height: 100px;margin-right:0px" align="left" />
    <div style="position: absolute;right: 500px;top: 60px;">
    <p>商品类别：<span v-html="class_of_commidity"></span></p>
    <p>卖家名称：<span v-html="seller"></span></p>
    <p>支付方式：<span v-html="method_of_pay"></span></p>
    </div>
    <div style="position: absolute;right: 700px;top: 60px;">
    <p>商品名称：<span v-html="name_of_commidity"></span></p>
    <p>商品金额：<span v-html="price_of_commidity"></span></p>
    <p>实际付款：<span v-html="real_price_of_commidity"></span></p>
    </div>
    <div style="position: absolute;right: 200px;top: 60px;">
    <p>订单编号：<span v-html="no_of_order"></span></p>
    </div>
    </a-card>
    <br/>
    <a-card size="small" title="评分" style="width: 1200px">
    <template #extra><a href="#"></a></template>
    描述相符合 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a-rate v-model:value="description" />
    <br/>
    送货速度 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a-rate v-model:value="speed" />
    <br/>
    交流态度 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a-rate v-model:value="attitude" />
    <br/>
    </a-card>
    <a-card size="small" title="" style="width: 1200px">
    <a-textarea v-model:value="review" placeholder="输入评价" :rows="4" />
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
  <br/>
  <br/>
    <a-button type="primary" @click="showModal">
      提交评价
    </a-button>
    <a-modal
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
      status_of_order: '0',
      Image: require('../assets/image1.png'),
      fileList: [],
      ModalText: '',
      visible: false,
      confirmLoading: false,
      review: '',
      description: 2,
      speed: 3,
      attitude: 4,
      name_of_commidity: '草莓',
      class_of_commidity: '水果',
      price_of_commidity: '50',
      real_price_of_commidity: '50',
      method_of_pay: '支付宝',
      seller: 'sorted',
      no_of_order: '0001'
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
