"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

var _RLDropdownPagination = _interopRequireDefault(require("./renderless/RLDropdownPagination"));

var _omit = _interopRequireDefault(require("../helpers/omit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'VTDropdownPagination',
  components: {
    RLDropdownPagination: _RLDropdownPagination["default"]
  },
  render: function render() {
    return (0, _vue.h)(_RLDropdownPagination["default"], {}, {
      "default": function _default(props) {
        var id = "VueTables__dropdown-pagination_" + props.name;
        var pages = [];

        for (var pag = 1; pag <= props.totalPages; pag++) {
          pages.push((0, _vue.createVNode)("option", {
            "value": pag
          }, [pag]));
        }

        return props.override ? (0, _vue.h)(props.override, {
          props: (0, _omit["default"])(props)
        }) : (0, _vue.createVNode)("select", {
          "class": "".concat(props.theme.select, " dropdown-pagination"),
          "name": "page",
          "ref": "page",
          "value": props.page,
          "on-change": function onChange(e) {
            return props.setPage(e.target.value);
          },
          "id": id
        }, [pages]);
      }
    });
  }
};
exports["default"] = _default2;