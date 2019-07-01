import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GetRouter from 'router/router';
import 'style/normalize.css';
import 'style/base.scss';

import axios from 'axios';
import querystring from 'querystring';
import { withRouter } from 'react-router-dom';

const isiOS = () => {
    var ua = navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test(ua);
};
const device = isiOS() ? 'ios' : 'android'

axios.interceptors.request.use(
    function (config) {
        // 在发起请求请做一些业务处理
        const token = sessionStorage.getItem('token') || 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NjE4NzY4MzEsIm5iZiI6MTU2MTg3NjgzMSwianRpIjoiYTgxNWExMzYtNmQ3Yi00MjE1LWEzMGMtZGY1NDU2NmZkNTc4IiwiZXhwIjoxNTYyNDgxNjMxLCJpZGVudGl0eSI6eyJ1c2VyX2lkIjoiMiJ9LCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MifQ.ugpGg_NGe416WKMMIDluIBzZTzvkamk6NaVCANF2uDs'
        config.headers["device_type"] = device
        config.headers["Content-Type"] = "application/x-www-form-urlencoded;charset=UTF-8"
        config.headers["Authorization"] = `Bearer ${token}`
        // if (store.state.userInfo) {
        //   const userInfo = store.state.userInfo
        //   config.headers["Authorization"] = `Bearer ${userInfo.token}`
        // }

        config.data = querystring.stringify(config.data)

        return config;
    },
    function (error) {
        // 对请求失败做处理
        console.log(error)
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    function (response) {
        // 对响应数据做处理
        // console.log(response)
        return response.data;
    },
    function (error) {
        // 对响应错误做处理
        console.log('error', error)
        console.log('error.response', error.response);
        // if (error.response) {
        //   if (error.response.status == 401) {
        //     Vue.prototype.$message.info('登录过期,请重新弄登录')
        //     store.dispatch("clearUserInfo").then(() => {
        //       // Vue.prototype.$message.info("注销成功");
        //       router.push('/login')
        //     });
        //   }
        // } else {
        //   router.push('/network-error')
        // }

        return Promise.reject(error);
    }
);

const code = window.location.href.split("?code=")[1]

// if (code) {
//     axios.post('https://openday.wechattips.com/api/v1/wxLogin', {
//         code
//     }).then(json => {
//         sessionStorage.setItem('token', json.data)
//     })


// } else {
//     axios(`https://openday.wechattips.com/api/v1/wxAuthUrl?${querystring.stringify({
//         redirect_url: 'https://lumia2046.github.io/cnode/'
//     })}`)
//         .then(json => {
//             window.location.href = json.data
//         })
// }

const app = document.createElement('div');
app.id = 'app';
document.body.appendChild(app);
ReactDOM.render(<GetRouter />, app);