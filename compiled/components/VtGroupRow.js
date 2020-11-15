"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

var _RLGroupRow = _interopRequireDefault(require("./renderless/RLGroupRow"));

var _omit = _interopRequireDefault(require("../helpers/omit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'VtGroupRow',
  components: {
    RLGroupRow: _RLGroupRow["default"]
  },
  props: ['row'],
  render: function render() {
    return (0, _vue.h)(_RLGroupRow["default"], {
      row: this.row
    }, {
      "default": function _default(props) {
        return props.override ? (0, _vue.h)(props.override, {
          props: (0, _omit["default"])(props)
        }) : (0, _vue.createVNode)("tr", {
          "class": props.theme.groupTr,
          "on-click": props.toggleGroupDirection
        }, [(0, _vue.createVNode)("td", {
          "colspan": props.colspan
        }, [props.canToggleGroup ? (0, _vue.createVNode)("button", {
          "class": props.theme.button,
          "on-click": props.toggleGroup.bind(this, props.groupValue)
        }, [props.groupValue, (0, _vue.createVNode)("span", {
          "class": props.groupToggleIcon(props.groupValue)
        }, null)]) : '', !props.canToggleGroup ? (0, _vue.createVNode)("span", null, [props.groupValue]) : '', props.slot])]);
      }
    });
  }
};
exports["default"] = _default2;