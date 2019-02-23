<template>
  <div class="hot">
    <!--轮播图-->
    <div class="swiper-container" v-if="homecasual.length>0">
      <div class="swiper-wrapper" >
        <div class="swiper-slide" v-for="(casual,index) in homecasual" :key="index">
          <img :src="casual.imgurl" alt="">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <!--中间导航-->
    <HotNav></HotNav>
    <!--广告位-->
    <div class="hot-ad">
      <img src="./../../imgs/hot_ad/home_ad.gif" alt="" style="width: 100%">
    </div>
    <!--商品列表-->
    <HotShopList></HotShopList>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  import HotNav from './HotNav'
  import HotShopList from './HotShopList'

  import {mapState} from 'vuex'

  export default {
    name: "Hot",
    components:{
      HotNav,
      HotShopList
    },
    computed:{
      ...mapState(['homecasual'])
  },
    mounted() {
      //1.请求轮播图的数据
      this.$store.dispatch('reqHomeCasual');
      //2.请求首页导航的数据
      this.$store.dispatch('reqHomeNav');
      //2.请求首页商品列表数据
      this.$store.dispatch('getHomeShopList');
    },
    watch:{
      homecasual(){
        this.$nextTick(()=>{
          //创建swiper的实例
          new Swiper ('.swiper-container', {
            autoplay:true,
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            }
          })
        })
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .hot
    width 100%
    height 100%
    display flex
    justify-content center
    align-items center
    flex-direction column
    padding-top 46px
    background #f5f5f5
    .swiper-container
      width 100%
      .swiper-wrapper
        width 100%
        .swiper-slide
          img
            width 100%
    .hot-ad
      margin 8px 0
      padding 5px
      background #fff
</style>
