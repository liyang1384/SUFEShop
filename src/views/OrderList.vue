<template>
  <a-layout-content
    id="OrderList"
    :style="{ padding: '0 50px', marginTop: '64px' }"
  >
    <div style="background: #fff; padding: 24px; minheight: 600px">
      <a-table :columns="orderListColumns" :data-source="OrderListdata">
        <template #title>
          <a-form layout="inline" :model="form">
            <a-form-item>
              <a-radio-group v-model:value="form.orderState">
                <a-radio-button value="1"> 买入订单 </a-radio-button>
                <a-radio-button value="2"> 卖出订单 </a-radio-button>
              </a-radio-group>
            </a-form-item>
            <a-form-item>
              <a-input-search
                v-model:value="form.searchText"
                placeholder="输入商品名称或订单号进行搜索"
                style="width: 400px"
                @search="onSearch"
              />
            </a-form-item>
            <a-form-item label="选择时间">
              <a-range-picker
                v-model:value="form.dateRange"
                @change="onChange"
              />
            </a-form-item>
            <a-form-item label="选择金额">
              <a-input-group compact>
                <a-input
                  v-model:value="form.minAmount"
                  style="width: 100px; text-align: center"
                  placeholder="最小金额"
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
                  placeholder="最大金额"
                />
              </a-input-group>
            </a-form-item>
          </a-form>
        </template>
        <template #order="{ record }">
          <div>订单号：{{ record.orderID }}</div>
          <div>{{ record.commodityName }}</div>
        </template>
        <template #counterpartyTitle>
          <div>{{ counterparty }}</div>
        </template>
      </a-table>
    </div>
  </a-layout-content>
</template>

<script>
const orderListColumns = [
  {
    title: '订单',
    dataIndex: 'order',
    slots: { customRender: 'order' }
  },
  {
    title: '金额',
    dataIndex: 'amount',
    slots: { customRender: 'amount' },
    align: 'center'
  },
  {
    dataIndex: 'counterpartyName',
    slots: { title: 'counterpartyTitle', customRender: 'counterpartyName' },
    align: 'center'
  },
  {
    title: '下单时间',
    dataIndex: 'orderTime',
    align: 'center'
  },
  {
    title: '订单状态',
    dataIndex: 'orderState',
    slots: { customRender: 'orderState' },
    align: 'center'
  },
  {
    title: '商品类别',
    dataIndex: 'commodityType',
    slots: { customRender: 'commodityType' },
    align: 'center'
  },
  {
    title: '操作',
    dataIndex: 'action',
    slots: { customRender: 'action' }
  }
]

// 此处数据为虚拟数据，后端完成接口时应删除
const OrderListdata = [
  {
    key: 1,
    orderID: '100000000001',
    commodityName: '商品名称占位符商品名称占位符',
    amount: 32,
    counterpartyName: 'Jack',
    orderTime: '2020-10-1 20:00',
    orderState: '待完成',
    commodityType: '书籍'
  },
  {
    key: 2,
    orderID: '100000000002',
    commodityName: '商品名称占位符商品名称占位符',
    amount: 32,
    counterpartyName: 'Jack',
    orderTime: '2020-10-1 20:00',
    orderState: '待完成',
    commodityType: '书籍'
  },
  {
    key: 3,
    orderID: '100000000003',
    commodityName: '商品名称占位符商品名称占位符',
    amount: 32,
    counterpartyName: 'Jack',
    orderTime: '2020-10-1 20:00',
    orderState: '待完成',
    commodityType: '书籍'
  }
]

export default {
  name: 'OrderList',
  components: {
  },
  data () {
    return {
      orderListColumns,
      OrderListdata,
      form: {
        orderState: '1',
        searchText: '',
        dateRange: [],
        minAmount: undefined,
        maxAmount: undefined
      }
    }
  },
  methods: {
    onSearch (value) {
    }
  },
  computed: {
    counterparty: function () {
      return this.orderState === '1' ? '卖家' : '买家'
    }
  }
}
</script>

<style scope lang="scss">
#OrderList {
  .ant-radio-button-wrapper {
    margin: 0 10px;
  }
}
</style>
