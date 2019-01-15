<template>
  <div class="bg" id="node1">
        <gheader></gheader>
   <div class="logo">
      &nbsp;
       <pre> </pre>
      <p class="mint-home-desc">施工人员信息录入表</p>
    </div>
       <pre> </pre>
        <p class="page-picker-desc">请上传您的身份证照片照片</p>
        <pre> </pre>

<div>
    <el-upload
  :action="uploadFile"
  list-type="picture-card"
  :on-preview="handlePictureCardPreview"
  :on-remove="handleRemove"
   :data="uploadFileDataA"
  :limit="1">
  <i class="el-icon-plus"></i>
</el-upload>
<el-dialog :visible.sync="dialogVisible">
  <img width="100%" :src="dialogImageUrl" alt="">
</el-dialog>
</div>
&nbsp;
  <pre> </pre>

        <mt-button size="large" type="primary" @click="selectproject">下一步</mt-button>
  
      
      &nbsp;
  <pre> </pre>
       <gfooter></gfooter>
  </div>
</template>

<script>
import axios from 'axios';
import global from '@/global/gloabl.js';
import { Toast } from 'mint-ui';
import { mapState } from 'vuex';
const UPLOADA_URL = global.SERVER_URL+'upload/upshenfenzheng';
const LOGIN_URL = global.SERVER_URL+'identitycard/idcardload';
export default {
  data () {
    return {
      idCardFilePath:'',
      uploadFile:UPLOADA_URL,
        	uploadFileDataA:{//身份证
			fileType:'employee/employeeSFPicture',detail:'',
			},
         dialogImageUrl: '',
        dialogVisible: false,
    }
  },
  methods:{
       handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
    selectproject(){
      this.request();
        this.$router.push('queren');
      },
      request()
      {
       let that = this;
			axios.post(LOGIN_URL).then(function(response){//如果接受成功
         that.idCardFilePath =JSON.parse(JSON.stringify(response.data));
         that.$store.state.vuexidCardFilePath=that.idCardFilePath;
            }).catch(function(error){
                console.log("error = "+error);
            });
        
      },
  }
}
</script>

<style>
#node1 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #502c2c;
  margin-top: 0px;
}
.bg{
  background-size: 100% 100%;
   background-color:aliceblue;
  /* background:url(../assets/050f186a5bf58b3c60dcea04921b5911.jpg) no-repeat; */
  position:absolute; left:0px; top:0px;
   width:100%; height:100%;
}
.mint-home-desc{
  font-weight:bold;
  font-size:1.5em;
  color: brown;
  font-family:"Hiragino Sans GB";
}
.page-picker-desc{
  font-weight:bold;
   font-size:1em;
  font-family:"Hiragino Sans GB";
}
</style>
