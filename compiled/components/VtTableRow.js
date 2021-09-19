"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

var _RLTableRow = _interopRequireDefault(require("./renderless/RLTableRow"));

var _VtTableCell = _interopRequireDefault(require("./VtTableCell"));

var _VtChildRowToggler = _interopRequireDefault(require("./VtChildRowToggler"));

var _VtRowSelector = _interopRequireDefault(require("./VtRowSelector"));

var _omit = _interopRequireDefault(require("../helpers/omit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'VtTableRow',
  props: ['row', 'index'],
  components: {
    RLTableRow: _RLTableRow["default"],
    VtTableCell: _VtTableCell["default"],
    VtChildRowToggler: _VtChildRowToggler["default"],
    VtRowSelector: _VtRowSelector["default"]
  },
  render: function render() {
    return (0, _vue.h)(_RLTableRow["default"], {
      row: this.row,
      index: this.index
    }, {
      "default": function _default(props) {
        return props.override ? (0, _vue.h)(props.override, {
          props: (0, _omit["default"])(props)
        }) : (0, _vue.createVNode)("tr", (0, _vue.mergeProps)({
          "class": "VueTables__row " + props.rowAttrs["class"]
        }, props.rowAttrs.attrs, {
          "onClick": props.rowEvents.click,
          "onDblclick": props.rowEvents.click
        }), [props.selectable ? (0, _vue.h)(_VtRowSelector["default"]) : '', props.childRowTogglerFirst ? (0, _vue.h)(_VtChildRowToggler["default"], {
          rowId: props.rowId
        }) : '', props.columns.map(function (column) {
          return (0, _vue.h)(_VtTableCell["default"], {
            column: column
          });
        }), props.childRowTogglerLast ? (0, _vue.h)(_VtChildRowToggler["default"], {
          rowId: props.rowId
        }) : '']);
      }
    });
  }
};
exports["default"] = _default2;