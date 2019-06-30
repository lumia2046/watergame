import React, { Component } from 'react';
import 'style/Password.scss';
import img9 from 'img/img9.png';
import img10 from 'img/img10.png';
import img11 from 'img/img11.png';
import img12 from 'img/img12.png';

class Load extends Component {
	render() {
		return (
			<div className="page-content">
        <div className="page-pwd">
          <img src={img9} className="pwd-paper" />
          <div className="pwd-content">
            <div className="pwd-num">
              <p>
                <span>6</span>
              </p>
              <p>
                <span>2</span>
              </p>
              <p>
                <span>8</span>
              </p>
              <p>
                <span>8</span>
              </p>
            </div>
            <p className="pwd-text">憑此偵探密碼至開放日現場，可獲得偵探禮品一份！</p>
            <img src={img10} className="pwd-act" />
            <div className="address">
              <p>時間：7月14日10:00-17:30</p>
              <p>地點：澳門自來水青洲水廠</p>
            </div>
            <img src={img11} className="pwd-welcome" />
            <img src={img12} className="pwd-logo" />
          </div>
        </div>
			</div>
		)
	}
}

export default Load;
