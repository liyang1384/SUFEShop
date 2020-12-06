<template>
  <a-card title="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;订单评价" style="width: 900px">
    <template #extra><a href="#"></a></template>
    <br/>
    <a-card size="small" title="交易信息" style="width: 900px">
    <template #extra><a href="#"></a></template>
    <img src="../assets/image1.png" style="width: 120px; height: 100px;margin-right:0px" align="left" />
    <p>商品名称：草莓</p>
    <p>商品金额：￥50</p>
    <p>实际付款：￥50</p>
    </a-card>
    <br/>
    <a-card size="small" title="评分" style="width: 900px">
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
    <a-card size="small" title="评价" style="width: 900px">
    <template #extra><a href="#"></a></template>
    <p><a-input v-model:value="value" placeholder="请输入评价" /></p>
  </a-card>
  <a-card size="small" title="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上传照片" style="width: 900px">
    <template #extra><a href="#"><a-button type="primary">上传照片</a-button></a></template>
    <img src="../assets/image1.png" style="width: 120px; height: 100px; margin-right:100px;" />
    <img src="../assets/image1.png" style="width: 120px; height: 100px; margin-right:100px;" />
  </a-card>
  <br/>
  <br/>
  <a-button type="primary">提交评价</a-button>
  </a-card>
</template>

<script>
export default {
  data () {
    return {
      value: '',
      value1: 2,
      value2: 3,
      value3: 4
    }
  }
}
</script>

<style scoped>
    div{width:200px};
    div img {width:100%;}
</style>
