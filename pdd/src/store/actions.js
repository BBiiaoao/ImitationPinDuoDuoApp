import {
  getHomeCasual,
  getHomeNav,
  getHomeShopList,
  getRecommendShopList
} from "../api";
import {
  HOME_CASUAL,
  HOME_NAV,
  HOME_SHOP_LIST,
  RECOMMEND_SHOP_LIST
} from "./mutation-ytpe";

export default {
  //1.获取首页轮播图
  async reqHomeCasual({commit}) {
    const result = await getHomeCasual();
    commit(HOME_CASUAL, {homecasual: result.message.data})
  },
  //2.获取首页导航
  async reqHomeNav({commit}) {
    const result = await getHomeNav();
    commit(HOME_NAV, {homenav: result.message.data})
  },
  //3.获取首页商品列表
  async getHomeShopList({commit}) {
    const result = await getHomeShopList();
    commit(HOME_SHOP_LIST, {homeshoplist: result.message.goods_list})
  },
  //3.获取推荐商品列表
  async getRecommendShopList({commit}) {
    const result = await getRecommendShopList();
    commit(RECOMMEND_SHOP_LIST, {recommendshoplist: result.message.data})
  }
}
