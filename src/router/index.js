import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/views/index'
import Hot from '@/components/views/hot'
import WeVideo from '@/components/views/weVideo'
import Mine from '@/components/views/mine'
import SearchBox from '@/components/views/searchBox'
import MyArticle from '@/components/views/myArticle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/',
      redirect:'/index'
    },
    {
      path: '/weVideo',
      name: 'weVideo',
      component: WeVideo
    },
    {
      path: '/hot',
      name: 'hot',
      component: Hot
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '/search',
      name:'search',
      component:SearchBox
    },
    {
      path: '/article/:id',
      name:'article',
      component:MyArticle
    }
  ]
})
