(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("ReactDOM"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "ReactDOM"], factory);
	else if(typeof exports === 'object')
		exports["ViewportSlider"] = factory(require("React"), require("ReactDOM"));
	else
		root["ViewportSlider"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_7__) {
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

	var _reactScroll = __webpack_require__(2);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _Item = __webpack_require__(15);

	var _Item2 = _interopRequireDefault(_Item);

	var _Paginator = __webpack_require__(18);

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

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports.Link = __webpack_require__(3);
	exports.Button = __webpack_require__(13);
	exports.Element = __webpack_require__(14);
	exports.Helpers = __webpack_require__(6);
	exports.scroller = __webpack_require__(12);
	exports.scrollSpy = __webpack_require__(11);


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(4);
	var assign = __webpack_require__(5);
	var Helpers = __webpack_require__(6);

	var Link = React.createClass({
	  mixins: [Helpers.Scroll],
	  getInitialState : function() {
	    return { active : false};
	  },
	  getDefaultProps: function() {
	    return {
	      className: ""
	    };
	  },
	  render: function () {

	    var activeClass = this.state.active ? (this.props.activeClass || "active") : "";

	    var props = assign({}, this.props, {
	      onClick: this.onClick,
	      className : [this.props.className, activeClass].join(" ").trim()
	    });

	    return React.DOM.a(props, this.props.children);
	  }
	});

	module.exports = Link;


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Object.assign
	 */

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.assign

	'use strict';

	function assign(target, sources) {
	  if (target == null) {
	    throw new TypeError('Object.assign target cannot be null or undefined');
	  }

	  var to = Object(target);
	  var hasOwnProperty = Object.prototype.hasOwnProperty;

	  for (var nextIndex = 1; nextIndex < arguments.length; nextIndex++) {
	    var nextSource = arguments[nextIndex];
	    if (nextSource == null) {
	      continue;
	    }

	    var from = Object(nextSource);

	    // We don't currently support accessors nor proxies. Therefore this
	    // copy cannot throw. If we ever supported this then we must handle
	    // exceptions and side-effects. We don't support symbols so they won't
	    // be transferred.

	    for (var key in from) {
	      if (hasOwnProperty.call(from, key)) {
	        to[key] = from[key];
	      }
	    }
	  }

	  return to;
	}

	module.exports = assign;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(4);
	var ReactDOM = __webpack_require__(7);
	var animateScroll = __webpack_require__(8);
	var scrollSpy = __webpack_require__(11);
	var scroller = __webpack_require__(12);

	var Helpers = {

	  Scroll: {

	    propTypes: {
	      to: React.PropTypes.string.isRequired,
	      offset: React.PropTypes.number
	    },

	    getDefaultProps: function() {
	      return {offset: 0};
	    },

	    scrollTo : function(to) {
	      scroller.scrollTo(to, this.props.smooth, this.props.duration, this.props.offset);
	    },

	    onClick: function(event) {

	      /*
	       * give the posibility to override onClick
	       */

	      if(this.props.onClick) {
	        this.props.onClick(event);
	      }

	      /*
	       * dont bubble the navigation
	       */

	      if (event.stopPropagation) event.stopPropagation();
	      if (event.preventDefault) event.preventDefault();

	      /*
	       * do the magic!
	       */

	      this.scrollTo(this.props.to);

	    },

	    componentDidMount: function() {
	      scrollSpy.mount();

	      if(this.props.spy) {
	        var to = this.props.to;
	        var element = null;
	        var elemTopBound = 0;
	        var elemBottomBound = 0;

	        scrollSpy.addStateHandler((function() {
	          if(scroller.getActiveLink() != to) {
	              this.setState({ active : false });
	          }
	        }).bind(this));

	        scrollSpy.addSpyHandler((function(y) {

	          if(!element) {
	              element = scroller.get(to);

	              var cords = element.getBoundingClientRect();
	              elemTopBound = (cords.top + y);
	              elemBottomBound = elemTopBound + cords.height;
	          }

	          var offsetY = y - this.props.offset;
	          var isInside = (offsetY >= elemTopBound && offsetY <= elemBottomBound);
	          var isOutside = (offsetY < elemTopBound || offsetY > elemBottomBound);
	          var activeLnik = scroller.getActiveLink();

	          if (isOutside && activeLnik === to) {

	            scroller.setActiveLink(void 0);
	            this.setState({ active : false });

	          } else if (isInside && activeLnik != to) {

	            scroller.setActiveLink(to);
	            this.setState({ active : true });
	            if(this.props.onSetActive) this.props.onSetActive(to);
	            scrollSpy.updateStates();
	          }
	        }).bind(this));
	      }
	    },
	    componentWillUnmount: function() {
	      scrollSpy.unmount();
	    }
	  },


	  Element: {
	    propTypes: {
	      name: React.PropTypes.string.isRequired
	    },
	    componentDidMount: function() {
	      var domNode = ReactDOM.findDOMNode(this);
	      scroller.register(this.props.name, domNode);
	    },
	    componentWillUnmount: function() {
	      scroller.unregister(this.props.name);
	    }
	  }
	};

	module.exports = Helpers;



/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var smooth = __webpack_require__(9);

	var easing = smooth.defaultEasing;

	var cancelEvents = __webpack_require__(10);

	/*
	 * Sets the cancel trigger
	 */

	cancelEvents.register(function() {
	  __cancel = true;
	});

	/*
	 * Wraps window properties to allow server side rendering
	 */
	var currentWindowProperties = function() {
	  if (typeof window !== 'undefined') {
	    return window.requestAnimationFrame || window.webkitRequestAnimationFrame;
	  }
	};

	/*
	 * Helper function to never extend 60fps on the webpage.
	 */
	var requestAnimationFrame = (function () {
	  return  currentWindowProperties() ||
	          function (callback, element, delay) {
	              window.setTimeout(callback, delay || (1000/60));
	          };
	})();


	var __currentPositionY  = 0;
	var __startPositionY    = 0;
	var __targetPositionY   = 0;
	var __progress          = 0;
	var __duration          = 0;
	var __cancel            = false;

	var __start;
	var __deltaTop;
	var __percent;

	var currentPositionY = function() {
	  var supportPageOffset = window.pageXOffset !== undefined;
	  var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
	  return supportPageOffset ? window.pageYOffset : isCSS1Compat ?
	         document.documentElement.scrollTop : document.body.scrollTop;
	};

	var animateTopScroll = function(timestamp) {
	  // Cancel on specific events
	  if(__cancel) { return };


	  __deltaTop = Math.round(__targetPositionY - __startPositionY);

	  if (__start === null) {
	    __start = timestamp;
	  }

	  __progress = timestamp - __start;

	  __percent = (__progress >= __duration ? 1 : easing(__progress/__duration));

	  __currentPositionY = __startPositionY + Math.ceil(__deltaTop * __percent);

	  window.scrollTo(0, __currentPositionY);

	  if(__percent < 1) {
	    requestAnimationFrame(animateTopScroll);
	  }

	};

	var startAnimateTopScroll = function(y, options) {
	  __start           = null;
	  __cancel          = false;
	  __startPositionY  = currentPositionY();
	  __targetPositionY = y + __startPositionY;
	  __duration        = options.duration || 1000;

	  requestAnimationFrame(animateTopScroll);
	};

	module.exports = {
	  animateTopScroll: startAnimateTopScroll
	};


/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = {
	 /*
	  * https://github.com/oblador/angular-scroll (duScrollDefaultEasing)
	  */
	  defaultEasing : function (x) {
	    'use strict';

	    if(x < 0.5) {
	      return Math.pow(x*2, 2)/2;
	    }
	    return 1-Math.pow((1-x)*2, 2)/2;
	  }
	}

/***/ },
/* 10 */
/***/ function(module, exports) {

	var events = ['mousedown', 'mousewheel', 'touchmove', 'keydown']

	module.exports = {
		register : function(cancelEvent) {
			if (typeof document === 'undefined') {
				return;
			}

			for(var i = 0; i < events.length; i = i + 1) {
				document.addEventListener(events[i], cancelEvent);
			}
		}
	};


/***/ },
/* 11 */
/***/ function(module, exports) {

	var scrollSpy = {
	  
	  spyCallbacks: [],
	  spySetState: [],

	  mount: function () {
	    if (typeof document !== 'undefined') {
	      document.addEventListener('scroll', this.scrollHandler.bind(this));
	    }
	  },
	  currentPositionY: function () {
	    var supportPageOffset = window.pageXOffset !== undefined;
	    var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
	    return supportPageOffset ? window.pageYOffset : isCSS1Compat ?
	            document.documentElement.scrollTop : document.body.scrollTop;
	  },

	  scrollHandler: function () {
	    for(var i = 0; i < this.spyCallbacks.length; i++) {
	      this.spyCallbacks[i](this.currentPositionY());
	    }
	  },

	  addStateHandler: function(handler){
	    this.spySetState.push(handler);
	  },

	  addSpyHandler: function(handler){
	    this.spyCallbacks.push(handler);
	  },

	  updateStates: function(){
	    var length = this.spySetState.length;

	    for(var i = 0; i < length; i++) {
	      this.spySetState[i]();
	    }
	  },
	  unmount: function () { 
	    this.spyCallbacks = [];
	    this.spySetState = [];

	    document.removeEventListener('scroll', this.scrollHandler);
	  }
	}

	module.exports = scrollSpy;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var animateScroll = __webpack_require__(8);

	var __mapped = {};
	var __activeLink;

	module.exports = {

	  unmount: function() {
	    __mapped = [];
	  },

	  register: function(name, element){
	    __mapped[name] = element;
	  },

	  unregister: function(name) {
	    delete __mapped[name];
	  },

	  get: function(name) {
	    return __mapped[name];
	  },

	  setActiveLink: function(link) {
	    __activeLink = link;
	  },

	  getActiveLink: function() {
	    return __activeLink;
	  },

	  scrollTo: function(to, animate, duration, offset) {

	     /*
	     * get the mapped DOM element
	     */

	      var target = __mapped[to];

	      if(!target) {
	        throw new Error("target Element not found");
	      }

	      var coordinates = target.getBoundingClientRect();

	      /*
	       * if animate is not provided just scroll into the view
	       */

	      if(!animate) {
	        var bodyRect = document.body.getBoundingClientRect();
	        var scrollOffset = coordinates.top - bodyRect.top;
	        window.scrollTo(0, scrollOffset + (offset || 0));
	        return;
	      }

	      /*
	       * Animate scrolling
	       */

	      var options = {
	        duration : duration
	      };

	      animateScroll.animateTopScroll(coordinates.top + (offset || 0), options);

	  }
	};



/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(4);
	var assign = __webpack_require__(5);
	var Helpers = __webpack_require__(6);

	var Button = React.createClass({
	  mixins: [Helpers.Scroll],
	  getInitialState : function() {
	    return { active : false};
	  },
	  render: function () {
	    var props = assign({}, this.props, {
	      onClick: this.onClick
	    });

	    return React.DOM.input(props, this.props.children);
	  }
	});

	module.exports = Button;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(4);
	var assign = __webpack_require__(5);
	var Helpers = __webpack_require__(6);

	var Element = React.createClass({
	  mixins: [Helpers.Element],
	  render: function () {
	    /*
	     * Not sure if should allow more then one property?
	     */

	    var className = this.props.className || "";
	    
	    var props = assign({}, this.props, {
	      className: this.props.className
	    });

	    return React.DOM.div(props, this.props.children);
	  }
	});

	module.exports = Element;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(16);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _Button = __webpack_require__(17);

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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/

	(function () {
		'use strict';

		function classNames () {

			var classes = '';

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if ('string' === argType || 'number' === argType) {
					classes += ' ' + arg;

				} else if (Array.isArray(arg)) {
					classes += ' ' + classNames.apply(null, arg);

				} else if ('object' === argType) {
					for (var key in arg) {
						if (arg.hasOwnProperty(key) && arg[key]) {
							classes += ' ' + key;
						}
					}
				}
			}

			return classes.substr(1);
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true){
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}

	}());


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _classnames = __webpack_require__(16);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _reactScroll = __webpack_require__(2);

	var _react = __webpack_require__(4);

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
	    props.onClick(props.index + 1);
	  };

	  return _react2['default'].createElement(
	    _reactScroll.Link,
	    { className: 'viewport-slider-button',
	      duration: 500,
	      onClick: handleClick,
	      smooth: true,
	      to: 'slide-' + (props.index + 1),
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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _reactScroll = __webpack_require__(2);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _Bullet = __webpack_require__(19);

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
	      return _react2['default'].createElement(_Bullet2['default'], { key: i,
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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _reactScroll = __webpack_require__(2);

	var _react = __webpack_require__(4);

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

	Bullet.propTypes = {
	  index: _react.PropTypes.number.isRequired,
	  onClick: _react.PropTypes.func
	};

	exports['default'] = Bullet;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;