<template>
  <a-table
    id="HistoryList"
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
      <a-button>查看商品详情</a-button>
      <a-divider type="vertical" />
      <a-divider type="vertical" />
    </template>
  </a-table>
</template>
<script>
import { BrowseHistoryList } from '@/axios/commodity.js';
const columns = [
  {
    title: '浏览时间',
    key: 'browse_time',
    dataIndex: 'browse_time',
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
    dataIndex: 'application_state',
    key: 'application_state',
    width: 200
  },
  {
    title: '商品类别',
    key: 'commodity_type',
    dataIndex: 'commodity_type',
    slots: { customRender: 'commodity_type' },
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
    commodity_id: '1',
    imageName: [require('@/assets/image1.png'), '马原教科书'],
    price: 32.75,
    application_state: '在售',
    commodity_type: ['教科书'],
    browse_time: '2020-1-1'
  }
]

export default {
  data () {
    return {
      data,
      columns,
      user_id: this.$store.user_id
    }
  },
  mounted () {
    this.onSearch()
  },
  methods: {
    onSearch () {
      BrowseHistoryList(this.user_id)
        .then((response) => {
          const status_code = response.status
          if (status_code === 200) {
            this.data.commodity_id = response.data.commodity_id;
            this.data.price = response.data.price;
            this.data.commodity_type = response.data.commodity_type;
            this.data.imageName[0] = response.data.commodity_picture;
            this.data.imageName[1] = response.data.commodity_name;
            this.data.application_state = response.data.application_state;
            this.data.browse_time = response.data.browse_time;
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
    }
  }
}
</script>

