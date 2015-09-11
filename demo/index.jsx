'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import ViewportSlider from '../src/ViewportSlider';
import Item from '../src/ViewportSliderItem';

// http://alpha.wallhaven.cc/wallpaper/164335
const wallpaper = 'http://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-164335.png';

class Demo extends React.Component {

  render() {
    return (
      <ViewportSlider>
        <Item style={{ backgroundColor: '#a2d7c7' }}>
          <h1>Hello, world.</h1>
        </Item>
        <Item style={{ backgroundColor: '#353330' }}>
          <h1>Sup?</h1>
        </Item>
        <Item className="has-overlay"
          style={{ backgroundImage: `url(${wallpaper})`, backgroundSize: 'cover' }}>
          <h1>Yo.</h1>
        </Item>
      </ViewportSlider>
    );
  }

}

ReactDOM.render(
  <Demo />,
  document.getElementById('demo')
);
