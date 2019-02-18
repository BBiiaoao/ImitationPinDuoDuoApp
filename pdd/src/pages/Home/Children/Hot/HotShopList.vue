<template>
    <div class="shop-container">
      <ul class="shop-list">
        <li class="shop-list-item">
          <img src="./../../imgs/shop_list/shop_item.png" alt="" style="width: 100%">
          <h4 class="list-item-title">[唐幂]整条刺绣民族风围巾女士秋冬季中年妈妈羊绒羊毛披肩保暖</h4>
          <div class="list-item-bottom">
            <span class="item-price">￥26.9</span>
            <span class="item-counter">已拼5345件</span>
            <span class="item-user">
              <img src="./../../imgs/shop_list/user1.jpg" alt="">
              <img src="./../../imgs/shop_list/user2.jpg" alt="">
            </span>
            <span class="item-buy">
              <button>去拼单></button>
            </span>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "HotShopList"
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.shop-container
  margin-bottom 50px
  background #f5f5f5
  .shop-list
    .shop-list-item
      display flex
      flex-direction column
      margin-bottom 10px
      background #fff
      .list-item-title
        width 94%
        height 44px
        overflow hidden
        margin-left 3%
        line-height 22px
      .list-item-bottom
        display flex
        flex-direction row
        justify-content center
        align-items center
        margin 10px 0
        .item-price
          flex 1
          font-size 18px
          font-weight bolder
          color red
          text-align center
        .item-counter
          flex 2
          font-size 12px
          color #ccc
        .item-user
          display flex
          justify-content center
          align-items center
          flex 1
          img
            width 40%
            border-radius 50%
          img:nth-child(2)
            margin-left -6px
        .item-buy
          flex 2
          button
            display flex
            justify-content center
            align-items center
            width 80%
            height 34px
            margin-left 10px
            border none
            border-radius 8px
            background red
            color #fff
</style>
