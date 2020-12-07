<template >
  <a-card >
    <template id='Condition' #title>
      <a-form layout="inline" :model="form">
        <a-form-item>
          <a-input-search
            v-model:value="form.searchText"
            placeholder="输入内容查找商品"
            style="width: 400px"
            @search="onSearch"
          />
        </a-form-item>
        <br />
        <a-form-item label="商品类型" >
            <a-select value=1>  </a-select>
        </a-form-item>
        <a-form-item label="价格区间">
          <a-input-group compact>
            <a-input
              v-model:value="form.minAmount"
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
              v-model:value="form.maxAmount"
              style="width: 100px; text-align: center; border-left: 0"
              placeholder="最大价格"
            />
          </a-input-group>
        </a-form-item>
        <a-form-item label="信用等级">
            <a-select value="1">  </a-select>
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
        <template #description >
        <template v-for="tag in d.tags"
          :key="tag">
          【{{ tag.toUpperCase() }}】</template>
          <br />
          ￥{{d.price}}
          <a>查看详情</a>
        </template>
      </a-card-meta>
    </a-card-grid>
    </template>
    </a-card>
  </a-card>
</template>

<script>

// 此处数据为虚拟数据，后端完成接口时应删除

const data = [
  {
    key: '1',
    imageName: [require('@/assets/image1.png'), '水嫩草莓'],
    price: 32.75,
    state: '在售',
    tags: ['水果'],
    time: '2020-1-1'
  },
  {
    key: '2',
    imageName: [require('@/assets/image2.png'), '潮牌跑步鞋'],
    price: 420.0,
    state: '在售',
    tags: ['服装'],
    time: '2019-1-1'
  },
  {
    imageName: [require('@/assets/image4.png'), '高端人才必备手机'],
    key: '4',
    price: 7000,
    state: '在售',
    tags: ['手机'],
    time: '2017-5-1'
  },
  {
    imageName: [require('@/assets/image5.png'), '潮流自行车'],
    key: '5',
    price: 500,
    state: '在售',
    tags: ['自行车', '二手'],
    time: '2017-4-1'
  },
  {
    imageName: [require('@/assets/image6.png'), '精神小伙同款上衣'],
    key: '6',
    price: 20,
    state: '在售',
    tags: ['教材', '全新'],
    time: '2017-3-1'
  },
  {
    imageName: [require('@/assets/image7.png'), '上财女生必备神仙水'],
    key: '7',
    price: 24,
    state: '在售',
    tags: ['化妆品'],
    time: '2017-1-1'
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
        category: '',
        searchText: '',
        dateRange: [],
        minAmount: undefined,
        maxAmount: undefined
      }
    }
  },
  methods: {
    onSearch (value) {}
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
