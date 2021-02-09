var VueTables =
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/bus.js":
/*!********************!*\
  !*** ./lib/bus.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _mitt = _interopRequireDefault(__webpack_require__(/*! mitt */ \"./node_modules/mitt/dist/mitt.es.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar _default = (0, _mitt[\"default\"])();\n\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://VueTables/./lib/bus.js?");

/***/ }),

/***/ "./lib/components/Observer.jsx":
/*!*************************************!*\
  !*** ./lib/components/Observer.jsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _vue = __webpack_require__(/*! vue */ \"vue\");\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nvar _default = {\n  emits: ['intersect'],\n  data: function data() {\n    return {\n      observer: null\n    };\n  },\n  render: function render() {\n    return (0, _vue.createVNode)(\"div\", {\n      \"class\": 'observer'\n    }, null);\n  },\n  mounted: function mounted() {\n    var _this = this;\n\n    this.observer = new IntersectionObserver(function (_ref) {\n      var _ref2 = _slicedToArray(_ref, 1),\n          entry = _ref2[0];\n\n      if (entry && entry.isIntersecting) {\n        _this.$emit(\"intersect\");\n      }\n    }, {\n      root: this.$refs.tablewrapper\n    });\n    this.observer.observe(this.$el);\n  },\n  unmounted: function unmounted() {\n    this.observer.disconnect();\n  }\n};\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://VueTables/./lib/components/Observer.jsx?");

/***/ }),

/***/ "./lib/components/VtChildRow.jsx":
/*!***************************************!*\
  !*** ./lib/components/VtChildRow.jsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _vue = __webpack_require__(/*! vue */ \"vue\");\n\nvar _RLChildRow = _interopRequireDefault(__webpack_require__(/*! ./renderless/RLChildRow */ \"./lib/components/renderless/RLChildRow.js\"));\n\nvar _omit = _interopRequireDefault(__webpack_require__(/*! ../helpers/omit */ \"./lib/helpers/omit.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar _default2 = {\n  name: 'VtChildRow',\n  props: ['row', 'index'],\n  components: {\n    RLChildRow: _RLChildRow[\"default\"]\n  },\n  render: function render() {\n    return (0, _vue.h)(_RLChildRow[\"default\"], {\n      row: this.row,\n      index: this.index\n    }, {\n      \"default\": function _default(props) {\n        return props.override ? (0, _vue.h)(props.override, {\n          props: (0, _omit[\"default\"])(props)\n        }) : (0, _vue.createVNode)(\"tr\", {\n          \"class\": 'VueTables__child-row ' + props[\"class\"]\n        }, [(0, _vue.createVNode)(\"td\", {\n          \"colspan\": props.colspan\n        }, [props.childRow])]);\n      }\n    });\n  }\n};\nexports[\"default\"] = _default2;\n\n//# sourceURL=webpack://VueTables/./lib/components/VtChildRow.jsx?");

/***/ }),

/***/ "./lib/components/VtChildRowToggler.jsx":
/*!**********************************************!*\
  !*** ./lib/components/VtChildRowToggler.jsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _vue = __webpack_require__(/*! vue */ \"vue\");\n\nvar _RLChildRowToggler = _interopRequireDefault(__webpack_require__(/*! ./renderless/RLChildRowToggler */ \"./lib/components/renderless/RLChildRowToggler.js\"));\n\nvar _omit = _interopRequireDefault(__webpack_require__(/*! ../helpers/omit */ \"./lib/helpers/omit.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar _default2 = {\n  name: 'VtChildRowToggler',\n  props: ['rowId'],\n  components: {\n    RLChildRowToggler: _RLChildRowToggler[\"default\"]\n  },\n  render: function render() {\n    return (0, _vue.h)(_RLChildRowToggler[\"default\"], {\n      rowId: this.rowId\n    }, {\n      \"default\": function _default(props) {\n        return props.override ? (0, _vue.h)(props.override, {\n          props: (0, _omit[\"default\"])(props)\n        }) : (0, _vue.createVNode)(\"td\", {\n          \"tabindex\": props.tabIndex,\n          \"onKeypress\": function onKeypress(e) {\n            if (e.key === 'Enter') {\n              props.toggle();\n            }\n          },\n          \"onClick\": props.toggle\n        }, [(0, _vue.createVNode)(\"span\", {\n          \"class\": \"VueTables__child-row-toggler \" + props[\"class\"]()\n        }, null)]);\n      }\n    });\n  }\n};\nexports[\"default\"] = _default2;\n\n//# sourceURL=webpack://VueTables/./lib/components/VtChildRowToggler.jsx?");

/***/ }),

/***/ "./lib/components/VtClientTable.jsx":
/*!******************************************!*\
  !*** ./lib/components/VtClientTable.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = _default2;\n\nvar _vue = __webpack_require__(/*! vue */ \"vue\");\n\nvar _VtPerPageSelector = _interopRequireDefault(__webpack_require__(/*! ./VtPerPageSelector */ \"./lib/components/VtPerPageSelector.jsx\"));\n\nvar _VtTable = _interopRequireDefault(__webpack_require__(/*! ./VtTable */ \"./lib/components/VtTable.jsx\"));\n\nvar _VtPagination = _interopRequireDefault(__webpack_require__(/*! ./VtPagination */ \"./lib/components/VtPagination.jsx\"));\n\nvar _VtDropdownPagination = _interopRequireDefault(__webpack_require__(/*! ./VtDropdownPagination */ \"./lib/components/VtDropdownPagination.jsx\"));\n\nvar _VtGenericFilter = _interopRequireDefault(__webpack_require__(/*! ./VtGenericFilter */ \"./lib/components/VtGenericFilter.jsx\"));\n\nvar _VtColumnsDropdown = _interopRequireDefault(__webpack_require__(/*! ./VtColumnsDropdown */ \"./lib/components/VtColumnsDropdown.jsx\"));\n\nvar _VtPaginationCount = _interopRequireDefault(__webpack_require__(/*! ./VtPaginationCount */ \"./lib/components/VtPaginationCount.jsx\"));\n\nvar _Observer = _interopRequireDefault(__webpack_require__(/*! ./Observer */ \"./lib/components/Observer.jsx\"));\n\nvar _emittedEvents = _interopRequireDefault(__webpack_require__(/*! ../helpers/emitted-events */ \"./lib/helpers/emitted-events.js\"));\n\nvar _omit = _interopRequireDefault(__webpack_require__(/*! ../helpers/omit */ \"./lib/helpers/omit.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _default2(RLClientTable) {\n  return {\n    name: 'VtClientTable',\n    emits: _emittedEvents[\"default\"],\n    components: {\n      VtPerPageSelector: _VtPerPageSelector[\"default\"],\n      VtTable: _VtTable[\"default\"],\n      VtPagination: _VtPagination[\"default\"],\n      VtDropdownPagination: _VtDropdownPagination[\"default\"],\n      VtColumnsDropdown: _VtColumnsDropdown[\"default\"],\n      VtGenericFilter: _VtGenericFilter[\"default\"],\n      RLClientTable: RLClientTable,\n      VtPaginationCount: _VtPaginationCount[\"default\"]\n    },\n    props: {\n      columns: {\n        type: Array,\n        required: true\n      },\n      data: {\n        type: Array,\n        required: true\n      },\n      name: {\n        type: String,\n        required: false\n      },\n      options: {\n        type: Object,\n        required: false,\n        \"default\": function _default() {\n          return {};\n        }\n      }\n    },\n    methods: {\n      setLoadingState: function setLoadingState(isLoading) {\n        this.$refs.table.loading = isLoading;\n      },\n      setFilter: function setFilter(val) {\n        this.$refs.table.setFilter(val);\n      },\n      setPage: function setPage(val) {\n        this.$refs.table.setPage(val);\n      },\n      setOrder: function setOrder(column, asc) {\n        this.$refs.table.setOrder(column, asc);\n      },\n      setLimit: function setLimit(limit) {\n        this.$refs.table.setLimit(limit);\n      },\n      toggleChildRow: function toggleChildRow(rowId) {\n        this.$refs.table.toggleChildRow(rowId);\n      },\n      getOpenChildRows: function getOpenChildRows() {\n        var rows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n        return this.$refs.table.getOpenChildRows(rows);\n      },\n      resetQuery: function resetQuery() {\n        this.$refs.table.resetQuery();\n      },\n      setCustomFilters: function setCustomFilters(params) {\n        var sendRequest = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n        return this.$refs.table.setCustomFilters(params, sendRequest);\n      },\n      downloadCsv: function downloadCsv() {\n        var filename = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'table.csv';\n        return this.$refs.table.downloadCsv(filename);\n      }\n    },\n    computed: {\n      filteredData: function filteredData() {\n        return this.$refs.table.filteredData;\n      },\n      allFilteredData: function allFilteredData() {\n        return this.$refs.table.allFilteredData;\n      },\n      filtersCount: function filtersCount() {\n        return this.$refs.table.filtersCount;\n      }\n    },\n    provide: function provide() {\n      var _this = this;\n\n      return {\n        slots: function slots() {\n          return _this.$slots;\n        }\n      };\n    },\n    model: {\n      prop: \"data\"\n    },\n    setup: function setup() {\n      var tablewrapper = (0, _vue.ref)(null);\n      return {\n        tablewrapper: tablewrapper\n      };\n    },\n    render: function render() {\n      return (0, _vue.h)(RLClientTable, {\n        data: this.data,\n        columns: this.columns,\n        name: this.name,\n        options: this.options,\n        ref: 'table'\n      }, {\n        \"default\": function _default(props) {\n          return props.override ? (0, _vue.h)(props.override, {\n            props: (0, _omit[\"default\"])(props, 'override')\n          }) : (0, _vue.createVNode)(\"div\", {\n            \"class\": \"VueTables VueTables--\" + props.source\n          }, [(0, _vue.createVNode)(\"div\", {\n            \"class\": props.theme.row\n          }, [(0, _vue.createVNode)(\"div\", {\n            \"class\": props.theme.column\n          }, [!props.opts.filterByColumn && props.opts.filterable ? (0, _vue.createVNode)(\"div\", {\n            \"class\": \"\".concat(props.theme.field, \" \").concat(props.theme.inline, \" \").concat(props.theme.left, \" VueTables__search\")\n          }, [props.slots.beforeFilter ? props.slots.beforeFilter() : '', (0, _vue.h)(_VtGenericFilter[\"default\"]), props.slots.afterFilter ? props.slots.afterFilter : '']) : '', props.slots.afterFilterWrapper ? props.slots.afterFilterWrapper() : '', (props.perPageValues.length > 1 || props.opts.alwaysShowPerPageSelect) && !props.opts.pagination.virtual ? (0, _vue.createVNode)(\"div\", {\n            \"class\": \"\".concat(props.theme.field, \" \").concat(props.theme.inline, \" \").concat(props.theme.right, \" VueTables__limit\")\n          }, [props.slots.beforeLimit ? props.slots.beforeLimit() : '', (0, _vue.h)(_VtPerPageSelector[\"default\"]), props.slots.afterLimit ? props.slots.afterLimit : '']) : '', props.opts.pagination.dropdown && props.totalPages > 1 ? (0, _vue.createVNode)(\"div\", {\n            \"class\": \"VueTables__pagination-wrapper\"\n          }, [(0, _vue.createVNode)(\"div\", {\n            \"class\": \"\".concat(props.theme.field, \" \").concat(props.theme.inline, \" \").concat(props.theme.right, \" VueTables__dropdown-pagination\")\n          }, [(0, _vue.h)(_VtDropdownPagination[\"default\"])])]) : '', props.opts.columnsDropdown ? (0, _vue.createVNode)(\"div\", {\n            \"class\": \"VueTables__columns-dropdown-wrapper \".concat(props.theme.right, \" \").concat(props.theme.dropdown.container)\n          }, [(0, _vue.h)(_VtColumnsDropdown[\"default\"])]) : ''])]), props.slots.beforeTable ? props.slots.beforeTable() : '', (0, _vue.createVNode)(\"div\", {\n            \"class\": \"table-responsive\",\n            \"ref\": \"tablewrapper\"\n          }, [(0, _vue.h)(_VtTable[\"default\"]), props.opts.pagination.virtual ? (0, _vue.h)(_Observer[\"default\"], {\n            onIntersect: function onIntersect() {\n              props.setPage(props.page + 1);\n            }\n          }) : '']), props.slots.afterTable ? props.slots.afterTable() : '', props.opts.pagination.virtual || !props.opts.pagination.show ? '' : (0, _vue.h)(_VtPagination[\"default\"]), props.opts.pagination.virtual || props.opts.pagination.dropdown ? (0, _vue.h)(_VtPaginationCount[\"default\"]) : '']);\n        }\n      });\n    }\n  };\n}\n\n//# sourceURL=webpack://VueTables/./lib/components/VtClientTable.jsx?");

/***/ }),

/***/ "./lib/components/VtColumnsDropdown.jsx":
/*!**********************************************!*\
  !*** ./lib/components/VtColumnsDropdown.jsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _vue = __webpack_require__(/*! vue */ \"vue\");\n\nvar _RLColumnsDropdown = _interopRequireDefault(__webpack_require__(/*! ./renderless/RLColumnsDropdown */ \"./lib/components/renderless/RLColumnsDropdown.js\"));\n\nvar _dropdownWrapper = _interopRequireDefault(__webpack_require__(/*! ./dropdown-wrapper */ \"./lib/components/dropdown-wrapper.jsx\"));\n\nvar _omit = _interopRequireDefault(__webpack_require__(/*! ../helpers/omit */ \"./lib/helpers/omit.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar _default2 = {\n  name: 'VtColumnsDropdown',\n  components: {\n    RLColumnsDropdown: _RLColumnsDropdown[\"default\"]\n  },\n  render: function render() {\n    return (0, _vue.h)(_RLColumnsDropdown[\"default\"], {}, {\n      \"default\": function _default(props) {\n        if (props.override) {\n          return (0, _vue.h)(props.override, {\n            props: (0, _omit[\"default\"])(props)\n          });\n        }\n\n        var content;\n        var cols = props.origColumns.map(function (column) {\n          content = (0, _vue.createVNode)(\"a\", {\n            \"class\": props.theme.dropdown.item,\n            \"href\": \"#\",\n            \"onClick\": function onClick() {\n              return props.toggleColumn(column);\n            }\n          }, [(0, _vue.createVNode)(\"input\", {\n            \"type\": \"checkbox\",\n            \"value\": column,\n            \"disabled\": props.onlyColumn(column),\n            \"checked\": props.columns.includes(column)\n          }, null), props.getHeading(column)]);\n          return props.theme.framework === 'bulma' ? content : (0, _vue.createVNode)(\"li\", null, [content]);\n        });\n        return (0, _vue.createVNode)(\"div\", {\n          \"class\": \"VueTables__columns-dropdown\"\n        }, [(0, _vue.createVNode)(\"button\", {\n          \"type\": \"button\",\n          \"class\": \"\".concat(props.theme.button, \" \").concat(props.theme.dropdown.trigger),\n          \"onClick\": props.toggleColumnsDropdown\n        }, [props.display('columns'), (0, _vue.createVNode)(\"span\", {\n          \"class\": \"\".concat(props.theme.icon, \" \").concat(props.theme.small)\n        }, [(0, _vue.createVNode)(\"i\", {\n          \"class\": props.theme.dropdown.caret\n        }, null)])]), (0, _dropdownWrapper[\"default\"])(_vue.h, props.theme.dropdown, cols, props.displayColumnsDropdown)]);\n      }\n    });\n  }\n};\nexports[\"default\"] = _default2;\n\n//# sourceURL=webpack://VueTables/./lib/components/VtColumnsDropdown.jsx?");

/***/ }),

/***/ "./lib/components/VtDateFilter.jsx":
/*!*****************************************!*\
  !*** ./lib/components/VtDateFilter.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _vue = __webpack_require__(/*! vue */ \"vue\");\n\nvar _RLDateFilter = _interopRequireDefault(__webpack_require__(/*! ./renderless/RLDateFilter */ \"./lib/components/renderless/RLDateFilter.js\"));\n\nvar _omit = _interopRequireDefault(__webpack_require__(/*! ../helpers/omit */ \"./lib/helpers/omit.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar _default2 = {\n  name: 'VtDateFilter',\n  inject: ['setFilterRef'],\n  props: ['column'],\n  components: {\n    RLDateFilter: _RLDateFilter[\"default\"]\n  },\n  setup: function setup() {\n    var filter = (0, _vue.ref)(null);\n    return {\n      filter: filter\n    };\n  },\n  mounted: function mounted() {\n    this.setFilterRef(this.column, this.$refs.filter);\n  },\n  render: function render() {\n    var _this = this;\n\n    return (0, _vue.h)(_RLDateFilter[\"default\"], {\n      column: this.column\n    }, {\n      \"default\": function _default(props) {\n        return props.overide ? (0, _vue.h)(props.override, {\n          props: (0, _omit[\"default\"])(props)\n        }) : (0, _vue.createVNode)(\"div\", {\n          \"class\": \"VueTables__date-filter\",\n          \"ref\": \"filter\",\n          \"id\": 'VueTables__' + _this.column + '-filter'\n        }, [(0, _vue.createVNode)(\"span\", {\n          \"class\": \"VueTables__filter-placeholder\"\n        }, [props.placeholder])]);\n      }\n    });\n  }\n};\nexports[\"default\"] = _default2;\n\n//# sourceURL=webpack://VueTables/./lib/components/VtDateFilter.jsx?");

/***/ }),

/***/ "./lib/components/VtDropdownPagination.jsx":
/*!*************************************************!*\
  !*** ./lib/components/VtDropdownPagination.jsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _vue = __webpack_require__(/*! vue */ \"vue\");\n\nvar _RLDropdownPagination = _interopRequireDefault(__webpack_require__(/*! ./renderless/RLDropdownPagination */ \"./lib/components/renderless/RLDropdownPagination.js\"));\n\nvar _omit = _interopRequireDefault(__webpack_require__(/*! ../helpers/omit */ \"./lib/helpers/omit.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar _default2 = {\n  name: 'VTDropdownPagination',\n  components: {\n    RLDropdownPagination: _RLDropdownPagination[\"default\"]\n  },\n  render: function render() {\n    return (0, _vue.h)(_RLDropdownPagination[\"default\"], {}, {\n      \"default\": function _default(props) {\n        var id = \"VueTables__dropdown-pagination_\" + props.name;\n        var pages = [];\n\n        for (var pag = 1; pag <= props.totalPages; pag++) {\n          pages.push((0, _vue.createVNode)(\"option\", {\n            \"value\": pag\n          }, [pag]));\n        }\n\n        return props.override ? (0, _vue.h)(props.override, {\n          props: (0, _omit[\"default\"])(props)\n        }) : (0, _vue.createVNode)(\"select\", {\n          \"class\": \"\".concat(props.theme.select, \" dropdown-pagination\"),\n          \"name\": \"page\",\n          \"ref\": \"page\",\n          \"value\": props.page,\n          \"on-change\": function onChange(e) {\n            return props.setPage(e.target.value);\n          },\n          \"id\": id\n        }, [pages]);\n      }\n    });\n  }\n};\nexports[\"default\"] = _default2;\n\n//# sourceURL=webpack://VueTables/./lib/components/VtDropdownPagination.jsx?");

/***/ }),

/***/ "./lib/components/VtFiltersRow.jsx":
/*!*****************************************!*\
  !*** ./lib/components/VtFiltersRow.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _vue = __webpack_require__(/*! vue */ \"vue\");\n\nvar _RLFiltersRow = _interopRequireDefault(__webpack_require__(/*! ./renderless/RLFiltersRow */ \"./lib/components/renderless/RLFiltersRow.js\"));\n\nvar _VtTextFilter = _interopRequireDefault(__webpack_require__(/*! ./VtTextFilter */ \"./lib/components/VtTextFilter.jsx\"));\n\nvar _VtListFilter = _interopRequireDefault(__webpack_require__(/*! ./VtListFilter */ \"./lib/components/VtListFilter.jsx\"));\n\nvar _VtDateFilter = _interopRequireDefault(__webpack_require__(/*! ./VtDateFilter */ \"./lib/components/VtDateFilter.jsx\"));\n\nvar _omit = _interopRequireDefault(__webpack_require__(/*! ../helpers/omit */ \"./lib/helpers/omit.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar _default2 = {\n  name: 'VtFiltersRow',\n  components: {\n    RLFiltersRow: _RLFiltersRow[\"default\"],\n    VtTextFilter: _VtTextFilter[\"default\"],\n    VtListFilter: _VtListFilter[\"default\"],\n    VtDateFilter: _VtDateFilter[\"default\"]\n  },\n  render: function render() {\n    return (0, _vue.h)(_RLFiltersRow[\"default\"], {}, {\n      \"default\": function _default(props) {\n        var filters = [];\n\n        if (props.opts.selectable.mode) {\n          filters.push((0, _vue.createVNode)(\"th\", {\n            \"class\": \"VueTables__select-row\"\n          }, null));\n        }\n\n        if (props.hasChildRow && props.opts.childRowTogglerFirst && props.opts.showChildRowToggler) filters.push((0, _vue.createVNode)(\"th\", null, null));\n        props.columns.map(function (column) {\n          var filter = '';\n\n          if (props.filterable(column)) {\n            filter = (0, _vue.h)(props.filterType(column), {\n              column: column\n            });\n          }\n\n          if (typeof props.slots[\"filter__\".concat(column)] !== 'undefined') {\n            filter = filter ? (0, _vue.createVNode)(\"div\", null, [filter, props.slots[\"filter__\".concat(column)]()]) : props.slots[\"filter__\".concat(column)]();\n          }\n\n          filters.push((0, _vue.createVNode)(\"th\", {\n            \"class\": props.columnClass(column)\n          }, [!!filter ? (0, _vue.createVNode)(\"div\", {\n            \"class\": [\"VueTables__column-filter\", 'VueTables__' + column + '-filter-wrapper']\n          }, [filter]) : '']));\n        });\n        if (props.hasChildRow && !props.opts.childRowTogglerFirst && props.opts.showChildRowToggler) filters.push((0, _vue.createVNode)(\"th\", null, null));\n        return props.override ? (0, _vue.h)(props.override, {\n          props: (0, _omit[\"default\"])(props)\n        }) : (0, _vue.createVNode)(\"tr\", {\n          \"class\": \"VueTables__filters-row\"\n        }, [filters]);\n      }\n    });\n  }\n};\nexports[\"default\"] = _default2;\n\n//# sourceURL=webpack://VueTables/./lib/components/VtFiltersRow.jsx?");

/***/ }),

/***/ "./lib/components/VtGenericFilter.jsx":
/*!********************************************!*\
  !*** ./lib/components/VtGenericFilter.jsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _vue = __webpack_require__(/*! vue */ \"vue\");\n\nvar _RLGenericFilter = _interopRequireDefault(__webpack_require__(/*! ./renderless/RLGenericFilter */ \"./lib/components/renderless/RLGenericFilter.js\"));\n\nvar _omit = _interopRequireDefault(__webpack_require__(/*! ../helpers/omit */ \"./lib/helpers/omit.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar _default2 = {\n  name: 'VtGenericFilter',\n  inject: ['setRef'],\n  components: {\n    RLGenericFilter: _RLGenericFilter[\"default\"]\n  },\n  setup: function setup() {\n    var filter = (0, _vue.ref)(null);\n    return {\n      filter: filter\n    };\n  },\n  mounted: function mounted() {\n    this.setRef('genericFilter', this.$refs.filter);\n  },\n  render: function render() {\n    return (0, _vue.h)(_RLGenericFilter[\"default\"], {}, {\n      \"default\": function _default(props) {\n        return props.override ? (0, _vue.h)(props.override, {\n          props: (0, _omit[\"default\"])(props)\n        }) : (0, _vue.createVNode)(\"div\", {\n          \"class\": \"VueTables__search-field\"\n        }, [(0, _vue.createVNode)(\"label\", {\n          \"for\": \"VueTables__search_\".concat(props.id),\n          \"class\": props.theme.label\n        }, [props.display(\"filter\")]), (0, _vue.createVNode)(\"input\", {\n          \"class\": \"VueTables__search__input \".concat(props.theme.input, \" \").concat(props.theme.small),\n          \"ref\": \"filter\",\n          \"type\": \"text\",\n          \"placeholder\": props.display('filterPlaceholder'),\n          \"onKeyup\": props.search(props.opts.debounce),\n          \"id\": \"VueTables__search_\".concat(props.id),\n          \"autocomplete\": \"off\"\n        }, null)]);\n      }\n    });\n  },\n  methods: {\n    focus: function focus() {\n      this.$refs.filter.focus();\n    },\n    blur: function blur() {\n      this.$refs.filter.blur();\n    }\n  }\n};\nexports[\"default\"] = _default2;\n\n//# sourceURL=webpack://VueTables/./lib/components/VtGenericFilter.jsx?");

/***/ }),

/***/ "./lib/components/VtGroupRow.jsx":
/*!***************************************!*\
  !*** ./lib/components/VtGroupRow.jsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _vue = __webpack_require__(/*! vue */ \"vue\");\n\nvar _RLGroupRow = _interopRequireDefault(__webpack_require__(/*! ./renderless/RLGroupRow */ \"./lib/components/renderless/RLGroupRow.js\"));\n\nvar _omit = _interopRequireDefault(__webpack_require__(/*! ../helpers/omit */ \"./lib/helpers/omit.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar _default2 = {\n  name: 'VtGroupRow',\n  components: {\n    RLGroupRow: _RLGroupRow[\"default\"]\n  },\n  props: ['row'],\n  render: function render() {\n    return (0, _vue.h)(_RLGroupRow[\"default\"], {\n      row: this.row\n    }, {\n      \"default\": function _default(props) {\n        return props.override ? (0, _vue.h)(props.override, {\n          props: (0, _omit[\"default\"])(props)\n        }) : (0, _vue.createVNode)(\"tr\", {\n          \"class\": props.theme.groupTr,\n          \"on-click\": props.toggleGroupDirection\n        }, [(0, _vue.createVNode)(\"td\", {\n          \"colspan\": props.colspan\n        }, [props.canToggleGroup ? (0, _vue.createVNode)(\"button\", {\n          \"class\": props.theme.button,\n          \"on-click\": props.toggleGroup.bind(this, props.groupValue)\n        }, [props.groupValue, (0, _vue.createVNode)(\"span\", {\n          \"class\": props.groupToggleIcon(props.groupValue)\n        }, null)]) : '', !props.canToggleGroup ? (0, _vue.createVNode)(\"span\", null, [props.groupValue]) : '', props.slot])]);\n      }\n    });\n  }\n};\nexports[\"default\"] = _default2;\n\n//# sourceURL=webpack://VueTables/./lib/components/VtGroupRow.jsx?");

/***/ }),

/***/ "./lib/components/VtHeadingsRow.jsx":
/*!******************************************!*\
  !*** ./lib/components/VtHeadingsRow.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _vue = __webpack_require__(/*! vue */ \"vue\");\n\nvar _RLHeadingsRow = _interopRequireDefault(__webpack_require__(/*! ./renderless/RLHeadingsRow */ \"./lib/components/renderless/RLHeadingsRow.js\"));\n\nvar _VtTableHeading = _interopRequireDefault(__webpack_require__(/*! ./VtTableHeading */ \"./lib/components/VtTableHeading.jsx\"));\n\nvar _omit = _interopRequireDefault(__webpack_require__(/*! ../helpers/omit */ \"./lib/helpers/omit.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar _default2 = {\n  name: 'VtHeadingsRow',\n  components: {\n    RLHeadingsRow: _RLHeadingsRow[\"default\"],\n    VtTableHeading: _VtTableHeading[\"default\"]\n  },\n  render: function render() {\n    return (0, _vue.h)(_RLHeadingsRow[\"default\"], {}, {\n      \"default\": function _default(props) {\n        if (props.override) {\n          return (0, _vue.h)(props.override, {\n            props: (0, _omit[\"default\"])(props)\n          });\n        }\n\n        var headings = [];\n\n        if (props.selectable) {\n          var checkbox = props.opts.selectable.mode === 'single' ? '' : (0, _vue.createVNode)(\"input\", {\n            \"id\": \"vt-toggle-all\",\n            \"type\": \"checkbox\",\n            \"onClick\": function onClick(e) {\n              return props.toggleAll(e);\n            }\n          }, null);\n          headings.push((0, _vue.createVNode)(\"th\", {\n            \"class\": \"VueTables__select-row VueTables__select-all \".concat(props.theme.th),\n            \"style\": props.opts.stickyHeader ? 'position:sticky; top:0; background:white;' : ''\n          }, [checkbox]));\n        }\n\n        if (props.childRowTogglerFirst) {\n          headings.push((0, _vue.createVNode)(\"th\", null, null));\n        }\n\n        props.columns.map(function (column) {\n          headings.push((0, _vue.h)(_VtTableHeading[\"default\"], {\n            column: column\n          }));\n        });\n\n        if (props.childRowTogglerLast) {\n          headings.push((0, _vue.createVNode)(\"th\", null, null));\n        }\n\n        return (0, _vue.createVNode)(\"tr\", null, [headings]);\n      }\n    });\n  }\n};\nexports[\"default\"] = _default2;\n\n//# sourceURL=webpack://VueTables/./lib/components/VtHeadingsRow.jsx?");

/***/ }),

/***/ "./lib/components/VtListFilter.jsx":
/*!*****************************************!*\
  !*** ./lib/components/VtListFilter.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _vue = __webpack_require__(/*! vue */ \"vue\");\n\nvar _RLListFilter = _interopRequireDefault(__webpack_require__(/*! ./renderless/RLListFilter */ \"./lib/components/renderless/RLListFilter.js\"));\n\nvar _omit = _interopRequireDefault(__webpack_require__(/*! ../helpers/omit */ \"./lib/helpers/omit.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar _default2 = {\n  name: 'VtListFilter',\n  inject: ['setFilterRef'],\n  props: ['column'],\n  components: {\n    RLListFilter: _RLListFilter[\"default\"]\n  },\n  setup: function setup() {\n    var filter = (0, _vue.ref)(null);\n    return {\n      filter: filter\n    };\n  },\n  mounted: function mounted() {\n    this.setFilterRef(this.column, this.$refs.filter);\n  },\n  render: function render() {\n    var _this = this;\n\n    return (0, _vue.h)(_RLListFilter[\"default\"], {\n      column: this.column\n    }, {\n      \"default\": function _default(props) {\n        var options = [];\n        var selected;\n        props.items.map(function (option) {\n          selected = String(option.id) === String(props.query[_this.column]) && props.query[_this.column] !== '';\n          options.push((0, _vue.createVNode)(\"option\", {\n            \"value\": option.id,\n            \"selected\": selected\n          }, [option.text]));\n        });\n        return props.override ? (0, _vue.h)(props.override, {\n          props: (0, _omit[\"default\"])(props)\n        }) : (0, _vue.createVNode)(\"div\", {\n          \"class\": \"VueTables__list-filter\",\n          \"ref\": \"filter\",\n          \"id\": 'VueTables__' + _this.column + '-filter'\n        }, [(0, _vue.createVNode)(\"select\", {\n          \"class\": props.theme.select,\n          \"onChange\": props.search(false),\n          \"name\": props.name,\n          \"value\": props.value\n        }, [(0, _vue.createVNode)(\"option\", {\n          \"value\": \"\"\n        }, [props.defaultOption]), options])]);\n      }\n    });\n  }\n};\nexports[\"default\"] = _default2;\n\n//# sourceURL=webpack://VueTables/./lib/components/VtListFilter.jsx?");

/***/ }),

/***/ "./lib/components/VtNoResultsRow.jsx":
/*!*******************************************!*\
  !*** ./lib/components/VtNoResultsRow.jsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _vue = __webpack_require__(/*! vue */ \"vue\");\n\nvar _RLNoResultsRow = _interopRequireDefault(__webpack_require__(/*! ./renderless/RLNoResultsRow */ \"./lib/components/renderless/RLNoResultsRow.js\"));\n\nvar _omit = _interopRequireDefault(__webpack_require__(/*! ../helpers/omit */ \"./lib/helpers/omit.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar _default2 = {\n  name: 'VtNoResultsRow',\n  components: {\n    RLNoResultsRow: _RLNoResultsRow[\"default\"]\n  },\n  render: function render() {\n    return (0, _vue.h)(_RLNoResultsRow[\"default\"], {}, {\n      \"default\": function _default(props) {\n        return props.override ? (0, _vue.h)(props.override, {\n          props: (0, _omit[\"default\"])(props)\n        }) : (0, _vue.createVNode)(\"tr\", {\n          \"class\": props[\"class\"]\n        }, [(0, _vue.createVNode)(\"td\", {\n          \"class\": \"text-center \".concat(props.tdClass),\n          \"tabindex\": props.tabIndex,\n          \"colspan\": props.colspan\n        }, [props.message])]);\n      }\n    });\n  }\n};\nexports[\"default\"] = _default2;\n\n//# sourceURL=webpack://VueTables/./lib/components/VtNoResultsRow.jsx?");

/***/ }),

/***/ "./lib/components/VtPagination.jsx":
/*!*****************************************!*\
  !*** ./lib/components/VtPagination.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _RLPagination = _interopRequireDefault(__webpack_require__(/*! ./renderless/RLPagination */ \"./lib/components/renderless/RLPagination.js\"));\n\nvar _vPagination = _interopRequireDefault(__webpack_require__(/*! v-pagination-3 */ \"./node_modules/v-pagination-3/dist/vue-pagination-2.min.js\"));\n\nvar _vue = __webpack_require__(/*! vue */ \"vue\");\n\nvar _omit = _interopRequireDefault(__webpack_require__(/*! ../helpers/omit */ \"./lib/helpers/omit.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar _default2 = {\n  name: 'VtPagination',\n  components: {\n    RLPagination: _RLPagination[\"default\"],\n    Pagination: _vPagination[\"default\"]\n  },\n  render: function render() {\n    return (0, _vue.h)(_RLPagination[\"default\"], {}, {\n      \"default\": function _default(props) {\n        return props.override ? (0, _vue.h)(props.override, {\n          props: (0, _omit[\"default\"])(props)\n        }) : (0, _vue.h)(_vPagination[\"default\"], {\n          options: props.optionsObj,\n          records: props.records,\n          perPage: props.perPage,\n          modelValue: props.page,\n          \"onUpdate:modelValue\": function onUpdateModelValue(page) {\n            return props.setPage(page);\n          }\n        });\n      }\n    });\n  }\n};\nexports[\"default\"] = _default2;\n\n//# sourceURL=webpack://VueTables/./lib/components/VtPagination.jsx?");

/***/ }),

/***/ "./lib/components/VtPaginationCount.jsx":
/*!**********************************************!*\
  !*** ./lib/components/VtPaginationCount.jsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _vue = __webpack_require__(/*! vue */ \"vue\");\n\nvar _RLPaginationCount = _interopRequireDefault(__webpack_require__(/*! ./renderless/RLPaginationCount */ \"./lib/components/renderless/RLPaginationCount.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar _default2 = {\n  name: 'VtPaginationCount',\n  components: {\n    RLPaginationCount: _RLPaginationCount[\"default\"]\n  },\n  render: function render() {\n    return (0, _vue.h)(_RLPaginationCount[\"default\"], {}, {\n      \"default\": function _default(props) {\n        return (0, _vue.withDirectives)((0, _vue.createVNode)(\"p\", null, [(0, _vue.createTextVNode)(\"Showing records \"), props.from, (0, _vue.createTextVNode)(\" to \"), props.to, (0, _vue.createTextVNode)(\" out of \"), props.total]), [[_vue.vShow, props.total]]);\n      }\n    });\n  }\n};\nexports[\"default\"] = _default2;\n\n//# sourceURL=webpack://VueTables/./lib/components/VtPaginationCount.jsx?");

/***/ }),

/***/ "./lib/components/VtPerPageSelector.jsx":
/*!**********************************************!*\
  !*** ./lib/components/VtPerPageSelector.jsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _vue = __webpack_require__(/*! vue */ \"vue\");\n\nvar _RLPerPageSelector = _interopRequireDefault(__webpack_require__(/*! ./renderless/RLPerPageSelector */ \"./lib/components/renderless/RLPerPageSelector.js\"));\n\nvar _omit = _interopRequireDefault(__webpack_require__(/*! ../helpers/omit */ \"./lib/helpers/omit.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar _default2 = {\n  name: 'VtPerPageSelector',\n  components: {\n    RLPerPageSelector: _RLPerPageSelector[\"default\"]\n  },\n  render: function render() {\n    return (0, _vue.h)(_RLPerPageSelector[\"default\"], {}, {\n      \"default\": function _default(props) {\n        return props.override ? (0, _vue.h)(props.override, {\n          props: (0, _omit[\"default\"])(props)\n        }) : (0, _vue.createVNode)(\"div\", {\n          \"class\": \"VueTables__limit-field\"\n        }, [(0, _vue.createVNode)(\"label\", {\n          \"class\": props.labelClass,\n          \"for\": \"VueTables__limit_\".concat(props.id)\n        }, [props.display('limit')]), (0, _vue.createVNode)(\"select\", {\n          \"id\": props.selectAttrs.id,\n          \"class\": props.selectAttrs[\"class\"],\n          \"onChange\": props.selectEvents.change\n        }, [props.perPageValues.map(function (val) {\n          return (0, _vue.createVNode)(\"option\", {\n            \"value\": val,\n            \"selected\": val === props.selectAttrs.value\n          }, [val]);\n        })])]);\n      }\n    });\n  }\n};\nexports[\"default\"] = _default2;\n\n//# sourceURL=webpack://VueTables/./lib/components/VtPerPageSelector.jsx?");

/***/ }),

/***/ "./lib/components/VtRowSelector.jsx":
/*!******************************************!*\
  !*** ./lib/components/VtRowSelector.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _vue = __webpack_require__(/*! vue */ \"vue\");\n\nvar _RLRowSelector = _interopRequireDefault(__webpack_require__(/*! ./renderless/RLRowSelector */ \"./lib/components/renderless/RLRowSelector.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar _default2 = {\n  name: 'VtRowSelector',\n  components: {\n    RLRowSelector: _RLRowSelector[\"default\"]\n  },\n  render: function render() {\n    return (0, _vue.h)(_RLRowSelector[\"default\"], {}, {\n      \"default\": function _default(props) {\n        return props.override ? (0, _vue.h)(props.override, {\n          attrs: {\n            props: props\n          }\n        }) : (0, _vue.createVNode)(\"td\", {\n          \"class\": \"VueTables__select-row VueTables__select-single \".concat(props.tdClass),\n          \"onClick\": function onClick(e) {\n            return props.toggleRow(e, props.row, props.index, props.disabled);\n          }\n        }, [(0, _vue.createVNode)(\"input\", {\n          \"type\": props.type,\n          \"name\": \"selected_row[]\",\n          \"class\": \"vt-select-row\",\n          \"disabled\": props.disabled,\n          \"checked\": props.selected\n        }, null)]);\n      }\n    });\n  }\n};\nexports[\"default\"] = _default2;\n\n//# sourceURL=webpack://VueTables/./lib/components/VtRowSelector.jsx?");

/***/ }),

/***/ "./lib/components/VtServerTable.jsx":
/*!******************************************!*\
  !*** ./lib/components/VtServerTable.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = _default2;\n\nvar _vue = __webpack_require__(/*! vue */ \"vue\");\n\nvar _VtPerPageSelector = _interopRequireDefault(__webpack_require__(/*! ./VtPerPageSelector */ \"./lib/components/VtPerPageSelector.jsx\"));\n\nvar _VtTable = _interopRequireDefault(__webpack_require__(/*! ./VtTable */ \"./lib/components/VtTable.jsx\"));\n\nvar _VtPagination = _interopRequireDefault(__webpack_require__(/*! ./VtPagination */ \"./lib/components/VtPagination.jsx\"));\n\nvar _VtDropdownPagination = _interopRequireDefault(__webpack_require__(/*! ./VtDropdownPagination */ \"./lib/components/VtDropdownPagination.jsx\"));\n\nvar _VtGenericFilter = _interopRequireDefault(__webpack_require__(/*! ./VtGenericFilter */ \"./lib/components/VtGenericFilter.jsx\"));\n\nvar _VtColumnsDropdown = _interopRequireDefault(__webpack_require__(/*! ./VtColumnsDropdown */ \"./lib/components/VtColumnsDropdown.jsx\"));\n\nvar _Observer = _interopRequireDefault(__webpack_require__(/*! ./Observer */ \"./lib/components/Observer.jsx\"));\n\nvar _VtPaginationCount = _interopRequireDefault(__webpack_require__(/*! ./VtPaginationCount */ \"./lib/components/VtPaginationCount.jsx\"));\n\nvar _omit = _interopRequireDefault(__webpack_require__(/*! ../helpers/omit */ \"./lib/helpers/omit.js\"));\n\nvar _emittedEvents = _interopRequireDefault(__webpack_require__(/*! ../helpers/emitted-events */ \"./lib/helpers/emitted-events.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _default2(RLServerTable) {\n  return {\n    name: 'VtServerTable',\n    emits: _emittedEvents[\"default\"],\n    components: {\n      VtPerPageSelector: _VtPerPageSelector[\"default\"],\n      VtTable: _VtTable[\"default\"],\n      VtPagination: _VtPagination[\"default\"],\n      VtDropdownPagination: _VtDropdownPagination[\"default\"],\n      VtColumnsDropdown: _VtColumnsDropdown[\"default\"],\n      VtGenericFilter: _VtGenericFilter[\"default\"],\n      VtPaginationCount: _VtPaginationCount[\"default\"],\n      Observer: _Observer[\"default\"]\n    },\n    props: {\n      columns: {\n        type: Array,\n        required: true\n      },\n      url: {\n        type: String,\n        required: false\n      },\n      name: {\n        type: String,\n        required: false\n      },\n      options: {\n        type: Object,\n        required: false,\n        \"default\": function _default() {\n          return {};\n        }\n      }\n    },\n    computed: {\n      customQueries: {\n        get: function get() {\n          return this.$refs.table.customQueries;\n        },\n        set: function set(val) {\n          this.$refs.table.customQueries = val;\n        }\n      },\n      data: function data() {\n        return this.$refs.table.tableData;\n      },\n      selectedRows: function selectedRows() {\n        return this.$refs.table.selectedRows;\n      }\n    },\n    methods: {\n      refresh: function refresh() {\n        this.$refs.table.refresh();\n      },\n      getData: function getData() {\n        return this.$refs.table.getData();\n      },\n      setFilter: function setFilter(val) {\n        this.$refs.table.setFilter(val);\n      },\n      setPage: function setPage(val) {\n        this.$refs.table.setPage(val);\n      },\n      setOrder: function setOrder(column, asc) {\n        this.$refs.table.setOrder(column, asc);\n      },\n      setLimit: function setLimit(limit) {\n        this.$refs.table.setLimit(limit);\n      },\n      toggleChildRow: function toggleChildRow(rowId) {\n        this.$refs.table.toggleChildRow(rowId);\n      },\n      getOpenChildRows: function getOpenChildRows() {\n        var rows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n        return this.$refs.table.getOpenChildRows(rows);\n      },\n      getResponseData: function getResponseData(response) {\n        return this.$refs.table.getResponseData(response);\n      },\n      resetQuery: function resetQuery() {\n        this.$refs.table.resetQuery();\n      },\n      resetSelectedRows: function resetSelectedRows() {\n        this.$refs.table.resetSelectedRows();\n      },\n      selectRow: function selectRow(id) {\n        return this.$refs.table.selectRow(id);\n      },\n      unselectRow: function unselectRow(id) {\n        return this.$refs.table.unselectRow(id);\n      },\n      selectRows: function selectRows(ids) {\n        return this.$refs.table.selectRows(ids);\n      },\n      unselectRows: function unselectRows(ids) {\n        return this.$refs.table.unselectRows(ids);\n      },\n      toggleRow: function toggleRow(id) {\n        return this.$refs.table.toggleRow(id);\n      },\n      selectAllRows: function selectAllRows() {\n        return this.$refs.table.selectAllRows();\n      },\n      getRequestParams: function getRequestParams() {\n        return this.$refs.table.getRequestParams();\n      },\n      setRequestParams: function setRequestParams(params) {\n        var sendRequest = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n        return this.$refs.table.setRequestParams(params, sendRequest);\n      },\n      setCustomFilters: function setCustomFilters(params) {\n        var sendRequest = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n        return this.$refs.table.setCustomFilters(params, sendRequest);\n      },\n      resetCustomFilters: __webpack_require__(/*! ../methods/reset-custom-filters */ \"./lib/methods/reset-custom-filters.js\")\n    },\n    provide: function provide() {\n      var _this = this;\n\n      return {\n        slots: function slots() {\n          return _this.$slots;\n        }\n      };\n    },\n    model: {\n      prop: \"data\"\n    },\n    setup: function setup() {\n      var tablewrapper = (0, _vue.ref)(null);\n      return {\n        tablewrapper: tablewrapper\n      };\n    },\n    render: function render() {\n      return (0, _vue.h)(RLServerTable, {\n        url: this.url,\n        columns: this.columns,\n        name: this.name,\n        options: this.options,\n        ref: 'table'\n      }, {\n        \"default\": function _default(props) {\n          return props.override ? (0, _vue.h)(props.override, {\n            props: (0, _omit[\"default\"])(props)\n          }) : (0, _vue.createVNode)(\"div\", {\n            \"class\": \"VueTables VueTables--\" + props.source\n          }, [(0, _vue.createVNode)(\"div\", {\n            \"class\": props.theme.row\n          }, [(0, _vue.createVNode)(\"div\", {\n            \"class\": props.theme.column\n          }, [!props.opts.filterByColumn && props.opts.filterable ? (0, _vue.createVNode)(\"div\", {\n            \"class\": \"\".concat(props.theme.field, \" \").concat(props.theme.inline, \" \").concat(props.theme.left, \" VueTables__search\")\n          }, [props.slots.beforeFilter ? props.slots.beforeFilter() : '', (0, _vue.h)(_VtGenericFilter[\"default\"]), props.slots.afterFilter ? props.slots.afterFilter() : '']) : '', props.slots.afterFilterWrapper ? props.slots.afterFilterWrapper() : '', (props.perPageValues.length > 1 || props.opts.alwaysShowPerPageSelect) && !props.opts.pagination.virtual ? (0, _vue.createVNode)(\"div\", {\n            \"class\": \"\".concat(props.theme.field, \" \").concat(props.theme.inline, \" \").concat(props.theme.right, \" VueTables__limit\")\n          }, [props.slots.beforeLimit ? props.slots.beforeLimit() : '', (0, _vue.h)(_VtPerPageSelector[\"default\"]), props.slots.afterLimit ? props.slots.afterLimit() : '']) : '', props.opts.pagination.dropdown && props.totalPages > 1 ? (0, _vue.createVNode)(\"div\", {\n            \"class\": \"VueTables__pagination-wrapper\"\n          }, [(0, _vue.createVNode)(\"div\", {\n            \"class\": \"\".concat(props.theme.field, \" \").concat(props.theme.inline, \" \").concat(props.theme.right, \" VueTables__dropdown-pagination\")\n          }, [(0, _vue.h)(_VtDropdownPagination[\"default\"])])]) : '', props.opts.columnsDropdown ? (0, _vue.createVNode)(\"div\", {\n            \"class\": \"VueTables__columns-dropdown-wrapper \".concat(props.theme.right, \" \").concat(props.theme.dropdown.container)\n          }, [(0, _vue.h)(_VtColumnsDropdown[\"default\"])]) : ''])]), props.slots.beforeTable ? props.slots.beforeTable() : '', (0, _vue.createVNode)(\"div\", {\n            \"class\": \"table-responsive\",\n            \"ref\": \"tablewrapper\",\n            \"style\": props.styles()\n          }, [(0, _vue.h)(_VtTable[\"default\"]), props.opts.pagination.virtual && !props.loading ? (0, _vue.h)(_Observer[\"default\"], {\n            onIntersect: function onIntersect() {\n              props.setPage(props.page + 1);\n            }\n          }) : '']), props.slots.afterTable ? props.slots.afterTable() : '', props.opts.pagination.virtual || !props.opts.pagination.show ? '' : (0, _vue.h)(_VtPagination[\"default\"]), props.opts.pagination.virtual || props.opts.pagination.dropdown ? (0, _vue.h)(_VtPaginationCount[\"default\"]) : '']);\n        }\n      });\n    }\n  };\n}\n\n//# sourceURL=webpack://VueTables/./lib/components/VtServerTable.jsx?");

/***/ }),

/***/ "./lib/components/VtSortControl.jsx":
/*!******************************************!*\
  !*** ./lib/components/VtSortControl.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _vue = __webpack_require__(/*! vue */ \"vue\");\n\nvar _RLSortControl = _interopRequireDefault(__webpack_require__(/*! ./renderless/RLSortControl */ \"./lib/components/renderless/RLSortControl.js\"));\n\nvar _omit = _interopRequireDefault(__webpack_require__(/*! ../helpers/omit */ \"./lib/helpers/omit.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar _default2 = {\n  name: 'VtSortControl',\n  components: {\n    RLSortControl: _RLSortControl[\"default\"]\n  },\n  render: function render() {\n    return (0, _vue.h)(_RLSortControl[\"default\"], {}, {\n      \"default\": function _default(props) {\n        return props.sortable ? props.override ? (0, _vue.h)(props.override, {\n          props: (0, _omit[\"default\"])(props)\n        }) : (0, _vue.createVNode)(\"span\", {\n          \"class\": props[\"class\"]\n        }, null) : '';\n      }\n    });\n  }\n};\nexports[\"default\"] = _default2;\n\n//# sourceURL=webpack://VueTables/./lib/components/VtSortControl.jsx?");

/***/ }),

/***/ "./lib/components/VtTable.jsx":
/*!************************************!*\
  !*** ./lib/components/VtTable.jsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _vue = __webpack_require__(/*! vue */ \"vue\");\n\nvar _RLTable = _interopRequireDefault(__webpack_require__(/*! ./renderless/RLTable */ \"./lib/components/renderless/RLTable.js\"));\n\nvar _VtTableHead = _interopRequireDefault(__webpack_require__(/*! ./VtTableHead */ \"./lib/components/VtTableHead.jsx\"));\n\nvar _VtTableBody = _interopRequireDefault(__webpack_require__(/*! ./VtTableBody */ \"./lib/components/VtTableBody.jsx\"));\n\nvar _omit = _interopRequireDefault(__webpack_require__(/*! ../helpers/omit */ \"./lib/helpers/omit.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar _default2 = {\n  name: 'VtTable',\n  inject: ['setRef'],\n  components: {\n    RLTable: _RLTable[\"default\"],\n    VtTableHead: _VtTableHead[\"default\"],\n    VtTableBody: _VtTableBody[\"default\"]\n  },\n  setup: function setup() {\n    var table = (0, _vue.ref)(null);\n    return {\n      table: table\n    };\n  },\n  mounted: function mounted() {\n    this.setRef('table', this.$refs.table);\n  },\n  render: function render() {\n    return (0, _vue.h)(_RLTable[\"default\"], {}, {\n      \"default\": function _default(props) {\n        var caption = props.caption ? (0, _vue.createVNode)(\"caption\", null, [props.caption]) : '';\n        return props.override ? (0, _vue.h)(props.override, {\n          props: (0, _omit[\"default\"])(props)\n        }) : (0, _vue.createVNode)(\"table\", {\n          \"ref\": \"table\",\n          \"class\": props.tableAttrs[\"class\"],\n          \"summary\": props.tableAttrs.summary\n        }, [caption, (0, _vue.h)(_VtTableHead[\"default\"]), props.slots.beforeBody ? props.slots.beforeBody() : '', (0, _vue.h)(_VtTableBody[\"default\"]), props.slots.afterBody ? props.slots.afterBody() : '']);\n      }\n    });\n  }\n};\nexports[\"default\"] = _default2;\n\n//# sourceURL=webpack://VueTables/./lib/components/VtTable.jsx?");

/***/ }),

/***/ "./lib/components/VtTableBody.jsx":
/*!****************************************!*\
  !*** ./lib/components/VtTableBody.jsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _vue = __webpack_require__(/*! vue */ \"vue\");\n\nvar _RLTableBody = _interopRequireDefault(__webpack_require__(/*! ./renderless/RLTableBody */ \"./lib/components/renderless/RLTableBody.js\"));\n\nvar _VtNoResultsRow = _interopRequireDefault(__webpack_require__(/*! ./VtNoResultsRow */ \"./lib/components/VtNoResultsRow.jsx\"));\n\nvar _VtTableRow = _interopRequireDefault(__webpack_require__(/*! ./VtTableRow */ \"./lib/components/VtTableRow.jsx\"));\n\nvar _VtGroupRow = _interopRequireDefault(__webpack_require__(/*! ./VtGroupRow */ \"./lib/components/VtGroupRow.jsx\"));\n\nvar _VtChildRow = _interopRequireDefault(__webpack_require__(/*! ./VtChildRow */ \"./lib/components/VtChildRow.jsx\"));\n\nvar _omit = _interopRequireDefault(__webpack_require__(/*! ../helpers/omit */ \"./lib/helpers/omit.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar _default2 = {\n  name: 'VtTableBody',\n  components: {\n    RLTableBody: _RLTableBody[\"default\"],\n    VtNoResultsRow: _VtNoResultsRow[\"default\"],\n    VtTableRow: _VtTableRow[\"default\"],\n    VtChildRow: _VtChildRow[\"default\"],\n    VtGroupRow: _VtGroupRow[\"default\"]\n  },\n  render: function render() {\n    return (0, _vue.h)(_RLTableBody[\"default\"], {}, {\n      \"default\": function _default(props) {\n        var rows = [];\n        var currentGroup;\n        props.data.forEach(function (row, index) {\n          if (props.groupBy && props.source === 'client' && row[props.groupBy] !== currentGroup) {\n            rows.push((0, _vue.h)(_VtGroupRow[\"default\"], {\n              row: row\n            }));\n            currentGroup = row[props.groupBy];\n          }\n\n          if (props.canToggleGroups && props.collapsedGroups.includes(currentGroup)) {\n            return;\n          }\n\n          rows.push((0, _vue.h)(_VtTableRow[\"default\"], {\n            row: row,\n            index: props.initialIndex + index + 1\n          }));\n\n          if (props.hasChildRow && props.openChildRows.includes(row[props.uniqueRowId])) {\n            rows.push((0, _vue.h)(_VtChildRow[\"default\"], {\n              row: row,\n              index: props.initialIndex + index + 1\n            }));\n          }\n        });\n        return props.override ? (0, _vue.h)(props.override, {\n          props: (0, _omit[\"default\"])(props)\n        }) : (0, _vue.createVNode)(\"tbody\", null, [props.slots.prependBody ? props.slots.prependBody() : '', props.data.length === 0 ? (0, _vue.h)(_VtNoResultsRow[\"default\"]) : '', rows, props.slots.appendBody ? props.slots.appendBody() : '']);\n      }\n    });\n  }\n};\nexports[\"default\"] = _default2;\n\n//# sourceURL=webpack://VueTables/./lib/components/VtTableBody.jsx?");

/***/ }),

/***/ "./lib/components/VtTableCell.jsx":
/*!****************************************!*\
  !*** ./lib/components/VtTableCell.jsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _vue = __webpack_require__(/*! vue */ \"vue\");\n\nvar _RLTableCell = _interopRequireDefault(__webpack_require__(/*! ./renderless/RLTableCell */ \"./lib/components/renderless/RLTableCell.js\"));\n\nvar _omit = _interopRequireDefault(__webpack_require__(/*! ../helpers/omit */ \"./lib/helpers/omit.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar _default2 = {\n  name: 'VtTableCell',\n  props: ['column'],\n  components: {\n    RLTableCell: _RLTableCell[\"default\"]\n  },\n  render: function render() {\n    return (0, _vue.h)(_RLTableCell[\"default\"], {\n      column: this.column\n    }, {\n      \"default\": function _default(props) {\n        return props.override ? (0, _vue.h)(props.override, {\n          props: (0, _omit[\"default\"])(props)\n        }) : (0, _vue.createVNode)(\"td\", {\n          \"tabindex\": props.tabIndex,\n          \"class\": props.classes\n        }, [props.content]);\n      }\n    });\n  }\n};\nexports[\"default\"] = _default2;\n\n//# sourceURL=webpack://VueTables/./lib/components/VtTableCell.jsx?");

/***/ }),

/***/ "./lib/components/VtTableHead.jsx":
/*!****************************************!*\
  !*** ./lib/components/VtTableHead.jsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _vue = __webpack_require__(/*! vue */ \"vue\");\n\nvar _RLTableHead = _interopRequireDefault(__webpack_require__(/*! ./renderless/RLTableHead */ \"./lib/components/renderless/RLTableHead.js\"));\n\nvar _VtHeadingsRow = _interopRequireDefault(__webpack_require__(/*! ./VtHeadingsRow */ \"./lib/components/VtHeadingsRow.jsx\"));\n\nvar _VtFiltersRow = _interopRequireDefault(__webpack_require__(/*! ./VtFiltersRow */ \"./lib/components/VtFiltersRow.jsx\"));\n\nvar _omit = _interopRequireDefault(__webpack_require__(/*! ../helpers/omit */ \"./lib/helpers/omit.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar _default2 = {\n  name: 'VtTableHead',\n  components: {\n    RLTableHead: _RLTableHead[\"default\"],\n    VtHeadingsRow: _VtHeadingsRow[\"default\"],\n    VtFiltersRow: _VtFiltersRow[\"default\"]\n  },\n  render: function render() {\n    return (0, _vue.h)(_RLTableHead[\"default\"], {}, {\n      \"default\": function _default(props) {\n        return props.override ? (0, _vue.h)(props.override, {\n          props: (0, _omit[\"default\"])(props)\n        }) : (0, _vue.createVNode)(\"thead\", null, [props.slots.prependHead ? props.slots.prependHead() : '', (0, _vue.h)(_VtHeadingsRow[\"default\"]), props.slots.beforeFilters ? props.slots.beforeFilters() : '', props.opts.filterByColumn && props.opts.filterable ? (0, _vue.h)(_VtFiltersRow[\"default\"]) : '', props.slots.afterFilters ? props.slots.afterFilters() : '']);\n      }\n    });\n  }\n};\nexports[\"default\"] = _default2;\n\n//# sourceURL=webpack://VueTables/./lib/components/VtTableHead.jsx?");

/***/ }),

/***/ "./lib/components/VtTableHeading.jsx":
/*!*******************************************!*\
  !*** ./lib/components/VtTableHeading.jsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _vue = __webpack_require__(/*! vue */ \"vue\");\n\nvar _RLTableHeading = _interopRequireDefault(__webpack_require__(/*! ./renderless/RLTableHeading */ \"./lib/components/renderless/RLTableHeading.js\"));\n\nvar _VtSortControl = _interopRequireDefault(__webpack_require__(/*! ./VtSortControl */ \"./lib/components/VtSortControl.jsx\"));\n\nvar _omit = _interopRequireDefault(__webpack_require__(/*! ../helpers/omit */ \"./lib/helpers/omit.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar _default2 = {\n  name: 'VtTableHeading',\n  props: ['column'],\n  components: {\n    RLTableHeading: _RLTableHeading[\"default\"],\n    VtSortControl: _VtSortControl[\"default\"]\n  },\n  render: function render() {\n    return (0, _vue.h)(_RLTableHeading[\"default\"], {\n      column: this.column\n    }, {\n      \"default\": function _default(props) {\n        return props.override ? (0, _vue.h)(props.override, {\n          props: (0, _omit[\"default\"])(props)\n        }) : (0, _vue.createVNode)(\"th\", {\n          \"onKeypress\": props.thEvents.keypress,\n          \"onClick\": props.thEvents.click,\n          \"class\": props.thAttrs[\"class\"],\n          \"title\": props.thAttrs.title,\n          \"tabindex\": props.thAttrs.tabIndex\n        }, [(0, _vue.createVNode)(\"span\", {\n          \"class\": \"VueTables__heading\",\n          \"title\": props.title\n        }, [props.heading]), (0, _vue.h)(_VtSortControl[\"default\"])]);\n      }\n    });\n  }\n};\nexports[\"default\"] = _default2;\n\n//# sourceURL=webpack://VueTables/./lib/components/VtTableHeading.jsx?");

/***/ }),

/***/ "./lib/components/VtTableRow.jsx":
/*!***************************************!*\
  !*** ./lib/components/VtTableRow.jsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _vue = __webpack_require__(/*! vue */ \"vue\");\n\nvar _RLTableRow = _interopRequireDefault(__webpack_require__(/*! ./renderless/RLTableRow */ \"./lib/components/renderless/RLTableRow.js\"));\n\nvar _VtTableCell = _interopRequireDefault(__webpack_require__(/*! ./VtTableCell */ \"./lib/components/VtTableCell.jsx\"));\n\nvar _VtChildRowToggler = _interopRequireDefault(__webpack_require__(/*! ./VtChildRowToggler */ \"./lib/components/VtChildRowToggler.jsx\"));\n\nvar _VtRowSelector = _interopRequireDefault(__webpack_require__(/*! ./VtRowSelector */ \"./lib/components/VtRowSelector.jsx\"));\n\nvar _omit = _interopRequireDefault(__webpack_require__(/*! ../helpers/omit */ \"./lib/helpers/omit.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar _default2 = {\n  name: 'VtTableRow',\n  props: ['row', 'index'],\n  components: {\n    RLTableRow: _RLTableRow[\"default\"],\n    VtTableCell: _VtTableCell[\"default\"],\n    VtChildRowToggler: _VtChildRowToggler[\"default\"],\n    VtRowSelector: _VtRowSelector[\"default\"]\n  },\n  render: function render() {\n    return (0, _vue.h)(_RLTableRow[\"default\"], {\n      row: this.row,\n      index: this.index\n    }, {\n      \"default\": function _default(props) {\n        return props.override ? (0, _vue.h)(props.override, {\n          props: (0, _omit[\"default\"])(props)\n        }) : (0, _vue.createVNode)(\"tr\", (0, _vue.mergeProps)({\n          \"class\": \"VueTables__row \" + props.rowAttrs[\"class\"]\n        }, props.rowAttrs.attrs, {\n          \"on-click\": props.rowEvents.click\n        }), [props.selectable ? (0, _vue.h)(_VtRowSelector[\"default\"]) : '', props.childRowTogglerFirst ? (0, _vue.h)(_VtChildRowToggler[\"default\"], {\n          rowId: props.rowId\n        }) : '', props.columns.map(function (column) {\n          return (0, _vue.h)(_VtTableCell[\"default\"], {\n            column: column\n          });\n        }), props.childRowTogglerLast ? (0, _vue.h)(_VtChildRowToggler[\"default\"], {\n          rowId: props.rowId\n        }) : '']);\n      }\n    });\n  }\n};\nexports[\"default\"] = _default2;\n\n//# sourceURL=webpack://VueTables/./lib/components/VtTableRow.jsx?");

/***/ }),

/***/ "./lib/components/VtTextFilter.jsx":
/*!*****************************************!*\
  !*** ./lib/components/VtTextFilter.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _vue = __webpack_require__(/*! vue */ \"vue\");\n\nvar _RLTextFilter = _interopRequireDefault(__webpack_require__(/*! ./renderless/RLTextFilter */ \"./lib/components/renderless/RLTextFilter.js\"));\n\nvar _omit = _interopRequireDefault(__webpack_require__(/*! ../helpers/omit */ \"./lib/helpers/omit.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar _default2 = {\n  name: 'VtTextFilter',\n  inject: ['setFilterRef'],\n  props: {\n    column: {\n      required: true,\n      type: String\n    }\n  },\n  components: {\n    RLTextFilter: _RLTextFilter[\"default\"]\n  },\n  setup: function setup() {\n    var filter = (0, _vue.ref)(null);\n    return {\n      filter: filter\n    };\n  },\n  mounted: function mounted() {\n    this.setFilterRef(this.column, this.$refs.filter);\n  },\n  render: function render() {\n    var _this = this;\n\n    return (0, _vue.h)(_RLTextFilter[\"default\"], {\n      column: this.column\n    }, {\n      \"default\": function _default(props) {\n        return props.override ? (0, _vue.h)(props.override, {\n          props: (0, _omit[\"default\"])(props)\n        }) : (0, _vue.createVNode)(\"input\", {\n          \"ref\": \"filter\",\n          \"onKeyup\": props.search(props.debounce),\n          \"class\": props.theme.input,\n          \"name\": props.name,\n          \"type\": \"text\",\n          \"placeholder\": props.display('filterBy', {\n            column: props.getHeading(_this.column)\n          }),\n          \"autocomplete\": \"off\"\n        }, null);\n      }\n    });\n  }\n};\nexports[\"default\"] = _default2;\n\n//# sourceURL=webpack://VueTables/./lib/components/VtTextFilter.jsx?");

/***/ }),

/***/ "./lib/components/dropdown-wrapper.jsx":
/*!*********************************************!*\
  !*** ./lib/components/dropdown-wrapper.jsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _vue = __webpack_require__(/*! vue */ \"vue\");\n\nmodule.exports = function (h, classes, columns, display) {\n  if (classes.framework === 'bulma') {\n    return (0, _vue.createVNode)(\"div\", {\n      \"class\": classes.menu,\n      \"style\": display ? 'display:block' : 'display:none'\n    }, [(0, _vue.createVNode)(\"div\", {\n      \"class\": classes.content\n    }, [columns])]);\n  }\n\n  if (classes.framework === 'bootstrap4') {\n    return (0, _vue.createVNode)(\"div\", {\n      \"class\": classes.menu,\n      \"style\": display ? 'display:block' : 'display:none'\n    }, [columns]);\n  }\n\n  return (0, _vue.createVNode)(\"ul\", {\n    \"class\": classes.menu,\n    \"style\": display ? 'display:block' : 'display:none'\n  }, [columns]);\n};\n\n//# sourceURL=webpack://VueTables/./lib/components/dropdown-wrapper.jsx?");

/***/ }),

/***/ "./lib/components/renderless/RLChildRow.js":
/*!*************************************************!*\
  !*** ./lib/components/renderless/RLChildRow.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\nvar _default = {\n  name: 'RLChildRow',\n  props: ['row', 'index'],\n  inject: ['colspan', 'getChildRowTemplate', 'opts', 'slots', 'componentsOverride'],\n  render: function render() {\n    return this.$slots[\"default\"]({\n      opts: this.opts(),\n      childRow: this.getChildRowTemplate(this.row, this.index, this.slots()['child_row']),\n      colspan: this.colspan(),\n      \"class\": this.opts().rowClassCallback ? this.opts().rowClassCallback(this.row) : '',\n      override: this.componentsOverride.childRow\n    });\n  }\n};\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://VueTables/./lib/components/renderless/RLChildRow.js?");

/***/ }),

/***/ "./lib/components/renderless/RLChildRowToggler.js":
/*!********************************************************!*\
  !*** ./lib/components/renderless/RLChildRowToggler.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\nvar _default = {\n  name: 'RLChildRowToggler',\n  props: ['rowId'],\n  inject: ['toggleChildRow', 'opts', 'childRowTogglerClass', 'componentsOverride', 'tabIndex'],\n  render: function render(h) {\n    return this.$slots[\"default\"]({\n      opts: this.opts(),\n      \"class\": this.childRowTogglerClass.bind(this, this.rowId),\n      toggle: this.toggleChildRow.bind(this, this.rowId),\n      override: this.componentsOverride.childRowToggler,\n      tabIndex: this.tabIndex()\n    });\n  }\n};\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://VueTables/./lib/components/renderless/RLChildRowToggler.js?");

/***/ }),

/***/ "./lib/components/renderless/RLColumnsDropdown.js":
/*!********************************************************!*\
  !*** ./lib/components/renderless/RLColumnsDropdown.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\nvar _default = {\n  name: 'RLColumnsDropdown',\n  inject: ['getHeading', 'display', 'opts', 'theme', 'allColumns', 'onlyColumn', 'toggleColumn', 'toggleColumnsDropdown', 'displayColumnsDropdown', 'origColumns', 'componentsOverride'],\n  render: function render() {\n    return this.$slots[\"default\"]({\n      opts: this.opts(),\n      theme: this.theme,\n      getHeading: this.getHeading,\n      display: this.display,\n      onlyColumn: this.onlyColumn,\n      toggleColumn: this.toggleColumn,\n      toggleColumnsDropdown: this.toggleColumnsDropdown,\n      displayColumnsDropdown: this.displayColumnsDropdown(),\n      origColumns: this.origColumns,\n      columns: this.allColumns(),\n      override: this.componentsOverride.columnsDropdown\n    });\n  }\n};\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://VueTables/./lib/components/renderless/RLColumnsDropdown.js?");

/***/ }),

/***/ "./lib/components/renderless/RLDataTable.js":
/*!**************************************************!*\
  !*** ./lib/components/renderless/RLDataTable.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  var _this = this;\n\n  return this.$slots[\"default\"]({\n    source: this.source,\n    theme: this.theme,\n    opts: this.opts,\n    perPageValues: this.perPageValues,\n    totalPages: this.totalPages,\n    slots: this.$parent.$slots,\n    page: this.page,\n    setPage: this.setPage,\n    virtualPagination: this.opts.pagination.virtual,\n    loading: this.loading,\n    override: this.componentsOverride.dataTable,\n    styles: function styles() {\n      var cls = [];\n\n      if (_this.opts.pagination.virtual || _this.opts.stickyHeader) {\n        cls.push('overflow-x:unset');\n      }\n\n      if (_this.opts.pagination.virtual) {\n        cls.push('overflow-y:scroll');\n      }\n\n      return cls.join(';');\n    }\n  });\n};\n\n//# sourceURL=webpack://VueTables/./lib/components/renderless/RLDataTable.js?");

/***/ }),

/***/ "./lib/components/renderless/RLDateFilter.js":
/*!***************************************************!*\
  !*** ./lib/components/renderless/RLDateFilter.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\nvar _default = {\n  name: 'RLDateFilter',\n  inject: ['getHeading', 'display', 'componentsOverride', 'opts'],\n  props: ['column'],\n  render: function render(h) {\n    return this.$slots[\"default\"]({\n      opts: this.opts(),\n      column: this.column,\n      placeholder: this.display('filterBy', {\n        column: this.getHeading(this.column)\n      }),\n      display: this.display,\n      override: this.componentsOverride.dateFilter\n    });\n  }\n};\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://VueTables/./lib/components/renderless/RLDateFilter.js?");

/***/ }),

/***/ "./lib/components/renderless/RLDropdownPagination.js":
/*!***********************************************************!*\
  !*** ./lib/components/renderless/RLDropdownPagination.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\nvar _default = {\n  name: \"RLDropdownPagination\",\n  inject: ['limit', 'count', 'theme', 'page', 'setPage', 'totalPages', 'componentsOverride', 'id', 'opts'],\n  render: function render() {\n    return this.$slots[\"default\"]({\n      opts: this.opts(),\n      name: this.id,\n      setPage: this.setPage,\n      page: this.page(),\n      records: this.count(),\n      perPage: parseInt(this.limit()),\n      theme: this.theme,\n      totalPages: this.totalPages(),\n      override: this.componentsOverride.dropdownPagination\n    });\n  }\n};\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://VueTables/./lib/components/renderless/RLDropdownPagination.js?");

/***/ }),

/***/ "./lib/components/renderless/RLFiltersRow.js":
/*!***************************************************!*\
  !*** ./lib/components/renderless/RLFiltersRow.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\nvar _default = {\n  name: 'RLFiltersRow',\n  inject: ['opts', 'theme', 'allColumns', 'filterable', 'filterType', 'slots', 'columnClass', 'hasChildRow', 'componentsOverride'],\n  render: function render() {\n    return this.$slots[\"default\"]({\n      opts: this.opts(),\n      columns: this.allColumns(),\n      filterable: this.filterable,\n      filterType: this.filterType,\n      slots: this.slots(),\n      columnClass: this.columnClass,\n      hasChildRow: this.hasChildRow(),\n      override: this.componentsOverride.filtersRow\n    });\n  }\n};\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://VueTables/./lib/components/renderless/RLFiltersRow.js?");

/***/ }),

/***/ "./lib/components/renderless/RLGenericFilter.js":
/*!******************************************************!*\
  !*** ./lib/components/renderless/RLGenericFilter.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\nvar _default = {\n  name: 'RLGenericFilter',\n  inject: ['opts', 'theme', 'source', 'search', 'query', 'display', 'id', 'componentsOverride'],\n  render: function render() {\n    return this.$slots[\"default\"]({\n      opts: this.opts(),\n      theme: this.theme,\n      search: this.search,\n      query: this.query(),\n      display: this.display,\n      id: this.id,\n      override: this.componentsOverride.genericFilter\n    });\n  }\n};\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://VueTables/./lib/components/renderless/RLGenericFilter.js?");

/***/ }),

/***/ "./lib/components/renderless/RLGroupRow.js":
/*!*************************************************!*\
  !*** ./lib/components/renderless/RLGroupRow.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\nvar _default = {\n  name: 'RLGroupRow',\n  props: ['row'],\n  inject: ['colspan', 'opts', 'theme', 'toggleGroupDirection', 'toggleGroup', 'groupToggleIcon', 'getGroupSlot', 'componentsOverride'],\n  render: function render() {\n    return this.$slots[\"default\"]({\n      opts: this.opts(),\n      theme: this.theme,\n      colspan: this.colspan(),\n      toggleGroupDirection: this.toggleGroupDirection,\n      canToggleGroup: this.opts().toggleGroups,\n      toggleGroup: this.toggleGroup,\n      groupValue: this.row[this.opts().groupBy],\n      groupToggleIcon: this.groupToggleIcon,\n      slot: this.getGroupSlot(this.row[this.opts().groupBy]),\n      override: this.componentsOverride.groupRow\n    });\n  }\n};\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://VueTables/./lib/components/renderless/RLGroupRow.js?");

/***/ }),

/***/ "./lib/components/renderless/RLHeadingsRow.js":
/*!****************************************************!*\
  !*** ./lib/components/renderless/RLHeadingsRow.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\nvar _default = {\n  name: 'RLHeadingRow',\n  inject: ['opts', 'theme', 'hasChildRow', 'allColumns', 'toggleAllRows', 'componentsOverride'],\n  render: function render() {\n    return this.$slots[\"default\"]({\n      override: this.componentsOverride.headingsRow,\n      theme: this.theme,\n      opts: this.opts(),\n      columns: this.allColumns(),\n      selectable: this.opts().selectable.mode && !this.opts().selectable.programmatic,\n      toggleAll: this.toggleAllRows,\n      hasChildRow: this.hasChildRow,\n      childRowTogglerFirst: this.hasChildRow() && this.opts().showChildRowToggler && this.opts().childRowTogglerFirst,\n      childRowTogglerLast: this.hasChildRow() && this.opts().showChildRowToggler && !this.opts().childRowTogglerFirst\n    });\n  }\n};\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://VueTables/./lib/components/renderless/RLHeadingsRow.js?");

/***/ }),

/***/ "./lib/components/renderless/RLListFilter.js":
/*!***************************************************!*\
  !*** ./lib/components/renderless/RLListFilter.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\nvar _default = {\n  name: 'RLListFilter',\n  inject: ['search', 'query', 'theme', 'getHeading', 'display', 'getColumnName', 'opts', 'componentsOverride'],\n  props: ['column'],\n  render: function render(h) {\n    return this.$slots[\"default\"]({\n      opts: this.opts(),\n      theme: this.theme,\n      search: this.search,\n      query: this.query(),\n      getHeading: this.getHeading,\n      display: this.display,\n      items: this.opts().listColumns[this.column].filter(function (item) {\n        return !item.hide;\n      }),\n      defaultOption: this.display('defaultOption', {\n        column: this.opts().headings[this.column] ? this.opts().headings[this.column] : this.column\n      }),\n      name: this.getColumnName(this.column),\n      value: this.query()[this.column],\n      column: this.column,\n      override: this.componentsOverride.listFilter\n    });\n  }\n};\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://VueTables/./lib/components/renderless/RLListFilter.js?");

/***/ }),

/***/ "./lib/components/renderless/RLNoResultsRow.js":
/*!*****************************************************!*\
  !*** ./lib/components/renderless/RLNoResultsRow.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\nvar _default = {\n  name: 'RLNoResultsRow',\n  inject: ['colspan', 'display', 'theme', 'componentsOverride', 'loading', 'loadingError', 'initialRequestSent', 'tabIndex', 'opts'],\n  render: function render() {\n    return this.$slots[\"default\"]({\n      opts: this.opts(),\n      colspan: this.colspan(),\n      loading: this.loading(),\n      loadingError: this.loadingError(),\n      display: this.display,\n      tabIndex: this.tabIndex(),\n      \"class\": this.getClass(),\n      tdClass: this.theme.td,\n      initialRequestSent: this.initialRequestSent(),\n      message: this.display(this.message),\n      override: this.componentsOverride.noResultsRow\n    });\n  },\n  methods: {\n    getClass: function getClass() {\n      if (this.loadingError()) {\n        return 'VueTables__error';\n      }\n\n      if (this.loading()) {\n        return 'VueTables__loading';\n      }\n\n      return 'VueTables__no-results';\n    }\n  },\n  computed: {\n    message: function message() {\n      if (this.loadingError()) {\n        return 'loadingError';\n      }\n\n      if (this.loading()) {\n        return 'loading';\n      }\n\n      if (!this.opts().sendInitialRequest && !this.initialRequestSent()) {\n        return 'noRequest';\n      }\n\n      return 'noResults';\n    }\n  }\n};\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://VueTables/./lib/components/renderless/RLNoResultsRow.js?");

/***/ }),

/***/ "./lib/components/renderless/RLPagination.js":
/*!***************************************************!*\
  !*** ./lib/components/renderless/RLPagination.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _merge = _interopRequireDefault(__webpack_require__(/*! merge */ \"./node_modules/merge/merge.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar _default = {\n  name: \"RLPagination\",\n  inject: ['opts', 'count', 'limit', 'vuex', 'name', 'id', 'theme', 'page', 'setPage', 'totalPages', 'componentsOverride'],\n  render: function render() {\n    return this.$slots[\"default\"]({\n      opts: this.opts(),\n      setPage: this.setPage,\n      options: this.opts().pagination,\n      infiniteScroll: this.opts().infiniteScroll,\n      page: this.page(),\n      records: this.count(),\n      perPage: parseInt(this.limit()),\n      name: this.vuex ? this.name : this.id,\n      vuex: this.vuex,\n      theme: this.theme,\n      texts: this.opts().texts,\n      totalPages: this.totalPages(),\n      optionsObj: {\n        theme: (0, _merge[\"default\"])(this.theme.pagination, {\n          wrapper: \"\".concat(this.theme.row, \" \").concat(this.theme.column, \" \").concat(this.theme.contentCenter),\n          nav: this.theme.center,\n          count: \"\".concat(this.theme.center, \" \").concat(this.theme.column)\n        }),\n        chunk: this.opts().pagination.chunk,\n        chunksNavigation: this.opts().pagination.nav,\n        edgeNavigation: this.opts().pagination.edge,\n        texts: {\n          count: this.opts().texts.count,\n          first: this.opts().texts.first,\n          last: this.opts().texts.last\n        }\n      },\n      override: this.componentsOverride.pagination\n    });\n  }\n};\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://VueTables/./lib/components/renderless/RLPagination.js?");

/***/ }),

/***/ "./lib/components/renderless/RLPaginationCount.js":
/*!********************************************************!*\
  !*** ./lib/components/renderless/RLPaginationCount.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\nvar _default = {\n  inject: ['page', 'limit', 'opts', 'allFilteredData', 'source', 'tableData', 'count'],\n  render: function render() {\n    return this.$slots[\"default\"]({\n      from: this.opts().pagination.virtual ? 1 : (this.page() - 1) * this.limit() + 1,\n      to: this.getTo(),\n      total: this.source === 'client' ? this.allFilteredData().length : this.count()\n    });\n  },\n  methods: {\n    getTo: function getTo() {\n      if (this.source === 'client') {\n        return this.page() * this.limit() > this.allFilteredData().length ? this.allFilteredData().length : this.page() * this.limit();\n      }\n\n      return this.tableData().length;\n    }\n  }\n};\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://VueTables/./lib/components/renderless/RLPaginationCount.js?");

/***/ }),

/***/ "./lib/components/renderless/RLPerPageSelector.js":
/*!********************************************************!*\
  !*** ./lib/components/renderless/RLPerPageSelector.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\nvar _default = {\n  name: \"RLPerPageSelector\",\n  inject: ['opts', 'limit', 'setLimit', 'perPageValues', 'id', 'theme', 'display', 'componentsOverride'],\n  render: function render() {\n    var _this = this;\n\n    return this.$slots[\"default\"]({\n      opts: this.opts(),\n      perPageValues: this.perPageValues(),\n      theme: this.theme,\n      limit: this.limit(),\n      setLimit: this.setLimit,\n      id: this.id,\n      selectClass: this.theme.select,\n      display: this.display,\n      selectAttrs: {\n        id: \"VueTables__limit_\".concat(this.id),\n        \"class\": this.theme.select,\n        value: Number(this.limit())\n      },\n      selectEvents: {\n        change: function change(e) {\n          return _this.setLimit(e);\n        }\n      },\n      override: this.componentsOverride.perPageSelector\n    });\n  }\n};\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://VueTables/./lib/components/renderless/RLPerPageSelector.js?");

/***/ }),

/***/ "./lib/components/renderless/RLRowSelector.js":
/*!****************************************************!*\
  !*** ./lib/components/renderless/RLRowSelector.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\nvar _default = {\n  name: 'RLRowSelector',\n  inject: ['opts', 'theme', 'colspan', 'slots', 'toggleRowSelection', 'isRowSelected', 'componentsOverride', 'row', 'index'],\n  render: function render() {\n    return this.$slots[\"default\"]({\n      tdClass: this.theme.td,\n      mode: this.opts().selectable.mode,\n      type: this.opts().selectable.mode === 'single' ? 'radio' : 'checkbox',\n      row: this.row(),\n      index: this.index,\n      toggleRow: this.toggleRowSelection,\n      selected: this.isRowSelected(this.row()),\n      disabled: this.opts().selectable.only && !this.opts().selectable.only(this.row()),\n      override: this.componentsOverride.rowSelector\n    });\n  }\n};\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://VueTables/./lib/components/renderless/RLRowSelector.js?");

/***/ }),

/***/ "./lib/components/renderless/RLSortControl.js":
/*!****************************************************!*\
  !*** ./lib/components/renderless/RLSortControl.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\nvar _default = {\n  name: 'RLSortControl',\n  inject: ['opts', 'column', 'theme', 'sortable', 'hasMultiSort', 'orderBy', 'userMultiSorting', 'sortableChevronClass', 'componentsOverride'],\n  render: function render() {\n    return this.$slots[\"default\"]({\n      opts: this.opts(),\n      sortable: this.sortable(this.column()),\n      \"class\": \"VueTables__sort-icon \".concat(this.theme.right, \" \").concat(this.sortableChevronClass(this.column())),\n      sortStatus: this.sortStatus,\n      override: this.componentsOverride.sortControl\n    });\n  },\n  computed: {\n    OrderBy: function OrderBy() {\n      return this.orderBy();\n    },\n    UserMultiSorting: function UserMultiSorting() {\n      return this.userMultiSorting();\n    },\n    sortStatus: function sortStatus() {\n      var _this = this;\n\n      if (this.hasMultiSort && this.OrderBy.column && this.UserMultiSorting[this.OrderBy.column]) {\n        var col = this.UserMultiSorting[this.OrderBy.column].filter(function (c) {\n          return c.column === _this.column();\n        })[0];\n        if (col) return {\n          sorted: true,\n          asc: col.ascending\n        };\n      }\n\n      if (this.column() === this.OrderBy.column) {\n        return {\n          sorted: true,\n          asc: this.OrderBy.ascending\n        };\n      }\n\n      return {\n        sorted: false,\n        asc: false\n      };\n    }\n  },\n  methods: {}\n};\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://VueTables/./lib/components/renderless/RLSortControl.js?");

/***/ }),

/***/ "./lib/components/renderless/RLTable.js":
/*!**********************************************!*\
  !*** ./lib/components/renderless/RLTable.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\nvar _default = {\n  name: 'RLTable',\n  inject: ['opts', 'theme', 'colspan', 'slots', 'componentsOverride'],\n  render: function render() {\n    return this.$slots[\"default\"]({\n      opts: this.opts(),\n      tableAttrs: {\n        summary: this.opts().summary,\n        \"class\": \"VueTables__table \".concat(this.opts().skin ? this.opts().skin : this.theme.table)\n      },\n      slots: this.slots(),\n      colspan: this.colspan(),\n      caption: this.opts().caption,\n      override: this.componentsOverride.table\n    });\n  }\n};\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://VueTables/./lib/components/renderless/RLTable.js?");

/***/ }),

/***/ "./lib/components/renderless/RLTableBody.js":
/*!**************************************************!*\
  !*** ./lib/components/renderless/RLTableBody.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\nvar _default = {\n  name: 'RLTableBody',\n  inject: ['opts', 'theme', 'source', 'filteredData', 'tableData', 'colspan', 'openChildRows', 'collapsedGroups', 'slots', 'componentsOverride', 'page', 'limit'],\n  render: function render() {\n    return this.$slots[\"default\"]({\n      opts: this.opts(),\n      source: this.source,\n      canToggleGroups: this.opts().toggleGroups,\n      collapsedGroups: this.collapsedGroups(),\n      data: this.source === 'client' ? this.filteredData() : this.tableData(),\n      colspan: this.colspan(),\n      loading: true,\n      hasChildRow: this.opts().childRow || this.slots()['child_row'],\n      openChildRows: this.openChildRows(),\n      uniqueRowId: this.opts().uniqueKey,\n      groupBy: this.opts().groupBy,\n      slots: this.slots(),\n      override: this.componentsOverride.tableBody,\n      initialIndex: (this.page() - 1) * this.limit()\n    });\n  }\n};\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://VueTables/./lib/components/renderless/RLTableBody.js?");

/***/ }),

/***/ "./lib/components/renderless/RLTableCell.js":
/*!**************************************************!*\
  !*** ./lib/components/renderless/RLTableCell.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _merge = _interopRequireDefault(__webpack_require__(/*! merge */ \"./node_modules/merge/merge.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar _default = {\n  name: 'RLTableCell',\n  inject: ['row', 'slots', 'theme', 'orderBy', 'opts', 'render', 'index', 'setEditingCell', 'updateValue', 'revertValue', 'editing', 'getValue', 'columnClass', 'cellClasses', 'componentsOverride', 'isListFilter', 'optionText', 'source', 'dateFormat', 'formatDate', 'tabIndex'],\n  props: ['column'],\n  render: function render(h) {\n    return this.$slots[\"default\"]({\n      opts: this.opts(),\n      row: this.Row,\n      column: this.column,\n      content: this.content(h),\n      classes: \"\".concat(this.theme.td, \" \").concat(this.columnClass(this.column), \" \").concat(this.cellClasses(this.column, this.Row), \" \").concat(this.sortedClass(this.column)).trim(),\n      tabIndex: this.tabIndex(),\n      override: this.componentsOverride.tableCell\n    });\n  },\n  computed: {\n    Row: function Row() {\n      return this.row();\n    },\n    options: function options() {\n      return this.opts();\n    }\n  },\n  methods: {\n    content: function content(h) {\n      if (this.options.templates[this.column]) {\n        return this.render(this.Row, this.column, this.index, h);\n      }\n\n      if (this.slots()[this.column]) {\n        var data = {\n          row: this.Row,\n          column: this.column,\n          index: this.index\n        };\n\n        if (this.options.editableColumns.includes(this.column)) {\n          data = (0, _merge[\"default\"])(data, this.getEditFunctions());\n        }\n\n        return this.slots()[this.column](data);\n      }\n\n      return this.formatCellContent(this.getValue(this.Row, this.column), this.column);\n    },\n    sortedClass: function sortedClass(column) {\n      if (!this.options.addSortedClassToCells) return '';\n      return this.orderBy().column === column ? \"\".concat(column, \"-sorted-\") + (this.orderBy().ascending ? 'asc' : 'desc') : '';\n    },\n    formatCellContent: function formatCellContent(value, column) {\n      if (this.source === 'client' && this.options.dateColumns.includes(column)) {\n        return this.formatDate(value, this.dateFormat(column));\n      }\n\n      if (this.isListFilter(column)) {\n        return this.optionText(value, column);\n      }\n\n      return value;\n    },\n    isEditing: function isEditing() {\n      return function () {\n        var _this = this;\n\n        return this.editing().find(function (e) {\n          return e.id === _this.Row[_this.options.uniqueKey] && e.column === _this.column;\n        });\n      }.bind(this);\n    },\n    getEditFunctions: function getEditFunctions() {\n      return {\n        update: this.updateValue(this.Row, this.column),\n        isEditing: this.isEditing(),\n        setEditing: this.setEditingCell(this.Row, this.column),\n        revertValue: this.revertValue(this.Row, this.column)\n      };\n    }\n  }\n};\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://VueTables/./lib/components/renderless/RLTableCell.js?");

/***/ }),

/***/ "./lib/components/renderless/RLTableHead.js":
/*!**************************************************!*\
  !*** ./lib/components/renderless/RLTableHead.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\nvar _default = {\n  name: 'RLTableHead',\n  inject: ['opts', 'slots', 'componentsOverride'],\n  render: function render() {\n    return this.$slots[\"default\"]({\n      opts: this.opts(),\n      slots: this.slots(),\n      override: this.componentsOverride.tableHead\n    });\n  }\n};\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://VueTables/./lib/components/renderless/RLTableHead.js?");

/***/ }),

/***/ "./lib/components/renderless/RLTableHeading.js":
/*!*****************************************************!*\
  !*** ./lib/components/renderless/RLTableHeading.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\nvar _default = {\n  name: 'RLTableHeading',\n  props: ['column'],\n  provide: function provide() {\n    var _this = this;\n\n    return {\n      column: function column() {\n        return _this.column;\n      }\n    };\n  },\n  inject: ['opts', 'theme', 'sortableClass', 'getHeadingTooltip', 'getHeading', 'orderByColumn', 'componentsOverride', 'tabIndex'],\n  render: function render(h) {\n    var _this2 = this;\n\n    return this.$slots[\"default\"]({\n      opts: this.opts(),\n      thAttrs: {\n        \"class\": this.sortableClass(this.column),\n        tabIndex: this.tabIndex(),\n        style: this.opts().stickyHeader ? 'position:sticky; top:0; background:white;' : '',\n        title: this.getHeadingTooltip(this.column)\n      },\n      thEvents: {\n        keypress: function keypress(e) {\n          if (e.key === \"Enter\") {\n            _this2.orderByColumn(_this2.column, e);\n          }\n        },\n        click: function click(e) {\n          if (e.target.className !== \"resize-handle\") {\n            _this2.orderByColumn(_this2.column, e);\n          }\n        }\n      },\n      spanAttrs: {\n        title: this.getHeadingTooltip(this.column)\n      },\n      heading: this.getHeading(this.column, h),\n      override: this.componentsOverride.tableHeading\n    });\n  }\n};\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://VueTables/./lib/components/renderless/RLTableHeading.js?");

/***/ }),

/***/ "./lib/components/renderless/RLTableRow.js":
/*!*************************************************!*\
  !*** ./lib/components/renderless/RLTableRow.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\nvar _default = {\n  name: 'RLTableRow',\n  props: ['row', 'index'],\n  inject: ['allColumns', 'opts', 'rowWasClicked', 'hasChildRow', 'theme', 'componentsOverride', 'isRowSelected'],\n  provide: function provide() {\n    var _this = this;\n\n    return {\n      row: function row() {\n        return _this.row;\n      },\n      index: this.index\n    };\n  },\n  render: function render() {\n    return this.$slots[\"default\"]({\n      opts: this.opts(),\n      columns: this.allColumns(),\n      hasChildRow: this.hasChildRow(),\n      selectable: this.opts().selectable.mode && !this.opts().selectable.programmatic,\n      rowId: this.row[this.opts().uniqueKey],\n      rowAttrs: {\n        \"class\": this.getClass(),\n        attrs: this.opts().rowAttributesCallback ? this.opts().rowAttributesCallback(this.row) : {}\n      },\n      rowEvents: {\n        click: this.rowWasClicked.bind(this, this.row, this.index),\n        dblclick: this.rowWasClicked.bind(this, this.row, this.index)\n      },\n      childRowTogglerFirst: this.hasChildRow() && this.opts().showChildRowToggler && this.opts().childRowTogglerFirst,\n      childRowTogglerLast: this.hasChildRow() && this.opts().showChildRowToggler && !this.opts().childRowTogglerFirst,\n      override: this.componentsOverride.tableRow\n    });\n  },\n  methods: {\n    getClass: function getClass() {\n      var cls = [];\n\n      if (this.opts().rowClassCallback) {\n        cls.push(this.opts().rowClassCallback(this.row));\n      }\n\n      cls.push(this.theme.tr);\n\n      if (this.index % 2 === 0) {\n        cls.push(this.theme.trEven);\n      } else {\n        cls.push(this.theme.trOdd);\n      }\n\n      if (this.opts().selectable.mode && this.isRowSelected(this.row)) {\n        cls.push('VueTables__row--selected');\n      }\n\n      return cls.join(' ');\n    }\n  }\n};\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://VueTables/./lib/components/renderless/RLTableRow.js?");

/***/ }),

/***/ "./lib/components/renderless/RLTextFilter.js":
/*!***************************************************!*\
  !*** ./lib/components/renderless/RLTextFilter.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\nvar _default = {\n  name: 'RLTextFilter',\n  inject: ['opts', 'search', 'query', 'theme', 'getHeading', 'display', 'getColumnName', 'componentsOverride'],\n  props: {\n    column: {\n      required: true,\n      type: String\n    }\n  },\n  render: function render() {\n    return this.$slots[\"default\"]({\n      opts: this.opts(),\n      column: this.column,\n      debounce: this.opts().debounce,\n      theme: this.theme,\n      search: this.search,\n      query: this.query(),\n      getHeading: this.getHeading,\n      name: this.getColumnName(this.column),\n      display: this.display,\n      override: this.componentsOverride.textFilter\n    });\n  }\n};\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://VueTables/./lib/components/renderless/RLTextFilter.js?");

/***/ }),

/***/ "./lib/computed/all-columns.js":
/*!*************************************!*\
  !*** ./lib/computed/all-columns.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  var _this = this;\n\n  var display = this.columnsDisplay; // default - return all columns\n\n  if (!display && !this.userControlsColumns) {\n    return this.Columns.filter(function (col) {\n      return _this._shouldShowColumnOnInit(col);\n    });\n  } // user toggled columns - return user selected columns\n\n\n  if (this.userControlsColumns) {\n    return this.columns.filter(function (column) {\n      return _this.userColumnsDisplay.includes(column);\n    });\n  }\n\n  if (this.opts.ssr) return this.Columns; // developer defined columns display\n\n  return this.Columns.filter(function (column) {\n    if (!_this._shouldShowColumnOnInit(column)) {\n      return false;\n    }\n\n    if (!display[column]) return true;\n    var range = display[column];\n    var operator = range[2];\n    var inRange = (!range[0] || _this.windowWidth >= range[0]) && (!range[1] || _this.windowWidth < range[1]);\n    return operator == 'not' ? !inRange : inRange;\n  });\n};\n\n//# sourceURL=webpack://VueTables/./lib/computed/all-columns.js?");

/***/ }),

/***/ "./lib/computed/colspan.js":
/*!*********************************!*\
  !*** ./lib/computed/colspan.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  var span = this.allColumns.length;\n  if (this.hasChildRow) span++;\n  if (this.opts.selectable.mode) span++;\n  return span;\n};\n\n//# sourceURL=webpack://VueTables/./lib/computed/colspan.js?");

/***/ }),

/***/ "./lib/computed/custom-q.js":
/*!**********************************!*\
  !*** ./lib/computed/custom-q.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  return JSON.stringify(this.customQueries);\n};\n\n//# sourceURL=webpack://VueTables/./lib/computed/custom-q.js?");

/***/ }),

/***/ "./lib/computed/datepicker-columns.js":
/*!********************************************!*\
  !*** ./lib/computed/datepicker-columns.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar intersect = __webpack_require__(/*! array-intersect */ \"./node_modules/array-intersect/dist/array-intersect.module.js\")[\"default\"];\n\nmodule.exports = function () {\n  if (this.opts.filterable === true) {\n    return this.opts.dateColumns;\n  }\n\n  if (this.opts.filterable === false) {\n    return [];\n  }\n\n  return intersect(this.opts.filterable, this.opts.dateColumns);\n};\n\n//# sourceURL=webpack://VueTables/./lib/computed/datepicker-columns.js?");

/***/ }),

/***/ "./lib/computed/filterable-columns.js":
/*!********************************************!*\
  !*** ./lib/computed/filterable-columns.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  return this.opts.filterable && this.opts.filterable.length ? this.opts.filterable : this.Columns;\n};\n\n//# sourceURL=webpack://VueTables/./lib/computed/filterable-columns.js?");

/***/ }),

/***/ "./lib/computed/filtered-data.js":
/*!***************************************!*\
  !*** ./lib/computed/filtered-data.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar clone = __webpack_require__(/*! lodash.clonedeep */ \"./node_modules/lodash.clonedeep/index.js\");\n\nmodule.exports = function () {\n  this.dispatch('loading');\n  var data = clone(this.tableData);\n  var column = this.orderBy.column;\n  data = this.search(data);\n\n  if (column) {\n    // dummy var to force compilation\n    if (this.time) this.time = this.time;\n    data = this.opts.sortingAlgorithm.call(this, data, column);\n  } else if (this.groupBy) {\n    data = this.opts.sortingAlgorithm.call(this, data, this.groupBy[0]);\n  }\n\n  if (this.vuex) {\n    if (this.count != data.length) this.commit('SET_COUNT', data.length);\n  } else {\n    this.count = data.length;\n  }\n\n  this.allFilteredData = JSON.parse(JSON.stringify(data));\n  var offset = this.opts.pagination.virtual ? 0 : (this.page - 1) * this.limit;\n  var limit = this.opts.pagination.virtual ? this.limit * this.page : this.limit;\n  var res = data.splice(offset, limit);\n\n  if (this.groupBy) {\n    return toArray(groupData(res, JSON.parse(JSON.stringify(this.groupBy))), this.groupBy);\n  }\n\n  this.dispatch('loaded');\n  return res;\n};\n\nfunction groupData(data, keys) {\n  var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;\n  var key;\n  var result = data.reduce(function (r, a) {\n    key = a[keys[i]];\n    r[key] = r[key] || [];\n    r[key].push(a);\n    return r;\n  }, Object.create(null));\n  i++;\n\n  if (typeof keys[i] === 'string') {\n    for (var k in result) {\n      result[k] = groupData(result[k], keys, i);\n    }\n  }\n\n  return result;\n}\n\nfunction toArray(data, groupBy) {\n  var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;\n  var res = [];\n\n  for (var item in data) {\n    res.push({\n      value: item,\n      type: groupBy[i],\n      data: typeof groupBy[i + 1] === 'undefined' ? data[item] : toArray(data[item], groupBy, i + 1)\n    });\n  }\n\n  return res;\n}\n\n//# sourceURL=webpack://VueTables/./lib/computed/filtered-data.js?");

/***/ }),

/***/ "./lib/computed/filtered-query.js":
/*!****************************************!*\
  !*** ./lib/computed/filtered-query.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nmodule.exports = function () {\n  if (_typeof(this.query) !== 'object' || this.opts.sendEmptyFilters) {\n    return this.query;\n  }\n\n  var result = {};\n\n  for (var key in this.query) {\n    if (this.query[key] !== '' && this.filterable(key)) {\n      result[key] = this.query[key];\n    }\n  }\n\n  return result;\n};\n\n//# sourceURL=webpack://VueTables/./lib/computed/filtered-query.js?");

/***/ }),

/***/ "./lib/computed/has-child-row.js":
/*!***************************************!*\
  !*** ./lib/computed/has-child-row.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  return !!(this.opts.childRow || this.$parent.$slots.child_row);\n};\n\n//# sourceURL=webpack://VueTables/./lib/computed/has-child-row.js?");

/***/ }),

/***/ "./lib/computed/has-generic-filter.js":
/*!********************************************!*\
  !*** ./lib/computed/has-generic-filter.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nmodule.exports = function () {\n  return !this.opts.filterByColumn && (typeof this.opts.filterable === 'boolean' && this.opts.filterable || _typeof(this.opts.filterable) === 'object' && this.opts.filterable.length);\n};\n\n//# sourceURL=webpack://VueTables/./lib/computed/has-generic-filter.js?");

/***/ }),

/***/ "./lib/computed/list-columns-object.js":
/*!*********************************************!*\
  !*** ./lib/computed/list-columns-object.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  var columns = Object.keys(this.opts.listColumns);\n  var res = {};\n  columns.forEach(function (column) {\n    res[column] = {};\n    this.opts.listColumns[column].forEach(function (item) {\n      res[column][item.id] = item.text;\n    });\n  }.bind(this));\n  return res;\n};\n\n//# sourceURL=webpack://VueTables/./lib/computed/list-columns-object.js?");

/***/ }),

/***/ "./lib/computed/opts.js":
/*!******************************!*\
  !*** ./lib/computed/opts.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  var defaults = __webpack_require__(/*! ../config/defaults */ \"./lib/config/defaults.js\")();\n\n  return this.initOptions(defaults, this.globalOptions, this.options);\n};\n\n//# sourceURL=webpack://VueTables/./lib/computed/opts.js?");

/***/ }),

/***/ "./lib/computed/per-page-values.js":
/*!*****************************************!*\
  !*** ./lib/computed/per-page-values.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  var _this = this;\n\n  var perpageValues = [];\n  this.opts.perPageValues.every(function (value) {\n    var isLastEntry = value >= _this.count;\n    perpageValues.push(value);\n    return !isLastEntry;\n  });\n  return perpageValues;\n};\n\n//# sourceURL=webpack://VueTables/./lib/computed/per-page-values.js?");

/***/ }),

/***/ "./lib/computed/q.js":
/*!***************************!*\
  !*** ./lib/computed/q.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  return this.opts.filterByColumn ? JSON.stringify(this.query) : this.query;\n};\n\n//# sourceURL=webpack://VueTables/./lib/computed/q.js?");

/***/ }),

/***/ "./lib/computed/storage.js":
/*!*********************************!*\
  !*** ./lib/computed/storage.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  if (typeof localStorage === 'undefined') return {};\n  return this.opts.storage === 'local' ? localStorage : sessionStorage;\n};\n\n//# sourceURL=webpack://VueTables/./lib/computed/storage.js?");

/***/ }),

/***/ "./lib/computed/table-data.js":
/*!************************************!*\
  !*** ./lib/computed/table-data.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  return this.data;\n};\n\n//# sourceURL=webpack://VueTables/./lib/computed/table-data.js?");

/***/ }),

/***/ "./lib/computed/templates-keys.js":
/*!****************************************!*\
  !*** ./lib/computed/templates-keys.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  return Object.keys(this.opts.templates);\n};\n\n//# sourceURL=webpack://VueTables/./lib/computed/templates-keys.js?");

/***/ }),

/***/ "./lib/computed/total-pages.js":
/*!*************************************!*\
  !*** ./lib/computed/total-pages.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  return Math.ceil(this.count / this.limit);\n};\n\n//# sourceURL=webpack://VueTables/./lib/computed/total-pages.js?");

/***/ }),

/***/ "./lib/config/defaults.js":
/*!********************************!*\
  !*** ./lib/config/defaults.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  return {\n    alwaysShowPerPageSelect: false,\n    hidePerPageSelect: false,\n    dateColumns: [],\n    listColumns: {},\n    datepickerOptions: {\n      locale: {\n        cancelLabel: \"Clear\"\n      }\n    },\n    datepickerPerColumnOptions: {},\n    initialPage: 1,\n    perPage: 10,\n    perPageValues: [10, 25, 50, 100],\n    groupBy: false,\n    collapseGroups: false,\n    destroyEventBus: false,\n    sendEmptyFilters: false,\n    params: {},\n    sortable: true,\n    filterable: true,\n    groupMeta: [],\n    initFilters: {},\n    sendInitialRequest: true,\n    customFilters: [],\n    templates: {},\n    debounce: 250,\n    dateFormat: \"DD/MM/YYYY\",\n    dateFormatPerColumn: {},\n    toMomentFormat: false,\n    skin: false,\n    columnsDisplay: {},\n    columnsDropdown: false,\n    texts: {\n      count: \"Showing {from} to {to} of {count} records|{count} records|One record\",\n      first: \"First\",\n      last: \"Last\",\n      filter: \"Filter:\",\n      filterPlaceholder: \"Search query\",\n      limit: \"Records:\",\n      page: \"Page:\",\n      noResults: \"No matching records\",\n      noRequest: \"Please select at least one filter to fetch results\",\n      filterBy: \"Filter by {column}\",\n      loading: \"Loading...\",\n      defaultOption: \"Select {column}\",\n      columns: \"Columns\",\n      loadingError: \"Error loading results\"\n    },\n    sortIcon: {\n      is: \"glyphicon-sort\",\n      base: \"glyphicon\",\n      up: \"glyphicon-chevron-up\",\n      down: \"glyphicon-chevron-down\"\n    },\n    addSortedClassToCells: false,\n    sortingAlgorithm: function sortingAlgorithm(data, column) {\n      return data.sort(this.getSortFn(column));\n    },\n    filterAlgorithm: {},\n    customSorting: {},\n    multiSorting: {},\n    clientMultiSorting: true,\n    serverMultiSorting: false,\n    filterByColumn: false,\n    highlightMatches: false,\n    orderBy: false,\n    descOrderColumns: [],\n    footerHeadings: false,\n    headings: {},\n    headingsTooltips: {},\n    stickyHeader: false,\n    selectable: {\n      selectAllMode: 'all',\n      programmatic: false\n    },\n    pagination: {\n      show: true,\n      dropdown: false,\n      virtual: false,\n      chunk: 10,\n      edge: false,\n      align: \"center\",\n      nav: \"fixed\"\n    },\n    childRow: false,\n    childRowTogglerFirst: true,\n    showChildRowToggler: true,\n    uniqueKey: \"id\",\n    requestFunction: false,\n    useDrawCounter: false,\n    requestAdapter: function requestAdapter(data) {\n      return data;\n    },\n    responseAdapter: function responseAdapter(resp) {\n      var data = this.getResponseData(resp);\n      return {\n        data: data.data,\n        count: data.count\n      };\n    },\n    requestKeys: {\n      query: \"query\",\n      limit: \"limit\",\n      orderBy: \"orderBy\",\n      ascending: \"ascending\",\n      page: \"page\",\n      byColumn: \"byColumn\",\n      draw: \"draw\"\n    },\n    rowClassCallback: false,\n    preserveState: false,\n    saveState: false,\n    storage: \"local\",\n    columnsClasses: {},\n    summary: false,\n    caption: false,\n    cellClasses: {},\n    visibleColumns: false,\n    hiddenColumns: false,\n    resizableColumns: true,\n    editableColumns: [],\n    tabbable: true,\n    componentsOverride: {}\n  };\n};\n\n//# sourceURL=webpack://VueTables/./lib/config/defaults.js?");

/***/ }),

/***/ "./lib/filters/custom-filters.js":
/*!***************************************!*\
  !*** ./lib/filters/custom-filters.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (data, customFilters, customQueries) {\n  var passing;\n  return data.filter(function (row) {\n    passing = true;\n    customFilters.forEach(function (filter) {\n      var value = customQueries[filter.name];\n      if (value && !filter.callback(row, value)) passing = false;\n    });\n    return passing;\n  });\n};\n\n//# sourceURL=webpack://VueTables/./lib/filters/custom-filters.js?");

/***/ }),

/***/ "./lib/filters/format-date.js":
/*!************************************!*\
  !*** ./lib/filters/format-date.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar validMoment = __webpack_require__(/*! ../helpers/is-valid-moment-object */ \"./lib/helpers/is-valid-moment-object.js\");\n\nmodule.exports = function (value, dateFormat) {\n  if (!validMoment(value)) return value;\n  return value.format(dateFormat);\n};\n\n//# sourceURL=webpack://VueTables/./lib/filters/format-date.js?");

/***/ }),

/***/ "./lib/filters/highlight-matches.js":
/*!******************************************!*\
  !*** ./lib/filters/highlight-matches.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (value, column, h) {\n  var query = this.opts.filterByColumn ? this.query[column] : this.query;\n  if (!query) return value;\n  query = new RegExp(\"(\" + escapeRegex(query) + \")\", \"i\");\n  return h(\"span\", {\n    \"class\": 'VueTables__highlight'\n  }, matches(value, query, h));\n};\n\nfunction matches(value, query, h) {\n  var pieces = String(value).split(query);\n  return pieces.map(function (piece) {\n    if (query.test(piece)) {\n      return h(\"b\", {}, piece);\n    }\n\n    return piece;\n  });\n}\n\nfunction escapeRegex(s) {\n  return typeof s === 'string' ? s.replace(/[-\\/\\\\^$*+?.()|[\\]{}]/g, '\\\\$&') : s;\n}\n\n;\n\n//# sourceURL=webpack://VueTables/./lib/filters/highlight-matches.js?");

/***/ }),

/***/ "./lib/filters/option-text.js":
/*!************************************!*\
  !*** ./lib/filters/option-text.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (value, column) {\n  var list = this.listColumnsObject[column];\n  if (typeof list[value] == 'undefined') return value;\n  return list[value];\n};\n\n//# sourceURL=webpack://VueTables/./lib/filters/option-text.js?");

/***/ }),

/***/ "./lib/helpers/emitted-events.js":
/*!***************************************!*\
  !*** ./lib/helpers/emitted-events.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\nvar _default = ['loading', 'loaded', 'intersect', 'pagination', 'filter', 'sorted', 'select'];\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://VueTables/./lib/helpers/emitted-events.js?");

/***/ }),

/***/ "./lib/helpers/is-empty.js":
/*!*********************************!*\
  !*** ./lib/helpers/is-empty.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (obj) {\n  // null and undefined are \"empty\"\n  if (obj == null) return true; // Assume if it has a length property with a non-zero value\n  // that that property is correct.\n\n  if (obj.length > 0) return false;\n  if (obj.length === 0) return true; // Otherwise, does it have any properties of its own?\n\n  for (var key in obj) {\n    if (Object.prototype.hasOwnProperty.call(obj, key)) return false;\n  }\n\n  return true;\n};\n\n//# sourceURL=webpack://VueTables/./lib/helpers/is-empty.js?");

/***/ }),

/***/ "./lib/helpers/is-valid-moment-object.js":
/*!***********************************************!*\
  !*** ./lib/helpers/is-valid-moment-object.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (val) {\n  return val && typeof val.isValid == 'function' && val.isValid();\n};\n\n//# sourceURL=webpack://VueTables/./lib/helpers/is-valid-moment-object.js?");

/***/ }),

/***/ "./lib/helpers/object-filled-keys-count.js":
/*!*************************************************!*\
  !*** ./lib/helpers/object-filled-keys-count.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nmodule.exports = function (obj) {\n  var count = 0;\n\n  for (var prop in obj) {\n    var isDateRange = _typeof(obj[prop]) == 'object';\n    if (isDateRange || obj[prop] && (!isNaN(obj[prop]) || obj[prop].trim())) count++;\n  }\n\n  return count;\n};\n\n//# sourceURL=webpack://VueTables/./lib/helpers/object-filled-keys-count.js?");

/***/ }),

/***/ "./lib/helpers/omit.js":
/*!*****************************!*\
  !*** ./lib/helpers/omit.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (obj) {\n  delete obj.override;\n  return obj;\n};\n\n//# sourceURL=webpack://VueTables/./lib/helpers/omit.js?");

/***/ }),

/***/ "./lib/helpers/resizeable-columns.js":
/*!*******************************************!*\
  !*** ./lib/helpers/resizeable-columns.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nmodule.exports = function (table, hasChildRow, isChildRowTogglerFirst, resizeableColumns, stickyHeader) {\n  var row = table.getElementsByTagName(\"tr\")[0],\n      cols = row ? Array.from(row.children) : undefined;\n  if (!cols) return;\n\n  if (_typeof(resizeableColumns) === 'object') {\n    cols = cols.filter(function (col) {\n      return resizeableColumns.includes(col.id.split('--')[1]);\n    });\n  }\n\n  if (!stickyHeader) {\n    table.style.overflow = \"hidden\";\n  }\n\n  var tableHeight = table.offsetHeight;\n  var i = hasChildRow && isChildRowTogglerFirst ? 1 : 0;\n  var till = hasChildRow && !isChildRowTogglerFirst ? cols.length - 2 : cols.length;\n\n  for (; i < till; i++) {\n    var div = createDiv(tableHeight);\n    div.className = \"resize-handle\";\n    cols[i].appendChild(div);\n    cols[i].style.position = stickyHeader ? \"sticky\" : \"relative\";\n    setListeners(div);\n  }\n\n  function setListeners(div) {\n    var pageX, curCol, nxtCol, curColWidth, nxtColWidth;\n    div.addEventListener(\"mousedown\", function (e) {\n      e.preventDefault();\n      e.stopPropagation();\n      curCol = e.target.parentElement;\n      nxtCol = curCol.nextElementSibling;\n      pageX = e.pageX;\n      var padding = paddingDiff(curCol);\n      curColWidth = curCol.offsetWidth - padding;\n      if (nxtCol) nxtColWidth = nxtCol.offsetWidth - padding;\n    }); // div.addEventListener(\"mouseover\", function(e) {\n    //   e.target.style.borderRight = \"2px solid #0000ff\";\n    // });\n\n    div.addEventListener(\"mouseout\", function (e) {\n      e.target.style.borderRight = \"\";\n    });\n    document.addEventListener(\"mousemove\", function (e) {\n      if (curCol) {\n        var diffX = e.pageX - pageX;\n        if (nxtCol) nxtCol.style.width = nxtColWidth - diffX + \"px\";\n        curCol.style.width = curColWidth + diffX + \"px\";\n      }\n    });\n    document.addEventListener(\"mouseup\", function (e) {\n      if (e.target.nodeName === 'INPUT') return;\n      e.stopPropagation();\n      curCol = undefined;\n      nxtCol = undefined;\n      pageX = undefined;\n      nxtColWidth = undefined;\n      curColWidth = undefined;\n    });\n  }\n\n  function createDiv(height) {\n    var div = document.createElement(\"div\");\n    div.style.top = 0;\n    div.style.right = 0;\n    div.style.width = \"5px\";\n    div.style.position = \"absolute\";\n    div.style.cursor = \"col-resize\";\n    div.style.userSelect = \"none\";\n    div.style.height = height + \"px\";\n    return div;\n  }\n\n  function paddingDiff(col) {\n    if (getStyleVal(col, \"box-sizing\") == \"border-box\") {\n      return 0;\n    }\n\n    var padLeft = getStyleVal(col, \"padding-left\");\n    var padRight = getStyleVal(col, \"padding-right\");\n    return parseInt(padLeft) + parseInt(padRight);\n  }\n\n  function getStyleVal(elm, css) {\n    return window.getComputedStyle(elm, null).getPropertyValue(css);\n  }\n};\n\n//# sourceURL=webpack://VueTables/./lib/helpers/resizeable-columns.js?");

/***/ }),

/***/ "./lib/helpers/ucfirst.js":
/*!********************************!*\
  !*** ./lib/helpers/ucfirst.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = _default;\n\nfunction _default(str) {\n  return str.charAt(0).toUpperCase() + str.slice(1);\n}\n\n//# sourceURL=webpack://VueTables/./lib/helpers/ucfirst.js?");

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nObject.defineProperty(exports, \"ClientTable\", {\n  enumerable: true,\n  get: function get() {\n    return _vClientTable[\"default\"];\n  }\n});\nObject.defineProperty(exports, \"ServerTable\", {\n  enumerable: true,\n  get: function get() {\n    return _vServerTable[\"default\"];\n  }\n});\nObject.defineProperty(exports, \"EventBus\", {\n  enumerable: true,\n  get: function get() {\n    return _bus[\"default\"];\n  }\n});\n\nvar _vClientTable = _interopRequireDefault(__webpack_require__(/*! ./v-client-table */ \"./lib/v-client-table.js\"));\n\nvar _vServerTable = _interopRequireDefault(__webpack_require__(/*! ./v-server-table */ \"./lib/v-server-table.js\"));\n\nvar _bus = _interopRequireDefault(__webpack_require__(/*! ./bus */ \"./lib/bus.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\n//# sourceURL=webpack://VueTables/./lib/index.js?");

/***/ }),

/***/ "./lib/methods/cell-classes.js":
/*!*************************************!*\
  !*** ./lib/methods/cell-classes.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (column, row) {\n  if (!this.opts.cellClasses[column]) return '';\n  return this.opts.cellClasses[column].filter(function (item) {\n    return item.condition(row);\n  }).map(function (item) {\n    return item[\"class\"];\n  }).join(' ');\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/cell-classes.js?");

/***/ }),

/***/ "./lib/methods/child-row-toggler-class.js":
/*!************************************************!*\
  !*** ./lib/methods/child-row-toggler-class.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (rowId) {\n  return this.openChildRows.includes(rowId) ? 'VueTables__child-row-toggler--open' : 'VueTables__child-row-toggler--closed';\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/child-row-toggler-class.js?");

/***/ }),

/***/ "./lib/methods/client-search.js":
/*!**************************************!*\
  !*** ./lib/methods/client-search.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar object_filled_keys_count = __webpack_require__(/*! ../helpers/object-filled-keys-count */ \"./lib/helpers/object-filled-keys-count.js\");\n\nvar is_valid_moment_object = __webpack_require__(/*! ../helpers/is-valid-moment-object */ \"./lib/helpers/is-valid-moment-object.js\");\n\nvar filterByCustomFilters = __webpack_require__(/*! ../filters/custom-filters */ \"./lib/filters/custom-filters.js\");\n\nmodule.exports = function (data, e) {\n  if (e) {\n    var _query = this.query;\n    this.setPage(1, true);\n    var name = this.getName(e.target.name);\n    var value = _typeof(e.target.value) === 'object' ? e.target.value : '' + e.target.value;\n\n    if (name) {\n      _query[name] = value;\n    } else {\n      _query = value;\n    }\n\n    this.vuex ? this.commit('SET_FILTER', _query) : this.query = _query;\n    this.updateState('query', _query);\n\n    if (name) {\n      this.dispatch('filter', {\n        name: name,\n        value: value\n      });\n      this.dispatch(\"filter::\".concat(name), value);\n    } else {\n      this.dispatch('filter', value);\n    }\n  }\n\n  var query = this.query;\n  var totalQueries = !query ? 0 : 1;\n  if (!this.opts) return data;\n\n  if (this.opts.filterByColumn) {\n    totalQueries = object_filled_keys_count(query);\n  }\n\n  var value;\n  var found;\n  var currentQuery;\n  var dateFormat;\n  var filterByDate;\n  var isListFilter;\n  var data = filterByCustomFilters(data, this.opts.customFilters, this.customQueries);\n  if (!totalQueries) return data;\n  return data.filter(function (row, index) {\n    found = 0;\n    this.filterableColumns.forEach(function (column) {\n      filterByDate = this.opts.dateColumns.indexOf(column) > -1 && this.opts.filterByColumn;\n      isListFilter = this.isListFilter(column) && this.opts.filterByColumn;\n      dateFormat = this.dateFormat(column);\n      value = this._getValue(row, column);\n\n      if (is_valid_moment_object(value) && !filterByDate) {\n        value = value.format(dateFormat);\n      }\n\n      currentQuery = this.opts.filterByColumn ? query[column] : query;\n      currentQuery = setCurrentQuery(currentQuery);\n\n      if (currentQuery) {\n        if (this.opts.filterAlgorithm[column]) {\n          if (this.opts.filterAlgorithm[column].call(this.$parent.$parent, row, this.opts.filterByColumn ? query[column] : query)) found++;\n        } else {\n          if (foundMatch(currentQuery, value, isListFilter)) found++;\n        }\n      }\n    }.bind(this));\n    return found >= totalQueries;\n  }.bind(this));\n};\n\nfunction setCurrentQuery(query) {\n  if (!query) return '';\n  if (typeof query == 'string') return query.toLowerCase(); // Date Range\n\n  return query;\n}\n\nfunction foundMatch(query, value, isListFilter) {\n  if (['string', 'number', 'boolean'].indexOf(_typeof(value)) > -1) {\n    value = String(value).toLowerCase();\n  } // List Filter\n\n\n  if (isListFilter) {\n    return value == query;\n  } //Text Filter\n\n\n  if (typeof value === 'string') {\n    return value.indexOf(query) > -1;\n  } // Date range\n\n\n  if (is_valid_moment_object(value)) {\n    var start = moment(query.start, 'YYYY-MM-DD HH:mm:ss');\n    var end = moment(query.end, 'YYYY-MM-DD HH:mm:ss');\n    return value >= start && value <= end;\n  }\n\n  if (_typeof(value) === 'object') {\n    for (var key in value) {\n      if (foundMatch(query, value[key])) return true;\n    }\n\n    return false;\n  }\n\n  return value >= start && value <= end;\n}\n\n//# sourceURL=webpack://VueTables/./lib/methods/client-search.js?");

/***/ }),

/***/ "./lib/methods/column-class.js":
/*!*************************************!*\
  !*** ./lib/methods/column-class.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (column) {\n  var c = this.opts.columnsClasses;\n  return c.hasOwnProperty(column) ? c[column] : '';\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/column-class.js?");

/***/ }),

/***/ "./lib/methods/currently-sorted.js":
/*!*****************************************!*\
  !*** ./lib/methods/currently-sorted.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (column) {\n  var userMultiSort = Object.keys(this.userMultiSorting);\n  if (!userMultiSort.length || this.orderBy.column === column) return this.orderBy.column === column;\n  return !!this.userMultiSorting[userMultiSort[0]].filter(function (col) {\n    return col.column == column;\n  }).length;\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/currently-sorted.js?");

/***/ }),

/***/ "./lib/methods/date-format.js":
/*!************************************!*\
  !*** ./lib/methods/date-format.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (column) {\n  if (this.opts.dateFormatPerColumn.hasOwnProperty(column)) {\n    return this.opts.dateFormatPerColumn[column];\n  }\n\n  return this.opts.dateFormat;\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/date-format.js?");

/***/ }),

/***/ "./lib/methods/default-sort.js":
/*!*************************************!*\
  !*** ./lib/methods/default-sort.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (column, ascending) {\n  var multiIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;\n  var sort = this.defaultSort;\n  var multiSort = this.userMultiSorting[this.currentlySorting.column] ? this.userMultiSorting[this.currentlySorting.column] : this.opts.multiSorting[this.currentlySorting.column];\n  var asc = this.currentlySorting.ascending;\n  var self = this;\n  return function (a, b) {\n    var aVal = self._getValue(a, column) || '';\n    var bVal = self._getValue(b, column) || '';\n    var dir = ascending ? 1 : -1;\n    var secondaryAsc;\n    if (typeof aVal === 'string') aVal = aVal.toLowerCase();\n    if (typeof bVal === 'string') bVal = bVal.toLowerCase();\n\n    if (aVal === bVal && multiSort && multiSort[multiIndex + 1]) {\n      var sortData = multiSort[multiIndex + 1];\n\n      if (typeof sortData.ascending !== 'undefined') {\n        secondaryAsc = sortData.ascending;\n      } else {\n        secondaryAsc = sortData.matchDir ? asc : !asc;\n      }\n\n      return sort(sortData.column, secondaryAsc, multiIndex + 1)(a, b);\n    }\n\n    return aVal > bVal ? dir : -dir;\n  };\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/default-sort.js?");

/***/ }),

/***/ "./lib/methods/dispatch.js":
/*!*********************************!*\
  !*** ./lib/methods/dispatch.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _bus = _interopRequireDefault(__webpack_require__(/*! ../bus */ \"./lib/bus.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nmodule.exports = function (event, payload) {\n  if (this.vuex) {\n    if (event.split('::').length > 1) return;\n    this.commit(event.toUpperCase().replace('-', '_'), payload);\n  }\n\n  this.$parent.$emit(event, payload);\n\n  _bus[\"default\"].emit(\"vue-tables.\".concat(event), payload);\n\n  if (this.name) {\n    _bus[\"default\"].emit(\"vue-tables.\".concat(this.name, \".\").concat(event), payload);\n  }\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/dispatch.js?");

/***/ }),

/***/ "./lib/methods/display.js":
/*!********************************!*\
  !*** ./lib/methods/display.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (text, replacements) {\n  if (!this.opts.texts) return '';\n  var text = this.opts.texts[text];\n  if (replacements) for (var key in replacements) {\n    // console.log(key)\n    text = text.replace('{' + key + '}', replacements[key]);\n  }\n  return text;\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/display.js?");

/***/ }),

/***/ "./lib/methods/filter-type.js":
/*!************************************!*\
  !*** ./lib/methods/filter-type.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _VtTextFilter = _interopRequireDefault(__webpack_require__(/*! ../components/VtTextFilter */ \"./lib/components/VtTextFilter.jsx\"));\n\nvar _VtListFilter = _interopRequireDefault(__webpack_require__(/*! ../components/VtListFilter */ \"./lib/components/VtListFilter.jsx\"));\n\nvar _VtDateFilter = _interopRequireDefault(__webpack_require__(/*! ../components/VtDateFilter */ \"./lib/components/VtDateFilter.jsx\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nmodule.exports = function (column) {\n  if (!this.opts.filterable) return false;\n  if (this.isTextFilter(column)) return _VtTextFilter[\"default\"];\n  if (this.isDateFilter(column)) return _VtDateFilter[\"default\"];\n  if (this.isListFilter(column)) return _VtListFilter[\"default\"];\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/filter-type.js?");

/***/ }),

/***/ "./lib/methods/filterable.js":
/*!***********************************!*\
  !*** ./lib/methods/filterable.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (column) {\n  if (!this.opts.filterable) return false;\n  return typeof this.opts.filterable == 'boolean' && this.opts.filterable || this.opts.filterable.indexOf(column) > -1;\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/filterable.js?");

/***/ }),

/***/ "./lib/methods/get-child-row-template.js":
/*!***********************************************!*\
  !*** ./lib/methods/get-child-row-template.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _vue = __webpack_require__(/*! vue */ \"vue\");\n\nmodule.exports = function (row, index, scopedSlot) {\n  // scoped slot\n  if (scopedSlot) return scopedSlot({\n    row: row,\n    index: index\n  });\n  var childRow = this.opts.childRow; // function\n\n  if (typeof childRow === 'function') return childRow.apply(this, [_vue.h, row]); // component\n\n  return (0, _vue.h)(childRow, {\n    data: row\n  });\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/get-child-row-template.js?");

/***/ }),

/***/ "./lib/methods/get-column-name.js":
/*!****************************************!*\
  !*** ./lib/methods/get-column-name.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (column) {\n  return 'vf__' + column.split('.').join('@@@');\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/get-column-name.js?");

/***/ }),

/***/ "./lib/methods/get-data.js":
/*!*********************************!*\
  !*** ./lib/methods/get-data.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (promiseOnly) {\n  var additionalData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  var emitLoading = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;\n\n  if (!this.opts.sendInitialRequest && !this.initialRequestSent) {\n    this.initialRequestSent = true;\n    this.loading = true;\n  }\n\n  var data = this.opts.requestAdapter(this.getRequestParams(additionalData));\n  this.drawCounter++;\n\n  if (emitLoading) {\n    this.dispatch('loading', data);\n  }\n\n  var promise = this.sendRequest(data);\n  if (promiseOnly) return promise;\n  return promise.then(function (response) {\n    if (typeof response !== 'undefined') {\n      this.cancelToken = null;\n      this.loading = false;\n      this.loadingError = false;\n      return this.setData(response);\n    } else {\n      return false;\n    }\n  }.bind(this));\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/get-data.js?");

/***/ }),

/***/ "./lib/methods/get-group-slot.js":
/*!***************************************!*\
  !*** ./lib/methods/get-group-slot.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (value) {\n  if (this.$parent.$scopedSlots && this.$parent.$scopedSlots['__group_meta']) {\n    var data = this.opts.groupMeta.find(function (val) {\n      return val.value === value;\n    });\n    if (!data) return '';\n    return this.$parent.$scopedSlots['__group_meta'](data);\n  }\n\n  return '';\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/get-group-slot.js?");

/***/ }),

/***/ "./lib/methods/get-heading-tooltip.js":
/*!********************************************!*\
  !*** ./lib/methods/get-heading-tooltip.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (value, h) {\n  if (typeof value !== 'string') return '';\n  var derivedHeadingTooltip = '';\n  if (!this.opts.headingsTooltips.hasOwnProperty(value)) return derivedHeadingTooltip;\n\n  if (typeof this.opts.headingsTooltips[value] === 'function') {\n    if (h) return this.opts.headingsTooltips[value].call(this.$parent, h);\n    return derivedHeadingTooltip;\n  }\n\n  return this.opts.headingsTooltips[value];\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/get-heading-tooltip.js?");

/***/ }),

/***/ "./lib/methods/get-heading.js":
/*!************************************!*\
  !*** ./lib/methods/get-heading.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _ucfirst = _interopRequireDefault(__webpack_require__(/*! ../helpers/ucfirst */ \"./lib/helpers/ucfirst.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nmodule.exports = function (value, h) {\n  if (typeof value !== 'string') return '';\n\n  if (typeof this.$parent.$slots[\"h__\".concat(value)] !== 'undefined') {\n    return this.$parent.$slots[\"h__\".concat(value)];\n  }\n\n  var derivedHeading = (0, _ucfirst[\"default\"])(value.split(\"_\").join(\" \"));\n  if (!this.opts.headings.hasOwnProperty(value)) return derivedHeading;\n\n  if (typeof this.opts.headings[value] === 'function') {\n    if (h) return this.opts.headings[value].call(this.$parent, h);\n    return derivedHeading;\n  }\n\n  return this.opts.headings[value];\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/get-heading.js?");

/***/ }),

/***/ "./lib/methods/get-initial-date-range.js":
/*!***********************************************!*\
  !*** ./lib/methods/get-initial-date-range.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (column) {\n  if (typeof this.opts.initFilters[column] !== 'undefined') {\n    return this.opts.initFilters[column];\n  }\n\n  if (typeof this.query[column] !== 'undefined' && this.query[column].start) {\n    return {\n      start: moment(this.query[column].start, 'YYYY-MM-DD HH:mm:ss'),\n      end: moment(this.query[column].end, 'YYYY-MM-DD HH:mm:ss')\n    };\n  }\n\n  return false;\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/get-initial-date-range.js?");

/***/ }),

/***/ "./lib/methods/get-name.js":
/*!*********************************!*\
  !*** ./lib/methods/get-name.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (name) {\n  if (!name) return name;\n  name = name.split('__');\n  name.shift();\n  return name.join('__').split('@@@').join('.');\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/get-name.js?");

/***/ }),

/***/ "./lib/methods/get-open-child-rows.js":
/*!********************************************!*\
  !*** ./lib/methods/get-open-child-rows.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  var _this = this;\n\n  var rows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n\n  if (!this.opts.childRow || typeof this.opts.childRow === 'function') {\n    throw new Error('vue-tables-3: Child row undefined or not a component');\n  }\n\n  var Rows = rows ? this.openChildRows.filter(function (row) {\n    return rows.includes(row);\n  }) : this.openChildRows;\n  if (!Rows.length) return [];\n  return this.$parent.$refs.vt_table.$refs.vt_table_body.$children[0].$children.filter(function (child) {\n    return child.$options.name === 'VtChildRow' && Rows.includes(child.$children[0].$children[0].data[_this.opts.uniqueKey]);\n  }).map(function (child) {\n    return child.$children[0].$children[0];\n  });\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/get-open-child-rows.js?");

/***/ }),

/***/ "./lib/methods/get-request-params.js":
/*!*******************************************!*\
  !*** ./lib/methods/get-request-params.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar merge = __webpack_require__(/*! merge */ \"./node_modules/merge/merge.js\");\n\nmodule.exports = function () {\n  var _data;\n\n  var additionalData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var keys = this.opts.requestKeys;\n  var data = (_data = {}, _defineProperty(_data, keys.query, this.filteredQuery), _defineProperty(_data, keys.limit, this.limit), _defineProperty(_data, keys.ascending, this.orderBy.ascending ? 1 : 0), _defineProperty(_data, keys.page, parseInt(this.page)), _defineProperty(_data, keys.byColumn, this.opts.filterByColumn ? 1 : 0), _data);\n  if (this.orderBy.hasOwnProperty('column') && this.orderBy.column) data[keys.orderBy] = this.orderBy.column;\n  data = merge(data, this.opts.params, this.customQueries, additionalData);\n\n  if (this.hasMultiSort && this.orderBy.column && this.userMultiSorting[this.orderBy.column]) {\n    data.multiSort = this.userMultiSorting[this.orderBy.column];\n  }\n\n  return data;\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/get-request-params.js?");

/***/ }),

/***/ "./lib/methods/get-response-data.js":
/*!******************************************!*\
  !*** ./lib/methods/get-response-data.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (response) {\n  if (typeof axios !== 'undefined') return response.data;\n  return response;\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/get-response-data.js?");

/***/ }),

/***/ "./lib/methods/get-sort-fn.js":
/*!************************************!*\
  !*** ./lib/methods/get-sort-fn.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (column) {\n  var ascending = this.orderBy.ascending;\n  this.currentlySorting = {\n    column: column,\n    ascending: ascending\n  };\n  if (typeof this.opts.customSorting[column] == 'undefined') return this.defaultSort(column, ascending);\n  return this.opts.customSorting[column](ascending);\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/get-sort-fn.js?");

/***/ }),

/***/ "./lib/methods/get-value.js":
/*!**********************************!*\
  !*** ./lib/methods/get-value.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (row, column) {\n  if (column.indexOf('.') === -1) return row[column];\n  var p = column.split('.');\n  var value = row[p[0]];\n  if (!value) return '';\n\n  for (var i = 1; i < p.length; i++) {\n    value = value[p[i]]; // If the nested structure doesn't exist return an empty string\n\n    if (typeof value === 'undefined') return '';\n  }\n\n  return value;\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/get-value.js?");

/***/ }),

/***/ "./lib/methods/has-date-filters.js":
/*!*****************************************!*\
  !*** ./lib/methods/has-date-filters.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar intersection = __webpack_require__(/*! array-intersect */ \"./node_modules/array-intersect/dist/array-intersect.module.js\")[\"default\"];\n\nmodule.exports = function () {\n  var opts = this.opts;\n  return opts.dateColumns.length && opts.filterByColumn && (typeof opts.filterable == 'boolean' && opts.filterable || _typeof(opts.filterable) == 'object' && intersection(opts.filterable, opts.dateColumns).length);\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/has-date-filters.js?");

/***/ }),

/***/ "./lib/methods/init-custom-filters.js":
/*!********************************************!*\
  !*** ./lib/methods/init-custom-filters.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  var customQueries = {};\n  var init = this.opts.initFilters;\n  var key;\n  this.opts.customFilters.forEach(function (filter) {\n    key = this.source == 'client' ? filter.name : filter;\n    customQueries[key] = init.hasOwnProperty(key) ? init[key] : '';\n  }.bind(this));\n  return customQueries;\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/init-custom-filters.js?");

/***/ }),

/***/ "./lib/methods/init-date-filters.js":
/*!******************************************!*\
  !*** ./lib/methods/init-date-filters.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar merge = __webpack_require__(/*! merge */ \"./node_modules/merge/merge.js\");\n\nmodule.exports = function () {\n  if (typeof $ === 'undefined' || typeof $(this.$el).daterangepicker === 'undefined') {\n    console.error('Date filters require jquery and daterangepicker');\n    return;\n  }\n\n  var el;\n  var that = this;\n  var query = this.vuex ? JSON.parse(JSON.stringify(this.query)) : this.query;\n  var columnOptions;\n  var dpOptions;\n\n  var search = function search(query, e) {\n    return that.source == 'client' ? that.search(that.data, e) : that.serverSearch(query, e);\n  };\n\n  var datepickerOptions = merge.recursive(this.opts.datepickerOptions, {\n    autoUpdateInput: false,\n    singleDatePicker: false\n  });\n  that.datepickerColumns.forEach(function (column) {\n    var range = that._getInitialDateRange(column);\n\n    if (range) {\n      that._setDatepickerText(column, range.start, range.end);\n\n      range = {\n        startDate: range.start,\n        endDate: range.end\n      };\n    } else {\n      range = {};\n    }\n\n    el = $(that.refs.filters[column]);\n    columnOptions = typeof that.opts.datepickerPerColumnOptions[column] !== 'undefined' ? that.opts.datepickerPerColumnOptions[column] : {};\n    columnOptions = merge.recursive(columnOptions, {\n      locale: {\n        format: that.dateFormat(column)\n      }\n    });\n    dpOptions = merge(true, datepickerOptions);\n\n    if (columnOptions.ranges === false) {\n      dpOptions.ranges = {};\n    }\n\n    el.daterangepicker(merge.recursive(dpOptions, columnOptions, range));\n    el.on('apply.daterangepicker', function (ev, picker) {\n      query[column] = {\n        start: picker.startDate.format('YYYY-MM-DD HH:mm:ss'),\n        end: picker.endDate.format('YYYY-MM-DD HH:mm:ss')\n      };\n      if (!that.vuex) that.query = query;\n\n      that._setDatepickerText(column, picker.startDate, picker.endDate);\n\n      that.updateState('query', query);\n      search(query, {\n        target: {\n          name: that._getColumnName(column),\n          value: query[column]\n        }\n      });\n    });\n    el.on('cancel.daterangepicker', function (ev, picker) {\n      query[column] = '';\n      if (!that.vuex) that.query = query;\n      picker.setStartDate(moment());\n      picker.setEndDate(moment());\n      that.updateState('query', query);\n      $(this).html(\"<span class='VueTables__filter-placeholder'>\" + that.display('filterBy', {\n        column: that.getHeading(column)\n      }) + \"</span>\");\n      search(query, {\n        target: {\n          name: that._getColumnName(column),\n          value: query[column]\n        }\n      });\n    });\n  });\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/init-date-filters.js?");

/***/ }),

/***/ "./lib/methods/init-options.js":
/*!*************************************!*\
  !*** ./lib/methods/init-options.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar merge = __webpack_require__(/*! merge */ \"./node_modules/merge/merge.js\");\n\nmodule.exports = function (defaults, globalOptions, localOptions) {\n  if (globalOptions) defaults = merge.recursive(defaults, globalOptions);\n  localOptions = merge.recursive(defaults, localOptions);\n  return localOptions;\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/init-options.js?");

/***/ }),

/***/ "./lib/methods/init-order-by.js":
/*!**************************************!*\
  !*** ./lib/methods/init-order-by.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  if (!this.opts.orderBy) return;\n  this.orderBy.column = this.opts.orderBy.column;\n  this.orderBy.ascending = this.opts.orderBy.hasOwnProperty('ascending') ? this.opts.orderBy.ascending : true;\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/init-order-by.js?");

/***/ }),

/***/ "./lib/methods/init-query.js":
/*!***********************************!*\
  !*** ./lib/methods/init-query.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nmodule.exports = function () {\n  var init = this.opts.initFilters;\n  if (!this.opts.filterByColumn) return init.hasOwnProperty('GENERIC') ? init.GENERIC : '';\n  var query = {};\n  var filterable = this.opts.filterable && _typeof(this.opts.filterable) == 'object' ? this.opts.filterable : this.columns;\n  filterable.forEach(function (column) {\n    query[column] = getInitialValue(init, column);\n  }.bind(this));\n  return query;\n};\n\nfunction getInitialValue(init, column) {\n  if (!init.hasOwnProperty(column)) return '';\n  if (typeof init[column].start == 'undefined') return init[column];\n  return {\n    start: init[column].start.format('YYYY-MM-DD HH:mm:ss'),\n    end: init[column].end.format('YYYY-MM-DD HH:mm:ss')\n  };\n}\n\n//# sourceURL=webpack://VueTables/./lib/methods/init-query.js?");

/***/ }),

/***/ "./lib/methods/init-state.js":
/*!***********************************!*\
  !*** ./lib/methods/init-state.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  var state = {\n    page: 1,\n    query: this.query,\n    orderBy: this.orderBy,\n    perPage: this.opts.perPage,\n    customQueries: this.customQueries\n  };\n  this.storage.setItem(this.stateKey, JSON.stringify(state));\n  return state;\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/init-state.js?");

/***/ }),

/***/ "./lib/methods/initial-order-ascending.js":
/*!************************************************!*\
  !*** ./lib/methods/initial-order-ascending.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (column) {\n  return !this.opts.descOrderColumns.includes(column);\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/initial-order-ascending.js?");

/***/ }),

/***/ "./lib/methods/is-date-filter.js":
/*!***************************************!*\
  !*** ./lib/methods/is-date-filter.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (column) {\n  return this.query.hasOwnProperty(column) && this.opts.dateColumns.indexOf(column) > -1;\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/is-date-filter.js?");

/***/ }),

/***/ "./lib/methods/is-list-filter.js":
/*!***************************************!*\
  !*** ./lib/methods/is-list-filter.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (column) {\n  return this.opts.listColumns.hasOwnProperty(column);\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/is-list-filter.js?");

/***/ }),

/***/ "./lib/methods/is-row-selected.js":
/*!****************************************!*\
  !*** ./lib/methods/is-row-selected.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (row) {\n  var id = this.opts.uniqueKey;\n  return !!this.selectedRows.find(function (Row) {\n    return Row[id] === row[id];\n  });\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/is-row-selected.js?");

/***/ }),

/***/ "./lib/methods/is-text-filter.js":
/*!***************************************!*\
  !*** ./lib/methods/is-text-filter.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (column) {\n  return this.query.hasOwnProperty(column) && this.opts.dateColumns.indexOf(column) == -1 && !this.opts.listColumns.hasOwnProperty(column);\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/is-text-filter.js?");

/***/ }),

/***/ "./lib/methods/on-pagination.js":
/*!**************************************!*\
  !*** ./lib/methods/on-pagination.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (page) {\n  if (this.vuex) return;\n  this.setPage(page);\n  this.dispatch('pagination', page);\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/on-pagination.js?");

/***/ }),

/***/ "./lib/methods/only-column.js":
/*!************************************!*\
  !*** ./lib/methods/only-column.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (column) {\n  return this.userColumnsDisplay.length === 1 && this.userColumnsDisplay[0] === column;\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/only-column.js?");

/***/ }),

/***/ "./lib/methods/order-by-column.js":
/*!****************************************!*\
  !*** ./lib/methods/order-by-column.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (colName, ev) {\n  if (!this.sortable(colName)) return;\n  this.setPage(1, true);\n\n  if (ev && ev.shiftKey && this.orderBy.column && this.hasMultiSort) {\n    this.setUserMultiSort(colName);\n  } else {\n    this.userMultiSorting = {};\n    this.orderBy.ascending = colName == this.orderBy.column ? !this.orderBy.ascending : this._initialOrderAscending(colName);\n    this.orderBy.column = colName;\n    this.updateState('orderBy', this.orderBy);\n    this.dispatch('sorted', JSON.parse(JSON.stringify(this.orderBy)));\n  }\n\n  if (this.source == 'server') {\n    this.getData();\n  }\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/order-by-column.js?");

/***/ }),

/***/ "./lib/methods/refresh.js":
/*!********************************!*\
  !*** ./lib/methods/refresh.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  this.serverSearch();\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/refresh.js?");

/***/ }),

/***/ "./lib/methods/register-client-filters.js":
/*!************************************************!*\
  !*** ./lib/methods/register-client-filters.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _bus = _interopRequireDefault(__webpack_require__(/*! ../bus */ \"./lib/bus.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nmodule.exports = function () {\n  var _this = this;\n\n  var event = 'vue-tables';\n  if (this.name) event += '.' + this.name;\n  this.opts.customFilters.forEach(function (filter) {\n    _bus[\"default\"].on(\"\".concat(event, \".filter::\").concat(filter.name), function (value) {\n      _this.setPage(1);\n\n      _this.customQueries[filter.name] = value;\n\n      _this.updateState('customQueries', _this.customQueries);\n    });\n  });\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/register-client-filters.js?");

/***/ }),

/***/ "./lib/methods/register-server-filters.js":
/*!************************************************!*\
  !*** ./lib/methods/register-server-filters.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _bus = _interopRequireDefault(__webpack_require__(/*! ../bus */ \"./lib/bus.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nmodule.exports = function () {\n  var event = 'vue-tables';\n  if (this.name) event += '.' + this.name;\n  this.opts.customFilters.forEach(function (filter) {\n    _bus[\"default\"].on(\"\".concat(event, \".filter::\").concat(filter), function (value) {\n      this.customQueries[filter] = value;\n      this.updateState('customQueries', this.customQueries);\n      this.refresh();\n    }.bind(this));\n  }.bind(this));\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/register-server-filters.js?");

/***/ }),

/***/ "./lib/methods/render.js":
/*!*******************************!*\
  !*** ./lib/methods/render.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (row, column, index, h) {\n  var value = this._getValue(row, column);\n\n  if (this.templatesKeys.indexOf(column) == -1) {\n    if (typeof value === 'undefined' || !this.opts.highlightMatches || this.filterableColumns.indexOf(column) === -1) {\n      return value;\n    }\n\n    return this.highlightMatch(value, column, h);\n  }\n\n  var template = this.opts.templates[column];\n  template = typeof template == 'function' ? template.apply(this.$root, [h, row, index, column]) : h(template, {\n    attrs: {\n      data: row,\n      column: column,\n      index: index\n    }\n  });\n  return template;\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/render.js?");

/***/ }),

/***/ "./lib/methods/reset-custom-filters.js":
/*!*********************************************!*\
  !*** ./lib/methods/reset-custom-filters.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  for (var key in this.$refs.table.customQueries) {\n    this.$refs.table.customQueries[key] = null;\n  }\n\n  this.$refs.table.updateState('customQueries', this.customQueries);\n  this.$refs.table.refresh();\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/reset-custom-filters.js?");

/***/ }),

/***/ "./lib/methods/reset-query.js":
/*!************************************!*\
  !*** ./lib/methods/reset-query.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  if (this.opts.filterByColumn) {\n    var query = {};\n\n    for (var key in this.query) {\n      query[key] = '';\n    }\n  } else {\n    var query = '';\n  }\n\n  this.setFilter(query);\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/reset-query.js?");

/***/ }),

/***/ "./lib/methods/reset-selected-rows.js":
/*!********************************************!*\
  !*** ./lib/methods/reset-selected-rows.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  this.selectedRows = [];\n  var toggler = document.getElementById('vt-toggle-all');\n  toggler.checked = false;\n  this.dispatch('select', this.selectedRows);\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/reset-selected-rows.js?");

/***/ }),

/***/ "./lib/methods/revert-value.js":
/*!*************************************!*\
  !*** ./lib/methods/revert-value.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function _revertVal(row, column) {\n  return function () {\n    var _this = this;\n\n    row[column] = this.editing.find(function (e) {\n      return e.id === row[_this.opts.uniqueKey];\n    }).originalValue;\n  }.bind(this);\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/revert-value.js?");

/***/ }),

/***/ "./lib/methods/row-was-clicked.js":
/*!****************************************!*\
  !*** ./lib/methods/row-was-clicked.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (row, index, event) {\n  var data;\n  var id = this.opts.uniqueKey;\n\n  if (this.source == 'client' && typeof row[id] !== 'undefined') {\n    data = this.tableData.filter(function (r) {\n      return row[id] === r[id];\n    })[0];\n  } else {\n    data = row;\n  }\n\n  this.dispatch('row-click', {\n    row: data,\n    index: index,\n    event: event\n  });\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/row-was-clicked.js?");

/***/ }),

/***/ "./lib/methods/search.js":
/*!*******************************!*\
  !*** ./lib/methods/search.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _debounce = _interopRequireDefault(__webpack_require__(/*! debounce */ \"./node_modules/debounce/index.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nmodule.exports = function (debounceVal) {\n  var search = this.source === 'client' ? this.search.bind(this, this.data) : this.serverSearch.bind(this);\n\n  if (!debounceVal) {\n    return search;\n  }\n\n  var debouncedSearch = (0, _debounce[\"default\"])(search, debounceVal);\n  return function (e) {\n    // ignore tab\n    if (e.keyCode === 9) return; // search immediately on enter\n\n    if (e.keyCode === 13) {\n      debouncedSearch.clear();\n      search.apply(void 0, arguments);\n    } else {\n      debouncedSearch.apply(void 0, arguments);\n    }\n  };\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/search.js?");

/***/ }),

/***/ "./lib/methods/select-all-rows.js":
/*!****************************************!*\
  !*** ./lib/methods/select-all-rows.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  this.selectedRows = this.data;\n  return this.selectedRows;\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/select-all-rows.js?");

/***/ }),

/***/ "./lib/methods/select-row.js":
/*!***********************************!*\
  !*** ./lib/methods/select-row.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (rowId) {\n  var _this = this;\n\n  if (alreadySelected(rowId, this.selectedRows, this.opts.uniqueKey)) {\n    console.warn(\"Row \".concat(rowId, \" already selected\"));\n    return;\n  }\n\n  var row = this.data.find(function (row) {\n    return String(row[_this.opts.uniqueKey]) === String(rowId);\n  });\n\n  if (!row) {\n    console.warn(\"Row \".concat(rowId, \" was not found\"));\n    return;\n  }\n\n  this.selectedRows.push(row);\n  return this.selectedRows;\n};\n\nfunction alreadySelected(rowId, selectedRows, IdKey) {\n  return !!selectedRows.find(function (row) {\n    return String(row[IdKey]) === String(rowId);\n  });\n}\n\n//# sourceURL=webpack://VueTables/./lib/methods/select-row.js?");

/***/ }),

/***/ "./lib/methods/select-rows.js":
/*!************************************!*\
  !*** ./lib/methods/select-rows.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (rowIds) {\n  var _this = this;\n\n  rowIds.forEach(function (id) {\n    return _this.selectRow(id);\n  });\n  return this.selectedRows;\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/select-rows.js?");

/***/ }),

/***/ "./lib/methods/send-request.js":
/*!*************************************!*\
  !*** ./lib/methods/send-request.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (data) {\n  if (typeof this.opts.requestFunction === 'function') {\n    return this.opts.requestFunction.call(this, data);\n  }\n\n  if (typeof axios !== 'undefined') {\n    if (this.cancelToken) {\n      // cancel prev request\n      this.cancelToken.cancel();\n    }\n\n    this.cancelToken = axios.CancelToken.source();\n    return axios.get(this.url, {\n      params: data,\n      cancelToken: this.cancelToken.token\n    })[\"catch\"](function (e) {\n      this.cancelToken = null;\n      this.dispatch('error', e);\n      this.loadingError = true;\n    }.bind(this));\n  }\n\n  if (typeof this.$http !== 'undefined') return this.$http.get(this.url, {\n    params: data\n  }).then(function (data) {\n    return data.json();\n  }.bind(this), function (e) {\n    this.dispatch('error', e);\n    this.loadingError = true;\n  }.bind(this));\n  if (typeof $ != 'undefined') return $.getJSON(this.url, data).fail(function (e) {\n    this.dispatch('error', e);\n    this.loadingError = true;\n  }.bind(this));\n  throw \"vue-tables: No supported ajax library was found. (jQuery, axios or vue-resource). To use a different library you can write your own request function (see the `requestFunction` option)\";\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/send-request.js?");

/***/ }),

/***/ "./lib/methods/server-search.js":
/*!**************************************!*\
  !*** ./lib/methods/server-search.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (e, dateEvent) {\n  // we need to handle the store this.query to make sure we're not mutating outside of it\n  var query = this.vuex ? JSON.parse(JSON.stringify(this.query)) : this.query; // in case we pass an object manually (mostly used for init-date-filters should refactor\n\n  if (Object.prototype.toString.call(e).slice(8, -1) == 'Object') {\n    query = this.vuex ? JSON.parse(JSON.stringify(e)) : e;\n    if (!this.vuex) this.query = query;\n    var name = dateEvent.target.name;\n    var value = dateEvent.target.value;\n\n    if (name) {\n      this.dispatch('filter', {\n        name: name,\n        value: value\n      });\n      this.dispatch(\"filter::\".concat(name), value);\n    } else {\n      this.dispatch('filter', value);\n    }\n\n    this.updateState('query', query);\n  } else if (e) {\n    var _name = this.getName(e.target.name);\n\n    var _value = e.target.value;\n\n    if (_name) {\n      query[_name] = _value;\n    } else {\n      query = _value;\n    }\n\n    if (!this.vuex) this.query = query;\n\n    if (_name) {\n      this.dispatch('filter', {\n        name: _name,\n        value: _value\n      });\n      this.dispatch(\"filter::\".concat(_name), _value);\n    } else {\n      this.dispatch('filter', _value);\n    }\n\n    this.updateState('query', query);\n  }\n\n  return search(this, query);\n};\n\nfunction search(that, query) {\n  if (that.vuex) {\n    that.commit('SET_FILTER', query);\n  } else {\n    that.page = 1;\n    that.updateState('page', 1);\n    that.getData();\n  }\n}\n\n//# sourceURL=webpack://VueTables/./lib/methods/server-search.js?");

/***/ }),

/***/ "./lib/methods/set-columns-dropdown-close-listener.js":
/*!************************************************************!*\
  !*** ./lib/methods/set-columns-dropdown-close-listener.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  var _this = this;\n\n  if (this.opts.columnsDropdown) {\n    var stopProp = function stopProp(e) {\n      return e.stopPropagation();\n    };\n\n    var handler = function handler() {\n      if (_this.displayColumnsDropdown) {\n        _this.displayColumnsDropdown = false;\n      }\n    };\n\n    this.$refs.columnsdropdown.addEventListener('click', stopProp);\n    document.addEventListener('click', handler);\n    this.$once('hook:beforeDestroy', function () {\n      document.removeEventListener('click', handler);\n\n      _this.$refs.columnsdropdown.removeEventListener('click', stopProp);\n    });\n  }\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/set-columns-dropdown-close-listener.js?");

/***/ }),

/***/ "./lib/methods/set-custom-filters.js":
/*!*******************************************!*\
  !*** ./lib/methods/set-custom-filters.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (filters) {\n  var sendRequest = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n\n  for (var key in filters) {\n    this.customQueries[key] = filters[key];\n  }\n\n  this.updateState('customQueries', this.customQueries);\n\n  if (this.source === 'server' && sendRequest) {\n    this.getData();\n  }\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/set-custom-filters.js?");

/***/ }),

/***/ "./lib/methods/set-data.js":
/*!*********************************!*\
  !*** ./lib/methods/set-data.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nmodule.exports = function (response) {\n  var data = this.opts.responseAdapter.call(this, response);\n\n  if (this.opts.useDrawCounter) {\n    if (typeof data.draw === 'undefined') {\n      console.error(\"Cannot find `draw` property in response. This response parameter is required when useDrawCounter is set to true\");\n      return;\n    }\n\n    if (this.drawCounter !== data.draw) {\n      return;\n    }\n  }\n\n  if (this.opts.pagination.virtual && this.page !== 1) {\n    this.data = this.data.concat(data.data);\n  } else {\n    this.data = data.data;\n  }\n\n  if (isNaN(data.count)) {\n    console.error(\"vue-tables-3: invalid 'count' property. Expected number, got \".concat(_typeof(data.count)));\n    console.error('count equals', data.count);\n    throw new Error();\n  }\n\n  this.count = parseInt(data.count);\n  setTimeout(function () {\n    this.dispatch('loaded', response);\n  }.bind(this), 0);\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/set-data.js?");

/***/ }),

/***/ "./lib/methods/set-datepicker-text.js":
/*!********************************************!*\
  !*** ./lib/methods/set-datepicker-text.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (column, start, end) {\n  var dateFormat = this.dateFormat(column);\n  var el = typeof column === 'string' ? $(this.refs.filters[column]) : column;\n  el.text(start.format(dateFormat) + \" - \" + end.format(dateFormat));\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/set-datepicker-text.js?");

/***/ }),

/***/ "./lib/methods/set-editing-cell.js":
/*!*****************************************!*\
  !*** ./lib/methods/set-editing-cell.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function _setEditingCell(row, column) {\n  return function (editing) {\n    var _this = this;\n\n    if (editing) {\n      this.editing.push({\n        id: row[this.opts.uniqueKey],\n        column: column,\n        originalValue: row[column]\n      });\n    } else {\n      this.editing = this.editing.filter(function (e) {\n        return e.id !== row[_this.opts.uniqueKey];\n      });\n    }\n  }.bind(this);\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/set-editing-cell.js?");

/***/ }),

/***/ "./lib/methods/set-filter.js":
/*!***********************************!*\
  !*** ./lib/methods/set-filter.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar merge = __webpack_require__(/*! merge */ \"./node_modules/merge/merge.js\");\n\nmodule.exports = function (filter) {\n  if (!this.opts.filterable) {\n    console.warn(\"vue-tables-3: Unable to set filter. Filtering is disabled (filterable: false)\");\n    return;\n  }\n\n  ;\n\n  if (this.opts.filterByColumn && typeof filter === 'string') {\n    console.warn(\"vue-tables-3: Unable to set filter. Filter value must be an object (`filterByColumn` is set to `true`)\");\n    return;\n  }\n\n  ;\n\n  if (!this.opts.filterByColumn && typeof filter !== 'string') {\n    console.warn(\"vue-tables-3: Unable to set filter. Filter value must be a string (`filterByColumn` is set to `false`)\");\n    return;\n  }\n\n  ;\n  var mergedFilter = this.opts.filterByColumn ? merge(true, this.query, filter) : filter;\n\n  if (this.vuex) {\n    this.commit('SET_FILTER', mergedFilter);\n  } else {\n    this.query = mergedFilter;\n    this.setPage(1, true);\n  }\n\n  this.updateState('query', mergedFilter);\n\n  this._setFiltersDOM(filter);\n\n  if (this.source == 'server') {\n    this.getData();\n  }\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/set-filter.js?");

/***/ }),

/***/ "./lib/methods/set-filters-dom.js":
/*!****************************************!*\
  !*** ./lib/methods/set-filters-dom.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nmodule.exports = function (query) {\n  var el;\n\n  if (this.opts.filterByColumn) {\n    for (var column in query) {\n      if (this.isDateFilter(column)) {\n        if (query[column] && _typeof(query[column]) === 'object') {\n          var start = typeof query[column].start === 'string' ? moment(query[column].start, 'YYYY-MM-DD') : query[column].start;\n          var end = typeof query[column].end === 'string' ? moment(query[column].end, 'YYYY-MM-DD') : query[column].end;\n\n          this._setDatepickerText(column, start, end);\n        } else {\n          $(this.refs.filters[column]).html(\"<span class='VueTables__filter-placeholder'>\" + this.display('filterBy', {\n            column: this.getHeading(column)\n          }) + \"</span>\");\n        }\n\n        continue;\n      }\n\n      el = this.refs.filters[column];\n\n      if (el) {\n        el.value = query[column];\n      } else if (this.columns.indexOf(column) === -1) {\n        console.error(\"vue-tables-3: Error in setting filter value. Column '\".concat(column, \"' does not exist.\"));\n      }\n    }\n  } else {\n    var el = this.refs.genericFilter;\n    if (el) el.value = query;\n  }\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/set-filters-dom.js?");

/***/ }),

/***/ "./lib/methods/set-limit.js":
/*!**********************************!*\
  !*** ./lib/methods/set-limit.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nmodule.exports = function (e) {\n  this.limit = _typeof(e) === 'object' ? e.target.value : e;\n  this.updateState('perPage', this.limit);\n  this.dispatch('limit', parseInt(this.limit));\n  this.setPage(1);\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/set-limit.js?");

/***/ }),

/***/ "./lib/methods/set-order.js":
/*!**********************************!*\
  !*** ./lib/methods/set-order.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (column, ascending) {\n  this.orderBy.column = column;\n  this.orderBy.ascending = ascending;\n  this.updateState('orderBy', {\n    column: column,\n    ascending: ascending\n  });\n\n  if (this.source == 'server') {\n    this.getData();\n  }\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/set-order.js?");

/***/ }),

/***/ "./lib/methods/set-page.js":
/*!*********************************!*\
  !*** ./lib/methods/set-page.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (page, preventRequest) {\n  page = parseInt(page);\n\n  if (page < 1) {\n    page = 1;\n  }\n\n  if (page > this.totalPages && this.opts.pagination.virtual) {\n    return;\n  }\n\n  if (this.totalPages > 0 && page > this.totalPages) {\n    page = this.totalPages;\n  }\n\n  this.page = page;\n  this.updateState('page', page);\n  this.dispatch('pagination', page);\n  if (this.source == 'server' && !preventRequest) this.getData();\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/set-page.js?");

/***/ }),

/***/ "./lib/methods/set-request-params.js":
/*!*******************************************!*\
  !*** ./lib/methods/set-request-params.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var sendRequest = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n\n  if (params.page) {\n    this.setPage(params.page, true);\n  }\n\n  if (params.limit) {\n    this.setLimit(params.limit, false);\n  }\n\n  if (params.order) {\n    this.setOrder(params.order.column, params.order.ascending, false);\n  }\n\n  if (params.filters) {\n    this.setFilter(params.filters, false);\n  }\n\n  if (params.customFilters) {\n    this.setCustomFilters(params.customFilters, false);\n  }\n\n  if (sendRequest) {\n    this.getData();\n  }\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/set-request-params.js?");

/***/ }),

/***/ "./lib/methods/set-user-multi-sort.js":
/*!********************************************!*\
  !*** ./lib/methods/set-user-multi-sort.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (secondaryCol) {\n  var primaryCol = this.orderBy.column;\n  var primaryAsc = this.orderBy.ascending;\n  if (!this.userMultiSorting[primaryCol]) this.userMultiSorting[primaryCol] = [];\n  var multi = this.userMultiSorting[primaryCol];\n\n  if (primaryCol === secondaryCol) {\n    if (!multi.length || primaryAsc) {\n      // primary is the only sorted column or is ascending\n      this.orderBy.ascending = !this.orderBy.ascending;\n    } else {\n      // remove primary column and make secondary primary\n      this.orderBy = multi.shift();\n      this.userMultiSorting = {};\n      this.userMultiSorting[this.orderBy.column] = multi;\n    }\n  } else {\n    var secondary = multi.filter(function (col) {\n      return col.column == secondaryCol;\n    })[0];\n\n    if (secondary) {\n      if (!secondary.ascending) {\n        // remove sort\n        this.userMultiSorting[primaryCol] = multi.filter(function (col) {\n          return col.column != secondaryCol;\n        });\n        if (!this.userMultiSorting[primaryCol].length) this.userMultiSorting = {};\n      } else {\n        // change direction\n        secondary.ascending = !secondary.ascending;\n      }\n    } else {\n      // add sort\n      multi.push({\n        column: secondaryCol,\n        ascending: true\n      });\n    }\n  } // force re-compilation of the filteredData computed property\n\n\n  this.time = Date.now();\n  this.dispatch('sorted', getMultiSortData(this.orderBy, this.userMultiSorting));\n};\n\nfunction getMultiSortData(main, secondary) {\n  var cols = [JSON.parse(JSON.stringify(main))];\n  cols = cols.concat(secondary[main.column]);\n  return cols;\n}\n\n;\n\n//# sourceURL=webpack://VueTables/./lib/methods/set-user-multi-sort.js?");

/***/ }),

/***/ "./lib/methods/should-show-column-on-init.js":
/*!***************************************************!*\
  !*** ./lib/methods/should-show-column-on-init.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (column) {\n  if (this.opts.visibleColumns) {\n    return this.opts.visibleColumns.includes(column);\n  }\n\n  if (this.opts.hiddenColumns) {\n    return !this.opts.hiddenColumns.includes(column);\n  }\n\n  return true;\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/should-show-column-on-init.js?");

/***/ }),

/***/ "./lib/methods/sortable-chevron-class.js":
/*!***********************************************!*\
  !*** ./lib/methods/sortable-chevron-class.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (column) {\n  var cls = this.opts.sortIcon.base + ' ';\n  if (!this.sortable(column)) return;\n\n  if (this.opts.sortIcon.is && !this._currentlySorted(column)) {\n    cls += this.opts.sortIcon.is + ' ';\n  }\n\n  if (this.hasMultiSort && this.orderBy.column && this.userMultiSorting[this.orderBy.column]) {\n    var col = this.userMultiSorting[this.orderBy.column].filter(function (c) {\n      return c.column === column;\n    })[0];\n    if (col) cls += col.ascending ? this.opts.sortIcon.up : this.opts.sortIcon.down;\n  }\n\n  if (column == this.orderBy.column) {\n    cls += this.orderBy.ascending == 1 ? this.opts.sortIcon.up : this.opts.sortIcon.down;\n  }\n\n  return cls;\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/sortable-chevron-class.js?");

/***/ }),

/***/ "./lib/methods/sortable-class.js":
/*!***************************************!*\
  !*** ./lib/methods/sortable-class.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (column) {\n  var c = this.sortable(column) ? 'VueTables__sortable ' : '';\n  c += this.columnClass(column);\n\n  if (this.orderBy.column === column) {\n    c += \"\".concat(column, \"-sorted-\") + (this.orderBy.ascending ? 'asc' : 'desc');\n  }\n\n  return c;\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/sortable-class.js?");

/***/ }),

/***/ "./lib/methods/sortable.js":
/*!*********************************!*\
  !*** ./lib/methods/sortable.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (column) {\n  var sortAll = typeof this.opts.sortable == 'boolean' && this.opts.sortable;\n  if (sortAll) return true;\n  return this.opts.sortable.indexOf(column) > -1;\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/sortable.js?");

/***/ }),

/***/ "./lib/methods/toggle-all-rows.js":
/*!****************************************!*\
  !*** ./lib/methods/toggle-all-rows.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (e) {\n  var _this = this;\n\n  var data;\n\n  if (this.source === 'client') {\n    data = this.opts.selectable.selectAllMode === 'page' ? this.filteredData : this.allFilteredData;\n  } else {\n    data = this.data;\n  }\n\n  if (e.target.checked) {\n    if (this.opts.selectable.only) {\n      this.selectedRows = data.filter(function (row) {\n        return _this.opts.selectable.only(row);\n      });\n    } else {\n      this.selectedRows = data;\n    }\n  } else {\n    this.selectedRows = [];\n  }\n\n  this.dispatch('select', this.selectedRows);\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/toggle-all-rows.js?");

/***/ }),

/***/ "./lib/methods/toggle-child-row.js":
/*!*****************************************!*\
  !*** ./lib/methods/toggle-child-row.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (rowId, e) {\n  if (e) e.stopPropagation();\n\n  if (this.openChildRows.includes(rowId)) {\n    var index = this.openChildRows.indexOf(rowId);\n    this.openChildRows.splice(index, 1);\n  } else {\n    this.openChildRows.push(rowId);\n  }\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/toggle-child-row.js?");

/***/ }),

/***/ "./lib/methods/toggle-column.js":
/*!**************************************!*\
  !*** ./lib/methods/toggle-column.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (column) {\n  var _this = this;\n\n  if (!this.userControlsColumns) {\n    this.userColumnsDisplay = JSON.parse(JSON.stringify(this.allColumns));\n    this.userControlsColumns = true;\n  }\n\n  if (this.userColumnsDisplay.includes(column)) {\n    // can't have no columns\n    if (this.userColumnsDisplay.length === 1) return;\n    var index = this.userColumnsDisplay.indexOf(column);\n    this.userColumnsDisplay.splice(index, 1);\n  } else {\n    this.userColumnsDisplay.push(column);\n  }\n\n  this.updateState('userControlsColumns', true);\n  this.updateState('userColumnsDisplay', this.userColumnsDisplay);\n  this.$nextTick(function () {\n    _this._setFiltersDOM(_this.query);\n  });\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/toggle-column.js?");

/***/ }),

/***/ "./lib/methods/toggle-columns-dropdown.js":
/*!************************************************!*\
  !*** ./lib/methods/toggle-columns-dropdown.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  this.displayColumnsDropdown = !this.displayColumnsDropdown;\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/toggle-columns-dropdown.js?");

/***/ }),

/***/ "./lib/methods/toggle-group-direction.js":
/*!***********************************************!*\
  !*** ./lib/methods/toggle-group-direction.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  if (this.orderBy.column != this.groupBy[0]) {\n    this.setOrder(this.groupBy[0], true);\n  } else {\n    this.setOrder(this.groupBy[0], !this.orderBy.ascending);\n  }\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/toggle-group-direction.js?");

/***/ }),

/***/ "./lib/methods/toggle-row-selection.js":
/*!*********************************************!*\
  !*** ./lib/methods/toggle-row-selection.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (e, row, index, disabled) {\n  var _this = this;\n\n  e.stopPropagation();\n  if (disabled) return;\n  var id = this.opts.uniqueKey;\n\n  if (this.opts.selectable.mode === 'single') {\n    this.selectedRows = !this.isRowSelected(row) ? [row] : [];\n  } else {\n    var prevIndex = this.selectedIndex;\n    this.selectedIndex = index; // Handle multiple select via Shift+Click\n\n    if (e.shiftKey && prevIndex !== this.selectedIndex) {\n      // Get the subset of the message list between the\n      // two indicies.\n      var subset = this.filteredData.slice(Math.min(prevIndex, this.selectedIndex), Math.max(prevIndex, this.selectedIndex)); // Determine the operation based on the checked state\n      // of the clicked checkbox.\n\n      var toggleFn = !this.isRowSelected(row) ? addCheckedSubset : removeCheckedSubset;\n      this.selectedRows = toggleFn(this.selectedRows, subset).filter(function (row) {\n        return !_this.opts.selectable.only || _this.opts.selectable.only(row);\n      });\n    } else {\n      if (!this.isRowSelected(row)) {\n        this.selectedRows.push(row);\n      } else {\n        this.selectedRows = this.selectedRows.filter(function (R) {\n          return R[id] !== row[id];\n        });\n      }\n    }\n  }\n\n  this.dispatch('select', this.selectedRows);\n};\n\nvar notInArr = function notInArr(item) {\n  return this.indexOf(item) === -1;\n};\n\nfunction addCheckedSubset(current, add) {\n  if (!current.length) return add; // Add only items which are not already checked\n\n  return current.concat(add.filter(notInArr, current));\n}\n\nfunction removeCheckedSubset(current, remove) {\n  // Return only items which are not in subset\n  return current.filter(notInArr, remove);\n}\n\n//# sourceURL=webpack://VueTables/./lib/methods/toggle-row-selection.js?");

/***/ }),

/***/ "./lib/methods/toggle-row.js":
/*!***********************************!*\
  !*** ./lib/methods/toggle-row.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (rowId) {\n  var _this = this;\n\n  if (!!this.selectedRows.find(function (row) {\n    return String(row[_this.opts.uniqueKey]) === String(rowId);\n  })) {\n    this.unselectRow(rowId);\n  } else {\n    this.selectRow(rowId);\n  }\n\n  return this.selectedRows;\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/toggle-row.js?");

/***/ }),

/***/ "./lib/methods/transform-date-strings-to-moment.js":
/*!*********************************************************!*\
  !*** ./lib/methods/transform-date-strings-to-moment.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  this.data.forEach(function (row, index) {\n    this.opts.dateColumns.forEach(function (column) {\n      row[column] = row[column] ? moment(row[column], this.opts.toMomentFormat) : '';\n    }.bind(this));\n  }.bind(this));\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/transform-date-strings-to-moment.js?");

/***/ }),

/***/ "./lib/methods/unselect-row.js":
/*!*************************************!*\
  !*** ./lib/methods/unselect-row.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (rowId) {\n  var _this = this;\n\n  this.selectedRows = this.selectedRows.filter(function (row) {\n    return String(row[_this.opts.uniqueKey]) !== String(rowId);\n  });\n  return this.selectedRows;\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/unselect-row.js?");

/***/ }),

/***/ "./lib/methods/unselect-rows.js":
/*!**************************************!*\
  !*** ./lib/methods/unselect-rows.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (rowIds) {\n  var _this = this;\n\n  rowIds = rowIds.map(function (id) {\n    return String(id);\n  });\n  this.selectedRows = this.selectedRows.filter(function (row) {\n    return !rowIds.includes(String(row[_this.opts.uniqueKey]));\n  });\n  return this.selectedRows;\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/unselect-rows.js?");

/***/ }),

/***/ "./lib/methods/update-state.js":
/*!*************************************!*\
  !*** ./lib/methods/update-state.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (key, value) {\n  if (!this.opts.saveState || !this.activeState) return;\n\n  try {\n    var currentState = JSON.parse(this.storage.getItem(this.stateKey));\n  } catch (e) {\n    var currentState = this.initState();\n  }\n\n  currentState[key] = value;\n  this.storage.setItem(this.stateKey, JSON.stringify(currentState));\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/update-state.js?");

/***/ }),

/***/ "./lib/methods/update-value.js":
/*!*************************************!*\
  !*** ./lib/methods/update-value.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar clone = __webpack_require__(/*! lodash.clonedeep */ \"./node_modules/lodash.clonedeep/index.js\");\n\nmodule.exports = function _updateValue(row, column) {\n  return function (e) {\n    var _this = this;\n\n    var oldVal = row[column];\n    row[column] = getValue(e);\n    var data = clone(this.data).map(function (r) {\n      if (r[_this.opts.uniqueKey] === row[_this.opts.uniqueKey]) {\n        return row;\n      }\n\n      return r;\n    });\n    this.dispatch('input', data);\n    this.dispatch('update', {\n      row: row,\n      column: column,\n      oldVal: oldVal,\n      newVal: row[column]\n    });\n  }.bind(this);\n};\n\nfunction getValue(val) {\n  if (val.target) {\n    return val.target.type === 'checkbox' ? val.target.checked : val.target.value;\n  }\n\n  return val;\n}\n\n//# sourceURL=webpack://VueTables/./lib/methods/update-value.js?");

/***/ }),

/***/ "./lib/mixins/before-destroy.js":
/*!**************************************!*\
  !*** ./lib/mixins/before-destroy.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// import EventBus from '../bus';\nmodule.exports = function () {\n  var _this = this;\n\n  var el; // if (this.opts.destroyEventBus) {\n  //     EventBus.$off();\n  //     EventBus.$destroy();\n  // }\n\n  if (this.vuex && !this.opts.preserveState) {\n    this.$store.unregisterModule(this.name);\n  }\n\n  if (this.opts.filterByColumn) {\n    this.datepickerColumns.forEach(function (column) {\n      el = $(_this.$el).find(\"#VueTables__\" + $.escapeSelector(column) + \"-filter\").data('daterangepicker');\n      if (el) el.remove();\n    });\n  }\n};\n\n//# sourceURL=webpack://VueTables/./lib/mixins/before-destroy.js?");

/***/ }),

/***/ "./lib/mixins/computed.js":
/*!********************************!*\
  !*** ./lib/mixins/computed.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = {\n  listColumnsObject: __webpack_require__(/*! ../computed/list-columns-object */ \"./lib/computed/list-columns-object.js\"),\n  allColumns: __webpack_require__(/*! ../computed/all-columns */ \"./lib/computed/all-columns.js\"),\n  templatesKeys: __webpack_require__(/*! ../computed/templates-keys */ \"./lib/computed/templates-keys.js\"),\n  opts: __webpack_require__(/*! ../computed/opts */ \"./lib/computed/opts.js\"),\n  tableData: __webpack_require__(/*! ../computed/table-data */ \"./lib/computed/table-data.js\"),\n  storage: __webpack_require__(/*! ../computed/storage */ \"./lib/computed/storage.js\"),\n  filterableColumns: __webpack_require__(/*! ../computed/filterable-columns */ \"./lib/computed/filterable-columns.js\"),\n  datepickerColumns: __webpack_require__(/*! ../computed/datepicker-columns */ \"./lib/computed/datepicker-columns.js\"),\n  hasChildRow: __webpack_require__(/*! ../computed/has-child-row */ \"./lib/computed/has-child-row.js\"),\n  colspan: __webpack_require__(/*! ../computed/colspan */ \"./lib/computed/colspan.js\"),\n  hasGenericFilter: __webpack_require__(/*! ../computed/has-generic-filter */ \"./lib/computed/has-generic-filter.js\"),\n  perPageValues: __webpack_require__(/*! ../computed/per-page-values */ \"./lib/computed/per-page-values.js\"),\n  filtersCount: function filtersCount() {\n    return this.opts.filterByColumn ? Object.values(this.query).filter(function (val) {\n      return !!val;\n    }).length : !!this.query ? 1 : 0;\n  },\n  stateKey: function stateKey() {\n    var key = this.name ? this.name : this.id;\n    return 'vuetables_' + key;\n  },\n  Page: function Page() {\n    return this.page;\n  },\n  tabIndex: function tabIndex() {\n    return this.opts.tabbable ? 0 : -1;\n  }\n};\n\n//# sourceURL=webpack://VueTables/./lib/mixins/computed.js?");

/***/ }),

/***/ "./lib/mixins/created.js":
/*!*******************************!*\
  !*** ./lib/mixins/created.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar is_empty = __webpack_require__(/*! ../helpers/is-empty */ \"./lib/helpers/is-empty.js\");\n\nvar registerVuexModule = __webpack_require__(/*! ../state/register-module */ \"./lib/state/register-module.js\");\n\nmodule.exports = function (self) {\n  if (self.vuex) {\n    registerVuexModule(self);\n  } else {\n    self.limit = self.opts.perPage;\n  }\n\n  self.columnsDisplay = false;\n  if (is_empty(self.opts.columnsDisplay) || typeof window === 'undefined') return;\n  self.columnsDisplay = getColumnsDisplay(self.opts.columnsDisplay);\n  window.addEventListener('resize', function () {\n    self.windowWidth = window.innerWidth;\n  }.bind(self));\n};\n\nfunction getColumnsDisplay(columnsDisplay) {\n  var res = {};\n  var range;\n  var device;\n  var operator;\n\n  for (var column in columnsDisplay) {\n    operator = getOperator(columnsDisplay[column]);\n\n    try {\n      device = getDevice(columnsDisplay[column]);\n      range = getRange(device, operator);\n      res[column] = range.concat([operator]);\n    } catch (err) {\n      console.warn('Unknown device ' + device);\n    }\n  }\n\n  return res;\n}\n\nfunction getRange(device, operator) {\n  var devices = {\n    desktop: [1024, null],\n    tablet: [480, 1024],\n    mobile: [0, 480],\n    tabletL: [768, 1024],\n    tabletP: [480, 768],\n    mobileL: [320, 480],\n    mobileP: [0, 320]\n  };\n\n  switch (operator) {\n    case 'min':\n      return [devices[device][0], null];\n\n    case 'max':\n      return [0, devices[device][1]];\n\n    default:\n      return devices[device];\n  }\n}\n\nfunction getOperator(val) {\n  var pieces = val.split('_');\n  if (['not', 'min', 'max'].indexOf(pieces[0]) > -1) return pieces[0];\n  return false;\n}\n\nfunction getDevice(val) {\n  var pieces = val.split('_');\n  return pieces.length > 1 ? pieces[1] : pieces[0];\n}\n\n//# sourceURL=webpack://VueTables/./lib/mixins/created.js?");

/***/ }),

/***/ "./lib/mixins/data.js":
/*!****************************!*\
  !*** ./lib/mixins/data.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  return {\n    id: makeId(),\n    allFilteredData: [],\n    openChildRows: [],\n    windowWidth: typeof window !== 'undefined' ? window.innerWidth : null,\n    userMultiSorting: {},\n    editing: [],\n    selectedIndex: false,\n    loadingError: false,\n    cancelToken: null,\n    drawCounter: 0,\n    initialRequestSent: false,\n    refs: {\n      genericFilter: null,\n      table: null,\n      filters: {}\n    }\n  };\n};\n\nfunction makeId() {\n  var text = \"\";\n  var possible = \"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\";\n\n  for (var i = 0; i < 5; i++) {\n    text += possible.charAt(Math.floor(Math.random() * possible.length));\n  }\n\n  return text;\n}\n\n//# sourceURL=webpack://VueTables/./lib/mixins/data.js?");

/***/ }),

/***/ "./lib/mixins/methods.js":
/*!*******************************!*\
  !*** ./lib/mixins/methods.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = {\n  initQuery: __webpack_require__(/*! ../methods/init-query */ \"./lib/methods/init-query.js\"),\n  resetQuery: __webpack_require__(/*! ../methods/reset-query */ \"./lib/methods/reset-query.js\"),\n  initCustomFilters: __webpack_require__(/*! ../methods/init-custom-filters */ \"./lib/methods/init-custom-filters.js\"),\n  initOptions: __webpack_require__(/*! ../methods/init-options */ \"./lib/methods/init-options.js\"),\n  sortableClass: __webpack_require__(/*! ../methods/sortable-class */ \"./lib/methods/sortable-class.js\"),\n  sortableChevronClass: __webpack_require__(/*! ../methods/sortable-chevron-class */ \"./lib/methods/sortable-chevron-class.js\"),\n  display: __webpack_require__(/*! ../methods/display */ \"./lib/methods/display.js\"),\n  orderByColumn: __webpack_require__(/*! ../methods/order-by-column */ \"./lib/methods/order-by-column.js\"),\n  getHeading: __webpack_require__(/*! ../methods/get-heading */ \"./lib/methods/get-heading.js\"),\n  getHeadingTooltip: __webpack_require__(/*! ../methods/get-heading-tooltip */ \"./lib/methods/get-heading-tooltip.js\"),\n  sortable: __webpack_require__(/*! ../methods/sortable */ \"./lib/methods/sortable.js\"),\n  serverSearch: __webpack_require__(/*! ../methods/server-search */ \"./lib/methods/server-search.js\"),\n  initOrderBy: __webpack_require__(/*! ../methods/init-order-by */ \"./lib/methods/init-order-by.js\"),\n  initDateFilters: __webpack_require__(/*! ../methods/init-date-filters */ \"./lib/methods/init-date-filters.js\"),\n  setFilter: __webpack_require__(/*! ../methods/set-filter */ \"./lib/methods/set-filter.js\"),\n  setPage: __webpack_require__(/*! ../methods/set-page */ \"./lib/methods/set-page.js\"),\n  setOrder: __webpack_require__(/*! ../methods/set-order */ \"./lib/methods/set-order.js\"),\n  filterable: __webpack_require__(/*! ../methods/filterable */ \"./lib/methods/filterable.js\"),\n  isTextFilter: __webpack_require__(/*! ../methods/is-text-filter */ \"./lib/methods/is-text-filter.js\"),\n  isDateFilter: __webpack_require__(/*! ../methods/is-date-filter */ \"./lib/methods/is-date-filter.js\"),\n  isListFilter: __webpack_require__(/*! ../methods/is-list-filter */ \"./lib/methods/is-list-filter.js\"),\n  highlightMatch: __webpack_require__(/*! ../filters/highlight-matches */ \"./lib/filters/highlight-matches.js\"),\n  formatDate: __webpack_require__(/*! ../filters/format-date */ \"./lib/filters/format-date.js\"),\n  hasDateFilters: __webpack_require__(/*! ../methods/has-date-filters */ \"./lib/methods/has-date-filters.js\"),\n  optionText: __webpack_require__(/*! ../filters/option-text */ \"./lib/filters/option-text.js\"),\n  render: __webpack_require__(/*! ../methods/render */ \"./lib/methods/render.js\"),\n  rowWasClicked: __webpack_require__(/*! ../methods/row-was-clicked */ \"./lib/methods/row-was-clicked.js\"),\n  setLimit: __webpack_require__(/*! ../methods/set-limit */ \"./lib/methods/set-limit.js\"),\n  getOpenChildRows: __webpack_require__(/*! ../methods/get-open-child-rows */ \"./lib/methods/get-open-child-rows.js\"),\n  dispatch: __webpack_require__(/*! ../methods/dispatch */ \"./lib/methods/dispatch.js\"),\n  toggleChildRow: __webpack_require__(/*! ../methods/toggle-child-row */ \"./lib/methods/toggle-child-row.js\"),\n  childRowTogglerClass: __webpack_require__(/*! ../methods/child-row-toggler-class */ \"./lib/methods/child-row-toggler-class.js\"),\n  sendRequest: __webpack_require__(/*! ../methods/send-request */ \"./lib/methods/send-request.js\"),\n  getResponseData: __webpack_require__(/*! ../methods/get-response-data */ \"./lib/methods/get-response-data.js\"),\n  getSortFn: __webpack_require__(/*! ../methods/get-sort-fn */ \"./lib/methods/get-sort-fn.js\"),\n  initState: __webpack_require__(/*! ../methods/init-state */ \"./lib/methods/init-state.js\"),\n  updateState: __webpack_require__(/*! ../methods/update-state */ \"./lib/methods/update-state.js\"),\n  columnClass: __webpack_require__(/*! ../methods/column-class */ \"./lib/methods/column-class.js\"),\n  getName: __webpack_require__(/*! ../methods/get-name */ \"./lib/methods/get-name.js\"),\n  toggleColumn: __webpack_require__(/*! ../methods/toggle-column */ \"./lib/methods/toggle-column.js\"),\n  setUserMultiSort: __webpack_require__(/*! ../methods/set-user-multi-sort */ \"./lib/methods/set-user-multi-sort.js\"),\n  _cellClasses: __webpack_require__(/*! ../methods/cell-classes */ \"./lib/methods/cell-classes.js\"),\n  _setFiltersDOM: __webpack_require__(/*! ../methods/set-filters-dom */ \"./lib/methods/set-filters-dom.js\"),\n  _currentlySorted: __webpack_require__(/*! ../methods/currently-sorted */ \"./lib/methods/currently-sorted.js\"),\n  _getChildRowTemplate: __webpack_require__(/*! ../methods/get-child-row-template */ \"./lib/methods/get-child-row-template.js\"),\n  _toggleColumnsDropdown: __webpack_require__(/*! ../methods/toggle-columns-dropdown */ \"./lib/methods/toggle-columns-dropdown.js\"),\n  _onlyColumn: __webpack_require__(/*! ../methods/only-column */ \"./lib/methods/only-column.js\"),\n  _onPagination: __webpack_require__(/*! ../methods/on-pagination */ \"./lib/methods/on-pagination.js\"),\n  _toggleGroupDirection: __webpack_require__(/*! ../methods/toggle-group-direction */ \"./lib/methods/toggle-group-direction.js\"),\n  _getInitialDateRange: __webpack_require__(/*! ../methods/get-initial-date-range */ \"./lib/methods/get-initial-date-range.js\"),\n  _setDatepickerText: __webpack_require__(/*! ../methods/set-datepicker-text */ \"./lib/methods/set-datepicker-text.js\"),\n  _initialOrderAscending: __webpack_require__(/*! ../methods/initial-order-ascending */ \"./lib/methods/initial-order-ascending.js\"),\n  dateFormat: __webpack_require__(/*! ../methods/date-format */ \"./lib/methods/date-format.js\"),\n  _setColumnsDropdownCloseListener: __webpack_require__(/*! ../methods/set-columns-dropdown-close-listener */ \"./lib/methods/set-columns-dropdown-close-listener.js\"),\n  _getValue: __webpack_require__(/*! ../methods/get-value */ \"./lib/methods/get-value.js\"),\n  _getColumnName: __webpack_require__(/*! ../methods/get-column-name */ \"./lib/methods/get-column-name.js\"),\n  _shouldShowColumnOnInit: __webpack_require__(/*! ../methods/should-show-column-on-init */ \"./lib/methods/should-show-column-on-init.js\"),\n  _setEditingCell: __webpack_require__(/*! ../methods/set-editing-cell */ \"./lib/methods/set-editing-cell.js\"),\n  _revertValue: __webpack_require__(/*! ../methods/revert-value */ \"./lib/methods/revert-value.js\"),\n  _updateValue: __webpack_require__(/*! ../methods/update-value */ \"./lib/methods/update-value.js\"),\n  _filterType: __webpack_require__(/*! ../methods/filter-type */ \"./lib/methods/filter-type.js\"),\n  _search: __webpack_require__(/*! ../methods/search */ \"./lib/methods/search.js\"),\n  setCustomFilters: __webpack_require__(/*! ../methods/set-custom-filters */ \"./lib/methods/set-custom-filters.js\"),\n  toggleRowSelection: __webpack_require__(/*! ../methods/toggle-row-selection */ \"./lib/methods/toggle-row-selection.js\"),\n  isRowSelected: __webpack_require__(/*! ../methods/is-row-selected */ \"./lib/methods/is-row-selected.js\"),\n  toggleAllRows: __webpack_require__(/*! ../methods/toggle-all-rows */ \"./lib/methods/toggle-all-rows.js\"),\n  resetSelectedRows: __webpack_require__(/*! ../methods/reset-selected-rows */ \"./lib/methods/reset-selected-rows.js\"),\n  selectRow: __webpack_require__(/*! ../methods/select-row */ \"./lib/methods/select-row.js\"),\n  selectRows: __webpack_require__(/*! ../methods/select-rows */ \"./lib/methods/select-rows.js\"),\n  unselectRow: __webpack_require__(/*! ../methods/unselect-row */ \"./lib/methods/unselect-row.js\"),\n  unselectRows: __webpack_require__(/*! ../methods/unselect-rows */ \"./lib/methods/unselect-rows.js\"),\n  toggleRow: __webpack_require__(/*! ../methods/toggle-row */ \"./lib/methods/toggle-row.js\"),\n  selectAllRows: __webpack_require__(/*! ../methods/select-all-rows */ \"./lib/methods/select-all-rows.js\")\n};\n\n//# sourceURL=webpack://VueTables/./lib/mixins/methods.js?");

/***/ }),

/***/ "./lib/mixins/provide.js":
/*!*******************************!*\
  !*** ./lib/mixins/provide.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  var _this = this;\n\n  return {\n    count: function count() {\n      return _this.count;\n    },\n    rowWasClicked: this.rowWasClicked,\n    render: this.render,\n    groupBy: this.groupBy,\n    opts: function opts() {\n      return _this.opts;\n    },\n    limit: function limit() {\n      return _this.limit;\n    },\n    setLimit: this.setLimit,\n    perPageValues: function perPageValues() {\n      return _this.perPageValues;\n    },\n    page: function page() {\n      return _this.page;\n    },\n    id: this.id,\n    theme: this.theme,\n    display: this.display,\n    origColumns: this.columns,\n    allColumns: function allColumns() {\n      return _this.allColumns;\n    },\n    sortableClass: this.sortableClass,\n    getHeadingTooltip: this.getHeadingTooltip,\n    getHeading: this.getHeading,\n    sortable: this.sortable,\n    sortableChevronClass: this.sortableChevronClass,\n    orderByColumn: this.orderByColumn,\n    allFilteredData: function allFilteredData() {\n      return _this.allFilteredData;\n    },\n    filteredData: function filteredData() {\n      return _this.filteredData;\n    },\n    tableData: function tableData() {\n      return _this.tableData;\n    },\n    source: this.source,\n    colspan: function colspan() {\n      return _this.colspan;\n    },\n    setEditingCell: this._setEditingCell,\n    revertValue: this._revertValue,\n    updateValue: this._updateValue,\n    editing: function editing() {\n      return _this.editing;\n    },\n    hasChildRow: function hasChildRow() {\n      return _this.hasChildRow;\n    },\n    getChildRowTemplate: this._getChildRowTemplate,\n    openChildRows: function openChildRows() {\n      return _this.openChildRows;\n    },\n    vuex: this.vuex,\n    name: this.name,\n    setPage: this.setPage,\n    totalPages: function totalPages() {\n      return _this.totalPages;\n    },\n    query: function query() {\n      return _this.query;\n    },\n    filterable: this.filterable,\n    filterType: this._filterType,\n    columnClass: this.columnClass,\n    search: this._search,\n    getColumnName: this._getColumnName,\n    onlyColumn: this._onlyColumn,\n    toggleColumn: this.toggleColumn,\n    toggleColumnsDropdown: this._toggleColumnsDropdown,\n    displayColumnsDropdown: function displayColumnsDropdown() {\n      return _this.displayColumnsDropdown;\n    },\n    childRowTogglerClass: this.childRowTogglerClass,\n    toggleChildRow: this.toggleChildRow,\n    componentsOverride: this.componentsOverride,\n    getValue: this._getValue,\n    cellClasses: this._cellClasses,\n    toggleGroup: this.toggleGroup,\n    groupToggleIcon: this.groupToggleIcon,\n    getGroupSlot: this.getGroupSlot,\n    toggleGroupDirection: this._toggleGroupDirection,\n    collapsedGroups: function collapsedGroups() {\n      return _this.collapsedGroups;\n    },\n    userMultiSorting: function userMultiSorting() {\n      return _this.userMultiSorting;\n    },\n    hasMultiSort: this.hasMultiSort,\n    orderBy: function orderBy() {\n      return _this.orderBy;\n    },\n    isListFilter: this.isListFilter,\n    optionText: this.optionText,\n    dateFormat: this.dateFormat,\n    formatDate: this.formatDate,\n    tabIndex: function tabIndex() {\n      return _this.tabIndex;\n    },\n    toggleRowSelection: this.toggleRowSelection,\n    toggleAllRows: this.toggleAllRows,\n    isRowSelected: this.isRowSelected,\n    loading: function loading() {\n      return _this.loading;\n    },\n    loadingError: function loadingError() {\n      return _this.loadingError;\n    },\n    initialRequestSent: function initialRequestSent() {\n      return _this.initialRequestSent;\n    },\n    setRef: function setRef(key, el) {\n      _this.refs[key] = el;\n    },\n    setFilterRef: function setFilterRef(key, el) {\n      _this.refs.filters[key] = el;\n    }\n  };\n};\n\n//# sourceURL=webpack://VueTables/./lib/mixins/provide.js?");

/***/ }),

/***/ "./lib/state/data.js":
/*!***************************!*\
  !*** ./lib/state/data.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = _default;\n\nvar _merge = _interopRequireDefault(__webpack_require__(/*! merge */ \"./node_modules/merge/merge.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _default(useVuex, source) {\n  var page = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;\n  var data = {\n    vuex: true,\n    activeState: false,\n    userColumnsDisplay: [],\n    userControlsColumns: false,\n    displayColumnsDropdown: false,\n    selectedRows: [],\n    collapsedGroups: []\n  };\n  if (useVuex) return data;\n  data = (0, _merge[\"default\"])(data, {\n    vuex: false,\n    count: 0,\n    customQueries: {},\n    query: null,\n    page: page,\n    limit: 10,\n    windowWidth: typeof window !== 'undefined' ? window.innerWidth : null,\n    orderBy: {\n      column: false,\n      ascending: true\n    }\n  });\n  if (source == 'server') data.data = [];\n  return data;\n}\n\n//# sourceURL=webpack://VueTables/./lib/state/data.js?");

/***/ }),

/***/ "./lib/state/mutations.js":
/*!********************************!*\
  !*** ./lib/state/mutations.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = _default;\n\nvar _merge = _interopRequireDefault(__webpack_require__(/*! merge */ \"./node_modules/merge/merge.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _default(self) {\n  var _ref, _merge$recursive;\n\n  var extra = self.source == 'server' ? (_ref = {}, _defineProperty(_ref, \"\".concat(self.name, \"/SET_DATA\"), function SET_DATA(state, response) {\n    var data = self.opts.responseAdapter.call(self, response);\n    state.data = self.opts.pagination.virtual && state.page !== 1 ? state.data.concat(data.data) : data.data;\n    state.count = parseInt(data.count);\n  }), _defineProperty(_ref, \"\".concat(self.name, \"/ERROR\"), function ERROR(state, payload) {}), _defineProperty(_ref, \"\".concat(self.name, \"/SET_COUNT\"), function SET_COUNT(state, count) {\n    state.count = count;\n  }), _ref) : _defineProperty({}, \"\".concat(self.name, \"/SET_COUNT\"), function SET_COUNT(state, count) {\n    state.count = count;\n  });\n  return _merge[\"default\"].recursive(true, (_merge$recursive = {}, _defineProperty(_merge$recursive, \"\".concat(self.name, \"/PAGINATE\"), function PAGINATE(state, page) {\n    state.page = page;\n    self.updateState('page', page);\n    if (self.source == 'server') self.getData();\n    self.commit('PAGINATION', page);\n  }), _defineProperty(_merge$recursive, \"\".concat(self.name, \"/SET_FILTER\"), function SET_FILTER(state, filter) {\n    state.page = 1;\n    self.updateState('page', 1);\n    state.query = filter;\n\n    if (self.source == 'server') {\n      self.getData();\n    }\n  }), _defineProperty(_merge$recursive, \"\".concat(self.name, \"/PAGINATION\"), function PAGINATION(state, page) {}), _defineProperty(_merge$recursive, \"\".concat(self.name, \"/SET_CUSTOM_FILTER\"), function SET_CUSTOM_FILTER(state, _ref3) {\n    var filter = _ref3.filter,\n        value = _ref3.value;\n    state.customQueries[filter] = value;\n    state.page = 1;\n    self.updateState('page', 1);\n    self.updateState('customQueries', state.customQueries);\n\n    if (self.source == 'server') {\n      self.getData();\n    }\n  }), _defineProperty(_merge$recursive, \"\".concat(self.name, \"/SET_STATE\"), function SET_STATE(state, _ref4) {\n    var page = _ref4.page,\n        query = _ref4.query,\n        customQueries = _ref4.customQueries,\n        limit = _ref4.limit,\n        orderBy = _ref4.orderBy;\n    state.customQueries = customQueries;\n    state.query = query;\n    state.page = page;\n    state.limit = limit;\n    state.ascending = orderBy.ascending;\n    state.sortBy = orderBy.column;\n  }), _defineProperty(_merge$recursive, \"\".concat(self.name, \"/SET_LIMIT\"), function SET_LIMIT(state, limit) {\n    state.page = 1;\n    self.updateState('page', 1);\n    state.limit = limit;\n    if (self.source == 'server') self.getData();\n  }), _defineProperty(_merge$recursive, \"\".concat(self.name, \"/SORT\"), function SORT(state, _ref5) {\n    var column = _ref5.column,\n        ascending = _ref5.ascending;\n    state.ascending = ascending;\n    state.sortBy = column;\n    if (self.source == 'server') self.getData();\n  }), _defineProperty(_merge$recursive, \"\".concat(self.name, \"/SORTED\"), function SORTED(state, data) {}), _defineProperty(_merge$recursive, \"\".concat(self.name, \"/ROW_CLICK\"), function ROW_CLICK(state, row) {}), _defineProperty(_merge$recursive, \"\".concat(self.name, \"/FILTER\"), function FILTER(state, row) {}), _defineProperty(_merge$recursive, \"\".concat(self.name, \"/LIMIT\"), function LIMIT(state, limit) {}), _defineProperty(_merge$recursive, \"\".concat(self.name, \"/INPUT\"), function INPUT(state, payload) {}), _defineProperty(_merge$recursive, \"\".concat(self.name, \"/UPDATE\"), function UPDATE(state, payload) {}), _defineProperty(_merge$recursive, \"\".concat(self.name, \"/LOADING\"), function LOADING(state, payload) {}), _defineProperty(_merge$recursive, \"\".concat(self.name, \"/LOADED\"), function LOADED(state, payload) {}), _defineProperty(_merge$recursive, \"\".concat(self.name, \"/SELECT\"), function SELECT(state, payload) {}), _merge$recursive), extra);\n}\n\n//# sourceURL=webpack://VueTables/./lib/state/mutations.js?");

/***/ }),

/***/ "./lib/state/normal.js":
/*!*****************************!*\
  !*** ./lib/state/normal.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = _default;\n\nfunction _default() {\n  return {\n    computed: {\n      Columns: function Columns() {\n        return this.columns;\n      }\n    }\n  };\n}\n\n//# sourceURL=webpack://VueTables/./lib/state/normal.js?");

/***/ }),

/***/ "./lib/state/register-module.js":
/*!**************************************!*\
  !*** ./lib/state/register-module.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _state = _interopRequireDefault(__webpack_require__(/*! ./state */ \"./lib/state/state.js\"));\n\nvar _mutations = _interopRequireDefault(__webpack_require__(/*! ./mutations */ \"./lib/state/mutations.js\"));\n\nvar _merge = _interopRequireDefault(__webpack_require__(/*! merge */ \"./node_modules/merge/merge.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nmodule.exports = function (self) {\n  var Module = {\n    state: (0, _state[\"default\"])(self),\n    mutations: (0, _mutations[\"default\"])(self)\n  };\n  var hasModule = self.$store.hasModule ? self.$store.hasModule(self.name) : self.$store.state && self.$store.state[self.name];\n\n  if (hasModule) {\n    Module.state = _merge[\"default\"].recursive(Module.state, self.$store.state[self.name]);\n    self.$store.unregisterModule(self.name);\n  }\n\n  self.$store.registerModule(self.name, Module);\n};\n\n//# sourceURL=webpack://VueTables/./lib/state/register-module.js?");

/***/ }),

/***/ "./lib/state/state.js":
/*!****************************!*\
  !*** ./lib/state/state.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = _default;\n\nvar _merge = _interopRequireDefault(__webpack_require__(/*! merge */ \"./node_modules/merge/merge.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _default(self) {\n  var state = {\n    page: self.opts.initialPage ? self.opts.initialPage : 1,\n    limit: self.opts.perPage,\n    count: self.source == 'server' ? 0 : self.data.length,\n    columns: self.columns,\n    data: self.source == 'client' ? self.data : [],\n    query: self.initQuery(),\n    customQueries: self.initCustomFilters(),\n    sortBy: self.opts.orderBy && self.opts.orderBy.column ? self.opts.orderBy.column : false,\n    ascending: self.opts.orderBy && self.opts.orderBy.hasOwnProperty('ascending') ? self.opts.orderBy.ascending : true\n  };\n\n  if (typeof self.$store.state[self.name] !== 'undefined') {\n    return (0, _merge[\"default\"])(true, self.$store.state[self.name], state);\n  }\n\n  return state;\n}\n\n//# sourceURL=webpack://VueTables/./lib/state/state.js?");

/***/ }),

/***/ "./lib/state/vuex.js":
/*!***************************!*\
  !*** ./lib/state/vuex.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = _default;\n\nvar _merge = _interopRequireDefault(__webpack_require__(/*! merge */ \"./node_modules/merge/merge.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _default(source) {\n  var extra = source == 'server' ? serverExtra() : clientExtra();\n  return _merge[\"default\"].recursive(true, {\n    props: {\n      name: {\n        type: String,\n        required: true\n      }\n    },\n    computed: {\n      state: function state() {\n        return this.$store.state[this.name] ? this.$store.state[this.name] : {};\n      },\n      Page: function Page() {\n        return this.state.page;\n      },\n      count: function count() {\n        return this.state.count;\n      },\n      Columns: function Columns() {\n        return this.state.columns ? this.state.columns : [];\n      },\n      tableData: function tableData() {\n        return this.state.data ? this.state.data : [];\n      },\n      page: function page() {\n        return this.state.page;\n      },\n      limit: function limit() {\n        return this.state.limit;\n      },\n      customQueries: function customQueries() {\n        return this.state.customQueries;\n      },\n      query: function query() {\n        return this.state.query;\n      },\n      orderBy: function orderBy() {\n        return {\n          column: this.state.sortBy,\n          ascending: this.state.ascending\n        };\n      }\n    },\n    methods: {\n      commit: function commit(action, payload) {\n        return this.$store.commit(\"\".concat(this.name, \"/\").concat(action), payload);\n      },\n      orderByColumn: function orderByColumn(column, ev) {\n        if (!this.sortable(column)) return;\n\n        if (ev.shiftKey && this.orderBy.column && this.hasMultiSort) {\n          this.setUserMultiSort(column);\n        } else {\n          var ascending = this.orderBy.column === column ? !this.orderBy.ascending : this._initialOrderAscending(column);\n          var orderBy = {\n            column: column,\n            ascending: ascending\n          };\n          this.updateState('orderBy', orderBy);\n          this.commit('SORT', orderBy);\n          this.dispatch('sorted', orderBy);\n        }\n      },\n      setLimit: function setLimit(e) {\n        var limit = _typeof(e) === 'object' ? parseInt(e.target.value) : e;\n        this.updateState('perPage', limit);\n        this.commit(\"SET_LIMIT\", limit);\n        this.dispatch(\"limit\", limit);\n      },\n      setOrder: function setOrder(column, ascending) {\n        this.updateState('orderBy', {\n          column: column,\n          ascending: ascending\n        });\n        this.commit('SORT', {\n          column: column,\n          ascending: ascending\n        });\n      },\n      setPage: function setPage(page) {\n        this.dispatch('pagination', page);\n        this.commit(\"PAGINATE\", page);\n      }\n    }\n  }, extra);\n}\n\nfunction serverExtra() {\n  return {\n    methods: {\n      setData: function setData(data) {\n        this.commit('SET_DATA', data);\n        setTimeout(function () {\n          this.dispatch('loaded', data);\n        }.bind(this), 0);\n      }\n    }\n  };\n}\n\nfunction clientExtra() {\n  return {};\n}\n\n//# sourceURL=webpack://VueTables/./lib/state/vuex.js?");

/***/ }),

/***/ "./lib/table.js":
/*!**********************!*\
  !*** ./lib/table.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = _default;\n\nvar _methods = _interopRequireDefault(__webpack_require__(/*! ./mixins/methods */ \"./lib/mixins/methods.js\"));\n\nvar _computed = _interopRequireDefault(__webpack_require__(/*! ./mixins/computed */ \"./lib/mixins/computed.js\"));\n\nvar _beforeDestroy = _interopRequireDefault(__webpack_require__(/*! ./mixins/before-destroy */ \"./lib/mixins/before-destroy.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _default() {\n  return {\n    methods: _methods[\"default\"],\n    computed: _computed[\"default\"],\n    beforeUnmount: _beforeDestroy[\"default\"]\n  };\n}\n\n//# sourceURL=webpack://VueTables/./lib/table.js?");

/***/ }),

/***/ "./lib/themes/bootstrap3.js":
/*!**********************************!*\
  !*** ./lib/themes/bootstrap3.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  return {\n    framework: 'bootstrap3',\n    table: 'table table-striped table-bordered table-hover',\n    th: '',\n    td: '',\n    tr: '',\n    trEven: '',\n    trOdd: '',\n    row: 'row',\n    column: 'col-md-12',\n    label: '',\n    input: 'form-control',\n    select: 'form-control',\n    field: 'form-group',\n    inline: 'form-inline',\n    right: 'pull-right',\n    left: 'pull-left',\n    center: 'text-center',\n    contentCenter: '',\n    small: '',\n    nomargin: '',\n    groupTr: 'info',\n    button: 'btn btn-secondary',\n    icon: '',\n    dropdown: {\n      container: 'dropdown',\n      trigger: 'dropdown-toggle',\n      menu: 'dropdown-menu',\n      content: '',\n      item: '',\n      caret: 'caret'\n    },\n    pagination: {\n      nav: '',\n      count: '',\n      wrapper: '',\n      list: 'pagination',\n      item: 'page-item',\n      link: 'page-link',\n      next: '',\n      prev: '',\n      active: 'active',\n      disabled: 'disabled'\n    }\n  };\n};\n\n//# sourceURL=webpack://VueTables/./lib/themes/bootstrap3.js?");

/***/ }),

/***/ "./lib/themes/bootstrap4.js":
/*!**********************************!*\
  !*** ./lib/themes/bootstrap4.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nmodule.exports = function () {\n  var _ref;\n\n  return _ref = {\n    framework: 'bootstrap4',\n    td: '',\n    table: 'table table-striped table-bordered table-hover',\n    row: 'row',\n    th: ''\n  }, _defineProperty(_ref, \"td\", ''), _defineProperty(_ref, \"tr\", ''), _defineProperty(_ref, \"trEven\", ''), _defineProperty(_ref, \"trOdd\", ''), _defineProperty(_ref, \"column\", 'col-md-12'), _defineProperty(_ref, \"label\", ''), _defineProperty(_ref, \"input\", 'form-control'), _defineProperty(_ref, \"select\", 'form-control'), _defineProperty(_ref, \"field\", 'form-group'), _defineProperty(_ref, \"inline\", 'form-inline'), _defineProperty(_ref, \"right\", 'float-right'), _defineProperty(_ref, \"left\", 'float-left'), _defineProperty(_ref, \"center\", 'text-center'), _defineProperty(_ref, \"contentCenter\", 'justify-content-center'), _defineProperty(_ref, \"nomargin\", 'm-0'), _defineProperty(_ref, \"groupTr\", 'table-info'), _defineProperty(_ref, \"small\", ''), _defineProperty(_ref, \"button\", 'btn btn-secondary'), _defineProperty(_ref, \"dropdown\", {\n    container: 'dropdown',\n    trigger: 'dropdown-toggle',\n    menu: 'dropdown-menu',\n    content: '',\n    item: 'dropdown-item',\n    caret: 'caret'\n  }), _defineProperty(_ref, \"pagination\", {\n    nav: '',\n    count: '',\n    wrapper: '',\n    list: 'pagination',\n    item: 'page-item',\n    link: 'page-link',\n    next: '',\n    prev: '',\n    active: 'active',\n    disabled: 'disabled',\n    icon: ''\n  }), _ref;\n};\n\n//# sourceURL=webpack://VueTables/./lib/themes/bootstrap4.js?");

/***/ }),

/***/ "./lib/themes/bulma.js":
/*!*****************************!*\
  !*** ./lib/themes/bulma.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  return {\n    framework: 'bulma',\n    table: 'table is-bordered is-striped is-hoverable is-fullwidth',\n    row: 'columns',\n    th: '',\n    td: '',\n    tr: '',\n    trEven: '',\n    trOdd: '',\n    column: 'column is-12',\n    label: 'label',\n    input: 'input',\n    select: 'select',\n    field: 'field',\n    inline: 'is-horizontal',\n    right: 'is-pulled-right',\n    left: 'is-pulled-left',\n    center: 'has-text-centered',\n    contentCenter: 'is-centered',\n    icon: 'icon',\n    small: 'is-small',\n    nomargin: 'marginless',\n    button: 'button',\n    groupTr: 'is-selected',\n    dropdown: {\n      container: 'dropdown',\n      trigger: 'dropdown-trigger',\n      menu: 'dropdown-menu',\n      content: 'dropdown-content',\n      item: 'dropdown-item',\n      caret: 'fa fa-angle-down'\n    },\n    pagination: {\n      nav: '',\n      count: '',\n      wrapper: 'pagination',\n      list: 'pagination-list',\n      item: '',\n      link: 'pagination-link',\n      next: '',\n      prev: '',\n      active: 'is-current',\n      disabled: ''\n    }\n  };\n};\n\n//# sourceURL=webpack://VueTables/./lib/themes/bulma.js?");

/***/ }),

/***/ "./lib/themes/tailwind.js":
/*!********************************!*\
  !*** ./lib/themes/tailwind.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  return {\n    framework: 'tailwind',\n    table: 'table-auto',\n    th: 'border px-4 py-2',\n    td: 'border px-4 py-2',\n    tr: '',\n    trEven: 'bg-gray-100',\n    trOdd: '',\n    row: 'grid-rows-1',\n    column: 'flex',\n    label: 'label',\n    input: 'p-1 border',\n    select: 'p-1 border',\n    field: 'flex-initial m-2',\n    inline: 'is-horizontal',\n    right: 'is-pulled-right',\n    left: 'is-pulled-left',\n    center: 'text-center',\n    contentCenter: 'is-centered',\n    icon: 'icon',\n    small: 'is-small',\n    nomargin: 'marginless',\n    button: 'button',\n    groupTr: 'is-selected',\n    dropdown: {\n      container: 'dropdown flex-initial m-2 relative',\n      trigger: 'dropdown-trigger border round p-1',\n      menu: 'dropdown-menu absolute z-50 bg-white border p-2',\n      content: 'dropdown-content truncate flex-1',\n      item: 'dropdown-item mb-1 flex',\n      caret: 'fa fa-angle-down',\n      checkbox: 'mt-1',\n      text: 'text-left ml-1'\n    },\n    pagination: {\n      nav: 'mt-1',\n      count: 'text-center',\n      wrapper: 'pagination',\n      list: 'flex',\n      item: 'm-1 border rounded',\n      link: 'block w-7 p-2',\n      next: '',\n      prev: '',\n      active: 'bg-blue-700 text-white',\n      disabled: 'text-gray-400'\n    }\n  };\n};\n\n//# sourceURL=webpack://VueTables/./lib/themes/tailwind.js?");

/***/ }),

/***/ "./lib/themes/themes.js":
/*!******************************!*\
  !*** ./lib/themes/themes.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\nvar _default = {\n  bootstrap3: __webpack_require__(/*! ./bootstrap3 */ \"./lib/themes/bootstrap3.js\")(),\n  bootstrap4: __webpack_require__(/*! ./bootstrap4 */ \"./lib/themes/bootstrap4.js\")(),\n  bulma: __webpack_require__(/*! ./bulma */ \"./lib/themes/bulma.js\")(),\n  tailwind: __webpack_require__(/*! ./tailwind */ \"./lib/themes/tailwind.js\")()\n};\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://VueTables/./lib/themes/themes.js?");

/***/ }),

/***/ "./lib/v-client-table.js":
/*!*******************************!*\
  !*** ./lib/v-client-table.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = install;\n\nvar _vuex = _interopRequireDefault(__webpack_require__(/*! ./state/vuex */ \"./lib/state/vuex.js\"));\n\nvar _normal = _interopRequireDefault(__webpack_require__(/*! ./state/normal */ \"./lib/state/normal.js\"));\n\nvar _merge = _interopRequireDefault(__webpack_require__(/*! merge */ \"./node_modules/merge/merge.js\"));\n\nvar _data2 = _interopRequireDefault(__webpack_require__(/*! ./state/data */ \"./lib/state/data.js\"));\n\nvar _resizeableColumns = _interopRequireDefault(__webpack_require__(/*! ./helpers/resizeable-columns */ \"./lib/helpers/resizeable-columns.js\"));\n\nvar _VtClientTable = _interopRequireDefault(__webpack_require__(/*! ./components/VtClientTable */ \"./lib/components/VtClientTable.jsx\"));\n\nvar _table = _interopRequireDefault(__webpack_require__(/*! ./table */ \"./lib/table.js\"));\n\nvar _themes = _interopRequireDefault(__webpack_require__(/*! ./themes/themes */ \"./lib/themes/themes.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar _data = __webpack_require__(/*! ./mixins/data */ \"./lib/mixins/data.js\");\n\nvar _created = __webpack_require__(/*! ./mixins/created */ \"./lib/mixins/created.js\");\n\nvar provide = __webpack_require__(/*! ./mixins/provide */ \"./lib/mixins/provide.js\");\n\nfunction install(app, globalOptions) {\n  var theme = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \"bootstrap3\";\n  var componentsOverride = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};\n  var useVuex = false;\n\n  var client = _merge[\"default\"].recursive(true, (0, _table[\"default\"])(), {\n    name: \"r-l-client-table\",\n    render: __webpack_require__(/*! ./components/renderless/RLDataTable */ \"./lib/components/renderless/RLDataTable.js\"),\n    provide: provide,\n    props: {\n      columns: {\n        type: Array,\n        required: true\n      },\n      data: {\n        type: Array,\n        required: true\n      },\n      name: {\n        type: String,\n        required: false\n      },\n      options: {\n        type: Object,\n        required: false,\n        \"default\": function _default() {\n          return {};\n        }\n      }\n    },\n    created: function created() {\n      _created(this);\n\n      if (this.opts.toMomentFormat) this.transformDateStringsToMoment();\n\n      if (!this.vuex) {\n        this.initOrderBy();\n        this.query = this.initQuery();\n        this.customQueries = this.initCustomFilters();\n      }\n    },\n    mounted: function mounted() {\n      var _this = this;\n\n      this._setFiltersDOM(this.query);\n\n      if (this.opts.resizableColumns) {\n        (0, _resizeableColumns[\"default\"])(this.refs.table, this.hasChildRow, this.opts.childRowTogglerFirst, this.resizableColumns, this.opts.stickyHeader);\n      }\n\n      if (this.groupBy && this.groupBy.length > 1) {\n        this.options.multiSorting = {};\n        this.options.multiSorting[this.groupBy[0]] = [{\n          column: this.groupBy[1],\n          matchDir: true\n        }];\n      }\n\n      if (!this.vuex) {\n        this.registerClientFilters();\n        if (this.options.initialPage) this.setPage(this.options.initialPage);\n      }\n\n      if (this.groupBy && !this.orderBy) {\n        this.orderBy.column = this.groupBy[0];\n      }\n\n      this.loadState();\n\n      if (this.hasDateFilters()) {\n        this.initDateFilters();\n      } // listen for data being removed\n      // and nav to last page if current page is greater than total pages\n\n\n      this.$watch('data', function () {\n        if (_this.page > _this.totalPages) {\n          _this.setPage(_this.totalPages);\n        }\n      });\n    },\n    model: {\n      prop: \"data\"\n    },\n    data: function data() {\n      return _merge[\"default\"].recursive(_data(), {\n        source: \"client\",\n        loading: false,\n        theme: typeof theme === 'string' ? _themes[\"default\"][theme] : theme(),\n        globalOptions: globalOptions,\n        componentsOverride: componentsOverride,\n        currentlySorting: {},\n        time: Date.now()\n      }, (0, _data2[\"default\"])(useVuex, \"client\", this.options.initialPage));\n    },\n    computed: {\n      q: __webpack_require__(/*! ./computed/q */ \"./lib/computed/q.js\"),\n      customQ: __webpack_require__(/*! ./computed/custom-q */ \"./lib/computed/custom-q.js\"),\n      totalPages: __webpack_require__(/*! ./computed/total-pages */ \"./lib/computed/total-pages.js\"),\n      filteredData: __webpack_require__(/*! ./computed/filtered-data */ \"./lib/computed/filtered-data.js\"),\n      groupBy: function groupBy() {\n        return typeof this.opts.groupBy === 'string' ? [this.opts.groupBy] : this.opts.groupBy;\n      },\n      hasMultiSort: function hasMultiSort() {\n        return this.opts.clientMultiSorting;\n      }\n    },\n    methods: {\n      transformDateStringsToMoment: __webpack_require__(/*! ./methods/transform-date-strings-to-moment */ \"./lib/methods/transform-date-strings-to-moment.js\"),\n      registerClientFilters: __webpack_require__(/*! ./methods/register-client-filters */ \"./lib/methods/register-client-filters.js\"),\n      search: __webpack_require__(/*! ./methods/client-search */ \"./lib/methods/client-search.js\"),\n      defaultSort: __webpack_require__(/*! ./methods/default-sort */ \"./lib/methods/default-sort.js\"),\n      getGroupSlot: __webpack_require__(/*! ./methods/get-group-slot */ \"./lib/methods/get-group-slot.js\"),\n      toggleGroup: function toggleGroup(group, e) {\n        e.stopPropagation();\n        var i = this.collapsedGroups.indexOf(group);\n\n        if (i >= 0) {\n          this.collapsedGroups.splice(i, 1);\n        } else {\n          this.collapsedGroups.push(group);\n        }\n      },\n      groupToggleIcon: function groupToggleIcon(group) {\n        var cls = this.opts.sortIcon.base + \" \";\n        cls += this.collapsedGroups.indexOf(group) > -1 ? this.opts.sortIcon.down : this.opts.sortIcon.up;\n        return cls;\n      },\n      downloadCsv: function downloadCsv() {\n        var _this2 = this;\n\n        var filename = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'table.csv';\n        var r;\n        var rows = [this.columns].concat(this.allFilteredData.map(function (row) {\n          r = {};\n\n          _this2.columns.forEach(function (column) {\n            r[column] = row[column];\n          });\n\n          return Object.values(r);\n        }));\n        var csvContent = \"data:text/csv;charset=utf-8,\" + rows.map(function (e) {\n          return e.join(\",\");\n        }).join(\"\\n\");\n        var encodedUri = encodeURI(csvContent);\n        var link = document.createElement(\"a\");\n        link.setAttribute(\"href\", encodedUri);\n        link.setAttribute(\"download\", filename);\n        document.body.appendChild(link); // Required for FF\n\n        link.click(); // This will download the data file\n\n        link.remove();\n      },\n      loadState: function loadState() {\n        if (!this.opts.saveState) return;\n\n        if (!this.storage.getItem(this.stateKey)) {\n          this.initState();\n          this.activeState = true;\n          return;\n        }\n\n        var state = JSON.parse(this.storage.getItem(this.stateKey));\n        if (this.opts.filterable) this.setFilter(state.query);\n        this.setOrder(state.orderBy.column, state.orderBy.ascending);\n\n        if (this.vuex) {\n          this.commit(\"SET_LIMIT\", state.perPage);\n        } else {\n          this.limit = state.perPage;\n        }\n\n        this.setPage(state.page);\n        this.activeState = true;\n\n        if (state.userControlsColumns) {\n          this.userColumnsDisplay = state.userColumnsDisplay;\n          this.userControlsColumns = state.userControlsColumns;\n        } // TODO: Custom Queries\n\n      }\n    }\n  });\n\n  var state = useVuex ? (0, _vuex[\"default\"])() : (0, _normal[\"default\"])();\n  client = _merge[\"default\"].recursive(client, state);\n  var comp = (0, _VtClientTable[\"default\"])(client);\n  app.component(\"v-client-table\", comp);\n  return comp;\n}\n\n;\n\n//# sourceURL=webpack://VueTables/./lib/v-client-table.js?");

/***/ }),

/***/ "./lib/v-server-table.js":
/*!*******************************!*\
  !*** ./lib/v-server-table.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = install;\n\nvar _merge = _interopRequireDefault(__webpack_require__(/*! merge */ \"./node_modules/merge/merge.js\"));\n\nvar _data2 = _interopRequireDefault(__webpack_require__(/*! ./state/data */ \"./lib/state/data.js\"));\n\nvar _vuex = _interopRequireDefault(__webpack_require__(/*! ./state/vuex */ \"./lib/state/vuex.js\"));\n\nvar _normal = _interopRequireDefault(__webpack_require__(/*! ./state/normal */ \"./lib/state/normal.js\"));\n\nvar _table = _interopRequireDefault(__webpack_require__(/*! ./table */ \"./lib/table.js\"));\n\nvar _resizeableColumns = _interopRequireDefault(__webpack_require__(/*! ./helpers/resizeable-columns */ \"./lib/helpers/resizeable-columns.js\"));\n\nvar _VtServerTable = _interopRequireDefault(__webpack_require__(/*! ./components/VtServerTable */ \"./lib/components/VtServerTable.jsx\"));\n\nvar _themes = _interopRequireDefault(__webpack_require__(/*! ./themes/themes */ \"./lib/themes/themes.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar _data = __webpack_require__(/*! ./mixins/data */ \"./lib/mixins/data.js\");\n\nvar _created = __webpack_require__(/*! ./mixins/created */ \"./lib/mixins/created.js\");\n\nvar provide = __webpack_require__(/*! ./mixins/provide */ \"./lib/mixins/provide.js\");\n\nfunction install(app, globalOptions) {\n  var theme = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \"bootstrap3\";\n  var componentsOverride = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};\n  var useVuex = false;\n  var state = useVuex ? (0, _vuex[\"default\"])(\"server\") : (0, _normal[\"default\"])();\n\n  var server = _merge[\"default\"].recursive(true, (0, _table[\"default\"])(), {\n    name: \"r-l-server-table\",\n    render: __webpack_require__(/*! ./components/renderless/RLDataTable */ \"./lib/components/renderless/RLDataTable.js\"),\n    props: {\n      columns: {\n        type: Array,\n        required: true\n      },\n      url: {\n        type: String\n      },\n      name: {\n        type: String,\n        required: false\n      },\n      options: {\n        type: Object,\n        required: false,\n        \"default\": function _default() {\n          return {};\n        }\n      }\n    },\n    provide: provide,\n    created: function created() {\n      if (!this.opts.requestFunction && !this.url) {\n        throw 'vue-tables-3: you must provide either a \"url\" prop or a custom request function. Aborting';\n      }\n\n      _created(this);\n\n      if (!this.vuex) {\n        this.query = this.initQuery();\n        this.initOrderBy();\n        this.customQueries = this.initCustomFilters();\n      }\n\n      if (this.opts.sendInitialRequest) {\n        this.loadState();\n        this.getData(true).then(function (response) {\n          if (typeof response === 'undefined') return;\n          this.setData(response);\n          this.loading = false;\n\n          if (this.hasDateFilters()) {\n            setTimeout(function () {\n              this.initDateFilters();\n            }.bind(this), 0);\n          }\n        }.bind(this));\n      } else {\n        this.loading = false;\n      }\n    },\n    mounted: function mounted() {\n      this._setFiltersDOM(this.query);\n\n      if (this.opts.resizableColumns) {\n        (0, _resizeableColumns[\"default\"])(this.refs.table, this.hasChildRow, this.opts.childRowTogglerFirst, this.resizableColumns, this.opts.stickyHeader);\n      } // this._setColumnsDropdownCloseListener();\n\n\n      if (this.vuex) return;\n      this.registerServerFilters();\n      if (this.options.initialPage) this.setPage(this.options.initialPage, true);\n    },\n    data: function data() {\n      return _merge[\"default\"].recursive(_data(), {\n        source: \"server\",\n        loading: true,\n        lastKeyStrokeAt: false,\n        globalOptions: globalOptions,\n        componentsOverride: componentsOverride,\n        theme: typeof theme === 'string' ? _themes[\"default\"][theme] : theme()\n      }, (0, _data2[\"default\"])(useVuex, \"server\", this.options.initialPage));\n    },\n    methods: {\n      refresh: __webpack_require__(/*! ./methods/refresh */ \"./lib/methods/refresh.js\"),\n      getData: __webpack_require__(/*! ./methods/get-data */ \"./lib/methods/get-data.js\"),\n      setData: __webpack_require__(/*! ./methods/set-data */ \"./lib/methods/set-data.js\"),\n      serverSearch: __webpack_require__(/*! ./methods/server-search */ \"./lib/methods/server-search.js\"),\n      registerServerFilters: __webpack_require__(/*! ./methods/register-server-filters */ \"./lib/methods/register-server-filters.js\"),\n      getRequestParams: __webpack_require__(/*! ./methods/get-request-params */ \"./lib/methods/get-request-params.js\"),\n      setRequestParams: __webpack_require__(/*! ./methods/set-request-params */ \"./lib/methods/set-request-params.js\"),\n      loadState: function loadState() {\n        var _this = this;\n\n        if (!this.opts.saveState) return;\n\n        if (!this.storage.getItem(this.stateKey)) {\n          this.initState();\n          this.activeState = true;\n          return;\n        }\n\n        var state = JSON.parse(this.storage.getItem(this.stateKey));\n\n        if (this.vuex) {\n          this.commit(\"SET_STATE\", {\n            query: state.query,\n            customQueries: state.customQueries,\n            page: state.page,\n            limit: state.perPage,\n            orderBy: state.orderBy\n          });\n        } else {\n          this.page = state.page;\n          this.query = state.query;\n          this.customQueries = state.customQueries;\n          this.limit = state.perPage;\n          this.orderBy = state.orderBy;\n        }\n\n        if (!this.opts.pagination.dropdown && this.$refs.pagination) {\n          setTimeout(function () {\n            _this.$refs.pagination.Page = state.page;\n          }, 0);\n        }\n\n        if (this.opts.filterable) {\n          setTimeout(function () {\n            _this._setFiltersDOM(state.query);\n          }, 0);\n        }\n\n        this.activeState = true;\n      }\n    },\n    watch: {\n      url: function url() {\n        this.refresh();\n      }\n    },\n    computed: {\n      totalPages: __webpack_require__(/*! ./computed/total-pages */ \"./lib/computed/total-pages.js\"),\n      filteredQuery: __webpack_require__(/*! ./computed/filtered-query */ \"./lib/computed/filtered-query.js\"),\n      hasMultiSort: function hasMultiSort() {\n        return this.opts.serverMultiSorting;\n      }\n    }\n  }, state);\n\n  var comp = (0, _VtServerTable[\"default\"])(server);\n  app.component(\"v-server-table\", comp);\n  return _VtServerTable[\"default\"];\n}\n\n;\n\n//# sourceURL=webpack://VueTables/./lib/v-server-table.js?");

/***/ }),

/***/ "./node_modules/array-intersect/dist/array-intersect.module.js":
/*!*********************************************************************!*\
  !*** ./node_modules/array-intersect/dist/array-intersect.module.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar intersect = function intersect(first) {\n  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n    rest[_key - 1] = arguments[_key];\n  }\n\n  return rest.reduce(function (accum, current) {\n    return accum.filter(function (x) {\n      return current.indexOf(x) !== -1;\n    });\n  }, first);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (intersect);\n\n\n//# sourceURL=webpack://VueTables/./node_modules/array-intersect/dist/array-intersect.module.js?");

/***/ }),

/***/ "./node_modules/debounce/index.js":
/*!****************************************!*\
  !*** ./node_modules/debounce/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Returns a function, that, as long as it continues to be invoked, will not\n * be triggered. The function will be called after it stops being called for\n * N milliseconds. If `immediate` is passed, trigger the function on the\n * leading edge, instead of the trailing. The function also has a property 'clear' \n * that is a function which will clear the timer to prevent previously scheduled executions. \n *\n * @source underscore.js\n * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/\n * @param {Function} function to wrap\n * @param {Number} timeout in ms (`100`)\n * @param {Boolean} whether to execute at the beginning (`false`)\n * @api public\n */\nfunction debounce(func, wait, immediate){\n  var timeout, args, context, timestamp, result;\n  if (null == wait) wait = 100;\n\n  function later() {\n    var last = Date.now() - timestamp;\n\n    if (last < wait && last >= 0) {\n      timeout = setTimeout(later, wait - last);\n    } else {\n      timeout = null;\n      if (!immediate) {\n        result = func.apply(context, args);\n        context = args = null;\n      }\n    }\n  };\n\n  var debounced = function(){\n    context = this;\n    args = arguments;\n    timestamp = Date.now();\n    var callNow = immediate && !timeout;\n    if (!timeout) timeout = setTimeout(later, wait);\n    if (callNow) {\n      result = func.apply(context, args);\n      context = args = null;\n    }\n\n    return result;\n  };\n\n  debounced.clear = function() {\n    if (timeout) {\n      clearTimeout(timeout);\n      timeout = null;\n    }\n  };\n  \n  debounced.flush = function() {\n    if (timeout) {\n      result = func.apply(context, args);\n      context = args = null;\n      \n      clearTimeout(timeout);\n      timeout = null;\n    }\n  };\n\n  return debounced;\n};\n\n// Adds compatibility for ES modules\ndebounce.debounce = debounce;\n\nmodule.exports = debounce;\n\n\n//# sourceURL=webpack://VueTables/./node_modules/debounce/index.js?");

/***/ }),

/***/ "./node_modules/lodash.clonedeep/index.js":
/*!************************************************!*\
  !*** ./node_modules/lodash.clonedeep/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global, module) {/**\n * lodash (Custom Build) <https://lodash.com/>\n * Build: `lodash modularize exports=\"npm\" -o ./`\n * Copyright jQuery Foundation and other contributors <https://jquery.org/>\n * Released under MIT license <https://lodash.com/license>\n * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>\n * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors\n */\n\n/** Used as the size to enable large array optimizations. */\nvar LARGE_ARRAY_SIZE = 200;\n\n/** Used to stand-in for `undefined` hash values. */\nvar HASH_UNDEFINED = '__lodash_hash_undefined__';\n\n/** Used as references for various `Number` constants. */\nvar MAX_SAFE_INTEGER = 9007199254740991;\n\n/** `Object#toString` result references. */\nvar argsTag = '[object Arguments]',\n    arrayTag = '[object Array]',\n    boolTag = '[object Boolean]',\n    dateTag = '[object Date]',\n    errorTag = '[object Error]',\n    funcTag = '[object Function]',\n    genTag = '[object GeneratorFunction]',\n    mapTag = '[object Map]',\n    numberTag = '[object Number]',\n    objectTag = '[object Object]',\n    promiseTag = '[object Promise]',\n    regexpTag = '[object RegExp]',\n    setTag = '[object Set]',\n    stringTag = '[object String]',\n    symbolTag = '[object Symbol]',\n    weakMapTag = '[object WeakMap]';\n\nvar arrayBufferTag = '[object ArrayBuffer]',\n    dataViewTag = '[object DataView]',\n    float32Tag = '[object Float32Array]',\n    float64Tag = '[object Float64Array]',\n    int8Tag = '[object Int8Array]',\n    int16Tag = '[object Int16Array]',\n    int32Tag = '[object Int32Array]',\n    uint8Tag = '[object Uint8Array]',\n    uint8ClampedTag = '[object Uint8ClampedArray]',\n    uint16Tag = '[object Uint16Array]',\n    uint32Tag = '[object Uint32Array]';\n\n/**\n * Used to match `RegExp`\n * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).\n */\nvar reRegExpChar = /[\\\\^$.*+?()[\\]{}|]/g;\n\n/** Used to match `RegExp` flags from their coerced string values. */\nvar reFlags = /\\w*$/;\n\n/** Used to detect host constructors (Safari). */\nvar reIsHostCtor = /^\\[object .+?Constructor\\]$/;\n\n/** Used to detect unsigned integer values. */\nvar reIsUint = /^(?:0|[1-9]\\d*)$/;\n\n/** Used to identify `toStringTag` values supported by `_.clone`. */\nvar cloneableTags = {};\ncloneableTags[argsTag] = cloneableTags[arrayTag] =\ncloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =\ncloneableTags[boolTag] = cloneableTags[dateTag] =\ncloneableTags[float32Tag] = cloneableTags[float64Tag] =\ncloneableTags[int8Tag] = cloneableTags[int16Tag] =\ncloneableTags[int32Tag] = cloneableTags[mapTag] =\ncloneableTags[numberTag] = cloneableTags[objectTag] =\ncloneableTags[regexpTag] = cloneableTags[setTag] =\ncloneableTags[stringTag] = cloneableTags[symbolTag] =\ncloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =\ncloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;\ncloneableTags[errorTag] = cloneableTags[funcTag] =\ncloneableTags[weakMapTag] = false;\n\n/** Detect free variable `global` from Node.js. */\nvar freeGlobal = typeof global == 'object' && global && global.Object === Object && global;\n\n/** Detect free variable `self`. */\nvar freeSelf = typeof self == 'object' && self && self.Object === Object && self;\n\n/** Used as a reference to the global object. */\nvar root = freeGlobal || freeSelf || Function('return this')();\n\n/** Detect free variable `exports`. */\nvar freeExports =  true && exports && !exports.nodeType && exports;\n\n/** Detect free variable `module`. */\nvar freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;\n\n/** Detect the popular CommonJS extension `module.exports`. */\nvar moduleExports = freeModule && freeModule.exports === freeExports;\n\n/**\n * Adds the key-value `pair` to `map`.\n *\n * @private\n * @param {Object} map The map to modify.\n * @param {Array} pair The key-value pair to add.\n * @returns {Object} Returns `map`.\n */\nfunction addMapEntry(map, pair) {\n  // Don't return `map.set` because it's not chainable in IE 11.\n  map.set(pair[0], pair[1]);\n  return map;\n}\n\n/**\n * Adds `value` to `set`.\n *\n * @private\n * @param {Object} set The set to modify.\n * @param {*} value The value to add.\n * @returns {Object} Returns `set`.\n */\nfunction addSetEntry(set, value) {\n  // Don't return `set.add` because it's not chainable in IE 11.\n  set.add(value);\n  return set;\n}\n\n/**\n * A specialized version of `_.forEach` for arrays without support for\n * iteratee shorthands.\n *\n * @private\n * @param {Array} [array] The array to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Array} Returns `array`.\n */\nfunction arrayEach(array, iteratee) {\n  var index = -1,\n      length = array ? array.length : 0;\n\n  while (++index < length) {\n    if (iteratee(array[index], index, array) === false) {\n      break;\n    }\n  }\n  return array;\n}\n\n/**\n * Appends the elements of `values` to `array`.\n *\n * @private\n * @param {Array} array The array to modify.\n * @param {Array} values The values to append.\n * @returns {Array} Returns `array`.\n */\nfunction arrayPush(array, values) {\n  var index = -1,\n      length = values.length,\n      offset = array.length;\n\n  while (++index < length) {\n    array[offset + index] = values[index];\n  }\n  return array;\n}\n\n/**\n * A specialized version of `_.reduce` for arrays without support for\n * iteratee shorthands.\n *\n * @private\n * @param {Array} [array] The array to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @param {*} [accumulator] The initial value.\n * @param {boolean} [initAccum] Specify using the first element of `array` as\n *  the initial value.\n * @returns {*} Returns the accumulated value.\n */\nfunction arrayReduce(array, iteratee, accumulator, initAccum) {\n  var index = -1,\n      length = array ? array.length : 0;\n\n  if (initAccum && length) {\n    accumulator = array[++index];\n  }\n  while (++index < length) {\n    accumulator = iteratee(accumulator, array[index], index, array);\n  }\n  return accumulator;\n}\n\n/**\n * The base implementation of `_.times` without support for iteratee shorthands\n * or max array length checks.\n *\n * @private\n * @param {number} n The number of times to invoke `iteratee`.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Array} Returns the array of results.\n */\nfunction baseTimes(n, iteratee) {\n  var index = -1,\n      result = Array(n);\n\n  while (++index < n) {\n    result[index] = iteratee(index);\n  }\n  return result;\n}\n\n/**\n * Gets the value at `key` of `object`.\n *\n * @private\n * @param {Object} [object] The object to query.\n * @param {string} key The key of the property to get.\n * @returns {*} Returns the property value.\n */\nfunction getValue(object, key) {\n  return object == null ? undefined : object[key];\n}\n\n/**\n * Checks if `value` is a host object in IE < 9.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a host object, else `false`.\n */\nfunction isHostObject(value) {\n  // Many host objects are `Object` objects that can coerce to strings\n  // despite having improperly defined `toString` methods.\n  var result = false;\n  if (value != null && typeof value.toString != 'function') {\n    try {\n      result = !!(value + '');\n    } catch (e) {}\n  }\n  return result;\n}\n\n/**\n * Converts `map` to its key-value pairs.\n *\n * @private\n * @param {Object} map The map to convert.\n * @returns {Array} Returns the key-value pairs.\n */\nfunction mapToArray(map) {\n  var index = -1,\n      result = Array(map.size);\n\n  map.forEach(function(value, key) {\n    result[++index] = [key, value];\n  });\n  return result;\n}\n\n/**\n * Creates a unary function that invokes `func` with its argument transformed.\n *\n * @private\n * @param {Function} func The function to wrap.\n * @param {Function} transform The argument transform.\n * @returns {Function} Returns the new function.\n */\nfunction overArg(func, transform) {\n  return function(arg) {\n    return func(transform(arg));\n  };\n}\n\n/**\n * Converts `set` to an array of its values.\n *\n * @private\n * @param {Object} set The set to convert.\n * @returns {Array} Returns the values.\n */\nfunction setToArray(set) {\n  var index = -1,\n      result = Array(set.size);\n\n  set.forEach(function(value) {\n    result[++index] = value;\n  });\n  return result;\n}\n\n/** Used for built-in method references. */\nvar arrayProto = Array.prototype,\n    funcProto = Function.prototype,\n    objectProto = Object.prototype;\n\n/** Used to detect overreaching core-js shims. */\nvar coreJsData = root['__core-js_shared__'];\n\n/** Used to detect methods masquerading as native. */\nvar maskSrcKey = (function() {\n  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');\n  return uid ? ('Symbol(src)_1.' + uid) : '';\n}());\n\n/** Used to resolve the decompiled source of functions. */\nvar funcToString = funcProto.toString;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar objectToString = objectProto.toString;\n\n/** Used to detect if a method is native. */\nvar reIsNative = RegExp('^' +\n  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\\\$&')\n  .replace(/hasOwnProperty|(function).*?(?=\\\\\\()| for .+?(?=\\\\\\])/g, '$1.*?') + '$'\n);\n\n/** Built-in value references. */\nvar Buffer = moduleExports ? root.Buffer : undefined,\n    Symbol = root.Symbol,\n    Uint8Array = root.Uint8Array,\n    getPrototype = overArg(Object.getPrototypeOf, Object),\n    objectCreate = Object.create,\n    propertyIsEnumerable = objectProto.propertyIsEnumerable,\n    splice = arrayProto.splice;\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeGetSymbols = Object.getOwnPropertySymbols,\n    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,\n    nativeKeys = overArg(Object.keys, Object);\n\n/* Built-in method references that are verified to be native. */\nvar DataView = getNative(root, 'DataView'),\n    Map = getNative(root, 'Map'),\n    Promise = getNative(root, 'Promise'),\n    Set = getNative(root, 'Set'),\n    WeakMap = getNative(root, 'WeakMap'),\n    nativeCreate = getNative(Object, 'create');\n\n/** Used to detect maps, sets, and weakmaps. */\nvar dataViewCtorString = toSource(DataView),\n    mapCtorString = toSource(Map),\n    promiseCtorString = toSource(Promise),\n    setCtorString = toSource(Set),\n    weakMapCtorString = toSource(WeakMap);\n\n/** Used to convert symbols to primitives and strings. */\nvar symbolProto = Symbol ? Symbol.prototype : undefined,\n    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;\n\n/**\n * Creates a hash object.\n *\n * @private\n * @constructor\n * @param {Array} [entries] The key-value pairs to cache.\n */\nfunction Hash(entries) {\n  var index = -1,\n      length = entries ? entries.length : 0;\n\n  this.clear();\n  while (++index < length) {\n    var entry = entries[index];\n    this.set(entry[0], entry[1]);\n  }\n}\n\n/**\n * Removes all key-value entries from the hash.\n *\n * @private\n * @name clear\n * @memberOf Hash\n */\nfunction hashClear() {\n  this.__data__ = nativeCreate ? nativeCreate(null) : {};\n}\n\n/**\n * Removes `key` and its value from the hash.\n *\n * @private\n * @name delete\n * @memberOf Hash\n * @param {Object} hash The hash to modify.\n * @param {string} key The key of the value to remove.\n * @returns {boolean} Returns `true` if the entry was removed, else `false`.\n */\nfunction hashDelete(key) {\n  return this.has(key) && delete this.__data__[key];\n}\n\n/**\n * Gets the hash value for `key`.\n *\n * @private\n * @name get\n * @memberOf Hash\n * @param {string} key The key of the value to get.\n * @returns {*} Returns the entry value.\n */\nfunction hashGet(key) {\n  var data = this.__data__;\n  if (nativeCreate) {\n    var result = data[key];\n    return result === HASH_UNDEFINED ? undefined : result;\n  }\n  return hasOwnProperty.call(data, key) ? data[key] : undefined;\n}\n\n/**\n * Checks if a hash value for `key` exists.\n *\n * @private\n * @name has\n * @memberOf Hash\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction hashHas(key) {\n  var data = this.__data__;\n  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);\n}\n\n/**\n * Sets the hash `key` to `value`.\n *\n * @private\n * @name set\n * @memberOf Hash\n * @param {string} key The key of the value to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns the hash instance.\n */\nfunction hashSet(key, value) {\n  var data = this.__data__;\n  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;\n  return this;\n}\n\n// Add methods to `Hash`.\nHash.prototype.clear = hashClear;\nHash.prototype['delete'] = hashDelete;\nHash.prototype.get = hashGet;\nHash.prototype.has = hashHas;\nHash.prototype.set = hashSet;\n\n/**\n * Creates an list cache object.\n *\n * @private\n * @constructor\n * @param {Array} [entries] The key-value pairs to cache.\n */\nfunction ListCache(entries) {\n  var index = -1,\n      length = entries ? entries.length : 0;\n\n  this.clear();\n  while (++index < length) {\n    var entry = entries[index];\n    this.set(entry[0], entry[1]);\n  }\n}\n\n/**\n * Removes all key-value entries from the list cache.\n *\n * @private\n * @name clear\n * @memberOf ListCache\n */\nfunction listCacheClear() {\n  this.__data__ = [];\n}\n\n/**\n * Removes `key` and its value from the list cache.\n *\n * @private\n * @name delete\n * @memberOf ListCache\n * @param {string} key The key of the value to remove.\n * @returns {boolean} Returns `true` if the entry was removed, else `false`.\n */\nfunction listCacheDelete(key) {\n  var data = this.__data__,\n      index = assocIndexOf(data, key);\n\n  if (index < 0) {\n    return false;\n  }\n  var lastIndex = data.length - 1;\n  if (index == lastIndex) {\n    data.pop();\n  } else {\n    splice.call(data, index, 1);\n  }\n  return true;\n}\n\n/**\n * Gets the list cache value for `key`.\n *\n * @private\n * @name get\n * @memberOf ListCache\n * @param {string} key The key of the value to get.\n * @returns {*} Returns the entry value.\n */\nfunction listCacheGet(key) {\n  var data = this.__data__,\n      index = assocIndexOf(data, key);\n\n  return index < 0 ? undefined : data[index][1];\n}\n\n/**\n * Checks if a list cache value for `key` exists.\n *\n * @private\n * @name has\n * @memberOf ListCache\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction listCacheHas(key) {\n  return assocIndexOf(this.__data__, key) > -1;\n}\n\n/**\n * Sets the list cache `key` to `value`.\n *\n * @private\n * @name set\n * @memberOf ListCache\n * @param {string} key The key of the value to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns the list cache instance.\n */\nfunction listCacheSet(key, value) {\n  var data = this.__data__,\n      index = assocIndexOf(data, key);\n\n  if (index < 0) {\n    data.push([key, value]);\n  } else {\n    data[index][1] = value;\n  }\n  return this;\n}\n\n// Add methods to `ListCache`.\nListCache.prototype.clear = listCacheClear;\nListCache.prototype['delete'] = listCacheDelete;\nListCache.prototype.get = listCacheGet;\nListCache.prototype.has = listCacheHas;\nListCache.prototype.set = listCacheSet;\n\n/**\n * Creates a map cache object to store key-value pairs.\n *\n * @private\n * @constructor\n * @param {Array} [entries] The key-value pairs to cache.\n */\nfunction MapCache(entries) {\n  var index = -1,\n      length = entries ? entries.length : 0;\n\n  this.clear();\n  while (++index < length) {\n    var entry = entries[index];\n    this.set(entry[0], entry[1]);\n  }\n}\n\n/**\n * Removes all key-value entries from the map.\n *\n * @private\n * @name clear\n * @memberOf MapCache\n */\nfunction mapCacheClear() {\n  this.__data__ = {\n    'hash': new Hash,\n    'map': new (Map || ListCache),\n    'string': new Hash\n  };\n}\n\n/**\n * Removes `key` and its value from the map.\n *\n * @private\n * @name delete\n * @memberOf MapCache\n * @param {string} key The key of the value to remove.\n * @returns {boolean} Returns `true` if the entry was removed, else `false`.\n */\nfunction mapCacheDelete(key) {\n  return getMapData(this, key)['delete'](key);\n}\n\n/**\n * Gets the map value for `key`.\n *\n * @private\n * @name get\n * @memberOf MapCache\n * @param {string} key The key of the value to get.\n * @returns {*} Returns the entry value.\n */\nfunction mapCacheGet(key) {\n  return getMapData(this, key).get(key);\n}\n\n/**\n * Checks if a map value for `key` exists.\n *\n * @private\n * @name has\n * @memberOf MapCache\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction mapCacheHas(key) {\n  return getMapData(this, key).has(key);\n}\n\n/**\n * Sets the map `key` to `value`.\n *\n * @private\n * @name set\n * @memberOf MapCache\n * @param {string} key The key of the value to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns the map cache instance.\n */\nfunction mapCacheSet(key, value) {\n  getMapData(this, key).set(key, value);\n  return this;\n}\n\n// Add methods to `MapCache`.\nMapCache.prototype.clear = mapCacheClear;\nMapCache.prototype['delete'] = mapCacheDelete;\nMapCache.prototype.get = mapCacheGet;\nMapCache.prototype.has = mapCacheHas;\nMapCache.prototype.set = mapCacheSet;\n\n/**\n * Creates a stack cache object to store key-value pairs.\n *\n * @private\n * @constructor\n * @param {Array} [entries] The key-value pairs to cache.\n */\nfunction Stack(entries) {\n  this.__data__ = new ListCache(entries);\n}\n\n/**\n * Removes all key-value entries from the stack.\n *\n * @private\n * @name clear\n * @memberOf Stack\n */\nfunction stackClear() {\n  this.__data__ = new ListCache;\n}\n\n/**\n * Removes `key` and its value from the stack.\n *\n * @private\n * @name delete\n * @memberOf Stack\n * @param {string} key The key of the value to remove.\n * @returns {boolean} Returns `true` if the entry was removed, else `false`.\n */\nfunction stackDelete(key) {\n  return this.__data__['delete'](key);\n}\n\n/**\n * Gets the stack value for `key`.\n *\n * @private\n * @name get\n * @memberOf Stack\n * @param {string} key The key of the value to get.\n * @returns {*} Returns the entry value.\n */\nfunction stackGet(key) {\n  return this.__data__.get(key);\n}\n\n/**\n * Checks if a stack value for `key` exists.\n *\n * @private\n * @name has\n * @memberOf Stack\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction stackHas(key) {\n  return this.__data__.has(key);\n}\n\n/**\n * Sets the stack `key` to `value`.\n *\n * @private\n * @name set\n * @memberOf Stack\n * @param {string} key The key of the value to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns the stack cache instance.\n */\nfunction stackSet(key, value) {\n  var cache = this.__data__;\n  if (cache instanceof ListCache) {\n    var pairs = cache.__data__;\n    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {\n      pairs.push([key, value]);\n      return this;\n    }\n    cache = this.__data__ = new MapCache(pairs);\n  }\n  cache.set(key, value);\n  return this;\n}\n\n// Add methods to `Stack`.\nStack.prototype.clear = stackClear;\nStack.prototype['delete'] = stackDelete;\nStack.prototype.get = stackGet;\nStack.prototype.has = stackHas;\nStack.prototype.set = stackSet;\n\n/**\n * Creates an array of the enumerable property names of the array-like `value`.\n *\n * @private\n * @param {*} value The value to query.\n * @param {boolean} inherited Specify returning inherited property names.\n * @returns {Array} Returns the array of property names.\n */\nfunction arrayLikeKeys(value, inherited) {\n  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.\n  // Safari 9 makes `arguments.length` enumerable in strict mode.\n  var result = (isArray(value) || isArguments(value))\n    ? baseTimes(value.length, String)\n    : [];\n\n  var length = result.length,\n      skipIndexes = !!length;\n\n  for (var key in value) {\n    if ((inherited || hasOwnProperty.call(value, key)) &&\n        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {\n      result.push(key);\n    }\n  }\n  return result;\n}\n\n/**\n * Assigns `value` to `key` of `object` if the existing value is not equivalent\n * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)\n * for equality comparisons.\n *\n * @private\n * @param {Object} object The object to modify.\n * @param {string} key The key of the property to assign.\n * @param {*} value The value to assign.\n */\nfunction assignValue(object, key, value) {\n  var objValue = object[key];\n  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||\n      (value === undefined && !(key in object))) {\n    object[key] = value;\n  }\n}\n\n/**\n * Gets the index at which the `key` is found in `array` of key-value pairs.\n *\n * @private\n * @param {Array} array The array to inspect.\n * @param {*} key The key to search for.\n * @returns {number} Returns the index of the matched value, else `-1`.\n */\nfunction assocIndexOf(array, key) {\n  var length = array.length;\n  while (length--) {\n    if (eq(array[length][0], key)) {\n      return length;\n    }\n  }\n  return -1;\n}\n\n/**\n * The base implementation of `_.assign` without support for multiple sources\n * or `customizer` functions.\n *\n * @private\n * @param {Object} object The destination object.\n * @param {Object} source The source object.\n * @returns {Object} Returns `object`.\n */\nfunction baseAssign(object, source) {\n  return object && copyObject(source, keys(source), object);\n}\n\n/**\n * The base implementation of `_.clone` and `_.cloneDeep` which tracks\n * traversed objects.\n *\n * @private\n * @param {*} value The value to clone.\n * @param {boolean} [isDeep] Specify a deep clone.\n * @param {boolean} [isFull] Specify a clone including symbols.\n * @param {Function} [customizer] The function to customize cloning.\n * @param {string} [key] The key of `value`.\n * @param {Object} [object] The parent object of `value`.\n * @param {Object} [stack] Tracks traversed objects and their clone counterparts.\n * @returns {*} Returns the cloned value.\n */\nfunction baseClone(value, isDeep, isFull, customizer, key, object, stack) {\n  var result;\n  if (customizer) {\n    result = object ? customizer(value, key, object, stack) : customizer(value);\n  }\n  if (result !== undefined) {\n    return result;\n  }\n  if (!isObject(value)) {\n    return value;\n  }\n  var isArr = isArray(value);\n  if (isArr) {\n    result = initCloneArray(value);\n    if (!isDeep) {\n      return copyArray(value, result);\n    }\n  } else {\n    var tag = getTag(value),\n        isFunc = tag == funcTag || tag == genTag;\n\n    if (isBuffer(value)) {\n      return cloneBuffer(value, isDeep);\n    }\n    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {\n      if (isHostObject(value)) {\n        return object ? value : {};\n      }\n      result = initCloneObject(isFunc ? {} : value);\n      if (!isDeep) {\n        return copySymbols(value, baseAssign(result, value));\n      }\n    } else {\n      if (!cloneableTags[tag]) {\n        return object ? value : {};\n      }\n      result = initCloneByTag(value, tag, baseClone, isDeep);\n    }\n  }\n  // Check for circular references and return its corresponding clone.\n  stack || (stack = new Stack);\n  var stacked = stack.get(value);\n  if (stacked) {\n    return stacked;\n  }\n  stack.set(value, result);\n\n  if (!isArr) {\n    var props = isFull ? getAllKeys(value) : keys(value);\n  }\n  arrayEach(props || value, function(subValue, key) {\n    if (props) {\n      key = subValue;\n      subValue = value[key];\n    }\n    // Recursively populate clone (susceptible to call stack limits).\n    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));\n  });\n  return result;\n}\n\n/**\n * The base implementation of `_.create` without support for assigning\n * properties to the created object.\n *\n * @private\n * @param {Object} prototype The object to inherit from.\n * @returns {Object} Returns the new object.\n */\nfunction baseCreate(proto) {\n  return isObject(proto) ? objectCreate(proto) : {};\n}\n\n/**\n * The base implementation of `getAllKeys` and `getAllKeysIn` which uses\n * `keysFunc` and `symbolsFunc` to get the enumerable property names and\n * symbols of `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @param {Function} keysFunc The function to get the keys of `object`.\n * @param {Function} symbolsFunc The function to get the symbols of `object`.\n * @returns {Array} Returns the array of property names and symbols.\n */\nfunction baseGetAllKeys(object, keysFunc, symbolsFunc) {\n  var result = keysFunc(object);\n  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));\n}\n\n/**\n * The base implementation of `getTag`.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the `toStringTag`.\n */\nfunction baseGetTag(value) {\n  return objectToString.call(value);\n}\n\n/**\n * The base implementation of `_.isNative` without bad shim checks.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a native function,\n *  else `false`.\n */\nfunction baseIsNative(value) {\n  if (!isObject(value) || isMasked(value)) {\n    return false;\n  }\n  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;\n  return pattern.test(toSource(value));\n}\n\n/**\n * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names.\n */\nfunction baseKeys(object) {\n  if (!isPrototype(object)) {\n    return nativeKeys(object);\n  }\n  var result = [];\n  for (var key in Object(object)) {\n    if (hasOwnProperty.call(object, key) && key != 'constructor') {\n      result.push(key);\n    }\n  }\n  return result;\n}\n\n/**\n * Creates a clone of  `buffer`.\n *\n * @private\n * @param {Buffer} buffer The buffer to clone.\n * @param {boolean} [isDeep] Specify a deep clone.\n * @returns {Buffer} Returns the cloned buffer.\n */\nfunction cloneBuffer(buffer, isDeep) {\n  if (isDeep) {\n    return buffer.slice();\n  }\n  var result = new buffer.constructor(buffer.length);\n  buffer.copy(result);\n  return result;\n}\n\n/**\n * Creates a clone of `arrayBuffer`.\n *\n * @private\n * @param {ArrayBuffer} arrayBuffer The array buffer to clone.\n * @returns {ArrayBuffer} Returns the cloned array buffer.\n */\nfunction cloneArrayBuffer(arrayBuffer) {\n  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);\n  new Uint8Array(result).set(new Uint8Array(arrayBuffer));\n  return result;\n}\n\n/**\n * Creates a clone of `dataView`.\n *\n * @private\n * @param {Object} dataView The data view to clone.\n * @param {boolean} [isDeep] Specify a deep clone.\n * @returns {Object} Returns the cloned data view.\n */\nfunction cloneDataView(dataView, isDeep) {\n  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;\n  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);\n}\n\n/**\n * Creates a clone of `map`.\n *\n * @private\n * @param {Object} map The map to clone.\n * @param {Function} cloneFunc The function to clone values.\n * @param {boolean} [isDeep] Specify a deep clone.\n * @returns {Object} Returns the cloned map.\n */\nfunction cloneMap(map, isDeep, cloneFunc) {\n  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);\n  return arrayReduce(array, addMapEntry, new map.constructor);\n}\n\n/**\n * Creates a clone of `regexp`.\n *\n * @private\n * @param {Object} regexp The regexp to clone.\n * @returns {Object} Returns the cloned regexp.\n */\nfunction cloneRegExp(regexp) {\n  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));\n  result.lastIndex = regexp.lastIndex;\n  return result;\n}\n\n/**\n * Creates a clone of `set`.\n *\n * @private\n * @param {Object} set The set to clone.\n * @param {Function} cloneFunc The function to clone values.\n * @param {boolean} [isDeep] Specify a deep clone.\n * @returns {Object} Returns the cloned set.\n */\nfunction cloneSet(set, isDeep, cloneFunc) {\n  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);\n  return arrayReduce(array, addSetEntry, new set.constructor);\n}\n\n/**\n * Creates a clone of the `symbol` object.\n *\n * @private\n * @param {Object} symbol The symbol object to clone.\n * @returns {Object} Returns the cloned symbol object.\n */\nfunction cloneSymbol(symbol) {\n  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};\n}\n\n/**\n * Creates a clone of `typedArray`.\n *\n * @private\n * @param {Object} typedArray The typed array to clone.\n * @param {boolean} [isDeep] Specify a deep clone.\n * @returns {Object} Returns the cloned typed array.\n */\nfunction cloneTypedArray(typedArray, isDeep) {\n  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;\n  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);\n}\n\n/**\n * Copies the values of `source` to `array`.\n *\n * @private\n * @param {Array} source The array to copy values from.\n * @param {Array} [array=[]] The array to copy values to.\n * @returns {Array} Returns `array`.\n */\nfunction copyArray(source, array) {\n  var index = -1,\n      length = source.length;\n\n  array || (array = Array(length));\n  while (++index < length) {\n    array[index] = source[index];\n  }\n  return array;\n}\n\n/**\n * Copies properties of `source` to `object`.\n *\n * @private\n * @param {Object} source The object to copy properties from.\n * @param {Array} props The property identifiers to copy.\n * @param {Object} [object={}] The object to copy properties to.\n * @param {Function} [customizer] The function to customize copied values.\n * @returns {Object} Returns `object`.\n */\nfunction copyObject(source, props, object, customizer) {\n  object || (object = {});\n\n  var index = -1,\n      length = props.length;\n\n  while (++index < length) {\n    var key = props[index];\n\n    var newValue = customizer\n      ? customizer(object[key], source[key], key, object, source)\n      : undefined;\n\n    assignValue(object, key, newValue === undefined ? source[key] : newValue);\n  }\n  return object;\n}\n\n/**\n * Copies own symbol properties of `source` to `object`.\n *\n * @private\n * @param {Object} source The object to copy symbols from.\n * @param {Object} [object={}] The object to copy symbols to.\n * @returns {Object} Returns `object`.\n */\nfunction copySymbols(source, object) {\n  return copyObject(source, getSymbols(source), object);\n}\n\n/**\n * Creates an array of own enumerable property names and symbols of `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names and symbols.\n */\nfunction getAllKeys(object) {\n  return baseGetAllKeys(object, keys, getSymbols);\n}\n\n/**\n * Gets the data for `map`.\n *\n * @private\n * @param {Object} map The map to query.\n * @param {string} key The reference key.\n * @returns {*} Returns the map data.\n */\nfunction getMapData(map, key) {\n  var data = map.__data__;\n  return isKeyable(key)\n    ? data[typeof key == 'string' ? 'string' : 'hash']\n    : data.map;\n}\n\n/**\n * Gets the native function at `key` of `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @param {string} key The key of the method to get.\n * @returns {*} Returns the function if it's native, else `undefined`.\n */\nfunction getNative(object, key) {\n  var value = getValue(object, key);\n  return baseIsNative(value) ? value : undefined;\n}\n\n/**\n * Creates an array of the own enumerable symbol properties of `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of symbols.\n */\nvar getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;\n\n/**\n * Gets the `toStringTag` of `value`.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the `toStringTag`.\n */\nvar getTag = baseGetTag;\n\n// Fallback for data views, maps, sets, and weak maps in IE 11,\n// for data views in Edge < 14, and promises in Node.js.\nif ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||\n    (Map && getTag(new Map) != mapTag) ||\n    (Promise && getTag(Promise.resolve()) != promiseTag) ||\n    (Set && getTag(new Set) != setTag) ||\n    (WeakMap && getTag(new WeakMap) != weakMapTag)) {\n  getTag = function(value) {\n    var result = objectToString.call(value),\n        Ctor = result == objectTag ? value.constructor : undefined,\n        ctorString = Ctor ? toSource(Ctor) : undefined;\n\n    if (ctorString) {\n      switch (ctorString) {\n        case dataViewCtorString: return dataViewTag;\n        case mapCtorString: return mapTag;\n        case promiseCtorString: return promiseTag;\n        case setCtorString: return setTag;\n        case weakMapCtorString: return weakMapTag;\n      }\n    }\n    return result;\n  };\n}\n\n/**\n * Initializes an array clone.\n *\n * @private\n * @param {Array} array The array to clone.\n * @returns {Array} Returns the initialized clone.\n */\nfunction initCloneArray(array) {\n  var length = array.length,\n      result = array.constructor(length);\n\n  // Add properties assigned by `RegExp#exec`.\n  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {\n    result.index = array.index;\n    result.input = array.input;\n  }\n  return result;\n}\n\n/**\n * Initializes an object clone.\n *\n * @private\n * @param {Object} object The object to clone.\n * @returns {Object} Returns the initialized clone.\n */\nfunction initCloneObject(object) {\n  return (typeof object.constructor == 'function' && !isPrototype(object))\n    ? baseCreate(getPrototype(object))\n    : {};\n}\n\n/**\n * Initializes an object clone based on its `toStringTag`.\n *\n * **Note:** This function only supports cloning values with tags of\n * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.\n *\n * @private\n * @param {Object} object The object to clone.\n * @param {string} tag The `toStringTag` of the object to clone.\n * @param {Function} cloneFunc The function to clone values.\n * @param {boolean} [isDeep] Specify a deep clone.\n * @returns {Object} Returns the initialized clone.\n */\nfunction initCloneByTag(object, tag, cloneFunc, isDeep) {\n  var Ctor = object.constructor;\n  switch (tag) {\n    case arrayBufferTag:\n      return cloneArrayBuffer(object);\n\n    case boolTag:\n    case dateTag:\n      return new Ctor(+object);\n\n    case dataViewTag:\n      return cloneDataView(object, isDeep);\n\n    case float32Tag: case float64Tag:\n    case int8Tag: case int16Tag: case int32Tag:\n    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:\n      return cloneTypedArray(object, isDeep);\n\n    case mapTag:\n      return cloneMap(object, isDeep, cloneFunc);\n\n    case numberTag:\n    case stringTag:\n      return new Ctor(object);\n\n    case regexpTag:\n      return cloneRegExp(object);\n\n    case setTag:\n      return cloneSet(object, isDeep, cloneFunc);\n\n    case symbolTag:\n      return cloneSymbol(object);\n  }\n}\n\n/**\n * Checks if `value` is a valid array-like index.\n *\n * @private\n * @param {*} value The value to check.\n * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.\n * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.\n */\nfunction isIndex(value, length) {\n  length = length == null ? MAX_SAFE_INTEGER : length;\n  return !!length &&\n    (typeof value == 'number' || reIsUint.test(value)) &&\n    (value > -1 && value % 1 == 0 && value < length);\n}\n\n/**\n * Checks if `value` is suitable for use as unique object key.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is suitable, else `false`.\n */\nfunction isKeyable(value) {\n  var type = typeof value;\n  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')\n    ? (value !== '__proto__')\n    : (value === null);\n}\n\n/**\n * Checks if `func` has its source masked.\n *\n * @private\n * @param {Function} func The function to check.\n * @returns {boolean} Returns `true` if `func` is masked, else `false`.\n */\nfunction isMasked(func) {\n  return !!maskSrcKey && (maskSrcKey in func);\n}\n\n/**\n * Checks if `value` is likely a prototype object.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.\n */\nfunction isPrototype(value) {\n  var Ctor = value && value.constructor,\n      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;\n\n  return value === proto;\n}\n\n/**\n * Converts `func` to its source code.\n *\n * @private\n * @param {Function} func The function to process.\n * @returns {string} Returns the source code.\n */\nfunction toSource(func) {\n  if (func != null) {\n    try {\n      return funcToString.call(func);\n    } catch (e) {}\n    try {\n      return (func + '');\n    } catch (e) {}\n  }\n  return '';\n}\n\n/**\n * This method is like `_.clone` except that it recursively clones `value`.\n *\n * @static\n * @memberOf _\n * @since 1.0.0\n * @category Lang\n * @param {*} value The value to recursively clone.\n * @returns {*} Returns the deep cloned value.\n * @see _.clone\n * @example\n *\n * var objects = [{ 'a': 1 }, { 'b': 2 }];\n *\n * var deep = _.cloneDeep(objects);\n * console.log(deep[0] === objects[0]);\n * // => false\n */\nfunction cloneDeep(value) {\n  return baseClone(value, true, true);\n}\n\n/**\n * Performs a\n * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)\n * comparison between two values to determine if they are equivalent.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to compare.\n * @param {*} other The other value to compare.\n * @returns {boolean} Returns `true` if the values are equivalent, else `false`.\n * @example\n *\n * var object = { 'a': 1 };\n * var other = { 'a': 1 };\n *\n * _.eq(object, object);\n * // => true\n *\n * _.eq(object, other);\n * // => false\n *\n * _.eq('a', 'a');\n * // => true\n *\n * _.eq('a', Object('a'));\n * // => false\n *\n * _.eq(NaN, NaN);\n * // => true\n */\nfunction eq(value, other) {\n  return value === other || (value !== value && other !== other);\n}\n\n/**\n * Checks if `value` is likely an `arguments` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an `arguments` object,\n *  else `false`.\n * @example\n *\n * _.isArguments(function() { return arguments; }());\n * // => true\n *\n * _.isArguments([1, 2, 3]);\n * // => false\n */\nfunction isArguments(value) {\n  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.\n  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&\n    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);\n}\n\n/**\n * Checks if `value` is classified as an `Array` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an array, else `false`.\n * @example\n *\n * _.isArray([1, 2, 3]);\n * // => true\n *\n * _.isArray(document.body.children);\n * // => false\n *\n * _.isArray('abc');\n * // => false\n *\n * _.isArray(_.noop);\n * // => false\n */\nvar isArray = Array.isArray;\n\n/**\n * Checks if `value` is array-like. A value is considered array-like if it's\n * not a function and has a `value.length` that's an integer greater than or\n * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is array-like, else `false`.\n * @example\n *\n * _.isArrayLike([1, 2, 3]);\n * // => true\n *\n * _.isArrayLike(document.body.children);\n * // => true\n *\n * _.isArrayLike('abc');\n * // => true\n *\n * _.isArrayLike(_.noop);\n * // => false\n */\nfunction isArrayLike(value) {\n  return value != null && isLength(value.length) && !isFunction(value);\n}\n\n/**\n * This method is like `_.isArrayLike` except that it also checks if `value`\n * is an object.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an array-like object,\n *  else `false`.\n * @example\n *\n * _.isArrayLikeObject([1, 2, 3]);\n * // => true\n *\n * _.isArrayLikeObject(document.body.children);\n * // => true\n *\n * _.isArrayLikeObject('abc');\n * // => false\n *\n * _.isArrayLikeObject(_.noop);\n * // => false\n */\nfunction isArrayLikeObject(value) {\n  return isObjectLike(value) && isArrayLike(value);\n}\n\n/**\n * Checks if `value` is a buffer.\n *\n * @static\n * @memberOf _\n * @since 4.3.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.\n * @example\n *\n * _.isBuffer(new Buffer(2));\n * // => true\n *\n * _.isBuffer(new Uint8Array(2));\n * // => false\n */\nvar isBuffer = nativeIsBuffer || stubFalse;\n\n/**\n * Checks if `value` is classified as a `Function` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a function, else `false`.\n * @example\n *\n * _.isFunction(_);\n * // => true\n *\n * _.isFunction(/abc/);\n * // => false\n */\nfunction isFunction(value) {\n  // The use of `Object#toString` avoids issues with the `typeof` operator\n  // in Safari 8-9 which returns 'object' for typed array and other constructors.\n  var tag = isObject(value) ? objectToString.call(value) : '';\n  return tag == funcTag || tag == genTag;\n}\n\n/**\n * Checks if `value` is a valid array-like length.\n *\n * **Note:** This method is loosely based on\n * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.\n * @example\n *\n * _.isLength(3);\n * // => true\n *\n * _.isLength(Number.MIN_VALUE);\n * // => false\n *\n * _.isLength(Infinity);\n * // => false\n *\n * _.isLength('3');\n * // => false\n */\nfunction isLength(value) {\n  return typeof value == 'number' &&\n    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;\n}\n\n/**\n * Checks if `value` is the\n * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)\n * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an object, else `false`.\n * @example\n *\n * _.isObject({});\n * // => true\n *\n * _.isObject([1, 2, 3]);\n * // => true\n *\n * _.isObject(_.noop);\n * // => true\n *\n * _.isObject(null);\n * // => false\n */\nfunction isObject(value) {\n  var type = typeof value;\n  return !!value && (type == 'object' || type == 'function');\n}\n\n/**\n * Checks if `value` is object-like. A value is object-like if it's not `null`\n * and has a `typeof` result of \"object\".\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is object-like, else `false`.\n * @example\n *\n * _.isObjectLike({});\n * // => true\n *\n * _.isObjectLike([1, 2, 3]);\n * // => true\n *\n * _.isObjectLike(_.noop);\n * // => false\n *\n * _.isObjectLike(null);\n * // => false\n */\nfunction isObjectLike(value) {\n  return !!value && typeof value == 'object';\n}\n\n/**\n * Creates an array of the own enumerable property names of `object`.\n *\n * **Note:** Non-object values are coerced to objects. See the\n * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)\n * for more details.\n *\n * @static\n * @since 0.1.0\n * @memberOf _\n * @category Object\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names.\n * @example\n *\n * function Foo() {\n *   this.a = 1;\n *   this.b = 2;\n * }\n *\n * Foo.prototype.c = 3;\n *\n * _.keys(new Foo);\n * // => ['a', 'b'] (iteration order is not guaranteed)\n *\n * _.keys('hi');\n * // => ['0', '1']\n */\nfunction keys(object) {\n  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);\n}\n\n/**\n * This method returns a new empty array.\n *\n * @static\n * @memberOf _\n * @since 4.13.0\n * @category Util\n * @returns {Array} Returns the new empty array.\n * @example\n *\n * var arrays = _.times(2, _.stubArray);\n *\n * console.log(arrays);\n * // => [[], []]\n *\n * console.log(arrays[0] === arrays[1]);\n * // => false\n */\nfunction stubArray() {\n  return [];\n}\n\n/**\n * This method returns `false`.\n *\n * @static\n * @memberOf _\n * @since 4.13.0\n * @category Util\n * @returns {boolean} Returns `false`.\n * @example\n *\n * _.times(2, _.stubFalse);\n * // => [false, false]\n */\nfunction stubFalse() {\n  return false;\n}\n\nmodule.exports = cloneDeep;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\"), __webpack_require__(/*! ./../webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://VueTables/./node_modules/lodash.clonedeep/index.js?");

/***/ }),

/***/ "./node_modules/merge/merge.js":
/*!*************************************!*\
  !*** ./node_modules/merge/merge.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {/*!\r\n * @name JavaScript/NodeJS Merge v1.2.1\r\n * @author yeikos\r\n * @repository https://github.com/yeikos/js.merge\r\n\r\n * Copyright 2014 yeikos - MIT license\r\n * https://raw.github.com/yeikos/js.merge/master/LICENSE\r\n */\r\n\r\n;(function(isNode) {\r\n\r\n\t/**\r\n\t * Merge one or more objects \r\n\t * @param bool? clone\r\n\t * @param mixed,... arguments\r\n\t * @return object\r\n\t */\r\n\r\n\tvar Public = function(clone) {\r\n\r\n\t\treturn merge(clone === true, false, arguments);\r\n\r\n\t}, publicName = 'merge';\r\n\r\n\t/**\r\n\t * Merge two or more objects recursively \r\n\t * @param bool? clone\r\n\t * @param mixed,... arguments\r\n\t * @return object\r\n\t */\r\n\r\n\tPublic.recursive = function(clone) {\r\n\r\n\t\treturn merge(clone === true, true, arguments);\r\n\r\n\t};\r\n\r\n\t/**\r\n\t * Clone the input removing any reference\r\n\t * @param mixed input\r\n\t * @return mixed\r\n\t */\r\n\r\n\tPublic.clone = function(input) {\r\n\r\n\t\tvar output = input,\r\n\t\t\ttype = typeOf(input),\r\n\t\t\tindex, size;\r\n\r\n\t\tif (type === 'array') {\r\n\r\n\t\t\toutput = [];\r\n\t\t\tsize = input.length;\r\n\r\n\t\t\tfor (index=0;index<size;++index)\r\n\r\n\t\t\t\toutput[index] = Public.clone(input[index]);\r\n\r\n\t\t} else if (type === 'object') {\r\n\r\n\t\t\toutput = {};\r\n\r\n\t\t\tfor (index in input)\r\n\r\n\t\t\t\toutput[index] = Public.clone(input[index]);\r\n\r\n\t\t}\r\n\r\n\t\treturn output;\r\n\r\n\t};\r\n\r\n\t/**\r\n\t * Merge two objects recursively\r\n\t * @param mixed input\r\n\t * @param mixed extend\r\n\t * @return mixed\r\n\t */\r\n\r\n\tfunction merge_recursive(base, extend) {\r\n\r\n\t\tif (typeOf(base) !== 'object')\r\n\r\n\t\t\treturn extend;\r\n\r\n\t\tfor (var key in extend) {\r\n\r\n\t\t\tif (typeOf(base[key]) === 'object' && typeOf(extend[key]) === 'object') {\r\n\r\n\t\t\t\tbase[key] = merge_recursive(base[key], extend[key]);\r\n\r\n\t\t\t} else {\r\n\r\n\t\t\t\tbase[key] = extend[key];\r\n\r\n\t\t\t}\r\n\r\n\t\t}\r\n\r\n\t\treturn base;\r\n\r\n\t}\r\n\r\n\t/**\r\n\t * Merge two or more objects\r\n\t * @param bool clone\r\n\t * @param bool recursive\r\n\t * @param array argv\r\n\t * @return object\r\n\t */\r\n\r\n\tfunction merge(clone, recursive, argv) {\r\n\r\n\t\tvar result = argv[0],\r\n\t\t\tsize = argv.length;\r\n\r\n\t\tif (clone || typeOf(result) !== 'object')\r\n\r\n\t\t\tresult = {};\r\n\r\n\t\tfor (var index=0;index<size;++index) {\r\n\r\n\t\t\tvar item = argv[index],\r\n\r\n\t\t\t\ttype = typeOf(item);\r\n\r\n\t\t\tif (type !== 'object') continue;\r\n\r\n\t\t\tfor (var key in item) {\r\n\r\n\t\t\t\tif (key === '__proto__') continue;\r\n\r\n\t\t\t\tvar sitem = clone ? Public.clone(item[key]) : item[key];\r\n\r\n\t\t\t\tif (recursive) {\r\n\r\n\t\t\t\t\tresult[key] = merge_recursive(result[key], sitem);\r\n\r\n\t\t\t\t} else {\r\n\r\n\t\t\t\t\tresult[key] = sitem;\r\n\r\n\t\t\t\t}\r\n\r\n\t\t\t}\r\n\r\n\t\t}\r\n\r\n\t\treturn result;\r\n\r\n\t}\r\n\r\n\t/**\r\n\t * Get type of variable\r\n\t * @param mixed input\r\n\t * @return string\r\n\t *\r\n\t * @see http://jsperf.com/typeofvar\r\n\t */\r\n\r\n\tfunction typeOf(input) {\r\n\r\n\t\treturn ({}).toString.call(input).slice(8, -1).toLowerCase();\r\n\r\n\t}\r\n\r\n\tif (isNode) {\r\n\r\n\t\tmodule.exports = Public;\r\n\r\n\t} else {\r\n\r\n\t\twindow[publicName] = Public;\r\n\r\n\t}\r\n\r\n})( true && module && typeof module.exports === 'object' && module.exports);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://VueTables/./node_modules/merge/merge.js?");

/***/ }),

/***/ "./node_modules/mitt/dist/mitt.es.js":
/*!*******************************************!*\
  !*** ./node_modules/mitt/dist/mitt.es.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(n){return{all:n=n||new Map,on:function(t,e){var i=n.get(t);i&&i.push(e)||n.set(t,[e])},off:function(t,e){var i=n.get(t);i&&i.splice(i.indexOf(e)>>>0,1)},emit:function(t,e){(n.get(t)||[]).slice().map(function(n){n(e)}),(n.get(\"*\")||[]).slice().map(function(n){n(t,e)})}}});\n//# sourceMappingURL=mitt.es.js.map\n\n\n//# sourceURL=webpack://VueTables/./node_modules/mitt/dist/mitt.es.js?");

/***/ }),

/***/ "./node_modules/v-pagination-3/dist/vue-pagination-2.min.js":
/*!******************************************************************!*\
  !*** ./node_modules/v-pagination-3/dist/vue-pagination-2.min.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("!function(t,e){for(var i in e)t[i]=e[i]}(exports,function(t){var e={};function i(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(t,\"__esModule\",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&\"object\"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,\"default\",{enumerable:!0,value:t}),2&e&&\"string\"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,\"a\",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p=\"/dist/\",i(i.s=9)}([function(t,e){t.exports=__webpack_require__(/*! vue */ \"vue\")},function(t,e,i){\"use strict\";t.exports={nav:\"\",count:\"\",wrapper:\"pagination\",list:\"pagination-list\",item:\"\",link:\"pagination-link\",next:\"\",prev:\"\",active:\"is-current\",disabled:\"\"}},function(t,e,i){\"use strict\";t.exports={nav:\"\",count:\"\",wrapper:\"\",list:\"pagination\",item:\"page-item\",link:\"page-link\",next:\"\",prev:\"\",active:\"active\",disabled:\"disabled\"}},function(t,e,i){\"use strict\";t.exports={nav:\"\",count:\"\",wrapper:\"\",list:\"pagination\",item:\"page-item\",link:\"page-link\",next:\"\",prev:\"\",active:\"active\",disabled:\"disabled\"}},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,\"loaded\",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,\"id\",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,i){(function(t){!function(e){var i=function(t){return n(!0===t,!1,arguments)};function s(t,e){if(\"object\"!==a(t))return e;for(var i in e)\"object\"===a(t[i])&&\"object\"===a(e[i])?t[i]=s(t[i],e[i]):t[i]=e[i];return t}function n(t,e,n){var o=n[0],r=n.length;(t||\"object\"!==a(o))&&(o={});for(var h=0;h<r;++h){var u=n[h];if(\"object\"===a(u))for(var l in u)if(\"__proto__\"!==l){var c=t?i.clone(u[l]):u[l];o[l]=e?s(o[l],c):c}}return o}function a(t){return{}.toString.call(t).slice(8,-1).toLowerCase()}i.recursive=function(t){return n(!0===t,!0,arguments)},i.clone=function(t){var e,s,n=t,o=a(t);if(\"array\"===o)for(n=[],s=t.length,e=0;e<s;++e)n[e]=i.clone(t[e]);else if(\"object\"===o)for(e in n={},t)n[e]=i.clone(t[e]);return n},e?t.exports=i:window.merge=i}(\"object\"==typeof t&&t&&\"object\"==typeof t.exports&&t.exports)}).call(this,i(4)(t))},function(t,e,i){\"use strict\";Object.defineProperty(e,\"__esModule\",{value:!0}),e.default=function(){return{format:!0,chunk:10,chunksNavigation:\"fixed\",edgeNavigation:!1,theme:\"bootstrap3\",template:null,texts:{count:\"Showing {from} to {to} of {count} records|{count} records|One record\",first:\"First\",last:\"Last\",nextPage:\">\",nextChunk:\">>\",prevPage:\"<\",prevChunk:\"<<\"}}},t.exports=e.default},function(t,e,i){\"use strict\";Object.defineProperty(e,\"__esModule\",{value:!0});var s=a(i(6)),n=a(i(5));function a(t){return t&&t.__esModule?t:{default:t}}e.default={name:\"RenderlessPagination\",inject:[\"Page\",\"records\",\"perPage\"],props:{itemClass:{required:!1,default:\"VuePagination__pagination-item\"}},render:function(){var t=this;return this.$slots.default({override:this.opts.template,showPagination:this.totalPages>1,pages:this.pages,pageEvents:function(e){return{click:function(){return t.setPage(e)},keydown:function(e){\"ArrowRight\"===e.key&&t.next(),\"ArrowLeft\"===e.key&&t.prev()}}},activeClass:this.activeClass,hasEdgeNav:this.opts.edgeNavigation&&this.totalChunks>1,setPage:this.setPage,setFirstPage:this.setPage.bind(this,1),setLastPage:this.setPage.bind(this,this.totalPages),hasChunksNav:\"fixed\"===this.opts.chunksNavigation,setPrevChunk:this.prevChunk,setNextChunk:this.nextChunk,setPrevPage:this.prev,firstPageProps:{class:this.Theme.link,disabled:1===this.page},lastPageProps:{class:this.Theme.link,disabled:this.page===this.totalPages},prevProps:{class:this.Theme.link,disabled:!!this.allowedPageClass(this.page-1)},nextProps:{class:this.Theme.link,disabled:!!this.allowedPageClass(this.page+1)},pageClasses:function(e){return t.itemClass+\" \"+t.Theme.item+\" \"+t.activeClass(e)},prevChunkProps:{class:this.Theme.link,disabled:!this.allowedChunk(-1)},nextChunkProps:{class:this.Theme.link,disabled:!this.allowedChunk(1)},setNextPage:this.next,theme:{nav:this.Theme.nav,list:\"VuePagination__pagination \"+this.Theme.list,prev:this.itemClass+\" \"+this.itemClass+\"-prev-page \"+this.Theme.item+\" \"+this.Theme.prev+\" \"+this.allowedPageClass(this.page-1),next:this.itemClass+\"  \"+this.itemClass+\"-next-page \"+this.Theme.item+\" \"+this.Theme.next+\" \"+this.allowedPageClass(this.page+1),prevChunk:this.itemClass+\" \"+this.Theme.item+\" \"+this.Theme.prev+\" \"+this.itemClass+\"-prev-chunk \"+this.allowedChunkClass(-1),nextChunk:this.itemClass+\" \"+this.Theme.item+\" \"+this.Theme.next+\" \"+this.itemClass+\"-next-chunk \"+this.allowedChunkClass(1),firstPage:this.itemClass+\" \"+this.Theme.item+\" \"+(1===this.page?this.Theme.disabled:\"\")+\" \"+this.itemClass+\"-first-page\",lastPage:this.itemClass+\" \"+this.Theme.item+\" \"+(this.page===this.totalPages?this.Theme.disabled:\"\")+\" \"+this.itemClass+\"-last-page\",link:this.Theme.link,page:this.itemClass+\" \"+this.Theme.item,wrapper:this.Theme.wrapper,count:\"VuePagination__count \"+this.Theme.count},hasRecords:this.hasRecords,count:this.count,texts:this.opts.texts,opts:this.opts,allowedChunkClass:this.allowedChunkClass,allowedPageClass:this.allowedPageClass,setChunk:this.setChunk,prev:this.prev,next:this.next,totalPages:this.totalPages,totalChunks:this.totalChunks,page:this.Page(),records:this.records(),perPage:this.perPage(),formatNumber:this.formatNumber})},data:function(){return{firstPage:this.$parent.value,For:this.$parent.for,Options:this.$parent.options}},watch:{page:function(t){if(\"scroll\"===this.opts.chunksNavigation&&this.allowedPage(t)&&!this.inDisplay(t))if(t===this.totalPages){var e=t-this.opts.chunk+1;this.firstPage=e>=1?e:1}else this.firstPage=t;this.$parent.$emit(\"paginate\",t)}},computed:{Records:function(){return this.records()},PerPage:function(){return this.perPage()},opts:function(){return n.default.recursive((0,s.default)(),this.Options)},Theme:function(){if(this.opts.theme instanceof Object)return this.opts.theme;var t={bootstrap3:i(3),bootstrap4:i(2),bulma:i(1)};if(!t[this.opts.theme])throw\"vue-pagination-2: the theme \"+this.opts.theme+\" does not exist\";return t[this.opts.theme]},page:function(){return this.Page()},pages:function(){return this.Records?function(t,e){return Array.apply(0,Array(e)).map(function(e,i){return i+t})}(this.paginationStart,this.pagesInCurrentChunk):[]},totalPages:function(){return this.Records?Math.ceil(this.Records/this.PerPage):1},totalChunks:function(){return Math.ceil(this.totalPages/this.opts.chunk)},currentChunk:function(){return Math.ceil(this.page/this.opts.chunk)},paginationStart:function(){return\"scroll\"===this.opts.chunksNavigation?this.firstPage:(this.currentChunk-1)*this.opts.chunk+1},pagesInCurrentChunk:function(){return this.paginationStart+this.opts.chunk<=this.totalPages?this.opts.chunk:this.totalPages-this.paginationStart+1},hasRecords:function(){return parseInt(this.Records)>0},count:function(){if(/{page}/.test(this.opts.texts.count))return this.totalPages<=1?\"\":this.opts.texts.count.replace(\"{page}\",this.page).replace(\"{pages}\",this.totalPages);var t=this.opts.texts.count.split(\"|\"),e=(this.page-1)*this.PerPage+1,i=this.page==this.totalPages?this.Records:e+this.PerPage-1;return t[Math.min(1==this.Records?2:1==this.totalPages?1:0,t.length-1)].replace(\"{count}\",this.formatNumber(this.Records)).replace(\"{from}\",this.formatNumber(e)).replace(\"{to}\",this.formatNumber(i))}},methods:{setPage:function(t){this.allowedPage(t)&&this.paginate(t)},paginate:function(t){this.$parent.$emit(\"update:modelValue\",t)},next:function(){return this.setPage(this.page+1)},prev:function(){return this.setPage(this.page-1)},inDisplay:function(t){var e=this.firstPage,i=e+this.opts.chunk-1;return t>=e&&t<=i},nextChunk:function(){return this.setChunk(1)},prevChunk:function(){return this.setChunk(-1)},setChunk:function(t){this.setPage((this.currentChunk-1+t)*this.opts.chunk+1)},allowedPage:function(t){return t>=1&&t<=this.totalPages},allowedChunk:function(t){return 1==t&&this.currentChunk<this.totalChunks||-1==t&&this.currentChunk>1},allowedPageClass:function(t){return this.allowedPage(t)?\"\":this.Theme.disabled},allowedChunkClass:function(t){return this.allowedChunk(t)?\"\":this.Theme.disabled},activeClass:function(t){return this.page==t?this.Theme.active:\"\"},formatNumber:function(t){return this.opts.format?t.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g,\",\"):t}}},t.exports=e.default},function(t,e,i){\"use strict\";var s=i(0);t.exports=function(t){return function(t){var e=this.theme,i=\"\",n=\"\",a=\"\",o=\"\",r=this.pages.map(function(t){return(0,s.createVNode)(\"li\",{class:\"VuePagination__pagination-item \"+e.page+\" \"+this.activeClass(t),onClick:this.setPage.bind(this,t),onKeyDown:this.pageEvents(t).keydown},[(0,s.createVNode)(\"button\",{class:e.link+\" \"+this.activeClass(t)},[this.formatNumber(t)])])}.bind(this));return this.opts.edgeNavigation&&this.totalChunks>1&&(a=(0,s.createVNode)(\"li\",{class:\"VuePagination__pagination-item \"+e.page+\" \"+(1===this.page?e.disabled:\"\")+\" VuePagination__pagination-item-first-page\",onClick:this.setPage.bind(this,1)},[(0,s.createVNode)(\"button\",{type:\"button\",class:e.link,disabled:1===this.page},[this.opts.texts.first])]),o=(0,s.createVNode)(\"li\",{class:\"VuePagination__pagination-item \"+e.page+\" \"+(this.page===this.totalPages?e.disabled:\"\")+\" VuePagination__pagination-item-last-page\",onClick:this.setPage.bind(this,this.totalPages)},[(0,s.createVNode)(\"button\",{type:\"button\",class:e.link,disabled:this.page===this.totalPages},[this.opts.texts.last])])),\"fixed\"===this.opts.chunksNavigation&&(i=(0,s.createVNode)(\"li\",{class:\"VuePagination__pagination-item \"+e.page+\" \"+e.prev+\" VuePagination__pagination-item-prev-chunk \"+this.allowedChunkClass(-1),onClick:this.setChunk.bind(this,-1)},[(0,s.createVNode)(\"button\",{type:\"button\",class:e.link,disabled:!!this.allowedChunkClass(-1)},[this.opts.texts.prevChunk])]),n=(0,s.createVNode)(\"li\",{class:\"VuePagination__pagination-item \"+e.page+\" \"+e.next+\" VuePagination__pagination-item-next-chunk \"+this.allowedChunkClass(1),onClick:this.setChunk.bind(this,1)},[(0,s.createVNode)(\"button\",{type:\"button\",class:e.link,disabled:!!this.allowedChunkClass(1)},[this.opts.texts.nextChunk])])),(0,s.createVNode)(\"div\",{class:\"VuePagination \"+e.wrapper},[(0,s.createVNode)(\"nav\",{class:\"\"+e.nav},[(0,s.createVNode)(\"ul\",{style:this.totalPages>1?\"\":\"display:none\",class:e.list+\" VuePagination__pagination\"},[a,i,(0,s.createVNode)(\"li\",{class:\"VuePagination__pagination-item \"+e.page+\" \"+e.prev+\" VuePagination__pagination-item-prev-page \"+this.allowedPageClass(this.page-1),onClick:this.prev.bind(this)},[(0,s.createVNode)(\"button\",{type:\"button\",class:e.link,disabled:!!this.allowedPageClass(this.page-1)},[this.opts.texts.prevPage])]),r,(0,s.createVNode)(\"li\",{class:\"VuePagination__pagination-item \"+e.page+\" \"+e.next+\" VuePagination__pagination-item-next-page \"+this.allowedPageClass(this.page+1),onClick:this.next.bind(this)},[(0,s.createVNode)(\"button\",{type:\"button\",class:e.link,disabled:!!this.allowedPageClass(this.page+1)},[this.opts.texts.nextPage])]),n,o]),(0,s.createVNode)(\"p\",{style:parseInt(this.records)?\"\":\"display:none\",class:\"VuePagination__count \"+e.count},[this.count])])])}.bind(t)}},function(t,e,i){\"use strict\";Object.defineProperty(e,\"__esModule\",{value:!0});var s=o(i(8)),n=o(i(7)),a=i(0);function o(t){return t&&t.__esModule?t:{default:t}}e.default={name:\"Pagination\",components:{RenderlessPagination:n.default},provide:function(){var t=this;return{Page:function(){return t.modelValue},perPage:function(){return t.perPage},records:function(){return t.records}}},render:function(){return(0,a.h)(n.default,{},{default:function(t){return t.override?(0,a.h)(t.override,{props:t}):(0,s.default)(t)(a.h)}})},props:{modelValue:{type:Number,required:!0,validator:function(t){return t>0}},records:{type:Number,required:!0},perPage:{type:Number,required:!0},options:{type:Object}}},t.exports=e.default}]));\n\n//# sourceURL=webpack://VueTables/./node_modules/v-pagination-3/dist/vue-pagination-2.min.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack://VueTables/(webpack)/buildin/global.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack://VueTables/(webpack)/buildin/module.js?");

/***/ }),

/***/ "vue":
/*!******************************************************************************!*\
  !*** external {"root":"Vue","commonjs":"vue","commonjs2":"vue","amd":"vue"} ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = undefined;\n\n//# sourceURL=webpack://VueTables/external_%7B%22root%22:%22Vue%22,%22commonjs%22:%22vue%22,%22commonjs2%22:%22vue%22,%22amd%22:%22vue%22%7D?");

/***/ })

/******/ });