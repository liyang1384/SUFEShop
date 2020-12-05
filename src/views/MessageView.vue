<template>
  <a-row >
    <a-col :span="8">
  <a-list id="MessageView" style="width: 450px;"
    item-layout="horizontal" bordered
    v-for="d in data" :key="d"
  >
      <a-list-item>
        <template #actions>
          <a-button type="primary">打开会话窗口</a-button>
        </template>
        <a-list-item-meta
          :description="d.message" style="text-align: left;"
        >
          <template #title >
            <a href="#" >{{ d.recieverName }}</a>
          </template>
          <template #avatar>
            <a-badge  v-if="d.recieverisOnline === false" status="success" />
            <a-badge  v-else status="default" />
            <a href="#"><a-avatar :src="d.recieverAvatar" /></a>
          </template>
        </a-list-item-meta>
      </a-list-item>
  </a-list>
    </a-col >
    <a-col :span="12">
      <a-list item-layout="horizontal"
      :data-source="data"
      v-for="d in data"  :key="d">
      <a-list-item >
        <a-list-item-meta
          :description="d.message" style="text-align: left;"
        >
          <template #title >
            {{ d.recieverName }}
          </template>
          <template #avatar>
            <a-badge  v-if="d.recieverisOnline === false" status="success" />
            <a-badge  v-else status="default" />
            <a href="#"><a-avatar :src="d.recieverAvatar" /></a>
          </template>
        </a-list-item-meta>
      </a-list-item>
    </a-list>
      <a-textarea v-model:value="form.message" showCount :maxlength="100" autosize:true />
      <a-button type="primary">发送</a-button>
    </a-col>
  </a-row>
</template>

<script>
const data = [
  {
    key: '1',
    message: '很急很急',
    senderName: '大红红',
    recieverName: '小红红',
    recieverAvatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    recieverisOnline: true,
    sendTime: '2020-1-1-19:30'
  },
  {
    key: '2',
    message: '很急很急',
    senderName: '大红红',
    recieverName: '中红红',
    recieverAvatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    recieverisOnline: false,
    sendTime: '2020-1-1-19:30'
  },
  {
    key: '3',
    message: '很急很急',
    senderName: '大红红',
    recieverName: '小红红',
    recieverAvatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    recieverisOnline: false,
    sendTime: '2020-1-1-19:30'
  },
  {
    key: '4',
    message: '很急很急',
    senderName: '大红红',
    recieverName: '巨小红红',
    recieverAvatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    recieverisOnline: true,
    sendTime: '2020-1-1-19:30'
  },
  {
    key: '5',
    message: '很急很急',
    senderName: '大红红',
    recieverName: '微小红红',
    recieverAvatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    recieverisOnline: true,
    sendTime: '2020-1-1-19:30'
  },
  {
    key: '6',
    message: '很急很急',
    senderName: '大红红',
    recieverName: '硕大红红',
    recieverAvatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    recieverisOnline: false,
    sendTime: '2020-1-1-19:30'
  }
]

export default {
  data () {
    return {
      data,
      form: {
        message: '',
        sendTime: '',
        recieverName: '',
        sendingName: '大红红'
      }
    }
  }
}
</script>
<style></style>
