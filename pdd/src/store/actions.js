import {
  getHomeCasual,
  getHomeNav
} from "../api";
import {
  HOME_CASUAL,
  HOME_Nav
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
  }
}
