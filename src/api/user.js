import {post,fetch} from "../common/utils/http";

const authenticate =(username,password,rememberMe,captcha)=>{
    return post('/authenticate',{username,password,rememberMe,captcha})
}

const getUserInfo= ()=>{
    return fetch('/userinfo')
}

const UserApi={
    authenticate
}
export default  UserApi