"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

var _RLPerPageSelector = _interopRequireDefault(require("./renderless/RLPerPageSelector"));

var _omit = _interopRequireDefault(require("../helpers/omit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'VtPerPageSelector',
  components: {
    RLPerPageSelector: _RLPerPageSelector["default"]
  },
  render: function render() {
    return (0, _vue.h)(_RLPerPageSelector["default"], {}, {
      "default": function _default(props) {
        return props.override ? (0, _vue.h)(props.override, {
          props: (0, _omit["default"])(props)
        }) : (0, _vue.createVNode)("div", {
          "class": "VueTables__limit-field"
        }, [(0, _vue.createVNode)("label", {
          "class": props.labelClass,
          "for": "VueTables__limit_".concat(props.id)
        }, [props.display('limit')]), (0, _vue.createVNode)("select", {
          "id": props.selectAttrs.id,
          "class": props.selectAttrs["class"],
          "onChange": props.selectEvents.change
        }, [props.perPageValues.map(function (val) {
          return (0, _vue.createVNode)("option", {
            "value": val,
            "selected": val === props.selectAttrs.value
          }, [val]);
        })])]);
      }
    });
  }
};
exports["default"] = _default2;