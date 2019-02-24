<template>
  <div class="search">
    <!--搜索导航-->
    <search-nav></search-nav>
    <div class="shop">
      <!--左边-->
      <div class="menu-wrapper">
        <ul>
          <!--current-->
          <li class="menu-item" v-for="(goods,index) in searchgoods" :key="index">
            <span>{{goods.name}}</span>
          </li>
        </ul>
      </div>
      <!--右边-->
      <div class="shop-wrapper" >
        <ul>
          <li class="shops-li" v-for="(goods,index) in searchgoods" :key="index">
            <div class="shops-title">
              <h4>{{goods.name}}</h4>
              <a href="">查看更多></a>
            </div>
            <ul class="shops-item">
              <li v-for="(item,index2) in goods.items" :key="index2">
                <img :src="item.icon" alt="">
                <span>{{item.title}}</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import SearchNav from './children/SearchNav'
  import {mapState} from 'vuex'

  import Bscroll from 'better-scroll'

  export default {
    name: "Search",
    mounted(){
      this.$store.dispatch('reqSearchGoods')
    },
    computed:{
      ...mapState(['searchgoods'])
    },
    components: {
      SearchNav
    },
    watch:{
      searchgoods(){
        this.$nextTick(()=>{
          //1.左边
          //2.右边
        })
      }
    },
    methods:{

    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.search
  width 100%
  height 100%
  background #f5f5f5f
  .shop
    position absolute
    top 60px
    bottom 50px
    display flex
    width 100%
    overflow hidden
    .menu-wrapper
      flex 0 0 80px
      width 80px
      background #e0e0e0
      .menu-item
        position relative
        display flex
        justify-content center
        align-items center
        width 100%
        height 60px
        font-weight lighter
        color #666
        background #fafafa
      .current
        color #e02e24
      .current::before
        content ''
        position absolute
        left 0
        width 4px
        height 30px
        background #e02e24
    .shop-wrapper
      flex 1
      background #fff
      .shops-title
        display flex
        flex-direction row
        align-items center
        justify-content space-between
        height 44px
        padding 0 10px
        color #999
        a
          font-weight lighter
          color #999
          text-decoration none
      .shops-item
        display flex
        flex-wrap wrap
        li
          display flex
          flex-direction column
          justify-content center
          align-items center
          width 33.3%
          height 90px
          font-size 14px
          font-weight lighter
          color #666
          img
            width 60%
            height 60%
            margin-bottom 5px
</style>
