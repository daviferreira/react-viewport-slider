'use strict';

import expect from 'unexpected';
import jsdom from 'mocha-jsdom';
import React from 'react/addons'

import ViewportSlider from './ViewportSlider';

var TestUtils = React.addons.TestUtils;

describe('ViewportSlider Test Case', () => {

  jsdom();

  it('should render', () => {
    var instance = TestUtils.renderIntoDocument(<ViewportSlider />);
    expect(instance, 'to be defined');
  });

});
