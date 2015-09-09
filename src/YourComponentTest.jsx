'use strict';

import expect from 'unexpected';
import jsdom from 'mocha-jsdom';
import React from 'react/addons'

import YourComponent from './YourComponent';

var TestUtils = React.addons.TestUtils;

describe('Your Component Test Case', () => {

  jsdom();

  it('should render', () => {
    var instance = TestUtils.renderIntoDocument(<YourComponent />);
    expect(instance, 'to be defined');
  });

});
