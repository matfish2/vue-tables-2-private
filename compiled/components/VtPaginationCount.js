"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _RLPaginationCount = _interopRequireDefault(require("./renderless/RLPaginationCount"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'VtPaginationCount',
  components: {
    RLPaginationCount: _RLPaginationCount["default"]
  },
  render: function render() {
    var h = arguments[0];
    return h("r-l-pagination-count", {
      scopedSlots: {
        "default": function _default(props) {
          return h("p", {
            directives: [{
              name: "show",
              value: props.total
            }]
          }, ["Showing records ", props.from, " to ", props.to, " out of ", props.total]);
        }
      }
    });
  }
};
exports["default"] = _default2;