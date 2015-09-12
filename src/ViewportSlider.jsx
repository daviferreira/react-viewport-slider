'use strict';

import { Element } from 'react-scroll';
import React, { Component, PropTypes } from 'react';

import Item from './Item';
import Paginator from './Paginator';

export default class ViewportSlider extends Component {

  constructor(props) {
    super(props);

    this.state = { activeIndex: 1 };

    this.setActive = this.setActive.bind(this);
  }

  setActive(index) {
    this.setState({ activeIndex: index });
  }

  render() {
    if (!this.props.children) {
      return null;
    }

    return (
      <div className="viewport-slider">
        <Paginator activeIndex={this.state.activeIndex}
          bullets={this.props.children.length}
          onClick={this.setActive} />

        {this.props.children.map((child, key) => {
          let index = key + 1;

          return (
            <Element name={`slide-${index}`} key={index}>
              <Item {...child.props}
                index={index}
                hideButton={index === this.props.children.length}
                onClick={this.setActive}>
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
