'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var Item = function Item(props) {

  var style = {
    boxSizing: 'border-box',
    height: '100vh',
    position: 'relative',
    width: '100%'
  };

  var classes = _classnames2['default']('viewport-slider-item', 'viewport-slider-item-' + props.index, props.itemClass);

  var propsClone = Object.create(props || {});
  delete propsClone.children;

  var renderButton = function renderButton() {
    return _react2['default'].createElement(
      _Button2['default'],
      { index: props.index, onClick: props.onClick },
      props.buttonLabel
    );
  };

  return _react2['default'].createElement(
    'div',
    _extends({}, propsClone, { className: classes, style: Object.assign(style, props.itemStyle) }),
    props.children,
    props.hideButton ? null : renderButton()
  );
};

Item.defaultProps = {
  buttonLabel: 'next',
  hideButton: false,
  itemStyle: {}
};

Item.propTypes = {
  buttonLabel: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element, _react.PropTypes.object]),
  hideButton: _react.PropTypes.bool,
  index: _react.PropTypes.number.isRequired,
  itemClass: _react.PropTypes.string,
  itemStyle: _react.PropTypes.object,
  onClick: _react.PropTypes.func
};

exports['default'] = Item;
module.exports = exports['default'];