'use strict';

import { Link } from 'react-scroll';
import React, { PropTypes } from 'react';

var Bullet = (props) => {

  const style = {
    background: '#fff',
    display: 'block',
    height: '20px',
    opacity: props.active ? 1 : 0.2,
    transition: 'opacity .35s',
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
      style={style}
      to={`slide-${props.index}`} />
  );

};

Bullet.defaultProps = {
  active: false
};

Bullet.propTypes = {
  active: PropTypes.bool,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func
};

export default Bullet;
