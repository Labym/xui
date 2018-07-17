import {fetch,post,put} from "../common/utils/http";
const authenticate =(username,password,rememberMe,captcha)=>{
    return post('/authenticate',{username,password,rememberMe,captcha})
}

const getUserInfo= ()=>{
    return fetch('/userinfo')
}

const captcha= ()=>{
    return fetch('/captcha')
}

const currentMenus= ()=>{
    return fetch('/menus/current')
}

const UserApi={
    authenticate,getUserInfo,captcha,currentMenus
}
export default  UserApi