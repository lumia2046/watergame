import React, { Component } from 'react';
import 'style/Guide.scss';
import img4 from 'img/img4.png';

class Load extends Component {
	render() {
		return (
			<div className="page-content">
        <div className="page-guide">
          <div className="guide-content">
            <img src={img4} />
            <div className="guide-text">
              <p>近日,</p>
              <p>師奶家裡發生連環嘥水事件,</p>
              <p>證據就在師奶的水費單上！</p>
              <p className="section">嘥水等於打劫水資源,</p>
              <p>小水點將化身偵探,</p>
              <p>找出真正的嘥水兇手！</p>
              <p className="section">找齊5位嫌疑人,</p>
              <p>可獲得偵探禮品一份！</p>
              <button className="btn"><span>進入現場</span></button>
            </div>
          </div>
        </div>
			</div>
		)
	}
}

export default Load;
