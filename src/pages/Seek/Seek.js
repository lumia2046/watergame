import React, { Component } from 'react';
import 'style/Seek.scss';
import img6 from 'img/img6.png';
import img7 from 'img/img7.png';
// import 'lrz/dist/lrz.bundle.js';
import 'lrz/dist/lrz.all.bundle.js';
import axios from 'axios';
import querystring from 'querystring';

const isiOS = () => {
  var ua = navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test(ua);
};
const device = isiOS() ? 'ios' : 'android'

axios.interceptors.request.use(
  function (config) {
    // 在发起请求请做一些业务处理
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NjE4NzY4MzEsIm5iZiI6MTU2MTg3NjgzMSwianRpIjoiYTgxNWExMzYtNmQ3Yi00MjE1LWEzMGMtZGY1NDU2NmZkNTc4IiwiZXhwIjoxNTYyNDgxNjMxLCJpZGVudGl0eSI6eyJ1c2VyX2lkIjoiMiJ9LCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MifQ.ugpGg_NGe416WKMMIDluIBzZTzvkamk6NaVCANF2uDs'
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


class Load extends Component {
  state = {
    change: false
  }

  getImg = event => {
    const input = event.target

    var file = input.files[0];
    var img = new Image()
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {

      img.src = e.target.result
      // document.querySelector('#fileBg').src = img.src

      console.log('lrz')

      lrz(img.src, { width: 50 })
        .then((rst) => {
          console.log(rst.base64.length, '$$$$$$$$$')
          // 处理成功会执行
          // document.querySelector('#fileBg').src = rst.base64
          axios.post('https://openday.wechattips.com/api/v1/image/recognize/1', {
            image: rst.base64.split('data:image/jpeg;base64,')[1]
          }).then(data => {
            alert(data.msg)
          }).finally(() => {
            this.setState({
              change: !this.state.change
            })
          })

        })
        .catch(function (err) {
          // 处理失败会执行
          console.log(err);
        })
    }
  }

  render() {
    return (
      <div className="page-content">
        <div className="page-seek">
          <p className="seek-title">沖涼房</p>
          <p className="seek-content-title">案發現場</p>
          <div className="seck-hint hint1">
            <img src={img6} />
            <div>
              <p>施欣洗澡時間過長，這種行為非常嘥水，我們需要找到關鍵證據逮捕她。</p>
            </div>
          </div>
          <div className="seck-hint hint2">
            <img src={img7} />
            <div>
              <p>線索1：滴答滴答轉圈圈</p>
              <p>線索2：看時間</p>
            </div>
          </div>
          <button className="btn" style={{ position: 'relative' }}>
            <input
              key={this.state.change}
              type="file" id="file" accept="image/*" capture="camera"
              style={{
                position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, zIndex: 1, opacity: 0
              }}
              onChange={this.getImg}
            />
            <span>拍照掃描</span>
          </button>

          <div>
            <img id="fileBg" style={{ width: '100%' }} />
          </div>
        </div>
      </div>
    )
  }
}

export default Load;
