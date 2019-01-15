<template>
  <div class="bg" id="node1">
   <div class="logo">
      &nbsp;
       <pre> </pre>
      <p class="mint-home-desc">青山电厂智能管理系统</p>
    </div>
      &nbsp;
      <pre> </pre>
       <div class="logo">
      &nbsp;
       <pre> </pre>
      <p class="mint-home-desc1">人员信息提交成功</p>
    </div>
      &nbsp;
       <pre> </pre>
        &nbsp;
         <pre> </pre>
            &nbsp;
         <pre> </pre>
           &nbsp;
       <gfooter></gfooter>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
  data () {
    return {
  
    }
  },
  methods:{
   
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
   background-color:cornsilk;
  /* background:url(../assets/050f186a5bf58b3c60dcea04921b5911.jpg) no-repeat; */
  position:absolute; left:0px; top:0px;
   width:100%; height:100%;
}
.mint-home-desc1{
  font-weight:bold;
  font-size:1.5em;
  color: chartreuse;
  font-family:"Hiragino Sans GB";
}
.mint-home-desc{
  font-weight:bold;
  font-size:1em;
  font-family:"Hiragino Sans GB";
}
</style>
