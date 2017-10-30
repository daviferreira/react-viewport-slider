'use strict';

import PropTypes from 'prop-types';

import React from 'react';
import classNames from 'classnames';

import Button from './Button';

const Item = props => {
  const {
    buttonLabel,
    className,
    children,
    hideButton,
    index,
    onClick,
    style
  } = props;

  const itemStyle = {
    boxSizing: 'border-box',
    height: '100vh',
    position: 'relative',
    width: '100%'
  };

  const classes = classNames(
    'viewport-slider-item',
    `viewport-slider-item-${index}`,
    className
  );

  const propsClone = Object.create(props || {});
  delete propsClone.children;

  const renderButton = () => {
    return (
      <Button index={index} onClick={onClick}>
        {buttonLabel}
      </Button>
    );
  };

  return (
    <div
      {...propsClone}
      className={classes}
      style={Object.assign(itemStyle, style)}
    >
      {children}
      {hideButton ? null : renderButton()}
    </div>
  );
};

Item.defaultProps = {
  buttonLabel: 'next',
  hideButton: false,
  style: {}
};

Item.propTypes = {
  buttonLabel: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.object
  ]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  hideButton: PropTypes.bool,
  index: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func
};

export default Item;
