import {fetch,post,put} from "../common/utils/http";
const authenticate =(username,password,rememberMe,captcha)=>{
    return post('/authenticate',{username,password,rememberMe,captcha})
}

const UserApi={
    authenticate
}
export default  UserApi