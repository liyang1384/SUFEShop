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
      <a @click="handleChangePage(record.commodity_id)">查看商品详情</a>
      <a-divider type="vertical" />
      <a-button>联系卖家</a-button>
      <a-divider type="vertical" />
      <a-popconfirm
        title="确认从收藏夹中删除商品吗?"
        ok-text="是"
        cancel-text="否"
        @confirm="confirm(record.commodity_id)"
        @cancel="cancel"
      >
        <a-button href="#" type="primary">删除商品</a-button>
      </a-popconfirm>
    </template>
  </a-table>
</template>

<script>
import { message } from 'ant-design-vue'
// import { listFavourites } from '@/axios/favourites.js'
import { deleteCommodityFromFavourites } from '@/axios/favourites.js'
const columns = [
  {
    dataIndex: 'commodity_picture',
    title: '商品图片',
    slots: { customRender: 'images' },
    width: 120,
    align: 'center'
  },
  {
    dataIndex: 'commodity_name',
    title: '商品名称',
    width: 350,
    align: 'center'
  },
  {
    title: '价格',
    dataIndex: 'price',
    width: 120,
    slots: { customRender: 'price' },
    align: 'center'
  },
  {
    title: '商品状态',
    dataIndex: 'commodity_state',
    align: 'center'
  },
  {
    title: '商品类别',
    dataIndex: 'commodity_type',
    align: 'center'
  },
  {
    title: '操作',
    dataIndex: 'action',
    slots: { customRender: 'action' },
    align: 'center'
  }
]

const data = [
  {
    commodity_id: '1000324',
    commodity_name: '教材配套教辅，九成新，没做过，可议价',
    price: 25,
    commodity_state: '在售',
    commodity_type: '教材',
    seller: 'BILL',
    comments: '教材配套教辅，九成新，没做过，可议价.....??!!',
    commodity_picture: require('@/assets/image1.png')
  },
  {
    commodity_id: '1000325',
    commodity_name: 'bbbbbbbbbbbbbbbbbbbb',
    price: 25,
    commodity_state: '在售',
    commodity_type: '教材',
    seller: 'BILL',
    comments: '高数教材配套教辅，九成新，没做过，可议价.....',
    commodity_picture: require('@/assets/testimg.png')
  }
]
export default {
  name: 'myfavourites',
  components: {},
  data () {
    return {
      data,
      columns,
      form: {
        user_id: 123,
        page: '1'
      }
    }
  },
  created: function () {
    /*
    listFavourites(this.form).then(function (response) {
      this.data = response.data;
    });
    */
  },
  methods: {
    confirm (commodity_id) {
      const form_0 = {
        user_id: this.form.user_id,
        commodity_id: commodity_id
      };
      deleteCommodityFromFavourites(form_0)
        .then((response) => {
          message.success('删除成功')
        })
        .catch((error) => {
          console.log(error)
          this.$message.info('失败')
        });
    },
    cancel (e) {
      console.log(e)
      message.error('删除已取消')
    },
    handleChangePage (commodity_id) {
      console.log(commodity_id)
      this.$router.push(`/CommodityDetail/${commodity_id}`)
    }
  }
}
</script>
