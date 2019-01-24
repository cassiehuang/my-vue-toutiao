<template>
    <div class="main">
      <ul
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="4">
        <li v-for="(video,index) in videoList" class="video-wrapper">
          <play :info="video" :index="index"></play>
          <div class="info">
            <div class="source">{{video.source}}</div>
            <div class="attention" @click="video.attention =! video.attention">
              <span v-if="video.attention">
                <i class="iconfont">&#xe612;</i>
                <span>已关注</span>
              </span>
              <span v-else>
                <i class="iconfont">&#xe60b;</i>
                <span>关注</span>
              </span>
            </div>
            <div class="more">
              <i class="iconfont">&#xe747;</i>
            </div>
            <div class="commit">
              <i class="iconfont">&#xe609;</i>
              <span>{{video.comment}}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
</template>

<script type="es6">
  import play from '../weVideo/play.vue'
  import myAxios from '../data/axios/myAxios.js'
    export default {
        name:'weVideo',
        data(){
            return{
              videoList:[],
              pageIndex:1,
            }
        },

        components:{
          play,
        },
        methods:{
          loadMore(){
            this.getVideoData();
          },
          getVideoData(){
            let url = 'video/list';
            let params = {
              pageindex:this.pageIndex,
            };
            myAxios.get(url,params)
              .then(res => {
                this.pageIndex ++;
                this.videoList = this.videoList.concat(res.data.data.list);
                //this.$set(this.navList[index],'list',res.data.data.list);
              })
              .catch(err => {
                console.log(err);
              });
          }
        }
    }
</script>

<style scoped>
  .main{
    background: #eff2f2;
    overflow-y: scroll;
    height: calc(100% - 28vw);
    position: absolute;
    top:14vw;
  }
  .info{
    overflow: hidden;
    padding: 1vw 2vw;
    font-size: 3.5vw;
  }
  .info .source,.attention{
    float: left;
    margin-right: 2vw;
  }
  .commit,.more{
    float: right;
  }
  .commit{
    width: 15vw;
    top:2vw;
    left: 50vw;
  }
  .video-wrapper{
    width: 96vw;
    margin: 2vw;
    padding: 0;
    border-radius: 2vw;
  }
  /*.info{
    display: grid;
    grid-template-columns: 17% 64% 14% 5%;
    text-align: left;
    font-size: 3.5vw;
    padding: 1vw 2vw;
  }*/
  .iconfont{
    font-size: 4vw;
  }
</style>
