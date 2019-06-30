import React, { Component } from 'react';
import 'style/ChoosePage.scss';
import room11 from 'img/room1-1.png';
import room12 from 'img/room1-2.png';
import room13 from 'img/room1-3.png';
import room14 from 'img/room1-4.png';
import room15 from 'img/room1-5.png';
// import room11 from 'img/room1-1.png';
// import room11 from 'img/room1-1.png';
// import room11 from 'img/room1-1.png';
// import room11 from 'img/room1-1.png';
// import room11 from 'img/room1-1.png';
// import room11 from 'img/room1-1.png';
// import room11 from 'img/room1-1.png';
// import room11 from 'img/room1-1.png';
// import room11 from 'img/room1-1.png';
// import room11 from 'img/room1-1.png';

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
            <div className="grid-item" style={{zIndex: "2"}}>
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
          <div className="black-bg" style={{display: "block"}}>
            <button className="btn"><span>進入</span></button>
          </div>
        </div>
			</div>
		)
	}
}

export default Load;
