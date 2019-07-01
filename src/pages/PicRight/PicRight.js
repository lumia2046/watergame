import React, { Component } from 'react';
import 'style/PicRight.scss';
import img5 from 'img/img5.png';
import pic1 from 'img/pic1.png';
import pic2 from 'img/pic2.png';
import pic3 from 'img/pic3.png';
import pic4 from 'img/pic4.png';
import pic5 from 'img/pic5.png';
import pic6 from 'img/pic6.png';

import img13 from 'img/img13.png';

import axios from 'axios';
import querystring from 'querystring';
import { withRouter } from 'react-router-dom';
import TopBar from 'components/TopBar/Topbar';

const pics = [pic1, pic2, pic3, pic4, pic5]

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
    const params = props.location.search ? querystring.parse(props.location.search.split('?')[1]) : {}
    const room = params.room || 1
    const status = params.status || 'success'
    this.state = {
      change: false,
      roomInfo: roomInfos.filter(item => item.game_id == parseInt(room))[0],
      room: parseInt(room),
      status
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

  render() {
    const {
      game_place_name = "沖涼房",
      keyword = "手表",
    } = this.state.roomInfo

    return (
      <div className="page-content">
        {
          this.state.status === 'success'
            ?
            <div className="page-pic-right">
              <p className="pic-title">{game_place_name}</p>
              <div className="success-bg">
                <img src={img5} className="success-bg-img" />
                <img src={pics[this.state.room - 1]} className="success-img" />
              </div>
              <p className="pic-success" onClick={() => {
                this.props.history.push(`/choose-page`)
              }}>取證成功</p>
            </div>
            :
            <div className="page-pic-right">
              <p className="pic-title">{game_place_name}</p>
              <div className="success-bg">
                <img src={img13} className="success-bg-img" />
                <img src={pic6} className="success-img" />
              </div>
              <p className="pic-error">你需要拍照的證物是：{keyword}。</p>
              <button className="btn" onClick={() => {
                this.props.history.push(`/seek?room=${this.state.room}`)
              }}>
                <span>繼續搜證</span>
              </button>
            </div>
        }
        <TopBar icon={['return', 'music', 'home']} />
      </div>
    )
  }
}

export default withRouter(Load);
