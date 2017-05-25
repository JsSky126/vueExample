// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  watch:{
    '$route' (to, from){
      //对路由变化做出响应
      console.log(to,from);
    }
  },
  components: { App }
})
