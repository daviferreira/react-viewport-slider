(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["ViewportSlider"] = factory(require("React"));
	else
		root["ViewportSlider"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _Slider = __webpack_require__(1);

	var _Slider2 = _interopRequireDefault(_Slider);

	exports['default'] = _Slider2['default'];
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Item = __webpack_require__(3);

	var _Item2 = _interopRequireDefault(_Item);

	var _Paginator = __webpack_require__(6);

	var _Paginator2 = _interopRequireDefault(_Paginator);

	var _utilScrollToY = __webpack_require__(8);

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

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _Button = __webpack_require__(5);

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

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = '';

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes += ' ' + arg;
				} else if (Array.isArray(arg)) {
					classes += ' ' + classNames.apply(null, arg);
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes += ' ' + key;
						}
					}
				}
			}

			return classes.substr(1);
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _react = __webpack_require__(2);

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

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Bullet = __webpack_require__(7);

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

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var Bullet = function Bullet(props) {

	  var style = {
	    display: 'block',
	    height: '20px',
	    width: '20px'
	  };

	  var handleClick = function handleClick() {
	    props.onClick(props.index, true);
	  };

	  var classes = _classnames2['default']('viewport-slider-paginator-bullet', { 'is-active': props.active });

	  return _react2['default'].createElement('a', { href: '#viewport-slide-' + props.index,
	    className: classes,
	    onClick: handleClick,
	    style: style });
	};

	Bullet.propTypes = {
	  active: _react.PropTypes.bool,
	  index: _react.PropTypes.number.isRequired,
	  onClick: _react.PropTypes.func
	};

	exports['default'] = Bullet;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports) {

	// first add raf shim
	// http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
	'use strict';

	exports.__esModule = true;
	exports['default'] = scrollToY;
	window.requestAnimFrame = (function () {
	  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
	    window.setTimeout(callback, 1000 / 60);
	  };
	})();

	// http://stackoverflow.com/a/26808520
	// main function

	function scrollToY(scrollTargetY, speed, easing, callback) {
	  // scrollTargetY: the target scrollY property of the window
	  // speed: time in pixels per second
	  // easing: easing equation to use

	  var scrollY = window.scrollY,
	      scrollTargetY = scrollTargetY || 0,
	      speed = speed || 2000,
	      easing = easing || 'easeOutSine',
	      currentTime = 0;

	  // min time .1, max time .8 seconds
	  var time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8));

	  // easing equations from https://github.com/danro/easing-js/blob/master/easing.js
	  var PI_D2 = Math.PI / 2,
	      easingEquations = {
	    easeOutSine: function easeOutSine(pos) {
	      return Math.sin(pos * (Math.PI / 2));
	    },
	    easeInOutSine: function easeInOutSine(pos) {
	      return -0.5 * (Math.cos(Math.PI * pos) - 1);
	    },
	    easeInOutQuint: function easeInOutQuint(pos) {
	      if ((pos /= 0.5) < 1) {
	        return 0.5 * Math.pow(pos, 5);
	      }
	      return 0.5 * (Math.pow(pos - 2, 5) + 2);
	    }
	  };

	  // add animation loop
	  function tick() {
	    currentTime += 1 / 60;

	    var p = currentTime / time;
	    var t = easingEquations[easing](p);

	    if (p < 1) {
	      requestAnimFrame(tick);

	      window.scrollTo(0, scrollY + (scrollTargetY - scrollY) * t);
	    } else {
	      if (callback) {
	        callback();
	      }
	      window.scrollTo(0, scrollTargetY);
	    }
	  }

	  // call it once to get started
	  tick();
	}

	module.exports = exports['default'];

/***/ }
/******/ ])
});
;