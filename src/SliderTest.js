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
        <Slider.Item>Slide 1</Slider.Item>
        <Slider.Item>Slide 2</Slider.Item>
        <Slider.Item>Slide 3</Slider.Item>
      </Slider>
    );

    instance = tree.getMountedInstance();
    vdom = tree.getRenderOutput();

    expect(instance, 'to be defined');
    expect(vdom, 'to be defined');
  });
});
