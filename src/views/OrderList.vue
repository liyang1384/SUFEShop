<template>
  <a-card id="OrderList">
    <div :class="advanced ? 'search' : null">
      <a-form layout="horizontal">
        <div :class="advanced ? null : 'fold'">
          <a-row>
            <a-col :md="8" :sm="24">
              <a-form-item
                label="商品名称"
                :labelCol="{ span: 5 }"
                :wrapperCol="{ span: 18, offset: 1 }"
              >
                <a-input
                  v-model:value="form.commodity_name"
                />
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item
                label="最低价格"
                :labelCol="{ span: 5 }"
                :wrapperCol="{ span: 18, offset: 1 }"
              >
                <a-input v-model:value="form.min_price" />
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item
                label="最高价格"
                :labelCol="{ span: 5 }"
                :wrapperCol="{ span: 18, offset: 1 }"
              >
                <a-input v-model:value="form.max_price" />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row v-if="advanced">
            <a-col :md="8" :sm="24">
              <a-form-item
                label="订单类型"
                :labelCol="{ span: 5 }"
                :wrapperCol="{ span: 18, offset: 1 }"
              >
                <a-select v-model:value="form.order_type">
                  <a-select-option value="0"> 买进订单 </a-select-option>
                  <a-select-option value="1"> 卖出订单 </a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item
                label="订单状态"
                :labelCol="{ span: 5 }"
                :wrapperCol="{ span: 18, offset: 1 }"
              >
                <a-select v-model:value="form.order_state">
                  <a-select-option value="paying"> 待付款 </a-select-option>
                  <a-select-option value="paid"> 已付款 </a-select-option>
                  <a-select-option value="received"> 已收货 </a-select-option>
                  <a-select-option value="refunded"> 已退款 </a-select-option>
                  <a-select-option value="cancelled"> 已取消 </a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item
                label="商品类别"
                :labelCol="{ span: 5 }"
                :wrapperCol="{ span: 18, offset: 1 }"
              >
                <a-input
                  v-model:value="form.auditor_name"
                />
              </a-form-item>
            </a-col>
          </a-row>
        </div>
        <span style="float: right; margin-top: 3px">
          <a-button type="primary" @click="onSearch">查询</a-button>
          <a-button style="margin-left: 8px">重置</a-button>
          <a @click="toggleAdvanced" style="margin-left: 8px">
            {{ advanced ? "收起" : "展开" }}
            <UpOutlined v-if="advanced" />
            <DownOutlined v-else />
          </a>
        </span>
      </a-form>
    </div>
    <div>
      <a-table
        :columns="columns"
        :dataSource="dataSource"
        @change="ontableChange"
      >
        <template #order="{ record }">
          {{ record.commodity_name }}
        </template>
        <template #counterparty_title>
          {{ form.order_type == "0" ? "卖家" : "买家" }}
        </template>
        <template #counterparty_name="{ record }">
          {{ record.counterparty_name }}
        </template>
        <template #order_state="{ record }">
          {{ map_order_state(record.order_state) }}
        </template>
        <template #action="{ record }">
          <a v-if="record.order_state == 'paying'" style="margin-right: 8px"> 支付订单 </a>
          <a v-if="record.order_state == 'paid'" style="margin-right: 8px"> 确认收货 </a>
          <a v-if="record.order_state == 'received'" style="margin-right: 8px"> 退款 </a>
          <a v-if="record.order_state == 'received' || record.order_state == 'refunded'" style="margin-right: 8px"> 评价 </a>
        </template>
      </a-table>
    </div>
  </a-card>
</template>

<script>
import { DownOutlined, UpOutlined } from '@ant-design/icons-vue';
import { getOrderList } from '@/axios/order.js'
const columns = [
  {
    title: '订单',
    dataIndex: 'order',
    slots: { customRender: 'order' }
  },
  {
    title: '金额（元）',
    dataIndex: 'amount',
    align: 'center',
    sorter: true
  },
  {
    dataIndex: 'counterparty_name',
    slots: { title: 'counterparty_title', customRender: 'counterparty_name' },
    align: 'center'
  },
  {
    title: '下单时间',
    dataIndex: 'order_time',
    align: 'center',
    sorter: true
  },
  {
    title: '订单状态',
    dataIndex: 'order_state',
    slots: { customRender: 'order_state' },
    align: 'center'
  },
  {
    title: '商品类别',
    dataIndex: 'commodity_type',
    slots: { customRender: 'commodity_type' },
    align: 'center'
  },
  {
    title: '操作',
    dataIndex: 'action',
    slots: { customRender: 'action' }
  }
];

const dataSource = []
for (let i = 0; i < 100; i++) {
  dataSource.push({
    key: i,
    order_ID: '10000000000' + i,
    commodity_name: '商品名称',
    amount: Math.floor(Math.random() * 1000),
    counterparty_name: 'Jack',
    order_time: '2020-10-1 20:00',
    order_state: 'paying',
    commodity_type: '书籍'
  });
}
// 此处数据为虚拟数据，后端完成接口时应删除

export default {
  name: 'OrderList',
  components: {
    DownOutlined,
    UpOutlined
  },
  created: function () {
    // this.onSearch()
  },
  data () {
    return {
      advanced: true,
      columns: columns,
      dataSource: dataSource,
      selectedRowKeys: [],
      form: {
        user_id: this.$store.user_id,
        order_type: '0',
        order_state: 'paying',
        commodity_name: '',
        min_amount: '',
        max_amount: '',
        sort: {
          name: 'order_time',
          mode: 'desc'
        },
        page: '1'
      }
    };
  },
  methods: {
    onSearch (e) {
      getOrderList(this.form)
        .then((response) => {
          const status_code = response.status
          if (status_code === 200) {
            this.dataSource = response.data
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    toggleAdvanced () {
      this.advanced = !this.advanced;
    },
    counterparty: function () {
      return this.orderState === '1' ? '卖家' : '买家';
    },
    ontableChange (pagination, filters, sorter) {
      console.log(pagination)
      if (Object.prototype.hasOwnProperty.call(sorter, 'order')) {
        this.form.sort.name = sorter.columnKey;
        this.form.sort.mode = (sorter.orde === 'ascend' ? 'asc' : 'desc');
      } else {
        this.form.sort.name = 'order_time';
        this.form.sort.mode = 'desc';
      }
      this.onSearch()
    },
    map_order_state (order_state) {
      if (order_state === 'paying') {
        return '待付款'
      }
      if (order_state === 'paid') {
        return '已付款'
      }
      if (order_state === 'received') {
        return '已收货'
      }
      if (order_state === 'refunded') {
        return '已退款'
      }
      if (order_state === 'cancelled') {
        return '已取消'
      }
    }
  },
  computed: {}
};
</script>

<style scope lang="scss">
#OrderList {
  .search {
    margin-bottom: 54px;
  }
  .fold {
    width: calc(100% - 216px);
    display: inline-block;
  }
  .operator {
    margin-bottom: 18px;
  }
  .alert {
    margin-bottom: 16px;
    a {
      font-weight: 600;
    }
    .clear {
      float: right;
    }
  }

  @media screen and (max-width: 900px) {
    .fold {
      width: 100%;
    }
  }
}
</style>
