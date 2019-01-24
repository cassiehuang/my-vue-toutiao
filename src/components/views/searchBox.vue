<template>
  <div>
    <mt-popup
      v-model="popupVisible"
      position="right"
      modal=false>
      <div class="searchBox">

        <div class="searchButton">
          <span class="searchIcon"><i class="iconfont">&#xe69b;</i></span>
          <input type="search" placeholder="搜索" v-model="value" @keyup.enter="search">
        </div>
       <!-- <div class="confirmOrCancel" v-if="value" @click="search">
          搜索
        </div>-->
        <div class="confirmOrCancel" @click="back">
          取消
        </div>

        <div v-show="!isShow">
          <mt-cell
            v-for="item in result"
            :title="item.title"
            :value="item.value" :key="item.id">
          </mt-cell>
        </div>
      </div>

      <ul v-show="isShow" class="resultBox"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10">
        <li v-for="article in result" class="box" :key="article.id">
          <router-link :to="{name:'article',params:{id:article.id}}">
          <h3 class="title">{{ article.title }}</h3>
          <p class="intro">{{ article.intro }}</p>
          <img v-lazy="pic" v-for="pic in article.images" class="pic"/>
            </router-link>
          <div class="info">
            <span class="source">{{article.source}}</span>
            <span class="anthor">撰稿人：{{article.name}}</span>
          </div>
        </li>
      </ul>
    </mt-popup>
  </div>
</template>
<script type="es6">
  import myAxios from './../data/axios/myAxios.js'
  export default {
    name: 'searchBox',
    data(){
      return {
        popupVisible:true,
        value:'',
        autofocus:true,
        result:[],
        pageindex:1,
        isShow:false,
      }
    },
    methods: {
      loadMore(){
        if(this.value!=''){
          this.getSearchList(this.value,this.pageindex)
        }
      },
      async getSearchList(keyword,pageindex){
        let url = 'search';
        let params = {
          keyword,
          pageindex,
        };
        myAxios.get(url,params)
          .then(res => {
            this.pageindex = pageindex+1;
            if(pageindex==1){
              this.result = res.data.data.list;
            }else{
              this.result = this.result.concat(res.data.data.list);
            }
          })
          .catch(err => {
            console.log(err);
          });
      },
      search(){
        this.isShow = true;
      },
      back(){
        this.$router.go(-1);
      }
    },
    watch:{
      value:{
        handler(cur,old){
          if(cur != ''){
            this.isShow = false;
            this.getSearchList(cur,1);
          }else{
            this.result = [];
          }

        }
      }
    }
  }
</script>
<style scoped>
  .mint-popup{
    transition-duration: 0.3s;
    border-radius: 0;
    height: 100%;
  }
  .searchBox{
    width: 100vw;
    height:100%;
    border-radius: 0;
    text-align: left;
  }
  .searchButton{
    width: 75vw;
    color: #000;
    display: inline-block;
    padding: 2vw;
    background: #eeeeee;
    margin: 2vw;
  }
  input{
    border: none;
    outline: none;
    background: #eeeeee;
    width:85%;
    font-size: 4vw;
  }
  input:focus{
    border: none;
  }
  .confirmOrCancel{
    width: 12vw;
    display: inline-block;
    float: right;
    padding: 2vw;
    margin: 2vw 0 0 0;
    color: #007aff;
  }
  .mint-cell{
    height: 10vw;
    min-height: 10vw;
  }
  .resultBox{
    position: absolute;
    top:12vw;
    overflow: scroll;
    height: calc(100% - 12vw);
    width: 100%;
    text-align: left;
    margin-top: 2vw;
  }
  .box{
    padding: 3vw 0;
    border-bottom: 1px solid #cedad2;
  }
  .title{
    margin: 1vw 2vw;
    font-size: 4.5vw;
  }
  .intro{
    margin: 1vw 2vw;
    font-size: 2.5vw;
  }
  .pic{
    margin: 1vw 0 1vw 2vw;
    width: 31vw;
    height: 31vw;
  }
  image[lazy=loading] {
    width: 31vw;
    height: 31vw;
  }
  .info{
    font-size: 1.5vw;
    color: #666666;
    margin: 1vw 2vw;
  }
  .info span{
    margin-right: 3vw;
  }
  .mint-cell-wrapper{
    background-repeat:repeat;
  }
</style>
