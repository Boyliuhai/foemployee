<template>
   <div>
     
        <div class="page-wrap"> 
        <gheader></gheader>
         
       <pre> </pre>
          <div class="logo">

       <pre> </pre>
      <p class="mint-home-desc">施工人员信息录入表</p>
    </div>
    <mt-index-list class="mt-index-list" ref="form" :v-model="form">
                 
                      <p class="p">身份证信息确认</p>
                        <mt-cell class="mt-cell" label="姓名：">{{form.name}}
                        </mt-cell>
                        <mt-cell class="mt-cell" label="民族：">{{form.nation}}
                        </mt-cell>
                         <mt-cell class="mt-cell" label="地址：">{{form.address}}
                        </mt-cell>
                         <mt-cell class="mt-cell" label="公民身份证号码：">{{form.IDCard}}
                        </mt-cell>
                        <mt-cell class="mt-cell" label="出生年月：" rows="4">{{form.Birth}}
                        </mt-cell>
                           <mt-cell class="mt-cell" label="性别：">{{form.sex}}
                        </mt-cell>
                          <!-- <mt-cell class="mt-cell" label="测试：">{{this.$store.commit('change',ccontractId)}}
                        </mt-cell> -->
                
    </mt-index-list>
    <div class="page-button-group">
       
        <mt-button size="large" type="primary" @click="selectproject">确认</mt-button>
  
      </div>
      &nbsp;

       <gfooter></gfooter>
  </div>
     </div>
</template>

<script>
import { Toast } from 'mint-ui';
import axios from 'axios';
import { mapGetters } from 'vuex';
import global from '@/global/gloabl.js';
const LOGIN_URL = global.SERVER_URL+'identitycard/message';
export default {
  data () {
    return {
        form:{
      name:'',
      nation:'',
      address:'',
      IDCard:'',
      Birth:'',
      sex:'',
        },
        forms:[],
    }
  },
  methods:{

    selectproject(){
      this.$store.state.vuexname=this.form.name;
     this.$store.state.vuexnation=this.form.nation;
     this.$store.state.vuexaddress=this.form.address;
     this.$store.state.vuexIDCard=this.form.IDCard;
     this.$store.state.vuexBirth=this.form.Birth; 
       this.$store.state.vuexsex=this.form.sex; 
        this.$router.push('touxiang');
      },

      request(){
      let that = this;
			axios.post(LOGIN_URL).then(function(response){//如果接受成功
         that.forms =JSON.parse(JSON.stringify(response.data));
         that.form.name=that.forms[4];
                that.form.address=that.forms[0];
                 
                that.form.IDCard=that.forms[1];
               
                that.form.nation=that.forms[2];
                
                that.form.sex=that.forms[3];

                  that.form.Birth=that.forms[5];

                that.form.name=that.forms[4];
            
               
            }).catch(function(error){
                console.log("error = "+error);
            });
               
    },
    
  },
computed:{
  
},
    created(){
      this.request();
      }
}
</script>

<style>
.mt-index-list{
  height:24em;
}
.page-picker-desc{
  font-weight:bold;
   font-size:1em;
  font-family:"Hiragino Sans GB";
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
</style>
