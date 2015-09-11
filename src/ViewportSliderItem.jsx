'use strict';

import React from 'react';
import classNames from 'classnames';

export default (props) => {

  const style = {
    height: '100vh',
    width: '100%'
  };

  const classes = classNames('viewport-slider-item', props.className);

  return (
    <div {...props} className={classes} style={Object.assign(props.style, style)} />
  );

};
