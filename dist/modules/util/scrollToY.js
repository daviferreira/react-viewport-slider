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