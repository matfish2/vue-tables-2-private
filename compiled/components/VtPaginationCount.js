"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

var _RLPaginationCount = _interopRequireDefault(require("./renderless/RLPaginationCount"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'VtPaginationCount',
  components: {
    RLPaginationCount: _RLPaginationCount["default"]
  },
  render: function render() {
    return (0, _vue.h)(_RLPaginationCount["default"], {}, {
      "default": function _default(props) {
        return (0, _vue.withDirectives)((0, _vue.createVNode)("p", null, [(0, _vue.createTextVNode)("Showing records "), props.from, (0, _vue.createTextVNode)(" to "), props.to, (0, _vue.createTextVNode)(" out of "), props.total]), [[_vue.vShow, props.total]]);
      }
    });
  }
};
exports["default"] = _default2;