'use strict';

import { Link } from 'react-scroll';
import React, { PropTypes } from 'react';

var Bullet = (props) => {

  const style = {
    display: 'block',
    height: '20px',
    width: '20px'
  }

  var handleClick = () => {
    props.onClick(props.index);
  };

  return (
    <Link className="viewport-slider-paginator-bullet"
      duration={500}
      smooth={true}
      onClick={handleClick}
      spy={true}
      style={style}
      to={`slide-${props.index}`} />
  );

};

Bullet.propTypes = {
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func
};

export default Bullet;
