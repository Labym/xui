import axios from 'axios';
import {API_URL} from "../config/env";

axios.defaults.timeout = 5000;
axios.defaults.baseURL = API_URL;
//http request 拦截器
axios.interceptors.request.use(
    config => {
        // const token = getCookie('名称');
        // config.data = JSON.stringify(config.data);
        config.headers = {
            'Content-Type': 'application/json'
        }
        // if(token){
        //  config.params = {'token':token}
        // }
        return config;
    },
    error => {
        return Promise.reject(err);
    }
);
//http response 拦截器
axios.interceptors.response.use(
    response => {
        if (response.data.errCode == 2) {
            router.push({
                path: "/login",
                querry: {redirect: router.currentRoute.fullPath}//从哪个页面跳转
            })
        }
        return response;
    },
    error => {
        return Promise.reject(error)
    }
)

/**
  * 封装get方法
  * @param url
  * @param data
  * @returns {Promise}
  */
export function fetch(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        })
            .then(response => {
                resolve(response);
            })
            .catch(err => {
                reject(err)
            })
    })
}

/**
  * 封装post请求
  * @param url
  * @param data
  * @returns {Promise}
  */
export function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, data)
            .then(response => {
                resolve(response);
            }, err => {
                reject(err)
            })
    })
}

export function put(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.put(url, data)
            .then(response => {
                resolve(response);
            }, err => {
                reject(err)
            })
    })
}