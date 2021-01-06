<template>
  <a-row >
    <a-col :span="7">
  <a-list id="MessageView" style="width: 350px;"
    item-layout="horizontal" bordered
    v-for="d in data" :key="d"
  >
  <a-button @click="GetReciever(d.user)" style="width: 350px;height:90px">
      <a-list-item>
        <template #actions>
        </template>
        <a-list-item-meta
          :description="d.message_content" style="text-align: left;"
        >
          <template #title >
            <a href="#" >{{ d.user }}</a>
          </template>
          <template #avatar>
            <a-badge  v-if="d.online_state === true" status="success" />
            <a-badge  v-else status="default" />
            <a href="#"><a-avatar :src="d.avatar" /></a>
          </template>
        </a-list-item-meta>
      </a-list-item>
      </a-button>
  </a-list>
    </a-col >
    <a-col :span="12">
      <a-list item-layout="horizontal"
      :data-source="data"
      v-for="d in data"  :key="d"  >
      <a-list-item v-if="form.user === d.user">
        <a-list-item-meta
          :description="d.message" style="text-align: left;"
        >
          <template #title >
            {{ d.user }}
          </template>
          <template #avatar>
            <a-badge  v-if="d.online_state === true" status="success" />
            <a-badge  v-else status="default" />
            <a href="#"><a-avatar :src="d.avatar" /></a>
          </template>
        </a-list-item-meta>
      </a-list-item>
    </a-list>
      <a-textarea v-model:value="form.message_content" showCount :maxlength="100" autosize:true />
      <a-button type="primary" @click="SendMessege()">发送</a-button>
    </a-col>
  </a-row>
</template>

<script>
import { sendMessege, showMessege } from '@/axios/communication.js';
const data = [
  {
    message_content: '很急很急',
    user: '大红红',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    online_state: true,
    send_time: '2020-1-1-19:30'
  }
]

export default {
  data () {
    return {
      data,
      form: {
        message_content: '',
        receive_user: '',
        user: '大红红'
      }
    }
  },
  mounted () {
    this.GetMessege()
  },
  methods: {
    GetReciever: function (e) {
      this.form.recieverName = e
    },
    SendMessege () {
      sendMessege(this.form)
        .then((response) => {
          const status_code = response.status
          if (status_code === 200) {
            this.GetMessege()
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
    GetMessege () {
      showMessege(this.$store.user_id)
        .then((response) => {
          const status_code = response.status
          if (status_code === 200) {
            this.data.message_content = response.data.message_content;
            this.data.user = response.data.user;
            this.data.online_state = response.data.online_state;
            this.data.avatar = response.data.avatar;
            this.data.message_content = response.data.message_content;
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
<style></style>
