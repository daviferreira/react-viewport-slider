'use strict';

import { Element } from 'react-scroll';
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
        {this.props.children.map((child, key) => {
          return (
            <Element name={`slide-${key}`} key={key}>
              <Item {...child.props}
                index={key}
                hideButton={key + 1 === this.props.children.length}>
                {child}
              </Item>
            </Element>
          );
        })}
      </div>
    );
  }

}

ViewportSlider.defaultProps = {};

ViewportSlider.propTypes = {};
