<template>
  <a-card>
    <div :class="advanced ? 'search' : null">
      <a-form layout="horizontal">
        <div :class="advanced ? null : 'fold'">
          <a-row>
            <a-col :md="8" :sm="24">
              <a-form-item
                label="商品编号"
                :labelCol="{ span: 5 }"
                :wrapperCol="{ span: 18, offset: 1 }"
              >
                <a-input placeholder="请输入" />
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item
                label="最低价格"
                :labelCol="{ span: 5 }"
                :wrapperCol="{ span: 18, offset: 1 }"
              >
                <a-input placeholder="请输入" />
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item
                label="最高价格"
                :labelCol="{ span: 5 }"
                :wrapperCol="{ span: 18, offset: 1 }"
              >
                <a-input-number
                  v-model:value="form.max_price"
                  :formatter="
                    (value) =>
                      `￥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                  "
                  :parser="(value) => value.replace(/\￥\s?|(,*)/g, '')"
                  @change="onChange"
                />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row v-if="advanced">
            <a-col :md="8" :sm="24">
              <a-form-item
                label="更新日期"
                :labelCol="{ span: 5 }"
                :wrapperCol="{ span: 18, offset: 1 }"
              >
                <a-date-picker
                  style="width: 100%"
                  placeholder="请输入更新日期"
                />
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item
                label="使用状态"
                :labelCol="{ span: 5 }"
                :wrapperCol="{ span: 18, offset: 1 }"
              >
                <a-select placeholder="请选择">
                  <a-select-option value="1">关闭</a-select-option>
                  <a-select-option value="2">运行中</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item
                label="描述"
                :labelCol="{ span: 5 }"
                :wrapperCol="{ span: 18, offset: 1 }"
              >
                <a-input placeholder="请输入" />
              </a-form-item>
            </a-col>
          </a-row>
        </div>
        <span style="float: right; margin-top: 3px">
          <a-button type="primary">查询</a-button>
          <a-button style="margin-left: 8px">重置</a-button>
          <a @click="toggleAdvanced" style="margin-left: 8px">
            {{ advanced ? "收起" : "展开" }}
            <a-icon :type="advanced ? 'up' : 'down'" />
          </a>
        </span>
      </a-form>
    </div>
    <div>
      <div class="operator">
        <a-button>批量操作</a-button>
      </div>
      <div class="alert">
        <a-alert type="info" :show-icon="true">
          <template #message>
            已选择 {{ selectedRows.length }} 项
            <a class="clear" @click="onClear">清空</a>
          </template>
        </a-alert>
      </div>
      <a-table
        :bordered="bordered"
        :loading="loading"
        :columns="columns"
        :dataSource="dataSource"
        :rowKey="rowKey"
        :pagination="pagination"
        :expandedRowKeys="expandedRowKeys"
        :expandedRowRender="expandedRowRender"
        @change="onChange"
        :rowSelection="
          selectedRows
            ? { selectedRowKeys: selectedRowKeys, onChange: updateSelect }
            : undefined
        "
      >
      </a-table>
    </div>
  </a-card>
</template>

<script>
// import StandardTable from '@/components/StandardTable';
const columns = [
  {
    title: '商品编号',
    dataIndex: 'commodityID'
  },
  {
    title: '商品名称',
    dataIndex: 'commodityName'
  },
  {
    title: '价格',
    dataIndex: 'price',
    sorter: true
  },
  {
    title: '申请人',
    dataIndex: 'userName'
  },
  {
    title: '申请时间',
    dataIndex: 'applyTime',
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
    commodityID: i,
    commodityName: '商品名称',
    price: Math.floor(Math.random() * 1000),
    userName: '申请人姓名',
    applyTime: '2018-07-26 12:00:00'
  });
}

export default {
  name: 'CommodityReview',
  data () {
    return {
      advanced: true,
      columns: columns,
      dataSource: dataSource,
      selectedRows: [],
      form: {
        application_state: 'TO_BE_REVIEWED',
        commodity_name: '',
        min_price: 0,
        max_price: '',
        sort: {
          name: 'apply_time',
          mode: 'asc'
        },
        username: '',
        auditor_name: '',
        page: '1'
      }
    }
  },
  methods: {
    deleteRecord (key) {
      this.dataSource = this.dataSource.filter(item => item.key !== key);
      this.selectedRows = this.selectedRows.filter(item => item.key !== key);
    },
    toggleAdvanced () {
      this.advanced = !this.advanced;
    },
    remove () {
      this.dataSource = this.dataSource.filter(
        item => this.selectedRows.findIndex(row => row.key === item.key) === -1
      );
      this.selectedRows = [];
    },
    onClear () {
      this.$message.info('您清空了勾选的所有行');
    },
    onStatusTitleClick () {
      this.$message.info('你点击了状态栏表头');
    },
    onChange () {
      this.$message.info('表格状态改变了');
    },
    onSelectChange () {
      this.$message.info('选中行改变了');
    },
    handleMenuClick (e) {
      if (e.key === 'delete') {
        this.remove();
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
