'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _reactScroll = require('react-scroll');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Item = require('./Item');

var _Item2 = _interopRequireDefault(_Item);

var _Paginator = require('./Paginator');

var _Paginator2 = _interopRequireDefault(_Paginator);

var Slider = (function (_Component) {
  _inherits(Slider, _Component);

  function Slider(props) {
    _classCallCheck(this, Slider);

    _Component.call(this, props);

    this.state = { activeIndex: 1 };

    this.setActive = this.setActive.bind(this);
  }

  Slider.prototype.setActive = function setActive(index) {
    this.setState({ activeIndex: index });
  };

  Slider.prototype.render = function render() {
    var _this = this;

    if (!this.props.children) {
      return null;
    }

    return _react2['default'].createElement(
      'div',
      { className: 'viewport-slider' },
      _react2['default'].createElement(_Paginator2['default'], { activeIndex: this.state.activeIndex,
        bullets: this.props.children.length,
        onClick: this.setActive }),
      this.props.children.map(function (child, key) {
        var index = key + 1;

        return _react2['default'].createElement(
          _reactScroll.Element,
          { name: 'slide-' + index, key: index },
          _react2['default'].createElement(
            _Item2['default'],
            _extends({}, child.props, {
              index: index,
              hideButton: index === _this.props.children.length,
              onClick: _this.setActive }),
            child
          )
        );
      })
    );
  };

  return Slider;
})(_react.Component);

exports['default'] = Slider;

Slider.defaultProps = {};

Slider.propTypes = {};
module.exports = exports['default'];