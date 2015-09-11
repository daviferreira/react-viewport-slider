'use strict';

import React from 'react/addons';

import ViewportSlider from '../src/ViewportSlider';

class Demo extends React.Component {

  render() {
    return (
      <ViewportSlider />
    );
  }

}

React.render(
  <Demo />,
  document.body
);
