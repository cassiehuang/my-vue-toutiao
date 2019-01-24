<template>
<div>
  <mt-popup
    v-model="showBlock"
    position="bottom"
    modal=false>
    <div class="writeSome">
      <div class="close" @click="close">
        取消
      </div>
      <div class="push" @click="push">
        发布
      </div>
      <mt-field  placeholder="说点新鲜事..." type="textarea" rows="10" v-model="introduction" class="textarea"></mt-field>
    </div>
  </mt-popup>
</div>
</template>
<script type="es6">
  import myAxios from './../data/axios/myAxios.js'
  import {Cookie} from './../data/storage/storage.js'
  import { MessageBox } from 'mint-ui'
  export default {
    name:'writeSome',
    data(){
      return {
        showBlock:this.showWrite,
        introduction:''
      }
    },
    methods:{
      close(){
        this.showBlock = false;
        this.$emit('changeShowWrite',false,{});
      },
      push(){
        let url = 'headline/add';
        let params = {
          intro:this.introduction,
          name:Cookie.get('username'),
        };
        myAxios.post(url,params)
          .then(res => {
            MessageBox('提示', '操作成功').then(action => {
              this.showBlock = false;
              this.$emit('changeShowWrite',false,res.data.data);
            });
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    props:['showWrite'],
    watch:{
      showWrite:{
        handler(cur,old){
          this.showBlock = cur;
        }
      }
    }
  }
</script>
<style scoped>
  .mint-popup{
    transition-duration: 0.3s;
    height: 100%;
  }
  .writeSome{
    width: 100vw;
    height:100%;
    text-align: left;
  }
  .close{
    margin: 2vw 0 3vw 3vw;
    float: left;
  }
  .push{
    margin: 2vw 3vw 3vw 0;
    float: right;
  }
  .textarea{
    height: 50%;
    width: 100vw;
    border-top: 1px solid rgba(174, 171, 166, 0.83);
  }
  .mint-cell-value{
    height:100%;
    width: 100%;
  }
</style>
