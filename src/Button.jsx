'use strict';

import classNames from 'classnames';
import { Link } from 'react-scroll';
import React from 'react';

export default (props) => {

  const style = {
    bottom: '50px',
    left: '50%',
    position: 'absolute',
    transform: 'translateX(-50%)'
  }

  return (
    <Link className="viewport-slider-button"
      duration={500}
      smooth={true}
      to={`slide-${props.index + 1}`}
      style={style}>
      {props.children}
    </Link>
  );

};
