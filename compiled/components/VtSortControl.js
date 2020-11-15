"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

var _RLSortControl = _interopRequireDefault(require("./renderless/RLSortControl"));

var _omit = _interopRequireDefault(require("../helpers/omit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'VtSortControl',
  components: {
    RLSortControl: _RLSortControl["default"]
  },
  render: function render() {
    return (0, _vue.h)(_RLSortControl["default"], {}, {
      "default": function _default(props) {
        return props.sortable ? props.override ? (0, _vue.h)(props.override, {
          props: (0, _omit["default"])(props)
        }) : (0, _vue.createVNode)("span", {
          "class": props["class"]
        }, null) : '';
      }
    });
  }
};
exports["default"] = _default2;