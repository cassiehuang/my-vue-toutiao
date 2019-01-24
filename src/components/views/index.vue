<template>
    <div class="main">
      <subHeadNav :navList="navList" :tabIndex="tabIndex" @changeTab="getTabIndex">
        <div class="add" @click="showBlock=true">
          <i class="list-shadow"></i>
          <span class="cross"></span>
        </div>
      </subHeadNav>
      <recommend :navList="navList" :tabIndex="tabIndex"  @getTabIndex="getTabIndex" ></recommend>
      <mt-popup
        v-model="showBlock"
        position="bottom"
        modal=false>
        <tagPage class="block" :navList="navList" @getData="getList"></tagPage>
      </mt-popup>
    </div>
</template>

<script type="es6">
  import subHeadNav from '../index/SubHeadNav.vue'
  import recommend from '../index/recommend.vue'
  import myNavList from '../data/index.js'
  import tagPage from '../index/tags.vue'
  export default {
    name: 'index',
    data(){
      return {
        navList: myNavList.getSubNavList(),
        showBlock: false,
        tabIndex: 0,
      }
    },
    components: {
      subHeadNav,
      recommend,
      tagPage,
    },
    methods: {
      getList(list, showBlock){
        this.navList = list;
        this.showBlock = showBlock;
      },
      getTabIndex(tabIndex){
        this.tabIndex = tabIndex;
      }
    },
  }
</script>

<style scoped>
  .add{
    position: absolute;
    top:0;
    right: 0;
    width: 15vw;
    height: 10.5vw;
    text-align: center;

  }
  .list-shadow {
    position: absolute;
    right: 100%;
    top: 0;
    width: 10vw;
    height: 100%;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAABXCAQAAACjUt0DAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAAAEgAAABIAEbJaz4AAAAJdnBBZwAAABIAAABXAK421QoAAAFiSURBVEjH1ZbbtoMgDERnKP//yaYPVSAhF077dHQtamU7k0RKAxwcPCF4ItF+tWMNsVZS91uJhNlRX7FGPMgizOrEObJSiZUUAnRkR6q0qnErm7Lhc9UDBaXUt0kN0FOaOo4SQ5BRCahOA3HT5KwTE50GZhV37VazJKYljjE2SE+sPsittC1XW/FmgNVsZJcvuhvrAbLqffNadPXLYgaLzs8wWSo6rk9FYdeBUW/x1DRswfS6ysuNlcDZ7ssTSCpIfDsZn/J8b+Omh8pjR/X8DkuWndwnINpOlukFbtvzVslAEmF+TCMaCC4fkr8oKUgVzmQ4IBojHfqFqwd28O0S6AXA7ib2P+HOTlzLcXZ3+tFz6yRObiOmGY+3k6ev5XN97Uq7FoCXkl5HTrT6tQiw2u1aY/TrZF551jyMFPZiOqW1O5zXiJx1PV/2Tw52tD8ddYc/9Zlq7qhBrlrtuhX/98cbycGBFpNaiv0AAAAldEVYdGRhdGU6Y3JlYXRlADIwMTQtMDItMjdUMTc6NDQ6NDErMDg6MDDFbrv7AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE0LTAyLTI3VDE3OjQ0OjQxKzA4OjAwtDMDRwAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAASUVORK5CYII=) no-repeat center right;
    background-size: contain;
  }
  .cross {
    width: 15vw;
    height: 15vw;
  }
  .cross:before, .cross:after {
    position: absolute;
    content: ' ';
    height: 7vw;
    width:3vw;
    background-color: red;
    left: 6vw;
    top:1.5vw
  }
  .cross:before {
    transform: rotate(90deg);
  }

  .mint-popup-bottom{
    bottom: 14vw;
  }
  .mint-popup{
    transition-duration: 0.3s;
    border-radius: 2vw 2vw 0 0;
    height: calc(100% - 21vw);
  }
</style>
