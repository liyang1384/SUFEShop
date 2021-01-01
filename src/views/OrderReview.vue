<template>
  <a-card title="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;订单评价" style="width:1200px">
    <template #extra><a href="#"></a></template>
    <br/>
    <a-card size="small" title="交易信息" style="width: 1200px">
    <template #extra><a href="#"></a></template>
    <img src="../assets/image1.png" style="width: 120px; height: 100px;margin-right:0px" align="left" />
    <div style="position: absolute;right: 300px;top: 60px;">
    <p>商品类别：草莓</p>
    <p>卖家名称：sortedList</p>
    <p>支付方式：支付宝 <img src="../assets/alipayimg.png" style="width:30px;lenght:30px"></p>
    </div>
    <div style="position: absolute;right: 700px;top: 60px;">
    <p>商品名称：草莓</p>
    <p>商品金额：￥50</p>
    <p>实际付款：￥50</p>
    </div>
    </a-card>
    <br/>
    <a-card size="small" title="评分" style="width: 1200px">
    <template #extra><a href="#"></a></template>
    描述相符合 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a-rate v-model:value="value1" />
    <br/>
    送货速度 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a-rate v-model:value="value2" />
    <br/>
    交流态度 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a-rate v-model:value="value3" />
    <br/>
    </a-card>
    <a-card size="small" title="评价" style="width: 1200px">
    <template #extra><a href="#"></a></template>
    <p><a-input v-model:value="value" placeholder="请输入评价" /></p>
  </a-card>
  <a-card size="small" title="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上传照片" style="width: 1200px">
    <template #extra><a href="#"><a-button type="primary">上传照片</a-button></a></template>
    <img src="../assets/image1.png" style="width: 120px; height: 100px; margin-right:100px;" />
    <img src="../assets/image1.png" style="width: 120px; height: 100px; margin-right:100px;" />
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
export default {
  data () {
    return {
      ModalText: '',
      visible: false,
      confirmLoading: false,
      value: '',
      value1: 2,
      value2: 3,
      value3: 4
    }
  },
  methods: {
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
