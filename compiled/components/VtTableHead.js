"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

var _RLTableHead = _interopRequireDefault(require("./renderless/RLTableHead"));

var _VtHeadingsRow = _interopRequireDefault(require("./VtHeadingsRow"));

var _VtFiltersRow = _interopRequireDefault(require("./VtFiltersRow"));

var _omit = _interopRequireDefault(require("../helpers/omit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'VtTableHead',
  components: {
    RLTableHead: _RLTableHead["default"],
    VtHeadingsRow: _VtHeadingsRow["default"],
    VtFiltersRow: _VtFiltersRow["default"]
  },
  render: function render() {
    return (0, _vue.h)(_RLTableHead["default"], {}, {
      "default": function _default(props) {
        return props.override ? (0, _vue.h)(props.override, {
          props: (0, _omit["default"])(props)
        }) : (0, _vue.createVNode)("thead", {
          "class": props["class"]
        }, [props.slots.prependHead ? props.slots.prependHead() : '', (0, _vue.h)(_VtHeadingsRow["default"]), props.slots.beforeFilters ? props.slots.beforeFilters() : '', props.opts.filterByColumn && props.opts.filterable ? (0, _vue.h)(_VtFiltersRow["default"]) : '', props.slots.afterFilters ? props.slots.afterFilters() : '']);
      }
    });
  }
};
exports["default"] = _default2;