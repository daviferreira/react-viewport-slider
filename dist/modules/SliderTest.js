'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _unexpected = require('unexpected');

var _unexpected2 = _interopRequireDefault(_unexpected);

var _mochaJsdom = require('mocha-jsdom');

var _mochaJsdom2 = _interopRequireDefault(_mochaJsdom);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsTestUtils = require('react-addons-test-utils');

var _reactAddonsTestUtils2 = _interopRequireDefault(_reactAddonsTestUtils);

var _Slider = require('./Slider');

var _Slider2 = _interopRequireDefault(_Slider);

describe('Slider Test Case', function () {

  _mochaJsdom2['default']();

  it('should render', function () {
    var instance = _reactAddonsTestUtils2['default'].renderIntoDocument(_react2['default'].createElement(
      _Slider2['default'],
      null,
      _react2['default'].createElement(
        'div',
        null,
        'Slide 1'
      ),
      _react2['default'].createElement(
        'div',
        null,
        'Slide 2'
      ),
      _react2['default'].createElement(
        'div',
        null,
        'Slide 3'
      )
    ));
    _unexpected2['default'](instance, 'to be defined');
  });
});