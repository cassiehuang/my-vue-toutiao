<template>
  <div>
    <div id="subHeadNav">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="(item,index) in navList" :class="index==navIndex?'curClass':''" :key="index">{{item.title}}</swiper-slide>
      </swiper>
      <slot></slot>
    </div>
  </div>
</template>
<script type="es6">
import { swiper, swiperSlide } from 'vue-awesome-swiper'
const subHeadNav = {
    name:'SubHeadNav',
    data(){
      return {
          swiperOption: {
              slidesPerView:6,
              preventClicks : true,
              on:{
                click:() =>{
                  this.navIndex = this.swiper.clickedIndex;
                  this.$emit('changeTab',this.navIndex);
              }
            }
          },
          navClass:'',
          navIndex:this.tabIndex,
      }
    },
    props:['navList','tabIndex'],
    components:{
        swiper,
        swiperSlide,

    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    methods:{
    },
  watch:{
    tabIndex:{
      handler(curVal,oldVal){
        this.navIndex = curVal;
        this.swiper.slideTo(curVal, 100, false);
      }
    }
  },
};
export default subHeadNav
</script>
<style scoped>
    #subHeadNav{
        position: fixed;
        top: 14vw;
        left: 0;
        height: 10.5vw;
        width: 100vw;
        overflow: hidden;
        border-bottom: 1px solid #cedad2;
        z-index: 99;
        background: #eff2f2;
    }
  .swiper-container{
    width: 85vw;
    height: 10.5vw;
      margin: 0;
    line-height: 10.5vw;
    font-size: 4.5vw;
  }
    .curClass{
      color: red;
    }
</style>
