import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import querystring from 'querystring';
import TopBar from 'components/TopBar/Topbar';
import 'style/Password.scss';
import img9 from 'img/img9.png';
import img10 from 'img/img10.png';
import img11 from 'img/img11.png';
import img12 from 'img/img12.png';

class Load extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: ''
    }
  }

  componentDidMount() {
    axios('https://openday.wechattips.com/api/v1/secret_code')
      .then(json => {
        this.setState({
          data: json.data.toString()
        })
      })
  }
  render() {
    const { data } = this.state
    return (
      <div className="page-content">
        <div className="page-pwd">
          <img src={img9} className="pwd-paper" />
          <div className="pwd-content">
            <div className="pwd-num">
              {data.split('').filter(Boolean).map((item, i) => <p key={i}>
                <span>{item}</span>
              </p>)}
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
        <TopBar icon={['return', 'music', 'home']} />
      </div>
    )
  }
}

export default Load;
