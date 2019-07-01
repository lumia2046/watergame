import React, { Component } from 'react';
import 'style/Load.scss';
import { withRouter } from 'react-router-dom';
import envelope from 'img/img1.png';
import mask from 'img/mask.png';
import img2 from 'img/img2.png';
import img3 from 'img/img3.png';
import img4 from '../../assets/img/img4.png'


const imgInfos = [
  { link: 'img4', title: 'img4' },
  { link: 'img5', title: 'img5' },
  { link: 'img6', title: 'img6' },
  { link: 'img7', title: 'img7' },
  { link: 'img8', title: 'img8' },
  { link: 'img9', title: 'img9' },
  { link: 'img10', title: 'img10' },
  { link: 'img11', title: 'img11' },
  { link: 'img12', title: 'img12' },
  { link: 'mask', title: 'mask' },
  { link: 'pic1', title: 'pic1' },
  { link: 'pic2', title: 'pic2' },
  { link: 'pic3', title: 'pic3' },
  { link: 'pic4', title: 'pic4' },
  { link: 'pic5', title: 'pic5' },
  { link: 'pic6', title: 'pic6' },
  { link: 'room1-1', title: 'room11' },
  { link: 'room1-2', title: 'room12' },
  { link: 'room1-3', title: 'room13' },
  { link: 'room1-4', title: 'room14' },
  { link: 'room1-5', title: 'room15' },
  { link: 'room2-1', title: 'room21' },
  { link: 'room2-2', title: 'room22' },
  { link: 'room2-3', title: 'room23' },
  { link: 'room2-4', title: 'room24' },
  { link: 'room2-5', title: 'room25' },
  { link: 'room3-1', title: 'room31' },
  { link: 'room3-2', title: 'room32' },
  { link: 'room3-3', title: 'room33' },
  { link: 'room3-4', title: 'room34' },
  { link: 'room3-5', title: 'room35' }
]


class Imgs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 1
    }
  }

  total = imgInfos.length

  componentDidMount() {
    this.getImg()
  }

  getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, img.width, img.height);
    var dataURL = canvas.toDataURL("image/png");
    return dataURL
    // return dataURL.replace("data:image/png;base64,", "");
  }

  getImg() {

    this.props.setImgPlan(Math.round(this.state.index * 100 / this.total))
    const img = document.querySelector(`#img-${this.state.index}`)
    img.onload = () => {

      const base64 = this.getBase64Image(img)
      window[imgInfos[this.state.index - 1].title] = base64
      this.setState({
        index: this.state.index + 1
      })
      if (this.state.index < this.total + 1) {
        this.getImg()
      }
    }
  }

  render() {
    return <div style={{ width: 0, height: 0, overflow: 'hidden' }}>
      {imgInfos.filter((item, i) => i < this.state.index).map((item, i) => {
        return <img key={i} src={window[item.title]} id={`img-${i + 1}`} />
      })}
    </div>
  }
}


class Load extends Component {
  state = {
    imgPlan: 0,
    x: 0,
    y: 0
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        x: (Math.random() > 0.5 ? 1 : -1) * Math.random() * 15,
        y: (Math.random() > 0.5 ? 1 : -1) * Math.random() * 15
      })
    }, 500)
  }

  toGuide = () => {
    this.props.history.push('/guide')
  }



  render() {
    const { x, y } = this.state
    let startElement = (
      <div className="page-start">
        <img src={img3} style={{
          left: '50%', transform: 'translateX(-50%)'
        }} />
        <button className="btn" onClick={this.toGuide}><span>開始遊戲</span></button>
      </div>
    );

    let loadElement = (
      <div className="page-load">
        <div className="plan" style={{ textAlign: 'center' }}>
          <img src={img2} style={{
            display: 'inline-block',
            position: 'relative', transition: '0.3s all linear', top: x, left: y
          }} />
          <p>{this.state.imgPlan}%</p>
        </div>
      </div>
    );

    return (
      <div className="page-content"
      //  style={{ background: `url(${mask}) no-repeat center center` }}
      >

        <Imgs setImgPlan={imgPlan => this.setState({ imgPlan })} />
        {
          this.state.imgPlan < 100
          &&
          <img src={mask} style={{ position: 'absolute', top: 0, width: '100%', height: '100%' }} />
        }
        <img src={envelope} className="envelope" />
        {
          this.state.imgPlan == 100 ? startElement : loadElement
        }
      </div>
    )
  }
}

export default withRouter(Load);
