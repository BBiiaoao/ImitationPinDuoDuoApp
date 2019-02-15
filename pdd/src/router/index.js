//1.引入对应的模块
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './../pages/Home'
import Recommend from './../pages/Recommend'
import Search from './../pages/Search'
import Chat from './../pages/Chat'
import Me from './../pages/Me'


//2.声明使用
Vue.use(VueRouter);


//3.输出路由对象
export default new VueRouter({
  //3.1.配置一级路由
  routes:[
    {
      path:'/home',
      component:Home
    },
    {
      path:'/home',
      component:Home
    },
    {
      path:'/recommend',
      component:Recommend
    },
    {
      path:'/search',
      component:Search
    },
    {
      path:'/chat',
      component:Chat
    },
    {
      path:'/me',
      component:Me
    },
    {
      path:'/',
      redirect:'/home'
    },
  ]
})
//4.main.js中使用路由
//5.App.vue中进行组件化

