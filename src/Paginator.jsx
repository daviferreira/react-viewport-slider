'use strict';

import { Link } from 'react-scroll';
import React, { PropTypes } from 'react';

import Bullet from './Bullet';

var Paginator = (props) => {

  const style = {
    top: '50%',
    right: '50px',
    position: 'fixed',
    transform: 'translateY(-50%)',
    zIndex: 2
  }

  return (
    <div className="viewport-slider-paginator" style={style}>
      {Array.from(new Array(props.bullets), (x, i) => i + 1).map((i) => {
        return (
          <Bullet key={i}
            index={i}
            onClick={props.onClick} />
        );
      })}
    </div>
  );

};

Paginator.propTypes = {
  activeIndex: PropTypes.number,
  bullets: PropTypes.number.isRequired,
  onClick: PropTypes.func
};


export default Paginator;
