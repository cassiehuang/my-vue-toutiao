<template>
  <div class="content">
    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="4">
      <li v-for="(hot,index) in hotList" class="box">
      <div class="info">
        <div class="left">
          <img :src="hot.avatar" class="avatar">
        </div>
        <div class="center">
          <div class="name">{{hot.name}}</div>
          <div class="time">{{hot.time}}小时以前-{{hot.tag}}</div>
        </div>
        <div class="right" @click="hot.attention=!hot.attention">
          <span v-if="hot.attention">已关注</span>
          <span v-else class="red">关注</span>
        </div>
      </div>
      <router-link :to="{name:'article',params:{id:hot.id}}">
        <p>{{hot.intro}}</p>
        <img class="pic" v-for="pic in hot.images" v-lazy="pic" />
      </router-link>
      <div class="interaction">
        <div class="item">
          <i class="iconfont">&#xe627;</i>
          <span>{{hot.opinion_num}}</span>
        </div>
        <div class="item">
          <i class="iconfont">&#xe623;</i>
          <span>{{hot.comment_num}}</span>
        </div>
        <div class="item"  v-if="hot.islike" @click="changeLike(index,true)">
          <i class="iconfont red">&#xe643;</i>
          <span>{{hot.like_num}}</span>
        </div>
        <div class="item" v-else @click="changeLike(index,false)">
          <i class="iconfont">&#xe643;</i>
          <span>{{hot.like_num}}</span>
        </div>
      </div>
    </li>
      </ul>
  </div>
</template>

<script type="es6">
  import myHomeList from '../data/index.js'
  import myAxios from '../data/axios/myAxios.js'
    export default {
        name:'hotContent',
        data(){
            return{
              pageIndex:1,
              hotList:[],
            }
        },
      methods:{
        loadMore(){
          this.getHotList();
        },
        getHotList(){
          let url = 'headline/list';
          let params = {
            pageindex:this.pageIndex
          };
          myAxios.get(url,params)
            .then(res => {
              this.pageIndex ++;
              this.hotList = this.hotList.concat(res.data.data.list);
            })
            .catch(err => {
              console.log(err);
            });
        },
        changeLike(index,isLike){
          this.$set(this.hotList[index],'islike',!isLike);
          if(isLike){
            this.$set(this.hotList[index],'like_num',this.hotList[index].like_num-1);
          }else{
            this.$set(this.hotList[index],'like_num',this.hotList[index].like_num+1);
          }
        }
      }
    }
</script>

<style scoped>
  .content{
    height: calc(100% - 38.5vw);
    position: absolute;
    top:24.5vw;
    width: 100%;
    z-index: 0;
    text-align: left;
    overflow-y: scroll;
    background: #eff2f2;
  }
  .box{
    margin: 2vw;
    border-bottom: 1px solid #cedad2;
  }
  .info{
    display: grid;
    grid-template-columns: 16% 72% 12%;
    text-align: left;
  }
  .avatar{
    width: 11vw;
    height: 11vw;
    border-radius: 50%;
    overflow: hidden;
    margin-left: 1vw;
  }
  .name{
    font-size: 4.5vw;
    margin-top: 1vw;
    font-weight: bold;
  }
  .time{
    font-size: 3vw;
  }
  .right{
    padding-top: 5.5vw;
    font-size: 3vw;
  }
  .red{
    color: red;
  }
  .pic{
    margin: 2vw 2vw 0 0;
    width: 30vw;
  }
  image[lazy=loading] {
    width: 10vw;
    height: 10vw;
    padding: 10vw;
  }
  .interaction{
    display: grid;
    grid-template-columns: 33% 33% 33%;
    text-align: center;
    margin: 2vw 0;
  }
</style>
