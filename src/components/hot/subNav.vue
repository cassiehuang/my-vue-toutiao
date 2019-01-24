<template>
  <div>
    <div id="subNav">
      <div class="item" @click="showMask">
        <i class="iconfont blue">&#xe625;</i>
        <span>文字</span>
      </div>
      <div class="item" @click="showMask">
        <i class="iconfont green">&#xe67b;</i>
        <span>图片</span>
      </div>
      <div class="item" @click="showMask">
        <i class="iconfont red">&#xe677;</i>
        <span>上传视频</span>
      </div>
    </div>
    <LoginBox :show="show" @changeShow="changeShow"></LoginBox>
    <writeSome :showWrite="showWrite" @changeShowWrite="changeShowWrite"></writeSome>
  </div>
</template>
<script type="es6">
  import { MessageBox } from 'mint-ui'
  import LoginBox from '../LoginBox.vue'
  import writeSome from './writeSome.vue'
  import {Cookie} from '../data/storage/storage.js'
const subNav = {
    name:'SubNav',
    data(){
      return {
        show:false,
        showWrite:false,
      }
    },
    components:{
      LoginBox,
      writeSome,
    },
    methods:{
      showMask(){
        if(Cookie.get('username')){
          this.showWriteSome();
        }else{
          this.showLoginTip();
        }
      },
      showLoginTip(){
        MessageBox.confirm('请先登录').then(action => {
          this.show = true;
        })
        .catch(action =>{
          })
      },
      showWriteSome(){
        this.showWrite = true;
      },
      changeShow(){
        this.show = false;
      },
      changeShowWrite(){
        this.showWrite = false;

      }
    }
};
export default subNav
</script>
<style scoped>
  #subNav{
    display: grid;
    grid-template-columns: 33% 33% 33%;
    border-bottom: 1px solid rgba(88,88,88,0.2);
    height: 10.5vw;
    font-size: 3.8vw;
    background: #eff2f2;
    line-height: 10.5vw;
  }
  .blue{
    color: #007aff;
    position: relative;
    top:0.3vw;
  }
  .green{
    color: #006600;
    position: relative;
    top:0.4vw;
  }
  .red{
    color: red;
    position: relative;
    top:0.4vw;
  }
</style>
