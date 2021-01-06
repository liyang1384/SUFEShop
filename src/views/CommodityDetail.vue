<template>
  <div id="CommodityDetail">
    <div style="background: #fff; padding: 24px; minheight: 600px">
      <a-page-header
        style="border: 1px solid rgb(235, 237, 240)"
        title="商品详情"
        @back="() => $router.go(-1)"
      />
      <br/>
      <h2 align=left style="solid rgb(235, 237, 240)">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ CommodityName }}</h2>
      <a-row>
        <a-col :span="10">
          <img
            :src="images"
            style="position: absolute; top: 10px; left: 60px; width: 350px"
          />
        </a-col>
        <a-col :span="14" height=600>
          <div class="height-1000" align="left">
            <p>
            <a style="color:#BEBEBE" ><HeartTwoTone twoToneColor="grey" />&nbsp;&nbsp;加入收藏夹</a></p><!--#eb2f96-->
            <p>
              卖家:&nbsp;&nbsp;{{ SellerName }}
              <a-divider type="vertical" />
              <a>联系卖家</a>
            </p>
            <p>价格:&nbsp;&nbsp;￥{{ Price }}</p>
            <p>商品类型:&nbsp;&nbsp;{{ Kind }}</p>
            <p>商品状态:&nbsp;&nbsp;<a-badge status="processing" />{{ state }}</p>
            <p>发布时间:&nbsp;&nbsp;{{ PublishTime }}</p>
            <br/>
            <p>商品描述</p>
            <p>{{ Description }}</p>
            <br/>
          </div>
        </a-col>
      </a-row>
      <a-row>
        <a-divider />
        <a-col :span="4" :offset="20">
          <a-button value="large" type="primary" @click="handleChangePage(CommodityID)">立即购买</a-button>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import { HeartTwoTone } from '@ant-design/icons-vue'
export default {
/* mounted () {
    console.log(this.$route.params.id)
  },*/
  name: 'CommodityDetail',
  components: {
    HeartTwoTone
  },
  data () {
    return {
      CommodityID: '1000324',
      images: require('@/assets/testimg.png'),
      CommodityName: '高数教材配套教辅，九成新，没做过，可议价',
      SellerName: 'BILL',
      PublishTime: '2020-11-25',
      Kind: '教材',
      state: '在售',
      Price: 25,
      Description: '高数教材配套教辅，九成新，没做过，可议价.....'
    }
  },
  methods: {
    handleChangePage (CommodityID) {
      console.log(CommodityID)
      this.$router.push(`/CreateOrder/${CommodityID}`)
    }
  }
}
</script>
