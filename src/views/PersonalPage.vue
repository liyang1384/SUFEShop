<template>
<div class="box">
  <span>
    <a-card size="small" title="基本设置" style="width:900px; margin-left: 200" align="left">
    <template #extra><a href="#"></a></template>
    <br/><p><b>用户名</b></p>
    <a-input v-model:value="user_id" placeholder="用户名" />
    <br/><br/><p><b>昵称</b></p>
    <a-input v-model:value="nick_name" placeholder="昵称" />
    <br/><br/><p><b>真实姓名</b></p>
    <a-input v-model:value="user_name" placeholder="真实姓名" />
    <br/><br/><p><b>邮箱</b></p>
    <a-input v-model:value="email" placeholder="邮箱" />
    <br/><br/><p><b>手机号</b></p>
    <a-input v-model:value="mobile" placeholder="手机号" />
    <br/><br/><br/><h4><b>信用分: <span v-html="credit"></span></b></h4>
    <br/>
    <p><a-button v-on:click="update_user_info" type="primary">确认修改</a-button></p>
    </a-card>
    </span>
    <span style="position: absolute;right: 100px;top: 140px;">
    <a-avatar size="large">
        <template #icon><UserOutlined /></template>
      </a-avatar>
      <a-button type="primary">更换头像</a-button>
    <img :src="avator" v-if="show_portrait"  style="position: absolute;right: 0px;top: 0px;width: 120px; height: 100px;" align="left" />
    <a-upload
    v-model:fileList="fileList"
    name="avatar"
    list-type="picture-card"
    class="avatar-uploader"
    :show-upload-list="false"
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    :before-upload="beforeUpload"
    @change="handleChange"
  >
    <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
    <div v-else>
      <!-- todo -->
      <loading-outlined v-if="loading" />
      <plus-outlined v-else />
      <div class="ant-upload-text">Upload</div>
    </div>
  </a-upload>
  </span>
</div>
<br/><br/><br/>
<a href="#" style="margin-left:0px">帮助</a>
    <a href="#" style="margin-left:200px">隐私</a>
    <a href="#" style="margin-left:200px">条款</a>
</template>

<style scoped>
    .box {
    width: 100%;
    height: 100%;
    text-align: justify;
    }
    .box:after {
    content: "";
    display: inline-block;
    overflow: hidden;
    width: 100%;
    }
    .box span {
    width: 100px;
    height: 100px;
    display: inline-block;
    text-align: center;
    line-height: 50px;
}
</style>

<script>
import { PlusOutlined, LoadingOutlined, UserOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
import { getUserDetail, putUserDetail } from '../axios/user.js';

function getBase64 (img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

export default {
  components: {
    LoadingOutlined,
    PlusOutlined,
    UserOutlined
  },
  methods: {
    update_user_info (e) {
      const form = {
        user_id: this.user_id,
        nick_name: this.nick_name,
        user_name: this.user_name,
        email: this.email,
        mobile: this.mobile,
        credit: this.credit,
        avatar: this.avatar
      };
      putUserDetail(form)
    },
    handleChange (info) {
      if (info.file.status === 'uploading') {
        this.loading = true;
        return;
      }
      if (info.file.status === 'done') {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, imageUrl => {
          this.imageUrl = imageUrl;
          this.loading = false;
        });
      }
      if (info.file.status === 'error') {
        this.loading = false;
      }
    },
    beforeUpload (file) {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        message.error('You can only upload JPG file!');
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
      }
      return isJpgOrPng && isLt2M;
    }
  },
  data () {
    return {
      nick_name: '',
      user_name: '',
      email: '',
      mobile: '',
      credit: '80',
      avatar: '',
      fileList: [],
      loading: false,
      imageUrl: '',
      Image: require('../assets/image1.png'),
      show_portrait: true,
      user_id: this.$store.user_id
    }
  },
  created: function () {
    const form_1 = { user_id: this.user_id };
    getUserDetail(form_1)
      .then((response) => {
        this.nick_name = response.data.nick_name;
        this.user_name = response.data.user_name;
        this.email = response.data.email;
        this.mobile = response.data.mobile;
        this.credit = response.data.credit;
        this.avator = response.data.avatar.url
      })
    console.log(this.user_name)
  }
}
</script>

<style>
.avatar-uploader > .ant-upload {
  width: 128px;
  height: 128px;
}
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>
