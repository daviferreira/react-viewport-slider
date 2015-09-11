'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactScroll = require('react-scroll');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Bullet = function Bullet(props) {

  var style = {
    display: 'block',
    height: '20px',
    width: '20px'
  };

  var handleClick = function handleClick() {
    props.onClick(props.index);
  };

  return _react2['default'].createElement(_reactScroll.Link, { className: 'viewport-slider-paginator-bullet',
    duration: 500,
    smooth: true,
    onClick: handleClick,
    spy: true,
    style: style,
    to: 'slide-' + props.index });
};

Bullet.defaultProps = {
  active: false
};

Bullet.propTypes = {
  active: _react.PropTypes.bool,
  index: _react.PropTypes.number.isRequired,
  onClick: _react.PropTypes.func
};

exports['default'] = Bullet;
module.exports = exports['default'];