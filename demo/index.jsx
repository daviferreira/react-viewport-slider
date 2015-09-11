'use strict';

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
          <h1>Hello, world.</h1>
        </div>
        <div itemStyle={{ backgroundColor: '#353330' }}>
          <h1>Sup?</h1>
        </div>
        <div itemClass="has-overlay" itemStyle={{ backgroundImage: `url(${wallpaper})`, backgroundSize: 'cover' }}>
          <h1>Yo.</h1>
        </div>
      </ViewportSlider>
    );
  }

}

ReactDOM.render(
  <Demo />,
  document.getElementById('demo')
);
