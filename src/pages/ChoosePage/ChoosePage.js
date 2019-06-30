import React, { Component } from 'react';
import 'style/ChoosePage.scss';
import img8 from 'img/img8.png';
import room11 from 'img/room1-1.png';
import room12 from 'img/room1-2.png';
import room13 from 'img/room1-3.png';
import room14 from 'img/room1-4.png';
import room15 from 'img/room1-5.png';
import room21 from 'img/room2-1.png';
import room22 from 'img/room2-2.png';
import room23 from 'img/room2-3.png';
import room24 from 'img/room2-4.png';
import room25 from 'img/room2-5.png';
import room31 from 'img/room3-1.png';
import room32 from 'img/room3-2.png';
import room33 from 'img/room3-3.png';
import room34 from 'img/room3-4.png';
import room35 from 'img/room3-5.png';

class Load extends Component {
	render() {
		return (
			<div className="page-content">
        <div className="page-choose">
          <p className="choose-title">嘥水現場</p>
          <div className="choose-grid">
            <div className="grid-item">
              <img src={room11} />
            </div>
            <div className="grid-item">
              <img src={room12} />
            </div>
            <div className="grid-item">
              <img src={room13} />
            </div>
            <div className="grid-item">
              <img src={room14} />
            </div>
            <div className="grid-item">
              <img src={room15} />
            </div>
          </div>
          <div className="black-bg">
            <button className="btn"><span>進入</span></button>
          </div>
          <div className="choose-dialog">
            <img src={img8} />
            <p>你已成功逮捕五位嫌疑人，獲得一組偵探密碼，可通往下一關抓獲兇手！</p>
            <button className="btn"><span>獲取密碼</span></button>
          </div>
        </div>
			</div>
		)
	}
}

export default Load;
