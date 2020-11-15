"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

var _RLNoResultsRow = _interopRequireDefault(require("./renderless/RLNoResultsRow"));

var _omit = _interopRequireDefault(require("../helpers/omit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'VtNoResultsRow',
  components: {
    RLNoResultsRow: _RLNoResultsRow["default"]
  },
  render: function render() {
    return (0, _vue.h)(_RLNoResultsRow["default"], {}, {
      "default": function _default(props) {
        return props.override ? (0, _vue.h)(props.override, {
          props: (0, _omit["default"])(props)
        }) : (0, _vue.createVNode)("tr", {
          "class": props["class"]
        }, [(0, _vue.createVNode)("td", {
          "class": "text-center ".concat(props.tdClass),
          "tabindex": props.tabIndex,
          "colspan": props.colspan
        }, [props.message])]);
      }
    });
  }
};
exports["default"] = _default2;