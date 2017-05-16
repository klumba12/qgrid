var qgrid =
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 195);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__action__ = __webpack_require__(254);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cache__ = __webpack_require__(255);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_1__cache__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__command__ = __webpack_require__(256);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_2__command__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__error__ = __webpack_require__(36);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__error__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__event__ = __webpack_require__(92);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__event__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__event_listener__ = __webpack_require__(257);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_5__event_listener__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fetch__ = __webpack_require__(258);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_6__fetch__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__guard__ = __webpack_require__(93);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_7__guard__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__log__ = __webpack_require__(61);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_8__log__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__model_bind__ = __webpack_require__(259);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_9__model_bind__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__model__ = __webpack_require__(260);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_10__model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shortcut__ = __webpack_require__(261);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_11__shortcut__["a"]; });













/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_isObject__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_isObject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_isObject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_isFunction__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_isFunction___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_isFunction__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_isArray__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_isArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_isArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_isBoolean__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_isBoolean___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_isBoolean__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_clone__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_clone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash_clone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_cloneDeep__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_cloneDeep___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash_cloneDeep__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_isUndefined__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_isUndefined___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash_isUndefined__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_debounce__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_debounce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash_debounce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_merge__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_flatten__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_flatten___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash_flatten__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_orderBy__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_orderBy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_lodash_orderBy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash_startCase__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash_startCase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_lodash_startCase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_lodash_assignWith__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_lodash_assignWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_lodash_assignWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_lodash_uniq__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_lodash_uniq___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_lodash_uniq__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0_lodash_isObject___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1_lodash_isFunction___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_2_lodash_isArray___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_6_lodash_isUndefined___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_3_lodash_isBoolean___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_4_lodash_clone___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_5_lodash_cloneDeep___default.a; });
/* unused harmony reexport debounce */
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_8_lodash_merge___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_9_lodash_flatten___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_11_lodash_startCase___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_12_lodash_assignWith___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_13_lodash_uniq___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_10_lodash_orderBy___default.a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return isEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return yes; });
/* unused harmony export no */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return toCamelCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return noop; });















var noop = function noop() {};
var yes = function yes() {
	return true;
};
var no = function no() {
	return false;
};
var identity = function identity(arg) {
	return arg;
};

var toCamelCase = function toCamelCase() {
	for (var _len = arguments.length, names = Array(_len), _key = 0; _key < _len; _key++) {
		names[_key] = arguments[_key];
	}

	var length = names.length;
	if (length > 0) {
		return names[0] + names.slice(1).map(function (name) {
			return name[0].toUpperCase() + name.substring(1, name.length);
		});
	}

	return '';
};

var isEmail = function isEmail(value) {
	if (value) {
		var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
		return re.test(value);
	}

	return false;
};



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MODULE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MODULE_CORE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return MODULE_LAYOUT_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return SERVICE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return TEMPLATE_PATH_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return THEME_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return RANGE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return HIGHLIGHT_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GRID; });
/* unused harmony export GRID_CORE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GRID_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return GRID_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return BOX_CORE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return VIEW_CORE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return TR_CORE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return TD_CORE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return TF_CORE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return TH_CORE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return HEAD_CORE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return BODY_CORE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return FOOT_CORE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return TOOLBAR_CORE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return HEAD_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return TEMPLATE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return COLUMN_LIST_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return COLUMN_NAME; });
/* unused harmony export NODE_NAME */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return FOOT_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return DRAG_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return DROP_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return MARKUP_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return TOOLBAR_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return LAYER_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return CELL_VALUE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return CAN_DROP_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return CAN_DRAG_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return DROP_EFFECT_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return ON_DROP_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return INDETERMINATE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return FOCUS_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return RESIZE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return RAISE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return ANIMATE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return FILE_UPLOAD_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return FILE_UPLOAD_LABEL_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return CAN_UPLOAD_NAME; });
var MODULE_NAME = 'qgrid';
var MODULE_CORE_NAME = 'qgrid.core';
var MODULE_LAYOUT_NAME = 'qgrid.layout';

var SERVICE_NAME = MODULE_NAME;
var TEMPLATE_PATH_NAME = MODULE_NAME + 'TemplatePath';
var THEME_NAME = MODULE_NAME + 'Theme';
var RANGE_NAME = MODULE_NAME + 'Range';
var HIGHLIGHT_NAME = MODULE_NAME + 'Highlight';

var GRID = 'qGrid';
var GRID_CORE = GRID + 'Core';

var GRID_NAME = GRID;
var GRID_PREFIX = 'q-grid';
var BOX_CORE_NAME = GRID_CORE + 'Box';
var VIEW_CORE_NAME = GRID_CORE + 'View';
var TR_CORE_NAME = GRID_CORE + 'Tr';
var TD_CORE_NAME = GRID_CORE + 'Td';
var TF_CORE_NAME = GRID_CORE + 'Tf';
var TH_CORE_NAME = GRID_CORE + 'Th';
var HEAD_CORE_NAME = GRID_CORE + 'Head';
var BODY_CORE_NAME = GRID_CORE + 'Body';
var FOOT_CORE_NAME = GRID_CORE + 'Foot';
var TOOLBAR_CORE_NAME = GRID_CORE + 'Toolbar';

var HEAD_NAME = GRID + 'Head';
var TEMPLATE_NAME = GRID + 'Template';
var COLUMN_LIST_NAME = GRID + 'Columns';
var COLUMN_NAME = GRID + 'Column';
var NODE_NAME = GRID + 'Node';
var FOOT_NAME = GRID + 'Foot';
var DRAG_NAME = GRID + 'Drag';
var DROP_NAME = GRID + 'Drop';
var MARKUP_NAME = GRID + 'Markup';
var TOOLBAR_NAME = GRID + 'Toolbar';
var LAYER_NAME = GRID + 'Layer';
var CELL_VALUE_NAME = GRID + 'CellValue';

var CAN_DROP_NAME = GRID + 'CanDrop';
var CAN_DRAG_NAME = GRID + 'CanDrag';
var DROP_EFFECT_NAME = GRID + 'DropEffect';
var ON_DROP_NAME = GRID + 'OnDrop';

var INDETERMINATE_NAME = GRID + 'Indeterminate';
var FOCUS_NAME = GRID + 'Focus';
var RESIZE_NAME = GRID + 'Resize';
var RAISE_NAME = GRID + 'Raise';
var ANIMATE_NAME = GRID + 'Animate';

var FILE_UPLOAD_NAME = GRID + 'FileUpload';
var FILE_UPLOAD_LABEL_NAME = GRID + 'FileUploadLabel';
var CAN_UPLOAD_NAME = GRID + 'CanUpload';

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__template_model__ = __webpack_require__(313);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__template_path__ = __webpack_require__(314);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__template_path__["a"]; });



/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_utility__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColumnView; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('custom-cell', function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
});

__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('custom-cell-edit', function (template, column) {
	return {
		model: 'edit',
		resource: column.key
	};
});

var ColumnView = function (_View) {
	_inherits(ColumnView, _View);

	function ColumnView(model) {
		_classCallCheck(this, ColumnView);

		var _this = _possibleConstructorReturn(this, (ColumnView.__proto__ || Object.getPrototypeOf(ColumnView)).call(this, model));

		_this.colspan = 0;
		_this.rowspan = 0;
		return _this;
	}

	_createClass(ColumnView, null, [{
		key: 'model',
		value: function model(_model) {
			if (_model) {
				ColumnView.assign(_model);
			} else {
				_model = new __WEBPACK_IMPORTED_MODULE_0__column_model__["a" /* ColumnModel */]();
			}

			_model.origin = 'custom';
			return _model;
		}
	}, {
		key: 'assign',
		value: function assign(body) {
			var etalon = this.model();
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = Object.keys(etalon)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var key = _step.value;

					if (!body.hasOwnProperty(key)) {
						body[key] = etalon[key];
					} else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__services_utility__["c" /* isObject */])(body[key]) && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__services_utility__["a" /* isFunction */])(body[key])) {
						body[key] = Object.assign({}, etalon[key], body[key]);
					}
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			return body;
		}
	}]);

	return ColumnView;
}(__WEBPACK_IMPORTED_MODULE_1__view__["a" /* View */]);



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_utility__ = __webpack_require__(1);
/* harmony export (immutable) */ __webpack_exports__["a"] = map;
/* unused harmony export getValue */
/* harmony export (immutable) */ __webpack_exports__["c"] = find;
/* harmony export (immutable) */ __webpack_exports__["d"] = findIndex;
/* unused harmony export findView */
/* harmony export (immutable) */ __webpack_exports__["b"] = dataView;
/* harmony export (immutable) */ __webpack_exports__["e"] = lineView;
/* harmony export (immutable) */ __webpack_exports__["f"] = widthFactory;


function map(columns) {
	return columns.reduce(function (memo, column) {
		memo[column.key] = column;
		return memo;
	}, {});
}

function getValue(column) {
	return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__services_utility__["a" /* isFunction */])(column.value) ? function (row) {
		return column.value(row);
	} : function (row) {
		return row[column.key];
	};
}

function find(columns, key) {
	var index = findIndex(columns, key);
	return index < 0 ? null : columns[index];
}

function findIndex(columns, key) {
	var length = columns.length;
	while (length--) {
		var column = columns[length];
		if (column.key == key) {
			return length;
		}
	}

	return -1;
}

function findView(columns, key) {
	var length = columns.length;

	while (length--) {
		var column = columns[length];
		if (column.model.key == key) {
			return column;
		}
	}

	return null;
}

function dataView(columns, model) {
	var groupBy = new Set(model.group().by);
	var pivotBy = new Set(model.pivot().by);
	return columns.filter(function (c) {
		return !groupBy.has(c.model.key) && !pivotBy.has(c.model.key) && c.model.isVisible !== false;
	});
}

function lineView(columnRows) {
	var height = columnRows.length;
	if (height === 1) {
		return columnRows[0];
	}

	if (height > 1) {
		var viewColumns = columnRows[0].filter(function (c) {
			return c.model.type !== 'pivot' && c.model.type !== 'pad';
		});
		var pivotColumns = columnRows[columnRows.length - 1].filter(function (c) {
			return c.model.type === 'pivot' || c.model.type === 'pad';
		});
		return viewColumns.concat(pivotColumns);
	}

	return [];
}

function widthFactory(model, form) {
	var layout = model.layout;
	form = form || layout().columns;

	function materialize(column) {
		var width = column.width;
		if (('' + width).indexOf('%') >= 0) {
			return width;
		}

		return Math.max(parseInt(width), parseInt(column.minWidth || 20)) + 'px';
	}

	return function (column) {
		if (form.hasOwnProperty(column.key)) {
			column = form[column.key];
		}

		return column.width || column.width === 0 ? materialize(column) : null;
	};
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(64);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__resource__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resource_enumerable__ = __webpack_require__(104);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__resource_enumerable__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resource_factory__ = __webpack_require__(290);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__resource_factory__["a"]; });




/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(317);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__view__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_model__ = __webpack_require__(318);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__view_model__["a"]; });



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* harmony default export */ __webpack_exports__["a"] = (function (name) {
	var require = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	var dependencies = Object.keys(require).reduce(function (memo, key) {
		memo.push({
			key: key,
			selector: require[key]
		});

		return memo;
	}, []);

	var Directive = function () {
		function Directive() {
			_classCallCheck(this, Directive);

			this.$postLink = this.onLink;
		}

		_createClass(Directive, [{
			key: 'onInit',
			value: function onInit() {}
		}, {
			key: 'onLink',
			value: function onLink() {}
		}], [{
			key: 'link',
			value: function link($scope, $element, $attrs, $ctrls) {
				var ctrl = $ctrls[0];

				for (var i = 0, length = dependencies.length; i < length; i++) {
					var d = dependencies[i];
					ctrl[d.key] = $ctrls[i + 1];
				}

				ctrl.onInit($attrs);
				if (ctrl.onDestroy) {
					$scope.$on('$destroy', ctrl.onDestroy.bind(ctrl));
				}
			}
		}]);

		return Directive;
	}();

	Directive.require = [name].concat(dependencies.map(function (d) {
		return d.selector;
	}));
	return Directive;
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__aggregation__ = __webpack_require__(299);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__aggregation__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__convert__ = __webpack_require__(300);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__convert__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_1__convert__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grid__ = __webpack_require__(301);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__grid__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guid__ = __webpack_require__(302);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__guid__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__merge__ = __webpack_require__(304);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_4__merge__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__middleware__ = __webpack_require__(305);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_5__middleware__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__path__ = __webpack_require__(66);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_6__path__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__style__ = __webpack_require__(112);
/* unused harmony namespace reexport */









/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid_view_components_model_component__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid_core_infrastructure__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grid_core_services_utility__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__grid_view_components_template_template_link__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__grid_view_definition__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/* harmony default export */ __webpack_exports__["a"] = (function (pluginName, context) {
	__WEBPACK_IMPORTED_MODULE_1__grid_core_infrastructure__["e" /* Guard */].notNullOrEmpty(pluginName, 'pluginName');

	context = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__grid_core_services_utility__["g" /* assignWith */])({
		models: [],
		inject: []
	}, context);

	var inject = ['$scope', '$element', '$attrs', '$compile', '$templateCache'];

	pluginName = pluginName.toLowerCase();

	var Plugin = function (_ModelComponent) {
		_inherits(Plugin, _ModelComponent);

		function Plugin($scope, $element, $attrs, $compile, $templateCache) {
			_classCallCheck(this, Plugin);

			if (context.models.length) {
				var _this = _possibleConstructorReturn(this, (Plugin.__proto__ || Object.getPrototypeOf(Plugin)).call(this, context.models));
			} else {
				var _this = _possibleConstructorReturn(this, (Plugin.__proto__ || Object.getPrototypeOf(Plugin)).call(this));
			}

			_this.$scope = $scope;
			_this.$element = $element;
			_this.$attrs = $attrs;
			_this.template = new __WEBPACK_IMPORTED_MODULE_3__grid_view_components_template_template_link__["a" /* default */]($compile, $templateCache);
			_this.templateScope = null;

			Array.from(arguments).filter(function (a, i) {
				return i >= inject.length;
			}).forEach(function (a, i) {
				return _this[context.inject[i]] = a;
			});
			return _possibleConstructorReturn(_this);
		}

		_createClass(Plugin, [{
			key: 'onInitCore',
			value: function onInitCore() {
				var _this2 = this;

				if (this.isLinked()) {
					var visibility = this.model.visibility;
					var plugins = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__grid_core_services_utility__["h" /* clone */])(visibility().plugin);
					if (!plugins.hasOwnProperty(pluginName)) {
						plugins[pluginName] = true;
						this.model.visibility({ plugin: plugins });
					}

					this.model.visibilityChanged.watch(function (e) {
						if (e.hasChanges('plugin')) {
							var _plugins = _this2.model.visibility().plugin;
							var pluginState = _plugins[pluginName];
							if (pluginState !== _this2.isShown) {
								if (pluginState) {
									_this2.templateScope = _this2.show();
								} else {
									_this2.templateScope = _this2.hide();
								}
							}
						}
					});
				}

				_get(Plugin.prototype.__proto__ || Object.getPrototypeOf(Plugin.prototype), 'onInitCore', this).call(this);
			}
		}, {
			key: 'isLinked',
			value: function isLinked() {
				// not in transclusion
				return this._box || !this._root;
			}
		}, {
			key: 'isReady',
			value: function isReady() {
				var model = this._model || this._box && this._box.model || this._root && this._root.model;

				return !!model;
			}
		}, {
			key: 'show',
			value: function show() {
				var templateUrl = 'qgrid.plugin.' + pluginName + '.tpl.html';
				var templateScope = this.$scope.$new();
				var link = this.template.link(templateUrl, this.resource);

				link(this.$element, templateScope);
				return templateScope;
			}
		}, {
			key: 'hide',
			value: function hide() {
				if (this.templateScope) {
					this.templateScope.$destroy();
					this.$element[0].innerHTML = '';
				}

				return null;
			}
		}, {
			key: 'resource',
			get: function get() {
				var model = this.model;
				if (model.hasOwnProperty(pluginName)) {
					var pluginState = model[pluginName]();
					if (pluginState.hasOwnProperty('resource')) {
						return pluginState.resource;
					}
				}

				return model.plugin().resource;
			}
		}, {
			key: 'model',
			get: function get() {
				var model = this._model || this._box && this._box.model || this._root && this._root.model;

				if (!model) {
					throw new __WEBPACK_IMPORTED_MODULE_1__grid_core_infrastructure__["c" /* AppError */]('plugin.component', 'Model is not defined');
				}

				return model;
			}
		}, {
			key: 'isShown',
			get: function get() {
				return this.templateScope !== null;
			}
		}]);

		return Plugin;
	}(__WEBPACK_IMPORTED_MODULE_0__grid_view_components_model_component__["a" /* default */]);

	Plugin.$inject = inject.concat(context.inject);

	Plugin.component = function (settings) {
		var pluginSettings = {
			require: {
				'_box': '^^?' + __WEBPACK_IMPORTED_MODULE_4__grid_view_definition__["d" /* BOX_CORE_NAME */],
				'_root': '^^?' + __WEBPACK_IMPORTED_MODULE_4__grid_view_definition__["e" /* GRID_NAME */]
			},
			bindings: {
				'_model': '<model'
			}
		};

		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__grid_core_services_utility__["i" /* merge */])(pluginSettings, settings);
		return pluginSettings;
	};

	return Plugin;
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataColumnModel; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var DataColumnModel = function (_ColumnModel) {
	_inherits(DataColumnModel, _ColumnModel);

	function DataColumnModel() {
		_classCallCheck(this, DataColumnModel);

		var _this = _possibleConstructorReturn(this, (DataColumnModel.__proto__ || Object.getPrototypeOf(DataColumnModel)).apply(this, arguments));

		_this.isDefault = true;
		_this.aggregation = null;
		_this.aggregationOptions = {
			distinct: false,
			separator: '; '
		};
		return _this;
	}

	return DataColumnModel;
}(__WEBPACK_IMPORTED_MODULE_0__column_model__["a" /* ColumnModel */]);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid_view_definition__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MODULE_CORE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MODULE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PAGER_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return PROGRESS_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SORT_BAR_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GROUP_BAR_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return PIVOT_BAR_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SELECTION_BAR_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return VISIBILITY_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return COLUMN_CHOOSER_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return COLUMN_FILTER_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return COLUMN_FILTER_PANEL_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return EDIT_FORM_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return EDIT_FORM_PANEL_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return EDIT_FORM_EDITOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return POPUP_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return POPUP_TRIGGER_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return POPUP_HEAD_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return POPUP_BODY_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return POPUP_PANEL_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return POPUP_SERVICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return POPUP_CLOSE_NAME; });


var MODULE_CORE_NAME = __WEBPACK_IMPORTED_MODULE_0__grid_view_definition__["a" /* MODULE_CORE_NAME */];
var MODULE_NAME = __WEBPACK_IMPORTED_MODULE_0__grid_view_definition__["b" /* MODULE_NAME */] + '.plugin';
var PAGER_NAME = __WEBPACK_IMPORTED_MODULE_0__grid_view_definition__["c" /* GRID */] + 'Pager';
var PROGRESS_NAME = __WEBPACK_IMPORTED_MODULE_0__grid_view_definition__["c" /* GRID */] + 'Progress';
var SORT_BAR_NAME = __WEBPACK_IMPORTED_MODULE_0__grid_view_definition__["c" /* GRID */] + 'SortBar';
var GROUP_BAR_NAME = __WEBPACK_IMPORTED_MODULE_0__grid_view_definition__["c" /* GRID */] + 'GroupBar';
var PIVOT_BAR_NAME = __WEBPACK_IMPORTED_MODULE_0__grid_view_definition__["c" /* GRID */] + 'PivotBar';
var SELECTION_BAR_NAME = __WEBPACK_IMPORTED_MODULE_0__grid_view_definition__["c" /* GRID */] + 'SelectionBar';
var VISIBILITY_NAME = __WEBPACK_IMPORTED_MODULE_0__grid_view_definition__["c" /* GRID */] + 'Visibility';
var COLUMN_CHOOSER_NAME = __WEBPACK_IMPORTED_MODULE_0__grid_view_definition__["c" /* GRID */] + 'ColumnChooser';
var COLUMN_FILTER_NAME = __WEBPACK_IMPORTED_MODULE_0__grid_view_definition__["c" /* GRID */] + 'ColumnFilter';
var COLUMN_FILTER_PANEL_NAME = __WEBPACK_IMPORTED_MODULE_0__grid_view_definition__["c" /* GRID */] + 'ColumnFilterPanel';
var EDIT_FORM_NAME = __WEBPACK_IMPORTED_MODULE_0__grid_view_definition__["c" /* GRID */] + 'EditForm';
var EDIT_FORM_PANEL_NAME = __WEBPACK_IMPORTED_MODULE_0__grid_view_definition__["c" /* GRID */] + 'EditFormPanel';
var EDIT_FORM_EDITOR = __WEBPACK_IMPORTED_MODULE_0__grid_view_definition__["c" /* GRID */] + 'EditFormEditor';

var POPUP_NAME = __WEBPACK_IMPORTED_MODULE_0__grid_view_definition__["c" /* GRID */] + 'Popup';
var POPUP_TRIGGER_NAME = __WEBPACK_IMPORTED_MODULE_0__grid_view_definition__["c" /* GRID */] + 'PopupTrigger';
var POPUP_HEAD_NAME = __WEBPACK_IMPORTED_MODULE_0__grid_view_definition__["c" /* GRID */] + 'PopupHead';
var POPUP_BODY_NAME = __WEBPACK_IMPORTED_MODULE_0__grid_view_definition__["c" /* GRID */] + 'PopupBody';
var POPUP_PANEL_NAME = __WEBPACK_IMPORTED_MODULE_0__grid_view_definition__["c" /* GRID */] + 'PopupPanel';
var POPUP_SERVICE = __WEBPACK_IMPORTED_MODULE_0__grid_view_definition__["c" /* GRID */] + 'PopupService';
var POPUP_CLOSE_NAME = __WEBPACK_IMPORTED_MODULE_0__grid_view_definition__["c" /* GRID */] + 'PopupClose';

/***/ }),
/* 14 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = "<span q-grid:cell-value></span>"

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = "<div ng-click=\"$view.sort.toggle.execute($cell.column)\">\n\t<div class=\"q-grid-sort\"\n\t\t  ng-switch=\"$view.sort.direction($cell.column)\">\n\t\t<span class=\"q-grid-asc\" ng-switch-when=\"asc\">&#8595;</span>\n\t\t<span class=\"q-grid-desc\" ng-switch-when=\"desc\">&#8593;</span>\n\t\t<span ng-switch-default>&#8595;</span>\n\t</div>\n\t<label ng-click=\"$head.sort.toggle.execute($cell.column)\"\n\t\t\t ng-bind=\"$cell.column.title\">\n\t</label>\n</div>"

/***/ }),
/* 17 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GRID_PREFIX; });
var GRID_PREFIX = 'q-grid';

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_utility__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__infrastructure__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["a"] = get;
/* harmony export (immutable) */ __webpack_exports__["c"] = getFactory;
/* harmony export (immutable) */ __webpack_exports__["b"] = set;




function get(row, column) {
	return column.$value ? column.$value({ $row: row }) : column.value ? column.value(row) : column.path ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__services__["c" /* compile */])(column.path)(row) : row[column.key];
}

function getFactory(column) {
	var get = column.$value ? function (row) {
		return column.$value({ $row: row });
	} : column.value ? function (row) {
		return column.value(row);
	} : column.path ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__services__["c" /* compile */])(column.path) : function (row) {
		return row[column.key];
	};

	return function (row) {
		return get(row);
	};
}

function set(row, column, value) {
	if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__services_utility__["a" /* isFunction */])(column.$value)) {
		return column.$value({ $row: row, $value: value });
	}

	if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__services_utility__["a" /* isFunction */])(column.value)) {
		return column.value(row, value);
	}

	if (column.path) {
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__services__["c" /* compile */])(column.path)(row, value);
	}

	if (row.hasOwnProperty(column.key)) {
		return row[column.key] = value;
	}

	throw new __WEBPACK_IMPORTED_MODULE_2__infrastructure__["c" /* AppError */]('value', 'Row can\'t be edit on "' + column.key + '" column');
}

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Component = function () {
	function Component() {
		_classCallCheck(this, Component);

		this.$onInit = this.onInitCore;
		this.$onChanges = this.onChangeCore;
		this.$onDestroy = this.onDestroyCore;
		this.$postLink = this.onLinkCore;
	}

	_createClass(Component, [{
		key: "onInitCore",
		value: function onInitCore() {
			this.onInit();
		}
	}, {
		key: "onLinkCore",
		value: function onLinkCore() {
			this.onLink();
		}
	}, {
		key: "onChangeCore",
		value: function onChangeCore() {
			this.onChange();
		}
	}, {
		key: "onDestroyCore",
		value: function onDestroyCore() {
			this.onDestroy();
		}
	}, {
		key: "onInit",
		value: function onInit() {}
	}, {
		key: "onLink",
		value: function onLink() {}
	}, {
		key: "onChange",
		value: function onChange() {}
	}, {
		key: "onDestroy",
		value: function onDestroy() {}
	}]);

	return Component;
}();

/* harmony default export */ __webpack_exports__["a"] = (Component);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(138);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColumnModel; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ColumnModel = function () {
	function ColumnModel() {
		var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'text';

		_classCallCheck(this, ColumnModel);

		this.type = type;
		this.key = null;
		this.title = null;
		this.value = null;
		this.pin = null;
		this.origin = 'specific';
		this.source = 'user';
		this.editor = null;
		this.editorOptions = {
			trigger: 'click'
		};

		this.width = null;
		this.minWidth = 20;
		this.maxWidth = null;

		this.canEdit = true;
		this.canResize = true;
		this.canSort = true;
		this.canMove = true;
		this.canFilter = true;
		this.canHighlight = true;
		this.canFocus = true;

		this.isVisible = true;
		this.index = -1;

		this.label = null;
	}

	_createClass(ColumnModel, [{
		key: 'toString',
		value: function toString() {
			return this.type + ': ' + this.title;
		}
	}]);

	return ColumnModel;
}();

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid_core_infrastructure__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var TemplateLink = function () {
	function TemplateLink($compile, $templateCache) {
		_classCallCheck(this, TemplateLink);

		this.$compile = $compile;
		this.$templateCache = $templateCache;
	}

	_createClass(TemplateLink, [{
		key: 'link',
		value: function link(templateUrl, resource) {
			var _this = this;

			var keys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ['content', '$default'];

			var resourceData = resource.data;
			var resourceScope = resource.scope;
			var resourceKey = this.findResourceKey(resourceData, keys);
			var template = resourceKey !== null ? resourceData[resourceKey] : this.$templateCache.get(templateUrl);

			return function (element, scope) {
				var container = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : element;

				if (resourceScope.hasOwnProperty(resourceKey)) {
					var env = resourceScope[resourceKey];
					var _iteratorNormalCompletion = true;
					var _didIteratorError = false;
					var _iteratorError = undefined;

					try {
						for (var _iterator = Object.keys(env)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
							var name = _step.value;

							if (scope.hasOwnProperty(name)) {
								throw new __WEBPACK_IMPORTED_MODULE_0__grid_core_infrastructure__["c" /* AppError */]('template.core', '"' + name + '" is reserved, use another name');
							}

							scope[name] = env[name];
						}
					} catch (err) {
						_didIteratorError = true;
						_iteratorError = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion && _iterator.return) {
								_iterator.return();
							}
						} finally {
							if (_didIteratorError) {
								throw _iteratorError;
							}
						}
					}
				}

				container.html('<!--qgrid: template-->' + template);
				var linkTo = _this.$compile(element.contents());
				linkTo(scope);
			};
		}
	}, {
		key: 'findResourceKey',
		value: function findResourceKey(resourceData, keys) {
			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = keys[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var key = _step2.value;

					if (resourceData.hasOwnProperty(key)) {
						return key;
					}
				}
			} catch (err) {
				_didIteratorError2 = true;
				_iteratorError2 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion2 && _iterator2.return) {
						_iterator2.return();
					}
				} finally {
					if (_didIteratorError2) {
						throw _iteratorError2;
					}
				}
			}

			return null;
		}
	}]);

	return TemplateLink;
}();

/* harmony default export */ __webpack_exports__["a"] = (TemplateLink);

/***/ }),
/* 24 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(29),
    getRawTag = __webpack_require__(464),
    objectToString = __webpack_require__(493);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(422),
    getValue = __webpack_require__(465);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node__ = __webpack_require__(62);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__node__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_builder__ = __webpack_require__(269);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__node_builder__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_service__ = __webpack_require__(270);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__node_service__["a"]; });




/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ElementCore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Element; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ElementCore = function () {
	function ElementCore() {
		_classCallCheck(this, ElementCore);
	}

	_createClass(ElementCore, [{
		key: "rect",
		value: function rect() {
			return {
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				width: 0,
				height: 0
			};
		}
	}, {
		key: "addClass",
		value: function addClass() {}
	}, {
		key: "removeClass",
		value: function removeClass() {}
	}, {
		key: "model",
		get: function get() {
			return null;
		}
	}, {
		key: "width",
		get: function get() {
			return 0;
		}
	}, {
		key: "height",
		get: function get() {
			return 0;
		}
	}]);

	return ElementCore;
}();

var empty = new ElementCore();
var Element = function () {
	function Element(element) {
		_classCallCheck(this, Element);

		this.element = element;
	}

	_createClass(Element, [{
		key: "rect",
		value: function rect() {
			return this.element.getBoundingClientRect();
		}
	}, {
		key: "addClass",
		value: function addClass(name) {
			this.element.classList.add(name);
		}
	}, {
		key: "removeClass",
		value: function removeClass(name) {
			this.element.classList.remove(name);
		}
	}, {
		key: "width",
		get: function get() {
			return this.element.clientWidth;
		}
	}, {
		key: "height",
		get: function get() {
			return this.element.clientHeight;
		}
	}], [{
		key: "empty",
		get: function get() {
			return empty;
		}
	}]);

	return Element;
}();

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(21);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(123),
    baseAssignValue = __webpack_require__(72);

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(52),
    isLength = __webpack_require__(79);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(120),
    baseKeys = __webpack_require__(425),
    isArrayLike = __webpack_require__(31);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_pipe_unit__ = __webpack_require__(98);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__default_pipe_unit__ = __webpack_require__(99);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipe_unit__ = __webpack_require__(100);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__pipe_unit__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__view_pipe_unit__ = __webpack_require__(101);
/* unused harmony namespace reexport */





/***/ }),
/* 34 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(25),
    isObjectLike = __webpack_require__(24);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_utility__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppError; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var AppError = function (_Error) {
	_inherits(AppError, _Error);

	function AppError(name, message) {
		_classCallCheck(this, AppError);

		var _this = _possibleConstructorReturn(this, (AppError.__proto__ || Object.getPrototypeOf(AppError)).call(this, message));

		_this.name = _this.constructor.name;
		_this.message = 'qgrid.' + name + ': ' + message;
		if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__services_utility__["a" /* isFunction */])(Error.captureStackTrace)) {
			Error.captureStackTrace(_this, _this.constructor);
		} else {
			_this.stack = new Error(message).stack;
		}
		return _this;
	}

	return AppError;
}(Error);

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__filter_pipe__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pagination_pipe__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sort_pipe__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_pipe__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__memo_pipe__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__group_pipe__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pivot_pipe__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__column_pipe__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__view_pipe__ = __webpack_require__(282);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pipe; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }











var Pipe = function () {
	function Pipe() {
		_classCallCheck(this, Pipe);
	}

	_createClass(Pipe, null, [{
		key: 'data',
		get: function get() {
			return __WEBPACK_IMPORTED_MODULE_3__data_pipe__["a" /* dataPipe */];
		}
	}, {
		key: 'filter',
		get: function get() {
			return __WEBPACK_IMPORTED_MODULE_0__filter_pipe__["a" /* filterPipe */];
		}
	}, {
		key: 'pagination',
		get: function get() {
			return __WEBPACK_IMPORTED_MODULE_1__pagination_pipe__["a" /* paginationPipe */];
		}
	}, {
		key: 'sort',
		get: function get() {
			return __WEBPACK_IMPORTED_MODULE_2__sort_pipe__["a" /* sortPipe */];
		}
	}, {
		key: 'memo',
		get: function get() {
			return __WEBPACK_IMPORTED_MODULE_4__memo_pipe__["a" /* memoPipe */];
		}
	}, {
		key: 'group',
		get: function get() {
			return __WEBPACK_IMPORTED_MODULE_5__group_pipe__["a" /* groupPipe */];
		}
	}, {
		key: 'pivot',
		get: function get() {
			return __WEBPACK_IMPORTED_MODULE_6__pivot_pipe__["a" /* pivotPipe */];
		}
	}, {
		key: 'column',
		get: function get() {
			return __WEBPACK_IMPORTED_MODULE_7__column_pipe__["a" /* columnPipe */];
		}
	}, {
		key: 'view',
		get: function get() {
			return __WEBPACK_IMPORTED_MODULE_8__view_pipe__["a" /* viewPipe */];
		}
	}]);

	return Pipe;
}();

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_utility__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_path__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_value__ = __webpack_require__(19);
/* harmony export (immutable) */ __webpack_exports__["a"] = get;
/* harmony export (immutable) */ __webpack_exports__["c"] = getFactory;
/* harmony export (immutable) */ __webpack_exports__["b"] = set;




function get(row, column) {
	return column.$label ? column.$label({ $row: row }) : column.label ? column.label(row) : column.labelPath ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__services_path__["a" /* compile */])(column.labelPath)(row) : column.title ? column.title : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__services_value__["a" /* get */])(row, column);
}

function getFactory(column) {
	var get = column.$label ? function (row) {
		return column.$label({ $row: row });
	} : column.label ? function (row) {
		return column.label(row);
	} : column.labelPath ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__services_path__["a" /* compile */])(column.labelPath) : column.title ? function () {
		return column.title;
	} : function (row) {
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__services_value__["a" /* get */])(row, column);
	};

	return function (row) {
		return get(row);
	};
}

function set(row, column, label) {
	if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__services_utility__["a" /* isFunction */])(column.$label)) {
		return column.$label({ $row: row, $label: label });
	}

	if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__services_utility__["a" /* isFunction */])(column.label)) {
		return column.label(row, label);
	}

	if (column.labelPath) {
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__services_path__["a" /* compile */])(column.labelPath)(row, label);
	}
}

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_pair__ = __webpack_require__(306);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return key; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return index; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return direction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return map; });


var key = __WEBPACK_IMPORTED_MODULE_0__services_pair__["a" /* key */];
var index = __WEBPACK_IMPORTED_MODULE_0__services_pair__["b" /* index */];
var direction = __WEBPACK_IMPORTED_MODULE_0__services_pair__["c" /* value */];
var map = __WEBPACK_IMPORTED_MODULE_0__services_pair__["d" /* map */];

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid_core_template__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid_core_infrastructure__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grid_core_services_utility__ = __webpack_require__(1);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function canBuild(column) {
	return column.type !== 'pad';
}

function getKey(column) {
	return column.origin === 'custom' ? 'custom-cell' : column.type + '-cell';
}

function buildView(source, mode, column) {
	switch (mode) {
		case 'view':
			{
				var type = column.type;
				return {
					key: getKey(column),
					url: 'qgrid.' + source + '.cell.' + type + '.tpl.html',
					defaults: ['$default.' + type, '$default']
				};
			}
		case 'edit':
			{
				var _type = column.editor || column.type;

				return {
					key: getKey(column) + '-' + mode,
					url: 'qgrid.' + source + '.cell.' + _type + '.' + mode + '.tpl.html',
					defaults: column.editor ? ['$default.' + column.editor, '$default.' + _type, '$default'] : ['$default.' + _type, '$default']
				};
			}
		default:
			throw new __WEBPACK_IMPORTED_MODULE_1__grid_core_infrastructure__["c" /* AppError */]('cell.build', 'Invalid mode "' + mode + '"');
	}
}

/* harmony default export */ __webpack_exports__["a"] = (function (template) {
	var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'view';

	return function (source, model, column) {
		var _pathSource;

		if (!canBuild(column)) {
			return __WEBPACK_IMPORTED_MODULE_2__grid_core_services_utility__["b" /* noop */];
		}

		var view = buildView(source, mode, column);
		var pathSource = (_pathSource = {}, _defineProperty(_pathSource, __WEBPACK_IMPORTED_MODULE_0__grid_core_template__["a" /* TemplatePath */].name(view.key), column), _defineProperty(_pathSource, 'for', source), _pathSource);
		var path = __WEBPACK_IMPORTED_MODULE_0__grid_core_template__["a" /* TemplatePath */].get(pathSource);
		var state = model[path.model]();

		var link = template.link(view.url, state.resource, [path.resource].concat(view.defaults));

		return function (element, scope) {
			return link(element, scope);
		};
	};
});

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid_core_infrastructure__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grid_core_services_utility__ = __webpack_require__(1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var ModelComponent = function (_Component) {
	_inherits(ModelComponent, _Component);

	function ModelComponent() {
		for (var _len = arguments.length, names = Array(_len), _key = 0; _key < _len; _key++) {
			names[_key] = arguments[_key];
		}

		_classCallCheck(this, ModelComponent);

		var _this = _possibleConstructorReturn(this, (ModelComponent.__proto__ || Object.getPrototypeOf(ModelComponent)).call(this));

		var self = _this;
		_this.binder = new __WEBPACK_IMPORTED_MODULE_1__grid_core_infrastructure__["f" /* ModelBinder */](self);
		_this.commit = __WEBPACK_IMPORTED_MODULE_2__grid_core_services_utility__["b" /* noop */];

		_this.$onChanges = _this.onChangeCore();

		_this.setup = function () {
			return _this.binder.bind(_this.model, names, false);
		};
		return _this;
	}

	_createClass(ModelComponent, [{
		key: 'onInitCore',
		value: function onInitCore() {
			this.commit = this.setup();
			this.commit();

			_get(ModelComponent.prototype.__proto__ || Object.getPrototypeOf(ModelComponent.prototype), 'onInitCore', this).call(this);
		}
	}, {
		key: 'onChangeCore',
		value: function onChangeCore() {
			this.commit();
			_get(ModelComponent.prototype.__proto__ || Object.getPrototypeOf(ModelComponent.prototype), 'onChangeCore', this).call(this);
		}
	}, {
		key: 'onDestroyCore',
		value: function onDestroyCore() {
			this.binder.bind(null);
			_get(ModelComponent.prototype.__proto__ || Object.getPrototypeOf(ModelComponent.prototype), 'onDestroyCore', this).call(this);
		}
	}, {
		key: 'model',
		get: function get() {
			__WEBPACK_IMPORTED_MODULE_1__grid_core_infrastructure__["e" /* Guard */].notNull(this.root, 'root');

			return this.root.model;
		}
	}]);

	return ModelComponent;
}(__WEBPACK_IMPORTED_MODULE_0__component__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (ModelComponent);

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(479),
    listCacheDelete = __webpack_require__(480),
    listCacheGet = __webpack_require__(481),
    listCacheHas = __webpack_require__(482),
    listCacheSet = __webpack_require__(483);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(42),
    stackClear = __webpack_require__(499),
    stackDelete = __webpack_require__(500),
    stackGet = __webpack_require__(501),
    stackHas = __webpack_require__(502),
    stackSet = __webpack_require__(503);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(34);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(477);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(26);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 47 */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(35);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),
/* 49 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(418),
    isObjectLike = __webpack_require__(24);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(21),
    stubFalse = __webpack_require__(529);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(81)(module)))

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(25),
    isObject = __webpack_require__(17);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(120),
    baseKeysIn = __webpack_require__(426),
    isArrayLike = __webpack_require__(31);

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(441);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = "<input type=\"text\"\n\t\t q-grid:focus\n\t\t ng-blur=\"$view.edit.cell.commit.execute($cell)\"\n\t\t ng-model=\"$view.edit.cell.value\"\t/>"

/***/ }),
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_utility__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__column_type_column_model_view__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__column_type__ = __webpack_require__(208);
/* harmony export (immutable) */ __webpack_exports__["a"] = columnFactory;





function merge(target, source) {
	if (target && source) {
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__services_utility__["g" /* assignWith */])(target, source, function (s, t) {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__services_utility__["d" /* isUndefined */])(s) ? t : s;
		});
	}

	return target || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__services_utility__["h" /* clone */])(source);
}

function columnFactory(model) {
	var columnList = model.columnList;
	var columnMap = {
		'text': __WEBPACK_IMPORTED_MODULE_3__column_type__["a" /* TextColumn */],
		'number': __WEBPACK_IMPORTED_MODULE_3__column_type__["b" /* NumberColumn */],
		'bool': __WEBPACK_IMPORTED_MODULE_3__column_type__["c" /* BoolColumn */],
		'date': __WEBPACK_IMPORTED_MODULE_3__column_type__["d" /* DateColumn */],
		'array': __WEBPACK_IMPORTED_MODULE_3__column_type__["e" /* ArrayColumn */],
		'email': __WEBPACK_IMPORTED_MODULE_3__column_type__["f" /* EmailColumn */],
		'password': __WEBPACK_IMPORTED_MODULE_3__column_type__["g" /* PasswordColumn */],
		'select': __WEBPACK_IMPORTED_MODULE_3__column_type__["h" /* SelectColumn */],
		'group': __WEBPACK_IMPORTED_MODULE_3__column_type__["i" /* GroupColumn */],
		'pivot': __WEBPACK_IMPORTED_MODULE_3__column_type__["j" /* PivotColumn */],
		'row-number': __WEBPACK_IMPORTED_MODULE_3__column_type__["k" /* RowNumberColumn */],
		'row-indicator': __WEBPACK_IMPORTED_MODULE_3__column_type__["l" /* RowIndicatorColumn */],
		'pad': __WEBPACK_IMPORTED_MODULE_3__column_type__["m" /* PadColumn */],
		'time': __WEBPACK_IMPORTED_MODULE_3__column_type__["n" /* TimeColumn */],
		'url': __WEBPACK_IMPORTED_MODULE_3__column_type__["o" /* UrlColumn */],
		'file': __WEBPACK_IMPORTED_MODULE_3__column_type__["p" /* FileColumn */],
		'image': __WEBPACK_IMPORTED_MODULE_3__column_type__["q" /* ImageColumn */],
		'reference': __WEBPACK_IMPORTED_MODULE_3__column_type__["r" /* ReferenceColumn */],
		'id': __WEBPACK_IMPORTED_MODULE_3__column_type__["s" /* IdColumn */],
		'custom': __WEBPACK_IMPORTED_MODULE_2__column_type_column_model_view__["a" /* ColumnView */]
	};

	var create = function create(entityType, columnType, body) {
		var Type = columnMap[entityType];
		var settings = columnList().reference[columnType];
		body = merge(body, settings);

		var model = Type.model(body);
		return new Type(model);
	};

	return function (type) {
		var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

		__WEBPACK_IMPORTED_MODULE_0__infrastructure__["e" /* Guard */].notNullOrEmpty(type, 'type');

		if (columnMap.hasOwnProperty(type)) {
			return create(type, type, body);
		}

		return create('custom', type, body);
	};
}

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__group_model__ = __webpack_require__(244);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__group_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__group_view__ = __webpack_require__(245);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__group_view__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__group_build__ = __webpack_require__(243);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__group_build__["a"]; });




/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Log; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*eslint-disable  no-console*/

var Log = function () {
	function Log() {
		_classCallCheck(this, Log);
	}

	_createClass(Log, null, [{
		key: "info",
		value: function info(source, message) {
			console.info("qgrid." + source + ": " + message);
		}
	}, {
		key: "warn",
		value: function warn(source, message) {
			console.warn("qgrid." + source + ": " + message);
		}
	}, {
		key: "error",
		value: function error(source, message) {
			console.error("qgrid." + source + ": " + message);
		}
	}]);

	return Log;
}();

/*eslint-enable*/

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Node; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function Node(key) {
	var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'group';

	_classCallCheck(this, Node);

	this.key = key;
	this.level = level;
	this.rows = [];
	this.children = [];
	this.type = type;
	this.state = {
		expand: false
	};
};

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pivot_build__ = __webpack_require__(283);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__pivot_build__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pivot_form__ = __webpack_require__(102);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pivot__ = __webpack_require__(103);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pivot_model__ = __webpack_require__(284);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__pivot_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pivot_view__ = __webpack_require__(285);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__pivot_view__["a"]; });






/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Resource; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Resource = function Resource() {
	var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	_classCallCheck(this, Resource);

	this.data = data;
	this.scope = scope;
};

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_utility__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectionState; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var keySelector = function keySelector(unit, selector) {
	switch (unit) {
		case 'row':
			return selector.row;
		case 'column':
			return selector.column;
		case 'cell':
			return function (entry) {
				return {
					row: selector.row(entry.row),
					column: selector.column(entry.column)
				};
			};
		default:
			throw new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["c" /* AppError */]('selection.state', 'Invalid unit ' + unit);
	}
};

var stringifyCellKey = function stringifyCellKey(key) {
	return key.column + '[' + key.row + ']';
};

var SelectionState = function () {
	function SelectionState(model) {
		_classCallCheck(this, SelectionState);

		this.model = model;
	}

	_createClass(SelectionState, [{
		key: 'select',
		value: function select(item) {
			var _this = this;

			var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

			if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__services_utility__["n" /* isArray */])(item)) {
				item.forEach(function (item) {
					return _this.select(item, state);
				});
				return;
			}

			if (item instanceof __WEBPACK_IMPORTED_MODULE_2__node__["c" /* Node */]) {
				var rows = this.model.data().rows;
				item.rows.forEach(function (index) {
					return _this.select(rows[index], state);
				});
				return;
			}

			this.selectCore(item, state);
		}
	}, {
		key: 'toggle',
		value: function toggle(item, state) {
			if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__services_utility__["d" /* isUndefined */])(state)) {
				state = this.state(item);
				return this.select(item, state === null || !state);
			}

			return this.select(item, state);
		}
	}, {
		key: 'state',
		value: function state(item) {
			var _this2 = this;

			if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__services_utility__["n" /* isArray */])(item)) {
				var all = item.every(function (item) {
					return _this2.state(item);
				});
				return all ? true : item.some(function (item) {
					return _this2.state(item);
				}) ? null : false;
			}

			if (item instanceof __WEBPACK_IMPORTED_MODULE_2__node__["c" /* Node */]) {
				var rows = this.model.data().rows;
				var _all = item.rows.every(function (index) {
					return _this2.state(rows[index]);
				});
				return _all ? true : item.rows.some(function (index) {
					return _this2.state(rows[index]);
				}) ? null : false;
			}

			return this.stateCore(item);
		}
	}, {
		key: 'clear',
		value: function clear() {
			return this.clearCore();
		}
	}, {
		key: 'view',
		value: function view(entries) {
			var selectionState = this.model.selection();
			switch (selectionState.unit) {
				case 'row':
				case 'column':
				case 'cell':
					return entries.map(keySelector(selectionState.unit, selectionState.key));
				case 'mix':
					return entries.map(function (entry) {
						return {
							unit: entry.unit,
							item: keySelector(entry.unit, selectionState.key)(entry.item)
						};
					});
				default:
					throw new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["c" /* AppError */]('selection.state', 'Invalid unit ' + selectionState.unit);
			}
		}
	}, {
		key: 'entries',
		value: function entries() {
			return [];
		}
	}, {
		key: 'key',
		value: function key(item) {
			var selection = this.model.selection();
			var unit = selection.unit;
			var getCellKey = function getCellKey(item, unit) {
				if (item.column && item.row) {
					var key = keySelector(unit, selection.key)(item);
					return stringifyCellKey(key);
				}

				return item;
			};

			if (unit === 'cell') {
				return getCellKey(item, unit);
			}

			if (unit === 'row' || unit === 'column') {
				return keySelector(unit, selection.key)(item);
			}

			if (unit === 'mix' && item.item) {
				if (item.unit === 'cell') {
					return getCellKey(item.item, item.unit);
				}

				if (item.unit === 'row' || item.unit === 'column') {
					return keySelector(item.unit, selection.key)(item.item);
				}

				return item.item;
			}

			return item;
		}
	}, {
		key: 'lookup',
		value: function lookup(items, unit) {
			var _this3 = this;

			var entries = [];

			if (items.length === 0) {
				return entries;
			}

			if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__services_utility__["d" /* isUndefined */])(unit)) {
				unit = this.model.selection().unit;
			}
			var data = this.model.data();

			switch (unit) {
				case 'row':
					{
						var rows = data.rows;
						rows.forEach(function (row) {
							var rowKey = _this3.key(row);
							var found = items.indexOf(rowKey) > -1;
							if (found) {
								entries.push(row);
							}
						});
						break;
					}
				case 'column':
					{
						var columns = data.columns;
						columns.forEach(function (column) {
							var colKey = _this3.key(column);
							var found = items.indexOf(colKey) > -1;
							if (found) {
								entries.push(column);
							}
						});
						break;
					}
				case 'cell':
					{
						var cells = [];
						data.columns.forEach(function (column) {
							data.rows.forEach(function (row) {
								cells.push({
									column: column,
									row: row
								});
							});
						});
						cells.forEach(function (cell) {
							var cellKey = _this3.key(cell);
							var found = items.findIndex(function (item) {
								return stringifyCellKey(item) === cellKey;
							}) > -1;
							if (found) {
								entries.push(cell);
							}
						});
						break;
					}
				case 'mix':
					{
						var rowKeys = items.filter(function (key) {
							return key.unit === 'row';
						}).map(function (key) {
							return key.item;
						});
						var colKeys = items.filter(function (key) {
							return key.unit === 'column';
						}).map(function (key) {
							return key.item;
						});
						var cellKeys = items.filter(function (key) {
							return key.unit === 'cell';
						}).map(function (key) {
							return key.item;
						});

						this.lookup(rowKeys, 'row').concat(this.lookup(colKeys, 'column')).concat(this.lookup(cellKeys, 'cell'));
						break;
					}
				default:
					throw new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["c" /* AppError */]('selection.state', 'Invalid unit ' + unit);
			}

			return entries;
		}
	}, {
		key: 'selectCore',
		value: function selectCore() {}
	}, {
		key: 'clearCore',
		value: function clearCore() {}
	}, {
		key: 'stateCore',
		value: function stateCore() {
			return false;
		}
	}]);

	return SelectionState;
}();

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = compile;
function compile(path) {
	var parts = path.split('.');
	var last = parts.length - 1;
	var accessor = parts.filter(function (part, index) {
		return index !== last;
	}).reduce(function (accessor, part) {
		return accessor ? function (entry) {
			return accessor(entry)[part];
		} : function (entry) {
			return entry[part];
		};
	}, null);

	var key = parts[last];
	if (accessor) {
		return function (entry, value) {
			if (arguments.length === 2) {
				accessor(entry)[key] = value;
			}

			return accessor(entry)[key];
		};
	}

	return function (entry, value) {
		if (arguments.length === 2) {
			entry[key] = value;
		}

		return entry[key];
	};
}

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid_core_infrastructure__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__element__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grid_view_definition__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var CellCore = function (_ElementCore) {
	_inherits(CellCore, _ElementCore);

	function CellCore() {
		_classCallCheck(this, CellCore);

		return _possibleConstructorReturn(this, (CellCore.__proto__ || Object.getPrototypeOf(CellCore)).call(this));
	}

	return CellCore;
}(__WEBPACK_IMPORTED_MODULE_1__element__["b" /* ElementCore */]);

var empty = new CellCore();

var Cell = function (_Element) {
	_inherits(Cell, _Element);

	function Cell() {
		_classCallCheck(this, Cell);

		return _possibleConstructorReturn(this, (Cell.__proto__ || Object.getPrototypeOf(Cell)).apply(this, arguments));
	}

	_createClass(Cell, [{
		key: 'rect',
		value: function rect() {
			return this.element.getBoundingClientRect();
		}
	}, {
		key: 'model',
		get: function get() {
			var ctrl = angular.element(this.element).controller(__WEBPACK_IMPORTED_MODULE_2__grid_view_definition__["F" /* TD_CORE_NAME */]);
			if (!ctrl) {
				throw new __WEBPACK_IMPORTED_MODULE_0__grid_core_infrastructure__["c" /* AppError */]('cell', 'Controller for cell is not found');
			}

			return ctrl;
		}
	}], [{
		key: 'empty',
		get: function get() {
			return empty;
		}
	}]);

	return Cell;
}(__WEBPACK_IMPORTED_MODULE_1__element__["a" /* Element */]);

/* harmony default export */ __webpack_exports__["a"] = (Cell);

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(26),
    root = __webpack_require__(21);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(484),
    mapCacheDelete = __webpack_require__(485),
    mapCacheGet = __webpack_require__(486),
    mapCacheHas = __webpack_require__(487),
    mapCacheSet = __webpack_require__(488);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 70 */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),
/* 71 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

module.exports = arrayReduce;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(136);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__(119);

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(147);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(403),
    stubArray = __webpack_require__(149);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),
/* 76 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(14),
    isSymbol = __webpack_require__(35);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),
/* 78 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 79 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(423),
    baseUnary = __webpack_require__(129),
    nodeUtil = __webpack_require__(492);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__body_model__ = __webpack_require__(196);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__body_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__body_view__ = __webpack_require__(197);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__body_view__["a"]; });



/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_list_generate__ = __webpack_require__(198);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__column_list_generate__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column_list_model__ = __webpack_require__(199);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__column_list_model__["a"]; });



/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_utility__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CellEditor; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var CellEditorCore = function () {
	function CellEditorCore() {
		_classCallCheck(this, CellEditorCore);

		this.value = null;
		this.fetch = __WEBPACK_IMPORTED_MODULE_2__services_utility__["b" /* noop */];
		this.resetFetch = __WEBPACK_IMPORTED_MODULE_2__services_utility__["b" /* noop */];
	}

	_createClass(CellEditorCore, [{
		key: 'commit',
		value: function commit() {}
	}, {
		key: 'reset',
		value: function reset() {}
	}, {
		key: 'options',
		get: function get() {
			return {};
		}
	}]);

	return CellEditorCore;
}();

var empty = new CellEditorCore();

var CellEditor = function (_CellEditorCore) {
	_inherits(CellEditor, _CellEditorCore);

	function CellEditor(cell) {
		_classCallCheck(this, CellEditor);

		var _this = _possibleConstructorReturn(this, (CellEditor.__proto__ || Object.getPrototypeOf(CellEditor)).call(this));

		_this.cell = cell;
		_this.fetch = _this.fetchFactory();
		_this.resetFetch = _this.fetch.run(cell.row);

		var parse = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__services__["a" /* parseFactory */])(cell.column.type);
		_this.value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__services_utility__["d" /* isUndefined */])(cell.value) ? null : parse(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__services_utility__["h" /* clone */])(cell.value));
		_this.label = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__services_utility__["d" /* isUndefined */])(cell.label) ? null : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__services_utility__["h" /* clone */])(cell.label);
		return _this;
	}

	_createClass(CellEditor, [{
		key: 'commit',
		value: function commit() {
			this.cell.value = this.value;
			this.cell.label = this.label;
			this.resetFetch();
			this.resetFetch = __WEBPACK_IMPORTED_MODULE_2__services_utility__["b" /* noop */];
		}
	}, {
		key: 'reset',
		value: function reset() {
			this.value = this.cell.value;
			this.resetFetch();
			this.resetFetch = __WEBPACK_IMPORTED_MODULE_2__services_utility__["b" /* noop */];
		}
	}, {
		key: 'fetchFactory',
		value: function fetchFactory() {
			var _this2 = this;

			var options = this.options;
			if (options && options.fetch) {
				return new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["h" /* Fetch */](options.fetch);
			}
			return new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["h" /* Fetch */](function () {
				return _this2.cell.value;
			});
		}
	}, {
		key: 'title',
		get: function get() {
			return this.cell.column.title;
		}
	}, {
		key: 'options',
		get: function get() {
			return this.cell.column.editorOptions;
		}
	}], [{
		key: 'empty',
		get: function get() {
			return empty;
		}
	}]);

	return CellEditor;
}(CellEditorCore);

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_utility__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit_cell_editor__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_value__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_label__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RowEditor; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }






var RowEditorCore = function () {
	function RowEditorCore() {
		_classCallCheck(this, RowEditorCore);

		this.editors = [];
	}

	_createClass(RowEditorCore, [{
		key: 'commit',
		value: function commit() {}
	}, {
		key: 'reset',
		value: function reset() {}
	}]);

	return RowEditorCore;
}();

var CellView = function () {
	function CellView(row, column) {
		_classCallCheck(this, CellView);

		this.row = row;
		this.column = column;
	}

	_createClass(CellView, [{
		key: 'value',
		get: function get() {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__services_value__["a" /* get */])(this.row, this.column);
		},
		set: function set(value) {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__services_value__["b" /* set */])(this.row, this.column, value);
		}
	}, {
		key: 'label',
		get: function get() {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__services_label__["a" /* get */])(this.row, this.column);
		},
		set: function set(value) {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__services_label__["b" /* set */])(this.row, this.column, value);
		}
	}]);

	return CellView;
}();

var empty = new RowEditorCore();
var RowEditor = function (_RowEditorCore) {
	_inherits(RowEditor, _RowEditorCore);

	function RowEditor(row, columns) {
		_classCallCheck(this, RowEditor);

		var _this = _possibleConstructorReturn(this, (RowEditor.__proto__ || Object.getPrototypeOf(RowEditor)).call(this));

		_this.value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__services_utility__["j" /* cloneDeep */])(row);
		_this.row = row;

		_this.editors = columns.filter(function (column) {
			return column.canEdit;
		}).map(function (column) {
			return new __WEBPACK_IMPORTED_MODULE_1__edit_cell_editor__["a" /* CellEditor */](new CellView(_this.value, column));
		});
		return _this;
	}

	_createClass(RowEditor, [{
		key: 'commit',
		value: function commit() {
			this.editors.forEach(function (editor) {
				return editor.commit();
			});
			Object.assign(this.row, this.value);
		}
	}, {
		key: 'reset',
		value: function reset() {
			this.editors.forEach(function (editor) {
				return editor.reset();
			});
			this.value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__services_utility__["j" /* cloneDeep */])(this.row);
		}
	}], [{
		key: 'empty',
		get: function get() {
			return empty;
		}
	}]);

	return RowEditor;
}(RowEditorCore);

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__edit_model__ = __webpack_require__(227);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__edit_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit_view__ = __webpack_require__(229);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__edit_view__["a"]; });



/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Visitor; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Visitor = function () {
	function Visitor() {
		_classCallCheck(this, Visitor);
	}

	_createClass(Visitor, [{
		key: 'visit',
		value: function visit(item, depth) {
			switch (item.kind) {
				case 'group':
					return this.visitGroup(item, (depth || 0) + 1);
				case 'condition':
					return this.visitCondition(item, depth || 0);
				case 'function':
					return this.visitFunction(item, depth || 0);
				default:
					throw __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__infrastructure__["c" /* AppError */])('expression.visitor', 'Invalid kind ' + item.kind);
			}
		}
	}, {
		key: 'visitGroup',
		value: function visitGroup(group, depth) {
			if (group.right) {
				this.visit(group.left, depth);
				this.visit(group.right, depth);
			}

			return this.visit(group.left, depth);
		}
	}, {
		key: 'visitCondition',
		value: function visitCondition(condition, depth) {
			switch (condition.op) {
				case 'isNotNull':
				case 'isNull':
				case 'isNotEmpty':
				case 'isEmpty':
				case 'isNumeric':
				case 'isNotNumeric':
					return this.visitUnary(condition, depth);
				case 'equals':
				case 'notEquals':
				case 'greaterThanOrEquals':
				case 'greaterThan':
				case 'lessThanOrEquals':
				case 'lessThan':
				case 'like':
				case 'notLike':
				case 'startsWith':
				case 'endsWith':
				case 'match':
					return this.visitBinary(condition, depth);
				case 'between':
					return this.visitBetween(condition, depth);
				case 'in':
					return this.visitIn(condition, depth);
				default:
					throw new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["c" /* AppError */]('expression.visitor', 'Invalid operation ' + condition.op);
			}
		}
	}, {
		key: 'visitUnary',
		value: function visitUnary(condition) {
			this.visitLeft(condition.left);
		}
	}, {
		key: 'visitBinary',
		value: function visitBinary(condition /*, depth*/) {
			this.visitLeft(condition.left);
			this.visitRight(condition.right);
		}
	}, {
		key: 'visitLeft',
		value: function visitLeft(left) {
			if (left.kind) {
				switch (left.kind) {
					case 'function':
						this.visitArguments(left.arguments);
				}
			}
		}
	}, {
		key: 'visitBetween',
		value: function visitBetween() /*condition, depth*/{}
	}, {
		key: 'visitIn',
		value: function visitIn() /*condition, depth*/{}
	}, {
		key: 'visitFunction',
		value: function visitFunction() /*fn*/{}
	}, {
		key: 'visitArguments',
		value: function visitArguments(args) {
			var _this = this;

			return args.map(function (arg) {
				switch (arg.kind) {
					case 'condition':
					case 'group':
						_this.visit(arg);
				}
			});
		}
	}]);

	return Visitor;
}();

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__filter_model__ = __webpack_require__(234);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__filter_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__filter_view__ = __webpack_require__(235);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__filter_view__["a"]; });



/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foot_model__ = __webpack_require__(239);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__foot_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foot_view__ = __webpack_require__(240);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__foot_view__["a"]; });



/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__head_model__ = __webpack_require__(246);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__head_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__head_view__ = __webpack_require__(247);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__head_view__["a"]; });



/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__highlight_model__ = __webpack_require__(251);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__highlight_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__highlight_view__ = __webpack_require__(252);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__highlight_view__["a"]; });



/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Event; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Event = function () {
	function Event() {
		var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
			return null;
		};

		_classCallCheck(this, Event);

		this.handlers = [];
		this.isDirty = false;
		this.e = e;
	}

	_createClass(Event, [{
		key: "on",
		value: function on(f) {
			var handlers = this.handlers;
			handlers.push(f);
			return function () {
				var index = handlers.indexOf(f);
				if (index >= 0) {
					handlers.splice(index, 1);
				}
			};
		}
	}, {
		key: "watch",
		value: function watch(f) {
			if (this.isDirty) {
				f(this.e());
			}

			return this.on(f);
		}
	}, {
		key: "emit",
		value: function emit(e) {
			this.isDirty = true;
			var temp = Array.from(this.handlers);
			for (var i = 0, length = temp.length; i < length; i++) {
				temp[i](e);
			}
		}
	}]);

	return Event;
}();

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_utility__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Guard; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var Guard = function () {
	function Guard() {
		_classCallCheck(this, Guard);
	}

	_createClass(Guard, null, [{
		key: 'notUndefined',

		/**
   * If value is undefined exception will be thrown
   * @param {any} value - Value to check
   * @param {string} name - Argument name
   */
		value: function notUndefined(value, name) {
			if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__services_utility__["d" /* isUndefined */])(value)) {
				throw new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* AppError */]('guard.notUndefined', name);
			}
		}

		/**
   * If value is null or undefined exception will be thrown
   * @param {any} value - Value to check
   * @param {string} name - Argument name
   */

	}, {
		key: 'notNull',
		value: function notNull(value, name) {
			if (value === null || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__services_utility__["d" /* isUndefined */])(value)) {
				throw new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* AppError */]('guard.notNull', name);
			}
		}

		/**
   * If value is null or undefined or empty exception will be thrown
   * @param {any} value - Value to check
   * @param {string} name - Argument name
   */

	}, {
		key: 'notNullOrEmpty',
		value: function notNullOrEmpty(value, name) {
			if (value === null || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__services_utility__["d" /* isUndefined */])(value) || value === '') {
				throw new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* AppError */]('guard.notNullOrEmpty', name);
			}
		}

		/**
   * If value is not a function exception will be thrown
   * @param {any} value - Value to check
   * @param {string} name - Argument name
   */

	}, {
		key: 'invokable',
		value: function invokable(value, name) {
			if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__services_utility__["a" /* isFunction */])(value)) {
				throw new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* AppError */]('guard.invokable', name);
			}
		}
	}]);

	return Guard;
}();

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layout_model__ = __webpack_require__(264);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__layout_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout_view__ = __webpack_require__(265);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__layout_view__["a"]; });



/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__navigation_model__ = __webpack_require__(267);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__navigation_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navigation_view__ = __webpack_require__(268);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__navigation_view__["a"]; });



/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pagination_model__ = __webpack_require__(271);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__pagination_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pagination_view__ = __webpack_require__(272);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__pagination_view__["a"]; });



/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipe__ = __webpack_require__(37);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__pipe__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipe_build__ = __webpack_require__(279);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__pipe_build__["a"]; });



/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipe__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return columnPipeUnit; });


var columnPipeUnit = [function (memo, context, next) {
	var view = context.model.view();
	next({
		rows: view.rows,
		pivot: view.pivot,
		nodes: view.nodes
	});
}, __WEBPACK_IMPORTED_MODULE_0__pipe__["a" /* Pipe */].column, function (memo, context, next) {
	context.model.view({
		columns: memo.columns
	});

	next(memo);
}];

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipe__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultPipeUnit; });


var defaultPipeUnit = [__WEBPACK_IMPORTED_MODULE_0__pipe__["a" /* Pipe */].data, __WEBPACK_IMPORTED_MODULE_0__pipe__["a" /* Pipe */].filter, __WEBPACK_IMPORTED_MODULE_0__pipe__["a" /* Pipe */].sort, __WEBPACK_IMPORTED_MODULE_0__pipe__["a" /* Pipe */].pagination, __WEBPACK_IMPORTED_MODULE_0__pipe__["a" /* Pipe */].memo, __WEBPACK_IMPORTED_MODULE_0__pipe__["a" /* Pipe */].group, __WEBPACK_IMPORTED_MODULE_0__pipe__["a" /* Pipe */].pivot, __WEBPACK_IMPORTED_MODULE_0__pipe__["a" /* Pipe */].column, __WEBPACK_IMPORTED_MODULE_0__pipe__["a" /* Pipe */].view];

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__default_pipe_unit__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_pipe_unit__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__column_pipe_unit__ = __webpack_require__(98);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipeUnit; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var PipeUnit = function () {
	function PipeUnit() {
		_classCallCheck(this, PipeUnit);
	}

	_createClass(PipeUnit, null, [{
		key: 'default',
		get: function get() {
			return __WEBPACK_IMPORTED_MODULE_0__default_pipe_unit__["a" /* defaultPipeUnit */];
		}
	}, {
		key: 'view',
		get: function get() {
			return __WEBPACK_IMPORTED_MODULE_1__view_pipe_unit__["a" /* viewPipeUnit */];
		}
	}, {
		key: 'column',
		get: function get() {
			return __WEBPACK_IMPORTED_MODULE_2__column_pipe_unit__["a" /* columnPipeUnit */];
		}
	}]);

	return PipeUnit;
}();

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipe__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return viewPipeUnit; });


var viewPipeUnit = [__WEBPACK_IMPORTED_MODULE_0__pipe__["a" /* Pipe */].data, __WEBPACK_IMPORTED_MODULE_0__pipe__["a" /* Pipe */].memo, __WEBPACK_IMPORTED_MODULE_0__pipe__["a" /* Pipe */].column, __WEBPACK_IMPORTED_MODULE_0__pipe__["a" /* Pipe */].view];

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_utility__ = __webpack_require__(1);
/* harmony export (immutable) */ __webpack_exports__["a"] = pivotForm;
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }



function injectData(schema, source, target) {
	return Object.keys(source).filter(function (key) {
		return !schema.hasOwnProperty(key);
	}).reduce(function (memo, key) {
		memo[key] = source[key];
		return memo;
	}, target);
}

function expandData(schema, source) {
	var baseline = Object.keys(schema).map(function (key) {
		var node = schema[key];
		return source && source.hasOwnProperty(key) ? expandData(node, source[key]) : expandData(node);
	});

	return baseline.length ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__services_utility__["k" /* flatten */])(baseline, true) : [source];
}

function liftSchema(schema) {
	var baseline = [];

	function lift(schema, depth) {
		var derivatives = schema ? Object.keys(schema).map(function (key) {
			var node = schema[key];
			return {
				key: key,
				value: lift(node, depth + 1)
			};
		}) : [];

		if (derivatives.length > 0) if (!baseline[depth]) {
			baseline[depth] = derivatives;
		} else {
			var _baseline$depth;

			(_baseline$depth = baseline[depth]).push.apply(_baseline$depth, _toConsumableArray(derivatives));
		}

		return derivatives.length && derivatives.reduce(function (memo, d) {
			return memo + d.value;
		}, 0) || 1;
	}

	lift(schema, 0);
	return baseline;
}

function sortSchema(schema, comparator) {
	return Object.keys(schema).sort(comparator).reduce(function (memo, key) {
		memo[key] = sortSchema(schema[key], comparator);
		return memo;
	}, {});
}

function pivotForm(source, comparator) {
	if (source.schema && source.data) {
		var schema = sortSchema(source.schema, comparator);
		var rows = source.data.map(function (row) {
			return injectData(schema, row, expandData(schema, row));
		});
		var heads = liftSchema(schema);
		return { heads: heads, rows: rows };
	}

	return { heads: [], rows: [] };
}

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = pivot;
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Plan = function () {
	function Plan(schema) {
		_classCallCheck(this, Plan);

		this.isRoot = !arguments.length;
		this.current = this.schema = schema || {};
	}

	_createClass(Plan, [{
		key: "branch",
		value: function branch() {
			return new Plan(this.current);
		}
	}, {
		key: "cursor",
		value: function cursor(name) {
			var schema = this.schema;
			this.current = schema.hasOwnProperty(name) ? schema[name] : schema[name] = {};
		}
	}, {
		key: "compile",
		value: function compile(data) {
			if (this.isRoot) {
				return {
					schema: this.schema,
					data: data
				};
			} else {
				return data;
			}
		}
	}]);

	return Plan;
}();

function factory(plan) {
	return function (name) {
		plan.cursor(name);
		return function (settings) {
			return pivot(settings, plan.branch());
		};
	};
}

function pivot(settings, plan) {
	plan = plan || new Plan();

	var pivot = factory(plan);
	var aggregate = function aggregate(row) {
		return settings.selector(row).reduce(function (memo, selection) {
			var name = settings.name(selection);
			memo[name] = settings.value(selection, row, pivot(name));
			return memo;
		}, settings.factory(row));
	};

	return function (rows) {
		return plan.compile(plan.isRoot ? rows.map(aggregate) : aggregate(rows));
	};
}

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnumerableResource; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var EnumerableResource = function (_Resource) {
	_inherits(EnumerableResource, _Resource);

	function EnumerableResource() {
		var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
		var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
		var count = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

		_classCallCheck(this, EnumerableResource);

		var _this = _possibleConstructorReturn(this, (EnumerableResource.__proto__ || Object.getPrototypeOf(EnumerableResource)).call(this, data, scope));

		_this.count = count;
		return _this;
	}

	return EnumerableResource;
}(__WEBPACK_IMPORTED_MODULE_0__resource__["a" /* Resource */]);

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scroll_model__ = __webpack_require__(293);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__scroll_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scroll_view__ = __webpack_require__(294);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__scroll_view__["a"]; });



/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__range_build__ = __webpack_require__(107);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selection_model__ = __webpack_require__(295);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__selection_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selection_view__ = __webpack_require__(296);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__selection_view__["a"]; });




/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_column_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__infrastructure__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["a"] = rangeBuilder;



function rangeBuilder(model) {
	function rangeRows(startCell, endCell) {
		var rows = model.view().rows;
		if (!endCell) {
			return [rows[startCell.rowIndex]];
		}

		var startIndex = Math.min(startCell.rowIndex, endCell.rowIndex);
		var endIndex = Math.max(startCell.rowIndex, endCell.rowIndex);
		return rows.slice(startIndex, endIndex + 1);
	}

	function rangeColumns(startCell, endCell) {
		var columns = __WEBPACK_IMPORTED_MODULE_0__column_column_service__["e" /* lineView */](model.view().columns);
		if (!endCell) {
			return [columns.find(function (c) {
				return c.model === startCell.column;
			}).model];
		}

		var startIndex = Math.min(startCell.columnIndex, endCell.columnIndex);
		var endIndex = Math.max(startCell.columnIndex, endCell.columnIndex);
		return columns.slice(startIndex, endIndex + 1).map(function (column) {
			return column.model;
		});
	}

	function rangeCells(startCell, endCell) {
		if (!endCell) {
			return [{
				column: startCell.column,
				row: startCell.row
			}];
		}

		var rows = model.view().rows;
		var columns = __WEBPACK_IMPORTED_MODULE_0__column_column_service__["e" /* lineView */](model.view().columns);

		var startRowIndex = Math.min(startCell.rowIndex, endCell.rowIndex);
		var endRowIndex = Math.max(startCell.rowIndex, endCell.rowIndex);

		var startColumnIndex = Math.min(startCell.columnIndex, endCell.columnIndex);
		var endColumnIndex = Math.max(startCell.columnIndex, endCell.columnIndex);

		var rowsSelected = rows.slice(startRowIndex, endRowIndex + 1);
		var columnsSelected = columns.slice(startColumnIndex, endColumnIndex + 1);

		var items = [];
		rowsSelected.forEach(function (row) {
			columnsSelected.filter(function (column) {
				return column.model.type !== 'row-indicator';
			}).forEach(function (column) {
				items.push({
					column: column.model,
					row: row
				});
			});
		});

		return items;
	}

	function rangeMix(startCell, endCell) {
		var mixUnit = startCell.column.type === 'row-indicator' ? 'row' : 'cell';
		var range = mixUnit === 'row' ? rangeRows(startCell, endCell) : rangeCells(startCell, endCell);
		return range.map(function (item) {
			return {
				item: item,
				unit: mixUnit
			};
		});
	}

	var rangeMap = {
		'row': rangeRows,
		'column': rangeColumns,
		'cell': rangeCells,
		'mix': rangeMix
	};

	return function () {
		var selection = model.selection();
		var getRange = rangeMap[selection.unit];
		if (!getRange) {
			throw new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["c" /* AppError */]('range.builder', 'Invalid unit ' + selection.unit);
		}

		return getRange.apply(undefined, arguments);
	};
}

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selection_state__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultipleSelectionState; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var MultipleSelectionState = function (_SelectionState) {
	_inherits(MultipleSelectionState, _SelectionState);

	function MultipleSelectionState(model) {
		_classCallCheck(this, MultipleSelectionState);

		var _this = _possibleConstructorReturn(this, (MultipleSelectionState.__proto__ || Object.getPrototypeOf(MultipleSelectionState)).call(this, model));

		_this.items = new Map();
		return _this;
	}

	_createClass(MultipleSelectionState, [{
		key: 'entries',
		value: function entries() {
			return Array.from(this.items.values());
		}
	}, {
		key: 'selectCore',
		value: function selectCore(item, state) {
			if (state) {
				this.items.set(this.key(item), item);
			} else {
				this.items.delete(this.key(item));
			}
		}
	}, {
		key: 'stateCore',
		value: function stateCore(item) {
			return this.items.has(this.key(item));
		}
	}, {
		key: 'clearCore',
		value: function clearCore() {
			this.items = new Map();
		}
	}]);

	return MultipleSelectionState;
}(__WEBPACK_IMPORTED_MODULE_0__selection_state__["a" /* SelectionState */]);

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selection_state__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleSelectionState; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var SingleSelectionState = function (_SelectionState) {
	_inherits(SingleSelectionState, _SelectionState);

	function SingleSelectionState(model) {
		_classCallCheck(this, SingleSelectionState);

		var _this = _possibleConstructorReturn(this, (SingleSelectionState.__proto__ || Object.getPrototypeOf(SingleSelectionState)).call(this, model));

		_this.item = null;
		return _this;
	}

	_createClass(SingleSelectionState, [{
		key: 'entries',
		value: function entries() {
			return this.item ? [this.item] : [];
		}
	}, {
		key: 'selectCore',
		value: function selectCore(item, state) {
			if (state) {
				this.item = item;
			} else {
				this.item = null;
			}
		}
	}, {
		key: 'stateCore',
		value: function stateCore(item) {
			return this.item && this.key(item) === this.key(this.item);
		}
	}, {
		key: 'clearCore',
		value: function clearCore() {
			this.item = null;
		}
	}]);

	return SingleSelectionState;
}(__WEBPACK_IMPORTED_MODULE_0__selection_state__["a" /* SelectionState */]);

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__markup__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_css_escape__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_css_escape___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_css_escape__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return escape; });
/* harmony export (immutable) */ __webpack_exports__["b"] = sheet;



var escape = __WEBPACK_IMPORTED_MODULE_1_css_escape___default.a;

function sheet(id) {
	var sheet = document.getElementById(id);
	var getSheet = function getSheet() {
		if (!sheet) {
			sheet = document.createElement('style');
			sheet.type = 'text/css';
			sheet.id = id;
			document.getElementsByTagName('head')[0].appendChild(sheet);
		}

		return sheet;
	};

	return {
		set: function set(css) {
			var sheet = getSheet();
			sheet.innerHTML = __WEBPACK_IMPORTED_MODULE_0__markup__["a" /* build */](css);
		},
		remove: function remove() {
			if (sheet) {
				sheet.parentNode.removeChild(sheet);
			}
		}
	};
}

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isImage;
function isImage(name) {
	return !!name && name.toLowerCase().search(/png|jpg|jpeg|svg/) > -1;
}

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_css__ = __webpack_require__(110);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Monitor; });
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Element = function () {
	function Element(element, sheets) {
		_classCallCheck(this, Element);

		this.element = element;
		this.oldList = {};
		this.newList = {};
		this.sheets = sheets;
	}

	_createClass(Element, [{
		key: 'class',
		value: function _class(key, style) {
			key = __WEBPACK_IMPORTED_MODULE_0__services_css__["a" /* escape */](key);
			this.newList[key] = true;
			if (style) {
				var sheets = this.sheets;
				if (!sheets.has(key)) {
					sheets.set(key, style);
				}
			}
		}
	}]);

	return Element;
}();

var Monitor = function () {
	function Monitor(model) {
		_classCallCheck(this, Monitor);

		this.model = model;
		this.map = new Map();
		this.entries = [];
		this.newSheets = new Map();
		this.oldSheets = new Map();
	}

	_createClass(Monitor, [{
		key: 'add',
		value: function add(element) {
			this.map.set(element, null);
		}
	}, {
		key: 'remove',
		value: function remove(element) {
			this.map.delete(element);
		}
	}, {
		key: 'enter',
		value: function enter() {
			var _this = this;

			var newSheets = this.newSheets;
			return function (element) {
				var entry = _this.map.get(element);
				if (entry) {
					entry.oldList = entry.newList;
					entry.newList = {};
				} else {
					entry = new Element(element);
					_this.map.set(element, entry);
				}

				entry.sheets = newSheets;
				_this.entries.push(entry);
				return entry.class.bind(entry);
			};
		}
	}, {
		key: 'exit',
		value: function exit() {
			var entries = this.entries;
			var length = entries.length;
			while (length-- > 0) {
				var entry = entries[length];
				var classList = entry.element.classList;
				var newList = entry.newList;
				var oldList = entry.oldList;
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = Object.keys(oldList)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var cls = _step.value;

						if (!newList.hasOwnProperty(cls)) {
							classList.remove(cls);
						}
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}

				var _iteratorNormalCompletion2 = true;
				var _didIteratorError2 = false;
				var _iteratorError2 = undefined;

				try {
					for (var _iterator2 = Object.keys(newList)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
						var _cls = _step2.value;

						if (!classList.contains(_cls)) {
							classList.add(_cls);
						}
					}
				} catch (err) {
					_didIteratorError2 = true;
					_iteratorError2 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion2 && _iterator2.return) {
							_iterator2.return();
						}
					} finally {
						if (_didIteratorError2) {
							throw _iteratorError2;
						}
					}
				}
			}

			var newSheets = this.newSheets;
			var oldSheets = this.oldSheets;
			var id = this.model.grid().id;
			var _iteratorNormalCompletion3 = true;
			var _didIteratorError3 = false;
			var _iteratorError3 = undefined;

			try {
				for (var _iterator3 = oldSheets.keys()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
					var _cls2 = _step3.value;

					if (!newSheets.has(_cls2)) {
						var sheet = __WEBPACK_IMPORTED_MODULE_0__services_css__["b" /* sheet */](id + '-' + _cls2);
						sheet.remove();
					}
				}
			} catch (err) {
				_didIteratorError3 = true;
				_iteratorError3 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion3 && _iterator3.return) {
						_iterator3.return();
					}
				} finally {
					if (_didIteratorError3) {
						throw _iteratorError3;
					}
				}
			}

			var _iteratorNormalCompletion4 = true;
			var _didIteratorError4 = false;
			var _iteratorError4 = undefined;

			try {
				for (var _iterator4 = newSheets.entries()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
					var _step4$value = _slicedToArray(_step4.value, 2),
					    _cls3 = _step4$value[0],
					    style = _step4$value[1];

					if (!oldSheets.has(_cls3)) {
						var _sheet = __WEBPACK_IMPORTED_MODULE_0__services_css__["b" /* sheet */](id + '-' + _cls3);
						_sheet.set(_defineProperty({}, '.' + _cls3, style));
					}
				}
			} catch (err) {
				_didIteratorError4 = true;
				_iteratorError4 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion4 && _iterator4.return) {
						_iterator4.return();
					}
				} finally {
					if (_didIteratorError4) {
						throw _iteratorError4;
					}
				}
			}

			this.entries = [];
			this.oldSheets = newSheets;
			this.newSheets = new Map();
		}
	}]);

	return Monitor;
}();

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sort_model__ = __webpack_require__(307);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__sort_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sort_view__ = __webpack_require__(308);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__sort_view__["a"]; });



/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_model__ = __webpack_require__(309);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__style_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_view__ = __webpack_require__(310);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__style_view__["a"]; });



/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid_view_definition__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var transfer = null;

var DragService = function () {
	function DragService() {
		_classCallCheck(this, DragService);
	}

	_createClass(DragService, null, [{
		key: 'decode',
		value: function decode(source) {
			return JSON.parse(source); // eslint-disable-line angular/json-functions
		}
	}, {
		key: 'encode',
		value: function encode(source) {
			return JSON.stringify(source); // eslint-disable-line angular/json-functions
		}
	}, {
		key: 'mimeType',
		get: function get() {
			return 'application/x-' + __WEBPACK_IMPORTED_MODULE_0__grid_view_definition__["e" /* GRID_NAME */] + '+json';
		}
	}, {
		key: 'transfer',
		get: function get() {
			return transfer;
		},
		set: function set(value) {
			transfer = value;
		}
	}]);

	return DragService;
}();

/* harmony default export */ __webpack_exports__["a"] = (DragService);

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isSystem;
function isSystem(key) {
	return key && key[0] === '$';
}

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(26),
    root = __webpack_require__(21);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(69),
    setCacheAdd = __webpack_require__(495),
    setCacheHas = __webpack_require__(496);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(21);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(440),
    isArguments = __webpack_require__(50),
    isArray = __webpack_require__(14),
    isBuffer = __webpack_require__(51),
    isIndex = __webpack_require__(76),
    isTypedArray = __webpack_require__(80);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),
/* 121 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(72),
    eq = __webpack_require__(34);

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignMergeValue;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(72),
    eq = __webpack_require__(34);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(43),
    arrayEach = __webpack_require__(402),
    assignValue = __webpack_require__(123),
    baseAssign = __webpack_require__(409),
    baseAssignIn = __webpack_require__(410),
    cloneBuffer = __webpack_require__(132),
    copyArray = __webpack_require__(134),
    copySymbols = __webpack_require__(451),
    copySymbolsIn = __webpack_require__(452),
    getAllKeys = __webpack_require__(139),
    getAllKeysIn = __webpack_require__(462),
    getTag = __webpack_require__(141),
    initCloneArray = __webpack_require__(473),
    initCloneByTag = __webpack_require__(474),
    initCloneObject = __webpack_require__(143),
    isArray = __webpack_require__(14),
    isBuffer = __webpack_require__(51),
    isObject = __webpack_require__(17),
    keys = __webpack_require__(32);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(455);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(131),
    toKey = __webpack_require__(48);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(70),
    isArray = __webpack_require__(14);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(419),
    isObjectLike = __webpack_require__(24);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),
/* 129 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 130 */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(14),
    isKey = __webpack_require__(77),
    stringToPath = __webpack_require__(506),
    toString = __webpack_require__(54);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(21);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(81)(module)))

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(73);

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),
/* 134 */
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(436),
    isIterateeCall = __webpack_require__(476);

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(26);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(118),
    arraySome = __webpack_require__(406),
    cacheHas = __webpack_require__(130);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(151)))

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(127),
    getSymbols = __webpack_require__(75),
    keys = __webpack_require__(32);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(70),
    getPrototype = __webpack_require__(74),
    getSymbols = __webpack_require__(75),
    stubArray = __webpack_require__(149);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(395),
    Map = __webpack_require__(68),
    Promise = __webpack_require__(397),
    Set = __webpack_require__(117),
    WeakMap = __webpack_require__(398),
    baseGetTag = __webpack_require__(25),
    toSource = __webpack_require__(148);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),
/* 142 */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

module.exports = hasUnicode;


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(411),
    getPrototype = __webpack_require__(74),
    isPrototype = __webpack_require__(78);

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(17);

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),
/* 145 */
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),
/* 146 */
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),
/* 147 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 148 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 149 */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),
/* 150 */
/***/ (function(module, exports) {

module.exports = "<span q-grid:cell-value></span>"

/***/ }),
/* 151 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_infrastructure__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__definition__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__plugins_setup__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__plugins__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__view__ = __webpack_require__(380);







__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core__["a" /* setup */])(__WEBPACK_IMPORTED_MODULE_0__core_infrastructure__["a" /* Model */]);
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__plugins_setup__["a" /* setup */])(__WEBPACK_IMPORTED_MODULE_0__core_infrastructure__["a" /* Model */]);

/* harmony default export */ __webpack_exports__["default"] = (angular // eslint-disable-line no-undef
.module(__WEBPACK_IMPORTED_MODULE_1__definition__["a" /* MODULE_NAME */], [__WEBPACK_IMPORTED_MODULE_5__view__["a" /* coreModule */], __WEBPACK_IMPORTED_MODULE_5__view__["b" /* layoutModule */], __WEBPACK_IMPORTED_MODULE_4__plugins__["a" /* default */], 'vscroll']).name);

/***/ }),
/* 153 */,
/* 154 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(152);
__webpack_require__(154);

/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__infrastructure__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BodyModel; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var BodyModel = function BodyModel() {
	_classCallCheck(this, BodyModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["a" /* Resource */]();
	this.cache = new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["k" /* Cache */]();
};

/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column_column_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__infrastructure__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_value__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_label__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BodyView; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var BodyView = function (_View) {
	_inherits(BodyView, _View);

	function BodyView(model, table) {
		_classCallCheck(this, BodyView);

		var _this = _possibleConstructorReturn(this, (BodyView.__proto__ || Object.getPrototypeOf(BodyView)).call(this, model));

		_this.table = table;
		_this.rows = [];
		_this.columns = [];

		model.viewChanged.watch(function () {
			return _this.invalidate(model);
		});
		return _this;
	}

	_createClass(BodyView, [{
		key: 'invalidate',
		value: function invalidate(model) {
			__WEBPACK_IMPORTED_MODULE_3__infrastructure__["i" /* Log */].info('view.body', 'invalidate');

			this.invalidateRows(model);
			this.invalidateColumns(model);
		}
	}, {
		key: 'invalidateRows',
		value: function invalidateRows(model) {
			this.table.body.removeLayer('blank');
			this.rows = model.view().rows;
			if (!this.rows.length) {
				var laterState = model.layer();
				if (laterState.resource.data.hasOwnProperty('blank')) {
					var layer = this.table.body.addLayer('blank');
					layer.resource('blank', laterState.resource);
				}
			}
		}
	}, {
		key: 'invalidateColumns',
		value: function invalidateColumns(model) {
			var _this2 = this;

			var columns = model.view().columns;
			this.columns = __WEBPACK_IMPORTED_MODULE_1__column_column_service__["e" /* lineView */](columns).filter(function (c) {
				return c.model.pin === _this2.table.pin;
			});
		}
	}, {
		key: 'valueFactory',
		value: function valueFactory(column) {
			var model = this.model;
			var getValue = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__services_value__["c" /* getFactory */])(column);

			return function (row) {
				if (row instanceof __WEBPACK_IMPORTED_MODULE_4__node__["c" /* Node */]) {
					var node = row;
					var rows = model.data().rows;
					switch (node.type) {
						case 'group':
							{
								var aggregation = column.aggregation;
								if (aggregation) {
									if (!__WEBPACK_IMPORTED_MODULE_2__services__["e" /* Aggregation */].hasOwnProperty(aggregation)) {
										throw new __WEBPACK_IMPORTED_MODULE_3__infrastructure__["c" /* AppError */]('view.body', 'Aggregation ' + aggregation + ' is not registered');
									}

									var groupRows = node.rows.map(function (i) {
										return rows[i];
									});
									return __WEBPACK_IMPORTED_MODULE_2__services__["e" /* Aggregation */][aggregation](groupRows, getValue, column.aggregationOptions);
								}

								return null;
							}
						case 'row':
							{
								var rowIndex = node.rows[0];
								return getValue(rows[rowIndex], column);
							}
						default:
							throw new __WEBPACK_IMPORTED_MODULE_3__infrastructure__["c" /* AppError */]('view.body', 'Invalid node type ' + node.type);
					}
				}

				return getValue(row);
			};
		}
	}, {
		key: 'labelFactory',
		value: function labelFactory(column) {
			var getLabel = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__services_label__["c" /* getFactory */])(column);
			return function (row) {
				return getLabel(row);
			};
		}
	}, {
		key: 'value',
		value: function value(row, column, _value) {
			if (arguments.length == 3) {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__services_value__["b" /* set */])(row, column, _value);
				return;
			}

			var getValue = this.valueFactory(column);
			return getValue(row);
		}
	}, {
		key: 'label',
		value: function label(row, column, value) {
			if (arguments.length === 3) {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__services_label__["b" /* set */])(row, column, value);
				return;
			}

			var getLabel = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__services_label__["c" /* getFactory */])(column);
			return getLabel(row);
		}
	}]);

	return BodyView;
}(__WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */]);



/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_utility__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(10);
/* harmony export (immutable) */ __webpack_exports__["a"] = generate;
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }




function generate(rows, columnFactory) {
	var deep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

	if (!rows || rows.length === 0) {
		return [];
	}

	return build(rows[0], null, columnFactory, deep);
}

function build(graph, path, columnFactory, deep) {
	var props = Object.getOwnPropertyNames(graph);
	return props.reduce(function (columns, prop) {
		var value = graph[prop];
		var propPath = path ? path + '.' + prop : prop;
		var type = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__services__["g" /* getType */])(value);
		switch (type) {
			case 'array':
				{
					var column = columnFactory(type).model;
					column.key = propPath;
					column.title = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__services_utility__["r" /* startCase */])(propPath);
					column.path = propPath;
					column.value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__services__["c" /* compile */])(propPath);
					column.source = 'generation';
					columns.push(column);
					break;
				}
			case 'collection':
				{
					break;
				}
			case 'object':
				{
					if (deep) {
						columns.push.apply(columns, _toConsumableArray(build(value, propPath, columnFactory, true)));
					}
					break;
				}
			default:
				{
					var _column = columnFactory(type).model;
					_column.key = propPath;
					_column.title = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__services_utility__["r" /* startCase */])(propPath);
					_column.path = propPath;
					_column.value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__services__["c" /* compile */])(propPath);
					_column.source = 'generation';
					columns.push(_column);
					break;
				}
		}

		return columns;
	}, []);
}

/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColumnListModel; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ColumnListModel = function ColumnListModel() {
	_classCallCheck(this, ColumnListModel);

	this.generation = null; // deep | shallow
	this.index = [];
	this.columns = [];
	this.reference = {};
};

/***/ }),
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model_view__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_column_model__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(3);
/* unused harmony export ArrayColumnModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArrayColumn; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('array-cell', function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
});

__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('array-cell-edit', function (template, column) {
	return {
		model: 'edit',
		resource: column.key
	};
});

var ArrayColumnModel = function (_DataColumnModel) {
	_inherits(ArrayColumnModel, _DataColumnModel);

	function ArrayColumnModel() {
		_classCallCheck(this, ArrayColumnModel);

		return _possibleConstructorReturn(this, (ArrayColumnModel.__proto__ || Object.getPrototypeOf(ArrayColumnModel)).call(this, 'array'));
	}

	return ArrayColumnModel;
}(__WEBPACK_IMPORTED_MODULE_1__data_column_model__["a" /* DataColumnModel */]);

var ArrayColumn = function (_ColumnView) {
	_inherits(ArrayColumn, _ColumnView);

	function ArrayColumn(model) {
		_classCallCheck(this, ArrayColumn);

		return _possibleConstructorReturn(this, (ArrayColumn.__proto__ || Object.getPrototypeOf(ArrayColumn)).call(this, model));
	}

	_createClass(ArrayColumn, null, [{
		key: 'model',
		value: function model(_model) {
			return _model ? ArrayColumn.assign(_model) : new ArrayColumnModel();
		}
	}]);

	return ArrayColumn;
}(__WEBPACK_IMPORTED_MODULE_0__column_model_view__["a" /* ColumnView */]);



/***/ }),
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model_view__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_column_model__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(3);
/* unused harmony export BoolColumnModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoolColumn; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('bool-cell', function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
});

__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('bool-cell-edit', function (template, column) {
	return {
		model: 'edit',
		resource: column.key
	};
});

var BoolColumnModel = function (_DataColumnModel) {
	_inherits(BoolColumnModel, _DataColumnModel);

	function BoolColumnModel() {
		_classCallCheck(this, BoolColumnModel);

		return _possibleConstructorReturn(this, (BoolColumnModel.__proto__ || Object.getPrototypeOf(BoolColumnModel)).call(this, 'bool'));
	}

	return BoolColumnModel;
}(__WEBPACK_IMPORTED_MODULE_1__data_column_model__["a" /* DataColumnModel */]);

var BoolColumn = function (_ColumnView) {
	_inherits(BoolColumn, _ColumnView);

	function BoolColumn(model) {
		_classCallCheck(this, BoolColumn);

		return _possibleConstructorReturn(this, (BoolColumn.__proto__ || Object.getPrototypeOf(BoolColumn)).call(this, model));
	}

	_createClass(BoolColumn, null, [{
		key: 'model',
		value: function model(_model) {
			return _model ? BoolColumn.assign(_model) : new BoolColumnModel();
		}
	}]);

	return BoolColumn;
}(__WEBPACK_IMPORTED_MODULE_0__column_model_view__["a" /* ColumnView */]);



/***/ }),
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model_view__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_column_model__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(3);
/* unused harmony export DateColumnModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateColumn; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('date-cell', function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
});

__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('date-cell-edit', function (template, column) {
	return {
		model: 'edit',
		resource: column.key
	};
});

var DateColumnModel = function (_DataColumnModel) {
	_inherits(DateColumnModel, _DataColumnModel);

	function DateColumnModel() {
		_classCallCheck(this, DateColumnModel);

		var _this = _possibleConstructorReturn(this, (DateColumnModel.__proto__ || Object.getPrototypeOf(DateColumnModel)).call(this, 'date'));

		_this.format = 'yyyy/MM/dd';
		return _this;
	}

	return DateColumnModel;
}(__WEBPACK_IMPORTED_MODULE_1__data_column_model__["a" /* DataColumnModel */]);

var DateColumn = function (_ColumnView) {
	_inherits(DateColumn, _ColumnView);

	function DateColumn(model) {
		_classCallCheck(this, DateColumn);

		return _possibleConstructorReturn(this, (DateColumn.__proto__ || Object.getPrototypeOf(DateColumn)).call(this, model));
	}

	_createClass(DateColumn, null, [{
		key: 'model',
		value: function model(_model) {
			return _model ? DateColumn.assign(_model) : new DateColumnModel();
		}
	}]);

	return DateColumn;
}(__WEBPACK_IMPORTED_MODULE_0__column_model_view__["a" /* ColumnView */]);



/***/ }),
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model_view__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_column_model__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(3);
/* unused harmony export EmailColumnModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailColumn; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('email-cell', function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
});

__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('email-cell-edit', function (template, column) {
	return {
		model: 'edit',
		resource: column.key
	};
});

var EmailColumnModel = function (_DataColumnModel) {
	_inherits(EmailColumnModel, _DataColumnModel);

	function EmailColumnModel() {
		_classCallCheck(this, EmailColumnModel);

		var _this = _possibleConstructorReturn(this, (EmailColumnModel.__proto__ || Object.getPrototypeOf(EmailColumnModel)).call(this, 'email'));

		_this.editorOptions.trigger = 'custom';
		return _this;
	}

	return EmailColumnModel;
}(__WEBPACK_IMPORTED_MODULE_1__data_column_model__["a" /* DataColumnModel */]);

var EmailColumn = function (_ColumnView) {
	_inherits(EmailColumn, _ColumnView);

	function EmailColumn(model) {
		_classCallCheck(this, EmailColumn);

		return _possibleConstructorReturn(this, (EmailColumn.__proto__ || Object.getPrototypeOf(EmailColumn)).call(this, model));
	}

	_createClass(EmailColumn, null, [{
		key: 'model',
		value: function model(_model) {
			return _model ? EmailColumn.assign(_model) : new EmailColumnModel();
		}
	}]);

	return EmailColumn;
}(__WEBPACK_IMPORTED_MODULE_0__column_model_view__["a" /* ColumnView */]);



/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model_view__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_column_model__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_utility__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_file__ = __webpack_require__(111);
/* unused harmony export FileColumnModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileColumn; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('file-cell', function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
});

__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('file-cell-edit', function (template, column) {
	return {
		model: 'edit',
		resource: column.key
	};
});

var FileColumnModel = function (_DataColumnModel) {
	_inherits(FileColumnModel, _DataColumnModel);

	function FileColumnModel() {
		_classCallCheck(this, FileColumnModel);

		var _this = _possibleConstructorReturn(this, (FileColumnModel.__proto__ || Object.getPrototypeOf(FileColumnModel)).call(this, 'file'));

		_this.canUpload = __WEBPACK_IMPORTED_MODULE_3__services_utility__["f" /* yes */];
		_this.editorOptions.trigger = 'custom';

		_this.hasPreview = function (name) {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__services_file__["a" /* isImage */])(name);
		};
		return _this;
	}

	return FileColumnModel;
}(__WEBPACK_IMPORTED_MODULE_1__data_column_model__["a" /* DataColumnModel */]);

var FileColumn = function (_ColumnView) {
	_inherits(FileColumn, _ColumnView);

	function FileColumn(model) {
		_classCallCheck(this, FileColumn);

		return _possibleConstructorReturn(this, (FileColumn.__proto__ || Object.getPrototypeOf(FileColumn)).call(this, model));
	}

	_createClass(FileColumn, null, [{
		key: 'model',
		value: function model(_model) {
			return _model ? FileColumn.assign(_model) : new FileColumnModel();
		}
	}]);

	return FileColumn;
}(__WEBPACK_IMPORTED_MODULE_0__column_model_view__["a" /* ColumnView */]);



/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model_view__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column_model__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(3);
/* unused harmony export GroupColumnModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupColumn; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('group-cell', function (template, column) {
	return {
		model: template.for,
		resource: column.type
	};
});

var GroupColumnModel = function (_ColumnModel) {
	_inherits(GroupColumnModel, _ColumnModel);

	function GroupColumnModel() {
		_classCallCheck(this, GroupColumnModel);

		var _this = _possibleConstructorReturn(this, (GroupColumnModel.__proto__ || Object.getPrototypeOf(GroupColumnModel)).call(this, 'group'));

		_this.key = '$group';
		_this.title = 'Group';
		_this.offset = 20;
		_this.canEdit = false;
		_this.canSort = false;
		return _this;
	}

	return GroupColumnModel;
}(__WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* ColumnModel */]);

var GroupColumn = function (_ColumnView) {
	_inherits(GroupColumn, _ColumnView);

	function GroupColumn(model) {
		_classCallCheck(this, GroupColumn);

		return _possibleConstructorReturn(this, (GroupColumn.__proto__ || Object.getPrototypeOf(GroupColumn)).call(this, model));
	}

	_createClass(GroupColumn, null, [{
		key: 'model',
		value: function model(_model) {
			return _model ? GroupColumn.assign(_model) : new GroupColumnModel();
		}
	}]);

	return GroupColumn;
}(__WEBPACK_IMPORTED_MODULE_0__column_model_view__["a" /* ColumnView */]);



/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model_view__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_column_model__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(3);
/* unused harmony export IdColumnModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdColumn; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('id-cell', function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
});

__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('id-cell-edit', function (template, column) {
	return {
		model: 'edit',
		resource: column.key
	};
});

var IdColumnModel = function (_DataColumnModel) {
	_inherits(IdColumnModel, _DataColumnModel);

	function IdColumnModel() {
		_classCallCheck(this, IdColumnModel);

		return _possibleConstructorReturn(this, (IdColumnModel.__proto__ || Object.getPrototypeOf(IdColumnModel)).call(this, 'id'));
	}

	return IdColumnModel;
}(__WEBPACK_IMPORTED_MODULE_1__data_column_model__["a" /* DataColumnModel */]);

var IdColumn = function (_ColumnView) {
	_inherits(IdColumn, _ColumnView);

	function IdColumn(model) {
		_classCallCheck(this, IdColumn);

		return _possibleConstructorReturn(this, (IdColumn.__proto__ || Object.getPrototypeOf(IdColumn)).call(this, model));
	}

	_createClass(IdColumn, null, [{
		key: 'model',
		value: function model(_model) {
			return _model ? IdColumn.assign(_model) : new IdColumnModel();
		}
	}]);

	return IdColumn;
}(__WEBPACK_IMPORTED_MODULE_0__column_model_view__["a" /* ColumnView */]);



/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model_view__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_column_model__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_utility__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_file__ = __webpack_require__(111);
/* unused harmony export ImageColumnModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageColumn; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('image-cell', function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
});

__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('image-cell-edit', function (template, column) {
	return {
		model: 'edit',
		resource: column.key
	};
});

var ImageColumnModel = function (_DataColumnModel) {
	_inherits(ImageColumnModel, _DataColumnModel);

	function ImageColumnModel() {
		_classCallCheck(this, ImageColumnModel);

		var _this = _possibleConstructorReturn(this, (ImageColumnModel.__proto__ || Object.getPrototypeOf(ImageColumnModel)).call(this, 'image'));

		_this.canUpload = __WEBPACK_IMPORTED_MODULE_3__services_utility__["f" /* yes */];

		_this.hasPreview = function (name) {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__services_file__["a" /* isImage */])(name);
		};
		return _this;
	}

	return ImageColumnModel;
}(__WEBPACK_IMPORTED_MODULE_1__data_column_model__["a" /* DataColumnModel */]);

var ImageColumn = function (_ColumnView) {
	_inherits(ImageColumn, _ColumnView);

	function ImageColumn(model) {
		_classCallCheck(this, ImageColumn);

		return _possibleConstructorReturn(this, (ImageColumn.__proto__ || Object.getPrototypeOf(ImageColumn)).call(this, model));
	}

	_createClass(ImageColumn, null, [{
		key: 'model',
		value: function model(_model) {
			return _model ? ImageColumn.assign(_model) : new ImageColumnModel();
		}
	}]);

	return ImageColumn;
}(__WEBPACK_IMPORTED_MODULE_0__column_model_view__["a" /* ColumnView */]);



/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array_column__ = __webpack_require__(200);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__array_column__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bool_column__ = __webpack_require__(201);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__bool_column__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__date_column__ = __webpack_require__(202);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__date_column__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__email_column__ = __webpack_require__(203);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__email_column__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__file_column__ = __webpack_require__(204);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_4__file_column__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__group_column__ = __webpack_require__(205);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_5__group_column__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__id_column__ = __webpack_require__(206);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_6__id_column__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__image_column__ = __webpack_require__(207);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_7__image_column__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__number_column__ = __webpack_require__(209);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_8__number_column__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pad_column__ = __webpack_require__(210);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_9__pad_column__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__password_column__ = __webpack_require__(211);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_10__password_column__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pivot_column__ = __webpack_require__(212);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_11__pivot_column__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__reference_column__ = __webpack_require__(213);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_12__reference_column__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__row_indicator_column__ = __webpack_require__(214);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_13__row_indicator_column__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__row_number_column__ = __webpack_require__(215);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_14__row_number_column__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__select_column__ = __webpack_require__(216);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_15__select_column__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__text_column__ = __webpack_require__(217);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_16__text_column__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__time_column__ = __webpack_require__(218);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_17__time_column__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__url_column__ = __webpack_require__(219);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_18__url_column__["a"]; });




















/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model_view__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_column_model__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(3);
/* unused harmony export NumberColumnModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NumberColumn; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('number-cell', function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
});

__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('number-cell-edit', function (template, column) {
	return {
		model: 'edit',
		resource: column.key
	};
});

var NumberColumnModel = function (_DataColumnModel) {
	_inherits(NumberColumnModel, _DataColumnModel);

	function NumberColumnModel() {
		_classCallCheck(this, NumberColumnModel);

		var _this = _possibleConstructorReturn(this, (NumberColumnModel.__proto__ || Object.getPrototypeOf(NumberColumnModel)).call(this, 'number'));

		_this.format = '';
		return _this;
	}

	return NumberColumnModel;
}(__WEBPACK_IMPORTED_MODULE_1__data_column_model__["a" /* DataColumnModel */]);

var NumberColumn = function (_ColumnView) {
	_inherits(NumberColumn, _ColumnView);

	function NumberColumn(model) {
		_classCallCheck(this, NumberColumn);

		return _possibleConstructorReturn(this, (NumberColumn.__proto__ || Object.getPrototypeOf(NumberColumn)).call(this, model));
	}

	_createClass(NumberColumn, null, [{
		key: 'model',
		value: function model(_model) {
			return _model ? NumberColumn.assign(_model) : new NumberColumnModel();
		}
	}]);

	return NumberColumn;
}(__WEBPACK_IMPORTED_MODULE_0__column_model_view__["a" /* ColumnView */]);



/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model_view__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column_model__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(3);
/* unused harmony export PadColumnModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PadColumn; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('pad-cell', function (template) {
	return {
		model: template.for,
		resource: template.for + '.' + template.type
	};
});

var PadColumnModel = function (_ColumnModel) {
	_inherits(PadColumnModel, _ColumnModel);

	function PadColumnModel() {
		_classCallCheck(this, PadColumnModel);

		var _this = _possibleConstructorReturn(this, (PadColumnModel.__proto__ || Object.getPrototypeOf(PadColumnModel)).call(this, 'pad'));

		_this.key = '$pad';
		_this.title = '';
		_this.canEdit = false;
		_this.canSort = false;
		_this.canResize = false;
		_this.canHighlight = false;
		_this.canFocus = false;
		_this.source = 'generation';
		return _this;
	}

	return PadColumnModel;
}(__WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* ColumnModel */]);

var PadColumn = function (_ColumnView) {
	_inherits(PadColumn, _ColumnView);

	function PadColumn(model) {
		_classCallCheck(this, PadColumn);

		return _possibleConstructorReturn(this, (PadColumn.__proto__ || Object.getPrototypeOf(PadColumn)).call(this, model));
	}

	_createClass(PadColumn, null, [{
		key: 'model',
		value: function model(_model) {
			return _model ? PadColumn.assign(_model) : new PadColumnModel();
		}
	}]);

	return PadColumn;
}(__WEBPACK_IMPORTED_MODULE_0__column_model_view__["a" /* ColumnView */]);



/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model_view__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_column_model__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(3);
/* unused harmony export PasswordColumnModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordColumn; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('password-cell', function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
});

__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('password-cell-edit', function (template, column) {
	return {
		model: 'edit',
		resource: column.key
	};
});

var PasswordColumnModel = function (_DataColumnModel) {
	_inherits(PasswordColumnModel, _DataColumnModel);

	function PasswordColumnModel() {
		_classCallCheck(this, PasswordColumnModel);

		var _this = _possibleConstructorReturn(this, (PasswordColumnModel.__proto__ || Object.getPrototypeOf(PasswordColumnModel)).call(this, 'password'));

		_this.canSort = false;
		_this.canFilter = false;
		return _this;
	}

	return PasswordColumnModel;
}(__WEBPACK_IMPORTED_MODULE_1__data_column_model__["a" /* DataColumnModel */]);

var PasswordColumn = function (_ColumnView) {
	_inherits(PasswordColumn, _ColumnView);

	function PasswordColumn(model) {
		_classCallCheck(this, PasswordColumn);

		return _possibleConstructorReturn(this, (PasswordColumn.__proto__ || Object.getPrototypeOf(PasswordColumn)).call(this, model));
	}

	_createClass(PasswordColumn, null, [{
		key: 'model',
		value: function model(_model) {
			return _model ? PasswordColumn.assign(_model) : new PasswordColumnModel();
		}
	}]);

	return PasswordColumn;
}(__WEBPACK_IMPORTED_MODULE_0__column_model_view__["a" /* ColumnView */]);



/***/ }),
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model_view__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column_model__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(3);
/* unused harmony export PivotColumnModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PivotColumn; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('pivot-cell', function (template) {
	return {
		model: 'pivot',
		resource: template.for
	};
});

var PivotColumnModel = function (_ColumnModel) {
	_inherits(PivotColumnModel, _ColumnModel);

	function PivotColumnModel() {
		_classCallCheck(this, PivotColumnModel);

		var _this = _possibleConstructorReturn(this, (PivotColumnModel.__proto__ || Object.getPrototypeOf(PivotColumnModel)).call(this, 'pivot'));

		_this.key = '$pivot';
		_this.title = 'Pivot';
		_this.source = 'generation';
		_this.canEdit = false;
		_this.canSort = false;
		_this.canResize = false;
		_this.canHighlight = false;
		_this.width = 60;
		_this.rowIndex = 0;
		return _this;
	}

	return PivotColumnModel;
}(__WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* ColumnModel */]);

var PivotColumn = function (_ColumnView) {
	_inherits(PivotColumn, _ColumnView);

	function PivotColumn(model) {
		_classCallCheck(this, PivotColumn);

		return _possibleConstructorReturn(this, (PivotColumn.__proto__ || Object.getPrototypeOf(PivotColumn)).call(this, model));
	}

	_createClass(PivotColumn, null, [{
		key: 'model',
		value: function model(_model) {
			return _model ? PivotColumn.assign(_model) : new PivotColumnModel();
		}
	}]);

	return PivotColumn;
}(__WEBPACK_IMPORTED_MODULE_0__column_model_view__["a" /* ColumnView */]);



/***/ }),
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model_view__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_column_model__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__infrastructure__ = __webpack_require__(0);
/* unused harmony export ReferenceColumnModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReferenceColumn; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('reference-cell', function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
});

__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('reference-cell-edit', function (template, column) {
	return {
		model: 'edit',
		resource: column.key
	};
});

var ReferenceColumnModel = function (_DataColumnModel) {
	_inherits(ReferenceColumnModel, _DataColumnModel);

	function ReferenceColumnModel() {
		_classCallCheck(this, ReferenceColumnModel);

		var _this = _possibleConstructorReturn(this, (ReferenceColumnModel.__proto__ || Object.getPrototypeOf(ReferenceColumnModel)).call(this, 'reference'));

		_this.editorOptions.trigger = 'custom';
		_this.editorOptions.modelFactory = function () {
			return new __WEBPACK_IMPORTED_MODULE_3__infrastructure__["a" /* Model */]();
		};
		return _this;
	}

	return ReferenceColumnModel;
}(__WEBPACK_IMPORTED_MODULE_1__data_column_model__["a" /* DataColumnModel */]);

var ReferenceColumn = function (_ColumnView) {
	_inherits(ReferenceColumn, _ColumnView);

	function ReferenceColumn(model) {
		_classCallCheck(this, ReferenceColumn);

		return _possibleConstructorReturn(this, (ReferenceColumn.__proto__ || Object.getPrototypeOf(ReferenceColumn)).call(this, model));
	}

	_createClass(ReferenceColumn, null, [{
		key: 'model',
		value: function model(_model) {
			return _model ? ReferenceColumn.assign(_model) : new ReferenceColumnModel();
		}
	}]);

	return ReferenceColumn;
}(__WEBPACK_IMPORTED_MODULE_0__column_model_view__["a" /* ColumnView */]);



/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model_view__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column_model__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(3);
/* unused harmony export RowIndicatorColumnModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RowIndicatorColumn; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('row-indicator-cell', function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
});

var RowIndicatorColumnModel = function (_ColumnModel) {
	_inherits(RowIndicatorColumnModel, _ColumnModel);

	function RowIndicatorColumnModel() {
		_classCallCheck(this, RowIndicatorColumnModel);

		var _this = _possibleConstructorReturn(this, (RowIndicatorColumnModel.__proto__ || Object.getPrototypeOf(RowIndicatorColumnModel)).call(this, 'row-indicator'));

		_this.key = '$row.indicator';
		_this.title = 'Row Indicator';
		_this.canEdit = false;
		_this.canSort = false;
		_this.canResize = false;
		_this.canMove = false;
		_this.canFocus = false;
		_this.canHighlight = false;
		_this.pin = 'left';
		return _this;
	}

	return RowIndicatorColumnModel;
}(__WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* ColumnModel */]);

var RowIndicatorColumn = function (_ColumnView) {
	_inherits(RowIndicatorColumn, _ColumnView);

	function RowIndicatorColumn(model) {
		_classCallCheck(this, RowIndicatorColumn);

		return _possibleConstructorReturn(this, (RowIndicatorColumn.__proto__ || Object.getPrototypeOf(RowIndicatorColumn)).call(this, model));
	}

	_createClass(RowIndicatorColumn, null, [{
		key: 'model',
		value: function model(_model) {
			return _model ? RowIndicatorColumn.assign(_model) : new RowIndicatorColumnModel();
		}
	}]);

	return RowIndicatorColumn;
}(__WEBPACK_IMPORTED_MODULE_0__column_model_view__["a" /* ColumnView */]);



/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model_view__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column_model__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(3);
/* unused harmony export RowNumberColumnModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RowNumberColumn; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('row-number-cell', function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
});

var RowNumberColumnModel = function (_ColumnModel) {
	_inherits(RowNumberColumnModel, _ColumnModel);

	function RowNumberColumnModel() {
		_classCallCheck(this, RowNumberColumnModel);

		var _this = _possibleConstructorReturn(this, (RowNumberColumnModel.__proto__ || Object.getPrototypeOf(RowNumberColumnModel)).call(this, 'row-number'));

		_this.key = '$row.number';
		_this.title = '#';
		_this.canEdit = false;
		_this.canResize = false;
		_this.canMove = false;
		_this.canHighlight = false;
		return _this;
	}

	return RowNumberColumnModel;
}(__WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* ColumnModel */]);

var RowNumberColumn = function (_ColumnView) {
	_inherits(RowNumberColumn, _ColumnView);

	function RowNumberColumn(model) {
		_classCallCheck(this, RowNumberColumn);

		return _possibleConstructorReturn(this, (RowNumberColumn.__proto__ || Object.getPrototypeOf(RowNumberColumn)).call(this, model));
	}

	_createClass(RowNumberColumn, null, [{
		key: 'model',
		value: function model(_model) {
			return _model ? RowNumberColumn.assign(_model) : new RowNumberColumnModel();
		}
	}]);

	return RowNumberColumn;
}(__WEBPACK_IMPORTED_MODULE_0__column_model_view__["a" /* ColumnView */]);



/***/ }),
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model_view__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column_model__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(3);
/* unused harmony export SelectColumnModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectColumn; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('select-cell', function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
});

var SelectColumnModel = function (_ColumnModel) {
	_inherits(SelectColumnModel, _ColumnModel);

	function SelectColumnModel() {
		_classCallCheck(this, SelectColumnModel);

		var _this = _possibleConstructorReturn(this, (SelectColumnModel.__proto__ || Object.getPrototypeOf(SelectColumnModel)).call(this, 'select'));

		_this.key = '$select';
		_this.title = 'Select';
		_this.canEdit = false;
		_this.canResize = false;
		return _this;
	}

	return SelectColumnModel;
}(__WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* ColumnModel */]);

var SelectColumn = function (_ColumnView) {
	_inherits(SelectColumn, _ColumnView);

	function SelectColumn(model) {
		_classCallCheck(this, SelectColumn);

		return _possibleConstructorReturn(this, (SelectColumn.__proto__ || Object.getPrototypeOf(SelectColumn)).call(this, model));
	}

	_createClass(SelectColumn, null, [{
		key: 'model',
		value: function model(_model) {
			return _model ? SelectColumn.assign(_model) : new SelectColumnModel();
		}
	}]);

	return SelectColumn;
}(__WEBPACK_IMPORTED_MODULE_0__column_model_view__["a" /* ColumnView */]);



/***/ }),
/* 217 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model_view__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_column_model__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(3);
/* unused harmony export TextColumnModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextColumn; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('text-cell', function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
});

__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('text-cell-edit', function (template, column) {
	return {
		model: 'edit',
		resource: column.key
	};
});

__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('text-area-cell-edit', function (template, column) {
	return {
		model: 'edit',
		resource: column.key
	};
});

var TextColumnModel = function (_DataColumnModel) {
	_inherits(TextColumnModel, _DataColumnModel);

	function TextColumnModel() {
		_classCallCheck(this, TextColumnModel);

		var _this = _possibleConstructorReturn(this, (TextColumnModel.__proto__ || Object.getPrototypeOf(TextColumnModel)).call(this, 'text'));

		_this.maxLength = 140;
		return _this;
	}

	return TextColumnModel;
}(__WEBPACK_IMPORTED_MODULE_1__data_column_model__["a" /* DataColumnModel */]);

var TextColumn = function (_ColumnView) {
	_inherits(TextColumn, _ColumnView);

	function TextColumn(model) {
		_classCallCheck(this, TextColumn);

		return _possibleConstructorReturn(this, (TextColumn.__proto__ || Object.getPrototypeOf(TextColumn)).call(this, model));
	}

	_createClass(TextColumn, null, [{
		key: 'model',
		value: function model(_model) {
			return _model ? TextColumn.assign(_model) : new TextColumnModel();
		}
	}]);

	return TextColumn;
}(__WEBPACK_IMPORTED_MODULE_0__column_model_view__["a" /* ColumnView */]);



/***/ }),
/* 218 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model_view__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_column_model__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(3);
/* unused harmony export TimeColumnModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeColumn; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('time-cell', function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
});

__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('time-cell-edit', function (template, column) {
	return {
		model: 'edit',
		resource: column.key
	};
});

var TimeColumnModel = function (_DataColumnModel) {
	_inherits(TimeColumnModel, _DataColumnModel);

	function TimeColumnModel() {
		_classCallCheck(this, TimeColumnModel);

		var _this = _possibleConstructorReturn(this, (TimeColumnModel.__proto__ || Object.getPrototypeOf(TimeColumnModel)).call(this, 'time'));

		_this.format = 'h:mm a';
		return _this;
	}

	return TimeColumnModel;
}(__WEBPACK_IMPORTED_MODULE_1__data_column_model__["a" /* DataColumnModel */]);

var TimeColumn = function (_ColumnView) {
	_inherits(TimeColumn, _ColumnView);

	function TimeColumn(model) {
		_classCallCheck(this, TimeColumn);

		return _possibleConstructorReturn(this, (TimeColumn.__proto__ || Object.getPrototypeOf(TimeColumn)).call(this, model));
	}

	_createClass(TimeColumn, null, [{
		key: 'model',
		value: function model(_model) {
			return _model ? TimeColumn.assign(_model) : new TimeColumnModel();
		}
	}]);

	return TimeColumn;
}(__WEBPACK_IMPORTED_MODULE_0__column_model_view__["a" /* ColumnView */]);



/***/ }),
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model_view__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_column_model__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(3);
/* unused harmony export UrlColumnModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrlColumn; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('url-cell', function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
});

__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('url-cell-edit', function (template, column) {
	return {
		model: 'edit',
		resource: column.key
	};
});

var UrlColumnModel = function (_DataColumnModel) {
	_inherits(UrlColumnModel, _DataColumnModel);

	function UrlColumnModel() {
		_classCallCheck(this, UrlColumnModel);

		var _this = _possibleConstructorReturn(this, (UrlColumnModel.__proto__ || Object.getPrototypeOf(UrlColumnModel)).call(this, 'url'));

		_this.editorOptions.trigger = 'button';
		return _this;
	}

	return UrlColumnModel;
}(__WEBPACK_IMPORTED_MODULE_1__data_column_model__["a" /* DataColumnModel */]);

var UrlColumn = function (_ColumnView) {
	_inherits(UrlColumn, _ColumnView);

	function UrlColumn(model) {
		_classCallCheck(this, UrlColumn);

		return _possibleConstructorReturn(this, (UrlColumn.__proto__ || Object.getPrototypeOf(UrlColumn)).call(this, model));
	}

	_createClass(UrlColumn, null, [{
		key: 'model',
		value: function model(_model) {
			return _model ? UrlColumn.assign(_model) : new UrlColumnModel();
		}
	}]);

	return UrlColumn;
}(__WEBPACK_IMPORTED_MODULE_0__column_model_view__["a" /* ColumnView */]);



/***/ }),
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column_factory__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__infrastructure__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__column_column_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_utility__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__column_list__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pipe_units__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColumnView; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var ColumnView = function (_View) {
	_inherits(ColumnView, _View);

	function ColumnView(model, service) {
		_classCallCheck(this, ColumnView);

		var _this = _possibleConstructorReturn(this, (ColumnView.__proto__ || Object.getPrototypeOf(ColumnView)).call(this, model));

		var factory = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__column_factory__["a" /* columnFactory */])(model);

		// this should be first place(with column.pipe) where columns are processed
		model.dataChanged.watch(function (e) {
			if (e.tag.source === 'column.list') {
				return;
			}

			var needInvalidate = false;
			if (e.hasChanges('columns')) {
				e.state.columns.forEach(function (c) {
					return factory(c.type || 'text', c);
				});
			}

			var generation = model.columnList().generation;
			if (generation) {
				if (e.hasChanges('rows')) {
					_this.updateOn(generation);
					needInvalidate = true;
				}
			} else {
				if (e.hasChanges('columns')) {
					_this.update();
					needInvalidate = true;
				}
			}

			if (needInvalidate) {
				service.invalidate('column.view', e.changes, __WEBPACK_IMPORTED_MODULE_7__pipe_units__["a" /* PipeUnit */].column);
			}
		});

		model.columnListChanged.watch(function (e) {
			if (e.hasChanges('columns')) {
				_this.update();
				service.invalidate('column.view', e.changes, __WEBPACK_IMPORTED_MODULE_7__pipe_units__["a" /* PipeUnit */].column);
			}
		});
		return _this;
	}

	_createClass(ColumnView, [{
		key: 'updateOn',
		value: function updateOn(generation) {
			var model = this.model;
			var data = model.data;

			var columns = [];
			var createColumn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__column_factory__["a" /* columnFactory */])(model);
			var rows = data().rows;
			switch (generation) {
				case 'deep':
					columns.push.apply(columns, _toConsumableArray(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__column_list__["a" /* generate */])(rows, createColumn, true)));
					break;
				case 'shallow':
					columns.push.apply(columns, _toConsumableArray(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__column_list__["a" /* generate */])(rows, createColumn, false)));
					break;
				default:
					throw new __WEBPACK_IMPORTED_MODULE_2__infrastructure__["c" /* AppError */]('column.list', 'Invalid generation mode "' + generation + '"');
			}

			this.update(columns);
		}
	}, {
		key: 'update',
		value: function update(generatedColumns) {
			var model = this.model;
			var data = model.data;
			var columns = Array.from(data().columns);
			var statistics = [];
			var templateColumns = model.columnList().columns;

			if (arguments.length) {
				var generatedColumnMap = __WEBPACK_IMPORTED_MODULE_4__column_column_service__["a" /* map */](generatedColumns);
				var templateColumnMap = __WEBPACK_IMPORTED_MODULE_4__column_column_service__["a" /* map */](templateColumns);
				var dataColumns = columns.filter(function (c) {
					return !generatedColumnMap.hasOwnProperty(c.key) && !templateColumnMap.hasOwnProperty(c.key);
				});
				columns = generatedColumns;
				statistics.push(this.merge(columns, dataColumns));
			}

			statistics.push(this.merge(columns, templateColumns));
			if (this.hasChanges(statistics)) {
				var tag = {
					source: 'column.list',
					behavior: 'core'
				};

				data({ columns: columns }, tag);
			}
		}
	}, {
		key: 'merge',
		value: function merge(left, right) {
			var doMerge = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__services__["h" /* merge */])({
				equals: function equals(l, r) {
					return l.key === r.key;
				},
				update: function update(l, r) {
					return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__services_utility__["g" /* assignWith */])(l, r, function (source, target) {
						return !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__services_utility__["d" /* isUndefined */])(target) && target !== null ? target : source;
					});
				},
				insert: function insert(r, left) {
					return left.push(r);
				},
				remove: __WEBPACK_IMPORTED_MODULE_5__services_utility__["b" /* noop */]
			});

			return doMerge(left, right);
		}
	}, {
		key: 'hasChanges',
		value: function hasChanges(statistics) {
			return statistics.some(function (st) {
				return st.inserted || st.update || st.removed;
			});
		}
	}]);

	return ColumnView;
}(__WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */]);

/***/ }),
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_view__ = __webpack_require__(220);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__column_view__["a"]; });


/***/ }),
/* 222 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipe_units_pipe_unit__ = __webpack_require__(100);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataModel; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var DataModel = function DataModel() {
	_classCallCheck(this, DataModel);

	this.rows = [];
	this.columns = [];
	this.pipe = __WEBPACK_IMPORTED_MODULE_0__pipe_units_pipe_unit__["a" /* PipeUnit */].default;
	this.triggers = {
		'data': ['rows'],
		'pagination': ['current', 'size'],
		'sort': ['by'],
		'filter': ['by'],
		'group': ['by'],
		'pivot': ['by']
	};
};

/***/ }),
/* 223 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_model__ = __webpack_require__(222);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__data_model__["a"]; });


/***/ }),
/* 224 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragModel; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DragModel = function DragModel() {
	_classCallCheck(this, DragModel);

	this.isActive = false;
};

/***/ }),
/* 225 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__drag_model__ = __webpack_require__(224);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__drag_model__["a"]; });


/***/ }),
/* 226 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit_cell_editor__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_value__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_label__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditCellView; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }






var EditCellView = function () {
	function EditCellView(model, table, commandManager) {
		_classCallCheck(this, EditCellView);

		this.model = model;
		this.table = table;

		this.editor = __WEBPACK_IMPORTED_MODULE_1__edit_cell_editor__["a" /* CellEditor */].empty;

		var shortcut = new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["j" /* Shortcut */](table, commandManager);
		var commands = this.commands;
		this.shortcutOff = shortcut.register('editCellNavigation', commands);

		this.enter = commands.get('enter');
		this.commit = commands.get('commit');
		this.cancel = commands.get('cancel');
		this.reset = commands.get('reset');
	}

	_createClass(EditCellView, [{
		key: 'contextFactory',
		value: function contextFactory(cell, value, label) {
			return {
				column: cell.column,
				row: cell.row,
				columnIndex: cell.columnIndex,
				rowIndex: cell.rowIndex,
				oldValue: cell.value,
				newValue: arguments.length === 2 ? value : cell.value,
				oldLabel: cell.label,
				newLabel: arguments.length === 3 ? label : cell.label,
				unit: 'cell',
				valueFactory: __WEBPACK_IMPORTED_MODULE_2__services_value__["c" /* getFactory */],
				labelFactory: __WEBPACK_IMPORTED_MODULE_3__services_label__["c" /* getFactory */]
			};
		}
	}, {
		key: 'commitShortcut',
		value: function commitShortcut() {
			var model = this.model;
			var commitShortcuts = model.edit().commitShortcuts;
			var cell = model.navigation().cell;
			if (cell && commitShortcuts.hasOwnProperty(cell.column.type)) {
				return commitShortcuts[cell.column.type];
			}

			return commitShortcuts['$default'];
		}
	}, {
		key: 'destroy',
		value: function destroy() {
			this.editor.reset();
			this.shortcutOff();
		}
	}, {
		key: 'commands',
		get: function get() {
			var _this = this;

			var model = this.model;
			var table = this.table;
			var commands = {
				enter: new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["g" /* Command */]({
					shortcut: 'F2|Enter',
					canExecute: function canExecute(cell) {
						cell = cell || model.navigation().cell;
						return cell && cell.column.canEdit && model.edit().mode === 'cell' && model.edit().state === 'view' && model.edit().enter.canExecute(_this.contextFactory(cell));
					},
					execute: function execute(cell, e) {
						__WEBPACK_IMPORTED_MODULE_0__infrastructure__["i" /* Log */].info('cell.edit', 'edit mode');
						if (e) {
							e.stopImmediatePropagation();
						}

						if (cell) {
							if (model.navigation().cell !== cell) {
								model.navigation({ cell: cell });
							}
						} else {
							cell = model.navigation().cell;
						}

						if (cell && model.edit().enter.execute(_this.contextFactory(cell, cell.value, cell.label)) !== false) {
							_this.editor = new __WEBPACK_IMPORTED_MODULE_1__edit_cell_editor__["a" /* CellEditor */](cell);
							model.edit({ state: 'edit' });
							cell.mode('edit');
							return true;
						}

						return false;
					}
				}),
				commit: new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["g" /* Command */]({
					shortcut: this.commitShortcut.bind(this),
					// TODO: add validation support
					canExecute: function canExecute(cell) {
						cell = cell || model.navigation().cell;
						return cell && cell.column.canEdit && model.edit().mode === 'cell' && model.edit().state === 'edit' && model.edit().commit.canExecute(_this.contextFactory(cell));
					},
					execute: function execute(cell, e) {
						__WEBPACK_IMPORTED_MODULE_0__infrastructure__["i" /* Log */].info('cell.edit', 'commit');
						if (e) {
							e.stopImmediatePropagation();
						}

						cell = cell || model.navigation().cell;
						if (cell && model.edit().commit.execute(_this.contextFactory(cell, _this.value, _this.label)) !== false) {
							_this.editor.commit();
							_this.editor = __WEBPACK_IMPORTED_MODULE_1__edit_cell_editor__["a" /* CellEditor */].empty;

							model.edit({ state: 'view' });
							cell.mode('view');
							table.focus();
							return true;
						}

						return false;
					}
				}),
				cancel: new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["g" /* Command */]({
					shortcut: 'Escape',
					canExecute: function canExecute(cell) {
						cell = cell || model.navigation().cell;
						return cell && cell.column.canEdit && model.edit().mode === 'cell' && model.edit().state === 'edit' && model.edit().cancel.canExecute(_this.contextFactory(cell, _this.value, _this.label));
					},
					execute: function execute(cell, e) {
						__WEBPACK_IMPORTED_MODULE_0__infrastructure__["i" /* Log */].info('cell.edit', 'cancel');
						if (e) {
							e.stopImmediatePropagation();
						}

						cell = cell || model.navigation().cell;
						if (cell && model.edit().cancel.execute(_this.contextFactory(cell, _this.value, _this.label)) !== false) {
							_this.editor.reset();
							_this.editor = __WEBPACK_IMPORTED_MODULE_1__edit_cell_editor__["a" /* CellEditor */].empty;

							model.edit({ state: 'view' });
							cell.mode('view');
							table.focus();
							return true;
						}

						return false;
					}
				}),
				reset: new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["g" /* Command */]({
					canExecute: function canExecute(cell) {
						cell = cell || model.navigation().cell;
						return cell && cell.column.canEdit && model.edit().mode === 'cell' && model.edit().state === 'edit' && model.edit().reset.canExecute(_this.contextFactory(cell, _this.value, _this.label));
					},
					execute: function execute(cell, e) {
						__WEBPACK_IMPORTED_MODULE_0__infrastructure__["i" /* Log */].info('cell.edit', 'reset');
						if (e) {
							e.stopImmediatePropagation();
						}

						cell = cell || model.navigation().cell;
						if (cell && model.edit().reset.execute(_this.contextFactory(cell, _this.value, _this.label)) !== false) {
							_this.editor.reset();
							return true;
						}

						return false;
					}
				})
			};
			return new Map(Object.entries(commands));
		}
	}, {
		key: 'fetch',
		get: function get() {
			return this.editor.fetch;
		}
	}, {
		key: 'value',
		get: function get() {
			return this.editor.value;
		},
		set: function set(value) {
			this.editor.value = value;
		}
	}, {
		key: 'label',
		get: function get() {
			return this.editor.label;
		},
		set: function set(label) {
			this.editor.label = label;
		}
	}, {
		key: 'options',
		get: function get() {
			return this.editor.options;
		}
	}]);

	return EditCellView;
}();

/***/ }),
/* 227 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__infrastructure__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditModel; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var EditModel = function EditModel() {
	_classCallCheck(this, EditModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["a" /* Resource */]();
	this.mode = null; // cell | row
	this.state = 'view'; // view | edit
	this.enter = new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["g" /* Command */]();
	this.commit = new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["g" /* Command */]();
	this.cancel = new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["g" /* Command */]();
	this.reset = new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["g" /* Command */]();
	this.commitShortcuts = {
		'$default': 'tab|shift+tab|enter',
		'text': 'enter',
		'password': 'ctrl+s',
		'number': 'ctrl+s',
		'date': 'ctrl+s',
		'array': 'ctrl+s'
	};
};

/***/ }),
/* 228 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit_row_editor__ = __webpack_require__(85);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditRowView; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var EditRowView = function () {
	function EditRowView(model, table, commandManager) {
		_classCallCheck(this, EditRowView);

		this.model = model;
		this.table = table;
		this.editor = __WEBPACK_IMPORTED_MODULE_1__edit_row_editor__["a" /* RowEditor */].empty;

		var shortcut = new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["j" /* Shortcut */](table, commandManager);
		var commands = this.commands;
		this.shortcutOff = shortcut.register('editRowNavigation', commands);

		this.enter = commands.get('enter');
		this.commit = commands.get('commit');
		this.cancel = commands.get('cancel');
		this.reset = commands.get('reset');
	}

	_createClass(EditRowView, [{
		key: 'contextFactory',
		value: function contextFactory(row) {
			return {
				row: row,
				current: this.editor.current,
				unit: 'row'
			};
		}
	}, {
		key: 'commitShortcut',
		value: function commitShortcut() {
			var model = this.model;
			var commitShortcuts = model.edit().commitShortcuts;
			var cell = model.navigation().cell;
			if (cell && commitShortcuts.hasOwnProperty(cell.column.type)) {
				return commitShortcuts[cell.column.type];
			}

			return commitShortcuts['$default'];
		}
	}, {
		key: 'destroy',
		value: function destroy() {
			this.shortcutOff();
		}
	}, {
		key: 'commands',
		get: function get() {
			var _this = this;

			var model = this.model;
			var commands = {
				enter: new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["g" /* Command */]({
					shortcut: 'F2|Enter',
					canExecute: function canExecute(row) {
						row = row || model.navigation().row;
						return row && model.edit().mode === 'row' && model.edit().state === 'view' && model.edit().enter.canExecute(_this.contextFactory(row));
					},
					execute: function execute(row, e) {
						__WEBPACK_IMPORTED_MODULE_0__infrastructure__["i" /* Log */].info('row.edit', 'edit mode');
						if (e) {
							e.stopImmediatePropagation();
						}

						var columns = _this.model.data().columns;
						_this.editor = new __WEBPACK_IMPORTED_MODULE_1__edit_row_editor__["a" /* RowEditor */](row, columns);
						model.edit({ state: 'edit' });
					}
				}),
				commit: new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["g" /* Command */]({
					shortcut: this.commitShortcut.bind(this),
					// TODO: add validation support
					canExecute: function canExecute(row) {
						row = row || model.navigation().row;
						return row && model.edit().mode === 'row' && model.edit().state === 'edit' && model.edit().commit.canExecute(_this.contextFactory(row));
					},
					execute: function execute(cell, e) {
						__WEBPACK_IMPORTED_MODULE_0__infrastructure__["i" /* Log */].info('row.edit', 'commit');
						if (e) {
							e.stopImmediatePropagation();
						}

						_this.editor.commit();
						_this.editor = __WEBPACK_IMPORTED_MODULE_1__edit_row_editor__["a" /* RowEditor */].empty;
						model.edit({ state: 'view' });
					}
				}),
				cancel: new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["g" /* Command */]({
					shortcut: 'Escape',
					canExecute: function canExecute(row) {
						row = row || model.navigation().row;
						return row && model.edit().mode === 'row' && model.edit().state === 'edit' && model.edit().cancel.canExecute(_this.contextFactory(row));
					},
					execute: function execute(row, e) {
						__WEBPACK_IMPORTED_MODULE_0__infrastructure__["i" /* Log */].info('cell.edit', 'cancel');
						if (e) {
							e.stopImmediatePropagation();
						}

						_this.editor.reset();
						_this.editor = __WEBPACK_IMPORTED_MODULE_1__edit_row_editor__["a" /* RowEditor */].empty;
						model.edit({ state: 'view' });
					}
				}),
				reset: new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["g" /* Command */]({
					canExecute: function canExecute(row) {
						row = row || model.navigation().row;
						return row && model.edit().mode === 'row' && model.edit().state === 'edit' && model.edit().reset.canExecute(_this.contextFactory(row));
					},
					execute: function execute(row, e) {
						__WEBPACK_IMPORTED_MODULE_0__infrastructure__["i" /* Log */].info('row.edit', 'reset');
						if (e) {
							e.stopImmediatePropagation();
						}

						if (row && model.edit().reset.execute(_this.contextFactory(row)) !== false) {
							_this.editor.reset();
							return false;
						}
					}
				})
			};
			return new Map(Object.entries(commands));
		}
	}]);

	return EditRowView;
}();

/***/ }),
/* 229 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit_cell_view__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_row_view__ = __webpack_require__(228);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditView; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var EditView = function (_View) {
	_inherits(EditView, _View);

	function EditView(model, table, commandManager) {
		_classCallCheck(this, EditView);

		var _this = _possibleConstructorReturn(this, (EditView.__proto__ || Object.getPrototypeOf(EditView)).call(this, model));

		_this.cell = new __WEBPACK_IMPORTED_MODULE_1__edit_cell_view__["a" /* EditCellView */](model, table, commandManager);
		_this.row = new __WEBPACK_IMPORTED_MODULE_2__edit_row_view__["a" /* EditRowView */](model, table, commandManager);
		return _this;
	}

	_createClass(EditView, [{
		key: 'onDestroy',
		value: function onDestroy() {
			this.cell.destroy();
			this.row.destroy();
		}
	}]);

	return EditView;
}(__WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */]);

/***/ }),
/* 230 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["a"] = castFactory;
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };



function castFactory(r) {
	var rt = typeof r === 'undefined' ? 'undefined' : _typeof(r),
	    asString = '' + r,
	    asNumber = +r,
	    asDate = new Date(r);

	return function (l) {
		var lt = typeof l === 'undefined' ? 'undefined' : _typeof(l);
		if (rt === lt) {
			return r;
		}

		switch (lt) {
			case 'number':
				return asNumber;
			case 'string':
				return asString;
			case 'date':
				return asDate;
			default:
				throw __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__infrastructure__["c" /* AppError */])('cast.factory', 'Unsupported format ' + lt);
		}
	};
}

/***/ }),
/* 231 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = build;
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function build(filterBy) {
	var op = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'and';

	var expressions = [];
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = Object.entries(filterBy)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var _step$value = _slicedToArray(_step.value, 2),
			    key = _step$value[0],
			    filter = _step$value[1];

			if (filter.expression) {
				expressions.push(filter.expression);
			}

			if (filter.items && filter.items.length) {
				expressions.push(toExpression(key, filter.items));
			}
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	return compile(expressions, op);
}

function toExpression(key, items) {
	return {
		kind: 'group',
		op: 'and',
		left: {
			kind: 'condition',
			left: key,
			op: 'in',
			right: Array.from(items)

		},
		right: null
	};
}

function compile(expressions, op) {
	var root = {
		kind: 'group',
		op: op,
		left: null,
		right: null
	};

	var current = root;

	expressions.forEach(function (expr) {
		if (!current.left) {
			current.left = expr;
		} else {
			var next = {
				kind: 'group',
				op: op,
				left: expr,
				right: null
			};

			current.right = next;
			current = next;
		}
	});

	return root.left ? root : null;
}

/***/ }),
/* 232 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__expression_build__ = __webpack_require__(231);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__expression_build__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__expression_visitor__ = __webpack_require__(87);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__predicate_visitor__ = __webpack_require__(233);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__predicate_visitor__["a"]; });




/***/ }),
/* 233 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cast_factory__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__expression_visitor__ = __webpack_require__(87);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PredicateVisitor; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var PredicateVisitor = function (_Visitor) {
	_inherits(PredicateVisitor, _Visitor);

	function PredicateVisitor(valueFactory) {
		_classCallCheck(this, PredicateVisitor);

		var _this = _possibleConstructorReturn(this, (PredicateVisitor.__proto__ || Object.getPrototypeOf(PredicateVisitor)).call(this));

		_this.valueFactory = valueFactory;
		return _this;
	}

	_createClass(PredicateVisitor, [{
		key: 'visitGroup',
		value: function visitGroup(group) {
			if (group.right) {
				var lp = this.visit(group.left),
				    rp = this.visit(group.right);

				switch (group.op) {
					case 'and':
						return function (value) {
							return lp(value) && rp(value);
						};
					case 'or':
						return function (value) {
							return lp(value) || rp(value);
						};
					default:
						throw __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__infrastructure__["c" /* AppError */])('predicate.visitor', 'Invalid operation ' + group.op);
				}
			} else {
				return this.visit(group.left);
			}
		}
	}, {
		key: 'visitCondition',
		value: function visitCondition(condition) {
			var r = condition.right,
			    name = condition.left,
			    getValue = this.valueFactory(name),
			    castAs = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__cast_factory__["a" /* castFactory */])(r);

			switch (condition.op) {
				case 'isNotNull':
					return function (l) {
						var v = getValue(l);
						return v || v === 0;
					};
				case 'isNull':
					return function (l) {
						var v = getValue(l);
						return !v && v !== 0;
					};
				case 'equals':
					return function (l) {
						var v = getValue(l),
						    r = castAs(v);
						return v === r;
					};
				case 'notEquals':
					return function (l) {
						var v = getValue(l),
						    r = castAs(v);
						return v !== r;
					};
				case 'greaterThanOrEquals':
					return function (l) {
						var v = getValue(l),
						    r = castAs(v);
						return v >= r;
					};
				case 'greaterThan':
					return function (l) {
						var v = getValue(l),
						    r = castAs(v);
						return v > r;
					};
				case 'lessThanOrEquals':
					return function (l) {
						var v = getValue(l),
						    r = castAs(v);
						return v <= r;
					};
				case 'lessThan':
					return function (l) {
						var v = getValue(l),
						    r = castAs(v);
						return v < r;
					};
				case 'between':
					return function (l) {
						var v = getValue(l);

						return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__cast_factory__["a" /* castFactory */])(r[0])(v) <= v && v <= __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__cast_factory__["a" /* castFactory */])(r[1])(v);
					};
				case 'in':
					return function (l) {
						var value = getValue(l);
						var v = !value && value !== 0 ? 'null' : value;

						var map = r.reduce(function (memo, item) {
							memo[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__cast_factory__["a" /* castFactory */])(item)(v)] = true;
							return memo;
						}, {});

						return map.hasOwnProperty(v);
					};
				case 'like':
					return function (l) {
						var v = getValue(l),
						    r = castAs(v);
						return v && ('' + v).toLowerCase().contains(('' + r).toLowerCase());
					};
				case 'notLike':
					return function (l) {
						var v = getValue(l),
						    r = castAs(v);
						return v && !('' + v).toLowerCase().contains(('' + r).toLowerCase());
					};
				case 'startsWith':
					return function (l) {
						var v = getValue(l),
						    r = castAs(v),
						    substr = v.substr(0, r.length);
						return r === substr;
					};
				case 'endsWith':
					return function (l) {
						var v = getValue(l),
						    r = castAs(v),
						    substr = v.slice(-r.length);
						return r === substr;
					};
				default:
					throw new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["c" /* AppError */]('predicate.visitor', 'Invalid operation ' + condition.op);
			}
		}
	}]);

	return PredicateVisitor;
}(__WEBPACK_IMPORTED_MODULE_2__expression_visitor__["a" /* Visitor */]);

/***/ }),
/* 234 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__match__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_utility__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterModel; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var FilterModel = function FilterModel() {
	_classCallCheck(this, FilterModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["a" /* Resource */]();
	this.by = {};
	this.match = __WEBPACK_IMPORTED_MODULE_1__match__["a" /* match */];
	this.fetch = __WEBPACK_IMPORTED_MODULE_2__services_utility__["b" /* noop */];
};

/***/ }),
/* 235 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterView; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var FilterView = function (_View) {
	_inherits(FilterView, _View);

	function FilterView(model) {
		_classCallCheck(this, FilterView);

		return _possibleConstructorReturn(this, (FilterView.__proto__ || Object.getPrototypeOf(FilterView)).call(this, model));
	}

	_createClass(FilterView, [{
		key: 'has',
		value: function has(column) {
			var key = column.key;
			var filterBy = this.model.filter().by;
			return filterBy.hasOwnProperty(key);
		}
	}]);

	return FilterView;
}(__WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */]);

/***/ }),
/* 236 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__expression__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column_column_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_utility__ = __webpack_require__(1);
/* harmony export (immutable) */ __webpack_exports__["a"] = match;




function match(context) {
	var model = context.model;
	var expression = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__expression__["a" /* build */])(model.filter().by);
	if (expression !== null) {
		var valueFactory = context.valueFactory;
		var columnMap = __WEBPACK_IMPORTED_MODULE_1__column_column_service__["a" /* map */](model.data().columns);
		var visitor = new __WEBPACK_IMPORTED_MODULE_0__expression__["b" /* PredicateVisitor */](function (key) {
			return valueFactory(columnMap[key]);
		});
		return visitor.visit(expression);
	}

	return __WEBPACK_IMPORTED_MODULE_2__services_utility__["f" /* yes */];
}

/***/ }),
/* 237 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FocusModel; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FocusModel = function FocusModel() {
	_classCallCheck(this, FocusModel);

	this.rowIndex = -1;
	this.columnIndex = -1;
};

/***/ }),
/* 238 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__focus_model__ = __webpack_require__(237);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__focus_model__["a"]; });


/***/ }),
/* 239 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__infrastructure__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FootModel; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var FootModel = function FootModel() {
	_classCallCheck(this, FootModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["c" /* EnumerableResource */]();
	this.cache = new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["k" /* Cache */]();
};

/***/ }),
/* 240 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column_column_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__infrastructure__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_value__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FootView; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var FootView = function (_View) {
	_inherits(FootView, _View);

	function FootView(model, table) {
		_classCallCheck(this, FootView);

		var _this = _possibleConstructorReturn(this, (FootView.__proto__ || Object.getPrototypeOf(FootView)).call(this, model));

		_this.table = table;
		_this.rows = [];
		_this.columns = [];

		_this.valueFactory = __WEBPACK_IMPORTED_MODULE_4__services_value__["c" /* getFactory */];

		model.viewChanged.watch(function () {
			return _this.invalidate(model);
		});
		return _this;
	}

	_createClass(FootView, [{
		key: 'invalidate',
		value: function invalidate(model) {
			var _this2 = this;

			__WEBPACK_IMPORTED_MODULE_3__infrastructure__["i" /* Log */].info('view.foot', 'invalidate');

			var columns = model.view().columns;
			this.columns = __WEBPACK_IMPORTED_MODULE_1__column_column_service__["e" /* lineView */](columns).filter(function (c) {
				return c.model.pin === _this2.table.pin;
			});
			this.rows = new Array(this.count);
		}
	}, {
		key: 'value',
		value: function value(column) {
			if (column.aggregation) {
				var aggregation = column.aggregation;
				var aggregationOptions = column.aggregationOptions;

				if (!__WEBPACK_IMPORTED_MODULE_2__services__["e" /* Aggregation */].hasOwnProperty(aggregation)) {
					throw new __WEBPACK_IMPORTED_MODULE_3__infrastructure__["c" /* AppError */]('foot', 'Aggregation ' + aggregation + ' is not registered');
				}

				var rows = this.model.data().rows;
				var getValue = this.valueFactory(column);

				return __WEBPACK_IMPORTED_MODULE_2__services__["e" /* Aggregation */][aggregation](rows, getValue, aggregationOptions);
			}
			return null;
		}
	}, {
		key: 'count',
		get: function get() {
			var model = this.model;
			var columns = model.data().columns;
			var resourceCount = model.foot().resource.count;

			for (var i = 0, length = columns.length; i < length; i++) {
				if (columns[i].aggregation) {
					return Math.max(resourceCount, 1);
				}
			}

			return resourceCount;
		}
	}]);

	return FootView;
}(__WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */]);

/***/ }),
/* 241 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridModel; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var GridModel = function GridModel() {
	_classCallCheck(this, GridModel);

	this.id = 'q-grid-' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__services__["b" /* guid */])();
};

/***/ }),
/* 242 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid_model__ = __webpack_require__(241);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__grid_model__["a"]; });


/***/ }),
/* 243 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_column_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__infrastructure__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(10);
/* harmony export (immutable) */ __webpack_exports__["a"] = groupBuilder;




function groupBuilder(model) {
	var viewState = model.view();
	var dataState = model.data();

	var pivot = model.view().pivot;
	var pivotRows = pivot.rows;
	var pivotRowLength = pivotRows[0].length;

	var groupBy = model.group().by;
	var groupByLength = groupBy.length;

	var columnMap = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__column_column_service__["a" /* map */])(dataState.columns);
	var rows = dataState.rows;
	var nodes = viewState.rows;

	return function (valueFactory) {
		var result = [];

		var _loop = function _loop(i, nodeLength) {
			var node = nodes[i];
			var key = groupBy[Math.min(node.level, groupByLength - 1)];
			var column = columnMap[key];
			if (!column) {
				throw new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["c" /* AppError */]('view.pivot', 'Invalid key "' + key + '"');
			}

			var aggregation = column.aggregation || 'count';
			if (!__WEBPACK_IMPORTED_MODULE_2__services__["e" /* Aggregation */].hasOwnProperty(aggregation)) {
				throw new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["c" /* AppError */]('view.pivot', 'Aggregation ' + aggregation + ' is not registered');
			}

			var getValue = valueFactory(column);
			var aggregate = __WEBPACK_IMPORTED_MODULE_2__services__["e" /* Aggregation */][aggregation];

			var aggRow = new Array(pivotRowLength);
			for (var j = 0, rowLength = node.rows.length; j < rowLength; j++) {
				var rowIndex = node.rows[j];
				var pivotRow = pivotRows[rowIndex];
				var row = rows[rowIndex];
				for (var k = 0; k < pivotRowLength; k++) {
					if (pivotRow[k]) {
						var value = aggRow[k];
						if (!value) {
							value = [];
							aggRow[k] = value;
						}
						value.push(row);
					}
				}
			}

			result.push(aggRow.map(function (rs) {
				return aggregate(rs, getValue, column.aggregationOptions);
			}));
		};

		for (var i = 0, nodeLength = nodes.length; i < nodeLength; i++) {
			_loop(i, nodeLength);
		}

		return result;
	};
}

/***/ }),
/* 244 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupModel; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var GroupModel = function GroupModel() {
	_classCallCheck(this, GroupModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["a" /* Resource */]();
	this.by = [];
};

/***/ }),
/* 245 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__infrastructure__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_value__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupView; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var GroupView = function (_View) {
	_inherits(GroupView, _View);

	function GroupView(model) {
		_classCallCheck(this, GroupView);

		var _this = _possibleConstructorReturn(this, (GroupView.__proto__ || Object.getPrototypeOf(GroupView)).call(this, model));

		_this.valueFactory = __WEBPACK_IMPORTED_MODULE_3__services_value__["c" /* getFactory */];
		_this.toggleStatus = new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["g" /* Command */]({
			execute: function execute(node) {
				node.state.expand = !node.state.expand;
				var view = model.view;
				var nodes = view().nodes;
				view({ rows: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__node__["a" /* flatView */])(nodes) });
			},
			canExecute: function canExecute(node) {
				return node.type === 'group';
			}
		});
		return _this;
	}

	_createClass(GroupView, [{
		key: 'count',
		value: function count(node) {
			return node.children.length || node.rows.length;
		}
	}, {
		key: 'status',
		value: function status(node) {
			return node.state.expand ? 'expand' : 'collapse';
		}
	}, {
		key: 'offset',
		value: function offset(node) {
			var groupColumn = (this.model.view().columns[0] || []).find(function (c) {
				return c.model.type === 'group';
			});
			if (groupColumn) {
				return groupColumn.model.offset * node.level;
			}

			return 0;
		}
	}, {
		key: 'value',
		value: function value(node) {
			return node.key;
		}
	}]);

	return GroupView;
}(__WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */]);

/***/ }),
/* 246 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__infrastructure__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeadModel; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var HeadModel = function HeadModel() {
	_classCallCheck(this, HeadModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["a" /* Resource */]();
	this.cache = new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["k" /* Cache */]();
};

/***/ }),
/* 247 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__infrastructure__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__column_column_service__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeadView; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var HeadView = function (_View) {
	_inherits(HeadView, _View);

	function HeadView(model, table, tagName) {
		_classCallCheck(this, HeadView);

		var _this = _possibleConstructorReturn(this, (HeadView.__proto__ || Object.getPrototypeOf(HeadView)).call(this, model));

		_this.table = table;
		_this.tagName = tagName;
		_this.rows = [];

		_this.drop = new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["g" /* Command */]({
			canExecute: function canExecute(e) {
				if (e.source && e.source.key === tagName) {
					var key = e.target.value;
					var map = __WEBPACK_IMPORTED_MODULE_2__column_column_service__["a" /* map */](model.data().columns);
					return map.hasOwnProperty(key) && map[key].canMove;
				}

				return false;
			},
			execute: function execute(e) {
				var view = model.view;
				var columnRows = view().columns;
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = columnRows[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var columns = _step.value;

						var targetIndex = columns.findIndex(function (c) {
							return c.model.key === e.target.value;
						});
						var sourceIndex = columns.findIndex(function (c) {
							return c.model.key === e.source.value;
						});
						if (targetIndex >= 0 && sourceIndex >= 0) {
							var sourceColumn = columns[sourceIndex].model;
							var targetColumn = columns[targetIndex].model;
							var indexMap = Array.from(model.columnList().index);
							var sourceColumnIndex = indexMap.indexOf(sourceColumn.key);
							var targetColumnIndex = indexMap.indexOf(targetColumn.key);
							indexMap.splice(sourceColumnIndex, 1);
							indexMap.splice(targetColumnIndex, 0, sourceColumn.key);
							model.columnList({ index: indexMap });
						}
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}
			}
		});

		_this.drag = new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["g" /* Command */]({
			canExecute: function canExecute(e) {
				if (e.source.key === tagName) {
					var map = __WEBPACK_IMPORTED_MODULE_2__column_column_service__["a" /* map */](model.data().columns);
					return map.hasOwnProperty(e.source.value) && map[e.source.value].canMove !== false;
				}

				return false;
			}
		});

		_this.resize = new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["g" /* Command */]({
			canExecute: function canExecute(e) {
				if (e.source.key === tagName) {
					var map = table.data.columnMap();
					return map.hasOwnProperty(e.source.value) && map[e.source.value].canResize !== false;
				}

				return false;
			}
		});

		model.viewChanged.watch(function () {
			return _this.invalidate(model);
		});
		return _this;
	}

	_createClass(HeadView, [{
		key: 'transfer',
		value: function transfer(column) {
			return {
				key: this.tagName,
				value: column.key
			};
		}
	}, {
		key: 'invalidate',
		value: function invalidate(model) {
			var _this2 = this;

			__WEBPACK_IMPORTED_MODULE_1__infrastructure__["i" /* Log */].info('view.head', 'invalidate');

			this.rows = model.view().columns.map(function (row) {
				return row.filter(function (c) {
					return c.model.pin === _this2.table.pin;
				});
			});
		}
	}]);

	return HeadView;
}(__WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */]);

/***/ }),
/* 248 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__definition__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HighlightBehavior; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var HighlightBehavior = function () {
	function HighlightBehavior(model, cellSelector) {
		_classCallCheck(this, HighlightBehavior);

		this.model = model;
		this.cellSelector = cellSelector;

		this.cells = new Set();
	}

	_createClass(HighlightBehavior, [{
		key: 'state',
		value: function state(cell, _state) {
			if (_state) {
				cell.addClass(__WEBPACK_IMPORTED_MODULE_0__definition__["a" /* GRID_PREFIX */] + '-selected');
			} else {
				cell.removeClass(__WEBPACK_IMPORTED_MODULE_0__definition__["a" /* GRID_PREFIX */] + '-selected');
			}
		}
	}, {
		key: 'update',
		value: function update(items) {
			var _this = this;

			this.clear();

			this.cells = new Set(this.cellSelector(items));
			this.cells.forEach(function (cell) {
				return _this.state(cell, true);
			});
		}
	}, {
		key: 'clear',
		value: function clear() {
			var _this2 = this;

			this.cells.forEach(function (cell) {
				return _this2.state(cell, false);
			});
		}
	}]);

	return HighlightBehavior;
}();



/***/ }),
/* 249 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__highlight_behavior__ = __webpack_require__(248);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__highlight_behavior__["a"]; });


/***/ }),
/* 250 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_column_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__infrastructure__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["a"] = cellSelector;
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }




function cellSelector(model, table) {
	function getRows(items) {
		var result = [];
		var rows = model.view().rows;

		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var item = _step.value;

				var index = rows.indexOf(item);
				var _iteratorNormalCompletion2 = true;
				var _didIteratorError2 = false;
				var _iteratorError2 = undefined;

				try {
					for (var _iterator2 = table.body.row(index).cells()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
						var cell = _step2.value;

						result.push(cell);
					}
				} catch (err) {
					_didIteratorError2 = true;
					_iteratorError2 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion2 && _iterator2.return) {
							_iterator2.return();
						}
					} finally {
						if (_didIteratorError2) {
							throw _iteratorError2;
						}
					}
				}
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}

		return result;
	}

	function getColumns(items) {
		var result = [];
		var columns = __WEBPACK_IMPORTED_MODULE_0__column_column_service__["e" /* lineView */](model.view().columns);

		var _iteratorNormalCompletion3 = true;
		var _didIteratorError3 = false;
		var _iteratorError3 = undefined;

		try {
			var _loop = function _loop() {
				var item = _step3.value;

				var index = columns.findIndex(function (c) {
					return c.model === item;
				});
				var _iteratorNormalCompletion4 = true;
				var _didIteratorError4 = false;
				var _iteratorError4 = undefined;

				try {
					for (var _iterator4 = table.body.rows()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
						var row = _step4.value;

						result.push(row.cell(index));
					}
				} catch (err) {
					_didIteratorError4 = true;
					_iteratorError4 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion4 && _iterator4.return) {
							_iterator4.return();
						}
					} finally {
						if (_didIteratorError4) {
							throw _iteratorError4;
						}
					}
				}
			};

			for (var _iterator3 = items[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
				_loop();
			}
		} catch (err) {
			_didIteratorError3 = true;
			_iteratorError3 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion3 && _iterator3.return) {
					_iterator3.return();
				}
			} finally {
				if (_didIteratorError3) {
					throw _iteratorError3;
				}
			}
		}

		return result;
	}

	function getCells(items) {
		var result = [];
		var rows = model.view().rows;
		var columns = __WEBPACK_IMPORTED_MODULE_0__column_column_service__["e" /* lineView */](model.view().columns);

		var _iteratorNormalCompletion5 = true;
		var _didIteratorError5 = false;
		var _iteratorError5 = undefined;

		try {
			var _loop2 = function _loop2() {
				var item = _step5.value;

				var rowIndex = rows.indexOf(item.row);
				var columnIndex = columns.findIndex(function (c) {
					return c.model === item.column;
				});

				var row = table.body.row(rowIndex);
				result.push(row.cell(columnIndex));
			};

			for (var _iterator5 = items[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
				_loop2();
			}
		} catch (err) {
			_didIteratorError5 = true;
			_iteratorError5 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion5 && _iterator5.return) {
					_iterator5.return();
				}
			} finally {
				if (_didIteratorError5) {
					throw _iteratorError5;
				}
			}
		}

		return result;
	}

	function getMix(items) {
		var itemsArray = Array.from(items);

		var rows = itemsArray.filter(function (item) {
			return item.unit === 'row';
		}).map(function (item) {
			return item.item;
		});
		var cells = itemsArray.filter(function (item) {
			return item.unit === 'row';
		}).map(function (item) {
			return item.item;
		});

		return [].concat(_toConsumableArray(getRows(rows)), _toConsumableArray(getCells(cells)));
	}

	var selectorMap = {
		'row': getRows,
		'column': getColumns,
		'cell': getCells,
		'mix': getMix
	};

	return function () {
		var selection = model.selection();
		var cellSelector = selectorMap[selection.unit];
		if (!cellSelector) {
			throw new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["c" /* AppError */]('cell.selector', 'Invalid unit ' + selection.unit);
		}

		return cellSelector.apply(undefined, arguments);
	};
}

/***/ }),
/* 251 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HighlightModel; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HighlightModel = function HighlightModel() {
	_classCallCheck(this, HighlightModel);

	this.columns = [];
};

/***/ }),
/* 252 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__infrastructure__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__column_column_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sort_sort_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__behaviors__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cell_selector__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_utility__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__definition__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HighlightView; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var HighlightView = function (_View) {
	_inherits(HighlightView, _View);

	function HighlightView(model, table, timeout) {
		_classCallCheck(this, HighlightView);

		var _this = _possibleConstructorReturn(this, (HighlightView.__proto__ || Object.getPrototypeOf(HighlightView)).call(this, model));

		_this.timeout = timeout;
		_this.behavior = new __WEBPACK_IMPORTED_MODULE_4__behaviors__["a" /* HighlightBehavior */](model, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__cell_selector__["a" /* cellSelector */])(model, table));
		_this.table = table;

		// TODO: get rid of this variable, maybe using table class?
		var waitForLayout = false;

		var sortBlurs = [];
		var hoverBlurs = [];

		_this.column = new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["g" /* Command */]({
			canExecute: function canExecute() {
				return !model.drag().isActive;
			},
			execute: function execute(column, state) {
				if (!waitForLayout) {
					var columns = Array.from(model.highlight().columns);
					var index = columns.indexOf(column.key);
					var hasChanges = false;
					if (state) {
						if (index < 0) {
							columns.push(column.key);
							hasChanges = true;
						}
					} else {
						if (index >= 0) {
							columns.splice(index, 1);
							hasChanges = true;
						}
					}

					if (hasChanges) {
						model.highlight({
							columns: columns
						}, {
							source: 'highlight.view'
						});
					}
				}
			}
		});

		model.selectionChanged.watch(function (e) {
			_this.timeout(function () {
				return _this.behavior.update(e.state.entries);
			}, 0);
		});

		model.viewChanged.watch(function () {
			waitForLayout = true;
			_this.timeout(function () {
				hoverBlurs = _this.invalidateHover(hoverBlurs);
				sortBlurs = _this.invalidateSortBy(sortBlurs);
				waitForLayout = false;
				_this.behavior.update(_this.model.selection().entries);
			}, 100);
		});

		model.sortChanged.watch(function (e) {
			if (!waitForLayout && e.hasChanges('by')) {
				sortBlurs = _this.invalidateSortBy(sortBlurs);
			}
		});

		model.highlightChanged.watch(function (e) {
			if (!waitForLayout && e.tag.source !== 'highlight') {
				hoverBlurs = _this.invalidateHover(hoverBlurs);
			}
		});
		return _this;
	}

	_createClass(HighlightView, [{
		key: 'invalidateHover',
		value: function invalidateHover(dispose) {
			dispose.forEach(function (f) {
				return f();
			});
			dispose = [];
			var highlightColumns = this.model.highlight().columns;
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = highlightColumns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var columnKey = _step.value;

					dispose.push(this.highlight(columnKey, 'highlighted'));
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			return dispose;
		}
	}, {
		key: 'invalidateSortBy',
		value: function invalidateSortBy(dispose) {
			dispose.forEach(function (f) {
				return f();
			});
			dispose = [];

			var sortBy = this.model.sort().by;
			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = sortBy[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var entry = _step2.value;

					var key = __WEBPACK_IMPORTED_MODULE_3__sort_sort_service__["a" /* key */](entry);
					dispose.push(this.highlight(key, 'sorted'));
				}
			} catch (err) {
				_didIteratorError2 = true;
				_iteratorError2 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion2 && _iterator2.return) {
						_iterator2.return();
					}
				} finally {
					if (_didIteratorError2) {
						throw _iteratorError2;
					}
				}
			}

			return dispose;
		}
	}, {
		key: 'columnIndex',
		value: function columnIndex(key) {
			var columns = this.table.data.columns();
			var index = __WEBPACK_IMPORTED_MODULE_2__column_column_service__["d" /* findIndex */](columns, key);
			if (index >= 0) {
				// TODO: add pivot col support
				var column = columns[index];
				if (!column.canHighlight) {
					return -1;
				}
			}

			return index;
		}
	}, {
		key: 'highlight',
		value: function highlight(key, cls) {
			var table = this.table;
			var index = this.columnIndex(key);
			if (index < 0) {
				return __WEBPACK_IMPORTED_MODULE_6__services_utility__["b" /* noop */];
			}

			var head = table.head;
			var headCells = head.column(index).cells();
			headCells.forEach(function (cell) {
				return cell.addClass(__WEBPACK_IMPORTED_MODULE_7__definition__["a" /* GRID_PREFIX */] + '-' + cls);
			});
			var cellsPrev = head.column(index - 1).cells();
			cellsPrev.forEach(function (cell) {
				return cell.addClass(__WEBPACK_IMPORTED_MODULE_7__definition__["a" /* GRID_PREFIX */] + '-' + cls + '-prev');
			});
			var cellsNext = head.column(index + 1).cells();
			cellsNext.forEach(function (cell) {
				return cell.addClass(__WEBPACK_IMPORTED_MODULE_7__definition__["a" /* GRID_PREFIX */] + '-' + cls + '-next');
			});
			var bodyCells = table.body.column(index).cells();
			bodyCells.forEach(function (cell) {
				return cell.addClass(__WEBPACK_IMPORTED_MODULE_7__definition__["a" /* GRID_PREFIX */] + '-' + cls);
			});
			var footCells = table.foot.column(index).cells();
			footCells.forEach(function (cell) {
				return cell.addClass(__WEBPACK_IMPORTED_MODULE_7__definition__["a" /* GRID_PREFIX */] + '-' + cls);
			});

			return this.blur(key, cls);
		}
	}, {
		key: 'blur',
		value: function blur(key, cls) {
			var table = this.table;
			var index = this.columnIndex(key);
			if (index < 0) {
				return __WEBPACK_IMPORTED_MODULE_6__services_utility__["b" /* noop */];
			}

			return function () {
				var head = table.head;
				var headCells = head.column(index).cells();
				headCells.forEach(function (cell) {
					return cell.removeClass(__WEBPACK_IMPORTED_MODULE_7__definition__["a" /* GRID_PREFIX */] + '-' + cls);
				});
				var cellsPrev = head.column(index - 1).cells();
				cellsPrev.forEach(function (cell) {
					return cell.removeClass(__WEBPACK_IMPORTED_MODULE_7__definition__["a" /* GRID_PREFIX */] + '-' + cls + '-prev');
				});
				var cellsNext = head.column(index + 1).cells();
				cellsNext.forEach(function (cell) {
					return cell.removeClass(__WEBPACK_IMPORTED_MODULE_7__definition__["a" /* GRID_PREFIX */] + '-' + cls + '-next');
				});
				var bodyCells = table.body.column(index).cells();
				bodyCells.forEach(function (cell) {
					return cell.removeClass(__WEBPACK_IMPORTED_MODULE_7__definition__["a" /* GRID_PREFIX */] + '-' + cls);
				});
				var footCells = table.foot.column(index).cells();
				footCells.forEach(function (cell) {
					return cell.removeClass(__WEBPACK_IMPORTED_MODULE_7__definition__["a" /* GRID_PREFIX */] + '-' + cls);
				});
			};
		}
	}]);

	return HighlightView;
}(__WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */]);

/***/ }),
/* 253 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__head__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__body__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layout__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navigation__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__focus__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__column_list__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__row__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__selection__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__foot__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__sort__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__group__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pivot__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__plugin__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__edit__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__toolbar__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__layer__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pagination__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__progress__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__highlight__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__visibility__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__filter__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__drag__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__style__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__scroll__ = __webpack_require__(105);
/* harmony export (immutable) */ __webpack_exports__["a"] = setup;




























function setup(model) {
	model.register('grid', __WEBPACK_IMPORTED_MODULE_0__grid__["a" /* GridModel */]).register('view', __WEBPACK_IMPORTED_MODULE_1__view__["b" /* ViewModel */]).register('data', __WEBPACK_IMPORTED_MODULE_2__data__["a" /* DataModel */]).register('selection', __WEBPACK_IMPORTED_MODULE_10__selection__["b" /* SelectionModel */]).register('head', __WEBPACK_IMPORTED_MODULE_3__head__["b" /* HeadModel */]).register('body', __WEBPACK_IMPORTED_MODULE_4__body__["b" /* BodyModel */]).register('navigation', __WEBPACK_IMPORTED_MODULE_6__navigation__["b" /* NavigationModel */]).register('focus', __WEBPACK_IMPORTED_MODULE_7__focus__["a" /* FocusModel */]).register('foot', __WEBPACK_IMPORTED_MODULE_11__foot__["b" /* FootModel */]).register('layout', __WEBPACK_IMPORTED_MODULE_5__layout__["b" /* LayoutModel */]).register('row', __WEBPACK_IMPORTED_MODULE_9__row__["a" /* RowModel */]).register('columnList', __WEBPACK_IMPORTED_MODULE_8__column_list__["b" /* ColumnListModel */]).register('sort', __WEBPACK_IMPORTED_MODULE_12__sort__["b" /* SortModel */]).register('group', __WEBPACK_IMPORTED_MODULE_13__group__["c" /* GroupModel */]).register('pivot', __WEBPACK_IMPORTED_MODULE_14__pivot__["c" /* PivotModel */]).register('edit', __WEBPACK_IMPORTED_MODULE_16__edit__["b" /* EditModel */]).register('plugin', __WEBPACK_IMPORTED_MODULE_15__plugin__["a" /* PluginModel */]).register('toolbar', __WEBPACK_IMPORTED_MODULE_17__toolbar__["a" /* ToolbarModel */]).register('layer', __WEBPACK_IMPORTED_MODULE_18__layer__["a" /* LayerModel */]).register('pagination', __WEBPACK_IMPORTED_MODULE_19__pagination__["b" /* PaginationModel */]).register('progress', __WEBPACK_IMPORTED_MODULE_20__progress__["a" /* ProgressModel */]).register('highlight', __WEBPACK_IMPORTED_MODULE_21__highlight__["b" /* HighlightModel */]).register('visibility', __WEBPACK_IMPORTED_MODULE_22__visibility__["a" /* VisibilityModel */]).register('filter', __WEBPACK_IMPORTED_MODULE_23__filter__["b" /* FilterModel */]).register('drag', __WEBPACK_IMPORTED_MODULE_24__drag__["a" /* DragModel */]).register('style', __WEBPACK_IMPORTED_MODULE_25__style__["b" /* StyleModel */]).register('scroll', __WEBPACK_IMPORTED_MODULE_26__scroll__["b" /* ScrollModel */]);
}

/***/ }),
/* 254 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Action */
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Action = function Action(command, title, icon) {
	_classCallCheck(this, Action);

	this.command = command;
	this.title = title;
	this.icon = icon;
};

/***/ }),
/* 255 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cache; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Cache = function () {
	function Cache() {
		_classCallCheck(this, Cache);

		this.items = {};
	}

	_createClass(Cache, [{
		key: 'set',
		value: function set(key, value) {
			this.items[key] = value;
		}
	}, {
		key: 'get',
		value: function get(key) {
			var entry = this.find(key);
			if (!entry) {
				throw new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* AppError */]('cache.get', 'Entry with key was not found "' + key + '"');
			}

			return entry;
		}
	}, {
		key: 'has',
		value: function has(key) {
			var items = this.items;
			return items.hasOwnProperty(key);
		}
	}, {
		key: 'find',
		value: function find(key) {
			var items = this.items;
			if (items.hasOwnProperty(key)) {
				return items[key];
			}

			return null;
		}
	}, {
		key: 'remove',
		value: function remove(key) {
			if (!this.items.hasOwnProperty(key)) {
				throw new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* AppError */]('cache.remove', 'Entry with key was not found "' + key + '"');
			}

			delete this.items[key];
		}
	}, {
		key: 'clear',
		value: function clear() {
			this.items = {};
		}
	}]);

	return Cache;
}();

/***/ }),
/* 256 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_utility__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Command; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Command = function Command() {
	var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	_classCallCheck(this, Command);

	this.execute = context.execute || __WEBPACK_IMPORTED_MODULE_0__services_utility__["f" /* yes */];
	this.canExecute = context.canExecute || __WEBPACK_IMPORTED_MODULE_0__services_utility__["f" /* yes */];
	this.shortcut = context.shortcut;
};

/***/ }),
/* 257 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventListener; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventListener = function () {
	function EventListener(context, element) {
		_classCallCheck(this, EventListener);

		this.element = element;
		this.context = context;
		this.handlers = {};
	}

	_createClass(EventListener, [{
		key: "on",
		value: function on(name, f) {
			var _this = this;

			var context = this.context;
			var handler = f.bind(context);
			var handlerSet = this.handlers[name] || (this.handlers[name] = []);
			handlerSet.push(handler);
			this.element.addEventListener(name, handler, false);
			return function () {
				_this.element.removeEventListener(name, handler);
				var index = handlerSet.indexOf(handler);
				if (index >= 0) {
					handlerSet.splice(index, 1);
				}
			};
		}
	}, {
		key: "off",
		value: function off() {
			var handlers = this.handlers;
			var element = this.element;
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = Object.keys(handlers)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var key = _step.value;
					var _iteratorNormalCompletion2 = true;
					var _didIteratorError2 = false;
					var _iteratorError2 = undefined;

					try {
						for (var _iterator2 = Array.from(handlers[key])[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
							var handler = _step2.value;

							element.removeEventListener(key, handler);
						}
					} catch (err) {
						_didIteratorError2 = true;
						_iteratorError2 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion2 && _iterator2.return) {
								_iterator2.return();
							}
						} finally {
							if (_didIteratorError2) {
								throw _iteratorError2;
							}
						}
					}
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}
		}
	}]);

	return EventListener;
}();

/***/ }),
/* 258 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_utility__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Fetch; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Fetch = function () {
	function Fetch(select) {
		_classCallCheck(this, Fetch);

		this.select = select;
		this.busy = null;
		this.result = null;
	}

	_createClass(Fetch, [{
		key: 'run',
		value: function run(item) {
			var _this = this,
			    _arguments = arguments;

			var select = this.select;

			this.result = null;
			var alive = true;
			this.busy = new Promise(function (resolveBusy, rejectBusy) {
				var resolve = function resolve(data) {
					if (alive) {
						_this.result = data;
						resolveBusy(data);
					}
				};

				if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__services_utility__["a" /* isFunction */])(select)) {
					var deferred = {
						resolve: resolve,
						reject: rejectBusy
					};

					var args = Array.from(_arguments).slice(1) || [];
					var result = select.apply(undefined, [item, deferred].concat(_toConsumableArray(args)));
					if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__services_utility__["d" /* isUndefined */])(result)) {
						if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__services_utility__["a" /* isFunction */])(result.then)) {
							// when options.fetch returns promise
							result.then(resolve);
							if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__services_utility__["a" /* isFunction */])(result.catch)) {
								result.catch(rejectBusy);
							}
						} else {
							// when options.fetch return result
							resolve(result);
						}
					}
					// when user should invoke d.resolve or d.reject
				} else {
					// when options.fetch is result itself
					resolve(select);
				}
			});

			return function () {
				_this.busy = null;
				alive = false;
			};
		}
	}]);

	return Fetch;
}();

/***/ }),
/* 259 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_utility__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__log__ = __webpack_require__(61);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelBinder; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var ModelBinder = function () {
	function ModelBinder(source) {
		_classCallCheck(this, ModelBinder);

		this.source = source;
		this.off = __WEBPACK_IMPORTED_MODULE_0__services_utility__["b" /* noop */];
	}

	_createClass(ModelBinder, [{
		key: 'bind',
		value: function bind(model, names) {
			var _this = this;

			var run = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

			this.off();
			var source = this.source;

			if (model) {
				var commits = [];
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					var _loop = function _loop() {
						var name = _step.value;

						var doBind = function doBind(e) {
							__WEBPACK_IMPORTED_MODULE_1__log__["a" /* Log */].info('model.bind', 'to ctrl "' + name + '[' + Object.keys(e.changes).join(', ') + ']"');

							var _iteratorNormalCompletion2 = true;
							var _didIteratorError2 = false;
							var _iteratorError2 = undefined;

							try {
								for (var _iterator2 = Object.keys(e.changes)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
									var key = _step2.value;

									var sourceKey = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__services_utility__["e" /* toCamelCase */])(name, key);
									if (source.hasOwnProperty(sourceKey)) {
										source[sourceKey] = e.changes[key].newValue;
									}
								}
							} catch (err) {
								_didIteratorError2 = true;
								_iteratorError2 = err;
							} finally {
								try {
									if (!_iteratorNormalCompletion2 && _iterator2.return) {
										_iterator2.return();
									}
								} finally {
									if (_didIteratorError2) {
										throw _iteratorError2;
									}
								}
							}
						};

						var state = model[name];
						if (run) {
							var value = state();
							doBind({
								changes: {
									newValue: value,
									oldValue: value
								}
							});
						}

						_this.off = model[name + 'Changed'].on(doBind);

						commits.push(function () {
							__WEBPACK_IMPORTED_MODULE_1__log__["a" /* Log */].info('model.bind', 'to model "' + name + '"');

							var oldState = state();
							var newState = {};
							var _iteratorNormalCompletion3 = true;
							var _didIteratorError3 = false;
							var _iteratorError3 = undefined;

							try {
								for (var _iterator3 = Object.keys(oldState)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
									var key = _step3.value;

									var sourceKey = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__services_utility__["e" /* toCamelCase */])(name, key);
									if (source.hasOwnProperty(sourceKey)) {
										var _value = source[sourceKey];
										if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__services_utility__["d" /* isUndefined */])(_value)) {
											newState[key] = _value;
										}
									}
								}
							} catch (err) {
								_didIteratorError3 = true;
								_iteratorError3 = err;
							} finally {
								try {
									if (!_iteratorNormalCompletion3 && _iterator3.return) {
										_iterator3.return();
									}
								} finally {
									if (_didIteratorError3) {
										throw _iteratorError3;
									}
								}
							}

							state(newState);
						});
					};

					for (var _iterator = names[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						_loop();
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}

				return function () {
					return commits.forEach(function (commit) {
						return commit();
					});
				};
			}

			this.off = __WEBPACK_IMPORTED_MODULE_0__services_utility__["b" /* noop */];
			return __WEBPACK_IMPORTED_MODULE_0__services_utility__["b" /* noop */];
		}
	}]);

	return ModelBinder;
}();

/***/ }),
/* 260 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__event__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__error__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guard__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__log__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_utility__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Model; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }







var models = {};
var close = false;

var Model = function () {
	function Model() {
		var _this = this;

		_classCallCheck(this, Model);

		close = true;
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			var _loop = function _loop() {
				var name = _step.value;

				var model = new models[name]();
				var changeSet = new Set();
				var watchArg = function watchArg() {
					return {
						state: model,
						hasChanges: changeSet.has.bind(changeSet),
						changes: Array.from(changeSet.values()).reduce(function (memo, key) {
							var value = model[key];
							memo[key] = { newValue: value, oldValue: value };
							return memo;
						}, {}),
						tag: {},
						source: 'watch'
					};
				};

				var event = new __WEBPACK_IMPORTED_MODULE_0__event__["a" /* Event */](watchArg);
				_this[name + 'Changed'] = event;
				_this[name] = function (state, tag) {
					var length = arguments.length;
					if (length) {
						if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__services_utility__["c" /* isObject */])(state)) {
							throw new __WEBPACK_IMPORTED_MODULE_1__error__["a" /* AppError */]('model.' + name, '"' + state + '" is not a valid type, should be an object');
						}

						var hasChanges = false;
						var changes = {};
						var keys = Object.keys(state);
						for (var i = 0, keyLength = keys.length; i < keyLength; i++) {
							var key = keys[i];
							if (!model.hasOwnProperty(key)) {
								throw new __WEBPACK_IMPORTED_MODULE_1__error__["a" /* AppError */]('model.' + name, '"' + key + '" is not a valid key, only [' + Object.keys(model).join(', ') + '] keys are supported');
							}

							var newValue = state[key];
							var oldValue = model[key];
							if (newValue !== oldValue) {
								__WEBPACK_IMPORTED_MODULE_3__log__["a" /* Log */].info('model', 'value changed - "' + name + '.' + key + '"');
								__WEBPACK_IMPORTED_MODULE_2__guard__["a" /* Guard */].notUndefined(newValue, 'model.' + name + '.' + key);

								model[key] = newValue;
								hasChanges = true;
								changes[key] = {
									newValue: newValue,
									oldValue: oldValue
								};

								changeSet.add(key);
							} else {
								__WEBPACK_IMPORTED_MODULE_3__log__["a" /* Log */].warn('model', 'value was not changed - "' + name + '.' + key + '"');
							}
						}

						if (hasChanges) {
							event.emit({
								state: model,
								hasChanges: changes.hasOwnProperty.bind(changes),
								changes: changes,
								tag: length > 1 ? tag : {},
								source: 'emit'
							});
						}
						return this;
					}

					return model;
				};
			};

			for (var _iterator = Object.keys(models)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				_loop();
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}
	}

	_createClass(Model, null, [{
		key: 'register',
		value: function register(name, model) {
			if (models.hasOwnProperty(name)) {
				throw new __WEBPACK_IMPORTED_MODULE_1__error__["a" /* AppError */]('model', '"' + name + '" is already registered');
			}

			if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__services_utility__["a" /* isFunction */])(model)) {
				throw new __WEBPACK_IMPORTED_MODULE_1__error__["a" /* AppError */]('model.' + name, '"' + model + '" is not a valid type, should be an constructor function');
			}

			if (close) {
				throw new __WEBPACK_IMPORTED_MODULE_1__error__["a" /* AppError */]('model.' + name, 'can\'t register, registration was closed');
			}

			models[name] = model;
			return Model;
		}
	}]);

	return Model;
}();

/***/ }),
/* 261 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_utility__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Shortcut; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Shortcut = function () {
	function Shortcut(table, manager) {
		_classCallCheck(this, Shortcut);

		this.manager = manager;
		this.commands = [];
		this.shortcuts = new Map();
		this.codeMap = new Map().set(9, 'tab').set(13, 'enter').set(27, 'escape').set(32, 'space').set(33, 'pageUp').set(34, 'pageDown').set(35, 'end').set(36, 'home').set(37, 'left').set(38, 'up').set(39, 'right').set(40, 'down').set(113, 'f2');

		this.canExecute = table.isFocused.bind(table);
		this.off = table.keyDown(this.onKeyDown.bind(this));
	}

	_createClass(Shortcut, [{
		key: 'translate',
		value: function translate(e) {
			var codes = [];
			if (e.ctrlKey) {
				codes.push('ctrl');
			}

			if (e.shiftKey) {
				codes.push('shift');
			}

			var char = (this.codeMap.get(e.keyCode) || String.fromCharCode(e.keyCode)).toLowerCase();
			codes.push(char);
			return codes.join('+');
		}
	}, {
		key: 'onKeyDown',
		value: function onKeyDown(e) {
			if (this.canExecute()) {
				var code = this.translate(e);
				var commands = this.find(code);
				if (commands.length) {
					e.preventDefault();
					this.manager.execute(commands);
				}
			}
		}
	}, {
		key: 'register',
		value: function register(id, commands) {
			var _this = this;

			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				var _loop = function _loop() {
					var cmd = _step.value;

					if (cmd.shortcut) {
						if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__services_utility__["a" /* isFunction */])(cmd.shortcut)) {
							_this.commands.push(cmd);
						} else {
							cmd.shortcut.toLowerCase().split('|').forEach(function (shortcut) {
								var temp = [];
								if (_this.shortcuts.has(shortcut)) {
									temp = _this.shortcuts.get(shortcut);
								}
								temp.push(cmd);
								_this.shortcuts.set(shortcut, temp);
							});
						}
					}
				};

				for (var _iterator = commands.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					_loop();
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			return function () {
				return _this.shortcuts.delete(id);
			};
		}
	}, {
		key: 'find',
		value: function find(code) {
			var _this2 = this;

			var result = [];
			if (this.shortcuts.has(code)) {
				result = result.concat(this.shortcuts.get(code));
			}

			result = result.concat(this.commands.filter(function (cmd) {
				return _this2.test(cmd.shortcut(), code);
			}));
			return result;
		}
	}, {
		key: 'test',
		value: function test(shortcut, code) {
			return ('' + shortcut).toLowerCase().split('|').some(function (shct) {
				return code === shct;
			});
		}
	}, {
		key: 'onDestroy',
		value: function onDestroy() {
			this.off();
		}
	}]);

	return Shortcut;
}();

/***/ }),
/* 262 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layer_model__ = __webpack_require__(263);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__layer_model__["a"]; });


/***/ }),
/* 263 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayerModel; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var LayerModel = function LayerModel() {
	_classCallCheck(this, LayerModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["a" /* Resource */]();
};

/***/ }),
/* 264 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutModel; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LayoutModel = function LayoutModel() {
	_classCallCheck(this, LayoutModel);

	this.columns = {};
};

/***/ }),
/* 265 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_css__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__column_column_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_utility__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipe_units__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__infrastructure__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutView; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var LayoutView = function (_View) {
	_inherits(LayoutView, _View);

	function LayoutView(model, table, service) {
		_classCallCheck(this, LayoutView);

		var _this = _possibleConstructorReturn(this, (LayoutView.__proto__ || Object.getPrototypeOf(LayoutView)).call(this, model));

		_this.model = model;
		_this.table = table;
		_this.service = service;

		_this.onInit();
		return _this;
	}

	_createClass(LayoutView, [{
		key: 'onInit',
		value: function onInit() {
			var _this2 = this;

			var model = this.model;

			model.viewChanged.watch(function (e) {
				if (e.hasChanges('columns')) {
					_this2.invalidateColumns();
				}
			});

			model.layoutChanged.watch(function (e) {
				if (e.hasChanges('columns')) {
					_this2.invalidateColumns(_this2.form);
				}
			});

			model.dataChanged.watch(function (e) {
				if (e.hasChanges('columns')) {
					var columns = model.data().columns;
					var columnMap = __WEBPACK_IMPORTED_MODULE_2__column_column_service__["a" /* map */](columns);
					var index = model.columnList().index.filter(function (key) {
						return columnMap.hasOwnProperty(key);
					});

					var indexSet = new Set(index);
					var appendIndex = columns.filter(function (c) {
						return !indexSet.has(c.key);
					});
					var orderIndex = Array.from(appendIndex);
					orderIndex.sort(function (x, y) {
						if (x.index === y.index) {
							return appendIndex.indexOf(x) - appendIndex.indexOf(y);
						}

						if (x.index < 0) {
							return 1;
						}

						if (y.index < 0) {
							return -1;
						}

						return x.index - y.index;
					});

					index.push.apply(index, _toConsumableArray(orderIndex.map(function (c) {
						return c.key;
					})));
					model.columnList({ index: index }, { behavior: 'core' });
				}
			});

			model.columnListChanged.watch(function (e) {
				if (e.hasChanges('index') && e.tag.behavior !== 'core') {
					_this2.service.invalidate('column.list', e.tag, __WEBPACK_IMPORTED_MODULE_4__pipe_units__["a" /* PipeUnit */].column);
				}
			});
		}
	}, {
		key: 'invalidateColumns',
		value: function invalidateColumns(form) {
			__WEBPACK_IMPORTED_MODULE_5__infrastructure__["i" /* Log */].info('layout', 'invalidate columns');

			var model = this.model;
			var getWidth = __WEBPACK_IMPORTED_MODULE_2__column_column_service__["f" /* widthFactory */](model, form);
			var columns = this.table.data.columns();
			var style = {};
			var length = columns.length;
			while (length--) {
				var column = columns[length];
				var width = getWidth(column);
				if (null !== width) {
					var key = __WEBPACK_IMPORTED_MODULE_1__services_css__["a" /* escape */](column.key);
					style['td.q-grid-' + key + ', th.q-grid-' + key] = {
						'width': width,
						'min-width': width,
						'max-width': width
					};
				}
			}

			var sheet = __WEBPACK_IMPORTED_MODULE_1__services_css__["b" /* sheet */](this.styleId);
			sheet.set(style);
		}
	}, {
		key: 'destroy',
		value: function destroy() {
			var sheet = __WEBPACK_IMPORTED_MODULE_1__services_css__["b" /* sheet */](this.styleId);
			sheet.remove();
		}
	}, {
		key: 'form',
		get: function get() {
			var model = this.model;
			var layout = model.layout;
			var state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__services_utility__["h" /* clone */])(layout().columns);
			var headRow = this.table.head.row(0);
			if (headRow) {
				var columns = this.table.data.columns();
				var length = columns.length;
				while (length--) {
					var column = columns[length];
					if (!state.hasOwnProperty(column.key)) {
						if (column.canResize) {
							state[column.key] = { width: headRow.cell(column.index).width };
						}
					}
				}
			}

			return state;
		}
	}, {
		key: 'styleId',
		get: function get() {
			return this.model.grid().id + '-' + (this.table.pin || 'center') + '-layout';
		}
	}]);

	return LayoutView;
}(__WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */]);

/***/ }),
/* 266 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Navigation; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Navigation = function () {
	function Navigation(model, table) {
		_classCallCheck(this, Navigation);

		this.model = model;
		this.table = table;
	}

	_createClass(Navigation, [{
		key: 'positon',
		value: function positon(y, direction) {
			var body = this.table.body;
			var index = 0;
			var offset = 0;
			var count = body.rowCount();

			// TODO: improve performance
			while (index < count && offset <= y) {
				offset += body.row(index).height;
				index++;
			}

			if (direction === 'down' && body.row(index)) {
				offset -= body.row(index).height;
				index--;
			}
			return {
				row: Math.max(this.firstRow, Math.min(this.lastRow, index)),
				offset: offset
			};
		}
	}, {
		key: 'goTo',
		value: function goTo(row, column) {
			var source = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'navigation';

			var cell = this.cell(row, column);
			this.model.navigation({ cell: cell }, { source: source });
		}
	}, {
		key: 'cell',
		value: function cell(row, column) {
			return this.table.body.cell(row, column).model;
		}
	}, {
		key: 'columns',
		get: function get() {
			var columns = this.table.data.columns();
			var indicies = [];
			for (var i = 0, length = columns.length; i < length; i++) {
				var column = columns[i];
				if (column.canFocus) {
					indicies.push(i);
				}
			}
			return indicies;
		}
	}, {
		key: 'rows',
		get: function get() {
			return this.table.data.rows().map(function (r, i) {
				return i;
			});
		}
	}, {
		key: 'currentColumn',
		get: function get() {
			var columns = this.columns;
			if (!columns.length) {
				return -1;
			}

			var column = this.model.navigation().columnIndex;
			var index = columns.indexOf(column);
			return columns[Math.max(0, index)];
		}
	}, {
		key: 'nextColumn',
		get: function get() {
			var columns = this.columns;
			if (!columns.length) {
				return -1;
			}

			var column = this.model.navigation().columnIndex;
			var index = columns.indexOf(column);
			return index < columns.length - 1 ? columns[index + 1] : -1;
		}
	}, {
		key: 'prevColumn',
		get: function get() {
			var columns = this.columns;
			if (!columns.length) {
				return -1;
			}

			var column = this.model.navigation().columnIndex;
			var index = columns.indexOf(column);
			return index > 0 ? columns[index - 1] : -1;
		}
	}, {
		key: 'lastColumn',
		get: function get() {
			var columns = this.columns;
			if (!columns.length) {
				return -1;
			}

			return columns[columns.length - 1];
		}
	}, {
		key: 'firstColumn',
		get: function get() {
			var columns = this.columns;
			if (!columns.length) {
				return -1;
			}

			return columns[0];
		}
	}, {
		key: 'currentRow',
		get: function get() {
			var rows = this.rows;
			if (!rows.length) {
				return -1;
			}

			var row = this.model.navigation().rowIndex;
			return rows[Math.max(0, row)];
		}
	}, {
		key: 'nextRow',
		get: function get() {
			var rows = this.rows;
			if (!rows.length) {
				return -1;
			}

			var row = this.model.navigation().rowIndex;
			return row < rows.length - 1 ? rows[row + 1] : -1;
		}
	}, {
		key: 'prevRow',
		get: function get() {
			var rows = this.rows;
			if (!rows.length) {
				return -1;
			}

			var row = this.model.navigation().rowIndex;
			return row > 0 ? rows[row - 1] : -1;
		}
	}, {
		key: 'firstRow',
		get: function get() {
			var rows = this.rows;
			if (!rows.length) {
				return -1;
			}

			return rows[0];
		}
	}, {
		key: 'lastRow',
		get: function get() {
			var rows = this.rows;
			if (!rows.length) {
				return -1;
			}

			return rows[rows.length - 1];
		}
	}, {
		key: 'commands',
		get: function get() {
			var _this = this;

			var model = this.model;
			var table = this.table;
			var _canExecute = function _canExecute() {
				return model.edit().state === 'view';
			};

			var commands = {
				goDown: new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["g" /* Command */]({
					shortcut: 'down',
					canExecute: function canExecute() {
						return _canExecute() && _this.nextRow >= 0;
					},
					execute: function execute() {
						return _this.goTo(_this.nextRow, _this.currentColumn);
					}
				}),
				goUp: new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["g" /* Command */]({
					shortcut: 'up',
					canExecute: function canExecute() {
						return _canExecute() && _this.prevRow >= 0;
					},
					execute: function execute() {
						return _this.goTo(_this.prevRow, _this.currentColumn);
					}
				}),
				goRight: new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["g" /* Command */]({
					shortcut: 'right',
					canExecute: function canExecute() {
						return _canExecute() && _this.nextColumn >= 0;
					},
					execute: function execute() {
						return _this.goTo(_this.currentRow, _this.nextColumn);
					}
				}),
				tab: new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["g" /* Command */]({
					shortcut: 'tab',
					execute: function execute() {
						var hasNextColumn = _this.nextColumn >= 0;
						var hasNextRow = _this.nextRow >= 0;
						if (!hasNextColumn && !hasNextRow) {
							table.blur();
							return;
						}

						if (!hasNextColumn) {
							_this.goTo(_this.nextRow, _this.firstColumn);
							return;
						}

						_this.goTo(_this.currentRow, _this.nextColumn);
					}
				}),
				shiftTab: new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["g" /* Command */]({
					shortcut: 'Shift+tab',
					execute: function execute() {
						var hasPrevColumn = _this.prevColumn >= 0;
						var hasPrevRow = _this.prevRow >= 0;
						if (!hasPrevColumn && !hasPrevRow) {
							table.blur();
							return;
						}

						if (!hasPrevColumn) {
							_this.goTo(_this.prevRow, _this.lastColumn);
							return;
						}

						_this.goTo(_this.currentRow, _this.prevColumn);
					}
				}),
				goLeft: new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["g" /* Command */]({
					shortcut: 'left',
					canExecute: function canExecute() {
						return _canExecute() && _this.prevColumn >= 0;
					},
					execute: function execute() {
						return _this.goTo(_this.currentRow, _this.prevColumn);
					}
				}),
				home: new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["g" /* Command */]({
					shortcut: 'home',
					canExecute: function canExecute() {
						return _canExecute() && _this.prevRow >= 0;
					},
					execute: function execute() {
						return _this.goTo(_this.firstRow, _this.currentColumn);
					}
				}),
				end: new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["g" /* Command */]({
					shortcut: 'end',
					canExecute: function canExecute() {
						return _canExecute() && _this.nextRow >= 0;
					},
					execute: function execute() {
						return _this.goTo(_this.lastRow, _this.currentColumn);
					}
				}),
				pageUp: new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["g" /* Command */]({
					shortcut: 'pageUp',
					canExecute: function canExecute() {
						return _canExecute() && _this.prevRow >= 0;
					},
					execute: function execute() {
						var body = table.body;
						var position = _this.positon(body.scrollTop() - body.rect().height, 'up');
						body.scrollTop(position.offset);
						_this.goTo(position.row, _this.currentColumn, 'navigation.scroll');
					}
				}),
				pageDown: new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["g" /* Command */]({
					shortcut: 'pageDown',
					canExecute: function canExecute() {
						return _canExecute() && _this.nextRow >= 0;
					},
					execute: function execute() {
						var body = table.body;
						var position = _this.positon(body.scrollTop() + body.rect().height, 'down');
						body.scrollTop(position.offset);
						_this.goTo(position.row, _this.currentColumn, 'navigation.scroll');
					}
				})
			};

			return new Map(Object.entries(commands));
		}
	}]);

	return Navigation;
}();

/***/ }),
/* 267 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationModel; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavigationModel = function () {
	function NavigationModel() {
		_classCallCheck(this, NavigationModel);

		this.cell = null;
	}

	_createClass(NavigationModel, [{
		key: "rowIndex",
		get: function get() {
			return this.cell ? this.cell.rowIndex : -1;
		}
	}, {
		key: "columnIndex",
		get: function get() {
			return this.cell ? this.cell.columnIndex : -1;
		}
	}, {
		key: "row",
		get: function get() {
			return this.cell ? this.cell.row : null;
		}
	}, {
		key: "column",
		get: function get() {
			return this.column ? this.cell.column : null;
		}
	}]);

	return NavigationModel;
}();

/***/ }),
/* 268 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__infrastructure__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navigation__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__definition__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationView; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var NavigationView = function (_View) {
	_inherits(NavigationView, _View);

	function NavigationView(model, table, commandManager) {
		_classCallCheck(this, NavigationView);

		var _this = _possibleConstructorReturn(this, (NavigationView.__proto__ || Object.getPrototypeOf(NavigationView)).call(this, model));

		_this.table = table;
		var shortcut = new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["j" /* Shortcut */](table, commandManager);
		var navigation = new __WEBPACK_IMPORTED_MODULE_2__navigation__["a" /* Navigation */](model, table);

		_this.shortcutOff = shortcut.register('navigation', navigation.commands);

		_this.blur = new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["g" /* Command */]({
			execute: function execute(row, column) {
				return table.body.cell(row, column).removeClass(__WEBPACK_IMPORTED_MODULE_3__definition__["a" /* GRID_PREFIX */] + '-focus');
			},
			canExecute: function canExecute(row, column, cell) {
				return cell && table.data.columns().indexOf(cell.column) >= 0 || !cell && table.body.cell(row, column).model !== null;
			}
		});

		_this.focus = new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["g" /* Command */]({
			execute: function execute(row, column) {
				return table.body.cell(row, column).addClass(__WEBPACK_IMPORTED_MODULE_3__definition__["a" /* GRID_PREFIX */] + '-focus');
			},
			canExecute: function canExecute(row, column, cell) {
				cell = cell || table.body.cell(row, column).model;
				return cell && cell.column.canFocus && table.data.columns().indexOf(cell.column) >= 0;
			}
		});

		_this.focusCell = new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["g" /* Command */]({
			execute: function execute(cell) {
				return model.navigation({ cell: cell });
			},
			canExecute: function canExecute(cell) {
				return cell && cell.column.canFocus && table.data.columns().indexOf(cell.column) >= 0 && cell !== model.navigation().cell;
			}
		});

		_this.scrollTo = new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["g" /* Command */]({
			execute: function execute(row, column) {
				return _this.scroll(table.body, table.body.cell(row, column));
			},
			canExecute: function canExecute(row, column) {
				return table.body.cell(row, column).model !== null;
			}
		});

		model.navigationChanged.watch(function (e) {
			if (e.hasChanges('cell')) {
				var navState = e.state;
				var newTarget = e.changes.cell.newValue;
				var oldTarget = e.changes.cell.oldValue;
				var newRow = navState.rowIndex;
				var newColumn = navState.columnIndex;
				var oldRow = e.changes.cell.oldValue ? e.changes.cell.oldValue.rowIndex : -1;
				var oldColumn = e.changes.cell.oldValue ? e.changes.cell.oldValue.columnIndex : -1;

				if (_this.blur.canExecute(oldRow, oldColumn, oldTarget)) {
					_this.blur.execute(oldRow, oldColumn);
				}

				if (_this.focus.canExecute(newRow, newColumn, newTarget)) {
					_this.focus.execute(newRow, newColumn);
				}

				if (e.tag.source !== 'navigation.scroll' && _this.scrollTo.canExecute(newRow, newColumn)) {
					_this.scrollTo.execute(newRow, newColumn);
				}

				model.focus({
					rowIndex: newRow,
					columnIndex: newColumn
				}, {
					source: 'navigation.view'
				});
			}
		});

		model.focusChanged.watch(function (e) {
			if (e.tag.source !== 'navigation.view') {
				model.navigation({
					cell: table.body.cell(e.state.rowIndex, e.state.columnIndex).model
				});
			}
		});

		model.viewChanged.watch(function () {
			return model.navigation({ cell: null });
		});
		return _this;
	}

	_createClass(NavigationView, [{
		key: 'scroll',
		value: function scroll(body, target) {
			var tr = target.rect();
			var cr = body.rect();
			var scrollState = this.model.scroll();

			if (cr.left > tr.left || cr.left > tr.right || cr.right < tr.left || cr.right < tr.right) {
				if (cr.left < tr.left || cr.right < tr.right) {
					body.scrollLeft(tr.right - cr.right + scrollState.left);
				} else if (cr.left > tr.left || cr.left > tr.right) {
					body.scrollLeft(tr.left - cr.left + scrollState.left);
				}
			}

			if (cr.top > tr.top || cr.top > tr.bottom || cr.bottom < tr.top || cr.bottom < tr.bottom) {
				if (cr.top < tr.top || cr.bottom < tr.bottom) {
					body.scrollTop(tr.bottom - cr.bottom + scrollState.top);
				} else if (cr.top > tr.top || cr.top > tr.bottom) {
					body.scrollTop(tr.top - cr.top + scrollState.top);
				}
			}
		}
	}, {
		key: 'destroy',
		value: function destroy() {
			this.shortcutOff();
		}
	}]);

	return NavigationView;
}(__WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */]);

/***/ }),
/* 269 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node__ = __webpack_require__(62);
/* harmony export (immutable) */ __webpack_exports__["a"] = nodeBuilder;



function nodeBuilder(columnMap, groupBy, valueFactory) {
	var level = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

	if (groupBy.length === 0) {
		return function () {
			return [];
		};
	}

	var groupKey = groupBy[0];
	if (!columnMap.hasOwnProperty(groupKey)) {
		throw new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["c" /* AppError */]('node.builder', 'can\'t find column "' + groupKey + '"');
	}

	var column = columnMap[groupKey];
	var getValue = valueFactory(column);
	return function (rows) {
		var getRowIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (i) {
			return i;
		};

		var keys = [];
		var nodes = [];
		var groups = {};
		for (var i = 0, length = rows.length; i < length; i++) {
			var row = rows[i];
			var index = getRowIndex(i);
			var key = getValue(row);
			if (!groups.hasOwnProperty(key)) {
				var node = new __WEBPACK_IMPORTED_MODULE_1__node__["a" /* Node */](key, level);
				node.rows.push(index);
				keys.push(key);
				nodes.push(node);
				groups[key] = {
					node: node,
					rows: [row]
				};
			} else {
				var group = groups[key];
				group.node.rows.push(index);
				group.rows.push(row);
				keys.push(key);
			}
		}

		var nextGroupBy = groupBy.slice(1);
		if (nextGroupBy.length) {
			var build = nodeBuilder(columnMap, nextGroupBy, valueFactory, level + 1);

			var _loop = function _loop(_i, _length) {
				var key = keys[_i];
				var group = groups[key];
				var node = group.node;
				var rows = node.rows;
				node.children = build(group.rows, function (i) {
					return rows[i];
				});
			};

			for (var _i = 0, _length = keys.length; _i < _length; _i++) {
				_loop(_i, _length);
			}
		}

		return nodes;
	};
}

/***/ }),
/* 270 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node__ = __webpack_require__(62);
/* harmony export (immutable) */ __webpack_exports__["a"] = flatView;


function flatView(nodes) {
	var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

	for (var i = 0, nodesLength = nodes.length; i < nodesLength; i++) {
		var node = nodes[i];
		result.push(node);

		if (node.state.expand) {
			var children = node.children;
			if (children.length) {
				flatView(children, result);
			} else {
				var rows = node.rows;
				for (var j = 0, rowsLength = rows.length; j < rowsLength; j++) {
					var row = rows[j];
					var rowNode = new __WEBPACK_IMPORTED_MODULE_0__node__["a" /* Node */](node.key, node.level + 1, 'row');
					rowNode.rows = [row];
					children.push(rowNode);
					result.push(rowNode);
				}
			}
		}
	}

	return result;
}

/***/ }),
/* 271 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationModel; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var PaginationModel = function PaginationModel() {
	_classCallCheck(this, PaginationModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["a" /* Resource */]();
	this.current = 0;
	this.size = 50;
	this.sizeList = [5, 10, 20, 30, 40, 50];
	this.count = 0;
};

/***/ }),
/* 272 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationView; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var PaginationView = function (_View) {
	_inherits(PaginationView, _View);

	function PaginationView(model) {
		_classCallCheck(this, PaginationView);

		var _this = _possibleConstructorReturn(this, (PaginationView.__proto__ || Object.getPrototypeOf(PaginationView)).call(this, model));

		model.dataChanged.watch(function (e) {
			if (e.hasChanges('rows') && e.tag.behavior !== 'core') {
				model.pagination({
					current: 0
				});
			}
		});

		model.filterChanged.watch(function (e) {
			if (e.hasChanges('by')) {
				model.pagination({
					current: 0
				});
			}
		});

		model.pivotChanged.watch(function (e) {
			if (e.hasChanges('by')) {
				model.pagination({
					current: 0
				});
			}
		});

		model.groupChanged.watch(function (e) {
			if (e.hasChanges('by')) {
				model.pagination({
					current: 0
				});
			}
		});
		return _this;
	}

	_createClass(PaginationView, [{
		key: 'current',
		get: function get() {
			return this.model.pagination().current;
		}
	}, {
		key: 'size',
		get: function get() {
			return this.model.pagination().size;
		}
	}]);

	return PaginationView;
}(__WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */]);

/***/ }),
/* 273 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_column_factory__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column_column_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_utility__ = __webpack_require__(1);
/* harmony export (immutable) */ __webpack_exports__["a"] = columnPipe;
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }





function columnPipe(memo, context, next) {
	var model = context.model;
	var pivot = memo.pivot;
	var nodes = memo.nodes;
	var heads = pivot.heads;
	var columns = [];
	var addSelectColumn = selectColumnFactory(model);
	var addGroupColumn = groupColumnFactory(model, nodes);
	var addDataColumns = dataColumnsFactory(model);
	var addPivotColumns = pivotColumnsFactory(model);
	var addPadColumn = padColumnFactory(model);

	/*
  * Add column with select boxes
  * if selection unit is row
  *
  */
	addSelectColumn(columns, { rowspan: heads.length, row: 0 });

	/*
  * Add group column with nodes
  *
  */
	addGroupColumn(columns, { rowspan: heads.length, row: 0 });

	columns.forEach(function (c, i) {
		return c.index = i;
	});

	/*
  * Add columns defined by user
  * that are visible
  *
  */
	addDataColumns(columns, { rowspan: heads.length, row: 0 });

	/*
  * Persist order of draggable columns
  *
  */
	var index = 0;
	var columnMap = __WEBPACK_IMPORTED_MODULE_1__column_column_service__["a" /* map */](columns.map(function (c) {
		return c.model;
	}));
	var indexMap = model.columnList().index.filter(function (key) {
		return columnMap.hasOwnProperty(key);
	}).reduce(function (memo, key) {
		memo[key] = index++;
		return memo;
	}, {});

	var hangoutColumns = columns.filter(function (c) {
		return !indexMap.hasOwnProperty(c.model.key);
	});
	var indexedColumns = columns.filter(function (c) {
		return indexMap.hasOwnProperty(c.model.key);
	});
	var startIndex = hangoutColumns.length;

	hangoutColumns.forEach(function (c, i) {
		return c.model.index = i;
	});
	indexedColumns.forEach(function (c) {
		return c.model.index = startIndex + indexMap[c.model.key];
	});

	columns.sort(function (x, y) {
		return x.model.index - y.model.index;
	});

	if (heads.length) {
		/*
   * Add column rows for pivoted data
   * if pivot is turned on
   *
   */

		memo.columns = addPivotColumns(columns, heads);
	} else {
		/*
   * Add special column type
   * that fills remaining place (width = 100%)
   *
   */
		addPadColumn(columns, { rowspan: heads.length, row: 0 });
		memo.columns = [columns];
	}

	next(memo);
}

function selectColumnFactory(model) {
	var dataColumns = model.data().columns;
	var selection = model.selection();

	var selectColumn = dataColumns.find(function (item) {
		return item.type === 'select';
	});
	var indicatorColumn = dataColumns.find(function (item) {
		return item.type === 'row-indicator';
	});

	if (!indicatorColumn && selection.unit === 'mix') {
		var createColumn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__column_column_factory__["a" /* columnFactory */])(model);
		return function (columns, context) {
			var selectColumn = createColumn('row-indicator');
			selectColumn.model.source = 'generation';
			selectColumn.rowspan = context.rowspan;
			columns.push(selectColumn);
			return selectColumn;
		};
	}

	if (!selectColumn && selection.unit === 'row' && selection.mode !== 'range') {
		var _createColumn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__column_column_factory__["a" /* columnFactory */])(model);
		return function (columns, context) {
			var selectColumn = _createColumn('select');
			selectColumn.model.source = 'generation';
			selectColumn.rowspan = context.rowspan;
			columns.push(selectColumn);
			return selectColumn;
		};
	}

	return __WEBPACK_IMPORTED_MODULE_2__services_utility__["b" /* noop */];
}

function groupColumnFactory(model, nodes) {
	var dataColumns = model.data().columns;
	var groupColumn = dataColumns.find(function (item) {
		return item.type === 'group';
	});
	if (nodes.length && !groupColumn) {
		var createColumn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__column_column_factory__["a" /* columnFactory */])(model);
		return function (columns, context) {
			var groupColumn = createColumn('group');
			groupColumn.model.source = 'generation';
			groupColumn.rowspan = context.rowspan;
			columns.push(groupColumn);
			return groupColumn;
		};
	}

	return __WEBPACK_IMPORTED_MODULE_2__services_utility__["b" /* noop */];
}

function dataColumnsFactory(model) {
	var createColumn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__column_column_factory__["a" /* columnFactory */])(model);
	return function (columns, context) {
		var dataColumns = model.data().columns;
		columns.push.apply(columns, _toConsumableArray(__WEBPACK_IMPORTED_MODULE_1__column_column_service__["b" /* dataView */](dataColumns.map(function (c) {
			var dataColumn = createColumn(c.type || 'text', c);
			dataColumn.rowspan = context.rowspan;
			return dataColumn;
		}), model)));

		return dataColumns;
	};
}

function padColumnFactory(model) {
	var createColumn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__column_column_factory__["a" /* columnFactory */])(model);
	return function (columns, context) {
		var padColumn = createColumn('pad');
		padColumn.rowspan = context.rowspan;
		columns.push(padColumn);
		return padColumn;
	};
}

function pivotColumnsFactory(model) {
	var createColumn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__column_column_factory__["a" /* columnFactory */])(model);
	var addPadColumn = padColumnFactory(model);
	return function (columns, heads) {
		var rows = [columns];

		/*
   * Data columns + first row pivot columns
   *
   */
		var head = heads[0];
		var headLength = head.length;
		var row = new Array(headLength);
		var startIndex = columns.length;
		for (var j = 0; j < headLength; j++) {
			var headColumn = head[j];
			var pivotColumn = createColumn('pivot');
			pivotColumn.colspan = headColumn.value;
			var pivotColumnModel = pivotColumn.model;
			pivotColumnModel.title = headColumn.key;
			pivotColumnModel.key = pivotColumnModel.key + ('[0][' + j + ']');

			pivotColumnModel.rowIndex = 0;
			pivotColumnModel.index = startIndex + j;
			row[j] = pivotColumn;
		}

		var firstRow = rows[0];
		firstRow.push.apply(firstRow, row);

		/*
   * Add special column type
   * that fills remaining place (width = 100%)
   *
   */
		addPadColumn(firstRow, { rowspan: 1, row: 0 });

		/*
   * Next rows pivot columns
   *
   */
		for (var i = 1, length = heads.length; i < length; i++) {
			var _head = heads[i];
			var _headLength = _head.length;
			var _row = new Array(_headLength);
			for (var _j = 0; _j < _headLength; _j++) {
				var _headColumn = _head[_j];
				var _pivotColumn = createColumn('pivot');
				_pivotColumn.colspan = _headColumn.value;
				var _pivotColumnModel = _pivotColumn.model;
				_pivotColumnModel.title = _headColumn.key;
				_pivotColumnModel.key = _pivotColumnModel.key + ('[' + i + '][' + _j + ']');

				_pivotColumnModel.rowIndex = i;
				_pivotColumnModel.index = _j;
				_row[_j] = _pivotColumn;
			}

			/*
    * Add special column type
    * that fills remaining place (width = 100%)
    *
    */
			addPadColumn(_row, { rowspan: 1, row: i });

			rows.push(_row);
		}

		return rows;
	};
}

/***/ }),
/* 274 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = dataPipe;
function dataPipe(data, context, next) {
	var model = context.model;
	var result = data.length ? data : model.data().rows;
	if (result.length) {
		model.data({ rows: result }, { source: 'data.pipe', behavior: 'core' });
	}

	next(result);
}

/***/ }),
/* 275 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = filterPipe;
function filterPipe(data, context, next) {
	var model = context.model;
	var filterState = model.filter();
	var match = filterState.match(context);
	var result = [];

	for (var i = 0, length = data.length; i < length; i++) {
		var item = data[i];
		if (match(item)) {
			result.push(item);
		}
	}

	next(result);
}

/***/ }),
/* 276 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_column_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node__ = __webpack_require__(27);
/* harmony export (immutable) */ __webpack_exports__["a"] = groupPipe;



function groupPipe(memo, context, next) {
	var model = context.model;
	var dataState = model.data();
	var groupState = model.group();

	var build = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__node__["b" /* nodeBuilder */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__column_column_service__["a" /* map */])(dataState.columns), groupState.by, context.valueFactory);

	memo.nodes = build(memo.rows);
	next(memo);
}

/***/ }),
/* 277 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = memoPipe;
function memoPipe(data, ctx, next) {
	next({
		rows: data,
		pivot: { heads: [], rows: [] },
		nodes: []
	});
}

/***/ }),
/* 278 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = paginationPipe;
function paginationPipe(data, context, next) {
	var model = context.model;
	if (model.scroll().mode !== 'virtual') {
		var paginationState = model.pagination();
		var size = paginationState.size;
		var current = paginationState.current;
		var start = current * size;

		model.pagination({ count: data.length }, { source: 'pagination.pipe', behavior: 'core' });
		next(data.slice(start, start + size));
	} else {
		next(data);
	}
}

/***/ }),
/* 279 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services__ = __webpack_require__(10);
/* harmony export (immutable) */ __webpack_exports__["a"] = build;


function build(model, valueFactory) {
	return function run(source, changes, pipe) {
		var pipes = pipe || model.data().pipe;
		var middleware = new __WEBPACK_IMPORTED_MODULE_0__services__["d" /* Middleware */](pipes);
		var context = {
			model: model,
			source: source,
			valueFactory: valueFactory,
			changes: changes
		};

		return middleware.run(context);
	};
}

/***/ }),
/* 280 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_column_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pivot__ = __webpack_require__(63);
/* harmony export (immutable) */ __webpack_exports__["a"] = pivotPipe;



function pivotPipe(memo, context, next) {
	var model = context.model;
	var dataState = model.data();
	var pivotState = model.pivot();
	var build = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__pivot__["a" /* build */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__column_column_service__["a" /* map */])(dataState.columns), pivotState.by, context.valueFactory);

	memo.pivot = build(memo.rows);
	next(memo);
}

/***/ }),
/* 281 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_utility__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sort_sort_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__column_column_service__ = __webpack_require__(6);
/* harmony export (immutable) */ __webpack_exports__["a"] = sortPipe;





function sortPipe(data, context, next) {
	var model = context.model;
	var by = model.sort().by;
	var result = data;

	if (by.length) {
		var columns = model.data().columns;
		var mappings = [];
		var directions = [];

		for (var i = 0, length = by.length; i < length; i++) {
			var sortEntry = by[i];
			var sortKey = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__sort_sort_service__["a" /* key */])(sortEntry);
			var sortDir = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__sort_sort_service__["b" /* direction */])(sortEntry);
			var sortColumn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__column_column_service__["c" /* find */])(columns, sortKey);
			if (!sortColumn) {
				throw new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["c" /* AppError */]('sort.pipe', 'Column "' + sortKey + '" is not found');
			}

			mappings.push(context.valueFactory(sortColumn));
			directions.push(sortDir);
		}

		result = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__services_utility__["m" /* orderBy */])(data, mappings, directions);
	}

	next(result);
}

/***/ }),
/* 282 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node__ = __webpack_require__(27);
/* harmony export (immutable) */ __webpack_exports__["a"] = viewPipe;


function viewPipe(memo, context, next) {
	var model = context.model;
	var rows = memo.nodes.length ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__node__["a" /* flatView */])(memo.nodes) : memo.rows;

	model.view({
		rows: rows,
		nodes: memo.nodes,
		pivot: memo.pivot,
		columns: memo.columns
	}, {
		source: 'view.pipe',
		behavior: 'core'
	});

	next(memo);
}

/***/ }),
/* 283 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_utility__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pivot__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pivot_form__ = __webpack_require__(102);
/* harmony export (immutable) */ __webpack_exports__["a"] = build;




function buildFactory(columnMap, valueFactory) {
	return function run(pivot, pivotBy) {
		var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

		var key = pivotBy[0];
		var column = columnMap[key];
		var getValue = valueFactory(column);

		return pivot({
			factory: function factory() {
				return {};
			},
			selector: function selector(row) {
				return [getValue(row)];
			},
			name: __WEBPACK_IMPORTED_MODULE_0__services_utility__["l" /* identity */],
			value: function value(parent, row, pivot) {
				var nextPivotBy = pivotBy.slice(1);
				if (nextPivotBy.length) {
					return run(pivot, nextPivotBy, level + 1)(row);
				}

				return true;
			}
		});
	};
}

function build(columnMap, pivotBy, valueFactory) {
	var doPivot = null;
	if (pivotBy.length) {
		var doBuild = buildFactory(columnMap, valueFactory);
		doPivot = doBuild(__WEBPACK_IMPORTED_MODULE_1__pivot__["a" /* pivot */], pivotBy);
	}

	return function (rows) {
		if (doPivot) {
			var data = doPivot(rows);
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__pivot_form__["a" /* pivotForm */])(data);
		}

		return { heads: [], rows: [] };
	};
}

/***/ }),
/* 284 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PivotModel; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var PivotModel = function PivotModel() {
	_classCallCheck(this, PivotModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["a" /* Resource */]();
	this.by = [];
};

/***/ }),
/* 285 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__group__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__infrastructure__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_value__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PivotView; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var PivotView = function (_View) {
	_inherits(PivotView, _View);

	function PivotView(model) {
		_classCallCheck(this, PivotView);

		var _this = _possibleConstructorReturn(this, (PivotView.__proto__ || Object.getPrototypeOf(PivotView)).call(this, model));

		_this.rows = [];
		_this.valueFactory = __WEBPACK_IMPORTED_MODULE_3__services_value__["c" /* getFactory */];

		model.viewChanged.watch(function () {
			return _this.invalidate(model);
		});
		return _this;
	}

	_createClass(PivotView, [{
		key: 'invalidate',
		value: function invalidate(model) {
			__WEBPACK_IMPORTED_MODULE_2__infrastructure__["i" /* Log */].info('view.pivot', 'invalidate');

			var pivot = model.view().pivot;
			var pivotRows = pivot.rows;
			if (pivotRows.length && model.group().by.length) {
				var build = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__group__["a" /* groupBuilder */])(model);
				this.rows = build(this.valueFactory);
			} else {
				this.rows = pivotRows;
			}
		}
	}, {
		key: 'value',
		value: function value(row, column) {
			var rowIndex = this.model.view().rows.indexOf(row);
			return this.rows[rowIndex][column.index];
		}
	}]);

	return PivotView;
}(__WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */]);

/***/ }),
/* 286 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plugin_model__ = __webpack_require__(287);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__plugin_model__["a"]; });


/***/ }),
/* 287 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PluginModel; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var PluginModel = function PluginModel() {
	_classCallCheck(this, PluginModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["a" /* Resource */]();
};

/***/ }),
/* 288 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__progress_model__ = __webpack_require__(289);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__progress_model__["a"]; });


/***/ }),
/* 289 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressModel; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var ProgressModel = function ProgressModel() {
	_classCallCheck(this, ProgressModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["a" /* Resource */]();
	this.isBusy = false;
	this.queue = [];
};

/***/ }),
/* 290 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resource_enumerable__ = __webpack_require__(104);
/* harmony export (immutable) */ __webpack_exports__["a"] = factory;



function factory(resource, key) {
	var data = resource.data;
	var scope = resource.scope;
	if (resource instanceof __WEBPACK_IMPORTED_MODULE_1__resource_enumerable__["a" /* EnumerableResource */]) {
		var keyIndex = 1;
		var count = resource.count;
		var originKey = key;
		while (data.hasOwnProperty(key)) {
			key = originKey + keyIndex++;
		}

		if (count < keyIndex) {
			count = keyIndex;
		}

		return function (content, env) {
			// TODO: do we need full clone here?
			data[key] = content;
			if (Object.keys(env).length) {
				scope[key] = env;
			}
			return new __WEBPACK_IMPORTED_MODULE_1__resource_enumerable__["a" /* EnumerableResource */](data, scope, count);
		};
	}

	return function (content, env) {
		// TODO: do we need full clone here?
		data[key] = content;
		if (Object.keys(env).length) {
			scope[key] = env;
		}
		return new __WEBPACK_IMPORTED_MODULE_0__resource__["a" /* Resource */](data, scope);
	};
}

/***/ }),
/* 291 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__row_model__ = __webpack_require__(292);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__row_model__["a"]; });


/***/ }),
/* 292 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RowModel; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var RowModel = function RowModel() {
	_classCallCheck(this, RowModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["a" /* Resource */]();

	this.height = 0;
};

/***/ }),
/* 293 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollModel; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ScrollModel = function ScrollModel() {
	_classCallCheck(this, ScrollModel);

	this.mode = 'default';

	this.top = 0;
	this.left = 0;
	this.width = 0;
	this.height = 0;
};

/***/ }),
/* 294 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__infrastructure__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollView; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var ScrollView = function (_View) {
	_inherits(ScrollView, _View);

	function ScrollView(model, table, vscroll, gridService) {
		_classCallCheck(this, ScrollView);

		var _this = _possibleConstructorReturn(this, (ScrollView.__proto__ || Object.getPrototypeOf(ScrollView)).call(this, model));

		_this.table = table;

		var scroll = model.scroll;
		_this.y = vscroll.factory({
			threshold: model.pagination().size,
			rowHeight: model.row().height
		});

		var apply = _this.y.container.apply;
		_this.y.container.apply = function (f) {
			apply(function () {
				f();
				var container = _this.y.container;
				_this.model.pagination({
					current: Math.floor(container.position / model.pagination().size),
					count: container.total
				}, {
					source: 'scroll.view',
					behavior: 'core'
				});
			});
		};

		switch (scroll().mode) {
			case 'virtual':
				{
					_this.y.settings.fetch = function (skip, take, d) {
						_this.model.pagination({
							current: Math.floor(skip / take)
						}, {
							source: 'scroll.view',
							behavior: 'core'
						});

						gridService.invalidate('scroll.view').then(d.resolve(model.view().rows.length));
					};

					break;
				}
			default:
				model.paginationChanged.watch(function () {
					_this.y.container.reset();
				});
		}

		model.scrollChanged.watch(function (e) {
			if (e.hasChanges('left') || e.hasChanges('top')) {
				_this.invalidate(e.tag.pin);
			}
		});
		return _this;
	}

	_createClass(ScrollView, [{
		key: 'invalidate',
		value: function invalidate(pin) {
			__WEBPACK_IMPORTED_MODULE_1__infrastructure__["i" /* Log */].info('layout', 'invalidate scroll');

			var table = this.table;
			var scroll = this.model.scroll();
			if (pin === this.table.pin) {
				table.head.scrollLeft(scroll.left);
				table.foot.scrollLeft(scroll.left);
			}

			table.body.scrollTop(scroll.top);
		}
	}, {
		key: 'mode',
		get: function get() {
			return this.model.scroll().mode;
		}
	}]);

	return ScrollView;
}(__WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */]);

/***/ }),
/* 295 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_utility__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectionModel; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var SelectionModel = function SelectionModel() {
	_classCallCheck(this, SelectionModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["a" /* Resource */]();
	this.unit = 'cell'; //row|cell|column|mix
	this.mode = 'single'; //single|multiple|range
	this.entries = [];
	this.items = [];
	this.key = {
		row: __WEBPACK_IMPORTED_MODULE_1__services_utility__["l" /* identity */],
		column: __WEBPACK_IMPORTED_MODULE_1__services_utility__["l" /* identity */]
	};
};

/***/ }),
/* 296 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__infrastructure__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__state__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__range_build__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__definition__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_utility__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectionView; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var SelectionView = function (_View) {
	_inherits(SelectionView, _View);

	function SelectionView(model, table, commandManager) {
		_classCallCheck(this, SelectionView);

		var _this = _possibleConstructorReturn(this, (SelectionView.__proto__ || Object.getPrototypeOf(SelectionView)).call(this, model));

		_this.table = table;

		_this.selectionState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__state__["a" /* selectionStateFactory */])(model);
		_this.buildRange = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__range_build__["a" /* rangeBuilder */])(model);

		var shortcut = new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["j" /* Shortcut */](table, commandManager);
		var commands = _this.commands;
		_this.shortcutOff = shortcut.register('selectionNavigation', commands);
		_this.toggleRow = commands.get('toggleRow');
		_this.toggleColumn = commands.get('toggleColumn');
		_this.toggleCell = commands.get('toggleCell');

		_this.reset = commands.get('reset');

		model.dataChanged.watch(function () {
			_this.selectionState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__state__["a" /* selectionStateFactory */])(model);

			var items = model.selection().items;
			var entries = _this.selectionState.lookup(items);

			_this.select(entries);
		});

		model.navigationChanged.watch(function (e) {
			if (e.hasChanges('cell') && e.tag.source !== 'selection') {
				var selectionState = model.selection();
				if (selectionState.unit === 'cell' && selectionState.mode === 'single') {
					if (e.state.cell) {
						_this.select(e.state.cell, true);
					}
				}
			}
		});

		model.selectionChanged.watch(function (e) {
			if (e.hasChanges('mode')) {
				var newClassName = __WEBPACK_IMPORTED_MODULE_4__definition__["a" /* GRID_PREFIX */] + '-select-' + model.selection().mode;
				var view = table.view;
				view.addClass(newClassName);

				if (e.changes.mode.oldValue != e.changes.mode.newValue) {
					var oldClassName = __WEBPACK_IMPORTED_MODULE_4__definition__["a" /* GRID_PREFIX */] + '-select-' + e.changes.mode.oldValue;
					view.removeClass(oldClassName);
				}
			}

			if (e.hasChanges('unit') || e.hasChanges('mode')) {
				if (!e.hasChanges('items') && !e.hasChanges('entries')) {
					model.selection({
						items: [],
						entries: []
					});
					_this.selectionState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__state__["a" /* selectionStateFactory */])(model);
				}

				model.navigation({ cell: null }, { source: 'selection' });
			}

			if (e.hasChanges('entries') && !e.hasChanges('items')) {
				var entries = model.selection().entries;
				model.selection({
					items: _this.selectionState.view(entries),
					entries: entries
				});
			}
		});
		return _this;
	}

	_createClass(SelectionView, [{
		key: 'selectRange',
		value: function selectRange(startCell, endCell) {
			var range = this.buildRange(startCell, endCell);
			this.select(range);
		}
	}, {
		key: 'select',
		value: function select(items) {
			if (arguments.length && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__services_utility__["d" /* isUndefined */])(items)) {
				if (this.selection.mode === 'range') {
					this.selectionState.clear();
					this.selectionState.toggle(items, true);
				} else {
					this.selectionState.toggle(items);
				}
			} else {
				if (this.state() || this.model.selection().mode === 'single') {
					this.selectionState.clear();
				} else {
					this.selectionState.select(this.model.view().rows, true);
				}
			}

			var entries = this.selectionState.entries();
			this.model.selection({
				entries: entries
			}, { source: 'toggle' });
		}
	}, {
		key: 'state',
		value: function state(item) {
			if (!arguments.length) {
				item = this.model.view().rows;
			}

			return this.selectionState.state(item) === true;
		}
	}, {
		key: 'isIndeterminate',
		value: function isIndeterminate(item) {
			if (!arguments.length) {
				item = this.model.view().rows;
			}

			return this.selectionState.state(item) === null;
		}
	}, {
		key: 'destroy',
		value: function destroy() {
			this.shortcutOff();
		}
	}, {
		key: 'commands',
		get: function get() {
			var _this2 = this;

			var model = this.model;
			var table = this.table;
			var commands = {
				toggleRow: new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["g" /* Command */]({
					execute: function execute(item, state) {
						_this2.select(item, state);
					}
				}),
				toggleColumn: new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["g" /* Command */]({
					execute: function execute(item, state) {
						_this2.select(item, state);
					}
				}),
				toggleCell: new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["g" /* Command */]({
					execute: function execute(item, state) {
						_this2.select(item, state);
					}
				}),
				toggleActiveRow: new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["g" /* Command */]({
					shortcut: 'shift+space',
					execute: function execute() {
						var navState = model.navigation();
						var rowIndex = navState.rowIndex;

						var row = void 0;
						if (rowIndex >= 0) {
							row = _this2.rows[rowIndex];
						} else {
							row = _this2.rows[rowIndex + 1];
							model.navigation({
								cell: table.body.cell(rowIndex + 1, navState.columnIndex)
							}, {
								source: 'selection'
							});
						}

						_this2.select(row);
					},
					canExecute: function canExecute() {
						return model.selection().unit === 'row' && _this2.rows.length > 0;
					}
				}),
				togglePrevRow: new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["g" /* Command */]({
					shortcut: 'shift+up',
					execute: function execute() {
						var navState = model.navigation();
						var rowIndex = navState.rowIndex - 1;
						var row = _this2.rows[rowIndex];
						_this2.select(row);
						model.navigation({ cell: table.body.cell(rowIndex, navState.columnIndex).model }, { source: 'selection' });
					},
					canExecute: function canExecute() {
						return model.selection().unit === 'row' && model.navigation().rowIndex > 0;
					}
				}),
				toggleNextRow: new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["g" /* Command */]({
					shortcut: 'shift+down',
					execute: function execute() {
						var navState = model.navigation();
						var rowIndex = navState.rowIndex + 1;
						var row = _this2.rows[rowIndex];
						_this2.select(row);
						model.navigation({ cell: table.body.cell(rowIndex, navState.columnIndex).model }, { source: 'selection' });
					},
					canExecute: function canExecute() {
						return model.selection().unit === 'row' && model.navigation().rowIndex < _this2.rows.length - 1;
					}
				}),
				toggleActiveColumn: new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["g" /* Command */]({
					shortcut: 'ctrl+space',
					execute: function execute() {
						var columnIndex = model.navigation().columnIndex;
						var entries = Array.from(model.selection().entries);
						var column = _this2.columns[columnIndex].key;
						_this2.select([].concat(_toConsumableArray(entries), [column]));
					},
					canExecute: function canExecute() {
						return model.selection().unit === 'column' && model.navigation().columnIndex >= 0;
					}
				}),
				toggleNextColumn: new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["g" /* Command */]({
					shortcut: 'shift+right',
					execute: function execute() {
						var navState = model.navigation();
						var columnIndex = navState.columnIndex + 1;
						var column = _this2.columns[columnIndex].key;
						_this2.select(column);
						model.navigation({ cell: table.body.cell(navState.rowIndex, columnIndex).model }, { source: 'selection' });
					},
					canExecute: function canExecute() {
						return model.selection().unit === 'column' && model.navigation().columnIndex < _this2.columns().length - 1;
					}
				}),
				togglePrevColumn: new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["g" /* Command */]({
					shortcut: 'shift+left',
					execute: function execute() {
						var navState = model.navigation();
						var columnIndex = navState.columnIndex - 1;
						var column = _this2.columns[columnIndex].key;
						_this2.select(column);
						model.navigation({ cell: table.body.cell(navState.rowIndex, columnIndex).model }, { source: 'selection' });
					},
					canExecute: function canExecute() {
						return model.selection().unit === 'column' && model.navigation().columnIndex > 0;
					}
				}),
				selectAll: new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["g" /* Command */]({
					shortcut: 'ctrl+a',
					execute: function execute() {
						return _this2.select();
					},
					canExecute: function canExecute() {
						return model.selection().mode === 'multiple';
					}
				}),
				reset: new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["g" /* Command */]({
					execute: function execute() {
						_this2.reset();
					}
				})
			};

			return new Map(Object.entries(commands));
		}
	}, {
		key: 'selection',
		get: function get() {
			return this.model.selection();
		}
	}, {
		key: 'rows',
		get: function get() {
			return this.table.data.rows();
		}
	}, {
		key: 'columns',
		get: function get() {
			return this.table.data.columns();
		}
	}]);

	return SelectionView;
}(__WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */]);

/***/ }),
/* 297 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__multiple_selection_state__ = __webpack_require__(108);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selection_state_factory__ = __webpack_require__(298);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__selection_state_factory__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selection_state__ = __webpack_require__(65);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__single_selection_state__ = __webpack_require__(109);
/* unused harmony namespace reexport */





/***/ }),
/* 298 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__single_selection_state__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__multiple_selection_state__ = __webpack_require__(108);
/* harmony export (immutable) */ __webpack_exports__["a"] = selectionStateFactory;




function selectionStateFactory(model) {
	var mode = model.selection().mode;
	switch (mode) {
		case 'single':
			return new __WEBPACK_IMPORTED_MODULE_1__single_selection_state__["a" /* SingleSelectionState */](model);
		case 'multiple':
		case 'range':
			return new __WEBPACK_IMPORTED_MODULE_2__multiple_selection_state__["a" /* MultipleSelectionState */](model);
		default:
			throw new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["c" /* AppError */]('selection.state.factory', 'Invalid selection mode "' + mode + '"');
	}
}

/***/ }),
/* 299 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Aggregation; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Aggregation = function () {
	function Aggregation() {
		_classCallCheck(this, Aggregation);
	}

	_createClass(Aggregation, null, [{
		key: 'first',
		value: function first(rows, getValue) {
			if (!rows.length) {
				return null;
			}

			return getValue(rows[0]);
		}
	}, {
		key: 'last',
		value: function last(rows, getValue) {
			if (!rows.length) {
				return null;
			}

			return getValue(rows[rows.length - 1]);
		}
	}, {
		key: 'max',
		value: function max(rows, getValue) {
			if (!rows.length) {
				return null;
			}

			var length = rows.length;
			var i = 0;
			var max = getValue(rows[i++]);

			while (i < length) {
				if (getValue(rows[i]) > max) {
					max = getValue(rows[i]);
				}
				i++;
			}

			return max;
		}
	}, {
		key: 'min',
		value: function min(rows, getValue) {
			if (!rows.length) {
				return null;
			}

			var length = rows.length;
			var i = 0;
			var min = getValue(rows[i++]);

			while (i < length) {
				if (getValue(rows[i]) < min) {
					min = getValue(rows[i]);
				}
				i++;
			}

			return min;
		}
	}, {
		key: 'minMax',
		value: function minMax(rows, getValue) {
			if (!rows.length) {
				return null;
			}

			var length = rows.length;
			var i = 0;
			var min = getValue(rows[i++]);
			var max = min;

			while (i < length) {
				if (getValue(rows[i]) < min) {
					min = getValue(rows[i]);
				}

				if (getValue(rows[i]) > max) {
					max = getValue(rows[i]);
				}

				i++;
			}

			return [min, max];
		}
	}, {
		key: 'avg',
		value: function avg(rows, getValue, options) {
			if (!rows.length) {
				return null;
			}

			if (options.distinct) {
				var uniqueSet = new Set();
				return Aggregation.sum(rows, getValue, options, uniqueSet) / uniqueSet.size;
			}

			return Aggregation.sum(rows, getValue) / rows.length;
		}
	}, {
		key: 'sum',
		value: function sum(rows, getValue, options, container) {
			if (!rows.length) {
				return null;
			}

			var length = rows.length;
			var i = 0;
			var sum = 0;

			if (options.distinct) {
				var uniqueValues = container || new Set();
				var value = null;

				while (i < length) {
					value = Number(getValue(rows[i]));

					if (!uniqueValues.has(value)) {
						sum += value;
						uniqueValues.add(value);
					}

					i++;
				}

				return sum;
			}

			while (i < length) {
				sum += Number(getValue(rows[i]));
				i++;
			}

			return sum;
		}
	}, {
		key: 'join',
		value: function join(rows, getValue, options) {
			if (!rows.length) {
				return null;
			}

			var separator = options.separator || '';
			var length = rows.length;
			var i = 0;
			var join = getValue(rows[i++]);

			if (options.distinct) {
				var uniqueValues = new Set();
				var value = join;
				uniqueValues.add(value);

				while (i < length) {
					value = getValue(rows[i]);

					if (!uniqueValues.has(value)) {
						join += separator + value;
						uniqueValues.add(value);
					}

					i++;
				}

				return join;
			}

			while (i < length) {
				join += separator + getValue(rows[i]);
				i++;
			}

			return join;
		}
	}, {
		key: 'count',
		value: function count(rows, getValue, options) {
			if (!rows.length) {
				return null;
			}

			if (options.distinct) {
				var length = rows.length;
				var i = 0;
				var uniqueValues = new Set();
				var value = null;

				while (i < length) {
					value = Number(getValue(rows[i]));
					uniqueValues.add(value);
					i++;
				}

				return uniqueValues.size;
			}

			return rows.length;
		}
	}]);

	return Aggregation;
}();

/***/ }),
/* 300 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utility__ = __webpack_require__(1);
/* harmony export (immutable) */ __webpack_exports__["a"] = parseFactory;
/* harmony export (immutable) */ __webpack_exports__["b"] = getType;
/* unused harmony export isPrimitive */


function parseFactory(type) {
	switch (type) {
		case 'text':
		case 'currency':
			return parseText;
		case 'number':
			return parseNumber;
		case 'date':
			return parseDate;
		case 'bool':
			return parseBool;
		default:
			return __WEBPACK_IMPORTED_MODULE_0__utility__["l" /* identity */];
	}
}

function getType(value) {
	if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utility__["n" /* isArray */])(value)) {
		if (value.length) {
			var itemType = getType(value[0]);
			if (!isPrimitive(itemType)) {
				return 'collection';
			}
		}

		return 'array';
	}

	if (parseNumber(value) !== null && !isNaN(value)) {
		return 'number';
	}

	if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utility__["o" /* isBoolean */])(value)) {
		return 'bool';
	}

	if (parseDate(value) !== null) {
		return 'date';
	}

	if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utility__["c" /* isObject */])(value)) {
		return 'object';
	}

	if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utility__["p" /* isEmail */])(value)) {
		return 'email';
	}

	return 'text';
}

function isPrimitive(type) {
	switch (type) {
		case 'date':
		case 'bool':
		case 'text':
		case 'number':
		case 'email':
			return true;
		default:
			return false;
	}
}

function parseBool(value) {
	return value === 'true' ? true : value === 'false' ? false : null;
}

function parseText(value) {
	return '' + value;
}

function parseDate(value) {
	if (value === null) {
		return null;
	}

	var date = new Date(value);
	if (date !== 'Invalid Date' && !isNaN(date)) {
		return date;
	}

	return null;
}

function parseNumber(value) {
	var number = parseFloat(value);
	if (!isNaN(number) && isFinite(number)) {
		return number;
	}

	return null;
}

// function parseInteger(value) {
// 	const number = parseInt(value);
// 	if (!isNaN(number) && isFinite(number)) {
// 		return number;
// 	}
//
// 	return null;
// }

/***/ }),
/* 301 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipe__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__infrastructure__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_utility__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_value__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridService; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }







var GridService = function () {
	function GridService(model) {
		var apply = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : __WEBPACK_IMPORTED_MODULE_2__services_utility__["b" /* noop */];

		_classCallCheck(this, GridService);

		this.model = model;
		this.apply = apply;
	}

	_createClass(GridService, [{
		key: 'invalidate',
		value: function invalidate() {
			var source = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'invalidate';
			var changes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
			var pipe = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

			__WEBPACK_IMPORTED_MODULE_1__infrastructure__["i" /* Log */].info('invalidate', source);

			var model = this.model;
			model.head().cache.clear();
			model.body().cache.clear();
			model.foot().cache.clear();

			var cancelBusy = this.busy();
			var run = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__pipe__["a" /* build */])(model, __WEBPACK_IMPORTED_MODULE_4__services_value__["c" /* getFactory */]);
			return run(source, changes, pipe).then(this.apply).then(cancelBusy).catch(cancelBusy);
		}
	}, {
		key: 'busy',
		value: function busy() {
			var id = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__services__["b" /* guid */])();
			var progress = this.model.progress;
			progress({ queue: progress().queue.concat([id]) });
			return function () {
				var queue = Array.from(progress().queue);
				var index = queue.indexOf(id);
				if (index >= 0) {
					queue.splice(index, 1);
					progress({ queue: queue });
				}
			};
		}
	}]);

	return GridService;
}();

/***/ }),
/* 302 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = guid;
function guid() {
	function p8(s) {
		var p = (Math.random().toString(16) + '000000000').substr(2, 8);
		return s ? '-' + p.substr(0, 4) + '-' + p.substr(4, 4) : p;
	}

	return p8() + p8(true) + p8(true) + p8();
}

/***/ }),
/* 303 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = build;
function build(style) {
	return Object.keys(style).reduce(function (memo, key) {
		var entry = style[key];
		var body = Object.keys(entry).reduce(function (memo, key) {
			memo.push(key + ':' + entry[key] + ' !important;');
			return memo;
		}, []);

		memo.push(key + '{' + body.join('') + '}');
		return memo;
	}, []).join('');
}

/***/ }),
/* 304 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utility__ = __webpack_require__(1);
/* harmony export (immutable) */ __webpack_exports__["a"] = merge;


function merge(settings) {
	var context = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utility__["g" /* assignWith */])({
		equals: function equals(l, r) {
			return l === r;
		},
		update: function update(l, r /*left, i*/) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utility__["g" /* assignWith */])(l, r);
			return l;
		},
		remove: function remove(l, left, i) {
			left.splice(i, 1);
			return l;
		},
		insert: function insert(r, left) {
			left.push(r);
			return r;
		}
	}, settings);

	return function (left, right, result) {
		var ls = left.slice();
		var rs = right.slice();
		var updated = 0;
		var removed = 0;

		result = result || left;
		for (var i = 0, lsLength = ls.length; i < lsLength; i++) {
			var l = ls[i];
			var matched = false;
			for (var j = 0, rsLength = rs.length; j < rsLength; j++) {
				var r = rs[j];
				if (context.equals(l, r, i, j)) {
					context.update(l, r, result, result.indexOf(l));
					updated++;
					matched = true;
					rs.splice(j, 1);
					break;
				}
			}

			if (!matched) {
				context.remove(l, result, result.indexOf(l));
				removed++;
			}
		}

		var inserted = rs.length;
		for (var _i = 0; _i < inserted; _i++) {
			context.insert(rs[_i], result);
		}

		if (context.sort) {
			left.sort(context.sort(left, right));
		}

		return {
			updated: updated,
			removed: removed,
			inserted: inserted
		};
	};
}

/***/ }),
/* 305 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Middleware; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Middleware = function () {
	function Middleware(pipes) {
		_classCallCheck(this, Middleware);

		this.pipes = pipes;
	}

	_createClass(Middleware, [{
		key: "run",
		value: function run(context) {
			var memo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

			var pipes = this.pipes.map(function (pipe) {
				return function (memo) {
					return new Promise(function (resolve, reject) {
						return pipe(memo, context, resolve, reject);
					});
				};
			});

			return start(pipes, memo);
		}
	}]);

	return Middleware;
}();

function start(pipes, memo) {
	pipes = Array.from(pipes);
	return new Promise(function (resolve, reject) {
		invoke(memo);

		function invoke(memo) {
			if (pipes.length) {
				var pipe = pipes.shift();
				var promise = pipe(memo);
				promise.then(invoke).catch(function (ex) {
					reject(ex);
					throw ex;
				});
			} else {
				resolve(memo);
			}
		}
	});
}

/***/ }),
/* 306 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["a"] = key;
/* harmony export (immutable) */ __webpack_exports__["b"] = index;
/* harmony export (immutable) */ __webpack_exports__["c"] = value;
/* harmony export (immutable) */ __webpack_exports__["d"] = map;


function key(pair) {
	var key = Object.keys(pair)[0];
	if (!key) {
		throw new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["c" /* AppError */]('pair', 'Key is not defined in "' + pair + '"');
	}

	return key;
}

function index(pairs, pairKey) {
	return pairs.map(key).findIndex(function (k) {
		return k === pairKey;
	});
}

function value(pair) {
	var pairKey = key(pair);
	return pair[pairKey];
}

function map(pairs) {
	return pairs.reduce(function (memo, pair) {
		var pairKey = key(pair);
		memo[pairKey] = pair[pairKey];
		return memo;
	}, {});
}

/***/ }),
/* 307 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortModel; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var SortModel = function SortModel() {
	_classCallCheck(this, SortModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["a" /* Resource */]();
	this.by = [];
	this.mode = 'multiple';
	this.trigger = ['reorder'];
};

/***/ }),
/* 308 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__infrastructure__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__column_column_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sort_sort_service__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortView; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var SortView = function (_View) {
	_inherits(SortView, _View);

	function SortView(model) {
		_classCallCheck(this, SortView);

		var _this = _possibleConstructorReturn(this, (SortView.__proto__ || Object.getPrototypeOf(SortView)).call(this, model));

		_this.hover = false;
		_this.toggle = new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["g" /* Command */]({
			canExecute: function canExecute(column) {
				var key = column.key;
				var map = __WEBPACK_IMPORTED_MODULE_2__column_column_service__["a" /* map */](model.data().columns);
				return map.hasOwnProperty(key) && map[key].canSort !== false;
			},
			execute: function execute(column) {
				var key = column.key;
				var sort = model.sort;
				var sortState = sort();
				var by = Array.from(sortState.by);
				var index = __WEBPACK_IMPORTED_MODULE_3__sort_sort_service__["c" /* index */](by, key);
				if (index >= 0) {
					var dir = __WEBPACK_IMPORTED_MODULE_3__sort_sort_service__["b" /* direction */](by[index]);
					switch (dir) {
						case 'desc':
							{
								by.splice(index, 1);
								_this.hover = false;
								break;
							}
						case 'asc':
							{
								var entry = _defineProperty({}, key, 'desc');
								by.splice(index, 1);
								by.splice(index, 0, entry);
								_this.hover = false;
								break;
							}
						default:
							throw __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__infrastructure__["c" /* AppError */])('head.core', 'Invalid sort direction ' + dir);
					}
				} else {
					if (sortState.mode === 'single') {
						by.length = 0;
					}

					var _entry2 = _defineProperty({}, key, 'asc');
					by.push(_entry2);
				}

				sort({ by: by });
			}
		});

		_this.onInit();
		return _this;
	}

	_createClass(SortView, [{
		key: 'onInit',
		value: function onInit() {
			var _this2 = this;

			var model = this.model;
			var sort = model.sort;

			model.columnListChanged.watch(function (e) {
				if (e.hasChanges('index')) {
					var sortState = sort();
					if (sortState.trigger.indexOf('reorder') >= 0) {
						var index = 0;
						var indexMap = model.columnList().index.reduce(function (memo, key) {
							memo[key] = index++;
							return memo;
						}, {});

						var sortBy = Array.from(sortState.by);
						sortBy.sort(function (x, y) {
							return indexMap[__WEBPACK_IMPORTED_MODULE_3__sort_sort_service__["a" /* key */](x)] - indexMap[__WEBPACK_IMPORTED_MODULE_3__sort_sort_service__["a" /* key */](y)];
						});

						if (!_this2.equals(sortBy, sortState.by)) {
							sort({ by: sortBy });
						}
					}
				}
			});

			model.dataChanged.watch(function (e) {
				if (e.hasChanges('columns')) {
					var sortState = sort();
					var columnMap = __WEBPACK_IMPORTED_MODULE_2__column_column_service__["a" /* map */](e.state.columns);
					var sortBy = sortState.by.filter(function (entry) {
						return columnMap.hasOwnProperty(__WEBPACK_IMPORTED_MODULE_3__sort_sort_service__["a" /* key */](entry));
					});
					if (!_this2.equals(sortBy, sortState.by)) {
						sort({ by: sortBy });
					}
				}
			});
		}
	}, {
		key: 'equals',
		value: function equals(x, y) {
			return JSON.stringify(x) === JSON.stringify(y);
		}
	}, {
		key: 'direction',
		value: function direction(column) {
			var key = column.key;
			var state = this.model.sort();
			var by = state.by;
			return __WEBPACK_IMPORTED_MODULE_3__sort_sort_service__["d" /* map */](by)[key];
		}
	}, {
		key: 'order',
		value: function order(column) {
			var key = column.key;
			var state = this.model.sort();
			var by = state.by;
			return __WEBPACK_IMPORTED_MODULE_3__sort_sort_service__["c" /* index */](by, key);
		}
	}]);

	return SortView;
}(__WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */]);

/***/ }),
/* 309 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_utility__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StyleModel; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var StyleModel = function StyleModel() {
	_classCallCheck(this, StyleModel);

	this.row = __WEBPACK_IMPORTED_MODULE_0__services_utility__["b" /* noop */];
	this.cell = __WEBPACK_IMPORTED_MODULE_0__services_utility__["b" /* noop */];
};

/***/ }),
/* 310 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_style__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__column_column_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_value__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StyleView; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var StyleView = function (_View) {
	_inherits(StyleView, _View);

	function StyleView(model, table) {
		_classCallCheck(this, StyleView);

		var _this = _possibleConstructorReturn(this, (StyleView.__proto__ || Object.getPrototypeOf(StyleView)).call(this, model));

		_this.table = table;
		_this.valueFactory = __WEBPACK_IMPORTED_MODULE_3__services_value__["c" /* getFactory */];
		_this.active = {
			row: false,
			cell: false
		};

		_this.monitor = {
			row: new __WEBPACK_IMPORTED_MODULE_1__services_style__["a" /* Monitor */](model),
			cell: new __WEBPACK_IMPORTED_MODULE_1__services_style__["a" /* Monitor */](model)
		};

		model.viewChanged.watch(function () {
			_this.invalidate();
		});

		model.styleChanged.watch(function (e) {
			if (e.hasChanges('row')) {
				_this.active.row = true;
			}

			if (e.hasChanges('cell')) {
				_this.active.cell = true;
			}

			_this.invalidate();
		});
		return _this;
	}

	_createClass(StyleView, [{
		key: 'invalidate',
		value: function invalidate() {
			var active = this.active;
			if (!(active.row || active.cell)) {
				return;
			}

			var table = this.table;
			var valueFactory = this.valueFactory;
			var model = this.model;
			var styleState = model.style();
			var dataRows = model.view().rows;
			var bodyRows = table.body.rows();
			var rowMonitor = this.monitor.row;
			var cellMonitor = this.monitor.cell;
			var columns = table.data.columns();
			var columnMap = __WEBPACK_IMPORTED_MODULE_2__column_column_service__["a" /* map */](columns);
			// TODO: improve perfomance
			var value = function value(row, column) {
				return valueFactory(column)(row);
			};
			var domCell = cellMonitor.enter();
			var domRow = rowMonitor.enter();
			try {
				for (var i = 0, rowsLength = Math.min(bodyRows.length, dataRows.length); i < rowsLength; i++) {
					var dataRow = dataRows[i];
					// TODO: get rid of '.element'
					var bodyRow = bodyRows[i].element;

					if (active.row) {
						var rowContext = {
							class: domRow(bodyRow),
							row: i,
							value: value,
							columns: {
								map: columnMap,
								list: columns
							}
						};

						styleState.row(dataRow, rowContext);
					}

					if (active.cell) {
						var cells = bodyRow.cells;
						for (var j = 0, cellsLength = cells.length; j < cellsLength; j++) {
							var cell = cells[j];
							var column = columns[j];
							var cellContext = {
								class: domCell(cell),
								row: i,
								column: j,
								value: value,
								columns: {
									map: columnMap,
									list: columns
								}
							};

							styleState.cell(dataRow, column, cellContext);
						}
					}
				}
			} finally {
				rowMonitor.exit(domRow);
				cellMonitor.exit(domCell);
			}
		}
	}]);

	return StyleView;
}(__WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */]);

/***/ }),
/* 311 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__table_view__ = __webpack_require__(312);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__table_view__["a"]; });


/***/ }),
/* 312 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableView; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TableView = function TableView(model) {
	_classCallCheck(this, TableView);

	this.model = model;
};

/***/ }),
/* 313 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TemplateModel */
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TemplateModel = function TemplateModel() {
	_classCallCheck(this, TemplateModel);

	this.resource = {};
};

/***/ }),
/* 314 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_utility__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplatePath; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var resolvers = {};

var TemplatePath = function () {
	function TemplatePath() {
		_classCallCheck(this, TemplatePath);
	}

	_createClass(TemplatePath, null, [{
		key: 'register',
		value: function register(name, resolve) {
			if (resolvers.hasOwnProperty(name)) {
				throw new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["c" /* AppError */]('template.path', '"' + name + '" is already registered');
			}

			resolvers[name] = resolve;
			return TemplatePath;
		}
	}, {
		key: 'get',
		value: function get(source) {
			var path = this.find(source);
			if (!path) {
				throw new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["c" /* AppError */]('template.path', 'Template path can\'t be found');
			}

			return path;
		}
	}, {
		key: 'find',
		value: function find(source) {
			var getName = this.name;
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = Object.keys(resolvers)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var key = _step.value;

					var name = getName(key);
					var value = source[name];
					if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__services_utility__["d" /* isUndefined */])(value) && value !== null) {
						var path = resolvers[key](source, value);
						if (path) {
							return path;
						}
					}
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			return null;
		}
	}, {
		key: 'name',
		value: function name(_name) {
			return '_' + _name;
		}
	}, {
		key: 'require',
		get: function get() {
			var getName = this.name;
			return Object.keys(resolvers).reduce(function (memo, key) {
				memo[getName(key)] = '^^?' + key;
				return memo;
			}, {});
		}
	}]);

	return TemplatePath;
}();



/***/ }),
/* 315 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toolbar_model__ = __webpack_require__(316);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__toolbar_model__["a"]; });


/***/ }),
/* 316 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarModel; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var ToolbarModel = function ToolbarModel() {
	_classCallCheck(this, ToolbarModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["a" /* Resource */]();
};

/***/ }),
/* 317 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return View; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var View = function View(model) {
	_classCallCheck(this, View);

	this.model = model;
};

/***/ }),
/* 318 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewModel; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ViewModel = function ViewModel() {
	_classCallCheck(this, ViewModel);

	this.items = [];
	this.rows = [];
	this.columns = [];
	this.nodes = [];
	this.pivot = { heads: [], rows: [] };
};

/***/ }),
/* 319 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__visibility_model__ = __webpack_require__(320);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__visibility_model__["a"]; });


/***/ }),
/* 320 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisibilityModel; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var VisibilityModel = function VisibilityModel() {
	_classCallCheck(this, VisibilityModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["a" /* Resource */]();
	this.head = true;
	this.foot = true;
	this.body = true;
	this.toolbar = {
		top: true,
		bottom: true,
		right: false,
		left: false
	};

	this.pin = {
		left: false,
		right: false
	};

	this.plugin = {};
};

/***/ }),
/* 321 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MODULE_NAME; });
var MODULE_NAME = 'qgrid';

/***/ }),
/* 322 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plugin_component__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid_core_infrastructure__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grid_core_template__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__grid_core_services__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__grid_core_column_column_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__grid_core_services_utility__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__definition__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__grid_core_pipe_units__ = __webpack_require__(33);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










__WEBPACK_IMPORTED_MODULE_2__grid_core_template__["a" /* TemplatePath */].register(__WEBPACK_IMPORTED_MODULE_6__definition__["i" /* COLUMN_CHOOSER_NAME */], function () {
	return {
		model: 'columnChooser',
		resource: 'content'
	};
});

var Plugin = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__plugin_component__["a" /* default */])('column-chooser', { inject: ['qgrid'] });

var ColumnChooser = function (_Plugin) {
	_inherits(ColumnChooser, _Plugin);

	function ColumnChooser() {
		_classCallCheck(this, ColumnChooser);

		var _this = _possibleConstructorReturn(this, (ColumnChooser.__proto__ || Object.getPrototypeOf(ColumnChooser)).apply(this, arguments));

		_this.toggle = new __WEBPACK_IMPORTED_MODULE_1__grid_core_infrastructure__["g" /* Command */]({
			execute: function execute(column) {
				column.isVisible = !_this.state(column);
				_this.service.invalidate('column.chooser', {}, __WEBPACK_IMPORTED_MODULE_7__grid_core_pipe_units__["a" /* PipeUnit */].column);
			}
		});

		_this.toggleAll = new __WEBPACK_IMPORTED_MODULE_1__grid_core_infrastructure__["g" /* Command */]({
			execute: function execute() {
				var state = !_this.stateAll();
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = _this.columns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var column = _step.value;

						column.isVisible = state;
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}

				_this.service.invalidate('column.chooser', {}, __WEBPACK_IMPORTED_MODULE_7__grid_core_pipe_units__["a" /* PipeUnit */].column);
			}
		});

		_this.defaults = new __WEBPACK_IMPORTED_MODULE_1__grid_core_infrastructure__["g" /* Command */]({
			execute: function execute() {
				var _iteratorNormalCompletion2 = true;
				var _didIteratorError2 = false;
				var _iteratorError2 = undefined;

				try {
					for (var _iterator2 = _this.columns[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
						var column = _step2.value;

						column.isVisible = column.isDefault !== false;
					}
				} catch (err) {
					_didIteratorError2 = true;
					_iteratorError2 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion2 && _iterator2.return) {
							_iterator2.return();
						}
					} finally {
						if (_didIteratorError2) {
							throw _iteratorError2;
						}
					}
				}

				_this.service.invalidate('column.chooser', {}, __WEBPACK_IMPORTED_MODULE_7__grid_core_pipe_units__["a" /* PipeUnit */].column);
			}
		});

		_this.toggleAggregation = new __WEBPACK_IMPORTED_MODULE_1__grid_core_infrastructure__["g" /* Command */]({
			execute: function execute() {
				_this.service.invalidate('column.chooser', {}, __WEBPACK_IMPORTED_MODULE_7__grid_core_pipe_units__["a" /* PipeUnit */].column);
			}
		});

		_this.drop = new __WEBPACK_IMPORTED_MODULE_1__grid_core_infrastructure__["g" /* Command */]({
			canExecute: function canExecute(e) {
				if (e.source && e.source.key === __WEBPACK_IMPORTED_MODULE_6__definition__["i" /* COLUMN_CHOOSER_NAME */]) {
					var map = __WEBPACK_IMPORTED_MODULE_4__grid_core_column_column_service__["a" /* map */](_this.model.data().columns);
					return map.hasOwnProperty(e.target.value);
				}

				return false;
			},
			execute: function execute(e) {
				var model = _this.model;
				var view = model.view;
				var columnRows = view().columns;
				var _iteratorNormalCompletion3 = true;
				var _didIteratorError3 = false;
				var _iteratorError3 = undefined;

				try {
					for (var _iterator3 = columnRows[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
						var columns = _step3.value;

						var targetIndex = columns.findIndex(function (c) {
							return c.model.key === e.target.value;
						});
						var sourceIndex = columns.findIndex(function (c) {
							return c.model.key === e.source.value;
						});
						if (targetIndex >= 0 && sourceIndex >= 0) {
							var sourceColumn = columns[sourceIndex].model;
							var targetColumn = columns[targetIndex].model;
							var indexMap = Array.from(model.columnList().index);
							var sourceColumnIndex = indexMap.indexOf(sourceColumn.key);
							var targetColumnIndex = indexMap.indexOf(targetColumn.key);
							indexMap.splice(sourceColumnIndex, 1);
							indexMap.splice(targetColumnIndex, 0, sourceColumn.key);
							model.columnList({ index: indexMap });
						}
					}
				} catch (err) {
					_didIteratorError3 = true;
					_iteratorError3 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion3 && _iterator3.return) {
							_iterator3.return();
						}
					} finally {
						if (_didIteratorError3) {
							throw _iteratorError3;
						}
					}
				}
			}
		});

		_this.drag = new __WEBPACK_IMPORTED_MODULE_1__grid_core_infrastructure__["g" /* Command */]({
			canExecute: function canExecute(e) {
				if (e.source.key === __WEBPACK_IMPORTED_MODULE_6__definition__["i" /* COLUMN_CHOOSER_NAME */]) {
					var map = __WEBPACK_IMPORTED_MODULE_4__grid_core_column_column_service__["a" /* map */](_this.model.data().columns);
					return map.hasOwnProperty(e.source.value) && map[e.source.value].canMove !== false;
				}

				return false;
			},
			execute: __WEBPACK_IMPORTED_MODULE_5__grid_core_services_utility__["b" /* noop */]
		});

		_this.submit = new __WEBPACK_IMPORTED_MODULE_1__grid_core_infrastructure__["g" /* Command */]({
			execute: function execute() {
				return _this.onSubmit();
			}
		});

		_this.cancel = new __WEBPACK_IMPORTED_MODULE_1__grid_core_infrastructure__["g" /* Command */]({
			execute: function execute() {
				_this.reset.execute();
				_this.onCancel();
			}
		});

		_this.reset = new __WEBPACK_IMPORTED_MODULE_1__grid_core_infrastructure__["g" /* Command */]({
			execute: function execute() {
				var origin = _this.origin;
				_this.model.columnList({
					index: Array.from(origin.index)
				});

				_this.columns.forEach(function (column) {
					var originColumn = origin.columns[column.key];
					column.isVisible = originColumn.isVisible;
					column.aggregation = originColumn.aggregation;
				});

				_this.service.invalidate('reset', {}, __WEBPACK_IMPORTED_MODULE_7__grid_core_pipe_units__["a" /* PipeUnit */].column);
			}
		});
		return _this;
	}

	_createClass(ColumnChooser, [{
		key: 'onInit',
		value: function onInit() {
			var _this2 = this;

			var model = this.model;
			this.service = this.qgrid.service(model);
			this.aggregations = Object.getOwnPropertyNames(__WEBPACK_IMPORTED_MODULE_3__grid_core_services__["e" /* Aggregation */]).filter(function (key) {
				return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__grid_core_services_utility__["a" /* isFunction */])(__WEBPACK_IMPORTED_MODULE_3__grid_core_services__["e" /* Aggregation */][key]);
			});

			this.columns = [];
			this.origin = {
				index: Array.from(model.columnList().index),
				columns: model.data().columns.reduce(function (memo, column) {
					memo[column.key] = {
						isVisible: column.isVisible,
						aggregation: column.aggregation
					};
					return memo;
				}, {})
			};

			model.viewChanged.watch(function (e) {
				if (e.hasChanges('columns')) {
					_this2.columns = Array.from(model.data().columns);
					_this2.columns.sort(function (x, y) {
						return x.index - y.index;
					});
				}
			});
		}
	}, {
		key: 'state',
		value: function state(column) {
			return column.isVisible !== false;
		}
	}, {
		key: 'stateAll',
		value: function stateAll() {
			return this.columns.every(this.state.bind(this));
		}
	}, {
		key: 'stateDefault',
		value: function stateDefault() {
			return this.columns.every(function (c) {
				return c.isDefault !== false && c.isVisible !== false || c.isDefault === false && c.isVisible === false;
			});
		}
	}, {
		key: 'isIndeterminate',
		value: function isIndeterminate() {
			return !this.stateAll() && this.columns.some(this.state.bind(this));
		}
	}, {
		key: 'transfer',
		value: function transfer(column) {
			return {
				key: __WEBPACK_IMPORTED_MODULE_6__definition__["i" /* COLUMN_CHOOSER_NAME */],
				value: column.key
			};
		}
	}, {
		key: 'canAggregate',
		get: function get() {
			return this.columnChooserCanAggregate;
		}
	}, {
		key: 'resource',
		get: function get() {
			return this.model.visibility().resource;
		}
	}]);

	return ColumnChooser;
}(Plugin);

/* harmony default export */ __webpack_exports__["a"] = (ColumnChooser.component({
	controller: ColumnChooser,
	controllerAs: '$columnChooser',
	bindings: {
		'columnChooserCanAggregate': '<canAggregate',
		'onSubmit': '&',
		'onCancel': '&'
	}
}));

/***/ }),
/* 323 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid_core_resource__ = __webpack_require__(7);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var ColumnChooserModel = function ColumnChooserModel() {
	_classCallCheck(this, ColumnChooserModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__grid_core_resource__["a" /* Resource */]();
	this.canAggregate = false;
};

/* harmony default export */ __webpack_exports__["a"] = (ColumnChooserModel);

/***/ }),
/* 324 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plugin_component__ = __webpack_require__(11);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Plugin = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__plugin_component__["a" /* default */])('column-filter');

var ColumnFilter = function (_Plugin) {
	_inherits(ColumnFilter, _Plugin);

	function ColumnFilter() {
		_classCallCheck(this, ColumnFilter);

		return _possibleConstructorReturn(this, (ColumnFilter.__proto__ || Object.getPrototypeOf(ColumnFilter)).apply(this, arguments));
	}

	return ColumnFilter;
}(Plugin);

/* harmony default export */ __webpack_exports__["a"] = (ColumnFilter.component({
	controller: ColumnFilter,
	controllerAs: '$columnFilter',
	bindings: {
		'onSubmit': '&',
		'onCancel': '&',
		'key': '<',
		'title': '@'
	}
}));

/***/ }),
/* 325 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ColumnFilterModel = function ColumnFilterModel() {
	_classCallCheck(this, ColumnFilterModel);

	this.threshold = 20;
	this.source = 'data';
};

/* harmony default export */ __webpack_exports__["a"] = (ColumnFilterModel);

/***/ }),
/* 326 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plugin_component__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid_core_infrastructure__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grid_core_services_utility__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__grid_core_services_value__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__grid_core_column_column_service__ = __webpack_require__(6);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Plugin = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__plugin_component__["a" /* default */])('column-filter-panel', { inject: ['vscroll', '$filter', 'qgrid'] });

var ColumnFilterPanel = function (_Plugin) {
	_inherits(ColumnFilterPanel, _Plugin);

	function ColumnFilterPanel() {
		_classCallCheck(this, ColumnFilterPanel);

		var _this = _possibleConstructorReturn(this, (ColumnFilterPanel.__proto__ || Object.getPrototypeOf(ColumnFilterPanel)).apply(this, arguments));

		_this.by = new Set();
		_this.items = [];

		_this.toggle = new __WEBPACK_IMPORTED_MODULE_1__grid_core_infrastructure__["g" /* Command */]({
			execute: function execute(item) {
				if (_this.by.has(item)) {
					_this.by.delete(item);
				} else {
					_this.by.add(item);
				}
			}
		});

		_this.toggleAll = new __WEBPACK_IMPORTED_MODULE_1__grid_core_infrastructure__["g" /* Command */]({
			execute: function execute() {
				var state = !_this.stateAll();
				if (state) {
					var _iteratorNormalCompletion = true;
					var _didIteratorError = false;
					var _iteratorError = undefined;

					try {
						for (var _iterator = _this.items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
							var item = _step.value;

							_this.by.add(item);
						}
					} catch (err) {
						_didIteratorError = true;
						_iteratorError = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion && _iterator.return) {
								_iterator.return();
							}
						} finally {
							if (_didIteratorError) {
								throw _iteratorError;
							}
						}
					}
				} else {
					_this.by.clear();
				}
			}
		});

		_this.submit = new __WEBPACK_IMPORTED_MODULE_1__grid_core_infrastructure__["g" /* Command */]({
			execute: function execute() {
				var filter = _this.model.filter;
				var by = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__grid_core_services_utility__["h" /* clone */])(filter().by);
				var items = Array.from(_this.by);
				if (items.length) {
					by[_this.key] = { items: items };
				} else {
					delete by[_this.key];
				}

				filter({ by: by });

				_this.onSubmit();
			}
		});

		_this.cancel = new __WEBPACK_IMPORTED_MODULE_1__grid_core_infrastructure__["g" /* Command */]({
			execute: function execute() {
				return _this.onCancel();
			}
		});

		_this.reset = new __WEBPACK_IMPORTED_MODULE_1__grid_core_infrastructure__["g" /* Command */]({
			execute: function execute() {
				_this.by = new Set([]);
				_this.onReset();
			}
		});

		_this.resetItems = new __WEBPACK_IMPORTED_MODULE_1__grid_core_infrastructure__["g" /* Command */]({
			execute: function execute() {
				_this.items = [];
				_this.vscrollContext.container.reset();
			}
		});

		_this.vscrollContext = _this.vscroll({
			fetch: function fetch(skip, take, d) {
				if (!_this.isReady()) {
					d.resolve(0);
					return;
				}

				var model = _this.model;
				var filterState = model.filter();
				var service = _this.qgrid.service(_this.model);
				if (filterState.fetch !== __WEBPACK_IMPORTED_MODULE_2__grid_core_services_utility__["b" /* noop */]) {
					var cancelBusy = service.busy();
					filterState.fetch(_this.key, {
						value: _this.getValue.bind(_this),
						skip: skip,
						take: take,
						filter: _this.filter
					}).then(function (items) {
						var _this$items;

						(_this$items = _this.items).push.apply(_this$items, _toConsumableArray(items));
						d.resolve(_this.items.length + take);
						cancelBusy();
					}).catch(cancelBusy);
				} else {
					var _cancelBusy = service.busy();
					try {
						if (!_this.items.length) {
							var source = _this.model[_this.model.columnFilter().source];
							var uniqItems = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__grid_core_services_utility__["q" /* uniq */])(source().rows.map(_this.getValue));
							var filteredItems = _this.$filter('filter')(uniqItems, _this.filter);
							filteredItems.sort();
							_this.items = filteredItems;
						}

						d.resolve(_this.items.length);
					} finally {
						_cancelBusy();
					}
				}
			}
		});
		return _this;
	}

	_createClass(ColumnFilterPanel, [{
		key: 'onInit',
		value: function onInit() {
			var column = __WEBPACK_IMPORTED_MODULE_4__grid_core_column_column_service__["c" /* find */](this.model.data().columns, this.key);
			this.getValue = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__grid_core_services_value__["c" /* getFactory */])(column);

			var filterBy = this.model.filter().by[this.key];
			this.by = new Set(filterBy && filterBy.items || []);

			this.vscrollContext.settings.threshold = this.model.columnFilter().threshold;
			this.resetItems.execute();
		}
	}, {
		key: 'state',
		value: function state(item) {
			return this.by.has(item);
		}
	}, {
		key: 'stateAll',
		value: function stateAll() {
			return this.items.every(this.state.bind(this));
		}
	}, {
		key: 'isIndeterminate',
		value: function isIndeterminate() {
			return !this.stateAll() && this.items.some(this.state.bind(this));
		}
	}, {
		key: 'onReset',
		value: function onReset() {}
	}]);

	return ColumnFilterPanel;
}(Plugin);

/* harmony default export */ __webpack_exports__["a"] = (ColumnFilterPanel.component({
	controller: ColumnFilterPanel,
	controllerAs: '$columnFilterPanel',
	bindings: {
		'onSubmit': '&',
		'onCancel': '&',
		'key': '<'
	}
}));

/***/ }),
/* 327 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plugin_component__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid_view_components_cell_cell_build__ = __webpack_require__(40);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Plugin = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__plugin_component__["a" /* default */])('edit-form-editor');

var EditFormBody = function (_Plugin) {
	_inherits(EditFormBody, _Plugin);

	function EditFormBody() {
		_classCallCheck(this, EditFormBody);

		return _possibleConstructorReturn(this, (EditFormBody.__proto__ || Object.getPrototypeOf(EditFormBody)).apply(this, arguments));
	}

	_createClass(EditFormBody, [{
		key: 'onInit',
		value: function onInit() {
			var build = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__grid_view_components_cell_cell_build__["a" /* default */])(this.template, 'edit');
			var link = build('form', this.model, this.editor.cell.column);
			this.templateScope = this.$scope.$new();
			this.templateScope.$editor = this.editor;
			link(this.$element, this.templateScope);
		}
	}, {
		key: 'onDestroy',
		value: function onDestroy() {
			if (this.templateScope) {
				this.templateScope.$destroy();
				this.templateScope = null;
			}
		}
	}]);

	return EditFormBody;
}(Plugin);

/* harmony default export */ __webpack_exports__["a"] = (EditFormBody.component({
	controller: EditFormBody,
	controllerAs: '$editor',
	bindings: {
		editor: '<'
	}
}));

/***/ }),
/* 328 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid_view_definition__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__plugin_component__ = __webpack_require__(11);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Plugin = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__plugin_component__["a" /* default */])('edit-form');

var EditForm = function (_Plugin) {
	_inherits(EditForm, _Plugin);

	function EditForm() {
		_classCallCheck(this, EditForm);

		return _possibleConstructorReturn(this, (EditForm.__proto__ || Object.getPrototypeOf(EditForm)).apply(this, arguments));
	}

	return EditForm;
}(Plugin);

/* harmony default export */ __webpack_exports__["a"] = (EditForm.component({
	controller: EditForm,
	controllerAs: '$editForm',
	require: {
		view: '^^' + __WEBPACK_IMPORTED_MODULE_0__grid_view_definition__["f" /* VIEW_CORE_NAME */]
	},
	bindings: {
		'onSubmit': '&',
		'onCancel': '&',
		'key': '<',
		'title': '@',
		'row': '<data'
	}
}));

/***/ }),
/* 329 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plugin_component__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid_core_infrastructure__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grid_core_edit_edit_row_editor__ = __webpack_require__(85);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Plugin = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__plugin_component__["a" /* default */])('edit-form-panel', { inject: [] });

var EditFormPanel = function (_Plugin) {
	_inherits(EditFormPanel, _Plugin);

	function EditFormPanel() {
		_classCallCheck(this, EditFormPanel);

		var _this = _possibleConstructorReturn(this, (EditFormPanel.__proto__ || Object.getPrototypeOf(EditFormPanel)).apply(this, arguments));

		_this.submit = new __WEBPACK_IMPORTED_MODULE_1__grid_core_infrastructure__["g" /* Command */]({
			execute: function execute() {
				_this.editor.commit();
				_this.onSubmit();
			}
		});

		_this.cancel = new __WEBPACK_IMPORTED_MODULE_1__grid_core_infrastructure__["g" /* Command */]({
			execute: function execute() {
				return _this.onCancel();
			}
		});

		_this.reset = new __WEBPACK_IMPORTED_MODULE_1__grid_core_infrastructure__["g" /* Command */]({
			execute: function execute() {
				_this.editor.editors.forEach(function (e) {
					return e.reset();
				});
				_this.onReset();
			}
		});
		return _this;
	}

	_createClass(EditFormPanel, [{
		key: 'onInit',
		value: function onInit() {
			this.editor = new __WEBPACK_IMPORTED_MODULE_2__grid_core_edit_edit_row_editor__["a" /* RowEditor */](this.row, this.model.data().columns);
		}
	}]);

	return EditFormPanel;
}(Plugin);

/* harmony default export */ __webpack_exports__["a"] = (EditFormPanel.component({
	controller: EditFormPanel,
	controllerAs: '$editFormPanel',
	bindings: {
		'onSubmit': '&',
		'onCancel': '&',
		'onReset': '&',
		'row': '<'
	}
}));

/***/ }),
/* 330 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plugin_component__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid_core_infrastructure__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grid_view_definition__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__definition__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__grid_core_template__ = __webpack_require__(3);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable indent */






__WEBPACK_IMPORTED_MODULE_4__grid_core_template__["a" /* TemplatePath */].register(__WEBPACK_IMPORTED_MODULE_3__definition__["e" /* GROUP_BAR_NAME */], function () {
	return {
		model: 'group',
		resource: 'content'
	};
});

var Plugin = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__plugin_component__["a" /* default */])('group-bar');

var GroupBar = function (_Plugin) {
	_inherits(GroupBar, _Plugin);

	function GroupBar() {
		_classCallCheck(this, GroupBar);

		var _this = _possibleConstructorReturn(this, (GroupBar.__proto__ || Object.getPrototypeOf(GroupBar)).apply(this, arguments));

		_this.newGroup = null;
		_this.selectedItems = null;

		_this.replace = new __WEBPACK_IMPORTED_MODULE_1__grid_core_infrastructure__["g" /* Command */]({
			execute: function execute(key) {
				var group = _this.model.group;

				group({
					by: [].concat(_toConsumableArray(key))
				});
			},
			canExecute: function canExecute() {
				return _this.columns.length > 0;
			}
		});

		_this.add = new __WEBPACK_IMPORTED_MODULE_1__grid_core_infrastructure__["g" /* Command */]({
			execute: function execute(key) {
				var group = _this.model.group;
				var state = group();
				var temp = state.by.concat(key);

				_this.selectedItems = temp.slice();

				group({
					by: temp
				});

				_this.newGroup = null;
			},
			canExecute: function canExecute() {
				return _this.columns.length > 0;
			}
		});

		_this.remove = new __WEBPACK_IMPORTED_MODULE_1__grid_core_infrastructure__["g" /* Command */]({
			execute: function execute(key) {
				var group = _this.model.group;
				var state = group();
				var index = state.by.findIndex(function (g) {
					return g === key;
				});
				if (index >= 0) {
					var temp = Array.from(state.by);
					temp.splice(index, 1);

					_this.selectedItems = temp.slice();

					group({
						by: temp
					});
				}
			}
		});

		_this.drop = new __WEBPACK_IMPORTED_MODULE_1__grid_core_infrastructure__["g" /* Command */]({
			canExecute: function canExecute(e) {
				return e.source && e.source.key === __WEBPACK_IMPORTED_MODULE_2__grid_view_definition__["g" /* TH_CORE_NAME */] && _this.add.canExecute(e.source.value);
			},
			execute: function execute(e) {
				return _this.add.execute(e.source.value);
			}
		});
		return _this;
	}

	_createClass(GroupBar, [{
		key: 'onInit',
		value: function onInit() {
			var _this2 = this;

			var groupBy = this.model.group().by;
			groupBy.forEach(function (key) {
				return _this2.add.execute(key);
			});
		}
	}, {
		key: 'title',
		value: function title(key) {
			var columns = this.columns;
			var index = columns.findIndex(function (c) {
				return c.key === key;
			});
			return index >= 0 ? columns[index].title : '';
		}
	}, {
		key: 'resource',
		get: function get() {
			return this.model.group().resource;
		}
	}, {
		key: 'columns',
		get: function get() {
			return this.model.data().columns;
		}
	}, {
		key: 'groups',
		get: function get() {
			return this.model.group().by;
		}
	}]);

	return GroupBar;
}(Plugin);

/* harmony default export */ __webpack_exports__["a"] = (GroupBar.component({
	controller: GroupBar,
	controllerAs: '$groupBar'
}));
/* eslint-enable indent */

/***/ }),
/* 331 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pagination_pager__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sort_bar_sort_bar__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__group_bar_group_bar__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pivot_bar_pivot_bar__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__selection_bar_selection_bar__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__visibility_visibility__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__column_chooser_column_chooser__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__column_filter_column_filter__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__column_filter_column_filter_panel__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__edit_form_edit_form__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__edit_form_edit_form_panel__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__edit_form_edit_form_editor__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__progress_progress__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__popup_popup__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__popup_popup_trigger__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__popup_popup_head__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__popup_popup_body__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__popup_popup_panel__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__popup_popup_service__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__definition__ = __webpack_require__(13);






















/* harmony default export */ __webpack_exports__["a"] = (angular // eslint-disable-line no-undef
.module(__WEBPACK_IMPORTED_MODULE_19__definition__["a" /* MODULE_NAME */], [__WEBPACK_IMPORTED_MODULE_19__definition__["b" /* MODULE_CORE_NAME */]]).component(__WEBPACK_IMPORTED_MODULE_19__definition__["c" /* PAGER_NAME */], __WEBPACK_IMPORTED_MODULE_0__pagination_pager__["a" /* default */]).component(__WEBPACK_IMPORTED_MODULE_19__definition__["d" /* SORT_BAR_NAME */], __WEBPACK_IMPORTED_MODULE_1__sort_bar_sort_bar__["a" /* default */]).component(__WEBPACK_IMPORTED_MODULE_19__definition__["e" /* GROUP_BAR_NAME */], __WEBPACK_IMPORTED_MODULE_2__group_bar_group_bar__["a" /* default */]).component(__WEBPACK_IMPORTED_MODULE_19__definition__["f" /* PIVOT_BAR_NAME */], __WEBPACK_IMPORTED_MODULE_3__pivot_bar_pivot_bar__["a" /* default */]).component(__WEBPACK_IMPORTED_MODULE_19__definition__["g" /* SELECTION_BAR_NAME */], __WEBPACK_IMPORTED_MODULE_4__selection_bar_selection_bar__["a" /* default */]).component(__WEBPACK_IMPORTED_MODULE_19__definition__["h" /* VISIBILITY_NAME */], __WEBPACK_IMPORTED_MODULE_5__visibility_visibility__["a" /* default */]).component(__WEBPACK_IMPORTED_MODULE_19__definition__["i" /* COLUMN_CHOOSER_NAME */], __WEBPACK_IMPORTED_MODULE_6__column_chooser_column_chooser__["a" /* default */]).component(__WEBPACK_IMPORTED_MODULE_19__definition__["j" /* COLUMN_FILTER_NAME */], __WEBPACK_IMPORTED_MODULE_7__column_filter_column_filter__["a" /* default */]).component(__WEBPACK_IMPORTED_MODULE_19__definition__["k" /* COLUMN_FILTER_PANEL_NAME */], __WEBPACK_IMPORTED_MODULE_8__column_filter_column_filter_panel__["a" /* default */]).component(__WEBPACK_IMPORTED_MODULE_19__definition__["l" /* EDIT_FORM_NAME */], __WEBPACK_IMPORTED_MODULE_9__edit_form_edit_form__["a" /* default */]).component(__WEBPACK_IMPORTED_MODULE_19__definition__["m" /* EDIT_FORM_PANEL_NAME */], __WEBPACK_IMPORTED_MODULE_10__edit_form_edit_form_panel__["a" /* default */]).component(__WEBPACK_IMPORTED_MODULE_19__definition__["n" /* EDIT_FORM_EDITOR */], __WEBPACK_IMPORTED_MODULE_11__edit_form_edit_form_editor__["a" /* default */]).component(__WEBPACK_IMPORTED_MODULE_19__definition__["o" /* PROGRESS_NAME */], __WEBPACK_IMPORTED_MODULE_12__progress_progress__["a" /* default */]).component(__WEBPACK_IMPORTED_MODULE_19__definition__["p" /* POPUP_NAME */], __WEBPACK_IMPORTED_MODULE_13__popup_popup__["a" /* default */]).component(__WEBPACK_IMPORTED_MODULE_19__definition__["q" /* POPUP_TRIGGER_NAME */], __WEBPACK_IMPORTED_MODULE_14__popup_popup_trigger__["a" /* default */]).component(__WEBPACK_IMPORTED_MODULE_19__definition__["r" /* POPUP_HEAD_NAME */], __WEBPACK_IMPORTED_MODULE_15__popup_popup_head__["a" /* default */]).component(__WEBPACK_IMPORTED_MODULE_19__definition__["s" /* POPUP_BODY_NAME */], __WEBPACK_IMPORTED_MODULE_16__popup_popup_body__["a" /* default */]).component(__WEBPACK_IMPORTED_MODULE_19__definition__["t" /* POPUP_PANEL_NAME */], __WEBPACK_IMPORTED_MODULE_17__popup_popup_panel__["a" /* default */]).service(__WEBPACK_IMPORTED_MODULE_19__definition__["u" /* POPUP_SERVICE */], __WEBPACK_IMPORTED_MODULE_18__popup_popup_service__["a" /* default */]).config(Setup).name);

Setup.$inject = ['qgridThemeProvider'];
function Setup(qgridThemeProvider) {
	var EMPTY = '';

	qgridThemeProvider.register('default', function (theme) {
		theme.put('qgrid.plugin.pager.tpl.html', __webpack_require__(539));
		theme.put('qgrid.plugin.progress.tpl.html', __webpack_require__(543));
		theme.put('qgrid.plugin.sort-bar.tpl.html', __webpack_require__(545));
		theme.put('qgrid.plugin.group-bar.tpl.html', __webpack_require__(538));
		theme.put('qgrid.plugin.pivot-bar.tpl.html', __webpack_require__(540));
		theme.put('qgrid.plugin.selection-bar.tpl.html', __webpack_require__(544));
		theme.put('qgrid.plugin.visibility.tpl.html', __webpack_require__(546));
		theme.put('qgrid.plugin.column-chooser.tpl.html', __webpack_require__(535));
		theme.put('qgrid.plugin.column-filter.tpl.html', __webpack_require__(536));
		theme.put('qgrid.plugin.edit-form.tpl.html', __webpack_require__(537));
		theme.put('qgrid.plugin.edit-form-panel.tpl.html', EMPTY);

		theme.put('qgrid.plugin.popup.tpl.html', __webpack_require__(541));
		theme.put('qgrid.plugin.popup-panel.tpl.html', __webpack_require__(542));
		theme.put('qgrid.plugin.popup-trigger.tpl.html', EMPTY);
		theme.put('qgrid.plugin.popup-head.tpl.html', EMPTY);
		theme.put('qgrid.plugin.popup-body.tpl.html', EMPTY);
	});
}

/***/ }),
/* 332 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plugin_component__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__definition__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grid_core_infrastructure__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__grid_core_template__ = __webpack_require__(3);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






__WEBPACK_IMPORTED_MODULE_3__grid_core_template__["a" /* TemplatePath */].register(__WEBPACK_IMPORTED_MODULE_1__definition__["c" /* PAGER_NAME */], function () {
	return {
		model: 'pagination',
		resource: 'content'
	};
});

var Plugin = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__plugin_component__["a" /* default */])('pager', { models: ['pagination'] });

var Pager = function (_Plugin) {
	_inherits(Pager, _Plugin);

	function Pager() {
		_classCallCheck(this, Pager);

		var _this = _possibleConstructorReturn(this, (Pager.__proto__ || Object.getPrototypeOf(Pager)).apply(this, arguments));

		var ctrl = _this;
		_this.next = new __WEBPACK_IMPORTED_MODULE_2__grid_core_infrastructure__["g" /* Command */]({
			execute: function execute() {
				return ctrl.current = ctrl.current + 1;
			},
			canExecute: function canExecute() {
				return (ctrl.current + 1) * ctrl.size < ctrl.total;
			}
		});

		_this.prev = new __WEBPACK_IMPORTED_MODULE_2__grid_core_infrastructure__["g" /* Command */]({
			execute: function execute() {
				return ctrl.current = ctrl.current - 1;
			},
			canExecute: function canExecute() {
				return ctrl.current > 0;
			}
		});
		return _this;
	}

	_createClass(Pager, [{
		key: 'resource',
		get: function get() {
			return this.model.pagination().resource;
		}
	}, {
		key: 'size',
		get: function get() {
			return this.model.pagination().size;
		},
		set: function set(value) {
			this.model.pagination({ size: value, current: 0 });
		}
	}, {
		key: 'sizeList',
		get: function get() {
			return this.model.pagination().sizeList;
		}
	}, {
		key: 'current',
		get: function get() {
			return this.model.pagination().current;
		},
		set: function set(value) {
			return this.model.pagination({ current: value });
		}
	}, {
		key: 'from',
		get: function get() {
			return Math.min(this.total, this.current * this.size + 1);
		}
	}, {
		key: 'to',
		get: function get() {
			return Math.min(this.total, (this.current + 1) * this.size);
		}
	}, {
		key: 'total',
		get: function get() {
			return this.model.pagination().count;
		}
	}, {
		key: 'totalPages',
		get: function get() {
			return Math.max(1, Math.ceil(this.total / this.size));
		}
	}, {
		key: 'scroll',
		get: function get() {
			return this.model.scroll();
		}
	}]);

	return Pager;
}(Plugin);

/* harmony default export */ __webpack_exports__["a"] = (Pager.component({
	controller: Pager,
	controllerAs: '$pager',
	bindings: {
		'paginationSize': '<size',
		'paginationSizeList': '<sizeList',
		'mode': '@'
	}
}));

/***/ }),
/* 333 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plugin_component__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid_core_infrastructure__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grid_view_definition__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__definition__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__grid_core_template__ = __webpack_require__(3);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable indent */







__WEBPACK_IMPORTED_MODULE_4__grid_core_template__["a" /* TemplatePath */].register(__WEBPACK_IMPORTED_MODULE_3__definition__["f" /* PIVOT_BAR_NAME */], function () {
	return {
		model: 'pivot',
		resource: 'content'
	};
});

var Plugin = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__plugin_component__["a" /* default */])('pivot-bar');

var PivotBar = function (_Plugin) {
	_inherits(PivotBar, _Plugin);

	function PivotBar() {
		_classCallCheck(this, PivotBar);

		var _this = _possibleConstructorReturn(this, (PivotBar.__proto__ || Object.getPrototypeOf(PivotBar)).apply(this, arguments));

		_this.newGroup = null;
		_this.selectedItems = null;

		_this.replace = new __WEBPACK_IMPORTED_MODULE_1__grid_core_infrastructure__["g" /* Command */]({
			execute: function execute(key) {
				var pivot = _this.model.pivot;

				pivot({
					by: [].concat(_toConsumableArray(key))
				});
			},
			canExecute: function canExecute() {
				return _this.columns.length > 0;
			}
		});

		_this.add = new __WEBPACK_IMPORTED_MODULE_1__grid_core_infrastructure__["g" /* Command */]({
			execute: function execute(key) {
				var pivot = _this.model.pivot;
				var state = pivot();
				var temp = state.by.concat(key);

				_this.selectedItems = temp.slice();

				pivot({
					by: temp
				});

				_this.newGroup = null;
			},
			canExecute: function canExecute() {
				return _this.columns.length > 0;
			}
		});

		_this.remove = new __WEBPACK_IMPORTED_MODULE_1__grid_core_infrastructure__["g" /* Command */]({
			execute: function execute(key) {
				var pivot = _this.model.pivot;
				var state = pivot();
				var index = state.by.findIndex(function (g) {
					return g === key;
				});
				if (index >= 0) {
					var temp = Array.from(state.by);
					temp.splice(index, 1);

					_this.selectedItems = temp.slice();

					pivot({
						by: temp
					});
				}
			}
		});

		_this.drop = new __WEBPACK_IMPORTED_MODULE_1__grid_core_infrastructure__["g" /* Command */]({
			canExecute: function canExecute(e) {
				return e.source && e.source.key === __WEBPACK_IMPORTED_MODULE_2__grid_view_definition__["g" /* TH_CORE_NAME */] && _this.add.canExecute(e.source.value);
			},
			execute: function execute(e) {
				return _this.add.execute(e.source.value);
			}
		});
		return _this;
	}

	_createClass(PivotBar, [{
		key: 'onInit',
		value: function onInit() {
			var _this2 = this;

			var pivotBy = this.model.pivot().by;
			pivotBy.forEach(function (key) {
				return _this2.add.execute(key);
			});
		}
	}, {
		key: 'title',
		value: function title(key) {
			var columns = this.columns;
			var index = columns.findIndex(function (c) {
				return c.key === key;
			});
			return index >= 0 ? columns[index].title : '';
		}
	}, {
		key: 'resource',
		get: function get() {
			return this.model.pivot().resource;
		}
	}, {
		key: 'columns',
		get: function get() {
			return this.model.data().columns;
		}
	}, {
		key: 'groups',
		get: function get() {
			return this.model.pivot().by;
		}
	}]);

	return PivotBar;
}(Plugin);

/* harmony default export */ __webpack_exports__["a"] = (PivotBar.component({
	controller: PivotBar,
	controllerAs: '$pivotBar'
}));

/* eslint-enable indent */

/***/ }),
/* 334 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid_view_components_component__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid_view_components_template_template_link__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__definition__ = __webpack_require__(13);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var PopupBody = function (_Component) {
	_inherits(PopupBody, _Component);

	function PopupBody($scope, $element, $compile, $templateCache, qGridPopupService) {
		_classCallCheck(this, PopupBody);

		var _this = _possibleConstructorReturn(this, (PopupBody.__proto__ || Object.getPrototypeOf(PopupBody)).call(this));

		_this.$scope = $scope;
		_this.$element = $element;
		_this.qGridPopupService = qGridPopupService;
		_this.$templateScope = null;
		_this.template = new __WEBPACK_IMPORTED_MODULE_1__grid_view_components_template_template_link__["a" /* default */]($compile, $templateCache);
		return _this;
	}

	_createClass(PopupBody, [{
		key: 'onInit',
		value: function onInit() {
			this.$popup = this.popup;

			var model = this.model;
			var templateUrl = 'qgrid.plugin.popup-body.tpl.html';
			var templateScope = this.$scope.$new();
			var link = this.template.link(templateUrl, model.popup().resource, [this.id + ':body']);

			link(this.$element, templateScope);
			this.$templateScope = templateScope;
		}
	}, {
		key: 'onDestroy',
		value: function onDestroy() {
			if (this.$templateScope) {
				this.$templateScope.$destroy();
			}
		}
	}, {
		key: 'close',
		value: function close() {
			this.popup.close();
		}
	}]);

	return PopupBody;
}(__WEBPACK_IMPORTED_MODULE_0__grid_view_components_component__["a" /* default */]);

PopupBody.$inject = ['$scope', '$element', '$compile', '$templateCache', 'qGridPopupService'];

/* harmony default export */ __webpack_exports__["a"] = ({
	controller: PopupBody,
	controllerAs: '$popupBody',
	require: {
		popup: '^^' + __WEBPACK_IMPORTED_MODULE_2__definition__["t" /* POPUP_PANEL_NAME */]
	},
	bindings: {
		model: '<',
		id: '<'
	}
});

/***/ }),
/* 335 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid_view_components_component__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid_view_components_template_template_link__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grid_core_infrastructure__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__definition__ = __webpack_require__(13);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var PopupHead = function (_Component) {
	_inherits(PopupHead, _Component);

	function PopupHead($scope, $element, $document, $window, $compile, $templateCache, qGridPopupService) {
		_classCallCheck(this, PopupHead);

		var _this = _possibleConstructorReturn(this, (PopupHead.__proto__ || Object.getPrototypeOf(PopupHead)).call(this));

		_this.position = {
			x: 0,
			y: 0
		};

		_this.$scope = $scope;
		_this.$element = $element;
		_this.$document = $document;
		_this.$window = $window;
		_this.qGridPopupService = qGridPopupService;
		_this.$templateScope = null;
		_this.template = new __WEBPACK_IMPORTED_MODULE_1__grid_view_components_template_template_link__["a" /* default */]($compile, $templateCache);
		_this.eventListener = new __WEBPACK_IMPORTED_MODULE_2__grid_core_infrastructure__["d" /* EventListener */](_this, _this.$element[0]);

		_this.$element.attr('draggable', true);
		return _this;
	}

	_createClass(PopupHead, [{
		key: 'onInit',
		value: function onInit() {
			var _this2 = this;

			var popup = this.popup;
			var popupElement = popup.$element;
			var model = this.model;
			var templateUrl = 'qgrid.plugin.popup-head.tpl.html';
			var templateScope = this.$scope.$new();
			var link = this.template.link(templateUrl, model.popup().resource, [this.id + ':head']);

			link(this.$element, templateScope);
			this.$templateScope = templateScope;

			this.eventListener.on('dragstart', function (e) {
				_this2.position.x = e.offsetX;
				_this2.position.y = e.offsetY;

				popupElement.addClass('drag');
				e.dataTransfer.setDragImage(angular.element('<div></div>')[0], 0, 0); // eslint-disable-line no-undef
			});

			this.eventListener.on('drag', function (event) {
				var cx = event.clientX;
				var cy = event.clientY;
				var x = _this2.position.x;
				var y = _this2.position.y;

				if (cx || cy) {
					var l = cx - x;
					var t = cy - y;
					var w = _this2.$element.clientWidth;
					var h = _this2.$element.clientHeight;
					var el = 0;
					var er = _this2.$window.innerWidth - w;
					var et = 0;
					var eb = _this2.$window.innerHeight - h;

					l = l <= el ? el : l >= er ? er : l;
					t = t <= et ? et : t >= eb ? eb : t;

					popupElement.css('left', l + 'px');
					popupElement.css('top', t + 'px');
				}
			});

			this.eventListener.on('dragend', function () {
				_this2.$element.removeClass('drag');
			});

			this.$document.find('body').bind('dragover', this.onDragOver);
		}
	}, {
		key: 'onDragOver',
		value: function onDragOver(e) {
			e.preventDefault();
		}
	}, {
		key: 'onDestroy',
		value: function onDestroy() {
			if (this.$templateScope) {
				this.$templateScope.$destroy();
			}

			this.$document.find('body').unbind('dragover', this.onDragOver);
		}
	}]);

	return PopupHead;
}(__WEBPACK_IMPORTED_MODULE_0__grid_view_components_component__["a" /* default */]);

PopupHead.$inject = ['$scope', '$element', '$document', '$window', '$compile', '$templateCache', 'qGridPopupService'];

/* harmony default export */ __webpack_exports__["a"] = ({
	controller: PopupHead,
	controllerAs: '$popupHead',
	require: {
		popup: '^^' + __WEBPACK_IMPORTED_MODULE_3__definition__["t" /* POPUP_PANEL_NAME */]
	},
	bindings: {
		model: '<',
		id: '<'
	}
});

/***/ }),
/* 336 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plugin_component__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__definition__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grid_core_template__ = __webpack_require__(3);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__webpack_require__(394);

__WEBPACK_IMPORTED_MODULE_2__grid_core_template__["a" /* TemplatePath */].register(__WEBPACK_IMPORTED_MODULE_1__definition__["p" /* POPUP_NAME */], function (template, popup) {
	return {
		model: 'popup',
		resource: popup.id + ':' + template.for
	};
});

var Plugin = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__plugin_component__["a" /* default */])('popup', { models: ['popup'], inject: ['$transclude', 'qGridPopupService'] });

var Popup = function (_Plugin) {
	_inherits(Popup, _Plugin);

	function Popup() {
		_classCallCheck(this, Popup);

		return _possibleConstructorReturn(this, (Popup.__proto__ || Object.getPrototypeOf(Popup)).apply(this, arguments));
	}

	_createClass(Popup, [{
		key: 'onInit',
		value: function onInit() {}
	}, {
		key: 'show',
		value: function show() {
			var _this2 = this;

			var template = null;
			var templateScope = null;

			this.$transclude(function (clone, scope) {
				template = clone;
				templateScope = scope;

				_this2.$element.append(clone);
			});

			template.remove();
			templateScope.$destroy();

			_get(Popup.prototype.__proto__ || Object.getPrototypeOf(Popup.prototype), 'show', this).call(this);
		}
	}, {
		key: 'open',
		value: function open() {
			var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

			settings.id = this.id;
			settings.close = this.onClose;
			this.qGridPopupService.open(settings, this.model, this.$scope);
		}
	}, {
		key: 'onDestroy',
		value: function onDestroy() {
			this.qGridPopupService.closeAll();
		}
	}, {
		key: 'resource',
		get: function get() {
			return this.model.popup().resource;
		}
	}]);

	return Popup;
}(Plugin);

/* harmony default export */ __webpack_exports__["a"] = (Popup.component({
	transclude: true,
	controller: Popup,
	controllerAs: '$popup',
	bindings: {
		id: '@',
		resourceModel: '@resource',
		'onClose': '&' + __WEBPACK_IMPORTED_MODULE_1__definition__["v" /* POPUP_CLOSE_NAME */]
	}
}));

/***/ }),
/* 337 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid_core_infrastructure__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid_core_services_utility__ = __webpack_require__(1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var Popup = function () {
	function Popup(element, settings, body) {
		_classCallCheck(this, Popup);

		this.element = element;
		this.event = new __WEBPACK_IMPORTED_MODULE_0__grid_core_infrastructure__["b" /* Event */]();
		this.state = {
			expanded: false,
			active: false
		};
		this.body = body;
		this.layout = {
			position: {},
			size: {}
		};
		this.settings = settings;

		this.onClose = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__grid_core_services_utility__["a" /* isFunction */])(settings.close) ? settings.close : __WEBPACK_IMPORTED_MODULE_1__grid_core_services_utility__["b" /* noop */];
	}

	_createClass(Popup, [{
		key: 'close',
		value: function close() {
			this.onClose();
			this.element.remove();
		}
	}, {
		key: 'expand',
		value: function expand() {
			var position = {
				top: this.element.style.top,
				left: this.element.style.left
			},
			    size = {
				width: this.element.offsetWidth,
				height: this.element.offsetHeight
			};
			this.layout = {
				position: position,
				size: size
			};
			this.element.addClass('expanded');
			this.state.expanded = true;

			this.event.emit('expand');
		}
	}, {
		key: 'collapse',
		value: function collapse() {
			var popupElement = this.element[0];

			this.element.removeClass('expanded');
			this.state.expanded = false;

			popupElement.style.width = this.layout.size.width;
			popupElement.style.height = this.layout.size.height;
			popupElement.style.top = this.layout.position.top;
			popupElement.style.left = this.layout.position.left;

			this.event.emit('collapse');
		}
	}, {
		key: 'focus',
		value: function focus() {
			this.state.active = true;
			this.element.addClass('active');
			this.element.attr('tabindex', 0);
			this.element.focus();

			this.event.emit('focus');
		}
	}, {
		key: 'unfocus',
		value: function unfocus() {
			this.state.active = false;
			this.element.removeClass('active');
			this.element.removeAttr('tabindex');
		}
	}, {
		key: 'resize',
		value: function resize(settings) {
			this.element.css({
				width: Math.min(settings.width, this.body.clientWidth - this.element.offsetLeft) + 'px',
				height: Math.min(settings.height, this.body.clientHeight - this.element.offsetTop) + 'px'
			});
			this.event.emit('resize');
		}
	}]);

	return Popup;
}();

/* harmony default export */ __webpack_exports__["a"] = (Popup);

/***/ }),
/* 338 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid_core_resource__ = __webpack_require__(7);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var PluginModel = function PluginModel() {
	_classCallCheck(this, PluginModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__grid_core_resource__["a" /* Resource */]();
	this.items = new Set();
};

/* harmony default export */ __webpack_exports__["a"] = (PluginModel);

/***/ }),
/* 339 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid_view_components_component__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid_view_components_template_template_link__ = __webpack_require__(23);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var PopupPanel = function (_Component) {
	_inherits(PopupPanel, _Component);

	function PopupPanel($scope, $element, $compile, $templateCache, qGridPopupService) {
		_classCallCheck(this, PopupPanel);

		var _this = _possibleConstructorReturn(this, (PopupPanel.__proto__ || Object.getPrototypeOf(PopupPanel)).call(this));

		_this.$scope = $scope;
		_this.$element = $element;
		_this.qGridPopupService = qGridPopupService;
		_this.$templateScope = null;
		_this.template = new __WEBPACK_IMPORTED_MODULE_1__grid_view_components_template_template_link__["a" /* default */]($compile, $templateCache);
		return _this;
	}

	_createClass(PopupPanel, [{
		key: 'onInit',
		value: function onInit() {
			var model = this.model;
			var templateUrl = 'qgrid.plugin.popup-panel.tpl.html';
			var templateScope = this.$scope.$new();
			var link = this.template.link(templateUrl, model.popup().resource);

			link(this.$element, templateScope);
			this.$templateScope = templateScope;
			this.$element.addClass('q-grid-popup');
		}
	}, {
		key: 'onDestroy',
		value: function onDestroy() {
			if (this.$templateScope) {
				this.$templateScope.$destroy();
			}
		}
	}, {
		key: 'close',
		value: function close() {
			this.qGridPopupService.close(this.id);
		}
	}]);

	return PopupPanel;
}(__WEBPACK_IMPORTED_MODULE_0__grid_view_components_component__["a" /* default */]);

PopupPanel.$inject = ['$scope', '$element', '$compile', '$templateCache', 'qGridPopupService'];

/* harmony default export */ __webpack_exports__["a"] = ({
	controller: PopupPanel,
	controllerAs: '$popup',
	bindings: {
		id: '<',
		model: '<'
	}
});

/***/ }),
/* 340 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid_view_components_template_template_link__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__popup_manager__ = __webpack_require__(337);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var PopupService = function () {
	function PopupService() {
		var _this = this;

		_classCallCheck(this, PopupService);

		Array.from(arguments).forEach(function (arg, index) {
			return _this[PopupService.$inject[index]] = arg;
		});

		this.template = new __WEBPACK_IMPORTED_MODULE_0__grid_view_components_template_template_link__["a" /* default */](this.$compile, this.$templateCache);
		this.popups = {};
	}

	_createClass(PopupService, [{
		key: 'close',
		value: function close(id) {
			var item = this.popups[id];
			delete this.popups[id];

			item.close();
		}
	}, {
		key: 'closeAll',
		value: function closeAll() {
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = Object.keys(this.popups)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var key = _step.value;

					this.close(key);
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}
		}
	}, {
		key: 'open',
		value: function open(settings, model, scope) {
			if (this.popups.hasOwnProperty(settings.id)) {
				return;
			}

			var target = this.targetize(settings);
			var pos = this.position(target, settings);
			var popupScope = this.$rootScope.$new(false, scope);

			popupScope.model = model;
			popupScope.id = settings.id;

			var popup = angular.element('<q-grid:popup-panel id="id" model="model"></q-grid:popup-panel>'); // eslint-disable-line no-undef

			this.$document[0].body.append(popup[0]);
			this.$compile(popup)(popupScope);

			popup.attr('id', settings.id);
			popup.css({ left: pos.left + 'px', top: pos.top + 'px', zIndex: 79 });

			if (settings.resizable) {
				popup.addClass('resizable');
			}

			if (settings.collapsible) {
				popup.addClass('collapsible');
			}

			if (settings.cls) {
				popup.addClass(settings.cls);
			}

			this.popups[settings.id] = new __WEBPACK_IMPORTED_MODULE_1__popup_manager__["a" /* default */](popup, settings, this.$document[0].body);
			this.popups[settings.id].focus();
		}
	}, {
		key: 'expand',
		value: function expand(id) {
			var item = this.popups[id];
			item.expand();
		}
	}, {
		key: 'collapse',
		value: function collapse(id) {
			var item = self.popups[id];
			item.collapse();
		}
	}, {
		key: 'focus',
		value: function focus(id) {
			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = this.popups[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var _step2$value = _slicedToArray(_step2.value, 2),
					    _popup = _step2$value[1];

					_popup.unfocus();
				}
			} catch (err) {
				_didIteratorError2 = true;
				_iteratorError2 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion2 && _iterator2.return) {
						_iterator2.return();
					}
				} finally {
					if (_didIteratorError2) {
						throw _iteratorError2;
					}
				}
			}

			var popup = this.popups[id];
			popup.focus();
		}
	}, {
		key: 'resize',
		value: function resize(id, settings) {
			var item = this.popups[id];
			item.resize(settings);
		}
	}, {
		key: 'targetize',
		value: function targetize(settings) {
			var _this2 = this;

			var target = settings.target;
			if (!target) {
				return {
					offset: function offset() {
						return {
							left: _this2.$window.innerWidth / 2,
							top: (_this2.$window.innerHeight - (parseInt(settings.height) || 0)) / 2
						};
					},
					height: function height() {
						return 500;
					},
					width: function width() {
						return 400;
					}
				};
			}

			var rect = target.getBoundingClientRect();
			return {
				offset: function offset() {
					return {
						left: rect.left,
						top: rect.top
					};
				},
				height: function height() {
					return target.clientHeight;
				},
				width: function width() {
					return target.clientWidth;
				}
			};
		}
	}, {
		key: 'position',
		value: function position(target, settings) {
			var dy = parseInt(settings.offsetTop) || 0;
			var dx = parseInt(settings.offsetLeft) || 0;
			var w = this.$window.innerWidth;
			var h = this.$window.innerHeight;
			var p = target.offset();
			var x = p.left;
			var y = p.top;
			var eh = parseInt(settings.height) || target.height();
			var ew = parseInt(settings.width) || target.width();
			var eh2 = eh / 2;
			var ew2 = ew / 2;
			var gtx1 = x + ew2 > w;
			var ltx0 = x - ew2 < 0;
			var gty1 = y + eh > h;
			var lty0 = y - eh < 0;
			var l = ltx0 && gtx1 ? w / 2 - ew2 : gtx1 ? x - ew - dx : ltx0 ? x + dx : x - ew2 + dx;
			var t = lty0 && gty1 ? h / 2 - eh2 : gty1 ? y - eh - dy : lty0 ? y + dy : y + dy;

			return {
				left: l,
				top: t
			};
		}
	}]);

	return PopupService;
}();

/* harmony default export */ __webpack_exports__["a"] = (PopupService);


PopupService.$inject = ['$rootScope', '$window', '$document', '$templateCache', '$compile', '$timeout'];

/***/ }),
/* 341 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid_view_components_component__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid_view_components_template_template_link__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__definition__ = __webpack_require__(13);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var PopupTrigger = function (_Component) {
	_inherits(PopupTrigger, _Component);

	function PopupTrigger($scope, $element, $compile, $templateCache) {
		_classCallCheck(this, PopupTrigger);

		var _this = _possibleConstructorReturn(this, (PopupTrigger.__proto__ || Object.getPrototypeOf(PopupTrigger)).call(this));

		_this.$scope = $scope;
		_this.$element = $element;
		_this.$templateScope = null;
		_this.template = new __WEBPACK_IMPORTED_MODULE_1__grid_view_components_template_template_link__["a" /* default */]($compile, $templateCache);
		return _this;
	}

	_createClass(PopupTrigger, [{
		key: 'onInit',
		value: function onInit() {
			var model = this.popup.model;
			var templateUrl = 'qgrid.plugin.popup-trigger.tpl.html';
			var templateScope = this.$scope.$new();
			var link = this.template.link(templateUrl, model.popup().resource, [this.popup.id + ':trigger']);

			link(this.$element, templateScope);
			this.$templateScope = templateScope;
		}
	}, {
		key: 'onDestroy',
		value: function onDestroy() {
			if (this.$templateScope) {
				this.$templateScope.$destroy();
			}
		}
	}, {
		key: 'open',
		value: function open() {
			var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

			if (!settings.target) {
				settings.target = this.$element[0];
			}

			this.popup.open(settings);
		}
	}]);

	return PopupTrigger;
}(__WEBPACK_IMPORTED_MODULE_0__grid_view_components_component__["a" /* default */]);

PopupTrigger.$inject = ['$scope', '$element', '$compile', '$templateCache'];

/* harmony default export */ __webpack_exports__["a"] = ({
	controller: PopupTrigger,
	require: {
		popup: '^^' + __WEBPACK_IMPORTED_MODULE_2__definition__["p" /* POPUP_NAME */]
	},
	controllerAs: '$popup'
});

/***/ }),
/* 342 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plugin_component__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__definition__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grid_core_template__ = __webpack_require__(3);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_2__grid_core_template__["a" /* TemplatePath */].register(__WEBPACK_IMPORTED_MODULE_1__definition__["o" /* PROGRESS_NAME */], function () {
	return {
		model: 'progress',
		resource: 'content'
	};
});

var Plugin = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__plugin_component__["a" /* default */])('progress', { models: ['progress'] });

var Progress = function (_Plugin) {
	_inherits(Progress, _Plugin);

	function Progress() {
		_classCallCheck(this, Progress);

		return _possibleConstructorReturn(this, (Progress.__proto__ || Object.getPrototypeOf(Progress)).apply(this, arguments));
	}

	_createClass(Progress, [{
		key: 'isBusy',
		get: function get() {
			var progressState = this.model.progress();
			return progressState.isBusy || progressState.queue.length;
		}
	}]);

	return Progress;
}(Plugin);

/* harmony default export */ __webpack_exports__["a"] = (Progress.component({
	controller: Progress,
	controllerAs: '$progress'
}));

/***/ }),
/* 343 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plugin_component__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid_core_infrastructure__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__definition__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__grid_core_template__ = __webpack_require__(3);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






__WEBPACK_IMPORTED_MODULE_3__grid_core_template__["a" /* TemplatePath */].register(__WEBPACK_IMPORTED_MODULE_2__definition__["g" /* SELECTION_BAR_NAME */], function () {
	return {
		model: 'selection',
		resource: 'content'
	};
});

var Plugin = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__plugin_component__["a" /* default */])('selection-bar');

var SelectionBar = function (_Plugin) {
	_inherits(SelectionBar, _Plugin);

	function SelectionBar() {
		_classCallCheck(this, SelectionBar);

		var _this = _possibleConstructorReturn(this, (SelectionBar.__proto__ || Object.getPrototypeOf(SelectionBar)).apply(this, arguments));

		_this.units = [{ key: 'row', title: 'Row' }, { key: 'column', title: 'Column' }, { key: 'cell', title: 'Cell' }, { key: 'mix', title: 'Mix' }];

		_this.unit = _this.units[0].key;

		_this.modes = [{ key: 'single', title: 'Single' }, { key: 'multiple', title: 'Multiple' }, { key: 'range', title: 'Range' }];

		_this.mode = _this.modes[0].key;

		_this.toggleMode = new __WEBPACK_IMPORTED_MODULE_1__grid_core_infrastructure__["g" /* Command */]({
			execute: function execute(mode) {
				var selection = _this.model.selection;
				selection({ mode: mode });
			}
		});

		_this.toggleUnit = new __WEBPACK_IMPORTED_MODULE_1__grid_core_infrastructure__["g" /* Command */]({
			execute: function execute(unit) {
				var selection = _this.model.selection;
				selection({ unit: unit });
			}
		});
		return _this;
	}

	_createClass(SelectionBar, [{
		key: 'onInit',
		value: function onInit() {
			var _this2 = this;

			this.model.selectionChanged.watch(function () {
				var selection = _this2.model.selection();
				_this2.mode = selection.mode;
				_this2.unit = selection.unit;
			});
		}
	}, {
		key: 'count',
		get: function get() {
			return this.model.selection().entries.length;
		}
	}, {
		key: 'resource',
		get: function get() {
			return this.model.visibility().resource;
		}
	}]);

	return SelectionBar;
}(Plugin);

/* harmony default export */ __webpack_exports__["a"] = (SelectionBar.component({
	controller: SelectionBar,
	controllerAs: '$selectionBar'
}));

/***/ }),
/* 344 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_chooser_column_chooser_model__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column_filter_column_filter_model__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popup_popup_model__ = __webpack_require__(338);
/* harmony export (immutable) */ __webpack_exports__["a"] = setup;




function setup(model) {
	model.register('columnChooser', __WEBPACK_IMPORTED_MODULE_0__column_chooser_column_chooser_model__["a" /* default */]).register('columnFilter', __WEBPACK_IMPORTED_MODULE_1__column_filter_column_filter_model__["a" /* default */]).register('popup', __WEBPACK_IMPORTED_MODULE_2__popup_popup_model__["a" /* default */]);
}

/***/ }),
/* 345 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plugin_component__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid_core_infrastructure__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grid_core_sort_sort_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__definition__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__grid_view_definition__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__grid_core_template__ = __webpack_require__(3);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable indent */








__WEBPACK_IMPORTED_MODULE_5__grid_core_template__["a" /* TemplatePath */].register(__WEBPACK_IMPORTED_MODULE_3__definition__["d" /* SORT_BAR_NAME */], function () {
	return {
		model: 'sort',
		resource: 'content'
	};
});

var Plugin = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__plugin_component__["a" /* default */])('sort-bar');

var SortBar = function (_Plugin) {
	_inherits(SortBar, _Plugin);

	function SortBar() {
		_classCallCheck(this, SortBar);

		var _this = _possibleConstructorReturn(this, (SortBar.__proto__ || Object.getPrototypeOf(SortBar)).apply(this, arguments));

		_this.newSort = null;
		_this.selectedItems = null;

		_this.replace = new __WEBPACK_IMPORTED_MODULE_1__grid_core_infrastructure__["g" /* Command */]({
			execute: function execute(key) {
				var sort = _this.model.sort;

				sort({
					by: key.map(function (item) {
						return _defineProperty({}, item, 'asc');
					})
				});
			},
			canExecute: function canExecute() {
				return _this.columns.length > 0;
			}
		});

		_this.add = new __WEBPACK_IMPORTED_MODULE_1__grid_core_infrastructure__["g" /* Command */]({
			execute: function execute(key) {
				var sort = _this.model.sort;
				var state = sort();
				var entry = _defineProperty({}, key, 'asc');
				var temp = state.by.concat(entry);

				_this.selectedItems = temp.slice();

				sort({
					by: temp
				});

				_this.newSort = null;
			},
			canExecute: function canExecute() {
				return _this.columns.length > 0;
			}
		});

		_this.remove = new __WEBPACK_IMPORTED_MODULE_1__grid_core_infrastructure__["g" /* Command */]({
			execute: function execute(entry) {
				var sort = _this.model.sort;
				var state = sort();

				var key = __WEBPACK_IMPORTED_MODULE_2__grid_core_sort_sort_service__["a" /* key */](entry);
				var index = __WEBPACK_IMPORTED_MODULE_2__grid_core_sort_sort_service__["c" /* index */](state.by, key);

				var temp = Array.from(state.by);
				temp.splice(index, 1);
				_this.selectedItems = temp.slice();

				sort({
					by: temp
				});
			}
		});

		_this.drop = new __WEBPACK_IMPORTED_MODULE_1__grid_core_infrastructure__["g" /* Command */]({
			canExecute: function canExecute(e) {
				return e.source && e.source.key === __WEBPACK_IMPORTED_MODULE_4__grid_view_definition__["g" /* TH_CORE_NAME */] && _this.add.canExecute(e.source.value);
			},
			execute: function execute(e) {
				return _this.add.execute(e.source.value);
			}
		});
		return _this;
	}

	_createClass(SortBar, [{
		key: 'onInit',
		value: function onInit() {
			var _this2 = this;

			var sortBy = this.model.sort().by;
			sortBy.forEach(function (key) {
				return _this2.add.execute(key);
			});
		}
	}, {
		key: 'title',
		value: function title(entry) {
			var key = __WEBPACK_IMPORTED_MODULE_2__grid_core_sort_sort_service__["a" /* key */](entry);
			var columns = this.columns;
			var index = columns.findIndex(function (c) {
				return c.key === key;
			});
			return index >= 0 ? columns[index].title : '';
		}
	}, {
		key: 'resource',
		get: function get() {
			return this.model.sort().resource;
		}
	}, {
		key: 'columns',
		get: function get() {
			return this.model.data().columns;
		}
	}, {
		key: 'sorts',
		get: function get() {
			return this.model.sort().by;
		}
	}]);

	return SortBar;
}(Plugin);

/* harmony default export */ __webpack_exports__["a"] = (SortBar.component({
	controller: SortBar,
	controllerAs: '$sortBar'
}));

/* eslint-enable indent */

/***/ }),
/* 346 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plugin_component__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid_core_infrastructure__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grid_core_node__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__grid_core_services_path__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__grid_view_services_ng__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__definition__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__grid_core_template__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__grid_core_services_utility__ = __webpack_require__(1);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










__WEBPACK_IMPORTED_MODULE_6__grid_core_template__["a" /* TemplatePath */].register(__WEBPACK_IMPORTED_MODULE_5__definition__["h" /* VISIBILITY_NAME */], function () {
	return {
		model: 'visibility',
		resource: 'content'
	};
});

var Plugin = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__plugin_component__["a" /* default */])('visibility');

var Visibility = function (_Plugin) {
	_inherits(Visibility, _Plugin);

	function Visibility() {
		_classCallCheck(this, Visibility);

		var _this = _possibleConstructorReturn(this, (Visibility.__proto__ || Object.getPrototypeOf(Visibility)).apply(this, arguments));

		_this.toggle = new __WEBPACK_IMPORTED_MODULE_1__grid_core_infrastructure__["g" /* Command */]({
			execute: function execute(node) {
				node.value = !node.value;
				node.setValue(node.value);

				// Trigger change event for the visibility model
				// TODO: trigger only changed parts
				var visibility = _this.model.visibility;
				visibility(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__grid_core_services_utility__["j" /* cloneDeep */])(visibility()));
			},
			canExecute: function canExecute(node) {
				return !node.children.length;
			}
		});
		return _this;
	}

	_createClass(Visibility, [{
		key: 'build',
		value: function build(graph) {
			var _this2 = this;

			var nodes = [];
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				var _loop = function _loop() {
					var _step$value = _slicedToArray(_step.value, 2),
					    key = _step$value[0],
					    value = _step$value[1];

					if (key === 'resource') {
						return 'continue';
					}

					var node = new __WEBPACK_IMPORTED_MODULE_2__grid_core_node__["c" /* Node */](key);
					node.setValue = function (value) {
						return graph()[key] = value;
					};
					if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__grid_core_services_utility__["c" /* isObject */])(value)) {
						node.children = _this2.build(function () {
							return graph()[key];
						});
					} else {
						node.value = value;
					}

					nodes.push(node);
				};

				for (var _iterator = Object.entries(graph())[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var _ret = _loop();

					if (_ret === 'continue') continue;
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			return nodes;
		}
	}, {
		key: 'onInit',
		value: function onInit() {
			var _this3 = this;

			var visibility = this.model.visibility;
			var visibilityState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__grid_core_services_utility__["j" /* cloneDeep */])(visibility());
			Object.keys(this.$attrs).filter(function (key) {
				return !__WEBPACK_IMPORTED_MODULE_4__grid_view_services_ng__["a" /* isSystem */](key) && key !== 'model';
			}).forEach(function (attr) {
				var accessor = __WEBPACK_IMPORTED_MODULE_3__grid_core_services_path__["a" /* compile */](attr);
				accessor(visibilityState, _this3.$attrs[attr] === 'true');
			});

			visibility(visibilityState);
			this.items = this.build(function () {
				return visibility();
			});
		}
	}, {
		key: 'resource',
		get: function get() {
			return this.model.visibility().resource;
		}
	}]);

	return Visibility;
}(Plugin);

/* harmony default export */ __webpack_exports__["a"] = (Visibility.component({
	controller: Visibility,
	controllerAs: '$visibility'
}));

/***/ }),
/* 347 */,
/* 348 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid_view_directives_directive__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid_view_definition__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grid_core_infrastructure__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__grid_view_services_path_find__ = __webpack_require__(390);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var BodyCore = function (_Directive) {
	_inherits(BodyCore, _Directive);

	function BodyCore($scope, $element, $document) {
		_classCallCheck(this, BodyCore);

		// this.$scope should be set cause it used by box.js
		var _this = _possibleConstructorReturn(this, (BodyCore.__proto__ || Object.getPrototypeOf(BodyCore)).call(this));

		_this.$scope = $scope;
		_this.element = $element[0];
		_this.document = $document[0];

		_this.documentListener = new __WEBPACK_IMPORTED_MODULE_2__grid_core_infrastructure__["d" /* EventListener */](_this, _this.document);
		_this.listener = new __WEBPACK_IMPORTED_MODULE_2__grid_core_infrastructure__["d" /* EventListener */](_this, _this.element);

		_this.rangeStartCell = null;

		Object.defineProperty($scope, '$view', { get: function get() {
				return _this.view;
			} });
		return _this;
	}

	_createClass(BodyCore, [{
		key: 'onScroll',
		value: function onScroll() {
			var element = this.element;
			var scroll = this.view.model.scroll;

			scroll({
				top: element.scrollTop,
				left: element.scrollLeft,
				width: element.scrollWidth,
				height: element.scrollHeight
			}, {
				source: 'body.core',
				pin: this.view.pin
			});
		}
	}, {
		key: 'onInit',
		value: function onInit() {
			this.listener.on('scroll', this.onScroll);
			this.listener.on('click', this.onClick);
			this.listener.on('mousedown', this.onMouseDown);
			this.listener.on('mouseup', this.onMouseUp);

			this.documentListener.on('mousemove', this.onMouseMove);
		}
	}, {
		key: 'onDestroy',
		value: function onDestroy() {
			this.listener.off();
		}
	}, {
		key: 'onClick',
		value: function onClick(e) {
			var _this2 = this;

			var cell = __WEBPACK_IMPORTED_MODULE_3__grid_view_services_path_find__["a" /* cell */](e.path);
			if (cell) {
				this.navigate(cell);

				if (cell.column.editorOptions.trigger === 'click' && this.view.edit.cell.enter.canExecute(cell)) {
					this.$scope.$evalAsync(function () {
						return _this2.view.edit.cell.enter.execute(cell);
					});
				}

				if (cell.column.type !== 'select') {
					this.view.selection.selectRange(cell);
				}
			}
		}
	}, {
		key: 'onMouseDown',
		value: function onMouseDown(e) {
			if (this.selection.mode === 'range') {
				this.rangeStartCell = __WEBPACK_IMPORTED_MODULE_3__grid_view_services_path_find__["a" /* cell */](e.path);

				if (this.rangeStartCell) {
					this.view.selection.selectRange(this.rangeStartCell);
				}
			}
		}
	}, {
		key: 'onMouseMove',
		value: function onMouseMove(e) {
			if (this.selection.mode === 'range') {
				var startCell = this.rangeStartCell;
				var endCell = __WEBPACK_IMPORTED_MODULE_3__grid_view_services_path_find__["a" /* cell */](e.path);

				if (startCell && endCell) {
					this.view.selection.selectRange(startCell, endCell);
					this.navigate(endCell);
				}
			}
		}
	}, {
		key: 'onMouseUp',
		value: function onMouseUp() {
			if (this.selection.mode === 'range') {
				this.rangeStartCell = null;
			}
		}
	}, {
		key: 'navigate',
		value: function navigate(cell) {
			var focus = this.view.nav.focusCell;
			if (focus.canExecute(cell)) {
				focus.execute(cell);
			}
		}
	}, {
		key: 'selection',
		get: function get() {
			return this.view.model.selection();
		}
	}]);

	return BodyCore;
}(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__grid_view_directives_directive__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__grid_view_definition__["I" /* BODY_CORE_NAME */], { view: '^^' + __WEBPACK_IMPORTED_MODULE_1__grid_view_definition__["f" /* VIEW_CORE_NAME */] }));

BodyCore.$inject = ['$scope', '$element', '$document'];

/* harmony default export */ __webpack_exports__["a"] = ({
	restrict: 'A',
	bindToController: true,
	controllerAs: '$body',
	controller: BodyCore,
	require: BodyCore.require,
	link: BodyCore.link,
	scope: true
});

/***/ }),
/* 349 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid_view_directives_directive__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cell_cell_build__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grid_core_infrastructure__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__grid_view_definition__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__grid_core_definition__ = __webpack_require__(18);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var TdCore = function (_Directive) {
	_inherits(TdCore, _Directive);

	function TdCore($scope, $element) {
		_classCallCheck(this, TdCore);

		var _this = _possibleConstructorReturn(this, (TdCore.__proto__ || Object.getPrototypeOf(TdCore)).call(this));

		_this.$scope = $scope;
		_this.$element = $element;
		_this.$templateScope = null;
		return _this;
	}

	_createClass(TdCore, [{
		key: 'onInit',
		value: function onInit() {
			var column = this.column;
			var element = this.$element[0];

			this.view.style.monitor.cell.add(this.element);

			element.classList.add(__WEBPACK_IMPORTED_MODULE_4__grid_core_definition__["a" /* GRID_PREFIX */] + '-' + column.key);
			element.classList.add(__WEBPACK_IMPORTED_MODULE_4__grid_core_definition__["a" /* GRID_PREFIX */] + '-' + column.type);
			if (column.hasOwnProperty('editor')) {
				element.classList.add(__WEBPACK_IMPORTED_MODULE_4__grid_core_definition__["a" /* GRID_PREFIX */] + '-' + column.editor);
			}

			this.mode('init');
		}
	}, {
		key: 'mode',
		value: function mode(value) {
			var model = this.view.model;
			var column = this.column;
			var templateScope = this.setup();
			var cache = model.body().cache;
			var element = this.$element[0];

			switch (value) {
				case 'view':
				case 'init':
					{
						var link = cache.find(column.key);
						if (!link) {
							var build = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__cell_cell_build__["a" /* default */])(this.view.template);
							link = build('body', model, column);
							cache.set(column.key, link);
						}

						link(this.$element, templateScope);
						if (value !== 'init') {
							element.classList.remove(__WEBPACK_IMPORTED_MODULE_4__grid_core_definition__["a" /* GRID_PREFIX */] + '-edit');
						}
						break;
					}
				case 'edit':
					{
						var _link = cache.find(column.key + '.edit');
						if (!_link) {
							var _build = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__cell_cell_build__["a" /* default */])(this.view.template, 'edit');
							_link = _build('body', model, column);
							cache.set(column.key + '.edit', _link);
						}

						_link(this.$element, templateScope);
						element.classList.add(__WEBPACK_IMPORTED_MODULE_4__grid_core_definition__["a" /* GRID_PREFIX */] + '-edit');
					}
					break;
				default:
					throw new __WEBPACK_IMPORTED_MODULE_2__grid_core_infrastructure__["c" /* AppError */]('td.core', 'Invalid mode ' + value);
			}
		}
	}, {
		key: 'setup',
		value: function setup() {
			if (this.$templateScope) {
				this.$templateScope.$destroy();
			}

			this.$templateScope = this.$scope.$new();
			return this.$templateScope;
		}
	}, {
		key: 'onDestroy',
		value: function onDestroy() {
			if (this.$templateScope) {
				this.$templateScope.$destroy();
			}

			this.view.style.monitor.cell.remove(this.$element[0]);
		}
	}, {
		key: 'value',
		get: function get() {
			var column = this.column;
			var row = this.row;
			return this.view.body.value(row, column);
		},
		set: function set(value) {
			var column = this.column;
			var row = this.row;
			this.view.body.value(row, column, value);
		}
	}, {
		key: 'label',
		get: function get() {
			var column = this.column;
			var row = this.row;
			return this.view.body.label(row, column);
		},
		set: function set(label) {
			var column = this.column;
			var row = this.row;
			this.view.body.label(row, column, label);
		}
	}, {
		key: 'rowIndex',
		get: function get() {
			return this.view.scroll.y.container.position + this.$scope.$parent.$index;
		}
	}, {
		key: 'columnIndex',
		get: function get() {
			// use vscroll.column + vscroll.position in the future
			return this.$scope.$index;
		}
	}, {
		key: 'column',
		get: function get() {
			return this.$scope.$column.model;
		}
	}, {
		key: 'row',
		get: function get() {
			return this.$scope.$row;
		}
	}]);

	return TdCore;
}(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__grid_view_directives_directive__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_3__grid_view_definition__["F" /* TD_CORE_NAME */], { view: '^^' + __WEBPACK_IMPORTED_MODULE_3__grid_view_definition__["f" /* VIEW_CORE_NAME */] }));

TdCore.$inject = ['$scope', '$element'];

/* harmony default export */ __webpack_exports__["a"] = ({
	restrict: 'A',
	bindToController: true,
	controllerAs: '$cell',
	controller: TdCore,
	require: TdCore.require,
	link: TdCore.link,
	scope: false
});

/***/ }),
/* 350 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid_view_directives_directive__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid_view_definition__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var isDate = angular.isDate;
var isArray = angular.isArray;
var toJson = angular.toJson;
var isFunction = angular.isFunction;
var toString = Object.prototype.toString;
var hasCustomToString = function hasCustomToString(obj) {
	return isFunction(obj.toString) && obj.toString !== toString;
};

var stringify = function stringify(value) {
	if (value == null) {
		// null || undefined
		return '';
	}

	switch (typeof value === 'undefined' ? 'undefined' : _typeof(value)) {
		case 'string':
			break;
		case 'number':
			value = '' + value;
			break;
		default:
			if (hasCustomToString(value) && !isArray(value) && !isDate(value)) {
				value = value.toString();
			} else {
				value = toJson(value);
			}
	}

	return value;
};

var CellValue = function (_Directive) {
	_inherits(CellValue, _Directive);

	function CellValue($scope, $element) {
		_classCallCheck(this, CellValue);

		var _this = _possibleConstructorReturn(this, (CellValue.__proto__ || Object.getPrototypeOf(CellValue)).call(this));

		_this.$scope = $scope;
		_this.element = $element[0];
		return _this;
	}

	_createClass(CellValue, [{
		key: 'onInit',
		value: function onInit() {
			var $scope = this.$scope;
			var $cell = $scope.$cell;
			var element = this.element;
			$scope.$watch(function () {
				return stringify($cell.value);
			}, function (value) {
				return element.textContent = value;
			});
		}
	}]);

	return CellValue;
}(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__grid_view_directives_directive__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__grid_view_definition__["o" /* CELL_VALUE_NAME */]));

CellValue.$inject = ['$scope', '$element'];

/* harmony default export */ __webpack_exports__["a"] = ({
	restrict: 'A',
	controller: CellValue,
	require: CellValue.require,
	link: CellValue.link,
	scope: false
});

/***/ }),
/* 351 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid_view_definition__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grid_core_services_utility__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__grid_core_template__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__grid_core_column_column_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__grid_core_column_column_factory__ = __webpack_require__(59);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








__WEBPACK_IMPORTED_MODULE_3__grid_core_template__["a" /* TemplatePath */].register(__WEBPACK_IMPORTED_MODULE_1__grid_view_definition__["y" /* COLUMN_NAME */], function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
});

var Column = function (_Component) {
	_inherits(Column, _Component);

	function Column($attrs) {
		_classCallCheck(this, Column);

		var _this = _possibleConstructorReturn(this, (Column.__proto__ || Object.getPrototypeOf(Column)).call(this));

		_this.$attrs = $attrs;
		return _this;
	}

	_createClass(Column, [{
		key: 'onInit',
		value: function onInit() {
			var $attrs = this.$attrs;
			var withKey = !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__grid_core_services_utility__["d" /* isUndefined */])(this.key);
			if (!withKey) {
				if ($attrs.hasOwnProperty('editor')) {
					this.key = '$default.' + $attrs.editor;
				} else if ($attrs.hasOwnProperty('type')) {
					this.key = '$default.' + $attrs.type;
				} else {
					this.key = '$default';
				}
			}

			var model = this.root.model;
			var createColumn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__grid_core_column_column_factory__["a" /* columnFactory */])(model);
			var data = model.data;
			var dataState = data();
			var columns = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__grid_core_services_utility__["h" /* clone */])(dataState.columns);
			var column = __WEBPACK_IMPORTED_MODULE_4__grid_core_column_column_service__["c" /* find */](columns, this.key);
			if (column) {
				createColumn($attrs.type || 'text', column);
			} else {
				column = createColumn($attrs.type || 'text').model;
				column.key = this.key;
				columns.source = 'template';
				columns.push(column);
			}

			this.columnList.copy(column, $attrs);
			// HACK: to understand if need to pass {$row: row} instead of just row in cell.core.js
			if ($attrs.hasOwnProperty('value')) {
				column.$value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__grid_core_services_utility__["d" /* isUndefined */])(this.value) ? null : this.value;
			}

			if ($attrs.hasOwnProperty('label')) {
				column.$label = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__grid_core_services_utility__["d" /* isUndefined */])(this.label) ? null : this.label;
			}

			if (withKey) {
				this.columnList.add(column);
			} else {
				var settings = Object.keys($attrs).filter(function (key) {
					return !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__grid_core_services_utility__["d" /* isUndefined */])($attrs[key]) && column.hasOwnProperty(key);
				}).reduce(function (memo, key) {
					memo[key] = column[key];
					return memo;
				}, {});

				this.columnList.register(settings);
			}
		}
	}]);

	return Column;
}(__WEBPACK_IMPORTED_MODULE_0__component__["a" /* default */]);

Column.$inject = ['$attrs'];

/* harmony default export */ __webpack_exports__["a"] = ({
	require: {
		root: '^^' + __WEBPACK_IMPORTED_MODULE_1__grid_view_definition__["e" /* GRID_NAME */],
		columnList: '^^' + __WEBPACK_IMPORTED_MODULE_1__grid_view_definition__["x" /* COLUMN_LIST_NAME */]
	},
	controller: Column,
	bindings: {
		value: '&',
		key: '@'
	}
});

/***/ }),
/* 352 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_component__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid_view_services_ng__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grid_core_services__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__grid_core_services_utility__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__grid_view_definition__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var ColumnList = function (_ModelComponent) {
	_inherits(ColumnList, _ModelComponent);

	function ColumnList($scope, $parse) {
		_classCallCheck(this, ColumnList);

		var _this = _possibleConstructorReturn(this, (ColumnList.__proto__ || Object.getPrototypeOf(ColumnList)).call(this, 'columnList'));

		_this.$scope = $scope;
		_this.$parse = $parse;
		return _this;
	}

	_createClass(ColumnList, [{
		key: 'copy',
		value: function copy(target, source) {
			var $parse = this.$parse;
			var $scope = this.$scope;

			Object.keys(source).filter(function (key) {
				return !__WEBPACK_IMPORTED_MODULE_1__grid_view_services_ng__["a" /* isSystem */](key) && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__grid_core_services_utility__["d" /* isUndefined */])(source[key]) && key !== 'value';
			}).forEach(function (key) {
				var value = source[key];
				var accessor = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__grid_core_services__["c" /* compile */])(key);
				var targetValue = accessor(target);
				var parse = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__grid_core_services__["a" /* parseFactory */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__grid_core_services__["g" /* getType */])(targetValue));
				var sourceValue = parse !== __WEBPACK_IMPORTED_MODULE_3__grid_core_services_utility__["l" /* identity */] ? parse(value) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__grid_core_services_utility__["c" /* isObject */])(targetValue) ? $parse(value)($scope) : value;

				accessor(target, sourceValue);
			});
		}
	}, {
		key: 'add',
		value: function add(column) {
			var columnList = this.root.model.columnList;
			columnList({
				columns: columnList().columns.concat([column])
			});
		}
	}, {
		key: 'register',
		value: function register(column) {
			var columnList = this.root.model.columnList;
			var reference = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__grid_core_services_utility__["h" /* clone */])(columnList().columns);
			reference[column.type] = column;
			columnList({
				reference: reference
			});
		}
	}]);

	return ColumnList;
}(__WEBPACK_IMPORTED_MODULE_0__model_component__["a" /* default */]);

ColumnList.$inject = ['$scope', '$parse'];

/* harmony default export */ __webpack_exports__["a"] = ({
	require: {
		root: '^^' + __WEBPACK_IMPORTED_MODULE_4__grid_view_definition__["e" /* GRID_NAME */]
	},
	controller: ColumnList,
	bindings: {
		columnListGeneration: '@generation'
	}
});

/***/ }),
/* 353 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid_view_directives_directive__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid_core_infrastructure__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__drag_service__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__grid_view_definition__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__grid_core_definition__ = __webpack_require__(18);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Drag = function (_Directive) {
	_inherits(Drag, _Directive);

	function Drag($element) {
		_classCallCheck(this, Drag);

		var _this = _possibleConstructorReturn(this, (Drag.__proto__ || Object.getPrototypeOf(Drag)).call(this));

		_this.element = $element[0];
		_this.listener = new __WEBPACK_IMPORTED_MODULE_1__grid_core_infrastructure__["d" /* EventListener */](_this, _this.element);
		return _this;
	}

	_createClass(Drag, [{
		key: 'onInit',
		value: function onInit() {
			this.element.classList.add(__WEBPACK_IMPORTED_MODULE_4__grid_core_definition__["a" /* GRID_PREFIX */] + '-can-drag');
			this.listener.on('dragstart', this.start);
			this.listener.on('dragend', this.end.bind(this));
		}
	}, {
		key: 'onDestroy',
		value: function onDestroy() {
			this.element.classList.remove(__WEBPACK_IMPORTED_MODULE_4__grid_core_definition__["a" /* GRID_PREFIX */] + '-can-drag');
			this.listener.off();
		}
	}, {
		key: 'start',
		value: function start(e) {
			var transfer = e.dataTransfer;
			if (this.canDrag(this.event()) === false) {
				e.preventDefault();
				transfer.effectAllowed = 'none';
				return false;
			}

			var source = this.transfer();
			this.element.classList.add(__WEBPACK_IMPORTED_MODULE_4__grid_core_definition__["a" /* GRID_PREFIX */] + '-drag');
			transfer.setData(__WEBPACK_IMPORTED_MODULE_2__drag_service__["a" /* default */].mimeType, __WEBPACK_IMPORTED_MODULE_2__drag_service__["a" /* default */].encode(source));
			transfer.effectAllowed = this.effect || 'move';
			__WEBPACK_IMPORTED_MODULE_2__drag_service__["a" /* default */].transfer = source;

			if (this.view) {
				var model = this.view.model;
				model.drag({ isActive: true });
			}
		}
	}, {
		key: 'end',
		value: function end() {
			this.element.classList.remove(__WEBPACK_IMPORTED_MODULE_4__grid_core_definition__["a" /* GRID_PREFIX */] + '-drag');
			__WEBPACK_IMPORTED_MODULE_2__drag_service__["a" /* default */].transfer = null;

			if (this.view) {
				var model = this.view.model;
				model.drag({ isActive: false });
			}
		}
	}, {
		key: 'event',
		value: function event() {
			var source = this.transfer();
			return {
				$event: {
					source: source,
					target: null
				}
			};
		}
	}]);

	return Drag;
}(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__grid_view_directives_directive__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_3__grid_view_definition__["h" /* DRAG_NAME */], { view: '^^?' + __WEBPACK_IMPORTED_MODULE_3__grid_view_definition__["f" /* VIEW_CORE_NAME */] }));

Drag.$inject = ['$element'];

/* harmony default export */ __webpack_exports__["a"] = ({
	restrict: 'A',
	bindToController: {
		'transfer': '&' + __WEBPACK_IMPORTED_MODULE_3__grid_view_definition__["h" /* DRAG_NAME */],
		'effect': '@' + __WEBPACK_IMPORTED_MODULE_3__grid_view_definition__["Q" /* DROP_EFFECT_NAME */],
		'canDrag': '&' + __WEBPACK_IMPORTED_MODULE_3__grid_view_definition__["R" /* CAN_DRAG_NAME */]
	},
	controllerAs: '$drag',
	controller: Drag,
	require: Drag.require,
	link: Drag.link
});

/***/ }),
/* 354 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid_view_directives_directive__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid_core_infrastructure__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__drag_service__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__grid_view_definition__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__grid_core_definition__ = __webpack_require__(18);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Drop = function (_Directive) {
	_inherits(Drop, _Directive);

	function Drop($scope, $element) {
		_classCallCheck(this, Drop);

		var _this = _possibleConstructorReturn(this, (Drop.__proto__ || Object.getPrototypeOf(Drop)).call(this));

		_this.$scope = $scope;
		_this.element = $element[0];
		_this.listener = new __WEBPACK_IMPORTED_MODULE_1__grid_core_infrastructure__["d" /* EventListener */](_this, _this.element);
		return _this;
	}

	_createClass(Drop, [{
		key: 'onInit',
		value: function onInit() {
			this.element.classList.add(__WEBPACK_IMPORTED_MODULE_4__grid_core_definition__["a" /* GRID_PREFIX */] + '-can-drop');
			this.listener.on('dragenter', this.enter);
			this.listener.on('dragover', this.over);
			this.listener.on('dragleave', this.leave);
			this.listener.on('drop', this.drop);
		}
	}, {
		key: 'onDestroy',
		value: function onDestroy() {
			this.element.classList.remove(__WEBPACK_IMPORTED_MODULE_4__grid_core_definition__["a" /* GRID_PREFIX */] + '-can-drop');
			this.listener.off();
		}
	}, {
		key: 'drop',
		value: function drop(e) {
			var _this2 = this;

			e.stopPropagation();

			this.element.classList.remove(__WEBPACK_IMPORTED_MODULE_4__grid_core_definition__["a" /* GRID_PREFIX */] + '-dragover');
			var event = this.event(e.dataTransfer);
			if (this.canDrop(event)) {
				this.$scope.$evalAsync(function () {
					return _this2.onDrop(event);
				});
			}

			return false;
		}
	}, {
		key: 'enter',
		value: function enter(e) {
			e.preventDefault();

			this.element.classList.add(__WEBPACK_IMPORTED_MODULE_4__grid_core_definition__["a" /* GRID_PREFIX */] + '-dragover');
			e.dataTransfer.dropEffect = this.effect || 'move';
			return false;
		}
	}, {
		key: 'over',
		value: function over(e) {
			e.preventDefault();

			var effect = this.effect || 'move';
			if (this.element.classList.contains(__WEBPACK_IMPORTED_MODULE_4__grid_core_definition__["a" /* GRID_PREFIX */] + '-drag') || this.canDrop(this.event()) === false) {
				effect = 'none';
			}

			e.dataTransfer.dropEffect = effect;
			return false;
		}
	}, {
		key: 'leave',
		value: function leave() {
			this.element.classList.remove(__WEBPACK_IMPORTED_MODULE_4__grid_core_definition__["a" /* GRID_PREFIX */] + '-dragover');
		}
	}, {
		key: 'event',
		value: function event(e) {
			var target = this.transfer();
			var source = arguments.length ? __WEBPACK_IMPORTED_MODULE_2__drag_service__["a" /* default */].decode(e.getData(__WEBPACK_IMPORTED_MODULE_2__drag_service__["a" /* default */].mimeType)) : __WEBPACK_IMPORTED_MODULE_2__drag_service__["a" /* default */].transfer;

			return {
				$event: {
					source: source,
					target: target
				}
			};
		}
	}]);

	return Drop;
}(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__grid_view_directives_directive__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_3__grid_view_definition__["i" /* DROP_NAME */]));

Drop.$inject = ['$scope', '$element'];

/* harmony default export */ __webpack_exports__["a"] = ({
	restrict: 'A',
	bindToController: {
		'transfer': '&' + __WEBPACK_IMPORTED_MODULE_3__grid_view_definition__["i" /* DROP_NAME */],
		'onDrop': '&' + __WEBPACK_IMPORTED_MODULE_3__grid_view_definition__["O" /* ON_DROP_NAME */],
		'canDrop': '&' + __WEBPACK_IMPORTED_MODULE_3__grid_view_definition__["P" /* CAN_DROP_NAME */],
		'effect': '@' + __WEBPACK_IMPORTED_MODULE_3__grid_view_definition__["Q" /* DROP_EFFECT_NAME */]
	},
	controllerAs: '$drop',
	controller: Drop,
	require: Drop.require,
	link: Drop.link
});

/***/ }),
/* 355 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid_view_directives_directive__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid_view_definition__ = __webpack_require__(2);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var FootCore = function (_Directive) {
	_inherits(FootCore, _Directive);

	function FootCore($scope, $element) {
		_classCallCheck(this, FootCore);

		// this.$scope should be set cause it used by box.js
		var _this = _possibleConstructorReturn(this, (FootCore.__proto__ || Object.getPrototypeOf(FootCore)).call(this));

		_this.$scope = $scope;
		_this.element = $element[0];
		Object.defineProperty($scope, '$view', { get: function get() {
				return _this.view;
			} });
		return _this;
	}

	return FootCore;
}(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__grid_view_directives_directive__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__grid_view_definition__["J" /* FOOT_CORE_NAME */], { view: '^^' + __WEBPACK_IMPORTED_MODULE_1__grid_view_definition__["f" /* VIEW_CORE_NAME */] }));

FootCore.$inject = ['$scope', '$element'];

/* harmony default export */ __webpack_exports__["a"] = ({
	restrict: 'A',
	bindToController: true,
	controllerAs: '$foot',
	controller: FootCore,
	require: FootCore.require,
	link: FootCore.link,
	scope: true
});

/***/ }),
/* 356 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_component__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid_view_definition__ = __webpack_require__(2);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Head = function (_ModelComponent) {
	_inherits(Head, _ModelComponent);

	function Head() {
		_classCallCheck(this, Head);

		return _possibleConstructorReturn(this, (Head.__proto__ || Object.getPrototypeOf(Head)).call(this, 'foot'));
	}

	return Head;
}(__WEBPACK_IMPORTED_MODULE_0__model_component__["a" /* default */]);

Head.$inject = [];

/* harmony default export */ __webpack_exports__["a"] = ({
	require: {
		root: '^^' + __WEBPACK_IMPORTED_MODULE_1__grid_view_definition__["e" /* GRID_NAME */]
	},
	controller: Head,
	bindings: {}
});

/***/ }),
/* 357 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid_view_directives_directive__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cell_cell_build__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grid_view_definition__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__grid_core_definition__ = __webpack_require__(18);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var TfCore = function (_Directive) {
	_inherits(TfCore, _Directive);

	function TfCore($scope, $element) {
		_classCallCheck(this, TfCore);

		var _this = _possibleConstructorReturn(this, (TfCore.__proto__ || Object.getPrototypeOf(TfCore)).call(this));

		_this.$element = $element;
		_this.$scope = $scope;
		return _this;
	}

	_createClass(TfCore, [{
		key: 'onInit',
		value: function onInit() {
			var column = this.column;
			var element = this.$element[0];

			element.classList.add(__WEBPACK_IMPORTED_MODULE_3__grid_core_definition__["a" /* GRID_PREFIX */] + '-' + column.key);
			element.classList.add(__WEBPACK_IMPORTED_MODULE_3__grid_core_definition__["a" /* GRID_PREFIX */] + '-' + column.type);
			if (column.hasOwnProperty('editor')) {
				element.classList.add(__WEBPACK_IMPORTED_MODULE_3__grid_core_definition__["a" /* GRID_PREFIX */] + '-' + column.editor);
			}

			var model = this.view.model;
			var cache = model.foot().cache;
			var rowIndex = this.rowIndex;
			var key = rowIndex > 0 ? column.key + rowIndex : column.key;
			var link = cache.find(key);
			if (!link) {
				var build = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__cell_cell_build__["a" /* default */])(this.view.template);
				link = build('foot', this.view.model, this.column);
				cache.set(key, link);
			}

			link(this.$element, this.$scope);
		}
	}, {
		key: 'value',
		get: function get() {
			var column = this.column;
			return this.view.foot.value(column);
		}
	}, {
		key: 'rowIndex',
		get: function get() {
			return this.$scope.$parent.$index;
		}
	}, {
		key: 'column',
		get: function get() {
			return this.$scope.$column.model;
		}
	}]);

	return TfCore;
}(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__grid_view_directives_directive__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_2__grid_view_definition__["G" /* TF_CORE_NAME */], { view: '^^' + __WEBPACK_IMPORTED_MODULE_2__grid_view_definition__["f" /* VIEW_CORE_NAME */] }));

TfCore.$inject = ['$scope', '$element'];

/* harmony default export */ __webpack_exports__["a"] = ({
	restrict: 'A',
	bindToController: true,
	controllerAs: '$cell',
	controller: TfCore,
	require: TfCore.require,
	link: TfCore.link
});

/***/ }),
/* 358 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid_view_definition__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grid_core_definition__ = __webpack_require__(18);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var BoxCore = function (_Component) {
	_inherits(BoxCore, _Component);

	function BoxCore($element, theme) {
		_classCallCheck(this, BoxCore);

		var _this = _possibleConstructorReturn(this, (BoxCore.__proto__ || Object.getPrototypeOf(BoxCore)).call(this));

		_this.element = $element[0];
		_this.theme = theme;
		return _this;
	}

	_createClass(BoxCore, [{
		key: 'onInit',
		value: function onInit() {
			var _this2 = this;

			this.initTheme();

			var model = this.model;
			model.dragChanged.watch(function (e) {
				if (e.hasChanges('isActive')) {
					if (model.drag().isActive) {
						_this2.element.classList.add(__WEBPACK_IMPORTED_MODULE_2__grid_core_definition__["a" /* GRID_PREFIX */] + '-drag');
					} else {
						_this2.element.classList.remove(__WEBPACK_IMPORTED_MODULE_2__grid_core_definition__["a" /* GRID_PREFIX */] + '-drag');
					}
				}
			});
		}
	}, {
		key: 'initTheme',
		value: function initTheme() {
			var _this3 = this;

			var element = this.element;

			element.classList.add(__WEBPACK_IMPORTED_MODULE_2__grid_core_definition__["a" /* GRID_PREFIX */]);
			this.theme.changed.watch(function (e) {
				if (e) {
					element.classList.remove(__WEBPACK_IMPORTED_MODULE_2__grid_core_definition__["a" /* GRID_PREFIX */] + '-theme-' + e.oldValue);
				}

				element.classList.add(__WEBPACK_IMPORTED_MODULE_2__grid_core_definition__["a" /* GRID_PREFIX */] + '-theme-' + _this3.theme.name);
			});
		}
	}, {
		key: 'model',
		get: function get() {
			return this._model || this.root.model;
		}
	}]);

	return BoxCore;
}(__WEBPACK_IMPORTED_MODULE_0__component__["a" /* default */]);

BoxCore.$inject = ['$element', 'qgridTheme'];

/* harmony default export */ __webpack_exports__["a"] = ({
	controller: BoxCore,
	controllerAs: '$box',
	require: {
		'root': '^^?' + __WEBPACK_IMPORTED_MODULE_1__grid_view_definition__["e" /* GRID_NAME */]
	},
	bindings: {
		'_model': '<model'
	}
});

/***/ }),
/* 359 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_component__ = __webpack_require__(364);
/* unused harmony export Grid */
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Grid = function (_RootComponent) {
	_inherits(Grid, _RootComponent);

	function Grid($element, $transclude) {
		_classCallCheck(this, Grid);

		var _this = _possibleConstructorReturn(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).call(this, 'data', 'selection', 'sort', 'group', 'pivot', 'edit'));

		_this.$element = $element;
		_this.$transclude = $transclude;
		return _this;
	}

	_createClass(Grid, [{
		key: 'onInit',
		value: function onInit() {
			var _this2 = this;

			this.compile();

			this.model.viewChanged.watch(function (e) {
				if (e.hasChanges('columns')) {
					_this2.invalidateVisibility();
				}
			});
		}
	}, {
		key: 'compile',
		value: function compile() {
			var _this3 = this;

			var template = null;
			var templateScope = null;

			this.$transclude(function (clone, scope) {
				template = clone;
				templateScope = scope;

				_this3.$element.append(clone);
			});

			template.remove();
			templateScope.$destroy();
		}
	}, {
		key: 'invalidateVisibility',
		value: function invalidateVisibility() {
			var columns = this.model.data().columns;
			var visibility = this.model.visibility;
			visibility({
				pin: {
					left: columns.some(function (c) {
						return c.pin === 'left';
					}),
					right: columns.some(function (c) {
						return c.pin === 'right';
					})
				}
			});
		}
	}, {
		key: 'visibility',
		get: function get() {
			// TODO: get rid of that
			return this.model.visibility();
		}
	}]);

	return Grid;
}(__WEBPACK_IMPORTED_MODULE_0__root_component__["a" /* default */]);

Grid.$inject = ['$element', '$transclude'];

/**
 * By convention all binding should be named in camelCase like: modelname + [P]ropertyname
 */
/* harmony default export */ __webpack_exports__["a"] = ({
	transclude: true,
	templateUrl: 'qgrid.grid.tpl.html',
	controller: Grid,
	controllerAs: '$grid',
	bindings: {
		model: '<',
		dataRows: '<rows',
		dataColumns: '<columns',
		dataPipe: '<pipe',
		selectionItems: '<selection',
		selectionMode: '@',
		selectionUnit: '@',
		selectionKey: '<',
		onSelectionChanged: '&',
		groupBy: '<',
		pivotBy: '<',
		sortBy: '<',
		sortMode: '@',
		editMode: '@',
		editEnter: '<',
		editCommit: '<',
		editCancel: '<',
		editReset: '<'
	}
});

/***/ }),
/* 360 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid_view_directives_directive__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid_view_definition__ = __webpack_require__(2);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var HeadCore = function (_Directive) {
	_inherits(HeadCore, _Directive);

	function HeadCore($scope) {
		_classCallCheck(this, HeadCore);

		// this.$scope should be set cause it used by box.js
		var _this = _possibleConstructorReturn(this, (HeadCore.__proto__ || Object.getPrototypeOf(HeadCore)).call(this));

		_this.$scope = $scope;
		Object.defineProperty($scope, '$view', { get: function get() {
				return _this.view;
			} });
		return _this;
	}

	return HeadCore;
}(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__grid_view_directives_directive__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__grid_view_definition__["H" /* HEAD_CORE_NAME */], { view: '^^' + __WEBPACK_IMPORTED_MODULE_1__grid_view_definition__["f" /* VIEW_CORE_NAME */] }));

HeadCore.$inject = ['$scope'];

/* harmony default export */ __webpack_exports__["a"] = ({
	restrict: 'A',
	bindToController: {},
	controllerAs: '$head',
	controller: HeadCore,
	require: HeadCore.require,
	link: HeadCore.link,
	scope: true
});

/***/ }),
/* 361 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_component__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid_view_definition__ = __webpack_require__(2);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Head = function (_ModelComponent) {
	_inherits(Head, _ModelComponent);

	function Head() {
		_classCallCheck(this, Head);

		return _possibleConstructorReturn(this, (Head.__proto__ || Object.getPrototypeOf(Head)).call(this, 'head'));
	}

	return Head;
}(__WEBPACK_IMPORTED_MODULE_0__model_component__["a" /* default */]);

Head.$inject = [];

/* harmony default export */ __webpack_exports__["a"] = ({
	require: {
		root: '^^' + __WEBPACK_IMPORTED_MODULE_1__grid_view_definition__["e" /* GRID_NAME */]
	},
	controller: Head,
	bindings: {}
});

/***/ }),
/* 362 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid_view_directives_directive__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cell_cell_build__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grid_view_definition__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__grid_core_definition__ = __webpack_require__(18);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var ThCore = function (_Directive) {
	_inherits(ThCore, _Directive);

	function ThCore($scope, $element, $attrs) {
		_classCallCheck(this, ThCore);

		var _this = _possibleConstructorReturn(this, (ThCore.__proto__ || Object.getPrototypeOf(ThCore)).call(this));

		_this.$element = $element;
		_this.$scope = $scope;
		_this.$attrs = $attrs;
		return _this;
	}

	_createClass(ThCore, [{
		key: 'onInit',
		value: function onInit() {
			var column = this.column;
			var element = this.$element[0];

			element.classList.add(__WEBPACK_IMPORTED_MODULE_3__grid_core_definition__["a" /* GRID_PREFIX */] + '-' + column.key);
			element.classList.add(__WEBPACK_IMPORTED_MODULE_3__grid_core_definition__["a" /* GRID_PREFIX */] + '-' + column.type);
			if (column.hasOwnProperty('editor')) {
				element.classList.add(__WEBPACK_IMPORTED_MODULE_3__grid_core_definition__["a" /* GRID_PREFIX */] + '-' + column.editor);
			}

			if (this.$attrs[__WEBPACK_IMPORTED_MODULE_2__grid_view_definition__["g" /* TH_CORE_NAME */]] !== 'body') {
				var model = this.view.model;
				var cache = model.head().cache;
				var link = cache.find(column.key);
				if (!link) {
					var build = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__cell_cell_build__["a" /* default */])(this.view.template);
					link = build('head', model, this.column);
					cache.set(column.key, link);
				}

				link(this.$element, this.$scope);
			}
		}
	}, {
		key: 'column',
		get: function get() {
			return this.$scope.$column.model;
		}
	}]);

	return ThCore;
}(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__grid_view_directives_directive__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_2__grid_view_definition__["g" /* TH_CORE_NAME */], { view: '^^' + __WEBPACK_IMPORTED_MODULE_2__grid_view_definition__["f" /* VIEW_CORE_NAME */] }));

ThCore.$inject = ['$scope', '$element', '$attrs'];

/* harmony default export */ __webpack_exports__["a"] = ({
	restrict: 'A',
	bindToController: true,
	controllerAs: '$cell',
	controller: ThCore,
	require: ThCore.require,
	link: ThCore.link
});

/***/ }),
/* 363 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid_view_definition__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grid_core_template__ = __webpack_require__(3);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_2__grid_core_template__["a" /* TemplatePath */].register(__WEBPACK_IMPORTED_MODULE_1__grid_view_definition__["z" /* LAYER_NAME */], function (template) {
	return {
		model: 'layer',
		resource: template.for
	};
});

var Layer = function (_Component) {
	_inherits(Layer, _Component);

	function Layer() {
		_classCallCheck(this, Layer);

		return _possibleConstructorReturn(this, (Layer.__proto__ || Object.getPrototypeOf(Layer)).call(this));
	}

	_createClass(Layer, [{
		key: 'onInit',
		value: function onInit() {}
	}]);

	return Layer;
}(__WEBPACK_IMPORTED_MODULE_0__component__["a" /* default */]);

Layer.$inject = [];

/* harmony default export */ __webpack_exports__["a"] = ({
	require: {
		root: '^^' + __WEBPACK_IMPORTED_MODULE_1__grid_view_definition__["e" /* GRID_NAME */]
	},
	controller: Layer
});

/***/ }),
/* 364 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid_core_infrastructure__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid_core_services_utility__ = __webpack_require__(1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var RootComponent = function () {
	function RootComponent() {
		for (var _len = arguments.length, names = Array(_len), _key = 0; _key < _len; _key++) {
			names[_key] = arguments[_key];
		}

		_classCallCheck(this, RootComponent);

		var self = this;
		var binder = new __WEBPACK_IMPORTED_MODULE_0__grid_core_infrastructure__["f" /* ModelBinder */](self);
		var commit = __WEBPACK_IMPORTED_MODULE_1__grid_core_services_utility__["b" /* noop */];

		function setup() {
			var run = true;
			if (!self.model) {
				self.model = new __WEBPACK_IMPORTED_MODULE_0__grid_core_infrastructure__["a" /* Model */]();
				run = false;
			}

			return binder.bind(self.model, names, run);
		}

		self.modelChanged = new __WEBPACK_IMPORTED_MODULE_0__grid_core_infrastructure__["b" /* Event */]();

		self.$onChanges = function (e) {
			if (e.hasOwnProperty('model')) {
				commit = setup();
				commit();

				self.modelChanged.emit(self.model);
				self.onInit();
				return;
			}

			commit();
		};

		self.$onDestroy = function () {
			binder.bind(null);
			self.onDestroy();
		};
	}

	_createClass(RootComponent, [{
		key: 'onInit',
		value: function onInit() {}
	}, {
		key: 'onDestroy',
		value: function onDestroy() {}
	}]);

	return RootComponent;
}();

/* harmony default export */ __webpack_exports__["a"] = (RootComponent);

/***/ }),
/* 365 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid_view_directives_directive__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid_view_definition__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var TrCore = function (_Directive) {
	_inherits(TrCore, _Directive);

	function TrCore($scope, $element) {
		_classCallCheck(this, TrCore);

		var _this = _possibleConstructorReturn(this, (TrCore.__proto__ || Object.getPrototypeOf(TrCore)).call(this));

		_this.$scope = $scope;
		_this.element = $element[0];
		return _this;
	}

	_createClass(TrCore, [{
		key: 'onInit',
		value: function onInit() {
			this.view.style.monitor.row.add(this.element);
		}
	}, {
		key: 'onDestroy',
		value: function onDestroy() {
			this.view.style.monitor.row.remove(this.element);
		}
	}]);

	return TrCore;
}(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__grid_view_directives_directive__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__grid_view_definition__["E" /* TR_CORE_NAME */], { view: '^^' + __WEBPACK_IMPORTED_MODULE_1__grid_view_definition__["f" /* VIEW_CORE_NAME */] }));

TrCore.$inject = ['$scope', '$element'];

/* harmony default export */ __webpack_exports__["a"] = ({
	restrict: 'A',
	bindToController: true,
	controllerAs: '$tr',
	controller: TrCore,
	require: TrCore.require,
	link: TrCore.link,
	scope: false
});

/***/ }),
/* 366 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid_view_directives_directive__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid_core_infrastructure__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template_scope__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__grid_core_template__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__grid_core_resource__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__grid_core_services_utility__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__grid_view_definition__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var Template = function (_Directive) {
	_inherits(Template, _Directive);

	function Template($scope, $element, $attrs) {
		_classCallCheck(this, Template);

		var _this = _possibleConstructorReturn(this, (Template.__proto__ || Object.getPrototypeOf(Template)).call(this));

		_this.$scope = $scope;
		_this.$element = $element;
		_this.$attrs = $attrs;
		return _this;
	}

	_createClass(Template, [{
		key: 'onInit',
		value: function onInit() {
			var path = __WEBPACK_IMPORTED_MODULE_3__grid_core_template__["a" /* TemplatePath */].get(this);
			if (!this.root.model.hasOwnProperty(path.model)) {
				throw new __WEBPACK_IMPORTED_MODULE_1__grid_core_infrastructure__["c" /* AppError */]('template', 'Appropriate model for "' + path.model + '" is not found');
			}

			var model = this.root.model[path.model];
			var state = model();
			if (!state.hasOwnProperty('resource')) {
				throw new __WEBPACK_IMPORTED_MODULE_1__grid_core_infrastructure__["c" /* AppError */]('template', 'Can\'t use "' + path.model + '" model, resource property is missed');
			}

			var content = this.$element.html();
			var contentScope = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__template_scope__["a" /* default */])(this.$attrs.let, this.let);
			var createResource = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__grid_core_resource__["b" /* factory */])(state.resource, path.resource);
			var newResource = createResource(content, contentScope);
			model({ resource: newResource });
		}
	}]);

	return Template;
}(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__grid_view_directives_directive__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_6__grid_view_definition__["C" /* TEMPLATE_NAME */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__grid_core_services_utility__["i" /* merge */])({ root: '^^' + __WEBPACK_IMPORTED_MODULE_6__grid_view_definition__["e" /* GRID_NAME */] }, __WEBPACK_IMPORTED_MODULE_3__grid_core_template__["a" /* TemplatePath */].require)));

Template.$inject = ['$scope', '$element', '$attrs'];

/* harmony default export */ __webpack_exports__["a"] = ({
	terminal: true,
	restrict: 'E',
	require: Template.require,
	link: Template.link,
	controller: Template,
	controllerAs: '$template',
	bindToController: {
		for: '@',
		let: '<'
	}
});

/***/ }),
/* 367 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid_core_services_utility__ = __webpack_require__(1);
/* harmony export (immutable) */ __webpack_exports__["a"] = create;


function create(key, value) {
	var env = {};
	if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__grid_core_services_utility__["d" /* isUndefined */])(key)) {
		if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__grid_core_services_utility__["n" /* isArray */])(value)) {
			var keys = parse(key);
			var length = keys.length;
			while (length--) {
				env[keys[length]] = value[length];
			}
		} else {
			env[key] = value;
		}
	}

	return env;
}

function parse(key) {
	var result = [];
	var regex = /[^\[\],]+/gi;
	var match = void 0;
	while (match = regex.exec(key)) {
		// eslint-disable-line no-cond-assign
		result.push(match[0].trim());
	}
	return result;
}

/***/ }),
/* 368 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__template_template_link__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grid_view_definition__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var ToolbarCore = function (_Component) {
	_inherits(ToolbarCore, _Component);

	function ToolbarCore($scope, $element, $compile, $templateCache) {
		_classCallCheck(this, ToolbarCore);

		var _this = _possibleConstructorReturn(this, (ToolbarCore.__proto__ || Object.getPrototypeOf(ToolbarCore)).call(this));

		_this.$element = $element;
		_this.$scope = $scope;
		_this.template = new __WEBPACK_IMPORTED_MODULE_1__template_template_link__["a" /* default */]($compile, $templateCache);
		return _this;
	}

	_createClass(ToolbarCore, [{
		key: 'onInit',
		value: function onInit() {
			var target = this.position;
			var state = this.root.model.toolbar();
			var link = this.template.link('qgrid.toolbar.' + target + '.tpl.html', state.resource, [target, '$default']);

			link(this.$element, this.$scope);
		}
	}]);

	return ToolbarCore;
}(__WEBPACK_IMPORTED_MODULE_0__component__["a" /* default */]);

ToolbarCore.$inject = ['$scope', '$element', '$compile', '$templateCache', '$attrs'];

/* harmony default export */ __webpack_exports__["a"] = ({
	controllerAs: '$toolbar',
	controller: ToolbarCore,
	require: {
		root: '^^' + __WEBPACK_IMPORTED_MODULE_2__grid_view_definition__["e" /* GRID_NAME */]
	},
	bindings: {
		position: '@'
	}
});

/***/ }),
/* 369 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid_view_definition__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grid_core_template__ = __webpack_require__(3);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_2__grid_core_template__["a" /* TemplatePath */].register(__WEBPACK_IMPORTED_MODULE_1__grid_view_definition__["A" /* TOOLBAR_NAME */], function (template) {
	return {
		model: 'toolbar',
		resource: template.for
	};
});

var Toolbar = function (_Component) {
	_inherits(Toolbar, _Component);

	function Toolbar() {
		_classCallCheck(this, Toolbar);

		return _possibleConstructorReturn(this, (Toolbar.__proto__ || Object.getPrototypeOf(Toolbar)).call(this));
	}

	_createClass(Toolbar, [{
		key: 'onInit',
		value: function onInit() {}
	}]);

	return Toolbar;
}(__WEBPACK_IMPORTED_MODULE_0__component__["a" /* default */]);

Toolbar.$inject = [];

/* harmony default export */ __webpack_exports__["a"] = ({
	require: {
		root: '^^' + __WEBPACK_IMPORTED_MODULE_1__grid_view_definition__["e" /* GRID_NAME */]
	},
	controller: Toolbar
});

/***/ }),
/* 370 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid_view_services_dom_table__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grid_core_body__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__grid_core_head__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__grid_core_foot__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__grid_core_layout__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__grid_core_group__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__grid_core_pivot__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__grid_core_navigation__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__grid_core_highlight__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__grid_core_sort__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__grid_core_filter__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__grid_core_edit__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__grid_core_selection__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__grid_core_pagination__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__grid_core_table__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__grid_core_style__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__grid_core_column__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__grid_core_scroll__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__grid_view_definition__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__grid_core_services_utility__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__grid_core_pipe_units__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__grid_core_infrastructure__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__template_template_link__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__grid_view_services__ = __webpack_require__(389);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



























var ViewCore = function (_Component) {
	_inherits(ViewCore, _Component);

	function ViewCore($rootScope, $scope, $element, $document, $timeout, $compile, $templateCache, grid, vscroll) {
		_classCallCheck(this, ViewCore);

		var _this = _possibleConstructorReturn(this, (ViewCore.__proto__ || Object.getPrototypeOf(ViewCore)).call(this));

		_this.$rootScope = $rootScope;
		_this.$scope = $scope;
		_this.element = $element[0];
		_this.$timeout = $timeout;
		_this.$postLink = _this.build;
		_this.serviceFactory = grid.service.bind(grid);
		_this.template = new __WEBPACK_IMPORTED_MODULE_23__template_template_link__["a" /* default */]($compile, $templateCache);
		_this.vscroll = vscroll;

		_this.markup = {
			document: $document[0]
		};
		return _this;
	}

	_createClass(ViewCore, [{
		key: 'build',
		value: function build() {
			var _this2 = this;

			var model = this.model;
			this.pin = this.pin || null;
			var table = new __WEBPACK_IMPORTED_MODULE_1__grid_view_services_dom_table__["a" /* default */](model, this.markup, this.template);
			table.pin = this.pin;

			var gridService = this.serviceFactory(model);

			var commandManager = new __WEBPACK_IMPORTED_MODULE_24__grid_view_services__["a" /* CommandManager */](this.applyFactory('async'));
			var vscroll = new __WEBPACK_IMPORTED_MODULE_24__grid_view_services__["b" /* Vscroll */](this.vscroll, this.applyFactory('async'));

			this.style = new __WEBPACK_IMPORTED_MODULE_16__grid_core_style__["a" /* StyleView */](model, table);
			this.table = new __WEBPACK_IMPORTED_MODULE_15__grid_core_table__["a" /* TableView */](model);
			this.head = new __WEBPACK_IMPORTED_MODULE_3__grid_core_head__["a" /* HeadView */](model, table, __WEBPACK_IMPORTED_MODULE_19__grid_view_definition__["g" /* TH_CORE_NAME */]);
			this.body = new __WEBPACK_IMPORTED_MODULE_2__grid_core_body__["a" /* BodyView */](model, table);
			this.foot = new __WEBPACK_IMPORTED_MODULE_4__grid_core_foot__["a" /* FootView */](model, table);
			this.columns = new __WEBPACK_IMPORTED_MODULE_17__grid_core_column__["a" /* ColumnView */](model, gridService);
			this.layout = new __WEBPACK_IMPORTED_MODULE_5__grid_core_layout__["a" /* LayoutView */](model, table, gridService);
			this.selection = new __WEBPACK_IMPORTED_MODULE_13__grid_core_selection__["a" /* SelectionView */](model, table, commandManager);
			this.group = new __WEBPACK_IMPORTED_MODULE_6__grid_core_group__["b" /* GroupView */](model);
			this.pivot = new __WEBPACK_IMPORTED_MODULE_7__grid_core_pivot__["b" /* PivotView */](model);
			this.highlight = new __WEBPACK_IMPORTED_MODULE_9__grid_core_highlight__["a" /* HighlightView */](model, table, this.$timeout);
			this.sort = new __WEBPACK_IMPORTED_MODULE_10__grid_core_sort__["a" /* SortView */](model);
			this.filter = new __WEBPACK_IMPORTED_MODULE_11__grid_core_filter__["a" /* FilterView */](model);
			this.edit = new __WEBPACK_IMPORTED_MODULE_12__grid_core_edit__["a" /* EditView */](model, table, commandManager);
			this.nav = new __WEBPACK_IMPORTED_MODULE_8__grid_core_navigation__["a" /* NavigationView */](model, table, commandManager);
			this.pagination = new __WEBPACK_IMPORTED_MODULE_14__grid_core_pagination__["a" /* PaginationView */](model);
			this.scroll = new __WEBPACK_IMPORTED_MODULE_18__grid_core_scroll__["a" /* ScrollView */](model, table, vscroll, gridService);

			// TODO: how we can avoid that?
			this.$scope.$watch(this.style.invalidate.bind(this.style));

			model.selectionChanged.watch(function (e) {
				if (e.hasChanges('entries')) {
					_this2.root.onSelectionChanged({
						$event: {
							state: model.selection(),
							changes: e.changes
						}
					});
				}

				if (e.hasChanges('unit') || e.hasChanges('mode')) {
					gridService.invalidate('selection', e.changes, __WEBPACK_IMPORTED_MODULE_21__grid_core_pipe_units__["a" /* PipeUnit */].column);
				}
			});

			var triggers = model.data().triggers;

			// TODO: think about invalidation queue
			var needInvalidate = true;
			Object.keys(triggers).forEach(function (name) {
				return model[name + 'Changed'].watch(function (e) {
					var changes = Object.keys(e.changes);
					if (e.tag.behavior !== 'core' && triggers[name].find(function (key) {
						return changes.indexOf(key) >= 0;
					})) {
						needInvalidate = false;
						gridService.invalidate(name, e.changes);
					}
				});
			});

			if (needInvalidate) {
				gridService.invalidate('grid');
			}
		}
	}, {
		key: 'applyFactory',
		value: function applyFactory(mode) {
			var _this3 = this;

			return function (f, timeout) {
				if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_20__grid_core_services_utility__["d" /* isUndefined */])(timeout)) {
					switch (mode) {
						case 'async':
							{
								return _this3.$scope.$applyAsync(f);
							}
						case 'sync':
							{
								var phase = _this3.$rootScope.$$phase; // eslint-disable-line angular/no-private-call
								if (phase == '$apply' || phase == '$digest') {
									return f();
								}
								return _this3.$scope.$apply(f);
							}
						default:
							throw new __WEBPACK_IMPORTED_MODULE_22__grid_core_infrastructure__["c" /* AppError */]('view.core', 'Invalid apply mode \'' + mode + '\'');
					}
				}

				return _this3.$timeout(f, timeout);
			};
		}
	}, {
		key: 'onDestroy',
		value: function onDestroy() {
			this.layout.destroy();
			this.nav.destroy();
			this.selection.destroy();
		}
	}, {
		key: 'templateUrl',
		value: function templateUrl(key) {
			return 'qgrid.' + key + '.tpl.html';
		}
	}, {
		key: 'model',
		get: function get() {
			return this.root.model;
		}
	}, {
		key: 'visibility',
		get: function get() {
			return this.model.visibility();
		}
	}, {
		key: 'rows',
		get: function get() {
			return this.model.data().rows;
		}
	}]);

	return ViewCore;
}(__WEBPACK_IMPORTED_MODULE_0__component__["a" /* default */]);

ViewCore.$inject = ['$rootScope', '$scope', '$element', '$document', '$timeout', '$compile', '$templateCache', 'qgrid', 'vscroll'];

/* harmony default export */ __webpack_exports__["a"] = ({
	controller: ViewCore,
	controllerAs: '$view',
	templateUrl: 'qgrid.view.tpl.html',
	require: {
		'root': '^^' + __WEBPACK_IMPORTED_MODULE_19__grid_view_definition__["e" /* GRID_NAME */]
	},
	bindings: {
		'pin': '@'
	}
});

/***/ }),
/* 371 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directive__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid_view_definition__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Animate = function (_Directive) {
	_inherits(Animate, _Directive);

	function Animate($element, $attrs, $animate) {
		_classCallCheck(this, Animate);

		var _this = _possibleConstructorReturn(this, (Animate.__proto__ || Object.getPrototypeOf(Animate)).call(this));

		_this.$element = $element;
		_this.$attrs = $attrs;
		_this.$animate = $animate;
		return _this;
	}

	_createClass(Animate, [{
		key: 'onInit',
		value: function onInit() {
			this.$animate.enabled(this.$element, this.$attrs[__WEBPACK_IMPORTED_MODULE_1__grid_view_definition__["p" /* ANIMATE_NAME */]] !== 'false');
		}
	}]);

	return Animate;
}(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__directive__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__grid_view_definition__["p" /* ANIMATE_NAME */]));

Animate.$inject = ['$element', '$attrs', '$animate'];

/* harmony default export */ __webpack_exports__["a"] = ({
	restrict: 'A',
	controller: Animate,
	require: Animate.require,
	link: Animate.link,
	scope: false
});

/***/ }),
/* 372 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directive__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid_view_definition__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grid_core_infrastructure__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var FileUpload = function (_Directive) {
	_inherits(FileUpload, _Directive);

	function FileUpload($scope, $element) {
		_classCallCheck(this, FileUpload);

		var _this = _possibleConstructorReturn(this, (FileUpload.__proto__ || Object.getPrototypeOf(FileUpload)).call(this));

		_this.$scope = $scope;
		_this.element = $element[0];

		_this.listener = new __WEBPACK_IMPORTED_MODULE_2__grid_core_infrastructure__["d" /* EventListener */](_this, _this.element);

		_this.reader = new FileReader();
		_this.reader.onloadend = function (e) {
			return _this.setDataUrl(e);
		};
		return _this;
	}

	_createClass(FileUpload, [{
		key: 'onInit',
		value: function onInit() {
			this.listener.on('change', this.upload);
			this.listener.on('click', this.onClick);
			this.listener.on('drop', this.upload);
		}
	}, {
		key: 'onDestroy',
		value: function onDestroy() {
			this.listener.off();
		}
	}, {
		key: 'onClick',
		value: function onClick() {
			this.file = null;
			this.label = null;
		}
	}, {
		key: 'upload',
		value: function upload(e) {
			if (!this.canUpload) {
				return;
			}
			var files = e.target.files;
			if (files.length > 1) {
				throw new __WEBPACK_IMPORTED_MODULE_2__grid_core_infrastructure__["c" /* AppError */]('file.upload', 'Multiple upload isn\'t able');
			}

			var file = files[0] || null;
			if (file) {
				this.reader.readAsDataURL(file);
				this.label = file.name;
			}
		}
	}, {
		key: 'setDataUrl',
		value: function setDataUrl(e) {
			var _this2 = this;

			if (e.target.readyState == FileReader.DONE) {
				this.$scope.$applyAsync(function () {
					return _this2.file = e.target.result;
				});
			}
		}
	}]);

	return FileUpload;
}(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__directive__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__grid_view_definition__["m" /* FILE_UPLOAD_NAME */]));

FileUpload.$inject = ['$scope', '$element'];

/* harmony default export */ __webpack_exports__["a"] = ({
	restrict: 'A',
	bindToController: {
		'file': '=' + __WEBPACK_IMPORTED_MODULE_1__grid_view_definition__["m" /* FILE_UPLOAD_NAME */],
		'label': '=' + __WEBPACK_IMPORTED_MODULE_1__grid_view_definition__["M" /* FILE_UPLOAD_LABEL_NAME */],
		'canUpload': '&' + __WEBPACK_IMPORTED_MODULE_1__grid_view_definition__["N" /* CAN_UPLOAD_NAME */]
	},
	controllerAs: '$fileUpload',
	controller: FileUpload,
	require: FileUpload.require,
	link: FileUpload.link,
	scope: false
});

/***/ }),
/* 373 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directive__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid_view_definition__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Focus = function (_Directive) {
	_inherits(Focus, _Directive);

	function Focus($scope, $element, $attrs) {
		_classCallCheck(this, Focus);

		var _this = _possibleConstructorReturn(this, (Focus.__proto__ || Object.getPrototypeOf(Focus)).call(this));

		_this.$scope = $scope;
		_this.element = $element[0];
		_this.$attrs = $attrs;
		return _this;
	}

	_createClass(Focus, [{
		key: 'onInit',
		value: function onInit() {
			var _this2 = this;

			if (!this.$attrs.tabindex) {
				this.element.setAttribute('tabindex', -1);
			}
			this.$scope.$evalAsync(function () {
				return _this2.element.focus();
			});
		}
	}]);

	return Focus;
}(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__directive__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__grid_view_definition__["k" /* FOCUS_NAME */]));

Focus.$inject = ['$scope', '$element', '$attrs'];

/* harmony default export */ __webpack_exports__["a"] = ({
	restrict: 'A',
	bindToController: true,
	controllerAs: '$focus',
	controller: Focus,
	require: Focus.require,
	link: Focus.link,
	scope: false
});

/***/ }),
/* 374 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directive__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid_view_definition__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Indeterminate = function (_Directive) {
	_inherits(Indeterminate, _Directive);

	function Indeterminate($scope, $element, $attrs) {
		_classCallCheck(this, Indeterminate);

		var _this = _possibleConstructorReturn(this, (Indeterminate.__proto__ || Object.getPrototypeOf(Indeterminate)).call(this));

		_this.$scope = $scope;
		_this.$element = $element;
		_this.$attrs = $attrs;
		return _this;
	}

	_createClass(Indeterminate, [{
		key: 'onInit',
		value: function onInit() {
			var _this2 = this;

			this.$scope.$watch(this.$attrs[__WEBPACK_IMPORTED_MODULE_1__grid_view_definition__["j" /* INDETERMINATE_NAME */]], function (newVal) {
				_this2.$element[0].indeterminate = !!newVal;
			});
		}
	}]);

	return Indeterminate;
}(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__directive__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__grid_view_definition__["j" /* INDETERMINATE_NAME */]));

Indeterminate.$inject = ['$scope', '$element', '$attrs'];

/* harmony default export */ __webpack_exports__["a"] = ({
	restrict: 'A',
	controller: Indeterminate,
	require: Indeterminate.require,
	link: Indeterminate.link,
	scope: false
});

/***/ }),
/* 375 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directive__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid_view_definition__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Markup = function (_Directive) {
	_inherits(Markup, _Directive);

	function Markup($element) {
		_classCallCheck(this, Markup);

		var _this = _possibleConstructorReturn(this, (Markup.__proto__ || Object.getPrototypeOf(Markup)).call(this));

		_this.element = $element[0];
		return _this;
	}

	_createClass(Markup, [{
		key: 'onInit',
		value: function onInit() {
			this.view.markup[this.name] = this.element;
		}
	}, {
		key: 'onDestroy',
		value: function onDestroy() {
			delete this.view.markup[this.name];
		}
	}]);

	return Markup;
}(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__directive__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__grid_view_definition__["D" /* MARKUP_NAME */], { view: '^' + __WEBPACK_IMPORTED_MODULE_1__grid_view_definition__["f" /* VIEW_CORE_NAME */] }));

Markup.$inject = ['$element'];

/* harmony default export */ __webpack_exports__["a"] = ({
	restrict: 'A',
	bindToController: {
		'name': '@' + __WEBPACK_IMPORTED_MODULE_1__grid_view_definition__["D" /* MARKUP_NAME */]
	},
	controllerAs: '$resize',
	controller: Markup,
	require: Markup.require,
	link: Markup.link,
	scope: false
});

/***/ }),
/* 376 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directive__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid_view_definition__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Raise = function (_Directive) {
	_inherits(Raise, _Directive);

	function Raise($element, $attrs, $timeout) {
		_classCallCheck(this, Raise);

		var _this = _possibleConstructorReturn(this, (Raise.__proto__ || Object.getPrototypeOf(Raise)).call(this));

		_this.$element = $element;
		_this.$attrs = $attrs;
		_this.$timeout = $timeout;
		return _this;
	}

	_createClass(Raise, [{
		key: 'onLink',
		value: function onLink() {
			var _this2 = this;

			var eventType = this.$attrs[__WEBPACK_IMPORTED_MODULE_1__grid_view_definition__["n" /* RAISE_NAME */]];
			this.$timeout(function () {
				return _this2.$element.triggerHandler(eventType);
			});
		}
	}]);

	return Raise;
}(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__directive__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__grid_view_definition__["n" /* RAISE_NAME */]));

Raise.$inject = ['$element', '$attrs', '$timeout'];

/* harmony default export */ __webpack_exports__["a"] = ({
	restrict: 'A',
	bindToController: true,
	controllerAs: '$raise',
	controller: Raise,
	require: Raise.require,
	link: Raise.link,
	scope: false
});

/***/ }),
/* 377 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directive__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid_view_definition__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grid_core_definition__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__grid_core_infrastructure__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__grid_core_services_utility__ = __webpack_require__(1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Resize = function (_Directive) {
	_inherits(Resize, _Directive);

	function Resize($scope, $element, $document, $timeout) {
		_classCallCheck(this, Resize);

		var _this = _possibleConstructorReturn(this, (Resize.__proto__ || Object.getPrototypeOf(Resize)).call(this));

		_this.$scope = $scope;
		_this.$element = $element;
		_this.$document = $document;
		_this.$timeout = $timeout;
		_this.divider = angular.element('<div class="' + __WEBPACK_IMPORTED_MODULE_2__grid_core_definition__["a" /* GRID_PREFIX */] + '-divider"></div>');

		_this.listener = {
			divider: new __WEBPACK_IMPORTED_MODULE_3__grid_core_infrastructure__["d" /* EventListener */](_this, _this.divider[0]),
			document: new __WEBPACK_IMPORTED_MODULE_3__grid_core_infrastructure__["d" /* EventListener */](_this, _this.$document[0])
		};

		_this.context = {
			x: 0,
			width: 0
		};
		return _this;
	}

	_createClass(Resize, [{
		key: 'onInit',
		value: function onInit() {
			var _this2 = this;

			if (this.canResize(this.event())) {
				this.listener.divider.on('mousedown', this.dragStart);
				this.$timeout(function () {
					return _this2.$element.append(_this2.divider);
				}); // TODO: WTF?
			}
		}
	}, {
		key: 'onDestroy',
		value: function onDestroy() {
			this.listener.divider.off();
			this.listener.document.off();
		}
	}, {
		key: 'dragStart',
		value: function dragStart(e) {
			e.preventDefault();

			var context = this.context;
			context.width = this.$element[0].clientWidth;
			context.x = e.screenX;

			this.listener.document.on('mousemove', this.drag);
			this.listener.document.on('mouseup', this.dragEnd);

			var model = this.view.model;
			model.drag({ isActive: true });
		}
	}, {
		key: 'drag',
		value: function drag(e) {
			var model = this.view.model;
			var context = this.context;
			var layout = model.layout;
			var state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__grid_core_services_utility__["h" /* clone */])(layout()[this.path]);

			state[this.key] = { width: context.width + e.screenX - context.x };
			layout(_defineProperty({}, this.path, state));
		}
	}, {
		key: 'dragEnd',
		value: function dragEnd() {
			this.listener.document.off();

			var model = this.view.model;
			model.drag({ isActive: false });
		}
	}, {
		key: 'event',
		value: function event() {
			var source = this.transfer();
			return {
				$event: {
					source: source,
					target: null
				}
			};
		}
	}]);

	return Resize;
}(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__directive__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__grid_view_definition__["l" /* RESIZE_NAME */], { view: '^^' + __WEBPACK_IMPORTED_MODULE_1__grid_view_definition__["f" /* VIEW_CORE_NAME */] }));

Resize.$inject = ['$scope', '$element', '$document', '$timeout'];

/* harmony default export */ __webpack_exports__["a"] = ({
	restrict: 'A',
	bindToController: {
		'key': '<' + __WEBPACK_IMPORTED_MODULE_1__grid_view_definition__["l" /* RESIZE_NAME */],
		'path': '@' + __WEBPACK_IMPORTED_MODULE_1__grid_view_definition__["l" /* RESIZE_NAME */] + 'Path',
		'canResize': '&' + __WEBPACK_IMPORTED_MODULE_1__grid_view_definition__["e" /* GRID_NAME */] + 'CanResize',
		'transfer': '&' + __WEBPACK_IMPORTED_MODULE_1__grid_view_definition__["h" /* DRAG_NAME */]
	},
	controllerAs: '$resize',
	controller: Resize,
	require: Resize.require,
	link: Resize.link,
	scope: false
});

/***/ }),
/* 378 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid_view_definition__ = __webpack_require__(2);


/* harmony default export */ __webpack_exports__["a"] = (function (text, search) {
	if ((text || text === 0) && (search || search === 0)) {
		text = text.toString();
		search = search.toString();

		var contains = new RegExp(escapeRegexp(search), 'gi');
		if (contains.test(text)) {
			return text.replace(contains, function (s) {
				return '<span class="' + __WEBPACK_IMPORTED_MODULE_0__grid_view_definition__["L" /* GRID_PREFIX */] + '-highlight-part">' + htmlEncode(s) + '</span>';
			});
		}

		var contained = new RegExp(escapeRegexp(text), 'gi');
		if (contained.test(search)) {
			return '<span class="' + __WEBPACK_IMPORTED_MODULE_0__grid_view_definition__["L" /* GRID_PREFIX */] + '-highlight-part">' + htmlEncode(text) + '</span>';
		}
	}

	return htmlEncode(text);
});

function htmlEncode(s) {
	return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function escapeRegexp(text) {
	if (!text) return text;

	return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

/***/ }),
/* 379 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = range;
function range(count) {
	return new Array(count);
}

/***/ }),
/* 380 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_grid_grid__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_grid__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grid_core_template__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_head_head__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_foot_foot__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_column_column_list__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_column_column__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_toolbar_toolbar__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_dnd_drag__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_dnd_drop__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_layer_layer__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_cell_cell_value__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_grid_box_core__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_view_view_core__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_row_tr_core__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_body_td_core__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_head_th_core__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_foot_tf_core__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_head_head_core__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_body_body_core__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_foot_foot_core__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_toolbar_toolbar_core__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__directives_indeterminate__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__directives_focus__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__directives_resize__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__directives_markup__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__directives_file_upload__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__directives_raise__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__directives_animate__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_theme__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__filters_range__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__filters_highlight__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__definition__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_template_template__ = __webpack_require__(366);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return coreModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return layoutModule; });






































__webpack_require__(589); // TODO: make vscroll export

var coreModule = angular.module(__WEBPACK_IMPORTED_MODULE_32__definition__["a" /* MODULE_CORE_NAME */], []).directive(__WEBPACK_IMPORTED_MODULE_32__definition__["h" /* DRAG_NAME */], function () {
	return __WEBPACK_IMPORTED_MODULE_8__components_dnd_drag__["a" /* default */];
}).directive(__WEBPACK_IMPORTED_MODULE_32__definition__["i" /* DROP_NAME */], function () {
	return __WEBPACK_IMPORTED_MODULE_9__components_dnd_drop__["a" /* default */];
}).directive(__WEBPACK_IMPORTED_MODULE_32__definition__["j" /* INDETERMINATE_NAME */], function () {
	return __WEBPACK_IMPORTED_MODULE_22__directives_indeterminate__["a" /* default */];
}).directive(__WEBPACK_IMPORTED_MODULE_32__definition__["k" /* FOCUS_NAME */], function () {
	return __WEBPACK_IMPORTED_MODULE_23__directives_focus__["a" /* default */];
}).directive(__WEBPACK_IMPORTED_MODULE_32__definition__["l" /* RESIZE_NAME */], function () {
	return __WEBPACK_IMPORTED_MODULE_24__directives_resize__["a" /* default */];
}).directive(__WEBPACK_IMPORTED_MODULE_32__definition__["m" /* FILE_UPLOAD_NAME */], function () {
	return __WEBPACK_IMPORTED_MODULE_26__directives_file_upload__["a" /* default */];
}).directive(__WEBPACK_IMPORTED_MODULE_32__definition__["n" /* RAISE_NAME */], function () {
	return __WEBPACK_IMPORTED_MODULE_27__directives_raise__["a" /* default */];
}).directive(__WEBPACK_IMPORTED_MODULE_32__definition__["o" /* CELL_VALUE_NAME */], function () {
	return __WEBPACK_IMPORTED_MODULE_11__components_cell_cell_value__["a" /* default */];
}).directive(__WEBPACK_IMPORTED_MODULE_32__definition__["p" /* ANIMATE_NAME */], function () {
	return __WEBPACK_IMPORTED_MODULE_28__directives_animate__["a" /* default */];
}).provider(__WEBPACK_IMPORTED_MODULE_32__definition__["q" /* THEME_NAME */], function () {
	return new __WEBPACK_IMPORTED_MODULE_29__services_theme__["a" /* default */]();
}).service(__WEBPACK_IMPORTED_MODULE_32__definition__["r" /* TEMPLATE_PATH_NAME */], function () {
	return function () {
		return __WEBPACK_IMPORTED_MODULE_2__grid_core_template__["a" /* TemplatePath */];
	};
}).filter(__WEBPACK_IMPORTED_MODULE_32__definition__["s" /* RANGE_NAME */], function () {
	return __WEBPACK_IMPORTED_MODULE_30__filters_range__["a" /* default */];
}).filter(__WEBPACK_IMPORTED_MODULE_32__definition__["t" /* HIGHLIGHT_NAME */], function () {
	return __WEBPACK_IMPORTED_MODULE_31__filters_highlight__["a" /* default */];
}).config(['$compileProvider', function ($compileProvider) {
	return $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|file|data):/);
}]).name;

// For now should be the last in import list cause use TemplatePath.require
// that should be filled before importing this
// TODO: get rid of static require


var layoutModule = angular.module(__WEBPACK_IMPORTED_MODULE_32__definition__["u" /* MODULE_LAYOUT_NAME */], [coreModule]).component(__WEBPACK_IMPORTED_MODULE_32__definition__["e" /* GRID_NAME */], __WEBPACK_IMPORTED_MODULE_0__components_grid_grid__["a" /* default */]).component(__WEBPACK_IMPORTED_MODULE_32__definition__["d" /* BOX_CORE_NAME */], __WEBPACK_IMPORTED_MODULE_12__components_grid_box_core__["a" /* default */]).component(__WEBPACK_IMPORTED_MODULE_32__definition__["f" /* VIEW_CORE_NAME */], __WEBPACK_IMPORTED_MODULE_13__components_view_view_core__["a" /* default */]).component(__WEBPACK_IMPORTED_MODULE_32__definition__["v" /* HEAD_NAME */], __WEBPACK_IMPORTED_MODULE_3__components_head_head__["a" /* default */]).component(__WEBPACK_IMPORTED_MODULE_32__definition__["w" /* FOOT_NAME */], __WEBPACK_IMPORTED_MODULE_4__components_foot_foot__["a" /* default */]).component(__WEBPACK_IMPORTED_MODULE_32__definition__["x" /* COLUMN_LIST_NAME */], __WEBPACK_IMPORTED_MODULE_5__components_column_column_list__["a" /* default */]).component(__WEBPACK_IMPORTED_MODULE_32__definition__["y" /* COLUMN_NAME */], __WEBPACK_IMPORTED_MODULE_6__components_column_column__["a" /* default */]).component(__WEBPACK_IMPORTED_MODULE_32__definition__["z" /* LAYER_NAME */], __WEBPACK_IMPORTED_MODULE_10__components_layer_layer__["a" /* default */]).component(__WEBPACK_IMPORTED_MODULE_32__definition__["A" /* TOOLBAR_NAME */], __WEBPACK_IMPORTED_MODULE_7__components_toolbar_toolbar__["a" /* default */]).component(__WEBPACK_IMPORTED_MODULE_32__definition__["B" /* TOOLBAR_CORE_NAME */], __WEBPACK_IMPORTED_MODULE_21__components_toolbar_toolbar_core__["a" /* default */]).directive(__WEBPACK_IMPORTED_MODULE_32__definition__["C" /* TEMPLATE_NAME */], function () {
	return __WEBPACK_IMPORTED_MODULE_33__components_template_template__["a" /* default */];
}).directive(__WEBPACK_IMPORTED_MODULE_32__definition__["D" /* MARKUP_NAME */], function () {
	return __WEBPACK_IMPORTED_MODULE_25__directives_markup__["a" /* default */];
}).directive(__WEBPACK_IMPORTED_MODULE_32__definition__["E" /* TR_CORE_NAME */], function () {
	return __WEBPACK_IMPORTED_MODULE_14__components_row_tr_core__["a" /* default */];
}).directive(__WEBPACK_IMPORTED_MODULE_32__definition__["F" /* TD_CORE_NAME */], function () {
	return __WEBPACK_IMPORTED_MODULE_15__components_body_td_core__["a" /* default */];
}).directive(__WEBPACK_IMPORTED_MODULE_32__definition__["g" /* TH_CORE_NAME */], function () {
	return __WEBPACK_IMPORTED_MODULE_16__components_head_th_core__["a" /* default */];
}).directive(__WEBPACK_IMPORTED_MODULE_32__definition__["G" /* TF_CORE_NAME */], function () {
	return __WEBPACK_IMPORTED_MODULE_17__components_foot_tf_core__["a" /* default */];
}).directive(__WEBPACK_IMPORTED_MODULE_32__definition__["H" /* HEAD_CORE_NAME */], function () {
	return __WEBPACK_IMPORTED_MODULE_18__components_head_head_core__["a" /* default */];
}).directive(__WEBPACK_IMPORTED_MODULE_32__definition__["I" /* BODY_CORE_NAME */], function () {
	return __WEBPACK_IMPORTED_MODULE_19__components_body_body_core__["a" /* default */];
}).directive(__WEBPACK_IMPORTED_MODULE_32__definition__["J" /* FOOT_CORE_NAME */], function () {
	return __WEBPACK_IMPORTED_MODULE_20__components_foot_foot_core__["a" /* default */];
}).service(__WEBPACK_IMPORTED_MODULE_32__definition__["K" /* SERVICE_NAME */], __WEBPACK_IMPORTED_MODULE_1__services_grid__["a" /* default */]).config(Setup).name;

Setup.$inject = ['qgridThemeProvider'];
function Setup(qgridThemeProvider) {
	var EMPTY = '';

	qgridThemeProvider.register('default', function (theme) {
		theme.put('qgrid.grid.tpl.html', __webpack_require__(582));
		theme.put('qgrid.view.tpl.html', __webpack_require__(588));
		theme.put('qgrid.head.tpl.html', __webpack_require__(583));
		theme.put('qgrid.body.tpl.html', __webpack_require__(547));
		theme.put('qgrid.body.virtual.tpl.html', __webpack_require__(548));
		theme.put('qgrid.foot.tpl.html', __webpack_require__(581));

		theme.put('qgrid.toolbar.top.tpl.html', __webpack_require__(587));
		theme.put('qgrid.toolbar.bottom.tpl.html', __webpack_require__(584));
		theme.put('qgrid.toolbar.right.tpl.html', __webpack_require__(586));
		theme.put('qgrid.toolbar.left.tpl.html', __webpack_require__(585));

		theme.put('qgrid.head.cell.pad.tpl.html', EMPTY);
		theme.put('qgrid.body.cell.pad.tpl.html', EMPTY);
		theme.put('qgrid.foot.cell.pad.tpl.html', EMPTY);

		theme.put('qgrid.head.cell.pivot.tpl.html', __webpack_require__(569));
		theme.put('qgrid.body.cell.pivot.tpl.html', __webpack_require__(568));
		theme.put('qgrid.foot.cell.pivot.tpl.html', EMPTY);

		theme.put('qgrid.head.cell.group.tpl.html', __webpack_require__(561));
		theme.put('qgrid.body.cell.group.tpl.html', __webpack_require__(560));
		theme.put('qgrid.foot.cell.group.tpl.html', EMPTY);

		theme.put('qgrid.head.cell.text.tpl.html', __webpack_require__(16));
		theme.put('qgrid.body.cell.text.tpl.html', __webpack_require__(150));
		theme.put('qgrid.foot.cell.text.tpl.html', __webpack_require__(15));
		theme.put('qgrid.body.cell.text.edit.tpl.html', __webpack_require__(55));
		theme.put('qgrid.body.cell.text-area.edit.tpl.html', __webpack_require__(55));
		theme.put('qgrid.form.cell.text.edit.tpl.html', EMPTY);

		theme.put('qgrid.head.cell.row-number.tpl.html', __webpack_require__(574));
		theme.put('qgrid.body.cell.row-number.tpl.html', __webpack_require__(573));
		theme.put('qgrid.foot.cell.row-number.tpl.html', EMPTY);

		theme.put('qgrid.head.cell.row-indicator.tpl.html', EMPTY);
		theme.put('qgrid.body.cell.row-indicator.tpl.html', __webpack_require__(572));
		theme.put('qgrid.foot.cell.row-indicator.tpl.html', EMPTY);

		theme.put('qgrid.head.cell.date.tpl.html', __webpack_require__(16));
		theme.put('qgrid.body.cell.date.tpl.html', __webpack_require__(555));
		theme.put('qgrid.foot.cell.date.tpl.html', __webpack_require__(15));
		theme.put('qgrid.body.cell.date.edit.tpl.html', __webpack_require__(554));

		theme.put('qgrid.head.cell.password.tpl.html', __webpack_require__(16));
		theme.put('qgrid.body.cell.password.tpl.html', __webpack_require__(567));
		theme.put('qgrid.foot.cell.password.tpl.html', __webpack_require__(15));
		theme.put('qgrid.body.cell.password.edit.tpl.html', __webpack_require__(566));

		theme.put('qgrid.head.cell.bool.tpl.html', __webpack_require__(16));
		theme.put('qgrid.body.cell.bool.tpl.html', __webpack_require__(553));
		theme.put('qgrid.foot.cell.bool.tpl.html', __webpack_require__(15));
		theme.put('qgrid.body.cell.bool.edit.tpl.html', __webpack_require__(552));

		theme.put('qgrid.head.cell.number.tpl.html', __webpack_require__(16));
		theme.put('qgrid.body.cell.number.tpl.html', __webpack_require__(565));
		theme.put('qgrid.foot.cell.number.tpl.html', __webpack_require__(15));
		theme.put('qgrid.body.cell.number.edit.tpl.html', __webpack_require__(564));

		theme.put('qgrid.head.cell.array.tpl.html', __webpack_require__(16));
		theme.put('qgrid.body.cell.array.tpl.html', __webpack_require__(550));
		theme.put('qgrid.foot.cell.array.tpl.html', __webpack_require__(15));
		theme.put('qgrid.body.cell.array.edit.tpl.html', __webpack_require__(549));

		theme.put('qgrid.head.cell.email.tpl.html', __webpack_require__(16));
		theme.put('qgrid.body.cell.email.tpl.html', __webpack_require__(557));
		theme.put('qgrid.foot.cell.email.tpl.html', __webpack_require__(15));
		theme.put('qgrid.body.cell.email.edit.tpl.html', __webpack_require__(55));

		theme.put('qgrid.head.cell.time.tpl.html', __webpack_require__(16));
		theme.put('qgrid.body.cell.time.tpl.html', __webpack_require__(578));
		theme.put('qgrid.foot.cell.time.tpl.html', __webpack_require__(15));
		theme.put('qgrid.body.cell.time.edit.tpl.html', __webpack_require__(577));

		theme.put('qgrid.head.cell.url.tpl.html', __webpack_require__(16));
		theme.put('qgrid.body.cell.url.tpl.html', __webpack_require__(580));
		theme.put('qgrid.foot.cell.url.tpl.html', __webpack_require__(15));
		theme.put('qgrid.body.cell.url.edit.tpl.html', __webpack_require__(579));

		theme.put('qgrid.head.cell.file.tpl.html', __webpack_require__(16));
		theme.put('qgrid.body.cell.file.tpl.html', __webpack_require__(559));
		theme.put('qgrid.foot.cell.file.tpl.html', __webpack_require__(15));
		theme.put('qgrid.body.cell.file.edit.tpl.html', __webpack_require__(558));

		theme.put('qgrid.head.cell.image.tpl.html', __webpack_require__(16));
		theme.put('qgrid.body.cell.image.tpl.html', __webpack_require__(563));
		theme.put('qgrid.foot.cell.image.tpl.html', __webpack_require__(15));
		theme.put('qgrid.body.cell.image.edit.tpl.html', __webpack_require__(562));

		theme.put('qgrid.head.cell.reference.tpl.html', __webpack_require__(16));
		theme.put('qgrid.body.cell.reference.tpl.html', __webpack_require__(571));
		theme.put('qgrid.foot.cell.reference.tpl.html', __webpack_require__(15));
		theme.put('qgrid.body.cell.reference.edit.tpl.html', __webpack_require__(570));

		theme.put('qgrid.head.cell.id.tpl.html', __webpack_require__(16));
		theme.put('qgrid.body.cell.id.tpl.html', __webpack_require__(150));
		theme.put('qgrid.foot.cell.id.tpl.html', __webpack_require__(15));
		theme.put('qgrid.body.cell.id.edit.tpl.html', __webpack_require__(55));

		theme.put('qgrid.head.cell.select.tpl.html', __webpack_require__(576));
		theme.put('qgrid.body.cell.select.tpl.html', __webpack_require__(575));
		theme.put('qgrid.foot.cell.select.tpl.html', EMPTY);

		theme.put('qgrid.body.cell.dropdown.edit.tpl.html', __webpack_require__(556));
		theme.put('qgrid.body.cell.autocomplete.edit.tpl.html', __webpack_require__(551));
	});
}

/***/ }),
/* 381 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommandManager; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CommandManager = function () {
	function CommandManager(apply) {
		_classCallCheck(this, CommandManager);

		this.apply = apply;
	}

	_createClass(CommandManager, [{
		key: "execute",
		value: function execute(commands) {
			// First we need to get list of executable commands, cause execution of prev command can
			// impact on canExecute of next command
			var executableCommands = commands.filter(function (cmd) {
				return cmd.canExecute();
			});
			this.apply(function () {
				return executableCommands.forEach(function (cmd) {
					return cmd.execute();
				});
			});
		}
	}]);

	return CommandManager;
}();

/***/ }),
/* 382 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layer__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__row__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__column__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cell__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__element__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__grid_core_infrastructure__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var BoxCore = function (_ElementCore) {
	_inherits(BoxCore, _ElementCore);

	function BoxCore() {
		_classCallCheck(this, BoxCore);

		return _possibleConstructorReturn(this, (BoxCore.__proto__ || Object.getPrototypeOf(BoxCore)).call(this));
	}

	_createClass(BoxCore, [{
		key: 'column',
		value: function column() {
			return __WEBPACK_IMPORTED_MODULE_2__column__["a" /* default */].empty;
		}
	}, {
		key: 'row',
		value: function row() {
			return __WEBPACK_IMPORTED_MODULE_1__row__["a" /* default */].empty;
		}
	}, {
		key: 'rows',
		value: function rows() {
			return [];
		}
	}, {
		key: 'rowCount',
		value: function rowCount() {
			return 0;
		}
	}, {
		key: 'columnCount',
		value: function columnCount() {
			return 0;
		}
	}, {
		key: 'cell',
		value: function cell() {
			return __WEBPACK_IMPORTED_MODULE_3__cell__["a" /* default */].empty;
		}
	}, {
		key: 'addLayer',
		value: function addLayer() {
			return __WEBPACK_IMPORTED_MODULE_0__layer__["a" /* default */].empty;
		}
	}, {
		key: 'removeLayer',
		value: function removeLayer() {}
	}, {
		key: 'scrollLeft',
		value: function scrollLeft() {
			return 0;
		}
	}, {
		key: 'scrollTop',
		value: function scrollTop() {
			return 0;
		}
	}]);

	return BoxCore;
}(__WEBPACK_IMPORTED_MODULE_4__element__["b" /* ElementCore */]);

var empty = new BoxCore();

var Box = function (_BoxCore) {
	_inherits(Box, _BoxCore);

	function Box(document, element, template, name) {
		_classCallCheck(this, Box);

		var _this2 = _possibleConstructorReturn(this, (Box.__proto__ || Object.getPrototypeOf(Box)).call(this));

		_this2.document = document;
		_this2.element = element;
		_this2.template = template;
		_this2.layers = new Map();
		_this2.name = name;
		return _this2;
	}

	_createClass(Box, [{
		key: 'column',
		value: function column(index) {
			if (index >= 0) {
				var rows = this._rows();
				if (rows.length) {
					var cellsCount = rows[0].cells.length;
					if (index < cellsCount) {
						return new __WEBPACK_IMPORTED_MODULE_2__column__["a" /* default */](this.element, index);
					}
				}
			}
			return __WEBPACK_IMPORTED_MODULE_2__column__["a" /* default */].empty;
		}
	}, {
		key: 'row',
		value: function row(index) {
			if (index >= 0) {
				var rows = this._rows();
				if (index < rows.length) {
					return new __WEBPACK_IMPORTED_MODULE_1__row__["a" /* default */](rows[index]);
				}
			}
			return __WEBPACK_IMPORTED_MODULE_1__row__["a" /* default */].empty;
		}
	}, {
		key: 'rows',
		value: function rows() {
			return this._rows().map(function (element) {
				return new __WEBPACK_IMPORTED_MODULE_1__row__["a" /* default */](element);
			});
		}
	}, {
		key: 'rowCount',
		value: function rowCount() {
			return this._rows().length;
		}
	}, {
		key: 'columnCount',
		value: function columnCount() {
			if (this.rowCount() > 0) {
				var row = this._rows()[0];
				return row.cells.length;
			}

			return 0;
		}
	}, {
		key: 'cell',
		value: function cell(row, column) {
			if (row >= 0 && column >= 0) {
				var rows = this._rows();
				if (rows.length) {
					var cellsCount = rows[0].cells.length;
					if (row < rows.length && column < cellsCount) {
						var cell = rows[row].cells[column];
						return new __WEBPACK_IMPORTED_MODULE_3__cell__["a" /* default */](cell);
					}
				}
			}
			return __WEBPACK_IMPORTED_MODULE_3__cell__["a" /* default */].empty;
		}
	}, {
		key: 'addLayer',
		value: function addLayer(name) {
			var layers = this.layers;
			if (layers.has(name)) {
				return layers.get(name);
			}

			var node = this.document.createElement('div');
			node.classList.add(name);
			this.element.appendChild(node);

			var ctrl = angular.element(this.element).controller(this.name);
			if (!ctrl) {
				throw new __WEBPACK_IMPORTED_MODULE_5__grid_core_infrastructure__["c" /* AppError */]('box', 'Controller for box is not found');
			}

			if (!ctrl.$scope) {
				throw new __WEBPACK_IMPORTED_MODULE_5__grid_core_infrastructure__["c" /* AppError */]('box', 'Controller scope for box is not found');
			}

			var layer = new __WEBPACK_IMPORTED_MODULE_0__layer__["a" /* default */](ctrl.$scope, node, this.template);
			layers.set(name, layer);
			return layer;
		}
	}, {
		key: 'removeLayer',
		value: function removeLayer(name) {
			var layers = this.layers;
			if (layers.has(name)) {
				var layer = layers.get(name);
				layer.destroy();
				layer.element.parentElement.removeChild(layer.element);
				layers.delete(name);
			}
		}
	}, {
		key: '_rows',
		value: function _rows() {
			return Array.from(this.element.rows).filter(function (row) {
				return !row.classList.contains('vscroll-mark');
			});
		}
	}, {
		key: 'scrollLeft',
		value: function scrollLeft(value) {
			if (!arguments.length) {
				return this.element.scrollLeft;
			}

			this.element.scrollLeft = value;
		}
	}, {
		key: 'scrollTop',
		value: function scrollTop(value) {
			if (!arguments.length) {
				return this.element.scrollTop;
			}

			this.element.scrollTop = value;
		}
	}, {
		key: 'rect',
		value: function rect() {
			return this.element.getBoundingClientRect();
		}
	}], [{
		key: 'empty',
		get: function get() {
			return empty;
		}
	}]);

	return Box;
}(BoxCore);

/* harmony default export */ __webpack_exports__["a"] = (Box);

/***/ }),
/* 383 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cell__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__element__ = __webpack_require__(28);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var ColumnCore = function (_ElementCore) {
	_inherits(ColumnCore, _ElementCore);

	function ColumnCore() {
		_classCallCheck(this, ColumnCore);

		return _possibleConstructorReturn(this, (ColumnCore.__proto__ || Object.getPrototypeOf(ColumnCore)).call(this));
	}

	_createClass(ColumnCore, [{
		key: 'cells',
		value: function cells() {
			return [];
		}
	}, {
		key: 'cell',
		value: function cell() {
			return __WEBPACK_IMPORTED_MODULE_0__cell__["a" /* default */].empty;
		}
	}, {
		key: 'cellCount',
		value: function cellCount() {
			return 0;
		}
	}, {
		key: '_rows',
		value: function _rows() {
			return [];
		}
	}]);

	return ColumnCore;
}(__WEBPACK_IMPORTED_MODULE_1__element__["b" /* ElementCore */]);

var empty = new ColumnCore();

var Column = function (_Element) {
	_inherits(Column, _Element);

	function Column(element, index) {
		_classCallCheck(this, Column);

		var _this2 = _possibleConstructorReturn(this, (Column.__proto__ || Object.getPrototypeOf(Column)).call(this));

		_this2.element = element;
		_this2.index = index;
		return _this2;
	}

	_createClass(Column, [{
		key: 'cells',
		value: function cells() {
			var index = this.index;
			var rows = this._rows();
			var result = [];
			for (var i = 0, length = rows.length; i < length; i++) {
				var cell = rows[i].cells[index];
				result.push(new __WEBPACK_IMPORTED_MODULE_0__cell__["a" /* default */](cell));
			}
			return result;
		}
	}, {
		key: 'cell',
		value: function cell(row) {
			if (row >= 0 && row < this.cellCount()) {
				var rows = this._rows();
				var _row = rows[_row];
				return new __WEBPACK_IMPORTED_MODULE_0__cell__["a" /* default */](_row.cells[this.index]);
			}
			return __WEBPACK_IMPORTED_MODULE_0__cell__["a" /* default */].empty;
		}
	}, {
		key: 'cellCount',
		value: function cellCount() {
			return this._rows().length;
		}
	}, {
		key: '_rows',
		value: function _rows() {
			return Array.from(this.element.rows).filter(function (row) {
				return !row.classList.contains('vscroll-mark');
			});
		}
	}], [{
		key: 'empty',
		get: function get() {
			return empty;
		}
	}]);

	return Column;
}(__WEBPACK_IMPORTED_MODULE_1__element__["a" /* Element */]);

/* harmony default export */ __webpack_exports__["a"] = (Column);

/***/ }),
/* 384 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid_core_column_column_service__ = __webpack_require__(6);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Data = function () {
	function Data(model, pin) {
		_classCallCheck(this, Data);

		this.model = model;
		this.pin = pin;
	}

	_createClass(Data, [{
		key: 'columns',
		value: function columns() {
			var _this = this;

			var columns = this.model.view().columns;
			return __WEBPACK_IMPORTED_MODULE_0__grid_core_column_column_service__["e" /* lineView */](columns).map(function (v) {
				return v.model;
			}).filter(function (c) {
				return c.pin === _this.pin;
			});
		}
	}, {
		key: 'columnMap',
		value: function columnMap() {
			return __WEBPACK_IMPORTED_MODULE_0__grid_core_column_column_service__["a" /* map */](this.columns());
		}
	}, {
		key: 'rows',
		value: function rows() {
			return this.model.view().rows;
		}
	}]);

	return Data;
}();

/* harmony default export */ __webpack_exports__["a"] = (Data);

/***/ }),
/* 385 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(28);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var LayerCore = function (_Element) {
	_inherits(LayerCore, _Element);

	function LayerCore() {
		_classCallCheck(this, LayerCore);

		return _possibleConstructorReturn(this, (LayerCore.__proto__ || Object.getPrototypeOf(LayerCore)).apply(this, arguments));
	}

	_createClass(LayerCore, [{
		key: 'resource',
		value: function resource() {}
	}]);

	return LayerCore;
}(__WEBPACK_IMPORTED_MODULE_0__element__["a" /* Element */]);

var empty = new LayerCore();

var Layer = function (_LayerCore) {
	_inherits(Layer, _LayerCore);

	function Layer($scope, element, template) {
		_classCallCheck(this, Layer);

		var _this2 = _possibleConstructorReturn(this, (Layer.__proto__ || Object.getPrototypeOf(Layer)).call(this, element));

		_this2.$scope = $scope;
		_this2.template = template;
		_this2.$layerScope = null;
		return _this2;
	}

	_createClass(Layer, [{
		key: 'resource',
		value: function resource(id, state) {
			var link = this.template.link('qgrid.' + id + '.tpl.html', state, [id]);

			var $element = angular.element(this.element);
			this.$layerScope = this.$scope.$new();
			link($element, this.$layerScope);
		}
	}, {
		key: 'destroy',
		value: function destroy() {
			if (this.$layerScope) {
				this.$layerScope.$destroy();
				this.$layerScope = null;
			}
		}
	}], [{
		key: 'empty',
		get: function get() {
			return empty;
		}
	}]);

	return Layer;
}(LayerCore);

/* harmony default export */ __webpack_exports__["a"] = (Layer);

/***/ }),
/* 386 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cell__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__element__ = __webpack_require__(28);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var RowCore = function (_ElementCore) {
	_inherits(RowCore, _ElementCore);

	function RowCore() {
		_classCallCheck(this, RowCore);

		return _possibleConstructorReturn(this, (RowCore.__proto__ || Object.getPrototypeOf(RowCore)).call(this));
	}

	_createClass(RowCore, [{
		key: 'cells',
		value: function cells() {
			return [];
		}
	}, {
		key: 'cell',
		value: function cell() {
			return __WEBPACK_IMPORTED_MODULE_0__cell__["a" /* default */].empty;
		}
	}, {
		key: 'cellCount',
		value: function cellCount() {
			return 0;
		}
	}]);

	return RowCore;
}(__WEBPACK_IMPORTED_MODULE_1__element__["b" /* ElementCore */]);

var empty = new RowCore();

var Row = function (_Element) {
	_inherits(Row, _Element);

	function Row(element) {
		_classCallCheck(this, Row);

		var _this2 = _possibleConstructorReturn(this, (Row.__proto__ || Object.getPrototypeOf(Row)).call(this, element));

		_this2.element = element;
		return _this2;
	}

	_createClass(Row, [{
		key: 'cells',
		value: function cells() {
			var cells = this.element.cells;
			var result = [];
			for (var i = 0, length = cells.length; i < length; i++) {
				var cell = cells[i];
				result.push(new __WEBPACK_IMPORTED_MODULE_0__cell__["a" /* default */](cell));
			}
			return result;
		}
	}, {
		key: 'cell',
		value: function cell(column) {
			if (column >= 0 && column < this.cellCount()) {
				var cells = this.element.cells;
				return new __WEBPACK_IMPORTED_MODULE_0__cell__["a" /* default */](cells[column]);
			}
			return __WEBPACK_IMPORTED_MODULE_0__cell__["a" /* default */].empty;
		}
	}, {
		key: 'cellCount',
		value: function cellCount() {
			return this.element.cells.length;
		}
	}], [{
		key: 'empty',
		get: function get() {
			return empty;
		}
	}]);

	return Row;
}(__WEBPACK_IMPORTED_MODULE_1__element__["a" /* Element */]);

/* harmony default export */ __webpack_exports__["a"] = (Row);

/***/ }),
/* 387 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__box__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grid_core_infrastructure__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__element__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__grid_view_definition__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }







var Table = function () {
	function Table(model, markup, template) {
		_classCallCheck(this, Table);

		this.model = model;
		this.markup = markup;
		this.template = template;
		this._head = null;
		this._body = null;
		this._foot = null;
		this._view = null;
		this.isFocused = this.isFocused.bind(this);
		this.pin = null;
	}

	_createClass(Table, [{
		key: 'isFocused',
		value: function isFocused() {
			var markup = this.markup;
			var target = markup.table;
			var current = markup.document.activeElement;
			while (current) {
				if (current === target) {
					return true;
				}

				current = current.parentNode;
			}

			return false;
		}
	}, {
		key: 'keyDown',
		value: function keyDown(f) {
			return new __WEBPACK_IMPORTED_MODULE_2__grid_core_infrastructure__["d" /* EventListener */](this, this.markup.document).on('keydown', f);
		}
	}, {
		key: 'focus',
		value: function focus() {
			this.markup.table.focus();
		}
	}, {
		key: 'blur',
		value: function blur() {
			this.markup.table.blur();
		}
	}, {
		key: 'head',
		get: function get() {
			if (this._head) {
				return this._head;
			}

			var document = this.markup.document;
			var head = this.markup.head;
			if (document && head) {
				return this._head = new __WEBPACK_IMPORTED_MODULE_0__box__["a" /* default */](document, head, this.template, __WEBPACK_IMPORTED_MODULE_4__grid_view_definition__["H" /* HEAD_CORE_NAME */]);
			}

			return __WEBPACK_IMPORTED_MODULE_0__box__["a" /* default */].empty;
		}
	}, {
		key: 'body',
		get: function get() {
			if (this._body) {
				return this._body;
			}

			var document = this.markup.document;
			var body = this.markup.body;
			if (document && body) {
				return this._body = new __WEBPACK_IMPORTED_MODULE_0__box__["a" /* default */](document, body, this.template, __WEBPACK_IMPORTED_MODULE_4__grid_view_definition__["I" /* BODY_CORE_NAME */]);
			}
			return __WEBPACK_IMPORTED_MODULE_0__box__["a" /* default */].empty;
		}
	}, {
		key: 'foot',
		get: function get() {
			if (this._foot) {
				return this._foot;
			}

			var document = this.markup.document;
			var foot = this.markup.foot;
			if (document && foot) {
				return this._foot = new __WEBPACK_IMPORTED_MODULE_0__box__["a" /* default */](document, foot, this.template, __WEBPACK_IMPORTED_MODULE_4__grid_view_definition__["J" /* FOOT_CORE_NAME */]);
			}
			return __WEBPACK_IMPORTED_MODULE_0__box__["a" /* default */].empty;
		}
	}, {
		key: 'data',
		get: function get() {
			return new __WEBPACK_IMPORTED_MODULE_1__data__["a" /* default */](this.model, this.pin);
		}
	}, {
		key: 'view',
		get: function get() {
			if (this._view) {
				return this._view;
			}

			var view = this.markup.view;
			if (view) {
				return this._view = new __WEBPACK_IMPORTED_MODULE_3__element__["a" /* Element */](view);
			}
			return __WEBPACK_IMPORTED_MODULE_3__element__["a" /* Element */].empty;
		}
	}]);

	return Table;
}();

/* harmony default export */ __webpack_exports__["a"] = (Table);

/***/ }),
/* 388 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid_core_infrastructure__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid_core_services__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grid_core_pipe__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__grid_core_pipe_units__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__grid_core_services_utility__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__grid_core_services_value__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__grid_core_services_label__ = __webpack_require__(38);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }









var Grid = function () {
	function Grid($rootScope) {
		_classCallCheck(this, Grid);

		this.$rootScope = $rootScope;
	}

	_createClass(Grid, [{
		key: 'model',
		value: function model() {
			return new __WEBPACK_IMPORTED_MODULE_0__grid_core_infrastructure__["a" /* Model */]();
		}
	}, {
		key: 'service',
		value: function service(model) {
			var $rootScope = this.$rootScope;
			var apply = function apply() {
				__WEBPACK_IMPORTED_MODULE_0__grid_core_infrastructure__["i" /* Log */].info('service', '$digest apply');
				$rootScope.$evalAsync(__WEBPACK_IMPORTED_MODULE_4__grid_core_services_utility__["b" /* noop */]);
			};

			return new __WEBPACK_IMPORTED_MODULE_1__grid_core_services__["f" /* GridService */](model, apply);
		}
	}, {
		key: 'pipe',
		get: function get() {
			return __WEBPACK_IMPORTED_MODULE_2__grid_core_pipe__["b" /* Pipe */];
		}
	}, {
		key: 'pipeUnit',
		get: function get() {
			return __WEBPACK_IMPORTED_MODULE_3__grid_core_pipe_units__["a" /* PipeUnit */];
		}
	}, {
		key: 'Command',
		get: function get() {
			return __WEBPACK_IMPORTED_MODULE_0__grid_core_infrastructure__["g" /* Command */];
		}
	}, {
		key: 'valueFactory',
		get: function get() {
			return __WEBPACK_IMPORTED_MODULE_5__grid_core_services_value__["c" /* getFactory */];
		}
	}, {
		key: 'labelFactory',
		get: function get() {
			return __WEBPACK_IMPORTED_MODULE_6__grid_core_services_label__["c" /* getFactory */];
		}
	}]);

	return Grid;
}();

/* harmony default export */ __webpack_exports__["a"] = (Grid);


Grid.$inject = ['$rootScope'];

/***/ }),
/* 389 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vscroll__ = __webpack_require__(392);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__vscroll__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__command_manager__ = __webpack_require__(381);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__command_manager__["a"]; });



/***/ }),
/* 390 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid_core_infrastructure__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid_view_definition__ = __webpack_require__(2);
/* harmony export (immutable) */ __webpack_exports__["a"] = cell;
/* unused harmony export row */



function cell(path) {
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = path[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var node = _step.value;

			if (node.nodeName === 'TD' || node.nodeName === 'TH') {
				var ctrl = angular.element(node).controller(__WEBPACK_IMPORTED_MODULE_1__grid_view_definition__["F" /* TD_CORE_NAME */]);
				if (!ctrl) {
					new __WEBPACK_IMPORTED_MODULE_0__grid_core_infrastructure__["c" /* AppError */]('path.find', 'Can\'t find controller for ' + node.nodeName);
				}

				return ctrl;
			}
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	return null;
}

function row(path) {
	var _iteratorNormalCompletion2 = true;
	var _didIteratorError2 = false;
	var _iteratorError2 = undefined;

	try {
		for (var _iterator2 = path[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
			var node = _step2.value;

			if (node.nodeName === 'TR') {
				var ctrl = angular.element(node).controller(__WEBPACK_IMPORTED_MODULE_1__grid_view_definition__["E" /* TR_CORE_NAME */]);
				if (!ctrl) {
					new __WEBPACK_IMPORTED_MODULE_0__grid_core_infrastructure__["c" /* AppError */]('path.find', 'Can\'t find controller for ' + node.nodeName);
				}

				return ctrl;
			}
		}
	} catch (err) {
		_didIteratorError2 = true;
		_iteratorError2 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion2 && _iterator2.return) {
				_iterator2.return();
			}
		} finally {
			if (_didIteratorError2) {
				throw _iteratorError2;
			}
		}
	}

	return null;
}

/***/ }),
/* 391 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid_core_infrastructure__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var DefaultTheme = 'default';

var ThemeProvider = function () {
	function ThemeProvider() {
		_classCallCheck(this, ThemeProvider);

		this.themes = new Map();
		this.$get.$inject = ['$templateCache'];
	}

	_createClass(ThemeProvider, [{
		key: 'register',
		value: function register(theme, apply) {
			if (this.themes.has(theme)) {
				var prevApply = this.themes.get(theme);
				this.themes.set(theme, function () {
					prevApply.apply(undefined, arguments);
					apply.apply(undefined, arguments);
				});
			} else {
				this.themes.set(theme, apply);
			}
		}
	}, {
		key: '$get',
		value: function $get($templateCache) {
			return new Theme(this.themes, $templateCache);
		}
	}]);

	return ThemeProvider;
}();

/* harmony default export */ __webpack_exports__["a"] = (ThemeProvider);

var Theme = function () {
	function Theme(themes, cache) {
		_classCallCheck(this, Theme);

		this._name = '';
		this.changed = new __WEBPACK_IMPORTED_MODULE_0__grid_core_infrastructure__["b" /* Event */]();
		this.themes = themes;
		this.cache = cache;

		this.name = DefaultTheme;
	}

	_createClass(Theme, [{
		key: 'name',
		get: function get() {
			return this._name;
		},
		set: function set(value) {
			if (value !== this._name) {
				var oldValue = this._name;
				var apply = this.themes.get(value);

				if (this._name !== DefaultTheme && value !== DefaultTheme) {
					this.themes.get(DefaultTheme)(this.cache);
				}

				this._name = value;

				apply(this.cache);

				this.changed.emit({
					newValue: value,
					oldValue: oldValue
				});
			}
		}
	}]);

	return Theme;
}();

/***/ }),
/* 392 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Vscroll; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vscroll = function () {
	function Vscroll(vscroll, apply) {
		_classCallCheck(this, Vscroll);

		this.vscroll = vscroll;
		this.apply = apply;
	}

	_createClass(Vscroll, [{
		key: "factory",
		value: function factory(settings) {
			var ctx = this.vscroll(settings);
			ctx.container.apply = this.apply;
			return ctx;
		}
	}]);

	return Vscroll;
}();

/***/ }),
/* 393 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
;(function(root, factory) {
	// https://github.com/umdjs/umd/blob/master/returnExports.js
	if (true) {
		// For Node.js.
		module.exports = factory(root);
	} else if (typeof define == 'function' && define.amd) {
		// For AMD. Register as an anonymous module.
		define([], factory.bind(root, root));
	} else {
		// For browser globals (not exposing the function separately).
		factory(root);
	}
}(typeof global != 'undefined' ? global : this, function(root) {

	if (root.CSS && root.CSS.escape) {
		return root.CSS.escape;
	}

	// https://drafts.csswg.org/cssom/#serialize-an-identifier
	var cssEscape = function(value) {
		if (arguments.length == 0) {
			throw new TypeError('`CSS.escape` requires an argument.');
		}
		var string = String(value);
		var length = string.length;
		var index = -1;
		var codeUnit;
		var result = '';
		var firstCodeUnit = string.charCodeAt(0);
		while (++index < length) {
			codeUnit = string.charCodeAt(index);
			// Note: there’s no need to special-case astral symbols, surrogate
			// pairs, or lone surrogates.

			// If the character is NULL (U+0000), then the REPLACEMENT CHARACTER
			// (U+FFFD).
			if (codeUnit == 0x0000) {
				result += '\uFFFD';
				continue;
			}

			if (
				// If the character is in the range [\1-\1F] (U+0001 to U+001F) or is
				// U+007F, […]
				(codeUnit >= 0x0001 && codeUnit <= 0x001F) || codeUnit == 0x007F ||
				// If the character is the first character and is in the range [0-9]
				// (U+0030 to U+0039), […]
				(index == 0 && codeUnit >= 0x0030 && codeUnit <= 0x0039) ||
				// If the character is the second character and is in the range [0-9]
				// (U+0030 to U+0039) and the first character is a `-` (U+002D), […]
				(
					index == 1 &&
					codeUnit >= 0x0030 && codeUnit <= 0x0039 &&
					firstCodeUnit == 0x002D
				)
			) {
				// https://drafts.csswg.org/cssom/#escape-a-character-as-code-point
				result += '\\' + codeUnit.toString(16) + ' ';
				continue;
			}

			if (
				// If the character is the first character and is a `-` (U+002D), and
				// there is no second character, […]
				index == 0 &&
				length == 1 &&
				codeUnit == 0x002D
			) {
				result += '\\' + string.charAt(index);
				continue;
			}

			// If the character is not handled by one of the above rules and is
			// greater than or equal to U+0080, is `-` (U+002D) or `_` (U+005F), or
			// is in one of the ranges [0-9] (U+0030 to U+0039), [A-Z] (U+0041 to
			// U+005A), or [a-z] (U+0061 to U+007A), […]
			if (
				codeUnit >= 0x0080 ||
				codeUnit == 0x002D ||
				codeUnit == 0x005F ||
				codeUnit >= 0x0030 && codeUnit <= 0x0039 ||
				codeUnit >= 0x0041 && codeUnit <= 0x005A ||
				codeUnit >= 0x0061 && codeUnit <= 0x007A
			) {
				// the character itself
				result += string.charAt(index);
				continue;
			}

			// Otherwise, the escaped character.
			// https://drafts.csswg.org/cssom/#escape-a-character
			result += '\\' + string.charAt(index);

		}
		return result;
	};

	if (!root.CSS) {
		root.CSS = {};
	}

	root.CSS.escape = cssEscape;
	return cssEscape;

}));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(151)))

/***/ }),
/* 394 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 395 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(26),
    root = __webpack_require__(21);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),
/* 396 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(468),
    hashDelete = __webpack_require__(469),
    hashGet = __webpack_require__(470),
    hashHas = __webpack_require__(471),
    hashSet = __webpack_require__(472);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 397 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(26),
    root = __webpack_require__(21);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),
/* 398 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(26),
    root = __webpack_require__(21);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),
/* 399 */
/***/ (function(module, exports) {

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

module.exports = addMapEntry;


/***/ }),
/* 400 */
/***/ (function(module, exports) {

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

module.exports = addSetEntry;


/***/ }),
/* 401 */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),
/* 402 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),
/* 403 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),
/* 404 */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(417);

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),
/* 405 */
/***/ (function(module, exports) {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


/***/ }),
/* 406 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),
/* 407 */
/***/ (function(module, exports) {

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

module.exports = asciiToArray;


/***/ }),
/* 408 */
/***/ (function(module, exports) {

/** Used to match words composed of alphanumeric characters. */
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

/**
 * Splits an ASCII `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function asciiWords(string) {
  return string.match(reAsciiWord) || [];
}

module.exports = asciiWords;


/***/ }),
/* 409 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(30),
    keys = __webpack_require__(32);

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),
/* 410 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(30),
    keysIn = __webpack_require__(53);

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),
/* 411 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(17);

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),
/* 412 */
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(415),
    createBaseEach = __webpack_require__(454);

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),
/* 413 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),
/* 414 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(70),
    isFlattenable = __webpack_require__(475);

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),
/* 415 */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(125),
    keys = __webpack_require__(32);

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),
/* 416 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),
/* 417 */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(413),
    baseIsNaN = __webpack_require__(421),
    strictIndexOf = __webpack_require__(504);

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),
/* 418 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(25),
    isObjectLike = __webpack_require__(24);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 419 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(43),
    equalArrays = __webpack_require__(137),
    equalByTag = __webpack_require__(460),
    equalObjects = __webpack_require__(461),
    getTag = __webpack_require__(141),
    isArray = __webpack_require__(14),
    isBuffer = __webpack_require__(51),
    isTypedArray = __webpack_require__(80);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),
/* 420 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(43),
    baseIsEqual = __webpack_require__(128);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),
/* 421 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),
/* 422 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(52),
    isMasked = __webpack_require__(478),
    isObject = __webpack_require__(17),
    toSource = __webpack_require__(148);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 423 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(25),
    isLength = __webpack_require__(79),
    isObjectLike = __webpack_require__(24);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),
/* 424 */
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__(428),
    baseMatchesProperty = __webpack_require__(429),
    identity = __webpack_require__(49),
    isArray = __webpack_require__(14),
    property = __webpack_require__(527);

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),
/* 425 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(78),
    nativeKeys = __webpack_require__(490);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),
/* 426 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(17),
    isPrototype = __webpack_require__(78),
    nativeKeysIn = __webpack_require__(491);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),
/* 427 */
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__(412),
    isArrayLike = __webpack_require__(31);

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

module.exports = baseMap;


/***/ }),
/* 428 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(420),
    getMatchData = __webpack_require__(463),
    matchesStrictComparable = __webpack_require__(146);

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),
/* 429 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(128),
    get = __webpack_require__(516),
    hasIn = __webpack_require__(517),
    isKey = __webpack_require__(77),
    isStrictComparable = __webpack_require__(144),
    matchesStrictComparable = __webpack_require__(146),
    toKey = __webpack_require__(48);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),
/* 430 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(43),
    assignMergeValue = __webpack_require__(122),
    baseFor = __webpack_require__(125),
    baseMergeDeep = __webpack_require__(431),
    isObject = __webpack_require__(17),
    keysIn = __webpack_require__(53);

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    if (isObject(srcValue)) {
      stack || (stack = new Stack);
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(object[key], srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

module.exports = baseMerge;


/***/ }),
/* 431 */
/***/ (function(module, exports, __webpack_require__) {

var assignMergeValue = __webpack_require__(122),
    cloneBuffer = __webpack_require__(132),
    cloneTypedArray = __webpack_require__(133),
    copyArray = __webpack_require__(134),
    initCloneObject = __webpack_require__(143),
    isArguments = __webpack_require__(50),
    isArray = __webpack_require__(14),
    isArrayLikeObject = __webpack_require__(518),
    isBuffer = __webpack_require__(51),
    isFunction = __webpack_require__(52),
    isObject = __webpack_require__(17),
    isPlainObject = __webpack_require__(520),
    isTypedArray = __webpack_require__(80),
    toPlainObject = __webpack_require__(531);

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = object[key],
      srcValue = source[key],
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

module.exports = baseMergeDeep;


/***/ }),
/* 432 */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(121),
    baseIteratee = __webpack_require__(424),
    baseMap = __webpack_require__(427),
    baseSortBy = __webpack_require__(439),
    baseUnary = __webpack_require__(129),
    compareMultiple = __webpack_require__(450),
    identity = __webpack_require__(49);

/**
 * The base implementation of `_.orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */
function baseOrderBy(collection, iteratees, orders) {
  var index = -1;
  iteratees = arrayMap(iteratees.length ? iteratees : [identity], baseUnary(baseIteratee));

  var result = baseMap(collection, function(value, key, collection) {
    var criteria = arrayMap(iteratees, function(iteratee) {
      return iteratee(value);
    });
    return { 'criteria': criteria, 'index': ++index, 'value': value };
  });

  return baseSortBy(result, function(object, other) {
    return compareMultiple(object, other, orders);
  });
}

module.exports = baseOrderBy;


/***/ }),
/* 433 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),
/* 434 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(126);

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),
/* 435 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

module.exports = basePropertyOf;


/***/ }),
/* 436 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(49),
    overRest = __webpack_require__(494),
    setToString = __webpack_require__(497);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),
/* 437 */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(512),
    defineProperty = __webpack_require__(136),
    identity = __webpack_require__(49);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),
/* 438 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),
/* 439 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
 *
 * @private
 * @param {Array} array The array to sort.
 * @param {Function} comparer The function to define sort order.
 * @returns {Array} Returns `array`.
 */
function baseSortBy(array, comparer) {
  var length = array.length;

  array.sort(comparer);
  while (length--) {
    array[length] = array[length].value;
  }
  return array;
}

module.exports = baseSortBy;


/***/ }),
/* 440 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),
/* 441 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(29),
    arrayMap = __webpack_require__(121),
    isArray = __webpack_require__(14),
    isSymbol = __webpack_require__(35);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),
/* 442 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(118),
    arrayIncludes = __webpack_require__(404),
    arrayIncludesWith = __webpack_require__(405),
    cacheHas = __webpack_require__(130),
    createSet = __webpack_require__(458),
    setToArray = __webpack_require__(47);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseUniq;


/***/ }),
/* 443 */
/***/ (function(module, exports, __webpack_require__) {

var baseSlice = __webpack_require__(438);

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : baseSlice(array, start, end);
}

module.exports = castSlice;


/***/ }),
/* 444 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(73);

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;


/***/ }),
/* 445 */
/***/ (function(module, exports, __webpack_require__) {

var addMapEntry = __webpack_require__(399),
    arrayReduce = __webpack_require__(71),
    mapToArray = __webpack_require__(145);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1;

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), CLONE_DEEP_FLAG) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor);
}

module.exports = cloneMap;


/***/ }),
/* 446 */
/***/ (function(module, exports) {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;


/***/ }),
/* 447 */
/***/ (function(module, exports, __webpack_require__) {

var addSetEntry = __webpack_require__(400),
    arrayReduce = __webpack_require__(71),
    setToArray = __webpack_require__(47);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1;

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), CLONE_DEEP_FLAG) : setToArray(set);
  return arrayReduce(array, addSetEntry, new set.constructor);
}

module.exports = cloneSet;


/***/ }),
/* 448 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(29);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;


/***/ }),
/* 449 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(35);

/**
 * Compares values to sort them in ascending order.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */
function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== undefined,
        valIsNull = value === null,
        valIsReflexive = value === value,
        valIsSymbol = isSymbol(value);

    var othIsDefined = other !== undefined,
        othIsNull = other === null,
        othIsReflexive = other === other,
        othIsSymbol = isSymbol(other);

    if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
        (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
        (valIsNull && othIsDefined && othIsReflexive) ||
        (!valIsDefined && othIsReflexive) ||
        !valIsReflexive) {
      return 1;
    }
    if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
        (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
        (othIsNull && valIsDefined && valIsReflexive) ||
        (!othIsDefined && valIsReflexive) ||
        !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}

module.exports = compareAscending;


/***/ }),
/* 450 */
/***/ (function(module, exports, __webpack_require__) {

var compareAscending = __webpack_require__(449);

/**
 * Used by `_.orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 *
 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
 * specify an order of "desc" for descending or "asc" for ascending sort order
 * of corresponding values.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {boolean[]|string[]} orders The order to sort by for each property.
 * @returns {number} Returns the sort order indicator for `object`.
 */
function compareMultiple(object, other, orders) {
  var index = -1,
      objCriteria = object.criteria,
      othCriteria = other.criteria,
      length = objCriteria.length,
      ordersLength = orders.length;

  while (++index < length) {
    var result = compareAscending(objCriteria[index], othCriteria[index]);
    if (result) {
      if (index >= ordersLength) {
        return result;
      }
      var order = orders[index];
      return result * (order == 'desc' ? -1 : 1);
    }
  }
  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
  // that causes it, under certain circumstances, to provide the same value for
  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
  // for more details.
  //
  // This also ensures a stable sort in V8 and other engines.
  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
  return object.index - other.index;
}

module.exports = compareMultiple;


/***/ }),
/* 451 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(30),
    getSymbols = __webpack_require__(75);

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),
/* 452 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(30),
    getSymbolsIn = __webpack_require__(140);

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),
/* 453 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(21);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 454 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(31);

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),
/* 455 */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),
/* 456 */
/***/ (function(module, exports, __webpack_require__) {

var castSlice = __webpack_require__(443),
    hasUnicode = __webpack_require__(142),
    stringToArray = __webpack_require__(505),
    toString = __webpack_require__(54);

/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst(methodName) {
  return function(string) {
    string = toString(string);

    var strSymbols = hasUnicode(string)
      ? stringToArray(string)
      : undefined;

    var chr = strSymbols
      ? strSymbols[0]
      : string.charAt(0);

    var trailing = strSymbols
      ? castSlice(strSymbols, 1).join('')
      : string.slice(1);

    return chr[methodName]() + trailing;
  };
}

module.exports = createCaseFirst;


/***/ }),
/* 457 */
/***/ (function(module, exports, __webpack_require__) {

var arrayReduce = __webpack_require__(71),
    deburr = __webpack_require__(514),
    words = __webpack_require__(534);

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]";

/** Used to match apostrophes. */
var reApos = RegExp(rsApos, 'g');

/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */
function createCompounder(callback) {
  return function(string) {
    return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
  };
}

module.exports = createCompounder;


/***/ }),
/* 458 */
/***/ (function(module, exports, __webpack_require__) {

var Set = __webpack_require__(117),
    noop = __webpack_require__(524),
    setToArray = __webpack_require__(47);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
  return new Set(values);
};

module.exports = createSet;


/***/ }),
/* 459 */
/***/ (function(module, exports, __webpack_require__) {

var basePropertyOf = __webpack_require__(435);

/** Used to map Latin Unicode letters to basic Latin letters. */
var deburredLetters = {
  // Latin-1 Supplement block.
  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
  '\xc7': 'C',  '\xe7': 'c',
  '\xd0': 'D',  '\xf0': 'd',
  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
  '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
  '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
  '\xd1': 'N',  '\xf1': 'n',
  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
  '\xc6': 'Ae', '\xe6': 'ae',
  '\xde': 'Th', '\xfe': 'th',
  '\xdf': 'ss',
  // Latin Extended-A block.
  '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
  '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
  '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
  '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
  '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
  '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
  '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
  '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
  '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
  '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
  '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
  '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
  '\u0134': 'J',  '\u0135': 'j',
  '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
  '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
  '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
  '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
  '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
  '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
  '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
  '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
  '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
  '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
  '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
  '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
  '\u0163': 't',  '\u0165': 't', '\u0167': 't',
  '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
  '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
  '\u0174': 'W',  '\u0175': 'w',
  '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
  '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
  '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
  '\u0132': 'IJ', '\u0133': 'ij',
  '\u0152': 'Oe', '\u0153': 'oe',
  '\u0149': "'n", '\u017f': 's'
};

/**
 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
 * letters to basic Latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */
var deburrLetter = basePropertyOf(deburredLetters);

module.exports = deburrLetter;


/***/ }),
/* 460 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(29),
    Uint8Array = __webpack_require__(119),
    eq = __webpack_require__(34),
    equalArrays = __webpack_require__(137),
    mapToArray = __webpack_require__(145),
    setToArray = __webpack_require__(47);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),
/* 461 */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(139);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),
/* 462 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(127),
    getSymbolsIn = __webpack_require__(140),
    keysIn = __webpack_require__(53);

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),
/* 463 */
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(144),
    keys = __webpack_require__(32);

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),
/* 464 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(29);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 465 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 466 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(131),
    isArguments = __webpack_require__(50),
    isArray = __webpack_require__(14),
    isIndex = __webpack_require__(76),
    isLength = __webpack_require__(79),
    toKey = __webpack_require__(48);

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),
/* 467 */
/***/ (function(module, exports) {

/** Used to detect strings that need a more robust regexp to match words. */
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

/**
 * Checks if `string` contains a word composed of Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a word is found, else `false`.
 */
function hasUnicodeWord(string) {
  return reHasUnicodeWord.test(string);
}

module.exports = hasUnicodeWord;


/***/ }),
/* 468 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(46);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 469 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 470 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(46);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 471 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(46);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 472 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(46);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 473 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),
/* 474 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(73),
    cloneDataView = __webpack_require__(444),
    cloneMap = __webpack_require__(445),
    cloneRegExp = __webpack_require__(446),
    cloneSet = __webpack_require__(447),
    cloneSymbol = __webpack_require__(448),
    cloneTypedArray = __webpack_require__(133);

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;


/***/ }),
/* 475 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(29),
    isArguments = __webpack_require__(50),
    isArray = __webpack_require__(14);

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),
/* 476 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(34),
    isArrayLike = __webpack_require__(31),
    isIndex = __webpack_require__(76),
    isObject = __webpack_require__(17);

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),
/* 477 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 478 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(453);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 479 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 480 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(44);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 481 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(44);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 482 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(44);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 483 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(44);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 484 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(396),
    ListCache = __webpack_require__(42),
    Map = __webpack_require__(68);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 485 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(45);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 486 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(45);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 487 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(45);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 488 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(45);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 489 */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(522);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),
/* 490 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(147);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 491 */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),
/* 492 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(138);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(81)(module)))

/***/ }),
/* 493 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 494 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(401);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),
/* 495 */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),
/* 496 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),
/* 497 */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(437),
    shortOut = __webpack_require__(498);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),
/* 498 */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),
/* 499 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(42);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),
/* 500 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),
/* 501 */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),
/* 502 */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),
/* 503 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(42),
    Map = __webpack_require__(68),
    MapCache = __webpack_require__(69);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),
/* 504 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),
/* 505 */
/***/ (function(module, exports, __webpack_require__) {

var asciiToArray = __webpack_require__(407),
    hasUnicode = __webpack_require__(142),
    unicodeToArray = __webpack_require__(507);

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

module.exports = stringToArray;


/***/ }),
/* 506 */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(489);

/** Used to match property names within property paths. */
var reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),
/* 507 */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

module.exports = unicodeToArray;


/***/ }),
/* 508 */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsDingbatRange = '\\u2700-\\u27bf',
    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
    rsPunctuationRange = '\\u2000-\\u206f',
    rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
    rsVarRange = '\\ufe0e\\ufe0f',
    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]",
    rsBreak = '[' + rsBreakRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsDigits = '\\d+',
    rsDingbat = '[' + rsDingbatRange + ']',
    rsLower = '[' + rsLowerRange + ']',
    rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsUpper = '[' + rsUpperRange + ']',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
    rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
    rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
    rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
    reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsOrdLower = '\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)',
    rsOrdUpper = '\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;

/** Used to match complex or compound words. */
var reUnicodeWord = RegExp([
  rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
  rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
  rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
  rsUpper + '+' + rsOptContrUpper,
  rsOrdUpper,
  rsOrdLower,
  rsDigits,
  rsEmoji
].join('|'), 'g');

/**
 * Splits a Unicode `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function unicodeWords(string) {
  return string.match(reUnicodeWord) || [];
}

module.exports = unicodeWords;


/***/ }),
/* 509 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(30),
    createAssigner = __webpack_require__(135),
    keys = __webpack_require__(32);

/**
 * This method is like `_.assign` except that it accepts `customizer`
 * which is invoked to produce the assigned values. If `customizer` returns
 * `undefined`, assignment is handled by the method instead. The `customizer`
 * is invoked with five arguments: (objValue, srcValue, key, object, source).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} [customizer] The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @see _.assignInWith
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   return _.isUndefined(objValue) ? srcValue : objValue;
 * }
 *
 * var defaults = _.partialRight(_.assignWith, customizer);
 *
 * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
  copyObject(source, keys(source), object, customizer);
});

module.exports = assignWith;


/***/ }),
/* 510 */
/***/ (function(module, exports, __webpack_require__) {

var baseClone = __webpack_require__(124);

/** Used to compose bitmasks for cloning. */
var CLONE_SYMBOLS_FLAG = 4;

/**
 * Creates a shallow clone of `value`.
 *
 * **Note:** This method is loosely based on the
 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
 * and supports cloning arrays, array buffers, booleans, date objects, maps,
 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
 * arrays. The own enumerable properties of `arguments` objects are cloned
 * as plain objects. An empty object is returned for uncloneable values such
 * as error objects, functions, DOM nodes, and WeakMaps.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to clone.
 * @returns {*} Returns the cloned value.
 * @see _.cloneDeep
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var shallow = _.clone(objects);
 * console.log(shallow[0] === objects[0]);
 * // => true
 */
function clone(value) {
  return baseClone(value, CLONE_SYMBOLS_FLAG);
}

module.exports = clone;


/***/ }),
/* 511 */
/***/ (function(module, exports, __webpack_require__) {

var baseClone = __webpack_require__(124);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}

module.exports = cloneDeep;


/***/ }),
/* 512 */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),
/* 513 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(17),
    now = __webpack_require__(525),
    toNumber = __webpack_require__(530);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),
/* 514 */
/***/ (function(module, exports, __webpack_require__) {

var deburrLetter = __webpack_require__(459),
    toString = __webpack_require__(54);

/** Used to match Latin Unicode letters (excluding mathematical operators). */
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

/** Used to compose unicode character classes. */
var rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;

/** Used to compose unicode capture groups. */
var rsCombo = '[' + rsComboRange + ']';

/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */
var reComboMark = RegExp(rsCombo, 'g');

/**
 * Deburrs `string` by converting
 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
 * letters to basic Latin letters and removing
 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * _.deburr('déjà vu');
 * // => 'deja vu'
 */
function deburr(string) {
  string = toString(string);
  return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
}

module.exports = deburr;


/***/ }),
/* 515 */
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(414);

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

module.exports = flatten;


/***/ }),
/* 516 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(126);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),
/* 517 */
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(416),
    hasPath = __webpack_require__(466);

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),
/* 518 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(31),
    isObjectLike = __webpack_require__(24);

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),
/* 519 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(25),
    isObjectLike = __webpack_require__(24);

/** `Object#toString` result references. */
var boolTag = '[object Boolean]';

/**
 * Checks if `value` is classified as a boolean primitive or object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
 * @example
 *
 * _.isBoolean(false);
 * // => true
 *
 * _.isBoolean(null);
 * // => false
 */
function isBoolean(value) {
  return value === true || value === false ||
    (isObjectLike(value) && baseGetTag(value) == boolTag);
}

module.exports = isBoolean;


/***/ }),
/* 520 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(25),
    getPrototype = __webpack_require__(74),
    isObjectLike = __webpack_require__(24);

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),
/* 521 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is `undefined`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 * @example
 *
 * _.isUndefined(void 0);
 * // => true
 *
 * _.isUndefined(null);
 * // => false
 */
function isUndefined(value) {
  return value === undefined;
}

module.exports = isUndefined;


/***/ }),
/* 522 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(69);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),
/* 523 */
/***/ (function(module, exports, __webpack_require__) {

var baseMerge = __webpack_require__(430),
    createAssigner = __webpack_require__(135);

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

module.exports = merge;


/***/ }),
/* 524 */
/***/ (function(module, exports) {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),
/* 525 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(21);

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),
/* 526 */
/***/ (function(module, exports, __webpack_require__) {

var baseOrderBy = __webpack_require__(432),
    isArray = __webpack_require__(14);

/**
 * This method is like `_.sortBy` except that it allows specifying the sort
 * orders of the iteratees to sort by. If `orders` is unspecified, all values
 * are sorted in ascending order. Otherwise, specify an order of "desc" for
 * descending or "asc" for ascending sort order of corresponding values.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @param {string[]} [orders] The sort orders of `iteratees`.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 34 },
 *   { 'user': 'fred',   'age': 40 },
 *   { 'user': 'barney', 'age': 36 }
 * ];
 *
 * // Sort by `user` in ascending order and by `age` in descending order.
 * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
 */
function orderBy(collection, iteratees, orders, guard) {
  if (collection == null) {
    return [];
  }
  if (!isArray(iteratees)) {
    iteratees = iteratees == null ? [] : [iteratees];
  }
  orders = guard ? undefined : orders;
  if (!isArray(orders)) {
    orders = orders == null ? [] : [orders];
  }
  return baseOrderBy(collection, iteratees, orders);
}

module.exports = orderBy;


/***/ }),
/* 527 */
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(433),
    basePropertyDeep = __webpack_require__(434),
    isKey = __webpack_require__(77),
    toKey = __webpack_require__(48);

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),
/* 528 */
/***/ (function(module, exports, __webpack_require__) {

var createCompounder = __webpack_require__(457),
    upperFirst = __webpack_require__(533);

/**
 * Converts `string` to
 * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
 *
 * @static
 * @memberOf _
 * @since 3.1.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the start cased string.
 * @example
 *
 * _.startCase('--foo-bar--');
 * // => 'Foo Bar'
 *
 * _.startCase('fooBar');
 * // => 'Foo Bar'
 *
 * _.startCase('__FOO_BAR__');
 * // => 'FOO BAR'
 */
var startCase = createCompounder(function(result, word, index) {
  return result + (index ? ' ' : '') + upperFirst(word);
});

module.exports = startCase;


/***/ }),
/* 529 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 530 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(17),
    isSymbol = __webpack_require__(35);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),
/* 531 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(30),
    keysIn = __webpack_require__(53);

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

module.exports = toPlainObject;


/***/ }),
/* 532 */
/***/ (function(module, exports, __webpack_require__) {

var baseUniq = __webpack_require__(442);

/**
 * Creates a duplicate-free version of an array, using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons, in which only the first occurrence of each element
 * is kept. The order of result values is determined by the order they occur
 * in the array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniq([2, 1, 2]);
 * // => [2, 1]
 */
function uniq(array) {
  return (array && array.length) ? baseUniq(array) : [];
}

module.exports = uniq;


/***/ }),
/* 533 */
/***/ (function(module, exports, __webpack_require__) {

var createCaseFirst = __webpack_require__(456);

/**
 * Converts the first character of `string` to upper case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.upperFirst('fred');
 * // => 'Fred'
 *
 * _.upperFirst('FRED');
 * // => 'FRED'
 */
var upperFirst = createCaseFirst('toUpperCase');

module.exports = upperFirst;


/***/ }),
/* 534 */
/***/ (function(module, exports, __webpack_require__) {

var asciiWords = __webpack_require__(408),
    hasUnicodeWord = __webpack_require__(467),
    toString = __webpack_require__(54),
    unicodeWords = __webpack_require__(508);

/**
 * Splits `string` into an array of its words.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * _.words('fred, barney, & pebbles');
 * // => ['fred', 'barney', 'pebbles']
 *
 * _.words('fred, barney, & pebbles', /[^, ]+/g);
 * // => ['fred', 'barney', '&', 'pebbles']
 */
function words(string, pattern, guard) {
  string = toString(string);
  pattern = guard ? undefined : pattern;

  if (pattern === undefined) {
    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
  }
  return string.match(pattern) || [];
}

module.exports = words;


/***/ }),
/* 535 */
/***/ (function(module, exports) {

module.exports = "<div class=\"q-grid-column-chooser\">\n\t<label>Columns:</label>\n\t<ul>\n\t\t<li ng-repeat=\"column in $columnChooser.columns\">\n\t\t\t<label>\n\t\t\t\t<input type=\"checkbox\"\n\t\t\t\t       ng-checked=\"$columnChooser.state(column)\"\n\t\t\t\t       ng-if=\"$columnChooser.toggle.canExecute(column)\"\n\t\t\t\t       ng-click=\"$columnChooser.toggle.execute(column)\"/>\n\t\t\t\t{{column.title}}:\n\t\t\t</label>\n\t\t\t<select ng-model=\"column.aggregation\"\n\t\t\t        ng-change=\"$columnChooser.toggleAggregation.execute(column)\">\n\t\t\t\t<option value=\"\" disabled>Aggregation</option>\n\t\t\t\t<option value=\"{{aggregation}}\"\n\t\t\t\t        ng-repeat=\"aggregation in $columnChooser.aggregations\"\n\t\t\t\t        ng-bind=\"aggregation\">\n\t\t\t\t</option>\n\t\t\t</select>\n\t\t</li>\n\t</ul>\n</div>"

/***/ }),
/* 536 */
/***/ (function(module, exports) {

module.exports = "<q-grid:popup id=\"q-grid-column-filter-popup-{{$columnFilter.key}}\">\n\t<q-grid:template for=\"trigger\">\n\t\t<md-button class=\"md-icon-button\" ng-click=\"$popup.open({width: 352, height: 652})\">\n\t\t\t<md-icon>filter_list</md-icon>\n\t\t</md-button>\n\t</q-grid:template>\n\t<q-grid:template for=\"body\" let=\"$columnFilter\">\n\t\t<q-grid:column-filter-panel key=\"$columnFilter.key\"\n\t\t\t\t\t\t\t\t\t\t\t on:submit=\"$popupBody.close()\"\n\t\t\t\t\t\t\t\t\t\t\t on:cancel=\"$popupBody.close()\">\n\t\t</q-grid:column-filter-panel>\n\t</q-grid:template>\n\t<q-grid:template for=\"head\" let=\"$columnFilter\">\n\t\t<span class=\"md-subhead\">{{$columnFilter.title}} Filter</span>\n\t</q-grid:template>\n</q-grid:popup>"

/***/ }),
/* 537 */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),
/* 538 */
/***/ (function(module, exports) {

module.exports = "<div class=\"q-grid-group-bar\"\n\t  q-grid:drop\n\t  q-grid:on-drop=\"$groupBar.drop.execute($event)\"\n\t  q-grid:can-drop=\"$groupBar.drop.canExecute($event)\">\n\t<label>Group By: </label>\n\t<ul>\n\t\t<li ng-repeat=\"group in $groupBar.groups track by $index\">\n\t\t\t<span ng-bind=\"$groupBar.title(group)\"></span>\n\t\t\t<button ng-disabled=\"!$groupBar.remove.canExecute()\"\n\t\t\t\t\t  ng-click=\"$groupBar.remove.execute(group)\">\n\t\t\t\tx\n\t\t\t</button>\n\t\t</li>\n\t\t<li>\n\t\t\t<select ng-disabled=\"!$groupBar.add.canExecute()\"\n\t\t\t\t\t  ng-model=\"$groupBar.newGroup\"\n\t\t\t\t\t  ng-change=\"$groupBar.add.execute($groupBar.newGroup)\">\n\t\t\t\t<option value=\"\" disabled>Add Group</option>\n\t\t\t\t<option value=\"{{column.key}}\"\n\t\t\t\t\t\t  ng-repeat=\"column in $groupBar.columns track by column.key\"\n\t\t\t\t\t\t  ng-bind=\"column.title\">\n\t\t\t\t</option>\n\t\t\t</select>\n\t\t</li>\n\t</ul>\n</div>"

/***/ }),
/* 539 */
/***/ (function(module, exports) {

module.exports = "<div class=\"q-grid-pager\">\n\t<label class=\"q-grid-page-size\">Rows per page:</label>\n\t<select class=\"q-grid-page-size\" ng-model=\"$pager.size\"\n\t\t\t  ng-options=\"size for size in $pager.sizeList\">\n\t</select>\n\t<label class=\"q-grid-page\">{{$pager.from}}-{{$pager.to}} of {{$pager.total}}</label>\n\t<button class=\"q-grid-prev-page\" ng-disabled=\"!$pager.prev.canExecute()\" ng-click=\"$pager.prev.execute();\">&lt;</button>\n\t<button class=\"q-grid-next-page\" ng-disabled=\"!$pager.next.canExecute()\" ng-click=\"$pager.next.execute();\">&gt;</button>\n</div>"

/***/ }),
/* 540 */
/***/ (function(module, exports) {

module.exports = "<div class=\"q-grid-pivot-bar\"\n\t  q-grid:drop\n\t  q-grid:on-drop=\"$pivotBar.drop.execute($event)\"\n\t  q-grid:can-drop=\"$pivotBar.drop.canExecute($event)\">\n\t<label>Pivot By: </label>\n\t<ul>\n\t\t<li ng-repeat=\"group in $pivotBar.groups track by $index\">\n\t\t\t<span ng-bind=\"$pivotBar.title(group)\"></span>\n\t\t\t<button ng-disabled=\"!$pivotBar.remove.canExecute()\"\n\t\t\t\t\t  ng-click=\"$pivotBar.remove.execute(group)\">\n\t\t\t\tx\n\t\t\t</button>\n\t\t</li>\n\t\t<li>\n\t\t\t<select ng-disabled=\"!$pivotBar.add.canExecute()\"\n\t\t\t\t\t  ng-model=\"$pivotBar.newGroup\"\n\t\t\t\t\t  ng-change=\"$pivotBar.add.execute($pivotBar.newGroup)\">\n\t\t\t\t<option value=\"\" disabled>Add Pivot</option>\n\t\t\t\t<option value=\"{{column.key}}\"\n\t\t\t\t\t\t  ng-repeat=\"column in $pivotBar.columns track by column.key\"\n\t\t\t\t\t\t  ng-bind=\"column.title\">\n\t\t\t\t</option>\n\t\t\t</select>\n\t\t</li>\n\t</ul>\n</div>"

/***/ }),
/* 541 */
/***/ (function(module, exports) {

module.exports = "<q-grid:popup-trigger>\n</q-grid:popup-trigger>"

/***/ }),
/* 542 */
/***/ (function(module, exports) {

module.exports = "<q-grid-core:box model=\"$popup.model\" class=\"q-grid-popup-panel\">\n\t<q-grid:popup-head model=\"$popup.model\" id=\"$popup.id\"></q-grid:popup-head>\n\t<q-grid:popup-body model=\"$popup.model\" id=\"$popup.id\"></q-grid:popup-body>\n</q-grid-core:box>"

/***/ }),
/* 543 */
/***/ (function(module, exports) {

module.exports = "<div class=\"q-grid-progress\">\n\t<span ng-if=\"$progress.isBusy\">Progress...</span>\n</div>"

/***/ }),
/* 544 */
/***/ (function(module, exports) {

module.exports = "<div class=\"q-grid-selection-bar\">\n\t<label>Unit</label>\n\t<select ng-model=\"$selectionBar.unit\" \n\t\t\t  ng-change=\"$selectionBar.toggleUnit.execute($selectionBar.unit)\"\n\t\t\t  ng-disabled=\"!$selectionBar.toggleUnit.canExecute()\">\n\t\t<option value=\"{{unit.key}}\"\n\t\t\t\t\tng-repeat=\"unit in $selectionBar.units\"\n\t\t\t\t\tng-bind=\"unit.title\">\n\t\t</option>\n\t</select>\n\t<label>Mode</label>\n\t<select ng-model=\"$selectionBar.mode\" \n\t\t\t  ng-change=\"$selectionBar.toggleMode.execute($selectionBar.mode)\"\n\t\t\t  ng-disabled=\"!$selectionBar.toggleMode.canExecute()\">\n\t\t<option value=\"{{mode.key}}\"\n\t\t\t\t\tng-repeat=\"mode in $selectionBar.modes\"\n\t\t\t\t\tng-bind=\"mode.title\">\n\t\t</option>\n\t</select>\n\t<label>Selection Count: </label><em>{{$selectionBar.count}}</em>\n</div>"

/***/ }),
/* 545 */
/***/ (function(module, exports) {

module.exports = "<div class=\"q-grid-sort-bar\"\n\t  q-grid:drop\n\t  q-grid:on-drop=\"$sortBar.drop.execute($event)\"\n\t  q-grid:can-drop=\"$sortBar.drop.canExecute($event)\">\n\t<label>Sort By: </label>\n\t<ul>\n\t\t<li ng-repeat=\"sort in $sortBar.sorts track by $index\">\n\t\t\t<span ng-bind=\"$sortBar.title(sort)\"></span>\n\t\t\t<button ng-disabled=\"!$sortBar.remove.canExecute()\"\n\t\t\t\t\t  ng-click=\"$sortBar.remove.execute(sort)\">\n\t\t\t\tx\n\t\t\t</button>\n\t\t</li>\n\t\t<li>\n\t\t\t<select ng-disabled=\"!$sortBar.add.canExecute()\"\n\t\t\t\t\t  ng-model=\"$sortBar.newSort\"\n\t\t\t\t\t  ng-change=\"$sortBar.add.execute($sortBar.newSort)\">\n\t\t\t\t<option value=\"\" disabled>Add Sort</option>\n\t\t\t\t<option value=\"{{column.key}}\"\n\t\t\t\t\t\t  ng-repeat=\"column in $sortBar.columns track by column.key\"\n\t\t\t\t\t\t  ng-bind=\"column.title\">\n\t\t\t\t</option>\n\t\t\t</select>\n\t\t</li>\n\t</ul>\n</div>"

/***/ }),
/* 546 */
/***/ (function(module, exports) {

module.exports = "<div class=\"q-grid-visibility\">\n\t<label>Visibility:</label>\n\t<ul>\n\t\t<li ng-repeat=\"item in $visibility.items\">\n\t\t\t<label>\n\t\t\t\t<input type=\"checkbox\"\n\t\t\t\t\t\t ng-checked=\"item.value\"\n\t\t\t\t\t\t ng-if=\"$visibility.toggle.canExecute(item)\"\n\t\t\t\t\t\t ng-click=\"$visibility.toggle.execute(item)\"/>\n\t\t\t\t{{item.key}}\n\t\t\t</label>\n\t\t\t<ul ng-if=\"item.children.length\">\n\t\t\t\t<li ng-repeat=\"child in item.children\">\n\t\t\t\t\t<label>\n\t\t\t\t\t\t<input type=\"checkbox\"\n\t\t\t\t\t\t\t\t ng-if=\"$visibility.toggle.canExecute(child)\"\n\t\t\t\t\t\t\t\t ng-checked=\"child.value\"\n\t\t\t\t\t\t\t\t ng-click=\"$visibility.toggle.execute(child)\"/>\n\t\t\t\t\t\t{{child.key}}\n\t\t\t\t\t</label>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</li>\n\t</ul>\n</div>"

/***/ }),
/* 547 */
/***/ (function(module, exports) {

module.exports = "<tr ng-repeat=\"$row in $view.body.rows track by $index\" q-grid-core:tr>\n\t<td ng-repeat=\"$column in $view.body.columns track by $column.model.key\" q-grid-core:td>\n\t</td>\n</tr>"

/***/ }),
/* 548 */
/***/ (function(module, exports) {

module.exports = "<tr vscroll-mark=\"top\" class=\"vscroll-mark\"></tr>\n<tr ng-repeat=\"$row in $view.body.rows | vscroll: $view.scroll.y track by $index\"\n\t vscroll-row=\"{{::$index}}\"\n\t q-grid-core:tr>\n\t<td ng-repeat=\"$column in $view.body.columns track by $column.model.key\"\n\t\t q-grid-core:td>\n\t</td>\n</tr>\n<tr vscroll-mark=\"bottom\" class=\"vscroll-mark\"></tr>"

/***/ }),
/* 549 */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\"\n\t\t  ng-click=\"$view.edit.cell.cancel.execute($cell, $event)\">\n\tNot implemented\n</button>"

/***/ }),
/* 550 */
/***/ (function(module, exports) {

module.exports = "{{$cell.value && $cell.value.join('; ')}}"

/***/ }),
/* 551 */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\"\n\t\t  ng-click=\"$view.edit.cell.cancel.execute($cell, $event)\">\n\tNot implemented\n</button>"

/***/ }),
/* 552 */
/***/ (function(module, exports) {

module.exports = "<input type=\"checkbox\"\n\t\t q-grid:focus\n\t\t ng-blur=\"$view.edit.cell.commit.execute($cell)\"\n\t\t ng-model=\"$view.edit.cell.value\"\t/>"

/***/ }),
/* 553 */
/***/ (function(module, exports) {

module.exports = "{{$cell.value ? '&#10003;': ''}}"

/***/ }),
/* 554 */
/***/ (function(module, exports) {

module.exports = "<input type=\"date\"\n\t\t q-grid:focus\n\t\t ng-blur=\"$view.edit.cell.commit.execute($cell)\"\n\t\t ng-model=\"$view.edit.cell.value\"\t/>"

/***/ }),
/* 555 */
/***/ (function(module, exports) {

module.exports = "{{$cell.value | date: $cell.column.format || 'yyyy/MM/dd'}}"

/***/ }),
/* 556 */
/***/ (function(module, exports) {

module.exports = "<select ng-model=\"$view.edit.cell.value\"\n\t\t  ng-blur=\"$view.edit.cell.commit.execute($cell)\">\n\t<option ng-repeat=\"option in $view.edit.cell.fetch.result\">{{option}}</option>\n</select>\n"

/***/ }),
/* 557 */
/***/ (function(module, exports) {

module.exports = "<a ng-href=\"mailto: {{$cell.value}}\" q-grid:cell-value></a>"

/***/ }),
/* 558 */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\"\n\t\t  ng-click=\"$view.edit.cell.cancel.execute($cell, $event)\">\n\tNot implemented\n</button>"

/***/ }),
/* 559 */
/***/ (function(module, exports) {

module.exports = "Attachments"

/***/ }),
/* 560 */
/***/ (function(module, exports) {

module.exports = "<div ng-style=\"{'padding-left': $view.group.offset($cell.row) + 'px'}\">\n\t<button ng-click=\"$view.group.toggleStatus.execute($cell.row)\"\n\t\t\t  ng-if=\"$view.group.toggleStatus.canExecute($cell.row)\">\n\t\t<span ng-bind=\"$view.group.status($cell.row) === 'expand' ? '-' : '+'\"></span>\n\t</button>\n\t<span>{{$view.group.value($cell.row)}}</span>\n\t<span ng-if=\"$view.group.toggleStatus.canExecute($cell.row)\">({{$view.group.count($cell.row)}})</span>\n</div>"

/***/ }),
/* 561 */
/***/ (function(module, exports) {

module.exports = "Group"

/***/ }),
/* 562 */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\"\n\t\t  ng-click=\"$view.edit.cell.cancel.execute($cell, $event)\">\n\tNot implemented\n</button>"

/***/ }),
/* 563 */
/***/ (function(module, exports) {

module.exports = "Image Preview"

/***/ }),
/* 564 */
/***/ (function(module, exports) {

module.exports = "<input type=\"number\"\n\t\t q-grid:focus\n\t\t ng-blur=\"$view.edit.cell.commit.execute($cell)\"\n\t\t ng-model=\"$view.edit.cell.value\"\t/>"

/***/ }),
/* 565 */
/***/ (function(module, exports) {

module.exports = "{{$cell.value | number: $cell.column.format}}"

/***/ }),
/* 566 */
/***/ (function(module, exports) {

module.exports = "<input type=\"password\"\n\t\t q-grid:focus\n\t\t ng-blur=\"$view.edit.cell.commit.execute($cell)\"\n\t\t ng-model=\"$view.edit.cell.value\"\t/>"

/***/ }),
/* 567 */
/***/ (function(module, exports) {

module.exports = "{{$cell.value ? '******' : ''}}"

/***/ }),
/* 568 */
/***/ (function(module, exports) {

module.exports = "{{$view.pivot.value($cell.row, $cell.column)}}"

/***/ }),
/* 569 */
/***/ (function(module, exports) {

module.exports = "{{$cell.column.title}}"

/***/ }),
/* 570 */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\"\n\t\t  ng-click=\"$view.edit.cell.cancel.execute($cell, $event)\">\n\tNot implemented\n</button>"

/***/ }),
/* 571 */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\"\n\t\t  ng-click=\"$view.edit.cell.enter.execute($cell, $event)\">\n\tEdit\n</button>"

/***/ }),
/* 572 */
/***/ (function(module, exports) {

module.exports = "&gt;"

/***/ }),
/* 573 */
/***/ (function(module, exports) {

module.exports = "{{$cell.rowIndex + 1}}"

/***/ }),
/* 574 */
/***/ (function(module, exports) {

module.exports = "#"

/***/ }),
/* 575 */
/***/ (function(module, exports) {

module.exports = "<label>\n\t<input type=\"checkbox\"\n\t\t\t q-grid:indeterminate=\"$view.selection.isIndeterminate($row)\"\n\t\t\t ng-checked=\"$view.selection.state($row)\"\n\t\t\t ng-click=\"$view.selection.toggle.execute($row)\"\n\t\t\t ng-disabled=\"!$view.selection.toggle.canExecute($row)\"/>\n</label>"

/***/ }),
/* 576 */
/***/ (function(module, exports) {

module.exports = "<label>\n\t<input type=\"checkbox\"\n\t\t\t q-grid:indeterminate=\"$view.selection.isIndeterminate()\"\n\t\t\t ng-checked=\"$view.selection.state()\"\n\t\t\t ng-click=\"$view.selection.toggle.execute()\"\n\t\t\t ng-disabled=\"!$view.selection.toggle.canExecute()\" />\n</label>"

/***/ }),
/* 577 */
/***/ (function(module, exports) {

module.exports = "<input type=\"time\"\n\t\t q-grid:focus\n\t\t ng-blur=\"$view.edit.cell.commit.execute($cell)\"\n\t\t ng-model=\"$view.edit.cell.value\" />"

/***/ }),
/* 578 */
/***/ (function(module, exports) {

module.exports = "{{$cell.value | date: $cell.column.format || 'h:mm a'}}"

/***/ }),
/* 579 */
/***/ (function(module, exports) {

module.exports = "<input type=\"url\"\n\t\t q-grid:focus\n\t\t ng-blur=\"$view.edit.cell.commit.execute($cell)\"\n\t\t ng-model=\"$view.edit.cell.value\"\t/>"

/***/ }),
/* 580 */
/***/ (function(module, exports) {

module.exports = "<a ng-href=\"{{$cell.value}}\" q-grid:cell-value></a>"

/***/ }),
/* 581 */
/***/ (function(module, exports) {

module.exports = "<tr ng-repeat=\"$row in $view.foot.rows track by $index\">\n\t<td ng-repeat=\"$column in $view.foot.columns track by $column.model.key\"\n\t\t rowspan=\"{{$column.rowspan}}\"\n\t\t colspan=\"{{$column.colspan}}\"\n\t\t q-grid-core:tf>\n\t</td>\n</tr>"

/***/ }),
/* 582 */
/***/ (function(module, exports) {

module.exports = "<q-grid-core:box ng-cloak\n\t\t\t\t\t  class=\"q-grid-box layout-column\">\n\t<q-grid-core:toolbar position=\"top\"\n\t\t\t\t\t\t\t\tclass=\"q-grid-toolbar q-grid-toolbar-top flex-auto\"\n\t\t\t\t\t\t\t\tng-if=\"$grid.visibility.toolbar.top\">\n\t</q-grid-core:toolbar>\n\t<div class=\"flex-100 layout-row\"\n\t\t  ng-class=\"{\n\t\t  \t'q-grid-with-left-pin': $grid.visibility.pin.left,\n\t\t  \t'q-grid-with-right-pin': $grid.visibility.pin.right\n\t\t  }\">\n\t\t<q-grid-core:toolbar position=\"left\"\n\t\t\t\t\t\t\t\t\tclass=\"q-grid-toolbar q-grid-toolbar-left flex-auto\"\n\t\t\t\t\t\t\t\t\tng-if=\"$grid.visibility.toolbar.left\">\n\t\t</q-grid-core:toolbar>\n\t\t<q-grid-core:view ng-if=\"$grid.visibility.pin.left\"\n\t\t\t\t\t\t\t\tclass=\"q-grid-view q-grid-view-left layout-column\"\n\t\t\t\t\t\t\t\tpin=\"left\"\n\t\t\t\t\t\t\t\tq-grid:markup=\"view\">\n\t\t</q-grid-core:view>\n\t\t<q-grid-core:view class=\"q-grid-view q-grid-view-center layout-column flex\"\n\t\t\t\t\t\t\t\tq-grid:markup=\"view\">\n\t\t</q-grid-core:view>\n\t\t<q-grid-core:view ng-if=\"$grid.visibility.pin.right\"\n\t\t\t\t\t\t\t\tpin=\"right\"\n\t\t\t\t\t\t\t\tclass=\"q-grid-view q-grid-view-right layout-column\"\n\t\t\t\t\t\t\t\tq-grid:markup=\"view\">\n\t\t</q-grid-core:view>\n\t\t<q-grid-core:toolbar position=\"right\"\n\t\t\t\t\t\t\t\t\tclass=\"q-grid-toolbar q-grid-toolbar-right flex-auto\"\n\t\t\t\t\t\t\t\t\tng-if=\"$grid.visibility.toolbar.right\">\n\t\t</q-grid-core:toolbar>\n\t</div>\n\t<q-grid-core:toolbar position=\"bottom\"\n\t\t\t\t\t\t\t\tclass=\"q-grid-toolbar q-grid-toolbar-bottom flex-auto\"\n\t\t\t\t\t\t\t\tng-if=\"$grid.visibility.toolbar.bottom\">\n\t</q-grid-core:toolbar>\n</q-grid-core:box>\n"

/***/ }),
/* 583 */
/***/ (function(module, exports) {

module.exports = "<tr ng-repeat=\"$row in $view.head.rows track by $index\">\n\t<th ng-repeat=\"$column in $row track by $column.model.key\"\n\t\t ng-mouseenter=\"$view.highlight.column.execute($column.model, true)\"\n\t\t ng-mouseleave=\"$view.highlight.column.execute($column.model, false)\"\n\t\t rowspan=\"{{$column.rowspan}}\"\n\t\t colspan=\"{{$column.colspan}}\"\n\t\t q-grid:drag=\"$view.head.transfer($column.model)\"\n\t\t q-grid:drop=\"$view.head.transfer($column.model)\"\n\t\t q-grid:on-drop=\"$view.head.drop.execute($event)\"\n\t\t q-grid:can-drop=\"$view.head.drop.canExecute($event)\"\n\t\t q-grid:can-drag=\"$view.head.drag.canExecute($event)\"\n\t\t q-grid:resizable=\"$view.head.resize.canExecute($event)\"\n\t\t q-grid:resize=\"$column.model.key\"\n\t\t q-grid:resize-path=\"columns\"\n\t\t q-grid:can-resize=\"$view.head.resize.canExecute($event)\"\n\t\t q-grid-core:th>\n\t</th>\n</tr>"

/***/ }),
/* 584 */
/***/ (function(module, exports) {

module.exports = "<q-grid:pager></q-grid:pager>"

/***/ }),
/* 585 */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),
/* 586 */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),
/* 587 */
/***/ (function(module, exports) {

module.exports = "<div class=\"q-grid-progress\">\n\t<q-grid:progress></q-grid:progress>\n</div>\n"

/***/ }),
/* 588 */
/***/ (function(module, exports) {

module.exports = "<table q-grid:markup=\"table\" tabindex=\"0\">\n\t<thead ng-if=\"$view.visibility.head\"\n\t\t\t ng-include=\"$view.templateUrl('head')\"\n\t\t\t q-grid-core:head\n\t\t\t q-grid:markup=\"head\"\n\t\t\t q-grid:animate=\"false\">\n\t</thead>\n\t<tbody ng-include=\"$view.templateUrl($view.scroll.mode === 'virtual' ? 'body.virtual' : 'body')\"\n\t\t\t ng-if=\"$view.visibility.body\"\n\t\t\t q-grid-core:body\n\t\t\t q-grid:markup=\"body\"\n\t\t\t q-grid:animate=\"false\"\n\t\t\t vscroll\n\t\t\t vscroll-port-y=\"$view.scroll.y\">\n\t</tbody>\n\t<tfoot ng-if=\"$view.visibility.foot\"\n\t\t\t ng-include=\"$view.templateUrl('foot')\"\n\t\t\t q-grid-core:foot\n\t\t\t q-grid:markup=\"foot\"\n\t\t\t q-grid:animate=\"false\">\n\t</tfoot>\n</table>"

/***/ }),
/* 589 */
/***/ (function(module, exports) {

(function (angular) {
    'use strict';

    vscrollService.$inject = ['$q'];
    vscrollCtrl.$inject = ['$scope', '$element', '$window'];
    vscrollPortYDirective.$inject = ['$rootScope', '$parse'];
    vscrollPortXDirective.$inject = ['$rootScope', '$parse'];

    angular.module('vscroll', [])
        .service('vscroll', vscrollService)
        .filter('vscroll', vscrollFilter)
        .directive('vscroll', vscrollDirective)
        .directive('vscrollPortY', vscrollPortYDirective)
        .directive('vscrollPortX', vscrollPortXDirective)
        .directive('vscrollRow', vscrollRowDirective)
        .directive('vscrollColumn', vscrollColumnDirective)
        .directive('vscrollMark', vscrollMarkDirective);

    var getHeight = function (element) {
        var height = element.offsetHeight,
            style = getComputedStyle(element);

        height += parseInt(style.marginTop) + parseInt(style.marginBottom);
        return height;
    };

    var getWidth = function (element) {
        var width = element.offsetWidth,
            style = getComputedStyle(element);

        width += parseInt(style.marginLeft) + parseInt(style.marginRight);
        return width;
    };

    var findIndexAt = function (items, value) {
        var length = items.length;
        var min = 0;
        var max = length - 1;
        while (min <= max) {
            var mid = (min + max) >> 1;
            var k = items[mid];
            if (k === value) {
                return mid;
            }
            else if (k < value) {
                min = mid + 1;
            }
            else {
                max = mid - 1;
            }
        }

        return min;
    };

    var invalidateFactory = function (items) {
        return function (offsets, index, count) {
            var threshold = items.length,
                cursor = offsets.length,
                diff = Math.min(count, threshold + index) - cursor;

            for (var i = threshold - diff; i < threshold; i++) {
                var value = items[i]();
                if (cursor === 0) {
                    offsets[cursor] = value;
                }
                else {
                    offsets[cursor] = offsets[cursor - 1] + value;
                }

                cursor++;
            }
        };
    };

    var getPosition = function (offsets, value) {
        var index = findIndexAt(offsets, value);
        if (index > 0) {
            return {
                value: value,
                index: index,
                offset: offsets[index - 1]
            };
        }

        return {
            value: value,
            index: 0,
            offset: 0
        };
    };

    var Event = function () {
        var events = [];

        this.on = function (f) {
            events.push(f);
            return function () {
                var index = events.indexOf(f);
                if (index >= 0) {
                    events.splice(index, 1);
                }
            }
        };

        this.emit = function (e) {
            var temp = angular.copy(events);
            for (var i = 0, length = temp.length; i < length; i++) {
                temp[i](e);
            }
        };
    };

    function vscrollPortCtrlFactory(layoutFactory) {
        return function ($element) {
            this.markup = {};

            var self = this,
                items = [],
                max = 0,
                offsets = [],
                position = {index: 0, offset: 0, value: 0},
                layout = layoutFactory(
                    $element,
                    this.markup,
                    function () {
                        return self.context
                    }),
                invalidate = layout.invalidateFactory(items),
                move = layout.move,
                getPosition = layout.getPosition,
                itemSize = layout.itemSize;

            var empty = function () {
                return 0;
            };

            this.update = function (count, view) {
                invalidate(offsets, position.index, count);
                position = getPosition(offsets, view);

                var offset = position.value - position.offset;
                if (offset >= 0) {
                    var size = itemSize();
                    max = size
                        ? Math.max(0, size * (count - self.context.settings.threshold))
                        : Math.max(max, position.offset);

                    console.log('!!MAX' + max);
                    var frame1 = Math.max(0, position.offset);
                    var frame2 = Math.max(0, max - frame1);
                    move(frame1, frame2);
                }

                return position.index;
            };

            this.invalidate = function (count, view) {
                max = 0;
                return self.update(count, view);
            };

            this.reset = function () {
                max = 0;
                //items = [];
                offsets = [];
                position = {index: 0, offset: 0, value: 0};
                move(0, 0);
            };

            this.setItem = function (index, element) {
                items[index] = element;
            };

            this.removeItem = function (index) {
                if (index === 0) {
                    items.shift();
                    return;
                }

                var length = items.length - 1;
                if (index === length) {
                    items.pop();
                    while (length-- && items[length] === empty) {
                        items.pop();
                    }
                    return;
                }

                // TODO: think how to avoid this
                items[index] = empty;
            };
        };
    }

    function vscrollService($q) {
        return function (settings) {
            var container = {
                count: 0,
                total: 0,
                position: 0,
                cursor: 0,
                page: 0,
                items: [],
                force: true,
                resetEvent: new Event(),
                updateEvent: new Event(),
                drawEvent: new Event(),

                apply: function (f, emit) {
                    f();
                    emit();
                },

                update: function (count, force) {
                    var self = this,
                        threshold = settings.threshold,
                        cursor = self.cursor,
                        prevPage = self.page,
                        page = Math.ceil((cursor + threshold) / threshold) - 1;


                    self.count = count;
                    var total = Math.max(self.total, count);
                    if (total !== self.total) {
                        self.total = total;
                        self.updateEvent.emit({
                            force: angular.isUndefined(force) ? !!settings.rowHeight : force
                        });
                    }

                    if (force || page > prevPage) {
                        self.page = page;

                        var deferred = $q.defer();
                        deferred.promise
                            .then(function (count) {
                                if (count !== self.total) {
                                    self.total = count;
                                    self.force = true;

                                    self.updateEvent.emit({
                                        force: angular.isUndefined(force) ? !!settings.rowHeight : force
                                    });
                                }
                            });

                        if (page === 0) {
                            settings.fetch(0, threshold, deferred);
                        }
                        else {
                            if (self.total < skip) {
                                deferred.resolve(self.total);
                            }
                            else {
                                var skip = (prevPage + 1) * threshold;
                                var take = (page - prevPage) * threshold;
                                settings.fetch(skip, take, deferred);
                            }
                        }

                    }
                },

                reset: function () {
                    this.count = 0;
                    this.position = 0;
                    this.cursor = 0;
                    this.page = 0;
                    this.items = [];

                    this.force = true;
                    this.resetEvent.emit();
                    this.update(0, true);
                }
            };

            settings = angular.extend({
                threshold: 64,
                fetch: function (skip, take, d) {
                    d.resolve(container.total);
                },
                rowHeight: 0,
                columnHeight: 0
            }, settings);

            container.update(0, true);

            return {
                settings: settings,
                container: container
            };
        };
    }

    function vscrollFilter() {
        var empty = [];

        return function (data, context) {
            if (!data) {
                return empty;
            }

            if (!context) {
                throw new Error('vscroll filter context is not set');
            }

            var settings = context.settings,
                container = context.container,
                view = container.items,
                position = container.position,
                cursor = container.cursor,
                threshold = settings.threshold,
                count = data.length;

            container.update(count);

            if (count) {
                if (container.force ||
                    (cursor <= count && cursor !== position)) {

                    var first = Math.max(cursor + Math.min(count - (cursor + threshold), 0), cursor),
                        last = Math.min(cursor + threshold, count);

                    container.position = cursor;
                    container.drawEvent.emit({
                        first: first,
                        last: last,
                        position: cursor
                    });

                    view.length = last - first;
                    for (var i = first, j = 0; i < last; i++, j++) {
                        view[j] = data[i];
                    }

                    container.force = false;
                }

                return view;
            }

            return empty;
        };
    }

    function vscrollPortLinkFactory(type, canApply, $rootScope, $parse) {
        function factory(scope, element, view, port) {
            element[0].tabIndex = 0;
            element.css('outline', 'none');
            element.css('overflow-anchor', 'none');

            return function (context) {
                var position = {top: 0, left: 0, height: 0, width: 0},
                    container = context.container;

                var scrollOff = view.scrollEvent.on(
                    function (e) {
                        if (canApply(e, position)) {
                            position = e;
                            if (container.count) {
                                container.apply(
                                    function () {
                                        container.cursor = port.update(container.count, e);
                                    },
                                    function () {
                                        if (container.cursor !== container.position) {
                                            if (!$rootScope.$$phase) {
                                                scope.$digest();
                                            }
                                        }
                                    });
                            }
                        }
                    });


                var resetOff = container.resetEvent.on(
                    function () {
                        port.reset();
                        view.reset();
                    });

                var updateOff = container.updateEvent.on(
                    function (e) {
                        if (e.force) {
                            container.cursor = port.invalidate(container.count, position);
                        }
                    });

                scope.$on('$destroy', function () {
                    delete port.markup;

                    scrollOff();
                    resetOff();
                    updateOff();
                });
            }
        }

        return function (scope, element, attrs, ctrls) {
            var view = ctrls[0],
                port = ctrls[1],
                init = factory(scope, element, view, port);

            var off = scope.$watch(
                function () {
                    // waiting: while context is set
                    return $parse(attrs[type])(scope);
                },
                function (context) {
                    if (context) {
                        init(context);
                        port.context = context;
                        off();
                    }
                });
        };
    }

    function vscrollCtrl($scope, $element, $window) {
        var self = this,
            content = $element[0],
            window = angular.element($window);

        this.scrollEvent = new Event();
        this.reset = function () {
            content.scrollTop = 0;
        };

        var onScroll =
            function () {
                self.scrollEvent.emit({
                    width: content.scrollWidth,
                    height: content.scrollHeight,
                    top: content.scrollTop,
                    left: content.scrollLeft
                });
            };

        var onResize =
            function () {
                self.reset();
                onScroll();
            };

        $element.bind('scroll', onScroll);

        window.bind('resize', onResize);

        $scope.$on('$destroy', function () {
            $element.unbind('scroll', onScroll);
            window.unbind('resize', onResize);
        });
    }

    function vscrollDirective() {
        return {
            restrict: 'A',
            controller: vscrollCtrl
        };
    }

    function vscrollPortYDirective($rootScope, $parse) {
        return {
            restrict: 'A',
            controller: ['$element', vscrollPortCtrlFactory(function (element, markup, context) {
                var move = function (pos, value) {
                    if (markup.hasOwnProperty(pos)) {
                        var mark = markup[pos];
                        console.log('!!!HEIGHT:' + value + 'px');
                        mark.css('height', value + 'px');
                    } else {
                        element.css('padding-' + pos, value + 'px');
                    }
                };

                var self = {
                    getPosition: function (offsets, view) {
                        var size = self.itemSize();
                        if (size) {
                            var index = Math.round(view.top / size);
                            console.log('!!SIZE' + size);
                            console.log('!!VIEW.TOP' + view.top);
                            console.log('!!index' + index);
                            console.log('!!offset' + size*index);
                            return {
                                value: view.top,
                                index: index,
                                offset: view.top
                            };
                        }

                        return getPosition(offsets, view.top);
                    },
                    move: function (top, bottom) {
                        move('top', top);
                        move('bottom', bottom);
                    },
                    itemSize: function () {
                        return context().settings.rowHeight;
                    },
                    invalidateFactory: function (items) {
                        var invalidate = invalidateFactory(items);
                        return function (offsets, index, count) {
                            var size = self.itemSize();
                            if (size) {
                                return;
                            }

                            return invalidate(offsets, index, count);
                        };
                    }
                };

                return self;
            })],
            require: ['^vscroll', 'vscrollPortY'],
            link: vscrollPortLinkFactory(
                'vscrollPortY',
                function (newValue, oldValue) {
                    return !oldValue || newValue.top !== oldValue.top;
                },
                $rootScope,
                $parse)
        };
    }

    function vscrollPortXDirective($rootScope, $parse) {
        return {
            restrict: 'A',
            controller: ['$element', vscrollPortCtrlFactory(function (element, markup, context) {
                var move = function (pos, value) {
                    if (markup.hasOwnProperty(pos)) {
                        var mark = markup[pos];
                        mark.css('width', value + 'px');
                    } else {
                        element.css('padding-' + pos, value + 'px');
                    }
                };

                var self = {
                    getPosition: function (offsets, view) {
                        var size = self.itemSize();
                        if (size) {
                            var index = Math.round(view.left / size);
                            return {
                                value: view.left,
                                index: index,
                                offset: size * index
                            };
                        }

                        return getPosition(offsets, view.top);
                    }, move: function (left, right) {
                        move('left', left);
                        move('right', right);
                    },
                    itemSize: function () {
                        return context().settings.columnWidth;
                    },
                    invalidateFactory: function (items) {
                        var invalidate = invalidateFactory(items);
                        return function (offsets, index, count) {
                            var size = self.itemSize();
                            if (size) {
                                return;
                            }

                            return invalidate(offsets, index, count);
                        };
                    }
                };

                return self;
            })],
            require: ['^vscroll', 'vscrollPortX'],
            link: vscrollPortLinkFactory(
                'vscrollPortX',
                function (newValue, oldValue) {
                    return !oldValue || newValue.left !== oldValue.left;
                },
                $rootScope,
                $parse)
        };
    }

    function vscrollRowDirective() {
        return {
            restrict: 'A',
            require: '^vscrollPortY',
            link: function (scope, element, attrs, port) {
                var index = parseInt(attrs.vscrollRow);
                if (isNaN(index)) {
                    throw new Error('Incorrect index "' + attrs.vscrollRow + '" for vscroll row');
                }

                var row = element[0],
                    size = function () {
                        return port.context.settings.rowHeight || getHeight(row);
                    };

                port.setItem(index, size);
                scope.$on('$destroy', function () {
                    port.removeItem(index);
                });
            }
        };
    }

    function vscrollColumnDirective() {
        return {
            restrict: 'A',
            require: '^vscrollPortX',
            link: function (scope, element, attrs, port) {
                var index = parseInt(attrs.vscrollColumn);
                if (isNaN(index)) {
                    throw new Error('Incorrect index "' + attrs.vscrollColumn + '" for vscroll column')
                }

                var column = element[0],
                    size = function () {
                        return port.context.settings.columnHeight || getWidth(column);
                    };

                port.setItem(index, size);
                scope.$on('$destroy', function () {
                    port.removeItem(index);
                });
            }
        };
    }

    function vscrollMarkDirective() {
        return {
            restrict: 'A',
            require: ['^?vscrollPortX', '^?vscrollPortY'],
            link: function (scope, element, attrs, ctrls) {
                var ports = ctrls.filter(function (ctrl) {
                    return ctrl;
                });

                angular.forEach(ports, function (port) {
                    port.markup[attrs.vscrollMark] = element;
                });

                scope.$on('$destroy', function () {
                    angular.forEach(ports, function (port) {
                        if (port.markup) {
                            port.markup[attrs.vscrollMark] = null;
                        }
                    });
                });
            }
        };
    }
})
(angular);

/***/ })
/******/ ]);