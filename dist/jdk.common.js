module.exports =
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "3e72");
/******/ })
/************************************************************************/
/******/ ({

/***/ "02f2":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("6077");
var TAG = __webpack_require__("1277")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "0614":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "0cc1":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "0e03":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export clipboard */
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

function select(element) {
    var selectedText;

    if (element.nodeName === 'SELECT') {
        element.focus();

        selectedText = element.value;
    }
    else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
        var isReadOnly = element.hasAttribute('readonly');

        if (!isReadOnly) {
            element.setAttribute('readonly', '');
        }

        element.select();
        element.setSelectionRange(0, element.value.length);

        if (!isReadOnly) {
            element.removeAttribute('readonly');
        }

        selectedText = element.value;
    }
    else {
        if (element.hasAttribute('contenteditable')) {
            element.focus();
        }

        var selection = window.getSelection();
        var range = document.createRange();

        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);

        selectedText = selection.toString();
    }

    return selectedText;
}

var select_1 = select;

var clipboardAction = createCommonjsModule(function (module, exports) {
(function (global, factory) {
    if (false) {} else {
        factory(module, select_1);
    }
})(commonjsGlobal, function (module, _select) {

    var _select2 = _interopRequireDefault(_select);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    var ClipboardAction = function () {
        /**
         * @param {Object} options
         */
        function ClipboardAction(options) {
            _classCallCheck(this, ClipboardAction);

            this.resolveOptions(options);
            this.initSelection();
        }

        /**
         * Defines base properties passed from constructor.
         * @param {Object} options
         */


        _createClass(ClipboardAction, [{
            key: 'resolveOptions',
            value: function resolveOptions() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                this.action = options.action;
                this.container = options.container;
                this.emitter = options.emitter;
                this.target = options.target;
                this.text = options.text;
                this.trigger = options.trigger;

                this.selectedText = '';
            }
        }, {
            key: 'initSelection',
            value: function initSelection() {
                if (this.text) {
                    this.selectFake();
                } else if (this.target) {
                    this.selectTarget();
                }
            }
        }, {
            key: 'selectFake',
            value: function selectFake() {
                var _this = this;

                var isRTL = document.documentElement.getAttribute('dir') == 'rtl';

                this.removeFake();

                this.fakeHandlerCallback = function () {
                    return _this.removeFake();
                };
                this.fakeHandler = this.container.addEventListener('click', this.fakeHandlerCallback) || true;

                this.fakeElem = document.createElement('textarea');
                // Prevent zooming on iOS
                this.fakeElem.style.fontSize = '12pt';
                // Reset box model
                this.fakeElem.style.border = '0';
                this.fakeElem.style.padding = '0';
                this.fakeElem.style.margin = '0';
                // Move element out of screen horizontally
                this.fakeElem.style.position = 'absolute';
                this.fakeElem.style[isRTL ? 'right' : 'left'] = '-9999px';
                // Move element to the same position vertically
                var yPosition = window.pageYOffset || document.documentElement.scrollTop;
                this.fakeElem.style.top = yPosition + 'px';

                this.fakeElem.setAttribute('readonly', '');
                this.fakeElem.value = this.text;

                this.container.appendChild(this.fakeElem);

                this.selectedText = (0, _select2.default)(this.fakeElem);
                this.copyText();
            }
        }, {
            key: 'removeFake',
            value: function removeFake() {
                if (this.fakeHandler) {
                    this.container.removeEventListener('click', this.fakeHandlerCallback);
                    this.fakeHandler = null;
                    this.fakeHandlerCallback = null;
                }

                if (this.fakeElem) {
                    this.container.removeChild(this.fakeElem);
                    this.fakeElem = null;
                }
            }
        }, {
            key: 'selectTarget',
            value: function selectTarget() {
                this.selectedText = (0, _select2.default)(this.target);
                this.copyText();
            }
        }, {
            key: 'copyText',
            value: function copyText() {
                var succeeded = void 0;

                try {
                    succeeded = document.execCommand(this.action);
                } catch (err) {
                    succeeded = false;
                }

                this.handleResult(succeeded);
            }
        }, {
            key: 'handleResult',
            value: function handleResult(succeeded) {
                this.emitter.emit(succeeded ? 'success' : 'error', {
                    action: this.action,
                    text: this.selectedText,
                    trigger: this.trigger,
                    clearSelection: this.clearSelection.bind(this)
                });
            }
        }, {
            key: 'clearSelection',
            value: function clearSelection() {
                if (this.trigger) {
                    this.trigger.focus();
                }

                window.getSelection().removeAllRanges();
            }
        }, {
            key: 'destroy',
            value: function destroy() {
                this.removeFake();
            }
        }, {
            key: 'action',
            set: function set() {
                var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'copy';

                this._action = action;

                if (this._action !== 'copy' && this._action !== 'cut') {
                    throw new Error('Invalid "action" value, use either "copy" or "cut"');
                }
            },
            get: function get() {
                return this._action;
            }
        }, {
            key: 'target',
            set: function set(target) {
                if (target !== undefined) {
                    if (target && (typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object' && target.nodeType === 1) {
                        if (this.action === 'copy' && target.hasAttribute('disabled')) {
                            throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                        }

                        if (this.action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) {
                            throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                        }

                        this._target = target;
                    } else {
                        throw new Error('Invalid "target" value, use a valid Element');
                    }
                }
            },
            get: function get() {
                return this._target;
            }
        }]);

        return ClipboardAction;
    }();

    module.exports = ClipboardAction;
});
});

unwrapExports(clipboardAction);

function E () {
  // Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
  on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    }
    listener._ = callback;
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

var tinyEmitter = E;

var is = createCommonjsModule(function (module, exports) {
/**
 * Check if argument is a HTML element.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.node = function(value) {
    return value !== undefined
        && value instanceof HTMLElement
        && value.nodeType === 1;
};

/**
 * Check if argument is a list of HTML elements.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.nodeList = function(value) {
    var type = Object.prototype.toString.call(value);

    return value !== undefined
        && (type === '[object NodeList]' || type === '[object HTMLCollection]')
        && ('length' in value)
        && (value.length === 0 || exports.node(value[0]));
};

/**
 * Check if argument is a string.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.string = function(value) {
    return typeof value === 'string'
        || value instanceof String;
};

/**
 * Check if argument is a function.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.fn = function(value) {
    var type = Object.prototype.toString.call(value);

    return type === '[object Function]';
};
});
var is_1 = is.node;
var is_2 = is.nodeList;
var is_3 = is.string;
var is_4 = is.fn;

var DOCUMENT_NODE_TYPE = 9;

/**
 * A polyfill for Element.matches()
 */
if (typeof Element !== 'undefined' && !Element.prototype.matches) {
    var proto = Element.prototype;

    proto.matches = proto.matchesSelector ||
                    proto.mozMatchesSelector ||
                    proto.msMatchesSelector ||
                    proto.oMatchesSelector ||
                    proto.webkitMatchesSelector;
}

/**
 * Finds the closest parent that matches a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @return {Function}
 */
function closest (element, selector) {
    while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
        if (typeof element.matches === 'function' &&
            element.matches(selector)) {
          return element;
        }
        element = element.parentNode;
    }
}

var closest_1 = closest;

/**
 * Delegates event to a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function _delegate(element, selector, type, callback, useCapture) {
    var listenerFn = listener.apply(this, arguments);

    element.addEventListener(type, listenerFn, useCapture);

    return {
        destroy: function() {
            element.removeEventListener(type, listenerFn, useCapture);
        }
    }
}

/**
 * Delegates event to a selector.
 *
 * @param {Element|String|Array} [elements]
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function delegate(elements, selector, type, callback, useCapture) {
    // Handle the regular Element usage
    if (typeof elements.addEventListener === 'function') {
        return _delegate.apply(null, arguments);
    }

    // Handle Element-less usage, it defaults to global delegation
    if (typeof type === 'function') {
        // Use `document` as the first parameter, then apply arguments
        // This is a short way to .unshift `arguments` without running into deoptimizations
        return _delegate.bind(null, document).apply(null, arguments);
    }

    // Handle Selector-based usage
    if (typeof elements === 'string') {
        elements = document.querySelectorAll(elements);
    }

    // Handle Array-like based usage
    return Array.prototype.map.call(elements, function (element) {
        return _delegate(element, selector, type, callback, useCapture);
    });
}

/**
 * Finds closest match and invokes callback.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Function}
 */
function listener(element, selector, type, callback) {
    return function(e) {
        e.delegateTarget = closest_1(e.target, selector);

        if (e.delegateTarget) {
            callback.call(element, e);
        }
    }
}

var delegate_1 = delegate;

/**
 * Validates all params and calls the right
 * listener function based on its target type.
 *
 * @param {String|HTMLElement|HTMLCollection|NodeList} target
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listen(target, type, callback) {
    if (!target && !type && !callback) {
        throw new Error('Missing required arguments');
    }

    if (!is.string(type)) {
        throw new TypeError('Second argument must be a String');
    }

    if (!is.fn(callback)) {
        throw new TypeError('Third argument must be a Function');
    }

    if (is.node(target)) {
        return listenNode(target, type, callback);
    }
    else if (is.nodeList(target)) {
        return listenNodeList(target, type, callback);
    }
    else if (is.string(target)) {
        return listenSelector(target, type, callback);
    }
    else {
        throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
    }
}

/**
 * Adds an event listener to a HTML element
 * and returns a remove listener function.
 *
 * @param {HTMLElement} node
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNode(node, type, callback) {
    node.addEventListener(type, callback);

    return {
        destroy: function() {
            node.removeEventListener(type, callback);
        }
    }
}

/**
 * Add an event listener to a list of HTML elements
 * and returns a remove listener function.
 *
 * @param {NodeList|HTMLCollection} nodeList
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNodeList(nodeList, type, callback) {
    Array.prototype.forEach.call(nodeList, function(node) {
        node.addEventListener(type, callback);
    });

    return {
        destroy: function() {
            Array.prototype.forEach.call(nodeList, function(node) {
                node.removeEventListener(type, callback);
            });
        }
    }
}

/**
 * Add an event listener to a selector
 * and returns a remove listener function.
 *
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenSelector(selector, type, callback) {
    return delegate_1(document.body, selector, type, callback);
}

var listen_1 = listen;

var clipboard = createCommonjsModule(function (module, exports) {
(function (global, factory) {
    if (false) {} else {
        factory(module, clipboardAction, tinyEmitter, listen_1);
    }
})(commonjsGlobal, function (module, _clipboardAction, _tinyEmitter, _goodListener) {

    var _clipboardAction2 = _interopRequireDefault(_clipboardAction);

    var _tinyEmitter2 = _interopRequireDefault(_tinyEmitter);

    var _goodListener2 = _interopRequireDefault(_goodListener);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var Clipboard = function (_Emitter) {
        _inherits(Clipboard, _Emitter);

        /**
         * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
         * @param {Object} options
         */
        function Clipboard(trigger, options) {
            _classCallCheck(this, Clipboard);

            var _this = _possibleConstructorReturn(this, (Clipboard.__proto__ || Object.getPrototypeOf(Clipboard)).call(this));

            _this.resolveOptions(options);
            _this.listenClick(trigger);
            return _this;
        }

        /**
         * Defines if attributes would be resolved using internal setter functions
         * or custom functions that were passed in the constructor.
         * @param {Object} options
         */


        _createClass(Clipboard, [{
            key: 'resolveOptions',
            value: function resolveOptions() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
                this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
                this.text = typeof options.text === 'function' ? options.text : this.defaultText;
                this.container = _typeof(options.container) === 'object' ? options.container : document.body;
            }
        }, {
            key: 'listenClick',
            value: function listenClick(trigger) {
                var _this2 = this;

                this.listener = (0, _goodListener2.default)(trigger, 'click', function (e) {
                    return _this2.onClick(e);
                });
            }
        }, {
            key: 'onClick',
            value: function onClick(e) {
                var trigger = e.delegateTarget || e.currentTarget;

                if (this.clipboardAction) {
                    this.clipboardAction = null;
                }

                this.clipboardAction = new _clipboardAction2.default({
                    action: this.action(trigger),
                    target: this.target(trigger),
                    text: this.text(trigger),
                    container: this.container,
                    trigger: trigger,
                    emitter: this
                });
            }
        }, {
            key: 'defaultAction',
            value: function defaultAction(trigger) {
                return getAttributeValue('action', trigger);
            }
        }, {
            key: 'defaultTarget',
            value: function defaultTarget(trigger) {
                var selector = getAttributeValue('target', trigger);

                if (selector) {
                    return document.querySelector(selector);
                }
            }
        }, {
            key: 'defaultText',
            value: function defaultText(trigger) {
                return getAttributeValue('text', trigger);
            }
        }, {
            key: 'destroy',
            value: function destroy() {
                this.listener.destroy();

                if (this.clipboardAction) {
                    this.clipboardAction.destroy();
                    this.clipboardAction = null;
                }
            }
        }], [{
            key: 'isSupported',
            value: function isSupported() {
                var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['copy', 'cut'];

                var actions = typeof action === 'string' ? [action] : action;
                var support = !!document.queryCommandSupported;

                actions.forEach(function (action) {
                    support = support && !!document.queryCommandSupported(action);
                });

                return support;
            }
        }]);

        return Clipboard;
    }(_tinyEmitter2.default);

    /**
     * Helper function to retrieve attribute value.
     * @param {String} suffix
     * @param {Element} element
     */
    function getAttributeValue(suffix, element) {
        var attribute = 'data-clipboard-' + suffix;

        if (!element.hasAttribute(attribute)) {
            return;
        }

        return element.getAttribute(attribute);
    }

    module.exports = Clipboard;
});
});

var Clipboard = unwrapExports(clipboard);

if (!Clipboard) {
  throw new Error('[vue-clipboards] cannot locate Clipboard.');
}

function isDom(obj) {
  return _typeof(window.HTMLElement) === 'object' ? obj instanceof window.HTMLElement : obj && _typeof(obj) === 'object' && obj.nodeType === 1 && typeof obj.nodeName === 'string';
}

function doubleClickHandler(e) {
  var target = e.target;

  if (document.createRange) {
    var rng = document.createRange();
    var sel = window.getSelection();
    rng.selectNode(target);
    sel.removeAllRanges();
    sel.addRange(rng);
  } else {
    var _rng = document.body.createTextRange();

    _rng.moveToElementText(target);

    _rng.select();
  }
}

var clipboard$1 = {
  bind: function bind(el, _ref, vnode) {
    return new Promise(function ($return, $error) {
      var text, modifiers, option, $parent, componentOptions, data, listeners, on, events, withNativeSelection;
      text = _ref.value, modifiers = _ref.modifiers;
      option = {};
      $parent = null;

      if (text && typeof text === 'function') {
        return Promise.resolve(text()).then(function ($await_2) {
          try {
            text = $await_2;
            return $If_1.call(this);
          } catch ($boundEx) {
            return $error($boundEx);
          }
        }.bind(this), $error);
      }

      function $If_1() {
        if (/(string|number)/.test(_typeof(text))) {
          option.text = function () {
            return "".concat(text);
          };
        } else {
          return $error(new Error('[vue-clipboards] Invalid value. Please use a valid value.'));
        }

        if (vnode.data.attrs && vnode.data.attrs.model) {
          $parent = isDom(vnode.data.attrs.model) ? vnode.data.attrs.model : document.querySelector(vnode.data.attrs.model);
        } // 修复按钮脱离文档流时，clipboard监听失败问题


        if (vnode.elm.offsetParent) {
          option.container = vnode.elm.offsetParent;
        } else if (isDom($parent)) {
          option.container = $parent;
        } else {
          // if root element should use document.body
          option.container = el.parentElement || document.body;
        }

        vnode.elm.$clipboards = new Clipboard(el, option);
        componentOptions = vnode.componentOptions, data = vnode.data;
        listeners = componentOptions ? componentOptions.listeners : null;
        on = data ? data.on : null;
        events = listeners && listeners || on && on;

        if (events && _typeof(events) === 'object' && Object.keys(events).length) {
          // fixed with Vue 2.2.x, event object `fn` rename to `fns`
          Object.keys(events).map(function (cb) {
            return vnode.elm.$clipboards.on(cb, events[cb].fn || events[cb].fns);
          });
        } // add native user selection for dblclick


        withNativeSelection = modifiers.nselect || false;

        if (withNativeSelection) {
          vnode.elm.addEventListener('dblclick', doubleClickHandler);
        }

        return $return(vnode.elm.$clipboards);
      }

      return $If_1.call(this);
    });
  },
  unbind: function unbind(vnode) {
    if (vnode.elm && vnode.elm.$clipboards && vnode.elm.$clipboards.destroy) {
      vnode.elm.$clipboards.destroy();
      vnode.elm.removeEventListener('dblclick', doubleClickHandler);
      delete vnode.elm.$clipboards;
    }
  },
  update: function update(el, binding, vnode) {
    binding.def.unbind(vnode);
    vnode.elm.removeEventListener('dblclick', doubleClickHandler);
    binding.def.bind(el, binding, vnode);
  }
};
function vueClipboards (Vue) {
  Vue.directive('clipboard', clipboard$1);
}

/* harmony default export */ __webpack_exports__["a"] = (vueClipboards);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("7bc3")))

/***/ }),

/***/ "1277":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("f341")('wks');
var uid = __webpack_require__("4d2c");
var Symbol = __webpack_require__("3f8b").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "17cb":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("3f8b").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "1cd7":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("3f8b");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "1e01":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("da0b");
var setPrototypeOf = __webpack_require__("ae6e").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "1f9e":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("6117");
var toLength = __webpack_require__("8941");
var toAbsoluteIndex = __webpack_require__("c3a9");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "21cb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__("8451");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "22ae":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("e85e");
var call = __webpack_require__("dd80");
var isArrayIter = __webpack_require__("67c1");
var anObject = __webpack_require__("8cac");
var toLength = __webpack_require__("8941");
var getIterFn = __webpack_require__("5fff");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "2498":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("3f8b");
var core = __webpack_require__("da27");
var hide = __webpack_require__("b8ea");
var redefine = __webpack_require__("a6d5");
var ctx = __webpack_require__("e85e");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "25ae":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("f9a5") && !__webpack_require__("0cc1")(function () {
  return Object.defineProperty(__webpack_require__("6618")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "2ab1":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("da0b");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "2dbc":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("e85e");
var invoke = __webpack_require__("2f1e");
var html = __webpack_require__("17cb");
var cel = __webpack_require__("6618");
var global = __webpack_require__("3f8b");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__("6077")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "2e5b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "2f1e":
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "3038":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "3a06":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "3d87":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("d3d8").f;
var has = __webpack_require__("549d");
var TAG = __webpack_require__("1277")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "3e72":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@3.12.0@@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("e67d")
  }

  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.10@core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("4634");

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.10@core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7cfd");

// CONCATENATED MODULE: ./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0ab3d9f9-vue-loader-template"}!./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./src/components/button/button.vue?vue&type=template&id=c552bf42&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",staticClass:"jdk-button",class:[
      {
        'jdk-button--disabled': _vm.disabled,
        'jdk-button--shadow': _vm.shadow,
        'jdk-button--plain': _vm.plain,
        'jdk-button--circle': _vm.circle
      },
      _vm.size ? 'jdk-button--' + _vm.size : '',
      _vm.type ? 'jdk-button--' + _vm.type : '',
      _vm.width ? 'jdk-button--' + _vm.width : ''
    ],attrs:{"href":_vm.href,"to":_vm.to},on:{"click":_vm.handleClick}},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/button/button.vue?vue&type=template&id=c552bf42&scoped=true&

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.10@core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("8f42");

// CONCATENATED MODULE: ./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./src/components/button/button.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var buttonvue_type_script_lang_js_ = ({
  name: 'jdk-button',
  props: {
    type: {
      type: String,
      default: 'primary' // success primary 后续info warning danger

    },
    size: {
      type: String,
      default: 'medium' // large medium small

    },
    width: {
      type: [String, Number],
      default: '' // 按钮尺寸如果有

    },
    plain: {
      type: Boolean,
      default: false // 是否是朴素按钮

    },
    disabled: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    shadow: {
      type: Boolean,
      default: false
    },
    href: {
      type: String,
      default: ''
    },
    to: {
      // 点击后跳转的目标路由对象，同 vue-router 的 to 属性
      type: [String, Object],
      default: null
    }
  },
  data: function data() {
    return {};
  },
  computed: {
    tag: function tag() {
      if (this.to) {
        return 'router-link';
      } else if (this.href) {
        return 'a';
      } else {
        return 'button';
      }
    }
  },
  mounted: function mounted() {},
  methods: {
    handleClick: function handleClick(evt) {
      this.$emit('click', evt);
    }
  }
});
// CONCATENATED MODULE: ./src/components/button/button.vue?vue&type=script&lang=js&
 /* harmony default export */ var button_buttonvue_type_script_lang_js_ = (buttonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/button/button.vue?vue&type=style&index=0&id=c552bf42&scoped=true&lang=scss&
var buttonvue_type_style_index_0_id_c552bf42_scoped_true_lang_scss_ = __webpack_require__("aaa0");

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.7.1@vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/button/button.vue






/* normalize component */

var component = normalizeComponent(
  button_buttonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "c552bf42",
  null
  
)

/* harmony default export */ var button_button = (component.exports);
// CONCATENATED MODULE: ./src/components/button/index.js



button_button.install = function (Vue) {
  Vue.component(button_button.name, button_button);
};

/* harmony default export */ var components_button = (button_button);
// CONCATENATED MODULE: ./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0ab3d9f9-vue-loader-template"}!./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./src/components/imagePreviewer/imagePreviewer.vue?vue&type=template&id=00c929da&scoped=true&
var imagePreviewervue_type_template_id_00c929da_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShow),expression:"isShow"}],staticClass:"image-previewer"},[_c('i',{staticClass:"iconfont iconcomm_icn_close",on:{"click":_vm.close}}),(_vm.imagePreview.images.length > 1)?_c('div',{staticClass:"image-previewer__next    flex-center",on:{"click":function($event){return _vm.turn('prev')}}},[_c('i',{staticClass:"iconfont iconcomm_icn_right_arrows"})]):_vm._e(),(_vm.imagePreview.images.length > 1)?_c('div',{staticClass:"image-previewer__prev flex-center",on:{"click":function($event){return _vm.turn('next')}}},[_c('i',{staticClass:"iconfont iconcomm_icn_right_arrows rotate-180"})]):_vm._e(),_c('div',{staticClass:"image-previewer__wrapper"},[(_vm.imagePreview.images[_vm.imagePreview.index])?_c('img',{ref:"image",staticClass:"image-previewer__view",attrs:{"draggable":"false","src":_vm.imagePreview.images[_vm.imagePreview.index]},on:{"mousedown":_vm.imageMouseStart,"mousemove":_vm.imageMouseMove,"mouseup":_vm.imageMouseEnd}}):_vm._e()]),_c('div',{staticClass:"image-previewer__operation flexh flex-around"},[_c('i',{staticClass:"iconfont iconcomm_icn_reduce_disabled",on:{"click":_vm.reduce}}),_c('i',{staticClass:"iconfont iconcomm_icn_reduce_normal",on:{"click":_vm.amplify}}),_c('i',{staticClass:"iconfont iconcomm_icn_retake",on:{"click":_vm.revert}}),_c('i',{staticClass:"iconfont iconcomm_icn_refresh rotate-180",on:{"click":_vm.rotateLeft}}),_c('i',{staticClass:"iconfont iconcomm_icn_refresh",on:{"click":_vm.rotateRight}})])])}
var imagePreviewervue_type_template_id_00c929da_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/imagePreviewer/imagePreviewer.vue?vue&type=template&id=00c929da&scoped=true&

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.10@core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__("e783");

// CONCATENATED MODULE: ./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./src/components/imagePreviewer/imagePreviewer.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var imagePreviewervue_type_script_lang_js_ = ({
  name: 'image-previewer',
  props: {
    images: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    startIndex: {
      type: Number,
      default: 1
    }
  },
  data: function data() {
    return {
      isShow: false,
      mouseFlag: false,
      startX: 0,
      startY: 0,
      offsetX: 0,
      offsetY: 0,
      imagePreview: {
        index: 0,
        // 当前下标
        images: [],
        onClose: null,
        // 关闭回调
        rotateDegree: 0,
        // 旋转角度
        scaleNum: 1 // 缩放大倍数

      }
    };
  },
  mounted: function mounted() {
    if (this.images.length) {
      this.show({
        images: this.images,
        index: this.startIndex
      });
    }
  },
  computed: {},
  methods: {
    show: function show(params) {
      if (params instanceof Array) {
        params = {
          images: params
        };
      }

      params.index = params.startIndex || 0;
      this.imagePreview = Object.assign(this.imagePreview, {
        index: 0,
        rotateDegree: 0,
        scaleNum: 1,
        images: [],
        onClose: null
      }, params);
      document.addEventListener('mouseup', this.imageMouseEnd, false);
      document.addEventListener('mousemove', this.imageMouseMove, false);
      document.addEventListener('DOMMouseScroll', this.mouseScroll, false);
      window.onmousewheel = document.onmousewheel = this.mouseScroll;
      document.body.style.overflow = 'hidden';
      this.isShow = true;
    },
    close: function close() {
      document.body.style.overflow = '';
      this.$refs.image.style.transform = '';
      window.onmousewheel = document.onmousewheel = null;
      document.removeEventListener('DOMMouseScroll', this.mouseScroll, false);
      document.removeEventListener('mousemove', this.imageMouseMove, false);
      this.isShow = false;
      this.imagePreview.onClose && this.imagePreview.onClose(this.imagePreview.index);
      this.$emit('close');
    },
    turn: function turn(direct) {
      var _this = this;

      this.$refs.image.style.transition = '';
      this.$refs.image.style.transform = '';

      if (direct === 'prev') {
        this.imagePreview.index--;

        if (this.imagePreview.index <= -1) {
          this.imagePreview.index = this.imagePreview.images.length - 1;
        }
      } else {
        this.imagePreview.index++;

        if (this.imagePreview.index >= this.imagePreview.images.length) {
          this.imagePreview.index = 1;
        }
      }

      this.$nextTick(function () {
        _this.$refs.image.style.transition = 'transform 0.3s linear';
      });
      this.$emit('change', this.imagePreview.index);
    },
    reduce: function reduce() {
      if (this.imagePreview.scaleNum < 0.4) return;
      this.imagePreview.scaleNum = this.imagePreview.scaleNum - 0.2;
      this.changeTransform();
    },
    amplify: function amplify() {
      if (this.imagePreview.scaleNum >= 5) return;
      this.imagePreview.scaleNum = this.imagePreview.scaleNum + 0.2;
      this.changeTransform();
    },
    rotateRight: function rotateRight() {
      this.imagePreview.rotateDegree = this.imagePreview.rotateDegree + 90;
      this.changeTransform();
    },
    rotateLeft: function rotateLeft() {
      this.imagePreview.rotateDegree = this.imagePreview.rotateDegree - 90;
      this.changeTransform();
    },
    changeTransform: function changeTransform() {
      this.$refs.image.style.transform = "translate3d(".concat(this.offsetX, "px, ").concat(this.offsetY, "px, 0) scale(").concat(this.imagePreview.scaleNum, ") rotate(").concat(this.imagePreview.rotateDegree, "deg)");
    },
    revert: function revert() {
      this.$refs.image.style.transform = '';
    },
    imageMouseStart: function imageMouseStart(e) {
      this.mouseFlag = true;
      this.startX = e.screenX;
      this.startY = e.screenY;
    },
    imageMouseMove: function imageMouseMove(e) {
      if (this.mouseFlag === true) {
        this.offsetX = e.screenX - this.startX;
        this.offsetY = e.screenY - this.startY;
        this.$refs.image.style.transition = 'transform 0.1s linear';
        this.changeTransform();
      }
    },
    imageMouseEnd: function imageMouseEnd() {
      if (this.mouseFlag === true) {
        this.mouseFlag = false;
      }
    },
    mouseScroll: function mouseScroll(e) {
      var delta; // IE、chrome监听的是wheelDelta,向下滚动其值为-120；向上滚动其值为120

      if (e.wheelDelta) {
        delta = e.wheelDelta / 120; //火狐浏览器监听的是detail,向下滚动其值为3；向上滚动其值为-3
      } else if (e.detail) {
        delta = -e.detail / 3; //取负数，以保证符号相同
      }

      if (delta > 0) {
        //向上
        this.amplify();
      } else {
        //向下
        this.reduce();
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/imagePreviewer/imagePreviewer.vue?vue&type=script&lang=js&
 /* harmony default export */ var imagePreviewer_imagePreviewervue_type_script_lang_js_ = (imagePreviewervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/imagePreviewer/imagePreviewer.vue?vue&type=style&index=0&id=00c929da&lang=scss&scoped=true&
var imagePreviewervue_type_style_index_0_id_00c929da_lang_scss_scoped_true_ = __webpack_require__("e5aa");

// CONCATENATED MODULE: ./src/components/imagePreviewer/imagePreviewer.vue






/* normalize component */

var imagePreviewer_component = normalizeComponent(
  imagePreviewer_imagePreviewervue_type_script_lang_js_,
  imagePreviewervue_type_template_id_00c929da_scoped_true_render,
  imagePreviewervue_type_template_id_00c929da_scoped_true_staticRenderFns,
  false,
  null,
  "00c929da",
  null
  
)

/* harmony default export */ var imagePreviewer = (imagePreviewer_component.exports);
// CONCATENATED MODULE: ./src/components/imagePreviewer/index.js

var ImagePreviewer = {};

ImagePreviewer.install = function (Vue) {
  var template = Vue.extend(imagePreviewer); //创建模板

  var instance = null; // 3. 注入组件

  Vue.mixin({
    watch: {
      $route: function $route() {
        instance && instance.close();
      }
    }
  });

  Vue.prototype.$JdkImagePreview = function (params) {
    if (!instance) {
      instance = new template().$mount(); //创建实例

      document.body.appendChild(instance.$el); //挂载实例
    }

    instance.show(params);
  };
};

/* harmony default export */ var components_imagePreviewer = (ImagePreviewer);
// EXTERNAL MODULE: ./node_modules/_core-js@2.6.10@core-js/modules/es6.promise.js
var es6_promise = __webpack_require__("a60a");

// CONCATENATED MODULE: ./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0ab3d9f9-vue-loader-template"}!./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./src/components/messageBox/messageBox.vue?vue&type=template&id=7d604e2a&scoped=true&
var messageBoxvue_type_template_id_7d604e2a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShow),expression:"isShow"}],staticClass:"jdk-message-box mask"},[_c('div',{staticClass:"mask",on:{"click":_vm.toClose}}),_c('div',{staticClass:"message-box__main",style:({width: _vm.msgBox.width + 'px'})},[(_vm.msgBox.title)?_c('div',{staticClass:"message-box___title"},[_vm._v(_vm._s(_vm.msgBox.title))]):_vm._e(),_c('div',{staticClass:"message-box___content",domProps:{"innerHTML":_vm._s(_vm.msgBox.msg)}}),_c('div',{staticClass:"flexh flex-around"},[(!_vm.msgBox.confirmButtonMode)?_c('JdkButton',{class:_vm.msgBox.confirmButtonClass,attrs:{"type":"success","width":_vm.buttonWidth},on:{"click":_vm.ensure}},[_vm._v(_vm._s(_vm.msgBox.confirmButtonText))]):_vm._e(),(_vm.msgBox.copyTxt && _vm.msgBox.confirmButtonMode === 'copy')?_c('JdkButton',{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:(_vm.msgBox.copyTxt),expression:"msgBox.copyTxt",arg:"copy"}],class:_vm.msgBox.confirmButtonClass,attrs:{"type":"success","width":_vm.buttonWidth},on:{"success":_vm.ensure,"error":_vm.cancel}},[_vm._v(_vm._s(_vm.msgBox.confirmButtonText))]):_vm._e(),(_vm.msgBox.showCancelButton)?_c('JdkButton',{class:_vm.msgBox.cancelButtonClass,attrs:{"plain":"","width":_vm.buttonWidth},on:{"click":_vm.cancel}},[_vm._v(_vm._s(_vm.msgBox.cancelButtonText))]):_vm._e()],1)])])}
var messageBoxvue_type_template_id_7d604e2a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/messageBox/messageBox.vue?vue&type=template&id=7d604e2a&scoped=true&

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.10@core-js/modules/es7.object.get-own-property-descriptors.js
var es7_object_get_own_property_descriptors = __webpack_require__("efce");

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.10@core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("96dd");

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.10@core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("ed8b");

// CONCATENATED MODULE: ./node_modules/_@babel_runtime@7.6.3@@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// EXTERNAL MODULE: ./node_modules/_vue-clipboards@1.3.0@vue-clipboards/dist/vue-clipboards.es.js
var vue_clipboards_es = __webpack_require__("0e03");

// CONCATENATED MODULE: ./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./src/components/messageBox/messageBox.vue?vue&type=script&lang=js&







function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 // 复制到剪切板


external_commonjs_vue_commonjs2_vue_root_Vue_default.a.use(vue_clipboards_es["a" /* default */]);
/* harmony default export */ var messageBoxvue_type_script_lang_js_ = ({
  name: 'jdk-message-box',
  components: {
    JdkButton: button_button
  },
  data: function data() {
    return {
      isShow: false,
      msgBox: {
        msg: '',
        // 消息文字
        iconClass: '',
        //  自定义图标的类名，会覆盖 type
        title: '',
        // 提示
        type: '',
        // 	success / info / warning / error
        closeOnHashChange: true,
        // 是否在 hashchange 时关闭
        showCancelButton: true,
        closeOnClickModal: false,
        confirmButtonText: '确定',
        confirmButtonMode: '',
        // 'copy'可以复制
        copyTxt: '',
        confirmButtonClass: '',
        cancelButtonText: '取消',
        cancelButtonClass: ''
      }
    };
  },
  computed: {
    buttonWidth: function buttonWidth() {
      return this.msgBox.type === 'alert' ? 196 : 105;
    }
  },
  methods: {
    alert: function alert(option) {
      this.show(_objectSpread({}, option, {
        type: 'alert',
        showCancelButton: false
      }));
    },
    confirm: function confirm(option) {
      this.show(_objectSpread({}, option, {
        type: 'confirm'
      }));
    },
    ensure: function ensure() {
      this.isShow = false;
      this.callBack(true);
    },
    cancel: function cancel() {
      this.isShow = false;
      this.callBack(false);
    },
    toClose: function toClose() {
      if (this.msgBox.closeOnClickModal) {
        this.close();
      }
    },
    close: function close() {
      this.isShow = false;
      this.callBack(false);
    },
    show: function show(params) {
      //初始化参数
      this.isShow = true;
      this.msgBox = Object.assign(this.msgBox, {
        closeOnHashChange: true,
        closeOnClickModal: false,
        title: '',
        width: '260',
        showCancelButton: true,
        confirmButtonClass: '',
        cancelButtonClass: '',
        confirmButtonMode: '',
        copyTxt: ''
      }, params);
    }
  }
});
// CONCATENATED MODULE: ./src/components/messageBox/messageBox.vue?vue&type=script&lang=js&
 /* harmony default export */ var messageBox_messageBoxvue_type_script_lang_js_ = (messageBoxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/messageBox/messageBox.vue?vue&type=style&index=0&id=7d604e2a&scoped=true&lang=scss&
var messageBoxvue_type_style_index_0_id_7d604e2a_scoped_true_lang_scss_ = __webpack_require__("a2f6");

// CONCATENATED MODULE: ./src/components/messageBox/messageBox.vue






/* normalize component */

var messageBox_component = normalizeComponent(
  messageBox_messageBoxvue_type_script_lang_js_,
  messageBoxvue_type_template_id_7d604e2a_scoped_true_render,
  messageBoxvue_type_template_id_7d604e2a_scoped_true_staticRenderFns,
  false,
  null,
  "7d604e2a",
  null
  
)

/* harmony default export */ var messageBox = (messageBox_component.exports);
// CONCATENATED MODULE: ./src/components/messageBox/index.js



function defaultCallBack(action) {
  if (!action) currentMsg.reject();
  currentMsg.resolve();
}

var Index = {};
var currentMsg = null;

Index.install = function (Vue) {
  var VueMsgBox = Vue.extend(messageBox); //创建模板

  var msgBox = null;
  VueMsgBox.prototype.callBack = defaultCallBack; // 3. 注入组件

  Vue.mixin({
    watch: {
      $route: function $route() {
        msgBox && msgBox.close();
      }
    }
  });

  Vue.prototype.$JdkAlert = function (params) {
    if (!msgBox) {
      msgBox = new VueMsgBox().$mount(); //创建实例

      document.body.appendChild(msgBox.$el); //挂载实例
    }

    msgBox.alert(params);
    return new Promise(function (resolve, reject) {
      currentMsg = {
        resolve: resolve,
        reject: reject
      };
    });
  };

  Vue.prototype.$JdkConfirm = function (params) {
    if (!msgBox) {
      msgBox = new VueMsgBox().$mount(); //创建实例

      document.body.appendChild(msgBox.$el); //挂载实例
    }

    msgBox.confirm(params);
    return new Promise(function (resolve, reject) {
      currentMsg = {
        resolve: resolve,
        reject: reject
      };
    });
  };
};

/* harmony default export */ var components_messageBox = (Index);
// CONCATENATED MODULE: ./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0ab3d9f9-vue-loader-template"}!./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./src/components/toast/toast.vue?vue&type=template&id=e918c838&scoped=true&
var toastvue_type_template_id_e918c838_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShow && _vm.toast.msg),expression:"isShow && toast.msg"}],staticClass:"jdk-toast flexh flex-vcenter",class:{ 'jdk-toast--error': _vm.toast.type === 'error' }},[_c('span',{staticClass:"iconfont",class:_vm.toast.iconClass || _vm.iconArr[_vm.toast.type]}),_c('div',{staticClass:" flexv jdk-toast__content"},[_c('span',{staticClass:" jdk-toast__message"},[_vm._v(_vm._s(_vm.toast.msg))]),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.toast.tip),expression:"toast.tip"}],staticClass:"jdk-toast__tip"},[_vm._v(_vm._s(_vm.toast.tip))])])])}
var toastvue_type_template_id_e918c838_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/toast/toast.vue?vue&type=template&id=e918c838&scoped=true&

// CONCATENATED MODULE: ./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./src/components/toast/toast.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var toastvue_type_script_lang_js_ = ({
  // name: 'jdk-toast',
  data: function data() {
    return {
      isShow: false,
      toast: {
        duration: 3000,
        // 显示时间, 毫秒。设为 0 则不会自动关闭
        msg: '',
        // 消息文字
        iconClass: '',
        // string 自定义图标的类名，会覆盖 type
        tip: '',
        // 提示
        type: 'success',
        // string	success/error
        closeOnHashChange: true // 是否在 hashchange 时关闭

      },
      iconArr: {
        success: 'iconicon_success_white',
        error: 'iconicon_fail_black'
      }
    };
  },
  methods: {
    show: function show(params) {
      var _this = this;

      //初始化参数
      this.isShow = true;
      this.toast = Object.assign(this.toast, {
        duration: 3000,
        tip: '',
        closeOnHashChange: true,
        type: 'success',
        iconClass: ''
      }, params); // 显示时间, 毫秒。设为 0 则不会自动关闭

      if (this.toast.duration) {
        setTimeout(function () {
          _this.isShow = false;
        }, this.toast.duration);
      }
    },
    close: function close() {
      this.isShow = false;
    }
  }
});
// CONCATENATED MODULE: ./src/components/toast/toast.vue?vue&type=script&lang=js&
 /* harmony default export */ var toast_toastvue_type_script_lang_js_ = (toastvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/toast/toast.vue?vue&type=style&index=0&id=e918c838&scoped=true&lang=scss&
var toastvue_type_style_index_0_id_e918c838_scoped_true_lang_scss_ = __webpack_require__("e969");

// CONCATENATED MODULE: ./src/components/toast/toast.vue






/* normalize component */

var toast_component = normalizeComponent(
  toast_toastvue_type_script_lang_js_,
  toastvue_type_template_id_e918c838_scoped_true_render,
  toastvue_type_template_id_e918c838_scoped_true_staticRenderFns,
  false,
  null,
  "e918c838",
  null
  
)

/* harmony default export */ var toast_toast = (toast_component.exports);
// CONCATENATED MODULE: ./src/components/toast/index.js

var index = {};

index.install = function (Vue) {
  var VueToast = Vue.extend(toast_toast); //创建模板

  var toast = null; // 3. 注入组件

  Vue.mixin({
    watch: {
      $route: function $route() {
        if (toast && toast.closeOnHashChange) {
          toast && toast.close();
        }
      }
    }
  }); // 4. 添加实例方法

  Vue.prototype.$JdkToast = function (params) {
    if (!toast) {
      toast = new VueToast().$mount(); //使用的时候再去创建实例

      document.body.appendChild(toast.$el); //挂载实例
    }

    toast.show(params); // 返回当前的实例

    return toast;
  };
};

/* harmony default export */ var components_toast = (index);
// CONCATENATED MODULE: ./src/components/index.js





var components = [components_button, components_imagePreviewer, components_messageBox, components_toast];
var version = '0.1.4';

function install(Vue) {
  components.forEach(function (Component) {
    Vue.use(Component);
  });
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

/* harmony default export */ var src_components = ({
  version: version,
  install: install
});

// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@3.12.0@@vue/cli-service/lib/commands/build/entry-lib.js
/* concated harmony reexport install */__webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* concated harmony reexport version */__webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* concated harmony reexport button */__webpack_require__.d(__webpack_exports__, "button", function() { return components_button; });
/* concated harmony reexport imagePreviewer */__webpack_require__.d(__webpack_exports__, "imagePreviewer", function() { return components_imagePreviewer; });
/* concated harmony reexport messageBox */__webpack_require__.d(__webpack_exports__, "messageBox", function() { return components_messageBox; });
/* concated harmony reexport toast */__webpack_require__.d(__webpack_exports__, "toast", function() { return components_toast; });


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_components);



/***/ }),

/***/ "3f8b":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "4634":
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__("96dd");
var getKeys = __webpack_require__("7d56");
var redefine = __webpack_require__("a6d5");
var global = __webpack_require__("3f8b");
var hide = __webpack_require__("b8ea");
var Iterators = __webpack_require__("e3b3");
var wks = __webpack_require__("1277");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "4aef":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("6cc2");
var $export = __webpack_require__("2498");
var redefine = __webpack_require__("a6d5");
var hide = __webpack_require__("b8ea");
var Iterators = __webpack_require__("e3b3");
var $iterCreate = __webpack_require__("c264");
var setToStringTag = __webpack_require__("3d87");
var getPrototypeOf = __webpack_require__("d15b");
var ITERATOR = __webpack_require__("1277")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "4d2c":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "549d":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "54ff":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5e01":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "5fff":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("02f2");
var ITERATOR = __webpack_require__("1277")('iterator');
var Iterators = __webpack_require__("e3b3");
module.exports = __webpack_require__("da27").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "6077":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "6117":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("9952");
var defined = __webpack_require__("3038");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "63d6":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "65c3":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("8cac");
var dPs = __webpack_require__("8d69");
var enumBugKeys = __webpack_require__("d93f");
var IE_PROTO = __webpack_require__("9947")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("6618")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("17cb").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "6618":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("da0b");
var document = __webpack_require__("3f8b").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "67c1":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("e3b3");
var ITERATOR = __webpack_require__("1277")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "6cc2":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "6fe0":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("f341")('native-function-to-string', Function.toString);


/***/ }),

/***/ "7130":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("2498");
var defined = __webpack_require__("3038");
var fails = __webpack_require__("0cc1");
var spaces = __webpack_require__("3a06");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "7afe":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("549d");
var toIObject = __webpack_require__("6117");
var arrayIndexOf = __webpack_require__("1f9e")(false);
var IE_PROTO = __webpack_require__("9947")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "7bc3":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "7cfd":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("d3d8").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__("f9a5") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "7d56":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("7afe");
var enumBugKeys = __webpack_require__("d93f");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "8451":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "87c5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__("f9a5");
var getKeys = __webpack_require__("7d56");
var gOPS = __webpack_require__("9d61");
var pIE = __webpack_require__("c864");
var toObject = __webpack_require__("a9cf");
var IObject = __webpack_require__("9952");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("0cc1")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "8868":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("2498");
var core = __webpack_require__("da27");
var fails = __webpack_require__("0cc1");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "8941":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("a6ad");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "8cac":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("da0b");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "8d69":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("d3d8");
var anObject = __webpack_require__("8cac");
var getKeys = __webpack_require__("7d56");

module.exports = __webpack_require__("f9a5") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "8f42":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("3f8b");
var has = __webpack_require__("549d");
var cof = __webpack_require__("6077");
var inheritIfRequired = __webpack_require__("1e01");
var toPrimitive = __webpack_require__("2ab1");
var fails = __webpack_require__("0cc1");
var gOPN = __webpack_require__("cb2e").f;
var gOPD = __webpack_require__("e493").f;
var dP = __webpack_require__("d3d8").f;
var $trim = __webpack_require__("7130").trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__("65c3")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__("f9a5") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__("a6d5")(global, NUMBER, $Number);
}


/***/ }),

/***/ "9497":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("3f8b");
var macrotask = __webpack_require__("2dbc").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__("6077")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "95e3":
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__("8cac");
var aFunction = __webpack_require__("8451");
var SPECIES = __webpack_require__("1277")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "96dd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("ab19");
var step = __webpack_require__("c8e9");
var Iterators = __webpack_require__("e3b3");
var toIObject = __webpack_require__("6117");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("4aef")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "9947":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("f341")('keys');
var uid = __webpack_require__("4d2c");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "9952":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("6077");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "9d61":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "a07c":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("8cac");
var isObject = __webpack_require__("da0b");
var newPromiseCapability = __webpack_require__("21cb");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "a17c":
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__("a6d5");
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),

/***/ "a2f6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_0_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_3_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_messageBox_vue_vue_type_style_index_0_id_7d604e2a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("63d6");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_0_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_3_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_messageBox_vue_vue_type_style_index_0_id_7d604e2a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_0_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_3_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_messageBox_vue_vue_type_style_index_0_id_7d604e2a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_0_8_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_0_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_3_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_messageBox_vue_vue_type_style_index_0_id_7d604e2a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "a60a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("6cc2");
var global = __webpack_require__("3f8b");
var ctx = __webpack_require__("e85e");
var classof = __webpack_require__("02f2");
var $export = __webpack_require__("2498");
var isObject = __webpack_require__("da0b");
var aFunction = __webpack_require__("8451");
var anInstance = __webpack_require__("5e01");
var forOf = __webpack_require__("22ae");
var speciesConstructor = __webpack_require__("95e3");
var task = __webpack_require__("2dbc").set;
var microtask = __webpack_require__("9497")();
var newPromiseCapabilityModule = __webpack_require__("21cb");
var perform = __webpack_require__("d8bd");
var userAgent = __webpack_require__("1cd7");
var promiseResolve = __webpack_require__("a07c");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__("1277")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__("a17c")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__("3d87")($Promise, PROMISE);
__webpack_require__("e465")(PROMISE);
Wrapper = __webpack_require__("da27")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__("b309")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "a6ad":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "a6d5":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("3f8b");
var hide = __webpack_require__("b8ea");
var has = __webpack_require__("549d");
var SRC = __webpack_require__("4d2c")('src');
var $toString = __webpack_require__("6fe0");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("da27").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "a9cf":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("3038");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "aaa0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_0_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_3_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_style_index_0_id_c552bf42_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2e5b");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_0_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_3_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_style_index_0_id_c552bf42_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_0_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_3_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_style_index_0_id_c552bf42_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_0_8_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_0_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_3_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_style_index_0_id_c552bf42_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "ab19":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("1277")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("b8ea")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "ae6e":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("da0b");
var anObject = __webpack_require__("8cac");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("e85e")(Function.call, __webpack_require__("e493").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "b309":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("1277")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "b8ea":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("d3d8");
var createDesc = __webpack_require__("0614");
module.exports = __webpack_require__("f9a5") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "c264":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("65c3");
var descriptor = __webpack_require__("0614");
var setToStringTag = __webpack_require__("3d87");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("b8ea")(IteratorPrototype, __webpack_require__("1277")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "c3a9":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a6ad");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "c864":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "c8e9":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "cb2e":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("7afe");
var hiddenKeys = __webpack_require__("d93f").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "d15b":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("549d");
var toObject = __webpack_require__("a9cf");
var IE_PROTO = __webpack_require__("9947")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "d3d8":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("8cac");
var IE8_DOM_DEFINE = __webpack_require__("25ae");
var toPrimitive = __webpack_require__("2ab1");
var dP = Object.defineProperty;

exports.f = __webpack_require__("f9a5") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "d8bd":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "d93f":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "da0b":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "da27":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.10' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "dd80":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("8cac");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "e323":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__("d3d8");
var createDesc = __webpack_require__("0614");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "e3b3":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "e465":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("3f8b");
var dP = __webpack_require__("d3d8");
var DESCRIPTORS = __webpack_require__("f9a5");
var SPECIES = __webpack_require__("1277")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "e493":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("c864");
var createDesc = __webpack_require__("0614");
var toIObject = __webpack_require__("6117");
var toPrimitive = __webpack_require__("2ab1");
var has = __webpack_require__("549d");
var IE8_DOM_DEFINE = __webpack_require__("25ae");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("f9a5") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "e5aa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_0_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_3_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_imagePreviewer_vue_vue_type_style_index_0_id_00c929da_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e653");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_0_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_3_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_imagePreviewer_vue_vue_type_style_index_0_id_00c929da_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_0_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_3_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_imagePreviewer_vue_vue_type_style_index_0_id_00c929da_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_0_8_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_0_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_3_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_imagePreviewer_vue_vue_type_style_index_0_id_00c929da_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "e653":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e67d":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "e783":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("2498");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("87c5") });


/***/ }),

/***/ "e85e":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("8451");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "e969":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_0_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_3_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_toast_vue_vue_type_style_index_0_id_e918c838_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("54ff");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_0_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_3_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_toast_vue_vue_type_style_index_0_id_e918c838_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_0_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_3_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_toast_vue_vue_type_style_index_0_id_e918c838_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_0_8_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_0_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_3_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_toast_vue_vue_type_style_index_0_id_e918c838_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "ed8b":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("a9cf");
var $keys = __webpack_require__("7d56");

__webpack_require__("8868")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "efce":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__("2498");
var ownKeys = __webpack_require__("f36d");
var toIObject = __webpack_require__("6117");
var gOPD = __webpack_require__("e493");
var createProperty = __webpack_require__("e323");

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});


/***/ }),

/***/ "f341":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("da27");
var global = __webpack_require__("3f8b");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("6cc2") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "f36d":
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__("cb2e");
var gOPS = __webpack_require__("9d61");
var anObject = __webpack_require__("8cac");
var Reflect = __webpack_require__("3f8b").Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),

/***/ "f9a5":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("0cc1")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ })

/******/ });
//# sourceMappingURL=jdk.common.js.map