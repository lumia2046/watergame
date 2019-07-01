import React, { Component } from 'react';
import 'style/Seek.scss';
import img6 from 'img/img6.png';
import img7 from 'img/img7.png';
// import 'lrz/dist/lrz.bundle.js';
import 'lrz/dist/lrz.all.bundle.js';
import axios from 'axios';
import TopBar from 'components/TopBar/Topbar';
import querystring from 'querystring';
import { withRouter } from 'react-router-dom';


const roomInfos = [
  {
    "game_arrest_head_url": "http://img.wechattips.com/test.png",
    "game_clue_1": "裝水專用",
    "game_clue_2": "清潔工具",
    "game_create_time": "2019-06-28T23:37:39+00:00",
    "game_des_txt": "師奶在洗碗的同時開水拖地，稍不留神浪費很多水，找到證物就能逮捕她！",
    "game_found_error_url": "http://img.wechattips.com/test.png",
    "game_found_right_url": "http://img.wechattips.com/test.png",
    "game_head_url": "http://img.wechattips.com/test.png",
    "game_id": 5,
    "game_last_update_time": "2019-06-28T23:37:39+00:00",
    "game_place_name": "客廳",
    "game_status": 0,
    "game_suspect": "師奶",
    "keyword": "水桶"
  },
  {
    "game_arrest_head_url": "http://img.wechattips.com/test.png",
    "game_clue_1": "上廁所時必用它",
    "game_clue_2": "按一按，沖一沖",
    "game_create_time": "2019-06-28T23:36:54+00:00",
    "game_des_txt": "廁所裏不斷地傳來沖水聲，原來是淋肉上完廁所後一直按沖水鍵。證物就在眼前，不能錯過！",
    "game_found_error_url": "http://img.wechattips.com/test.png",
    "game_found_right_url": "http://img.wechattips.com/test.png",
    "game_head_url": "http://img.wechattips.com/test.png",
    "game_id": 4,
    "game_last_update_time": "2019-06-28T23:36:54+00:00",
    "game_place_name": "廁所",
    "game_status": 0,
    "game_suspect": "淋肉",
    "keyword": "马桶"
  },
  {
    "game_arrest_head_url": "http://img.wechattips.com/test.png",
    "game_clue_1": "拧一拧，流出水",
    "game_clue_2": "關壹關，不作聲",
    "game_create_time": "2019-06-28T23:36:18+00:00",
    "game_des_txt": "施明在解凍食物的過程中沒有關水，在廚房找到對應的證物，指出他的罪名！",
    "game_found_error_url": "http://img.wechattips.com/test.png",
    "game_found_right_url": "http://img.wechattips.com/test.png",
    "game_head_url": "http://img.wechattips.com/test.png",
    "game_id": 3,
    "game_last_update_time": "2019-06-28T23:36:18+00:00",
    "game_place_name": "廚房",
    "game_status": 0,
    "game_suspect": "施明",
    "keyword": "水龙头"
  },
  {
    "game_arrest_head_url": "http://img.wechattips.com/test.png",
    "game_clue_1": "專洗髒衣服",
    "game_clue_2": "插上電源左右轉",
    "game_create_time": "2019-06-28T23:35:16+00:00",
    "game_des_txt": "施叔大晚上在陽台偷偷摸摸，明明只有一兩件衣服也不選擇手洗，這次終於找到他犯罪的證據了！",
    "game_found_error_url": "http://img.wechattips.com/test.png",
    "game_found_right_url": "http://img.wechattips.com/test.png",
    "game_head_url": "http://img.wechattips.com/test.png",
    "game_id": 2,
    "game_last_update_time": "2019-06-28T23:35:16+00:00",
    "game_place_name": "陽台",
    "game_status": 0,
    "game_suspect": "施叔",
    "keyword": "洗衣机"
  },
  {
    "game_arrest_head_url": "http://img.wechattips.com/test.png",
    "game_clue_1": "滴答滴答轉圈圈",
    "game_clue_2": "看時間",
    "game_create_time": "2019-06-28T23:34:05+00:00",
    "game_des_txt": "施欣洗澡時間過長，這種行為非常浪費水！我們需要找到證物，記录她的犯罪證據才能逮捕她。",
    "game_found_error_url": "http://img.wechattips.com/test.png",
    "game_found_right_url": "http://img.wechattips.com/test.png",
    "game_head_url": "http://img.wechattips.com/test.png",
    "game_id": 1,
    "game_last_update_time": "2019-06-28T23:57:03+00:00",
    "game_place_name": "沖涼房",
    "game_status": 0,
    "game_suspect": "施欣",
    "keyword": "手表"
  }
]

class Load extends Component {
  constructor(props) {
    super(props)
    const room = props.location.search ? querystring.parse(props.location.search.split('?')[1]).room : 1
    this.state = {
      loading: false,
      change: false,
      roomInfo: roomInfos.filter(item => item.game_id == parseInt(room))[0],
      room: parseInt(room)
    }
  }


  componentDidMount() {
    axios(`https://openday.wechattips.com/api/v1/game/list?${querystring.stringify({ page: 1, pageSize: 15 })}`)
      .then(json => {
        const roomInfos = json.data.datas
        const roomInfo = roomInfos.filter(item => item.game_id == this.state.room)[0]
        this.setState({
          roomInfo
        })
      })
  }

  getImg = event => {
    const input = event.target

    var file = input.files[0];
    var img = new Image()
    var reader = new FileReader();
    reader.readAsDataURL(file);
    this.setState({
      loading: true
    })
    reader.onload = (e) => {

      img.src = e.target.result
      // document.querySelector('#fileBg').src = img.src

      lrz(img.src, { width: 200 })
        .then((rst) => {
          console.log(rst.base64.length, '$$$$$$$$$')
          // 处理成功会执行
          // document.querySelector('#fileBg').src = rst.base64
          axios.post(`https://openday.wechattips.com/api/v1/image/recognize/${this.state.roomInfo.game_id}`, {
            image: rst.base64.split('data:image/jpeg;base64,')[1]
          }).then(data => {
            this.setState({
              loading: false
            })
            this.props.history.push(`/pic-right?${querystring.stringify({ room: this.state.room, status: data.data ? 'success' : 'failed' })}`)

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
    const {
      game_place_name,
      game_des_txt,
      game_clue_1,
      game_clue_2,
      game_suspect,
      keyword,
    } = this.state.roomInfo
    return (
      <div className="page-content-seek">
        <TopBar icon={['return', 'music', 'home']} />
        <div className="page-seek">
          <p className="seek-title">{game_place_name}</p>
          <p className="seek-content-title">案發現場</p>
          <div className="seck-hint hint1">
            <img src={img6} />
            <div>
              <p>{game_des_txt}</p>
            </div>
          </div>
          <div className="seck-hint hint2">
            <img src={img7} />
            <div>
              <p>線索1：{game_clue_1}</p>
              <p>線索2：{game_clue_2}</p>
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
            <span>{this.state.loading ? '识别中' : '拍照掃描'}</span>
          </button>

          <div>
            <img id="fileBg" style={{ width: '100%' }} />
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Load);
