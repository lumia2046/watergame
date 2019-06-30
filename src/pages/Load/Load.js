import React, { Component } from 'react';
import 'style/Load.scss';
import envelope from 'img/img1.png';
import img from 'img/img2.png';
import img3 from 'img/img3.png';

class Load extends Component {
	render() {
		return (
			<div className="page-content">
        <img src={envelope} className="envelope" />
        <div className="page-load">
          <div className="plan">
            <img src={img} />
            <p>68%</p>
          </div>
        </div>
			</div>
		)
	}
}

export default Load;
