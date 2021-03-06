/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const DOMNodeCollection = __webpack_require__(1);

window.$l = (arg) => {
  let arrayHTMLArg = [];

  if (arg instanceof HTMLElement ) {
    arrayHTMLArg = arg;
  } else {
    arrayHTMLArg = document.querySelectorAll(arg);
  }

  return new DOMNodeCollection(
    Array.from(
      arrayHTMLArg
    )
  );

};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

class DOMNodeCollection {
  constructor (nodes) {
    this.nodes = nodes;
  }

  html (string) {
    if (!string) {
      return this.nodes[0].innerHTML;
    } else {
      this.nodes.forEach( node => {
        node.innerHTML = string;
      });

      return this.nodes;
    }
  }

  empty () {
    this.nodes.forEach( node => {
      node.innerHTML = "";
    });

    return this.nodes;
  }

  // TODO: Make sure this works with jQuery-Lite objects
  // TODO: What should this return?
  append (addendum) {
    // if (addendum instanceof DOMNodeCollection) {
    //   addendum = addendum.html();
    // }

    this.nodes.forEach( node => {
      node.innerHTML += addendum;
    });
  }

  children () {
    const childObjects = [];

    this.nodes.forEach( node => {
      childObjects.push(new DOMNodeCollection(node));
    });

    return childObjects;
  }
}

module.exports = DOMNodeCollection;


/***/ })
/******/ ]);