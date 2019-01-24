<template>
    <mt-popup class="articleWrapper"
      v-model="popupVisible"
      position="right"
      modal=false>
      <div class="top">
        <span class="back" @click="back"><i class="iconfont">&#xe63b;</i> </span>
        <span class="more"><i class="iconfont">&#xe747;</i> </span>
      </div>
    <h3 class="title">{{article.title}}</h3>
      <div class="info">
        <div class="left">
          <img :src="article.avatar" class="avatar">
        </div>
        <div class="center">
          <div class="name">{{article.name}}</div>
          <div class="time">{{article.time}}小时以前</div>
        </div>
        <div class="right">
          <span v-if="article.attention">已关注</span>
          <span v-else class="red">关注</span>
        </div>
      </div>
    <p class="txt">{{article.intro}}</p>
    <div class="tags">
      <div class="tag" v-for="tag in article.tags">{{tag}}</div>
    </div>
      <div class="like redBorder" v-if="article.islike" @click="changeLike(true)">
        <i class="iconfont">&#xe643;</i><span class="like_num">{{article.like_num}}</span>
      </div>
      <div class=" like" v-else @click="changeLike(false)">
        <i class="iconfont">&#xe643;</i><span class="like_num">{{article.like_num}}</span>
      </div>
    </mt-popup>
</template>

<script type="es6">
  import myAxios from './../data/axios/myAxios.js'
    export default {
        name:'myArticle',
        data(){
            return{
              article:{},
              articleId:this.$route.params.id,
              popupVisible:true,
            }
        },
        methods:{
          getArticleData(){
            let url = 'article/info';
            let params = {
              id:this.articleId,
            };
            myAxios.get(url,params)
              .then(res => {
                this.article = res.data.data;
              })
              .catch(err => {
                console.log(err);
              });
          },
          back(){
            this.$router.go(-1);
          },
          changeLike(isLike){
            this.$set(this.article,'islike',!isLike);
            if(isLike){
              this.$set(this.article,'like_num',this.article.like_num-1);
            }else{
              this.$set(this.article,'like_num',this.article.like_num+1);
            }
          }
        },
      created(){
        this.getArticleData()
      }
    }
</script>

<style scoped>
  .articleWrapper{
    width: 100%;
    height: 100%;
    overflow-y: scroll;
  }
  .back{
    float: left;
    margin-left: 3vw;
    margin-top: 2vw;
  }
  .more{
    float: right;
    margin-right: 3vw;
    margin-top: 2vw;
  }
  .top{
    border-bottom: 1px solid #cecece;
    overflow: hidden;
    padding-bottom: 3vw;
  }
  .title{
    font-size: 5.5vw;
    margin: 2vw 0;
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
  .iconfont{
    font-size: 7vw;
  }
  .txt{
    text-align: left;
    padding: 2vw 3vw;
    text-indent: 4ch;
  }
  .tags{
    overflow: hidden;
  }
  .tag{
    background: #cecece;
    float: left;
    padding: 2vw 3vw;
    margin-left: 3vw;
    font-size: 3.5vw;
    border-radius: 2vw;
    margin-top: 3vw;
  }
  .like{
    display: inline-block;
    border-radius: 5vw;
    padding: 2vw 6vw 3vw 6vw;
    margin: 6vw 0;
    color: #888888;
    border: 1px solid #888888;
  }
  .like_num{
    margin-left: 2vw;
  }
  .like .iconfont{
    font-size: 5vw;
  }
  .redBorder{
    color: red;
    border: 1px solid red;
  }
  .red{
    color: red;
  }
</style>
