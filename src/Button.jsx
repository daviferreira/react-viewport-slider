'use strict';

import classNames from 'classnames';
import { Link } from 'react-scroll';
import React, { PropTypes } from 'react';

var Button = (props) => {

  const style = {
    bottom: '50px',
    left: '50%',
    position: 'absolute',
    transform: 'translateX(-50%)',
    zIndex: 2
  }

  var handleClick = () => {
    props.onClick(props.index + 1);
  };

  return (
    <Link className="viewport-slider-button"
      duration={500}
      onClick={handleClick}
      smooth={true}
      to={`slide-${props.index + 1}`}
      style={style}>
      {props.children}
    </Link>
  );

};

Button.propTypes = {
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func
};

export default Button;
