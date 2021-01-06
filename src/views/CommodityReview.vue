<template>
  <a-card>
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
                  placeholder="请输入"
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
                label="审核状态"
                :labelCol="{ span: 5 }"
                :wrapperCol="{ span: 18, offset: 1 }"
              >
                <a-select v-model:value="form.application_state">
                  <a-select-option value="TO_BE_REVIEWED">
                    待审核
                  </a-select-option>
                  <a-select-option value="APPROVED"> 审核通过 </a-select-option>
                  <a-select-option value="REJECTED">
                    审核未通过
                  </a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item
                label="申请人"
                :labelCol="{ span: 5 }"
                :wrapperCol="{ span: 18, offset: 1 }"
              >
                <a-input placeholder="请输入" v-model:value="form.username" />
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item
                label="审核员"
                :labelCol="{ span: 5 }"
                :wrapperCol="{ span: 18, offset: 1 }"
              >
                <a-input
                  placeholder="请输入"
                  v-model:value="form.auditor_name"
                />
              </a-form-item>
            </a-col>
          </a-row>
        </div>
        <span style="float: right; margin-top: 3px">
          <a-button type="primary">查询</a-button>
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
      <div class="alert">
        <a-alert type="info" :show-icon="true">
          <template #message> 已选择 {{ selectedRowKeys.length }} 项 </template>
        </a-alert>
      </div>
      <a-table
        :columns="columns"
        :dataSource="dataSource"
        @change="ontableChange"
        :rowSelection="rowSelection"
      >
        <template #action>
          <a style="margin-right: 8px"> <CheckOutlined />通过 </a>
          <a style="margin-right: 8px"> <CloseOutlined />不通过 </a>
        </template>
      </a-table>
    </div>
  </a-card>
</template>

<script>
import {
  DownOutlined,
  UpOutlined,
  CheckOutlined,
  CloseOutlined
} from '@ant-design/icons-vue';
// import { getAuditCommodityList } from '@/axios/commodity.js';
const columns = [
  {
    title: '商品编号',
    dataIndex: 'commodity_ID'
  },
  {
    title: '商品名称',
    dataIndex: 'commodity_name'
  },
  {
    title: '价格',
    dataIndex: 'price',
    sorter: true
  },
  {
    title: '申请人',
    dataIndex: 'username'
  },
  {
    title: '申请时间',
    dataIndex: 'apply_time',
    sorter: true
  },
  {
    title: '操作',
    slots: { customRender: 'action' }
  }
];

const dataSource = [];

for (let i = 0; i < 100; i++) {
  dataSource.push({
    key: i,
    commodity_ID: i,
    commodity_name: '商品名称',
    price: Math.floor(Math.random() * 1000),
    username: '申请人姓名',
    apply_time: '2018-07-26 12:00:00'
  });
}

export default {
  name: 'CommodityReview',
  components: {
    DownOutlined,
    UpOutlined,
    CheckOutlined,
    CloseOutlined
  },
  data () {
    return {
      advanced: true,
      columns: columns,
      dataSource: dataSource,
      selectedRowKeys: [],
      form: {
        application_state: 'TO_BE_REVIEWED',
        commodity_name: '',
        min_price: 0,
        max_price: '',
        sort: {
          name: 'apply_time',
          mode: 'ascend'
        },
        username: '',
        auditor_name: '',
        page: '1'
      }
    };
  },
  created: function () {
    /*
    getAuditCommodityList(this.form).then(function (response) {
      this.dataSource = response.data;
    });
    */
  },
  computed: {
    rowSelection () {
      return {
        onSelectChange: (selectedRowKeys, selectedRows) => {
          this.selectedRowKeys = selectedRowKeys;
        },
        onSelectAll: (selected, selectedRows, changeRows) => {
          console.log(selected, selectedRows, changeRows);
        }
      };
    }
  },
  methods: {
    toggleAdvanced () {
      this.advanced = !this.advanced;
    },
    ontableChange (pagination, filters, sorter) {
      console.log(pagination)
      if (Object.prototype.hasOwnProperty.call(sorter, 'order')) {
        this.form.sort.name = sorter.columnKey;
        this.form.sort.mode = sorter.order;
      } else {
        this.form.sort.name = 'apply_time';
        this.form.sort.mode = 'ascend';
      }
    }
  }
};
</script>

<style lang="scss" scoped>
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
</style>
