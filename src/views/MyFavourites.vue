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
    <template #action>
      <a-button>查看商品详情</a-button>
      <a-divider type="vertical" />
      <a-button>联系卖家</a-button>
      <a-divider type="vertical" />
      <a-button
        type="primary"
        href="javascript:if (confirm(&#39;您确定要从收藏夹中删除选定的商品吗？&#39;)) location.href=&#39;user.php?act=delete_collection&amp;collection_id=29&#39;"
        class="f6"
        >删除</a-button
      >
    </template>
  </a-table>
</template>

<script>
const columns = [
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
    width: 200
  },
  {
    title: '价格（元）',
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
    slots: { customRender: 'tags' }
  },
  {
    title: '卖家',
    dataIndex: 'seller',
    key: 'seller'
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
    commodity: 'aaa',
    price: 32.75,
    state: '在售',
    tags: '教材',
    seller: 'BILL',
    comments: '高数教材。',
    images: require('@/assets/textimg.png')
  },
  {
    key: '2',
    commodity: 'bbb',
    price: 42.0,
    state: '在售',
    tags: '日用品',
    seller: 'ANNA',
    comments: '低价可刀！！！',
    images: require('@/assets/textimg.png')
  },
  {
    key: '3',
    commodity: 'ccc',
    price: 32.2,
    state: '已售',
    tags: '辅导教材',
    seller: 'LNN',
    comments: '....',
    images: require('@/assets/textimg.png')
  },
  {
    key: '4',
    commodity: 'ddd',
    price: 7,
    state: '在售',
    tags: '零食',
    seller: 'YAS',
    comments: '买多了',
    images: require('@/assets/textimg.png')
  },
  {
    key: '5',
    commodity: 'eee',
    price: 50,
    state: '在售',
    tags: '服饰',
    seller: 'JACK',
    images: require('@/assets/textimg.png')
  },
  {
    key: '6',
    commodity: 'asf',
    price: 20,
    state: '在售',
    tags: '教材',
    seller: 'BOB',
    images: require('@/assets/textimg.png')
  },
  {
    key: '7',
    commodity: 'fkc',
    price: 24,
    state: '在售',
    tags: '辅导教材',
    seller: 'TIM',
    comments: '......',
    images: require('@/assets/textimg.png')
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
  }
}
</script>
