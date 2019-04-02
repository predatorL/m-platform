import axios from 'axios';
import qs from 'qs';

// 不需要携带用户uid和token信息
const urlWhiteList = [];

// 创建请求实例
const request = axios.create({
    baseURL: '/api/',
    timeout: 60 * 1000
})

// 添加请求拦截器
request.interceptors.request.use((config) => {
    // 在发送请求之前做些什么
    return config;
},  (error)  => {
    // 对请求错误做些什么
    return Promise.reject(error);
})

let preTime = +new Date(), nowTime;

// 添加响应拦截器
request.interceptors.response.use(function (res) {
    let tempData = res.data || {
        id: 'SYSTEM_ERROR',
        status: -1,
        message: 'response is empty'
    }
    // 对响应数据做点什么
    let status = tempData.status

    if (status == 9999) {
        nowTime = +new Date();
    }
    return tempData;

}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default request;
