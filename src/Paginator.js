'use strict';

import PropTypes from 'prop-types';

import React from 'react';

import Bullet from './Bullet';

const Paginator = ({ activeIndex, bullets, onClick }) => {
  const style = {
    top: '50%',
    right: '50px',
    position: 'fixed',
    transform: 'translateY(-50%)',
    zIndex: 2
  };

  return (
    <div className="viewport-slider-paginator" style={style}>
      {Array.from(new Array(bullets), (x, i) => i + 1).map(i => {
        return (
          <Bullet
            active={i === activeIndex}
            key={i}
            index={i}
            onClick={onClick}
          />
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
