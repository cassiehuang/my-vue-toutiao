<template>
    <div class="main">
      <div class="bgGray">
        <div class="topBox" v-if="state">
          <span class="avatar"><i class="iconfont3">&#xe679;</i></span>
          <span class="logout" @click="logout">{{username}}</span>
        </div>
        <div class="topBox" v-else>
          <span class="avatar"><i class="iconfont1">&#xe679;</i></span>
          <span class="logout" @click="login">点击登录</span>
        </div>
        <div class="grid grid1">
          <div class="item">
            <div class="colorWhite">0</div>
            <div class="colorGray">动态</div>
          </div>
          <div class="item">
            <div class="colorWhite">0</div>
            <div class="colorGray">关注</div>
          </div>
          <div class="item">
            <div class="colorWhite">0</div>
            <div class="colorGray">粉丝</div>
          </div>
        </div>
      </div>
      <div class="grid bgWhite grid2">
        <div class="item">
          <div><i class="iconfont">&#xe60c;</i> </div>
          <div>收藏</div>
        </div>
        <div class="item">
          <div><i class="iconfont">&#xe62f;</i> </div>
          <div>历史</div>
        </div>
        <div class="item">
          <div><i class="iconfont">&#xe629;</i> </div>
          <div>推送</div>
        </div>
      </div>
      <div class="longBox spanCell" @click="login">消息通知
        <i class="iconfont2">&#xe64a;</i>
      </div>
      <div class="longBox spanCell" @click="login">头条商城
        <i class="iconfont2">&#xe64a;</i>
      </div>
      <div class="longBox" @click="login">京东特供
        <i class="iconfont2">&#xe64a;</i>
      </div>
      <div class="longBox spanCell" @click="login">用户反馈
        <i class="iconfont2">&#xe64a;</i>
      </div>
      <div class="longBox" @click="login">系统设置
        <i class="iconfont2">&#xe64a;</i>
      </div>
      <LoginBox :show="show" @changeShow="changeShow"></LoginBox>
    </div>
</template>

<script type="es6">
  import {Cookie} from '../data/storage/storage.js'
  import LoginBox from '../LoginBox.vue'
    export default {
        name:'mine',
        data(){
            return{
              state:false,
              show:false,
              username:'',
            }
        },
      methods:{
        logout(){
          Cookie.remove('username');
          this.state = false;
          this.$root.$children[0].$refs.footNav.$forceUpdate();
        },
        login(){
          if(this.state == false){
            this.show = true;
          }
        },
        changeShow(isShow,isLogin){
          this.show = false;
          this.state = isLogin;
          this.username = Cookie.get('username');
        },
      },
      created(){
        if(Cookie.get('username')){
          this.state = true;
          this.username = Cookie.get('username');
        }
        else{
          this.state = false;
        }
      },
      components:{
        LoginBox,
      }

    }
</script>

<style scoped>
  .main{
    height: calc(100% - 14vw);
    position: absolute;
    top:0;
    z-index: 10;
    width: 100%;
    overflow-y: scroll;
  }
  .bgGray{
    background: #777670;
  }
  .bgWhite{
    background: #ffffff;
  }
  .colorWhite{
    color: #ffffff;
  }
  .colorGray{
    color: #c8c8cd;
  }
  .topBox{
    padding: 5vw 5vw 3vw 5vw;
    text-align: left;
  }
  .topBox .avatar{
    display: inline-block;
    padding: 2vw 3.5vw 4vw 2.5vw;
    border-radius: 50%;
    background: #e8e7e4;
    width: 7vw;
    height: 7vw;
  }
  .topBox .logout{
    color: #ffffff;
    font-size: 4.5vw;
    font-weight: bold;
    margin-left: 2vw;
    position: relative;
    top:-1vw;
  }
  .grid{
    overflow: hidden;
    text-align: center;
    font-size: 3vw;
  }
  .grid .item{
    width: 33%;
    float: left;
    margin:5vw 0;
  }
  .grid .item>div:first-child{
    margin-bottom: 1.5vw;
  }
  .grid2{
    border-bottom: 1px solid #c8c8cd;
  }
  .longBox{
    background: #ffffff;
    color: #000000;
    text-align:left;
    padding: 3.5vw;
    border-bottom:1px solid #c8c8cd;
  }
  .spanCell{
    margin-top: 2.5vw;
  }
  .iconfont1{
    font-family:"iconfont";
    font-size:8vw;
    font-style:normal;
  }
  .iconfont2{
    float: right;
    font-family:"iconfont";
    font-size:4vw;
    font-style:normal;
  }
  .iconfont3{
    font-family:"iconfont";
    font-size:8vw;
    font-style:normal;
    color: red;
  }
</style>
