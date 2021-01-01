
<template>
  <a-input-search
    v-model:value="form.searchText"
    placeholder="输入内容查找自己的商品"
    style="width: 400px"
    @search="onSearch"
  />
  <a-divider />
  <a-table
    id="CommodityList"
    :columns="columns"
    :data-source="data"
    :pagination="{ pageSize: 4 }"
  >
    <template #imageName="{ text: imageName }">
      <span>
        <img :src="imageName[0]" style="width: 120px; height: 100px" />
        <span> {{ imageName[1] }} </span>
      </span>
    </template>
    <template #price>
      <span></span>
    </template>
    <template #tags="{ text: tags }">
      <span>
        <a-tag
          v-for="tag in tags"
          :key="tag"
          :color="
            tag === '二手' ? 'volcano' : tag === '全新' ? 'geekblue' : 'gray'
          "
        >
          {{ tag.toUpperCase() }}
        </a-tag>
      </span>
    </template>
    <template #action>
      <a-button type="primary">重新编辑商品信息</a-button>
      <a-divider type="vertical" />
      <a-button type="danger">删除该商品</a-button>
      <a-divider type="vertical" />
    </template>
  </a-table>
</template>
<script>
const columns = [
  {
    title: '发布日期',
    key: 'time',
    dataIndex: 'time',
    width: 120
  },
  {
    dataIndex: 'imageName',
    key: 'imageName',
    title: '商品',
    slots: { customRender: 'imageName' },
    width: 400
  },
  {
    title: '价格/￥',
    dataIndex: 'price',
    key: 'price',
    width: 120
  },
  {
    title: '商品状态',
    dataIndex: 'state',
    key: 'state',
    width: 200
  },
  {
    title: '商品类别',
    key: 'tags',
    dataIndex: 'tags',
    slots: { customRender: 'tags' },
    width: 200
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
    imageName: [require('@/assets/image1.png'), '马原教科书'],
    price: 32.75,
    state: '已发布',
    tags: ['教科书'],
    time: '2020-1-1'
  },
  {
    key: '2',
    imageName: [require('@/assets/image2.png'), '潮牌跑步鞋'],
    price: 420.0,
    state: '已发布',
    tags: ['服装'],
    time: '2019-1-1'
  },
  {
    imageName: [require('@/assets/image4.png'), '高端人才必备手机'],
    key: '4',
    price: 7000,
    state: '已发布',
    tags: ['手机'],
    time: '2017-5-1'
  },
  {
    imageName: [require('@/assets/image5.png'), '潮流自行车'],
    key: '5',
    price: 500,
    state: '已发布',
    tags: ['自行车', '二手'],
    time: '2017-4-1'
  },
  {
    imageName: [require('@/assets/image6.png'), '精神小伙同款上衣'],
    key: '6',
    price: 20,
    state: '已发布',
    tags: ['教材', '全新'],
    time: '2017-3-1'
  },
  {
    imageName: [require('@/assets/image7.png'), '上财女生必备神仙水'],
    key: '7',
    price: 24,
    state: '已发布',
    tags: ['化妆品'],
    time: '2017-1-1'
  }
]

export default {
  data () {
    return {
      data,
      columns,
      form: {
        searchText: ''
      }
    }
  },
  methods: {
    onSearch (value) {}
  }
}
</script>

