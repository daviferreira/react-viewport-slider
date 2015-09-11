'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _unexpected = require('unexpected');

var _unexpected2 = _interopRequireDefault(_unexpected);

var _mochaJsdom = require('mocha-jsdom');

var _mochaJsdom2 = _interopRequireDefault(_mochaJsdom);

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _ViewportSlider = require('./ViewportSlider');

var _ViewportSlider2 = _interopRequireDefault(_ViewportSlider);

var TestUtils = _reactAddons2['default'].addons.TestUtils;

describe('ViewportSlider Test Case', function () {

  _mochaJsdom2['default']();

  it('should render', function () {
    var instance = TestUtils.renderIntoDocument(_reactAddons2['default'].createElement(_ViewportSlider2['default'], null));
    _unexpected2['default'](instance, 'to be defined');
  });
});