<template>
  <div class="recommend-container" v-if="recommendshoplist.length>0">
    <ul class="recommend">
      <shop-list
        tag="li"
        v-for="(item,index) in recommendshoplist"
        :item=item
        :key="index"
      ></shop-list>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import ShopList from './../../components/ShopList/ShopList'

  export default {
    name: "Recommend",
    components: {
      ShopList
    },
    mounted() {
      this.$store.dispatch('reqRecommendShopList')
    },
    computed: {
      ...mapState(['recommendshoplist'])
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .recommend-container
    width 100%
    height 100%
    background #f5f5f5

    .recommend
      display flex
      flex-direction row
      flex-wrap wrap
      margin-bottom 50px
      background #f5f5f5

  /*.recommend-item:nth-child(2n-1)*/
  /*margin-right 1%*/
  /*.recommend-item*/
  /*width 49.5%*/
  /*padding-bottom 15px*/
  /*margin-bottom 15px*/
  /*background #fff*/
  /*.item-title*/
  /*height 20px*/
  /*overflow hidden*/
  /*line-height 20px*/
  /*font-size 13px*/
  /*font-weight lighter*/
  /*margin 5px 0*/
  /*padding 0 5px*/
  /*.item-bottom*/
  /*display flex*/
  /*flex-direction row*/
  /*align-items center*/
  /*padding 0 6px*/
  /*.item-price*/
  /*flex 2*/
  /*font-weight bolder*/
  /*color red*/
  /*font-size 10px*/
  /*.item-sales*/
  /*flex 4*/
  /*font-size 10px*/
  /*color #666*/
  /*.item-btn*/
  /*flex 2*/
  /*height 26px*/
  /*border 1px solid orangered*/
  /*border-radius 5px*/
  /*font-size 10px*/
  /*background-color transparent*/
  /*color red*/
</style>
