<template>
    <div class="search-nav">
      <a href="" class="search-nav-icon">
        <img src="../images/search.png" alt="" width="25">
        <span>搜索</span>
      </a>
    </div>
</template>

<script>
    export default {
        name: "SearchNav"
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
.search-nav
  position fixed
  top 0
  left 0
  z-index 999
  display flex
  justify-content center
  align-items center
  width 100%
  height 60px
  border-bottom-1px(#ccc)
  background #fff
  .search-nav-icon
    display flex
    justify-content center
    align-items center
    width 90%
    height 70%
    border-radius 10px
    background-color #e8e8e8
    span
      margin-left 6px
      font-size 20px
      font-weight lighter
      color #aaa
</style>
