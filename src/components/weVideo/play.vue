<template>
  <div class="video">
    <video :id="id" :src="info.video" @click="maskShow=true"></video>
    <div v-show="maskShow" class="mask">
      <div class="title">{{info.title}}</div>
      <div class="playState">
        <div v-if="playState" @click="pause">
          <i class="iconfont">&#xe635;</i>
        </div>
        <div v-else @click="play">
          <i class="iconfont">&#xe630;</i>
        </div>
      </div>
      <div v-show="false" class="control">
        <mt-progress :value="60">
          <div slot="start">{{currentTime}}</div>
          <div slot="end">{{duration}}</div>
        </mt-progress>
      </div>
      <div class="time">{{info.time}}</div>
    </div>
    <div class="bg"></div>
  </div>
</template>

<script type="es6">
    export default {
        name:'play',
        data(){
            return{
              playState:false,//true为正在播放
              maskShow:true,
              id:'myVideo'+this.index,
              myVideo:document.getElementById(this.id),
              duration:0,
              currentTime:0,
            }
        },
        props:["info","index"],
        methods:{
          play(){
            this.maskShow = false;
            this.playState = true;
            document.getElementById(this.id).play();
          },
          pause(){
            this.maskShow = true;
            this.playState = false;
            document.getElementById(this.id).pause();
          },
          parseTime(time){
            let hour = Math.floor(time/3600);
            let other = time%3600;
            let minute = Math.floor (other/ 60);
            let second =( other%60).toFixed(0);
            hour = hour <10 ? '0'+hour:hour;
            minute = minute <10 ? '0'+minute:minute;
            second = second <10 ? '0'+second:second;
            return hour+':'+minute+':'+second;
          }
        },
        mounted(){
          let myVideo = document.getElementById(this.id);
          this.duration = this.parseTime(myVideo.duration);
          this.currentTime = this.parseTime(myVideo.currentTime);
        }
    }
</script>

<style scoped>
  .video{
    width:100%;
    height: 52vw;
    background: #000000;
    position: relative;
    font-size: 4vw;
    padding: 0;
    border-radius: 2vw;
    margin: 2vw 0;
  }
  video{
    width: 100%;
    border-radius: 2vw;
    padding: 0;
    margin: 0;
  }
  .mask{
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    color: #ffffff;
    background: rgba(11,11,11,0.2);
  }
  .title{
    position: absolute;
    top:4vw;
    left: 3vw;
  }
  .playState div{
    position: absolute;
    top:19vw;
    width: 18vw;
    height: 18vw;
    left: 41vw;
    text-align: center;
    line-height: 18vw;
  }
  .bg{
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99;
    display: none;
  }
  .time{
    position: absolute;
    bottom: 4vw;
    right: 4vw;
  }
  .control{
    position: absolute;
    bottom: 2vw;
    left: 4vw;
    width: 72vw;

  }
  .iconfont{
    font-size: 8vw;
  }
</style>
