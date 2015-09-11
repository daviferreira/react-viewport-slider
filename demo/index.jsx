'use strict';

require('normalize.css');
require('./demo.css');

import React from 'react';
import ReactDOM from 'react-dom';

import ViewportSlider from '../src/ViewportSlider';

// http://alpha.wallhaven.cc/wallpaper/164335
const wallpaper = 'http://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-164335.png';

class Demo extends React.Component {

  render() {
    return (
      <ViewportSlider>
        <div itemStyle={{ backgroundColor: '#a2d7c7' }}>
          <div className="content">Hello, world.</div>
        </div>
        <div itemStyle={{ backgroundColor: '#353330' }}>
          <div className="content">Sup?</div>
        </div>
        <div itemClass="has-overlay" itemStyle={{ backgroundImage: `url(${wallpaper})`, backgroundSize: 'cover' }}>
          <div className="content">Yo.</div>
        </div>
      </ViewportSlider>
    );
  }

}

ReactDOM.render(
  <Demo />,
  document.getElementById('demo')
);
