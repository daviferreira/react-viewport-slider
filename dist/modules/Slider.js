'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Item = require('./Item');

var _Item2 = _interopRequireDefault(_Item);

var _Paginator = require('./Paginator');

var _Paginator2 = _interopRequireDefault(_Paginator);

var _utilScrollToY = require('./util/scrollToY');

var _utilScrollToY2 = _interopRequireDefault(_utilScrollToY);

var Slider = (function (_Component) {
  _inherits(Slider, _Component);

  function Slider(props) {
    _classCallCheck(this, Slider);

    _Component.call(this, props);

    this.state = { activeIndex: 1 };

    this.setActive = this.setActive.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.lastScroll = 0;

    window.addEventListener('scroll', this.handleScroll);
  }

  Slider.prototype.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };

  Slider.prototype.handleScroll = function handleScroll() {
    if (this.isAnimating) {
      return;
    }

    // up
    if (window.scrollY > this.lastScroll && window.innerHeight + window.scrollY > window.innerHeight * this.state.activeIndex + window.innerHeight / 2) {
      this.setActive(this.state.activeIndex + 1);
      // down
    } else if (window.scrollY < this.lastScroll && window.innerHeight + window.scrollY < window.innerHeight * this.state.activeIndex - window.innerHeight / 1.5) {
        this.setActive(this.state.activeIndex - 1);
      }

    this.lastScroll = window.scrollY;
  };

  Slider.prototype.setActive = function setActive(index, scrollTo) {
    var _this = this;

    this.setState({ activeIndex: index }, function () {
      if (scrollTo) {
        _this.isAnimating = true;
        _utilScrollToY2['default'](_this.refs['slide-' + index].offsetTop, 500, 'easeInOutQuint', function () {
          _this.isAnimating = false;
        });
      }
    });
  };

  Slider.prototype.render = function render() {
    var _this2 = this;

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
          'div',
          { ref: 'slide-' + index, key: index },
          _react2['default'].createElement(
            _Item2['default'],
            _extends({}, child.props, {
              index: index,
              hideButton: index === _this2.props.children.length,
              onClick: _this2.setActive }),
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