<template>
  <a-table
    id="myfavourites"
    :columns="columns"
    :data-source="data"
    :pagination="{ pageSize: 5 }"
  >
    <template #images="{ text: images }">
      <img :src="images" style="width: 120px; height: 100px" />
    </template>
    <template #price="{ text }"> ￥{{ text }} </template>
    <template #action="{ record }">
      <a @click="handleChangePage(record.CommodityID)">查看商品详情</a>
      <a-divider type="vertical" />
      <a-button>联系卖家</a-button>
      <a-divider type="vertical" />
      <a-popconfirm
        title="确认从收藏夹中删除商品吗?"
        ok-text="是"
        cancel-text="否"
        @confirm="confirm"
        @cancel="cancel"
      >
        <a-button href="#" type="primary">删除商品</a-button>
      </a-popconfirm>
    </template>
  </a-table>
</template>

<script>
import { message } from 'ant-design-vue'
const columns = [
  {
    dataIndex: 'images',
    key: 'images',
    title: '商品图片',
    slots: { customRender: 'images' },
    width: 120,
    align: 'center'
  },
  {
    dataIndex: 'commodity',
    key: 'commodity',
    title: '商品名称',
    width: 350,
    align: 'center'
  },
  {
    title: '价格',
    dataIndex: 'price',
    key: 'price',
    width: 120,
    slots: { customRender: 'price' },
    align: 'center'
  },
  {
    title: '商品状态',
    dataIndex: 'state',
    key: 'state',
    align: 'center'
  },
  {
    title: '商品类别',
    key: 'tags',
    dataIndex: 'tags',
    align: 'center'
  },
  {
    title: '操作',
    key: 'action',
    dataIndex: 'action',
    slots: { customRender: 'action' },
    align: 'center'
  }
]

const data = [
  {
    CommodityID: '1000324',
    commodity: '高数教材配套教辅，九成新，没做过，可议价',
    price: 25,
    state: '在售',
    tags: '教材',
    seller: 'BILL',
    comments: '高数教材配套教辅，九成新，没做过，可议价.....',
    images: require('@/assets/testimg.png')
  },
  {
    CommodityID: '1000325',
    commodity: 'bbb',
    price: 42.0,
    state: '在售',
    tags: '日用品',
    seller: 'ANNA',
    comments: '低价可刀！！！',
    images: require('@/assets/testimg.png')
  },
  {
    CommodityID: '1000326',
    commodity: 'ccc',
    price: 32.2,
    state: '已售',
    tags: '辅导教材',
    seller: 'LNN',
    comments: '....',
    images: require('@/assets/testimg.png')
  },
  {
    CommodityID: '1000327',
    commodity: 'ddd',
    price: 7,
    state: '在售',
    tags: '零食',
    seller: 'YAS',
    comments: '买多了',
    images: require('@/assets/testimg.png')
  },
  {
    CommodityID: '1000328',
    commodity: 'eee',
    price: 50,
    state: '在售',
    tags: '服饰',
    seller: 'JACK',
    images: require('@/assets/testimg.png')
  },
  {
    CommodityID: '1000329',
    commodity: 'asf',
    price: 20,
    state: '在售',
    tags: '教材',
    seller: 'BOB',
    images: require('@/assets/testimg.png')
  },
  {
    CommodityID: '1000330',
    commodity: 'fkc',
    price: 24,
    state: '在售',
    tags: '辅导教材',
    seller: 'TIM',
    comments: '......',
    images: require('@/assets/testimg.png')
  }
]
export default {
  name: 'myfavourites',
  components: {},
  data () {
    return {
      data,
      columns
    }
  },
  methods: {
    confirm (e) {
      console.log(e)
      message.success('删除成功')
    },
    cancel (e) {
      console.log(e)
      message.error('删除已取消')
    },
    handleChangePage (CommodityID) {
      console.log(CommodityID)
      this.$router.push(`/CommodityDetail/${CommodityID}`)
    }
  }
}
</script>
