
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
    <template #action="{ record }">
      <a-button @click="handleChangePage(record.commodity_id)" type="primary" >重新编辑商品信息</a-button>
      <a-divider type="vertical" />
      <a-button type="danger" @click="deleteCommodity(record.commodity_id)">删除该商品</a-button>
      <a-divider type="vertical" />
    </template>
  </a-table>
</template>
<script>
import { getMyCommodity, DeleteCommodity } from '@/axios/commodity.js';
const columns = [
  {
    title: '发布日期',
    key: 'on_shelf_time',
    dataIndex: 'on_shelf_time',
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
    on_shelf_time: '2020-1-1'
  },
  {
    key: '2',
    imageName: [require('@/assets/image2.png'), '潮牌跑步鞋'],
    price: 420.0,
    application_state: '在售',
    commodity_type: ['服装'],
    on_shelf_time: '2019-1-1'
  },
  {
    imageName: [require('@/assets/image4.png'), '高端人才必备手机'],
    key: '4',
    price: 7000,
    application_state: '在售',
    commodity_type: ['手机'],
    on_shelf_time: '2017-5-1'
  },
  {
    imageName: [require('@/assets/image5.png'), '潮流自行车'],
    key: '5',
    price: 500,
    application_state: '在售',
    commodity_type: ['自行车', '二手'],
    on_shelf_time: '2017-4-1'
  },
  {
    imageName: [require('@/assets/image6.png'), '精神小伙同款上衣'],
    key: '6',
    price: 20,
    application_state: '在售',
    commodity_type: ['教材', '全新'],
    on_shelf_time: '2017-3-1'
  },
  {
    imageName: [require('@/assets/image7.png'), '上财女生必备神仙水'],
    key: '7',
    price: 24,
    application_state: '在售',
    commodity_type: ['化妆品'],
    on_shelf_time: '2017-1-1'
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
  mounted () {
    this.onSearch()
  },
  methods: {
    onSearch () {
      getMyCommodity(this.form)
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
    deleteCommodity (id) {
      DeleteCommodity(id)
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
      this.$router.push(`/CommodityPublish/${CommodityID}`)
    }
  }
}
</script>

