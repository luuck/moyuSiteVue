import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '../home/index.vue'
import "../assets/css/reset.scss"

Vue.use(Router)

export default new Router({
  routes: [
    /*{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }*/
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
