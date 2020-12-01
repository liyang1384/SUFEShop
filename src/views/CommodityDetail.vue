<template>
<a-layout-content
    id="CommodityDetail"
    :style="{ padding: '0 50px', marginTop: '64px' }"
  >
  <div style="background: #fff; padding: 24px; minheight: 600px">
  <a-page-header
    style="border: 1px solid rgb(235, 237, 240)"
    title="商品详情"
    @back="() => null"
  />
  <a-row>
    <a-col  :span="8">
      <img :src="images" style="position:absolute;top:55px;left:10px;width: 350px"/>
    </a-col>
    <a-col :span="16">
      <a-descriptions layout="vertical" bordered>
    <a-descriptions-item label="商品名称" :span='2'>
      {{ CommodityName }}
    </a-descriptions-item>
    <a-descriptions-item label="卖家" >
      {{ SellerName }}
      <a-divider type="vertical" />
      <a>联系卖家</a>
    </a-descriptions-item>
    <a-descriptions-item label="价格" >
      ￥{{ Price }}
    </a-descriptions-item>
    <a-descriptions-item label="商品状态" >
      <a-badge status="processing" />{{ state }}
    </a-descriptions-item>
      <a-descriptions-item label="发布时间" >
      {{ PublishTime }}
    </a-descriptions-item>
    <a-descriptions-item label="商品描述" >
      {{ Description }}
    </a-descriptions-item>
  </a-descriptions>
    </a-col>
  </a-row>
  <a-divider />
  <a-row>
    <a-col :span="4" :offset="20">
      <a-button value="large" type="primary">购买商品</a-button>
    </a-col>
  </a-row>
  </div>
</a-layout-content>
</template>

<script>
export default {
  name: 'CommodityDetail',
  components: {
  },
  data () {
    return {
      images: require('@/assets/testimg.png'),
      CommodityName: 'aaa',
      SellerName: 'BILL',
      PublishTime: '2020-11-25',
      state: '在售',
      Price: 25,
      Description: '高数教材配套教辅，九成新，没做过，可议价.....'
    }
  }
}
</script>
