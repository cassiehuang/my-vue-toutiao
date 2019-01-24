<template>
  <div class="tag">
    <div class="close" @click="sendList">
      <i class="iconfont">&#xe624;</i>
    </div>
    <div class="myTagsClass">
      <div class="title">我的频道</div>
      <div class="txt">点击删除以下频道</div>
      <div class="hint" v-show="showHint">至少保留一项</div>
      <mt-button size="small" v-for="(item,key) in navList" class="btn" @click="delTag(item)" :key="item.id">{{item.title}}</mt-button>
    </div>
    <div class="otherTagsClass">
      <div class="title">推荐频道</div>
      <div class="txt">点击添加以下频道</div>
      <mt-button size="small" v-for="(other,key) in otherTags" class="btn" @click="addTag(other)" :key="other.id">{{other.title}}</mt-button>
    </div>
  </div>
</template>
<script type="es6">
import myNavList from '../data/index.js'
import {subNavList} from '../data/default/default.js'

export default {
  name:'tags',
  data(){
    return {
      showHint:false,
    }
  },
  props:['navList'],
  /*props:{
    navList:{
      default:subNavList,
    }
  },*/
  computed:{
    otherTags:function(){
      return subNavList.filter(item => {
        return !this.navList.some(v => item.title === v.title)
      })
    }
  },
  methods:{
    delTag(item){
      if(this.navList.length<=1){
        this.showHint = true;
      }else{
        this.navList = myNavList.delSubTag(this.navList,item);
      }
    },
    addTag(item) {
      this.showHint = false;
      this.navList = myNavList.addSubTag(this.navList,item);
    },
    sendList(){
      this.$emit('getData',this.navList,false);
    }
  }
}
</script>
<style scoped>
  .tag{
    width: 100vw;
    height:100%;
    border-radius: 20px 20px 0 0;
    text-align: left;
  }
  .btn{
    width: 22.5vw;
    height: 10vw;
    margin: 2vw 0 0 2vw;
    font-size: 4.5vw;
  }
  .myTagsClass,.otherTagsClass{
    margin-top: 3vw;
  }
  .title{
    font-size: 5vw;
    padding: 0 2vw;
    display: table-cell;
  }
  .txt{
    font-size: 2vw;
    display: table-cell;
    vertical-align: bottom;
  }
  .close{
    margin-left: 2vw;
    margin-top: 1.5vw;
  }
  .iconfont{
    font-family:"iconfont";
    font-size:5vw;
    font-style:normal;
  }
</style>
