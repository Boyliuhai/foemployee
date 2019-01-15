<template>

<div class="PersonInfoAuthPage">

<Header headerTitle="个人信息认证"/>

<p class="msg">识别内容必须清晰可见<i>*</i></p>

<div class="UserUpImgPage">

<div>

<span >人脸识别</span><img @click="addUserFace" id='userFaceImg' name='livingImg' :src="userFaceImg" alt="">

</div>

<div>

<span>身份证正面</span><img @click="addIdCardPros" id='idCardProsImg' name='frontImg' :src="idCardProsImg" alt="">

</div>

<div>

<span>身份证反面</span><img @click="addIdCardCons" id='idCardConsImg' name='backImg' :src="idCardConsImg" alt="">

</div>

</div>

<div class="identityInfoPage">

<p class="identityInfo">身份信息</p>

<div class="userInfo">

<p class="userName border-bottom">真实姓名: <span id='userNameTxt'>请输入真实姓名</span></p>

<p class="idCard">身份证号: <span id="idCardTxt">请输入18位身份证号</span></p>

</div>

</div>

<mt-button size="large" @click="saveInfo">保存</mt-button>

<img id="cardFace" style="display:none;" name='ocrImg' :src="userFaceImg" alt="">

</div>

</template>

 

<script>

import Header from '@/components/common/HeaderBack.vue'

import userFaceImg from '@/assets/images/mine/userFace.png';

import idCardImg from '@/assets/images/mine/idCard.png';

import qs from 'qs';

export default {

components: {

Header

},

data() {

return {

userFaceImg: userFaceImg,

idCardProsImg: idCardImg,

idCardConsImg: idCardImg,

HaveRreview: false,

saveInfoAuth: true, //判断页面信息是否正确保存入数据库

isType: true //判断是安卓还是ios

}

},

created() {

this.isAndroid_ios()

},

methods: {

//判断是否是安卓还是ios

isAndroid_ios (){

const u = navigator.userAgent, app = navigator.appVersion;

const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器

const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

isAndroid == true ? this.isType = true: this.isType = false

},

dataURLtoFile(dataurl, filename) {//将base64转换为文件

var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],

bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);

while(n--){

u8arr[n] = bstr.charCodeAt(n);

}

return new File([u8arr], filename, {type:mime});

},

// 用户照片

addUserFace () {

if(this.isType){

window.android.face();//调用安卓的方法

}else{

 

}

window['userFaceImg'] = function(src){ // 人脸

document.getElementById('userFaceImg').setAttribute('src',src)

}

},

// 用户身份证正面

addIdCardPros () {

if(this.isType){

window.android.idpositive();//调用安卓的方法

}else{

}

window['idCardProsImg'] = function(src , userName , idCard, cardFace){ // 身份证正面

document.getElementById('idCardProsImg').setAttribute('src',src);

document.getElementById('userNameTxt').innerHTML = userName;

document.getElementById('idCardTxt').innerHTML = idCard;

document.getElementById('cardFace').setAttribute('src',cardFace);

}

},

// 用户身份证反面

addIdCardCons () {

if(this.isType){

window.android.idback();//调用安卓的方法

}else{

 

}

window['idCardConsImg'] = function(src){ // 身份证反面

document.getElementById('idCardConsImg').setAttribute('src',src)

}

},

saveInfo () {

const userName = document.getElementById('userNameTxt').innerHTML //用户姓名

const idCard = document.getElementById('idCardTxt').innerHTML; //用户身份证号

const appKey = '';

const token = localStorage.getItem('token') ? localStorage.getItem('token') : '' ;

const body = {

detailAddr:'', //详细地址

realName: userName,//姓名

be_idcard:'',

education:'', //学历

mobileType: '2',

liveAddr:'', //现居地址

liveCoordinate: '12,34,56,12,34,56', //现居地址经纬度

userId: localStorage.getItem('userId'),

idNo:idCard, //身份证号

versionNumber:'1.4',

result_auth: '',

token: localStorage.getItem('token')

}

const data = new FormData();

data.append('livingImg',this.dataURLtoFile(document.getElementById('userFaceImg').src,'living.png'));

data.append('frontImg',this.dataURLtoFile(document.getElementById('idCardProsImg').src,'idCardPros.png'));

data.append('backImg',this.dataURLtoFile(document.getElementById('idCardConsImg').src,'idCardCons.png'));

data.append('ocrImg',this.dataURLtoFile(document.getElementById('cardFace').src,'cardFace.png'));

data.append('detailAddr','');

data.append('realName',userName);

data.append('be_idcard','');

data.append('education','');

data.append('mobileType','2');

data.append('liveAddr','');

data.append('liveCoordinate','12,34,56,12,34,56');

data.append('userId',localStorage.getItem('userId'));

data.append('idNo',idCard);

data.append('versionNumber','1.4');

data.append('result_auth','');

data.append('token',localStorage.getItem('token'));

const msgHeader = appKey + token + this.toStr(body);

const signMsg = this.MD5(msgHeader).toUpperCase();

const _this = this

this.$ajax({

url:'接口',

method: 'post',

data,

headers: {

token,

signMsg,

}

}).then(res => {

if(res.code==200){

this.$router.push('/mine');

}

}).catch( e => {

})

},

toStr: function(params) {

return Object.getOwnPropertyNames(params).sort().map(key => {

return key + "=" + params[key];

}).join("|");

}

 

}

}

</script>

 

<style lang="scss" scoped>

.PersonInfoAuthPage {

margin-top: 0.88rem;

.msg {

padding-left: 0.28rem;

height: 0.63rem;

line-height: 0.63rem;

font-size: 0.2rem;

color: rgba(187, 187, 187, 1);

i {

color: rgba(246, 89, 111, 1);

}

}

button {

width: 5rem;

height: 0.8rem;

background: rgba(246, 89, 111, 1);

border-radius: 0.08rem;

border: none;

margin: 0.6rem 1.25rem 1.07rem;

font-size: 0.36rem;

color: rgba(255, 255, 255, 1);

}

// 保存图片

.UserUpImgPage {

width: 100%;

div {

width: 100%;

height: 3rem;

line-height: 3rem;

padding-left: 0.28rem;

color: rgba(64, 74, 76, 1);

background: rgba(255, 255, 255, 1);

margin-bottom: 0.2rem;

input {

position: absolute;

opacity: 0;

}

img {

width: 3.06rem;

height: 1.93rem;

margin-left: 0.41rem;

}

}

div:first-child {

img {

margin-left: 0.71rem;

}

}

div:last-child {

margin-bottom: 0;

}

}

// 个人信息

.identityInfoPage {

width: 100%;

height: 100%;

.identityInfo {

line-height: 0.63rem;

color: rgba(187, 187, 187, 1);

font-size: 0.2rem;

padding: 0rem 0.31rem;

}

.userInfo {

padding: 0rem 0.31rem;

background: rgba(255, 255, 255, 1);

.border-bottom::after {

border-bottom-color: rgba(187, 187, 187, 1);

}

p {

line-height: 1rem;

span {

margin-left: 0.59rem;

color: rgba(220, 218, 218, 1);

}

}

}

}

}

</style>
