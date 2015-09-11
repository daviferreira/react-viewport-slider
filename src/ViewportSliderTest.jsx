'use strict';

import expect from 'unexpected';
import jsdom from 'mocha-jsdom';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

import ViewportSlider from './ViewportSlider';

describe('ViewportSlider Test Case', () => {

  jsdom();

  it('should render', () => {
    var instance = TestUtils.renderIntoDocument(
      <ViewportSlider>
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
      </ViewportSlider>
    );
    expect(instance, 'to be defined');
  });

});
