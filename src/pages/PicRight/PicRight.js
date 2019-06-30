import React, { Component } from 'react';
import 'style/PicRight.scss';
import img5 from 'img/img5.png';
import pic1 from 'img/pic1.png';

class Load extends Component {
	render() {
		return (
			<div className="page-content">
        <div className="page-pic-right">
          <p className="pic-title">沖涼房</p>
          <div className="success-bg">
            <img src={img5} className="success-bg-img" />
            <img src={pic1} className="success-img" />
          </div>
          <p className="pic-success">取證成功</p>
        </div>
			</div>
		)
	}
}

export default Load;
