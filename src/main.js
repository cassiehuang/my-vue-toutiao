// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import router from './router'

Vue.use(MintUI,{
  lazyload: {
    loading: './static/images/loading.gif'
  },
})
//Vue.use(VueLazyload)
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

Vue.prototype.$login = {
  state:false
};

/* eslint-disable no-new */
let vm = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
