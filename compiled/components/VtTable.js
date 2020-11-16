"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

var _RLTable = _interopRequireDefault(require("./renderless/RLTable"));

var _VtTableHead = _interopRequireDefault(require("./VtTableHead"));

var _VtTableBody = _interopRequireDefault(require("./VtTableBody"));

var _omit = _interopRequireDefault(require("../helpers/omit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'VtTable',
  inject: ['setRef'],
  components: {
    RLTable: _RLTable["default"],
    VtTableHead: _VtTableHead["default"],
    VtTableBody: _VtTableBody["default"]
  },
  setup: function setup() {
    var table = (0, _vue.ref)(null);
    return {
      table: table
    };
  },
  mounted: function mounted() {
    this.setRef('table', this.$refs.table);
  },
  render: function render() {
    return (0, _vue.h)(_RLTable["default"], {}, {
      "default": function _default(props) {
        var caption = props.caption ? (0, _vue.createVNode)("caption", null, [props.caption]) : '';
        return props.override ? (0, _vue.h)(props.override, {
          props: (0, _omit["default"])(props)
        }) : (0, _vue.createVNode)("table", {
          "ref": "table",
          "class": props.tableAttrs["class"],
          "summary": props.tableAttrs.summary
        }, [caption, (0, _vue.h)(_VtTableHead["default"]), props.slots.beforeBody ? props.slots.beforeBody() : '', (0, _vue.h)(_VtTableBody["default"]), props.slots.afterBody ? props.slots.afterBody() : '']);
      }
    });
  }
};
exports["default"] = _default2;