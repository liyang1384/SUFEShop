<template>
  <div id="createorder">
    <a-row>
      <a-col :span="8" :offset="14">
        <p class="height-100">
        <a-steps :current="0">
          <a-step>
            <template #title> 确认订单 </template>
          </a-step>
          <a-step title="支付订单" />
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
      <div size="small" align="left">
          &nbsp;&nbsp;<a-avatar size="small">
          <template #icon><AliwangwangOutlined /></template>
          </a-avatar>
          &nbsp;卖家：&nbsp;&nbsp;<a>BILL</a>
      </div>
      </a-page-header>
        <a-row>
          <a-col :span="4">
            <img
              :src="images"
              style="position: absolute; left: 20px; width: 150px"
            />
          </a-col>
          <a-col :span="20" style="height: 120px">
            <a-descriptions>
              <a-descriptions-item >
                <a>{{ CommodityName }}</a>
              </a-descriptions-item>
              <a-descriptions-item >
                {{ kind }}
              </a-descriptions-item>
              <a-descriptions-item >
                {{ Price }}（元）
              </a-descriptions-item>
            </a-descriptions>
          </a-col>
        </a-row>
        <a-divider />
        <a-row>
          <a-col :span="6" :offset="18">
            <p style="color:red; font-size:20px">应付总金额：￥{{ Price }}</p>
            <p style="color:#BEBEBE">重要提示：本网所售商品均在线下进行交易。</p>
            <p style="color:#BEBEBE">请认真考虑，确定同意再提交订单。</p>
            <a-button size="large" @click="handleChangePage ()">确认购买</a-button>
          </a-col>
        </a-row>
    </div>
</template>

<script>
import {
  AliwangwangOutlined
} from '@ant-design/icons-vue'
export default {
  name: 'CreateOrder',
  components: {
    AliwangwangOutlined
  },
  data () {
    return {
      CommodityID: '1000324',
      images: require('@/assets/image1.png'),
      CommodityName: '九成新的教材配套教辅书，没有做过',
      SellerName: 'BILL',
      kind: '教材',
      PublishTime: '2020-11-25',
      state: '在售',
      Price: 25.05,
      Description: '教材配套教辅，九成新，没做过，可议价.....',
      OrderID: '10000421421'
    }
  },
  methods: {
    handleChangePage () {
      console.log(this.OrderID)
      this.$router.push(`/PayOrder/${this.OrderID}`)
    }
  }
}
</script>

