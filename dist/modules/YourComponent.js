'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var YourComponent = (function (_Component) {
  _inherits(YourComponent, _Component);

  function YourComponent(props) {
    _classCallCheck(this, YourComponent);

    _Component.call(this, props);

    this.state = {};
  }

  YourComponent.prototype.render = function render() {
    return _react2['default'].createElement(
      'div',
      { className: 'your-component' },
      'Hello, world!'
    );
  };

  return YourComponent;
})(_react.Component);

exports['default'] = YourComponent;

YourComponent.defaultProps = {};

YourComponent.propTypes = {};
module.exports = exports['default'];