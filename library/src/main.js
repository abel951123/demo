// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import '@/assets/css/app'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import Swiper from 'swiper'

Vue.use(VueAwesomeSwiper)

Swiper.use({
  name: 'pluginName',
  params: {
    pluginSwitch: false
  },
  on: {
    init () {
      if (!this.params.pluginSwitch) return
      console.log('init')
    }
    // swiper callback...
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
