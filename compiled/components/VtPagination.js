"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _RLPagination = _interopRequireDefault(require("./renderless/RLPagination"));

var _vPagination = _interopRequireDefault(require("v-pagination-3"));

var _vue = require("vue");

var _omit = _interopRequireDefault(require("../helpers/omit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'VtPagination',
  components: {
    RLPagination: _RLPagination["default"],
    Pagination: _vPagination["default"]
  },
  render: function render() {
    return (0, _vue.h)(_RLPagination["default"], {}, {
      "default": function _default(props) {
        return props.override ? (0, _vue.h)(props.override, {
          props: (0, _omit["default"])(props)
        }) : (0, _vue.h)(_vPagination["default"], {
          options: props.optionsObj,
          records: props.records,
          perPage: props.perPage,
          modelValue: props.page,
          "onUpdate:modelValue": function onUpdateModelValue(page) {
            return props.setPage(page);
          }
        });
      }
    });
  }
};
exports["default"] = _default2;