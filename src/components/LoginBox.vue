<template>
<div>
  <mt-popup
    v-model="showBlock"
    position="bottom"
    modal=false>
    <div class="loginBox">
      <div class="close" @click="close(false)">
        <i class="iconfont">&#xe624;</i>
      </div>
      <h4 class="slogan">登录你的头条，精彩永不消失</h4>
      <div class="inputForm">
        <mt-field  placeholder="请输入用户名" v-model="username"></mt-field>
        <div class="hint">
          <p v-show="hint1">请填入用户名</p>
        </div>

        <mt-field  placeholder="111是正确密码" type="password" v-model="password"></mt-field>
        <div class="hint">
          <p v-show="hint2">密码错误</p>
        </div>
        <div class="submit" @click="login">
          进入头条
        </div>
      </div>
    </div>
  </mt-popup>
</div>
</template>
<script type="es6">
  import myAxios from './data/axios/myAxios.js'
  import {Cookie} from './data/storage/storage.js'
  export default {
    name:'loginBox',
    data(){
      return {
        showBlock:this.show,
        username:'',
        password:'',
        hint1:false,
        hint2:false,
      }
    },
    methods:{
      login(){
        if(this.password=='111'&&this.username!=''){
          let params = {
              username: this.username,
              password: this.password
          };
          myAxios.post('login',params)
            .then(res => {
              Cookie.set('username',this.username,30);
              this.isLogin = true;
              this.$root.$children[0].$refs.footNav.$forceUpdate();
              this.close(true);
            })
            .catch(err => {
              console.log(err);
            });

        }
        else if(this.username==''){
          this.hint1 = true;
        }
        else if(this.username!=''&&this.password!='111'){
          this.hint2 = true;
        }
      },
      close(isLogin){
        this.showBlock = false;
        this.$emit('changeShow',false,isLogin);
      },
    },
    props:['show'],
    watch:{
      show:{
        handler(curVal,oldVal){
          this.showBlock = curVal;
        }
      },
      username:{
        handler(curVal,oldVal){
          this.hint1 = false;
        }
      },
      password:{
        handler(curVal,oldVal){
          this.hint2 = false;
        }
      }
    }
  }
</script>
<style scoped>
  .mint-popup{
    transition-duration: 0.3s;
    border-radius: 2vw 2vw 0 0;
    height: calc(100% - 1vw);
  }
  .loginBox{
    width: 100vw;
    height:100%;
    border-radius: 20px 20px 0 0;
    text-align: left;
  }
  .close{
    margin-left: 94vw;
    margin-top: 1.5vw;
  }
  .iconfont{
    font-size: 4vw;
  }
  .slogan{
    font-size: 5vw;
    text-align: center;
    margin: 8vw 0 6vw 0;
  }
  .inputForm{
    width: 80vw;
    margin: 0 auto;
    font-size: 4vw;
  }
  .mint-cell-wrapper,.submit{
    border-radius: 8vw;
    border: 1px solid #999;
    margin: 3vw auto;
    min-height: 10vw;
    height: 12vw;
  }
  .submit{
    background: red;
    text-align: center;
    line-height: 12vw;
    font-size: 5vw;
    color: #ffffff;
  }
  .hint{
    color: red;
    font-size: 3vw;
    padding-left: 3vw;
    height: 5vw;
  }
  #footNav{
    display: none !important;
  }
</style>
