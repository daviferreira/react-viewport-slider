'use strict';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const Bullet = props => {
  const style = {
    display: 'block',
    height: '20px',
    width: '20px'
  };

  const handleClick = () => {
    props.onClick(props.index, true);
  };

  const classes = classNames('viewport-slider-paginator-bullet', {
    'is-active': props.active
  });

  return (
    <a
      href={`#viewport-slide-${props.index}`}
      className={classes}
      onClick={handleClick}
      style={style}
    />
  );
};

Bullet.propTypes = {
  active: PropTypes.bool,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func
};

export default Bullet;
