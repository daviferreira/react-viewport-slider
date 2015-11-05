'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Bullet = require('./Bullet');

var _Bullet2 = _interopRequireDefault(_Bullet);

var Paginator = function Paginator(props) {

  var style = {
    top: '50%',
    right: '50px',
    position: 'fixed',
    transform: 'translateY(-50%)',
    zIndex: 2
  };

  return _react2['default'].createElement(
    'div',
    { className: 'viewport-slider-paginator', style: style },
    Array.from(new Array(props.bullets), function (x, i) {
      return i + 1;
    }).map(function (i) {
      return _react2['default'].createElement(_Bullet2['default'], { active: i === props.activeIndex,
        key: i,
        index: i,
        onClick: props.onClick });
    })
  );
};

Paginator.propTypes = {
  activeIndex: _react.PropTypes.number,
  bullets: _react.PropTypes.number.isRequired,
  onClick: _react.PropTypes.func
};

exports['default'] = Paginator;
module.exports = exports['default'];