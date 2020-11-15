"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

var _RLChildRowToggler = _interopRequireDefault(require("./renderless/RLChildRowToggler"));

var _omit = _interopRequireDefault(require("../helpers/omit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'VtChildRowToggler',
  props: ['rowId'],
  components: {
    RLChildRowToggler: _RLChildRowToggler["default"]
  },
  render: function render() {
    return (0, _vue.h)(_RLChildRowToggler["default"], {
      rowId: this.rowId
    }, {
      "default": function _default(props) {
        return props.override ? (0, _vue.h)(props.override, {
          props: (0, _omit["default"])(props)
        }) : (0, _vue.createVNode)("td", {
          "tabindex": props.tabIndex,
          "onKeypress": function onKeypress(e) {
            if (e.key === 'Enter') {
              props.toggle();
            }
          },
          "onClick": props.toggle
        }, [(0, _vue.createVNode)("span", {
          "class": "VueTables__child-row-toggler " + props["class"]()
        }, null)]);
      }
    });
  }
};
exports["default"] = _default2;