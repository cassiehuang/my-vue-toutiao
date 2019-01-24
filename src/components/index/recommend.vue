<template>
    <div class="content">
      <swiper :options="swiperOption" ref="contentSwiper"  @slideChange="sliderChange">
        <swiper-slide v-for="(item,index) in navList" :key="index" class="swiperClass">
          <ul
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10">
            <li v-for="article in item.list" class="box">
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
        </swiper-slide>
      </swiper>
    </div>
</template>

<script type="es6">
  import myHomeList from '../data/index.js'
  import myAxios from '../data/axios/myAxios.js'
    export default {
        name:'recommend',
        data(){
            return{
              swiperOption:{
                autoHeight:true,
              },
              navIndex:this.tabIndex,
            }
        },
        props:['navList','tabIndex'],
        methods:{
            loadMore() {
              /*this.loading = true;
              setTimeout(() => {
                let last = this.list[this.list.length - 1];
                for (let i = 1; i <= 10; i++) {
                  this.list.push(last + i);
                }
                this.loading = false;
              }, 2500);*/
            },
            sliderChange(){
              this.navIndex = this.swiper.activeIndex;
              this.$emit('getTabIndex',this.navIndex);
            },
            getHomeList(title,id,index){
              let url = 'home/list';
              let params = {
                title,
                id,
              };
              myAxios.get(url,params)
                .then(res => {
                  this.$set(this.navList[index],'list',res.data.data.list);
                })
              .catch(err => {
                  console.log(err);
                });
            }
        },
        computed: {
          swiper() {
            return this.$refs.contentSwiper.swiper
          }
        },
        watch:{
          /*navIndex:{
            handler(curVal,oldVal){
              this.getHomeList(this.navList[curVal].title,this.navList[curVal].id,curVal);
            }
          },*/
          tabIndex:{
            handler(curVal,oldVal){
              this.navIndex = curVal;
              this.swiper.slideTo(curVal, 1000, true);
              this.getHomeList(this.navList[curVal].title,this.navList[curVal].id,curVal);
            }
          }
        },
        created() {
          this.getHomeList(this.navList[this.navIndex].title,this.navList[this.navIndex].id,this.navIndex);
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
        background: #eff2f2;
    }
    .swiper-container{
      height: 100%;
      width: 100%;
      overflow-y: scroll;
    }
    .swiper-wrapper{
     height: 100%;
    }
  .swiperClass{
    text-align: left;
    background: #eff2f2;
    height: 100%;
    overflow-y: scroll;
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
</style>
