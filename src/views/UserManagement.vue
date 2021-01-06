<template>
  <a-card>
    <div :class="advanced ? 'search' : null">
      <a-form layout="horizontal">
        <div :class="advanced ? null : 'fold'">
          <a-row>
            <a-col :md="8" :sm="24">
              <a-form-item
                label="用户名"
                :labelCol="{ span: 5 }"
                :wrapperCol="{ span: 18, offset: 1 }"
              >
                <a-input
                  placeholder="请输入"
                  v-model:value="form.user_name"
                />
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item
                label="昵称"
                :labelCol="{ span: 5 }"
                :wrapperCol="{ span: 18, offset: 1 }"
              >
                <a-input v-model:value="form.nickname" />
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item
                label="姓名"
                :labelCol="{ span: 5 }"
                :wrapperCol="{ span: 18, offset: 1 }"
              >
                <a-input v-model:value="form.real_name" />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row v-if="advanced">
            <a-col :md="8" :sm="24">
              <a-form-item
                label="账号状态"
                :labelCol="{ span: 5 }"
                :wrapperCol="{ span: 18, offset: 1 }"
              >
                <a-select v-model:value="form.account_state">
                  <a-select-option value="AVAILABLE">
                    可用
                  </a-select-option>
                  <a-select-option value="DISABLE"> 禁用 </a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item
                label="手机号"
                :labelCol="{ span: 5 }"
                :wrapperCol="{ span: 18, offset: 1 }"
              >
                <a-input placeholder="请输入" v-model:value="form.mobile" />
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item
                label="邮箱"
                :labelCol="{ span: 5 }"
                :wrapperCol="{ span: 18, offset: 1 }"
              >
                <a-input
                  placeholder="请输入"
                  v-model:value="form.email"
                />
              </a-form-item>
            </a-col>
          </a-row>
        </div>
        <span style="float: right; margin-top: 3px">
          <a-button type="primary" @click="onSearch">查询</a-button>
          <a-button style="margin-left: 8px" @click="reset">重置</a-button>
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
import { getUserList } from '@/axios/user.js';
const columns = [
  {
    title: '用户编号',
    dataIndex: 'user_id'
  },
  {
    title: '用户名',
    dataIndex: 'user_name'
  },
  {
    title: '昵称',
    dataIndex: 'nickname'
  },
  {
    title: '姓名',
    dataIndex: 'real_name'
  },
  {
    title: '手机号',
    dataIndex: 'mobile'
  },
  {
    title: '邮箱',
    dataIndex: 'email'
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
    user_id: i,
    user_name: '小红',
    nickname: '小红',
    real_name: '姓名',
    mobile: '11122223333',
    email: '1234567@qq.com'
  });
}

export default {
  name: 'Usermanagement',
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
        user_name: '',
        nickname: '',
        real_name: '',
        mobile: '',
        email: '',
        page: '1'
      }
    };
  },
  created: function () {
    /*
    getUserList(this.form).then((response) => {
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
    onSearch (e) {
      getUserList(this.form)
        .then((response) => {
          const status_code = response.status
          if (status_code === 200) {
            this.dataSource = response.data;
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
    reset () {
      this.form.user_name = '';
      this.form.nickname = '';
      this.form.real_name = '';
      this.form.mobile = '';
      this.form.email = '';
    },
    ontableChange (pagination, filters, sorter) {
      console.log(pagination)
      this.onSearch()
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
