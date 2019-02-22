import {
  HOME_CASUAL,
  HOME_NAV
} from "./mutation-ytpe";

export default {
  [HOME_CASUAL](state,{homecasual}){
    state.homecasual=homecasual
  },
  [HOME_NAV](state,{homenav}){
    state.homenav=homenav
  },
}
