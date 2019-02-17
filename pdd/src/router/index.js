//1.引入对应的模块
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home/Home'
import Recommend from '../pages/Recommend/Recommend'
import Search from '../pages/Search/Search'
import Chat from '../pages/Chat/Chat'
import Me from '../pages/Me/Me'

import Hot from '../pages/Home/Children/Hot/Hot'
import Clothing from '../pages/Home/Children/Clothing'
import Electric from '../pages/Home/Children/Electric'
import Food from '../pages/Home/Children/Food'
import Goods from '../pages/Home/Children/Goods'
import Baby from '../pages/Home/Children/Baby'
import Shoes from '../pages/Home/Children/Shoes'
import Man from '../pages/Home/Children/Man'
import Underwear from '../pages/Home/Children/Underwear'


//2.声明使用
Vue.use(VueRouter);


//3.输出路由对象
export default new VueRouter({
  //3.1.配置一级路由
  routes:[
    {
      path:'/home',
      component:Home,
      children:[
        {path:'hot',component:Hot},
        {path:'clothing',component:Clothing},
        {path:'electric',component:Electric},
        {path:'food',component:Food},
        {path:'goods',component:Goods},
        {path:'baby',component:Baby},
        {path:'shoes',component:Shoes},
        {path:'underwear',component:Underwear},
        {path:'man',component:Man},
        {path:'/home',redirect: '/home/hot'}
      ]
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

