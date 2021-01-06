<template>
  <div id="CommodityPublish">
    <div style="background: #fff; padding: 24px; minheight: 600px">
      <a-page-header
        style="border: 1px solid rgb(235, 237, 240)"
        title="发布商品"
        @back="() => $router.go(-1)"
      />
      <p></p>
      <a-row >
        <a-col :span="6">
        </a-col>
        <a-col :span="16" height=600>
          <div class="height-1000" align="left">
            <a-upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            list-type="picture-card"
            :multiple="true"
            v-model:fileList="fileList"
            @change="handleChange"
          >
            <br />
             <a-button > <upload-outlined /> 上传商品图片 </a-button>
          </a-upload>
            <br/>
            <a-form :wrapper-col="{ span: 14 }">
              <a-form-item label="商品名称">
                <a-input placeholder="不超过20字" v-model="form.commodity_name" />
              </a-form-item>
            </a-form>
            <a-form layout='inline' :wrapper-col="{ span: 13 }">
              <a-form-item label="商品类别">
                <a-input placeholder="不超过5字" v-model="form.commodity_type"/>
              </a-form-item>
              <a-form-item label="商品价格">
                <a-input placeholder="请输入价格/¥" v-model="form.price"/>
              </a-form-item>
            </a-form>
            <br />
            <a-form >
              <a-form-item label="商品描述" :wrapper-col="{ span: 14 }">
                <a-textarea placeholder="请输入商品描述，如品牌型号、新旧程度、入手渠道、转手原因等"
                 :rows="4" v-model:value="form.detail" showCount :maxlength="100" autosize:true/>
              </a-form-item>
            </a-form>
          </div>
        </a-col>
      </a-row>
      <a-row>
        <a-divider />
          <a-button value="large" type="primary" style="left:580px" @click="publishCommodity">发布商品</a-button>
      </a-row>
    </div>
  </div>
</template>
<script>
import { UploadOutlined } from '@ant-design/icons-vue';
import { PublishCommodity } from '@/axios/commodity.js';
export default {
  name: 'CommodityDetail',
  components: {
    UploadOutlined
  },
  data () {
    return {
      previewVisible: false,
      form: {
        commodity_picture: require('@/assets/testimg.png'),
        commodity_name: '',
        price: '',
        commodity_type: '',
        detail: ''
      },
      fileList: [
        {
          uid: '-1',
          name: 'xxx.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
        }
      ]
    }
  },
  methods: {
    handleChange (info) {
      let fileList = [...info.fileList];

      // 1. Limit the number of uploaded files
      //    Only to show two recent uploaded files, and old ones will be replaced by the new
      fileList = fileList.slice(-1);

      // 2. read from response and show file link
      fileList = fileList.map(file => {
        if (file.response) {
          // Component will show file.url as link
          file.url = file.response.url;
          this.form.commodity_picture = file.url;
        }
        return file;
      });
      this.fileList = fileList;
    },
    publishCommodity () {
      PublishCommodity(this.form)
        .then((response) => {
          const status_code = response.status
          if (status_code === 200) {
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
