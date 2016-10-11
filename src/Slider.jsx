'use strict';

import React, { Component, PropTypes } from 'react';

import Item from './Item';
import Paginator from './Paginator';

// TODO:
// You should do the detection of the scroll event on the first scrollable
// parent instead of window. Because for main websites, scroller is the window
// but on other cases it is a div with `overflow: scroll` style.

const BROWSER = typeof window != 'undefined'

export default class Slider extends Component {

  state = { activeIndex: 1 };
  
  componentDidMount() {
    if (BROWSER) window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    if (BROWSER) window.removeEventListener('scroll', this.handleScroll);
  }

  lastScroll = 0;
  handleScroll = () => {
    if (this.isAnimating) {
      return;
    }

    // up
    if (
      window.scrollY > this.lastScroll &&
      window.innerHeight + window.scrollY >
        ((window.innerHeight * this.state.activeIndex) + window.innerHeight/2)
    ) {
      this.setActive(this.state.activeIndex + 1);
    // down
    } else if (
      window.scrollY < this.lastScroll &&
      window.innerHeight + window.scrollY <
        ((window.innerHeight * this.state.activeIndex) - window.innerHeight/1.5)
    ) {
      this.setActive(this.state.activeIndex - 1);
    }

    this.lastScroll = window.scrollY;
  }

  setActive = (index, scrollTo) => {
    this.setState({ activeIndex: index }, () => {
      if (scrollTo) {
        this.isAnimating = true;
        require('scroll-to-y')(
          this.refs[`slide-${ index }`].offsetTop,
          500,
          'easeInOutQuint',
          () => {
            this.isAnimating = false;
          }
        );
      }
    });
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
            <div ref={`slide-${ index }`} key={index}>
              <Item {...child.props}
                index={index}
                hideButton={index === this.props.children.length}
                onClick={this.setActive}>
                {child}
              </Item>
            </div>
          );
        })}
      </div>
    );
  }

}

Slider.defaultProps = {};

Slider.propTypes = {};
