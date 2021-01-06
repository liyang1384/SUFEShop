<template>
  <div id="CommodityDetail">
    <div style="background: #fff; padding: 24px; minheight: 600px">
      <a-page-header
        style="border: 1px solid rgb(235, 237, 240)"
        title="商品详情"
        @back="() => $router.go(-1)"
      />
      <br/>
      <h2 align=left style="solid rgb(235, 237, 240)">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ proDetail.commodity_name }}</h2>
      <a-row>
        <a-col :span="10">
          <img
            :src="proDetail.commodity_picture"
            style="position: absolute; top: 10px; left: 60px; width: 350px; height: 300px"
          />
        </a-col>
        <a-col :span="14" height=600>
          <div class="height-1000" align="left">
            <p>
            <a style="color:#BEBEBE" ><HeartTwoTone likeColor="grey" />&nbsp;&nbsp;加入收藏夹</a></p><!--#eb2f96-->
            <p>
              卖家:&nbsp;&nbsp;{{ proDetail.seller }}
              <a-divider type="vertical" />
              <a>联系卖家</a>
            </p>
            <p>价格:&nbsp;&nbsp;￥{{ proDetail.price }}</p>
            <p>商品类型:&nbsp;&nbsp;{{ proDetail.commodity_type }}</p>
            <p>商品状态:&nbsp;&nbsp;<a-badge status="processing" />{{ proDetail.commodity_state }}</p>
            <br/>
            <p>商品描述</p>
            <p>{{ proDetail.detail }}</p>
            <br/>
          </div>
        </a-col>
      </a-row>
      <a-row>
        <a-divider />
        <a-col :span="4" :offset="20">
          <a-button value="large" type="primary" @click="handleChangePage(proDetail.commodity_id)">立即购买</a-button>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import { HeartTwoTone } from '@ant-design/icons-vue'
import { getCommodity } from '@/axios/commodity.js'
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
      form: {
        commodity_id: '10000239'
      },
      proDetail: {
        commodity_picture: require('@/assets/image1.png'),
        commodity_name: '教材配套教辅，九成新，没做过，可议价',
        seller: 'BILL',
        commodity_type: '教材',
        commodity_state: '在售',
        price: 25,
        detail: '马克思主义基本原理教材，九成新，没做过，可议价.....'
      }
    }
  },
  created () {
    /* this.commodity_id = this.$route.params.commodity_id;*/
    this.getDetails();
  },
  methods: {
    getDetails () { //  请求商品详情
      getCommodity(this.form)
        .then((response) => {
          console.log(response.data);
          this.proDetail = response.data;
        }).catch(function (error) {
          console.log(error);
        });
    },
    handleChangePage (commodity_id) {
      console.log(commodity_id)
      this.$router.push(`/CreateOrder/${commodity_id}`)
    }
  }
}
</script>
