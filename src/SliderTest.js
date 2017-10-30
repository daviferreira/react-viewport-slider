'use strict';

import expect from 'unexpected';
import sd from 'skin-deep';
import React from 'react';

import Slider from './Slider';

describe('Slider Test Case', () => {
  let vdom, instance;

  it('should render', () => {
    const tree = sd.shallowRender(
      <Slider>
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
      </Slider>
    );

    instance = tree.getMountedInstance();
    vdom = tree.getRenderOutput();

    expect(instance, 'to be defined');
    expect(vdom, 'to be defined');
  });
});
