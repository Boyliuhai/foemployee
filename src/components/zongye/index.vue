<template>
   <div class="all">
     
        <div class="page-wrap"> 
        <gheader></gheader>
         
       <pre> </pre>
          <div class="logo">

       <pre> </pre>
      <p class="mint-home-desc">施工人员信息录入表</p>
    </div>
    <mt-index-list  class="page-indexlist-wrapper" ref="form" :v-model="form">
                 
                      <p class="p">请进行信息确认</p>
                       <mt-cell class="mt-cell" label="公司信息：">{{form.providerCompanyName}}
                        </mt-cell>
                         <mt-cell class="mt-cell" label="项目信息：">{{form.projectName}}
                        </mt-cell>
                        <mt-cell class="mt-cell" label="姓名：">{{form.name}}
                        </mt-cell>
                        <mt-cell class="mt-cell" label="性别：">{{form.sex}}
                        </mt-cell>
                         <mt-cell class="mt-cell" label="民族：">{{form.nation}}
                        </mt-cell>
                         <mt-cell class="mt-cell" label="出生年月：">{{form.Birth}}
                        </mt-cell>
                        <mt-cell class="mt-cell" label="住址：" rows="4">{{form.address}}
                        </mt-cell>
                           <mt-cell class="mt-cell" label="公民身份证号码：">{{form.IDCard}}
                        </mt-cell>
                    <mt-cell class="mt-cell" label="电话号码：">{{form.phone}}
                        </mt-cell>
                          <mt-cell class="mt-cell" label="是否特征作业">{{form.specialmessage}}
                        </mt-cell>
    </mt-index-list>
    <div class="page-button-group">  
        <mt-button size="large" type="primary" @click="selectproject('form')">确认</mt-button>
      </div>
      &nbsp;
       <gfooter></gfooter>
  </div>
     </div>
</template>

<script>
import { MessageBox,Toast,Swipe } from 'mint-ui';
import axios from 'axios';
import { mapState } from 'vuex'; 
import global from '@/global/gloabl.js';
const REQUEST_URL = global.SERVER_URL+'zongti/ziti';
export default {
     name:'MessageBox',
      name:'Toast',
       name: 'Swipe',
  data () {
    return {
       form:{
          contractld:'',
          projectName:'',
          providerCompanyName:'',
          startTime:'',
          endTime:'',
          IDCard:'',
          name:'',
          nation:'',
          address:'',
          Birth:'',
          sex:'',
          idCardFilePath:'',
          faceFilePath:'',
          specialmessage:'',
          examReportFilePath:'',
          insuranceFilePath:'',
          phone:'',
       },
        
    }
  },
  methods:{
    selectproject(form){
      this.request(this.form);
        MessageBox.confirm('', {
        message: '提交之后无法修改，确认提交？',
        title: '提交信息',
        showConfirmButton:true,
        showCancelButton:true,
        closeOnClickModal: false,
        cancelButtonClass:'cancelButton',
        confirmButtonClass:'confirmButton',
        confirmButtonText:'确认',
        cancelButtonText:'取消',
      }).then(action => {
        //用户选择去登陆
        if (action == 'confirm') {
          this.$router.push('success');
        }
      }).catch(err => {
        //用户放弃登录则24小时之后再提示
        if (err == 'cancel') {
          Toast('取消')
        }
      });
      },

    request(params){
      let that=this;
                axios.post(REQUEST_URL,params).then(
                    function(resp)
                    {
                        that.$message.success("提交成功");
                    }
                ).catch(function(error){
                    that.$message.error('提交失败');
              })
    },
returnmessage(){
 
          this.form.specialmessage=this.$store.vuexspecialmessage;
          this.form.contractld=this.$store.state.vuexcontractld;
          this.form.projectName=this.$store.state.vuexprojectName;
          this.form.providerCompanyName=this.$store.state.vuexproviderCompanyName;
        //  alert(this.form.providerCompanyName);
          this.form.startTime=this.$store.state.vuexstartTime;
          this.form.endTime=this.$store.state.vuexendTime;
          this.form.IDCard=this.$store.state.vuexIDCard;
      
          this.form.name=this.$store.state.vuexname;
          this.form.nation=this.$store.state.vuexnation;
          this.form.address=this.$store.state.vuexaddress;
          this.form.Birth=this.$store.state.vuexBirth;
          this.form.sex=this.$store.state.vuexsex;
          this.form.phone=this.$store.state.vuexphone;  
           this.form.idCardFilePath=this.$store.state.vuexidCardFilePath;
      this.form.faceFilePath=this.$store.state.vuexfaceFilePath;
      this.form.examReportFilePath=this.$store.vuexexamReportFilePath;
     this.form.insuranceFilePath=this.$store.state.vuexinsuranceFilePath;
},
  },
    created(){
 
      this.returnmessage();
  
      }
}
</script>

<style>
.all{
 height: 100%;
}
.mint-home-desc{
  font-weight:bold;
  font-size:20px;
  text-align: center;
  font-family:"Hiragino Sans GB"; 
  color: brown;
}
.p{
    font-weight:bold;
  font-size:18px;
  color:black;
      text-align: center;
}
.page-indexlist-wrapper{
  height: 560px;
}
</style>
