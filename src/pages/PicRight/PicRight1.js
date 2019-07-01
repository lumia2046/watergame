import React, { Component } from 'react';
import 'style/PicRight.scss';
import img13 from 'img/img13.png';
import pic6 from 'img/pic6.png';

class Load extends Component {
	render() {
		return (
			<div className="page-content">
        <div className="page-pic-right">
          <p className="pic-title">沖涼房</p>
          <div className="success-bg">
            <img src={img13} className="success-bg-img" />
            <img src={pic6} className="success-img" />
          </div>
          <p className="pic-error">你需要拍照的證物是：手錶。</p>
          <button className="btn">
            <span>繼續搜證</span>
          </button>
        </div>
			</div>
		)
	}
}

export default Load;
