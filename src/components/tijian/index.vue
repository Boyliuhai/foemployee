<template>
  <div class="bg" id="node1">
        <gheader></gheader>
   <div class="logo">
      &nbsp;
       <pre> </pre>
      <p class="mint-home-desc">施工人员信息录入表</p>
    </div>
       <pre> </pre>
        <p class="page-picker-desc">请上传您的体检报告</p>
        <pre> </pre>
								<el-upload
								  class="upload-demo"
								  :action="uploadFile"
								  :on-error="uploadError"
								  :on-success="uploadSuccess"
								  :data="uploadFileDataA"
								  :on-exceed="uploadExceed"
                                  :limit='1'>
								<el-button slot="trigger" size="small" type="primary">上传</el-button>
								<div slot="tip" class="el-upload__tip"></div>
							</el-upload>
&nbsp;
  <pre> </pre>
    <div class="page-button-group">
       
        <mt-button size="large" type="primary" @click="selectproject">下一步</mt-button>
  
      </div>
      &nbsp;
  <pre> </pre>
       <gfooter></gfooter>
  </div>
</template>

<script>
import { MessageBox,Toast } from 'mint-ui';
import { mapState } from 'vuex';
import axios from 'axios';
import global from '@/global/gloabl.js';
const GET_COMPANY_URL = global.SERVER_URL+'upload/upTijian';
const LOGIN_URL = global.SERVER_URL+'identitycard/findhealthload';
export default {
  data () {
    return {
      insuranceFilePath:'',
        uploadFile:GET_COMPANY_URL,
        	uploadFileDataA:{
			fileType:'employee/employeeERFile',detail:'',
			},
    
    }
  },
  methods:{
    request(){
        let that = this;
			axios.post(LOGIN_URL).then(function(response){//如果接受成功
         that.insuranceFilePath =JSON.parse(JSON.stringify(response.data));
             that.$store.state.vuexinsuranceFilePath=that.insuranceFilePath;
            }).catch(function(error){
                console.log("error = "+error);
            });
    },
     // 上传成功后的回调
		uploadSuccess (response, file, fileList) {	
		console.log('上传文件', response)
		},
		// 上传错误
		uploadError (response, file, fileList) {
		console.log('上传失败，请重试！')
		},
		uploadExceed(files,fileList)
        {
            alert('已经超出上传文件限制，请删除之前的文件！');
		},
  
    selectproject(){
      this.request();
     this.$router.push('/shouji');
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
