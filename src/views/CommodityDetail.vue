<template>
<a-layout-content
    id="CommodityDetail"
    :style="{ padding: '0 50px', marginTop: '64px' }"
  >
  <div style="background: #fff; padding: 24px; minheight: 600px">
  <a-divider orientation="left">
    商品详情
  </a-divider>
  <a-descriptions layout="vertical" bordered>
    <a-descriptions-item label="商品图片" >
       <img :src="images" style="width: 120px; height: 100px">
    </a-descriptions-item>
    <a-descriptions-item label="商品名称" >
      {{ CommodityName }}
    </a-descriptions-item>
    <a-descriptions-item label="卖家" >
      {{ SellerName }}
    </a-descriptions-item>
    <a-descriptions-item label="发布时间" >
      {{ PublishTime }}
    </a-descriptions-item>
    <a-descriptions-item label="商品状态" >
      <a-badge status="processing" />{{ state }}
    </a-descriptions-item>
    <a-descriptions-item label="价格" >
      ￥{{ Price }}
    </a-descriptions-item>
    <a-descriptions-item label="商品描述" :span="3">
      {{ Description }}
    </a-descriptions-item>
  </a-descriptions>
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
