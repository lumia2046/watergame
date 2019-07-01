import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import img14 from 'img/img14.png';
import img15 from 'img/img15.png';
import img16 from 'img/img16.png';

class TopBar extends Component {
  state = {
    iconList: [],
  }

  componentWillMount() {
    if (this.props.icon) {
      this.setState({
        iconList: this.props.icon,
      })
    }
  }

  returnFn = () => {
    this.props.history.goBack();
  }

  toHome = () => {
    this.props.history.push('/choose-page')
  }

	render() {
    let iconArr = [...this.state.iconList];
    let iconList = [];

    iconArr.map(icon => {
      if (icon == 'return') {
        iconList.push(
          <div key={icon} onClick={this.returnFn}>
            <img src={img14} className="return-icon" />
          </div>
        );
      }
      if (icon == 'music') {
        iconList.push(
          <div key={icon}>
            <img src={img15} className="music-icon" />
          </div>
        );
      }
      if (icon == 'home') {
        iconList.push(
          <div key={icon} onClick={this.toHome}>
            <img src={img16} className="home-icon" />
          </div>
        );
      }
    });
    
    return (
			<div className="top-bar">
        {
          iconList
        }
			</div>
		)
	}
}

export default withRouter(TopBar);
