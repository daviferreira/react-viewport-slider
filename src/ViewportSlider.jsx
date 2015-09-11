'use strict';

import React, { Component, PropTypes } from 'react';
import Item from './Item';

export default class ViewportSlider extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="viewport-slider">
        {this.props.children}
      </div>
    );
  }

}

ViewportSlider.defaultProps = {};

ViewportSlider.propTypes = {};
