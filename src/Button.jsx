'use strict';

import classNames from 'classnames';
import React, { PropTypes } from 'react';

const Button = (props) => {

  const style = {
    bottom: '50px',
    left: '50%',
    position: 'absolute',
    transform: 'translateX(-50%)',
    zIndex: 2
  }

  const handleClick = () => {
    props.onClick(props.index + 1, true);
  };

  return (
    <a href={`#viewport-slide-${ props.index + 1 }`}
      className="viewport-slider-button"
      onClick={handleClick}
      style={style}>
      {props.children}
    </a>
  );

};

Button.propTypes = {
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func
};

export default Button;
