<template>
  <div id="app">
    <HeadBox />
    <router-view></router-view>
    <FootNav ref="footNav"/>
  </div>
</template>

<script type="es6">
import HeadBox from './components/HeadBox.vue'
import FootNav from './components/FootNav.vue'
export default {
  name: 'App',
  components:{
    HeadBox,
    FootNav,
  },
  data(){
    return {
    }
  },
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
  *{
    margin: 0;
    padding: 0;
  }
ul,li{
  list-style: none;
}
.main{
  background: #eff2f2;
  height: calc(100% - 28vw);
}
a{
  text-decoration: none;
  color: #000000;
}
@font-face {
  font-family: 'iconfont';  /* project id 633886 */
  src: url('//at.alicdn.com/t/font_633886_zarm1skgkxhcl3di.eot');
  src: url('//at.alicdn.com/t/font_633886_zarm1skgkxhcl3di.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_633886_zarm1skgkxhcl3di.woff') format('woff'),
  url('//at.alicdn.com/t/font_633886_zarm1skgkxhcl3di.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_633886_zarm1skgkxhcl3di.svg#iconfont') format('svg');
}
.iconfont{
  font-family:"iconfont";
  font-size:5.5vw;
  font-style:normal;
}
</style>
