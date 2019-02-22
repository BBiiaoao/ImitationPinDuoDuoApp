import ajax from './ajax'

//1.基础路径
const BASE_URL='http://127.0.0.1:3000';

//2.请求方法

//2.1.请求首页的轮播图
export const getHomeCasual=()=>ajax(BASE_URL+'/api/homecasual');

//2.2.请求首页的导航
export const getHomeNav=()=>ajax(BASE_URL+'/api/homenav');
