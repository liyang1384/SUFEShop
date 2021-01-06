<template>
  <div class="standard-table">
    <div class="alert">
      <a-alert type="info" :show-icon="true" v-if="selectedRows">
        <slot name="message">
          已选择 {{ selectedRows.length }} 项
          <a class="clear" @click="onClear">清空</a>
        </slot>
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
      <template
        v-slot:[slot]="text, record, index"
        v-for="slot in Object.keys(this.$scopedSlots).filter(
          (key) => key !== 'expandedRowRender'
        )"
      >
        <slot :name="slot" v-bind="{ text, record, index }"></slot>
      </template>
      <template v-for="slot in Object.keys(this.$slots)">
        <slot :name="slot"></slot>
      </template>
      <slot
        v-bind="{ record, index, indent, expanded }"
        :name="this.$slots.expandedRowRender ? 'expandedRowRender' : ''"
      ></slot>
    </a-table>
  </div>
</template>

<script>
export default {
  name: 'StandardTable',
  props: {
    bordered: Boolean,
    loading: [Boolean, Object],
    columns: Array,
    dataSource: Array,
    rowKey: {
      type: [String, Function],
      default: 'key'
    },
    pagination: {
      type: [Object, Boolean],
      default: true
    },
    selectedRows: Array,
    expandedRowKeys: Array,
    expandedRowRender: Function
  },
  data () {
    return {
      needTotalList: []
    };
  },
  methods: {
    updateSelect (selectedRowKeys, selectedRows) {
      this.$emit('update-selected-rows', selectedRows);
      this.$emit('selected-row-change', selectedRowKeys, selectedRows);
    },
    initTotalList (columns) {
      const totalList = columns
        .filter(item => item.needTotal)
        .map(item => {
          return {
            ...item,
            total: 0
          };
        });
      return totalList;
    },
    onClear () {
      this.updateSelect([], []);
      this.$emit('clear');
    },
    onChange (pagination, filters, sorter, { currentDataSource }) {
      this.$emit('change', pagination, filters, sorter, { currentDataSource });
    }
  },
  created () {
    this.needTotalList = this.initTotalList(this.columns);
  },
  watch: {
    selectedRows (selectedRows) {
      this.needTotalList = this.needTotalList.map(item => {
        return {
          ...item,
          total: selectedRows.reduce((sum, val) => {
            let v;
            try {
              v = val[item.dataIndex]
                ? val[item.dataIndex]
                : eval(`val.${item.dataIndex}`);
            } catch (_) {
              v = val[item.dataIndex];
            }
            v = !isNaN(parseFloat(v)) ? parseFloat(v) : 0;
            return sum + v;
          }, 0)
        };
      });
    }
  },
  computed: {
    selectedRowKeys () {
      return this.selectedRows.map(record => {
        return typeof this.rowKey === 'function'
          ? this.rowKey(record)
          : record[this.rowKey];
      });
    }
  }
};
</script>

<style scoped lang="scss">
.standard-table {
  .alert {
    margin-bottom: 16px;
    .message {
      a {
        font-weight: 600;
      }
    }
    .clear {
      float: right;
    }
  }
}
</style>
