'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Button = function Button(props) {

  var style = {
    bottom: '50px',
    left: '50%',
    position: 'absolute',
    transform: 'translateX(-50%)',
    zIndex: 2
  };

  var handleClick = function handleClick() {
    props.onClick(props.index + 1, true);
  };

  return _react2['default'].createElement(
    'a',
    { href: '#viewport-slide-' + (props.index + 1),
      className: 'viewport-slider-button',
      onClick: handleClick,
      style: style },
    props.children
  );
};

Button.propTypes = {
  index: _react.PropTypes.number.isRequired,
  onClick: _react.PropTypes.func
};

exports['default'] = Button;
module.exports = exports['default'];