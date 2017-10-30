'use strict';

import 'normalize.css';
import './demo.css';

import React from 'react';
import ReactDOM from 'react-dom';

import Slider from '../src/Slider';

// http://alpha.wallhaven.cc/wallpaper/164335
const wallpaper =
  'http://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-164335.png';

class Demo extends React.Component {
  render() {
    return (
      <Slider>
        <Slider.Item style={{ backgroundColor: '#a2d7c7' }}>
          <div className="content">Hello, world.</div>
        </Slider.Item>
        <Slider.Item style={{ backgroundColor: '#353330' }}>
          <div className="content">Sup?</div>
        </Slider.Item>
        <Slider.Item
          className="has-overlay"
          style={{
            backgroundImage: `url(${wallpaper})`,
            backgroundSize: 'cover'
          }}
        >
          <div className="content">Yo.</div>
        </Slider.Item>
        <Slider.Item style={{ color: '#333' }}>
          <div className="content love">
            <i className="fa fa-heart" />
            <iframe
              src="http://ghbtns.com/github-btn.html?user=daviferreira&repo=react-viewport-slider&type=follow&count=true&size=large"
              allowTransparency="true"
              frameBorder="0"
              scrolling="0"
              width="auto"
              height="30"
            />
            <iframe
              src="http://ghbtns.com/github-btn.html?user=daviferreira&repo=react-viewport-slider&type=watch&count=true&size=large"
              allowTransparency="true"
              frameBorder="0"
              scrolling="0"
              width="auto"
              height="30"
            />
            <iframe
              src="http://ghbtns.com/github-btn.html?user=daviferreira&repo=react-viewport-slider&type=fork&count=true&size=large"
              allowTransparency="true"
              frameBorder="0"
              scrolling="0"
              width="auto"
              height="30"
            />
          </div>
        </Slider.Item>
      </Slider>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById('demo'));
