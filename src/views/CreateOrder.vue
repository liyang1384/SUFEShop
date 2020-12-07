<template>
  <div id="createorder">
    <a-row>
      <a-col :span="14" :offset="8">
        <p class="height-100">
        <a-steps :current="0">
          <a-step>
            <template #title> 确认订单 </template>
          </a-step>
          <a-step title="支付订单" />
          <a-step title="确认收货" />
          <a-step title="双方互评" />
        </a-steps>
        </p>
      </a-col>
    </a-row>
      <a-page-header
        :ghost="false"
        title="确认订单信息"
        sub-title="请仔细核对订单信息"
        @back="() => $router.go(-1)"
      >
        <a-divider />
        <a-row>
          <a-col :span="8">
            <img
              :src="images"
              style="position: absolute; left: 20px; width: 300px"
            />
          </a-col>
          <a-col :span="16">
            <a-descriptions
              layout="vertical"
              bordered
              :column="{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }"
            >
              <a-descriptions-item label="商品名称" span="3">
                {{ CommodityName }}
              </a-descriptions-item>
              <a-descriptions-item label="卖家">
                {{ SellerName }}
              </a-descriptions-item>
              <a-descriptions-item label="商品类型">
                {{ kind }}
              </a-descriptions-item>
              <a-descriptions-item label="价格">
                ￥{{ Price }}
              </a-descriptions-item>
            </a-descriptions>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="8" :offset="16">
            <p color="red">实付款：￥{{ Price }}</p>
            <a-button value="large" type="primary">确认购买</a-button>
          </a-col>
        </a-row>
      </a-page-header>
    </div>
</template>

<script>
export default {
  name: 'CreateOrder',
  components: {},
  data () {
    return {
      images: require('@/assets/testimg.png'),
      CommodityName: '九成新的高数教材配套教辅书，没有做过',
      SellerName: 'BILL',
      kind: '教材',
      PublishTime: '2020-11-25',
      state: '在售',
      Price: 25.05,
      Description: '高数教材配套教辅，九成新，没做过，可议价.....'
    }
  }
}
</script>

