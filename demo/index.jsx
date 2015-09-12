'use strict';

require('normalize.css');
require('./demo.css');

import React from 'react';
import ReactDOM from 'react-dom';

import Slider from '../src/Slider';

// http://alpha.wallhaven.cc/wallpaper/164335
const wallpaper = 'http://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-164335.png';

class Demo extends React.Component {

  render() {
    return (
      <Slider>
        <div itemStyle={{ backgroundColor: '#a2d7c7' }}>
          <div className="content">Hello, world.</div>
        </div>
        <div itemStyle={{ backgroundColor: '#353330' }}>
          <div className="content">Sup?</div>
        </div>
        <div itemClass="has-overlay" itemStyle={{ backgroundImage: `url(${wallpaper})`, backgroundSize: 'cover' }}>
          <div className="content">Yo.</div>
        </div>
        <div itemStyle={{ color: '#333' }}>
          <div className="content love">
            <i className="fa fa-heart"></i>
            <iframe src="http://ghbtns.com/github-btn.html?user=daviferreira&repo=react-viewport-slider&type=follow&count=true&size=large" allowTransparency="true" frameBorder="0" scrolling="0" width="auto" height="30" />
            <iframe src="http://ghbtns.com/github-btn.html?user=daviferreira&repo=react-viewport-slider&type=watch&count=true&size=large" allowTransparency="true" frameBorder="0" scrolling="0" width="auto" height="30" />
            <iframe src="http://ghbtns.com/github-btn.html?user=daviferreira&repo=react-viewport-slider&type=fork&count=true&size=large" allowTransparency="true" frameBorder="0" scrolling="0" width="auto" height="30" />
          </div>
        </div>
      </Slider>
    );
  }

}

ReactDOM.render(
  <Demo />,
  document.getElementById('demo')
);
