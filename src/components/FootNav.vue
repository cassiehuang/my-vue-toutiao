<template>
    <div id="footNav">
        <div class="itemRouter" v-for="(nav,index) in navList">
            <router-link :to="{name:nav.link}" >
                <div v-html="nav.icon"></div>
                <div class="name">{{nav.title}}</div>
            </router-link>
        </div>
    </div>
</template>
<script type="es6">
  import {Cookie} from './data/storage/storage.js'
export default {
    name:'FootNav',
    data(){
      return {
          navList:[
            {
              title:'首页',
              icon:'<i class="iconfont">&#xe663;</i>',
              link:"index",
            },
            {
              title:'西瓜视频',
              icon:'<i class="iconfont">&#xe63e;</i>',
              link:"weVideo",
            },
            {
              title:'微头条',
              icon:'<i class="iconfont">&#xe626;</i>',
              link:"hot",
            },
            {
              title:'未登陆',
              icon:'<i class="iconfont">&#xe6b3</i>',
              link:"mine",
            },
          ]
      }
    },
    created(){
      if(Cookie.get('username')){
        this.navList[3].title='我的';
      }else{
        this.navList[3].title = '未登录'
      }
    },
    updated(){
      if(Cookie.get('username')){
        this.navList[3].title='我的';
      }else{
        this.navList[3].title = '未登录'
      }
    }
}
</script>
<style scoped>
    #footNav{
        position: fixed;
        bottom: 0;
        left: 0;
        height: 14vw;
        display: grid;
        width: 100vw;
        grid-template-columns: 25% 25% 25% 25%;
        background: #ffffff;
        z-index: 1999;
      font-size: 4.5vw;
    }
  .itemRouter{
    padding-top: 1.5vw;
  }
  a.router-link-active {color: red;}
</style>
