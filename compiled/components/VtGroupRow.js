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
  props: ['level', 'value'],
  render: function render() {
    return (0, _vue.h)(_RLGroupRow["default"], {
      level: this.level,
      value: this.value
    }, {
      "default": function _default(props) {
        return props.override ? (0, _vue.h)(props.override, {
          props: (0, _omit["default"])(props)
        }) : (0, _vue.createVNode)("tr", {
          "class": "VueTables__group-row VueTables__group-row--".concat(props.level),
          "onclick": props.toggleGroupDirection
        }, [(0, _vue.createVNode)("td", {
          "colspan": props.colspan
        }, [props.canToggleGroup ? (0, _vue.createVNode)("button", {
          "class": props.theme.button,
          "onclick": props.toggleGroup.bind(this, props.groupValue)
        }, [props.groupValue, (0, _vue.createVNode)("span", {
          "class": "VueTables__group-toggler ".concat(props.groupToggleIcon(props.groupValue))
        }, null)]) : '', !props.canToggleGroup ? (0, _vue.createVNode)("span", null, [props.groupValue]) : '', props.slot])]);
      }
    });
  }
};
exports["default"] = _default2;