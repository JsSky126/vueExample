import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import UserHome from '../components/UserHome.vue'
import UserProfile from '../components/UserProfile.vue'
import UserPosts from '../components/UserPosts.vue'

Vue.use(Router)


export default new Router({
    mode:'history',
    routes: [
      {
        path: '/user/foo', name: 'Home', component: Home,
        children:[
          {path: '', name:'UserHome' ,component:UserHome},
          {path:'profile', name:'UserProfile' ,component: UserProfile},
          {path:'posts', name:'UserPosts' , component: UserPosts}
        ]
      }
    ]
})


