'use strict';

import React from 'react/addons';

import YourComponent from '../src/YourComponent';

class Demo extends React.Component {

  render() {
    return (
      <YourComponent />
    );
  }

}

React.render(
  <Demo />,
  document.body
);
