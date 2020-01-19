(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Marquee = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

module.exports =
/*#__PURE__*/
function () {
  function Marquee(props) {
    _classCallCheck(this, Marquee);

    this.validate(props);
    this.props = props;
    this.setElement();
    this.setChild();
  }

  _createClass(Marquee, [{
    key: "setElement",
    value: function setElement() {
      this.element = document.querySelector(this.props.element); // this.element.style.overflow = 'hidden'
    }
  }, {
    key: "validate",
    value: function validate(props) {
      [{
        name: 'element',
        type: ''
      }, {
        name: 'velocity',
        type: 0
      }].forEach(function (valid) {
        if (!props[valid.name] || _typeof(props[valid.name]) !== _typeof(valid.type)) {
          throw new TypeError("\"".concat(valid.name, "\" property is mandatory and must be a type of \"").concat(_typeof(valid.type), "\""));
        }
      });
    }
  }, {
    key: "setChild",
    value: function setChild() {
      this.child = this.element.firstElementChild; // this.child.style.display = 'inline-flex'
      // this.child.style.position = 'relative'

      this.child.style.right = '-' + this.element.offsetWidth + 'px';
    }
  }, {
    key: "run",
    value: function run() {
      // console.log('run? ' + (new Date()).getTime())
      var rightPosition = parseFloat(this.child.style.right);
      rightPosition += this.props.velocity;
      var parentOffsetWidth = this.element.offsetWidth;
      var childOffsetWidth = this.child.offsetWidth;

      if (rightPosition > childOffsetWidth) {
        rightPosition = -parentOffsetWidth;
      }

      if (null === this.element.querySelector(':hover')) {
        this.child.style.right = rightPosition + 'px';
      }

      requestAnimationFrame(this.run.bind(this));
    }
  }]);

  return Marquee;
}();

},{}]},{},[1])(1)
});
