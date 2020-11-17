"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

var _RLFiltersRow = _interopRequireDefault(require("./renderless/RLFiltersRow"));

var _VtTextFilter = _interopRequireDefault(require("./VtTextFilter"));

var _VtListFilter = _interopRequireDefault(require("./VtListFilter"));

var _VtDateFilter = _interopRequireDefault(require("./VtDateFilter"));

var _omit = _interopRequireDefault(require("../helpers/omit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'VtFiltersRow',
  components: {
    RLFiltersRow: _RLFiltersRow["default"],
    VtTextFilter: _VtTextFilter["default"],
    VtListFilter: _VtListFilter["default"],
    VtDateFilter: _VtDateFilter["default"]
  },
  render: function render() {
    return (0, _vue.h)(_RLFiltersRow["default"], {}, {
      "default": function _default(props) {
        var filters = [];

        if (props.opts.selectable.mode) {
          filters.push((0, _vue.createVNode)("th", {
            "class": "VueTables__select-row"
          }, null));
        }

        if (props.hasChildRow && props.opts.childRowTogglerFirst && props.opts.showChildRowToggler) filters.push((0, _vue.createVNode)("th", null, null));
        props.columns.map(function (column) {
          var filter = '';

          if (props.filterable(column)) {
            filter = (0, _vue.h)(props.filterType(column), {
              column: column
            });
          }

          if (typeof props.slots["filter__".concat(column)] !== 'undefined') {
            filter = filter ? (0, _vue.createVNode)("div", null, [filter, props.slots["filter__".concat(column)]()]) : props.slots["filter__".concat(column)]();
          }

          filters.push((0, _vue.createVNode)("th", {
            "class": props.columnClass(column)
          }, [!!filter ? (0, _vue.createVNode)("div", {
            "class": ["VueTables__column-filter", 'VueTables__' + column + '-filter-wrapper']
          }, [filter]) : '']));
        });
        if (props.hasChildRow && !props.opts.childRowTogglerFirst && props.opts.showChildRowToggler) filters.push((0, _vue.createVNode)("th", null, null));
        return props.override ? (0, _vue.h)(props.override, {
          props: (0, _omit["default"])(props)
        }) : (0, _vue.createVNode)("tr", {
          "class": "VueTables__filters-row"
        }, [filters]);
      }
    });
  }
};
exports["default"] = _default2;