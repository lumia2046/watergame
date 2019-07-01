import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import TopBar from 'components/TopBar/Topbar';
import querystring from 'querystring';
import 'style/ChoosePage.scss';
import img8 from 'img/img8.png';
// import room11 from 'img/room1-1.png';
// import room12 from 'img/room1-2.png';
// import room13 from 'img/room1-3.png';
// import room14 from 'img/room1-4.png';
// import room15 from 'img/room1-5.png';
// import room21 from 'img/room2-1.png';
// import room22 from 'img/room2-2.png';
// import room23 from 'img/room2-3.png';
// import room24 from 'img/room2-4.png';
// import room25 from 'img/room2-5.png';
// import room31 from 'img/room3-1.png';
// import room32 from 'img/room3-2.png';
// import room33 from 'img/room3-3.png';
// import room34 from 'img/room3-4.png';
// import room35 from 'img/room3-5.png';


const rooms = [
  [window.room11, window.room21, window.room31],
  [window.room12, window.room22, window.room32],
  [window.room13, window.room23, window.room33],
  [window.room14, window.room24, window.room34],
  [window.room15, window.room25, window.room35],
]



class Load extends Component {
  state = {
    showEnter: false,
    showSuccess: false,
    choosedRoom: 0,
    successRooms: []
  }

  componentDidMount() {
    axios(`https://openday.wechattips.com/api/v1/game/play/record?${querystring.stringify({ page: 1, pageSize: 15 })}`)
      .then(json => {
        const successRooms = json.data.datas.map(item => item.game_id)
        this.setState({
          successRooms,
          showSuccess: successRooms.length === 5
        })
      })
  }

  render() {
    const { history } = this.props
    const { showEnter, showSuccess, choosedRoom, successRooms } = this.state
    return (
      <div className="page-content-choose-page">
        <TopBar icon={['return', 'music', 'home']} />
        <div className="page-choose">
          <p className="choose-title">嘥水現場</p>
          <div className="choose-grid">
            {rooms.map((item, i) => {
              let status = 0
              if (successRooms.includes(i + 1)) {
                status = 2
              } else if (choosedRoom === i + 1) {
                status = 1
              }
              return { src: item[status], status }
            }).map((item, i) => <div
              key={i}
              className="grid-item"
              style={{ zIndex: choosedRoom === i + 1 ? 10 : 0 }}
              onClick={() => {
                if (item.status === 0) {
                  this.setState({
                    choosedRoom: i + 1,
                    showEnter: true
                  })
                }
              }}
            >
              <img src={item.src} />
            </div>)}
          </div>
          <div className="black-bg"
            style={{ display: showEnter ? 'block' : 'none' }}
            onClick={() => this.setState({ choosedRoom: 0, showEnter: false })}
          >
            <button
              className="btn"
              onClick={() => {
                history.push(`/seek?room=${choosedRoom}`)
              }}
            >
              <span>進入</span>
            </button>
          </div>
          <div className="choose-dialog" style={{ display: showSuccess ? 'block' : 'none' }}>
            <img src={img8} />
            <p>你已成功逮捕五位嫌疑人，獲得一組偵探密碼，可通往下一關抓獲兇手！</p>
            <button className="btn" onClick={() => this.props.history.push('/password')}>
              <span>獲取密碼</span>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Load);
