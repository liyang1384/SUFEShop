<template>
  <div id="CommodityDetail">
    <div style="background: #fff; padding: 24px; minheight: 600px">
      <a-page-header
        style="border: 1px solid rgb(235, 237, 240)"
        title="修改已发布商品信息"
        @back="() => $router.go(-1)"
      />
      <br/>
      <a-row>
      <a-input  addon-before="商品名称：" v-model:value="CommodityName" />
      </a-row>
      <a-row>
        <a-col :span="10">
          <img
            :src="images"
            style="position: absolute; top: 10px; left: 60px; width: 350px"
          />
        </a-col>
        <a-col :span="14" height=600>
          <div class="height-1000" align="left">
            <br/><a-input-group compact>
            <a-input style="width: 50%" addon-before="价格：" v-model:value="Price" suffix="（元）" /></a-input-group><br/>
            商品类型:&nbsp;&nbsp;<a-select
            v-model:value="Kind"
            style="width: 120px"
            @focus="focus"
            ref="select"
            @change="handleChange">
              <a-select-option value="教材">
              教材
              </a-select-option>
              <a-select-option value="辅导书">
              辅导书
              </a-select-option>
              <a-select-option value="日用品">
              日用品
              </a-select-option>
              <a-select-option value="零食">
              零食
              </a-select-option>
              <a-select-option value="衣服">
              衣服
              </a-select-option>
            </a-select><br/><br/>
            <p>商品状态:&nbsp;&nbsp;<a-badge status="processing" />{{ state }}</p>
            <p>发布时间:&nbsp;&nbsp;{{ PublishTime }}</p>
            <p>商品描述</p>
            <p><a-textarea v-model:value="Description" :rows="4" /></p>
            <br/>
          </div>
        </a-col>
      </a-row>
      <a-row>
        <a-divider />
        <a-col :span="4" :offset="20">
          <a-button value="large" type="primary">确认修改</a-button>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommodityDetail',
  components: {},
  data () {
    return {
      images: require('@/assets/testimg.png'),
      CommodityName: '高数教材配套教辅，九成新，没做过，可议价',
      SellerName: 'BILL',
      Kind: '教材',
      PublishTime: '2020-11-25',
      state: '在售',
      Price: 25,
      Description: '高数教材配套教辅，九成新，没做过，可议价.....'
    }
  },
  methods: {
    focus () {
      console.log('focus');
    },
    handleChange (value) {
      console.log(`selected ${value}`);
    }
  }
};

</script>
