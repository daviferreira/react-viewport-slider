'use strict';

import React, { PropTypes } from 'react';
import classNames from 'classnames';

import Button from './Button';

const Item = (props) => {

  const style = {
    boxSizing: 'border-box',
    height: '100vh',
    position: 'relative',
    width: '100%'
  };

  const classes = classNames(
    'viewport-slider-item',
    `viewport-slider-item-${props.index}`,
    props.itemClass
  );

  const propsClone = Object.create(props || {});
  delete propsClone.children;

  const renderButton = () => {
    return (
      <Button index={props.index} onClick={props.onClick}>
        {props.buttonLabel}
      </Button>
    );
  };

  return (
    <div {...propsClone} className={classes} style={Object.assign(style, props.itemStyle)}>
      {props.children}
      {props.hideButton ? null : renderButton()}
    </div>
  );

};

Item.defaultProps = {
  buttonLabel: 'next',
  hideButton: false,
  itemStyle: {}
};

Item.propTypes = {
  buttonLabel: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.object
  ]),
  hideButton: PropTypes.bool,
  index: PropTypes.number.isRequired,
  itemClass: PropTypes.string,
  itemStyle: PropTypes.object,
  onClick: PropTypes.func
};

export default Item;
