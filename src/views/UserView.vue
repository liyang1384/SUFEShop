<template >
  <a-card >
    <template id='Condition' #title>
      <a-form layout="inline" :model="form">
        <a-form-item>
          <a-input-search
            v-model:value="form.commodity_name"
            placeholder="输入内容查找商品"
            style="width: 400px"
            @search="onSearch"
          />
        </a-form-item>
        <br />
        <a-form-item label="商品类型" >
            <a-input placeholder="请输入商品类型" v-model:value="form.commodity_type">  </a-input>
        </a-form-item>
        <a-form-item label="价格区间">
          <a-input-group compact>
            <a-input
              v-model:value="form.min_price"
              style="width: 100px; text-align: center"
              placeholder="最小价格"
            />
            <a-input
              style="
                width: 30px;
                border-left: 0;
                pointer-events: none;
                backgroundcolor: #fff;
              "
              placeholder="~"
              disabled
            />
            <a-input
              v-model:value="form.max_price"
              style="width: 100px; text-align: center; border-left: 0"
              placeholder="最大价格"
            />
          </a-input-group>
        </a-form-item>
      </a-form>
    </template>
    <a-card title="商品列表" style="width: 1300px text-align: center;">
    <template id='Commodity'  v-for="d in data" :key="d.imageName">
    <a-card-grid  hoverable size="small" style="width: 330px" layout="inline">
      <span >
        <img :src="d.imageName[0]" style="width: 290px;height: 220px"/>
      </span>
      <a-card-meta :title="d.imageName[1]">
        <template #description>
        <template v-for="tag in d.tags"
          :key="tag">
          【{{ tag.toUpperCase() }}】</template>
          <br />
          ￥{{d.price}}
          <a @click="handleChangePage(d.commodity_id)">查看详情</a>
        </template>
      </a-card-meta>
    </a-card-grid>
    </template>
    </a-card>
  </a-card>
</template>

<script>
import { getAllCommodity } from '@/axios/commodity.js';
const data = [
  {
    commodity_id: '1',
    imageName: [require('@/assets/image1.png'), '马原教科书'],
    price: 32.75,
    application_state: '在售',
    commodity_type: ['教科书'],
    on_shelf_time: '2020-1-1'
  }
]

export default {
  el: 'Commodity',
  name: 'Condition',
  components: {},
  data () {
    return {
      data,
      form: {
        commodity_type: '',
        commodity_name: '',
        min_price: undefined,
        max_price: undefined
      }
    }
  },
  methods: {
    onSearch (params) {
      getAllCommodity(this.form)
        .then((response) => {
          const status_code = response.status
          if (status_code === 200) {
            this.data.commodity_id = response.data.commodity_id;
            this.data.price = response.data.price;
            this.data.commodity_type = response.data.commodity_type;
            this.data.imageName[0] = response.data.commodity_picture;
            this.data.imageName[1] = response.data.commodity_name;
            this.data.application_state = response.data.application_state;
            this.data.on_shelf_time = response.data.on_shelf_time;
            if (this.$store.user_id != null) {
              this.$router.push({ path: '' })
              this.$message.info('成功')
            }
          }
        })
        .catch((error) => {
          console.log(error)
          this.$message.info('失败')
        });
    },
    handleChangePage (CommodityID) {
      console.log(CommodityID)
      this.$router.push(`/CommodityDetail/${CommodityID}`)
    }
  },
  computed: {
    counterparty: function () {
      return this.category === '1' ? '卖家' : '买家'
    }
  }
}
</script>

<style  scope lang="scss">
#Condition {
  .ant-radio-button-wrapper {
    margin: 0 20px;
  }
}
</style>
