<template>
    <div class="main">
        <subNav></subNav>
        <hotContent></hotContent>
    </div>
</template>

<script type="es6">
  import subNav from '../hot/subNav.vue'
  import hotContent from '../hot/hotContent.vue'
    export default {
        name:'hot',
        data(){
            return{
              show:false,
            }
        },
      components:{
        subNav,
        hotContent,
      },
    }
</script>

<style>

</style>
