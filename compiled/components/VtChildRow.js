"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

var _RLChildRow = _interopRequireDefault(require("./renderless/RLChildRow"));

var _omit = _interopRequireDefault(require("../helpers/omit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'VtChildRow',
  props: ['row', 'index'],
  components: {
    RLChildRow: _RLChildRow["default"]
  },
  render: function render() {
    return (0, _vue.h)(_RLChildRow["default"], {
      row: this.row,
      index: this.index
    }, {
      "default": function _default(props) {
        return props.override ? (0, _vue.h)(props.override, {
          props: (0, _omit["default"])(props)
        }) : (0, _vue.createVNode)("tr", {
          "class": 'VueTables__child-row ' + props["class"]
        }, [(0, _vue.createVNode)("td", {
          "colspan": props.colspan
        }, [props.childRow])]);
      }
    });
  }
};
exports["default"] = _default2;