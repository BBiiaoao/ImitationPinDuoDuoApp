import ajax from './ajax'

//1.基础路径
const BASE_URL='http://127.0.0.1:3000';

//2.请求方法
export const getHomeCasual=()=>ajax(BASE_URL+'/api/homecasual')

