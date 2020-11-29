<template>
  <a-layout-content
    id="HistoryList"
    :style="{ padding: '0 50px', marginTop: '64px' }"
  >
  <a-table
  :columns="columns"
  :data-source="data"
  :pagination="{ pageSize: 4 }"
  >
  <template #images="{ text: images }">
    <img :src="images" style="width: 120px; height: 100px"
    >
  </template>
    <template #tags="{ text: tags }">
      <span>
        <a-tag
          v-for="tag in tags"
          :key="tag"
          :color="tag === '二手' ? 'volcano' : tag === '全新' ? 'geekblue' : 'gray'"
        >
          {{ tag.toUpperCase() }}
        </a-tag>
      </span>
    </template>
  <template #action>
      <a-button>查看商品详情</a-button>
      <a-divider type="vertical" />
      <a-divider type="vertical" />
  </template>
  </a-table>
  </a-layout-content>
</template>
<script>
const columns = [
  {
    title: '浏览时间',
    key: 'time',
    dataIndex: 'time',
    width: 120
  },
  {
    dataIndex: 'images',
    key: 'images',
    title: '商品图片',
    slots: { customRender: 'images' },
    width: 120
  },
  {
    dataIndex: 'commodity',
    key: 'commodity',
    title: '商品名称',
    width: 120
  },
  {
    title: '价格',
    dataIndex: 'price',
    key: 'price',
    width: 120
  },
  {
    title: '商品状态',
    dataIndex: 'state',
    key: 'state'
  },
  {
    title: '商品类别',
    key: 'tags',
    dataIndex: 'tags',
    slots: { customRender: 'tags' },
    width: 200
  },
  {
    title: '商品描述',
    key: 'comments',
    dataIndex: 'comments',
    width: 400
  },
  {
    title: '操作',
    key: 'action',
    dataIndex: 'action',
    slots: { customRender: 'action' }
  }
]

const data = [
  {
    key: '1',
    images: require('@/assets/image1.png'),
    commodity: '水嫩草莓',
    price: 32.75,
    state: '在售',
    tags: ['水果'],
    comments: '每日新进新鲜果蔬！',
    time: '2020-1-1'
  },
  {
    key: '2',
    images: require('@/assets/image2.png'),
    commodity: '潮牌跑步鞋',
    price: 420.00,
    state: '在售',
    tags: ['服装'],
    comments: '跑步鞋中的战斗机！',
    time: '2019-1-1'
  },
  {
    images: require('@/assets/image3.png'),
    key: '3',
    commodity: '打工人必备电动汽车',
    price: 320000.0,
    state: '在售',
    tags: ['汽车', '全新'],
    comments: '....',
    time: '2018-1-1'
  },
  {
    images: require('@/assets/image4.png'),
    key: '4',
    commodity: '高端人才必备手机',
    price: 7000,
    state: '在售',
    tags: ['手机'],
    comments: '......',
    time: '2017-5-1'
  },
  {
    images: require('@/assets/image5.png'),
    key: '5',
    commodity: '潮流自行车',
    price: 500,
    state: '在售',
    tags: ['自行车', '二手'],
    comments: '......',
    time: '2017-4-1'
  },
  {
    images: require('@/assets/image6.png'),
    key: '6',
    commodity: '精神小伙同款上衣',
    price: 20,
    state: '在售',
    tags: ['教材', '全新'],
    comments: '......',
    time: '2017-3-1'
  },
  {
    images: require('@/assets/image7.png'),
    key: '7',
    commodity: '上财女生必备神仙水',
    price: 24,
    state: '在售',
    tags: ['化妆品'],
    comments: '......',
    time: '2017-1-1'
  }
]

export default {
  data () {
    return {
      data,
      columns
    }
  }
}
</script>
