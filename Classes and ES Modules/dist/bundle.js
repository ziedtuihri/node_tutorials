/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/modules.js
var userCard = {
  name: 'Medhat Dawoud',
  address: 'Amsterdam'
};
var address = userCard.address;
function getUserName() {
  return userCard.name;
}
/* harmony default export */ var modules = (userCard);
// CONCATENATED MODULE: ./src/classes.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Human =
/*#__PURE__*/
function () {
  function Human() {
    _classCallCheck(this, Human);

    document.write('Human Constructor');
    console.log('Human Constructor');
    this.name = '';
    this.job = '';
    this.languages = 'Arabic, English';
  }

  _createClass(Human, [{
    key: "getAge",
    value: function getAge() {
      return 28;
    }
  }]);

  return Human;
}();

var Person =
/*#__PURE__*/
function (_Human) {
  _inherits(Person, _Human);

  function Person() {
    var _this;

    _classCallCheck(this, Person);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Person).call(this));
    document.write('Person Constructor');
    console.log('Person Constructor');
    _this.name = 'John Doe';
    _this.job = 'Sofware Engineer';
    return _this;
  }

  _createClass(Person, [{
    key: "getJob",
    value: function getJob() {
      return this.job;
    }
  }, {
    key: "getName",
    get: function get() {
      return this.name;
    }
  }, {
    key: "setName",
    set: function set(personName) {
      this.name = personName;
    }
  }], [{
    key: "getHeight",
    value: function getHeight() {
      return 173;
    }
  }, {
    key: "getWeight",
    value: function getWeight() {
      return 83;
    }
  }]);

  return Person;
}(Human);


// CONCATENATED MODULE: ./src/Point.js
function Point_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Point_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Point_createClass(Constructor, protoProps, staticProps) { if (protoProps) Point_defineProperties(Constructor.prototype, protoProps); if (staticProps) Point_defineProperties(Constructor, staticProps); return Constructor; }

var Point =
/*#__PURE__*/
function () {
  function Point(x, y) {
    Point_classCallCheck(this, Point);

    this.x = x;
    this.y = y;
  } // show = () => '${this.x} and ${htis.y}';


  Point_createClass(Point, null, [{
    key: "toString",
    value: function toString() {
      return '${this.x}, ${htis.y}', this.x;
    }
  }, {
    key: "distance",
    value: function distance(a, b) {
      var dx = a.x - b.x;
      var dy = a.y - b.y;
      return Math.hypot(dx, dy);
    }
  }]);

  return Point;
}();


// CONCATENATED MODULE: ./src/index.js
// named exports
// import {getUserName, address} from './modules';
// default exports
 // all together
// import * as all from './modules';

console.log("hello node", address, getUserName); // --------------------------------



var p1 = new Point(5, 6);
console.log('affiche ', p1.toString()); // console.log(p.languages)
// // ----------------------------------
// p.setName = 'Medhat Dawoud';
// document.write('Name     =>', p.getName, '<br></br>');
// document.write('Job      =>', p.getJob());
// document.write('Age      =>', p.getAge());
// document.write('Speaking =>', p.languages);
// static
// document.write('weight   =>', Person.getWeight(), 'kg');
// document.write('height   =>', Person.getHeight(), 'cm');
// console.log('Name     =>', p.getName);
// console.log('Job      =>', p.getJob());
// console.log('Age      =>', p.getAge());
// console.log('Speaking =>', p.languages);
// static
// console.log('weight   =>', Person.getWeight(), 'kg');
// console.log('height   =>', Person.getHeight(), 'cm');

/***/ })
/******/ ]);