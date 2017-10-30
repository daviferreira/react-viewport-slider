'use strict';

import PropTypes from 'prop-types';

import React from 'react';

const Button = ({ children, index, onClick }) => {
  const style = {
    bottom: '50px',
    left: '50%',
    position: 'absolute',
    transform: 'translateX(-50%)',
    zIndex: 2
  };

  const handleClick = () => {
    onClick(index + 1, true);
  };

  return (
    <a
      href={`#viewport-slide-${index + 1}`}
      className="viewport-slider-button"
      onClick={handleClick}
      style={style}
    >
      {children}
    </a>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func
};

export default Button;
