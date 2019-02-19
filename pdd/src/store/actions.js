import {getHomeCasual} from "../api";
import {HOME_CASUAL} from "./mutation-ytpe";

export default {
  //1.获取首页轮播图
  async reqHomeCasual({commit}){
    const result=await getHomeCasual();
    commit(HOME_CASUAL,{homecasual:result.message.data})
  }
}
