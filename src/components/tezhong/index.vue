<template>
  <div class="bg" id="node1">
        <gheader></gheader>
   <div class="logo">
      &nbsp;
       <pre> </pre>
      <p class="mint-home-desc">施工人员信息录入表</p>
    </div>  
   
    <div class="page-radio-wrapper">
             <mt-radio 
              align="right"
              class="page-part"
              v-model="specialmessage"
              :options="options3">
            </mt-radio>
              <div>
            <mt-cell  title="所选作业为">{{specialmessage}}</mt-cell>
            
              </div>
             </div>
        <p class="page-picker-desc">请上传相关证书</p>
        <pre> </pre>
        <div class="shangchuan">
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
    <div class="page-button-group">
        <mt-button size="large" type="primary" @click="selectproject">下一步</mt-button>
  
      </div>
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
const UPLOADA_URL = global.SERVER_URL+'upload/upTezhong';
const LOGIN_URL = global.SERVER_URL+'identitycard/findspecialload';
export default {
  data () {
    return {
      uploadFile:UPLOADA_URL,
          specialmessage: '',
        uploadFileDataA:{
			fileType:'employee/employeeSPPicture',detail:'',
			},
        dialogImageUrl: '',
        dialogVisible: false,
       closeOnClickModal: false,
    
    examReportFilePath:'',
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
       this.$store.vuexspecialmessage=this.specialmessage;
        this.request();
        this.$router.push('tijian');
        
      },
      request()
      {
        let that = this;
      axios.post(LOGIN_URL).then(function(response){//如果接受成功
         that.examReportFilePath=JSON.parse(JSON.stringify(response.data));
            that.$store.vuexexamReportFilePath=that.examReportFilePath;
            
            }).catch(function(error){
                console.log("error = "+error);
            });
      }
  },
    created() {
    this.options3 = ['特种作业', '非特种作业',];
    },
}
</script>

<style>

#node1 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
    text-align: center;
  font-weight:bold;
  font-size:1.5em;
  color: brown;
  font-family:"Hiragino Sans GB";
}
.page-picker-desc{
  font-weight:bold;
    text-align: center;
   font-size:1em;
  font-family:"Hiragino Sans GB";
}
.page-radio-wrapper{}
.upload-demo{
   text-align: center;
}
.shangchuan{
   text-align: center;
}
</style>
