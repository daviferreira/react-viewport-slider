'use strict';

import React, { Component, PropTypes } from 'react';

export default class YourComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="your-component">
        Hello, world!
      </div>
    );
  }

}

YourComponent.defaultProps = {};

YourComponent.propTypes = {};
