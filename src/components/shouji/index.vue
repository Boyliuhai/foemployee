<template>
  <div class="bg" id="node1">
        <gheader></gheader>
   <div class="logo">
      &nbsp;
       <pre> </pre>
      <p class="mint-home-desc">施工人员信息录入表</p>
    </div>
       <pre> </pre>
        <p class="page-picker-desc">请填写您的手机号码</p>
        <pre> </pre>
        <el-row>
             <el-col :span="5">
                <el-form-item>
                      <pre> </pre>
                </el-form-item>
                </el-col> 
                <el-col span="18">
      <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
  <el-form-item
    label="手机号码"
    prop="phone"
    :rules="[
      { required: true, message: '手机号不能为空'},
      { type: 'number', message: '手机号必须为数字值'},
    ]"
  >
    <el-input type="phone" v-model.number="numberValidateForm.phone" autocomplete="off"></el-input>
  </el-form-item>
      </el-form>
         </el-col> 
           <el-col :span="3">
                <el-form-item>
                </el-form-item>
                </el-col> 
        </el-row>	
&nbsp;
  <pre> </pre>
    <div class="page-button-group">
        <mt-button size="large" type="primary"@click="resetForm('numberValidateForm')">重置</mt-button>
         <pre> </pre>
 <mt-button size="large" type="primary"  @click="submitForm('numberValidateForm')">下一步</mt-button>
  </div>
      &nbsp;
  <pre> </pre>
       <gfooter></gfooter>
  </div>
</template>

<script>
import { MessageBox,Toast } from 'mint-ui';
import axios from 'axios';
import { mapState } from 'vuex';
export default {
  data () {
    return {
 	 numberValidateForm: {
      phone:'',
      },
    }
  },
  methods:{
 submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
              this.$store.state.vuexphone=this.numberValidateForm.phone;
                this.$router.push('zongye');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
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
