import React, { Component } from 'react';
import 'style/Guide.scss';
import img4 from 'img/img4.png';
import TopBar from 'components/TopBar/Topbar';
import { withRouter } from 'react-router-dom';

const intervalTime = 0.15

class Text extends Component {
  render() {
    const { text, delay, index, showAll } = this.props
    return <div>
      {
        text.split('').filter(Boolean).map((item, i) => <span key={i}>
          <span className={showAll ? '' : `text-${index}-${i}`}>{item}</span>
          <style>{`
          .text-${index}-${i}{
            animation: ${'textAnimation' + index + '-' + i} ${delay + i * intervalTime}s ease-in 0s;
          }
          @keyframes ${'textAnimation' + index + '-' + i}{
            0% {opacity:0;}
            ${(delay - intervalTime + i * intervalTime) * 100 / (delay + i * intervalTime)}% {opacity:0;}
            100% {opacity:1;}
          }
        `}</style>
        </span>)
      }
      <style>
      </style>
    </div>
  }
}

class Guide extends Component {
  state = {
    showAll: false
  }
  toStart = () => {
    this.props.history.push('/choose-page')
  }

  render() {
    const { showAll } = this.state
    let wordslength = 0
    return (
      <div className="page-content" onClick={() => {
        this.setState({
          showAll: true
        })
      }}>
        <TopBar icon={['music']} />
        <div className="page-guide">
          <div className="guide-content">
            <img src={img4} />
            <div className="guide-text">
              {[
                { text: '近日,', delay: 0, section: false },
                { text: '師奶家裡發生連環嘥水事件,', section: false },
                { text: '證據就在師奶的水費單上！', section: false },
                { text: '嘥水等於打劫水資源,', section: true },
                { text: '小水點將化身偵探,', section: false },
                { text: '找出真正的嘥水兇手！,', section: false },
                { text: '找齊5位嫌疑人,', section: true },
                { text: '可獲得偵探禮品一份！', section: false },
              ].map((item, i) => {
                const delay = wordslength * intervalTime
                wordslength += item.text.length
                return <p className={item.section ? 'section' : ''} key={i}>
                  <Text text={item.text} delay={delay} index={i} showAll={this.state.showAll} />
                </p>
              })}

              <button className={`btn ${this.state.showAll ? '' : 'btn-animation'}`} onClick={this.toStart} >
                <span>進入現場</span>
              </button>
              <style>{`
              .btn-animation{
                animation:btnAnimation ${(wordslength + 1) * intervalTime}s ease;
              }

              @keyframes btnAnimation{
                0%{opacity:0;}
                ${wordslength * 100 / (wordslength + 1)}% {opacity:0;}
                100% {opacity:1;}
              }
              `}</style>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Guide);
