"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

var _RLRowSelector = _interopRequireDefault(require("./renderless/RLRowSelector"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'VtRowSelector',
  components: {
    RLRowSelector: _RLRowSelector["default"]
  },
  render: function render() {
    return (0, _vue.h)(_RLRowSelector["default"], {}, {
      "default": function _default(props) {
        return props.override ? (0, _vue.h)(props.override, {
          attrs: {
            props: props
          }
        }) : (0, _vue.createVNode)("td", {
          "class": "VueTables__select-row VueTables__select-single ".concat(props.tdClass),
          "onClick": function onClick(e) {
            return props.toggleRow(e, props.row, props.index, props.disabled);
          }
        }, [(0, _vue.createVNode)("input", {
          "type": props.type,
          "name": "selected_row[]",
          "class": "vt-select-row",
          "disabled": props.disabled,
          "checked": props.selected
        }, null)]);
      }
    });
  }
};
exports["default"] = _default2;