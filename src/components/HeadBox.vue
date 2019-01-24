<template>
    <div id="headBox">
        <mt-header fixed title="" class="head">
            <span slot="left"><img v-lazy="imgLogo" class="logo"></span>
            <router-link to="/search" slot="right">
                <div class="search">
                  <span class="searchIcon"><i class="iconfont">&#xe69b;</i></span>
                  <span>搜索些啥呢...</span>
                </div>
            </router-link>
        </mt-header>
    </div>
</template>
<script type="es6">
export default {
    name:'HeadBox',
    data(){
      return {
          imgLogo:'./static/images/logo.png',
          value:'',
      }
    },
}
</script>
<style scoped>
    #headBox{
      height: 14vw;
    }
    #headBox .head{
        height: 14vw;
        background: red;
    }
    .logo{
        width: 30vw;
    }
    .search{
        height: 9vw;
        width: 60vw;
        border-radius: 2vw;
        background: #eeeeee;
      color: #000000;
      font-size: 4vw;
      text-align: left;
      line-height: 9vw;
    }
  .searchIcon{
    margin: 0 0 0 2vw;
  }
  .iconfont{
    font-size: 4.5vw;
  }
</style>
