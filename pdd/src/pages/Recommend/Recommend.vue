<template>
  <div class="recommend-container" v-if="recommendshoplist.length>0">
    <ul class="recommend">
      <li class="recommend-item" v-for="(item,index) in recommendshoplist" :key="index">
        <img :src="item.thumb_url" alt="" width="100%" v-if="item.thumb_url">
        <h4 class="item-title">{{item.short_name}}</h4>
        <div class="item-bottom">
          <span class="item-price">￥{{item.price/100}}</span>
          <span class="item-price">{{item.sales_tip}}</span>
          <button>找相关</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "Recommend",
    mounted() {
      this.$store.dispatch('getRecommendShopList')
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
      .recommend-item:nth-child(2n-1)
        margin-right 1%
      .recommend-item
        width 49.5%
</style>
