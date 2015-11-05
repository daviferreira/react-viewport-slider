'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _unexpected = require('unexpected');

var _unexpected2 = _interopRequireDefault(_unexpected);

var _skinDeep = require('skin-deep');

var _skinDeep2 = _interopRequireDefault(_skinDeep);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Slider = require('./Slider');

var _Slider2 = _interopRequireDefault(_Slider);

describe('Slider Test Case', function () {
  var vdom = undefined,
      instance = undefined,
      items = undefined;

  it('should render', function () {
    var tree = _skinDeep2['default'].shallowRender(_react2['default'].createElement(
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

    instance = tree.getMountedInstance();
    vdom = tree.getRenderOutput();

    _unexpected2['default'](instance, 'to be defined');
    _unexpected2['default'](vdom, 'to be defined');
  });
});