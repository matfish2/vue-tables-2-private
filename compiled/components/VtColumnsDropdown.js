"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

var _RLColumnsDropdown = _interopRequireDefault(require("./renderless/RLColumnsDropdown"));

var _dropdownWrapper = _interopRequireDefault(require("./dropdown-wrapper"));

var _omit = _interopRequireDefault(require("../helpers/omit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'VtColumnsDropdown',
  components: {
    RLColumnsDropdown: _RLColumnsDropdown["default"]
  },
  render: function render() {
    return (0, _vue.h)(_RLColumnsDropdown["default"], {}, {
      "default": function _default(props) {
        if (props.override) {
          return (0, _vue.h)(props.override, {
            props: (0, _omit["default"])(props)
          });
        }

        var content;
        var cols = props.origColumns.map(function (column) {
          content = (0, _vue.createVNode)("a", {
            "class": props.theme.dropdown.item,
            "href": "#",
            "onClick": function onClick() {
              return props.toggleColumn(column);
            }
          }, [(0, _vue.createVNode)("input", {
            "type": "checkbox",
            "value": column,
            "disabled": props.onlyColumn(column),
            "checked": props.columns.includes(column)
          }, null), props.getHeading(column)]);
          return props.theme.framework === 'bulma' ? content : (0, _vue.createVNode)("li", null, [content]);
        });
        return (0, _vue.createVNode)("div", {
          "class": "VueTables__columns-dropdown"
        }, [(0, _vue.createVNode)("button", {
          "type": "button",
          "class": "".concat(props.theme.button, " ").concat(props.theme.dropdown.trigger),
          "onClick": props.toggleColumnsDropdown
        }, [props.display('columns'), (0, _vue.createVNode)("span", {
          "class": "".concat(props.theme.icon, " ").concat(props.theme.small)
        }, [(0, _vue.createVNode)("i", {
          "class": props.theme.dropdown.caret
        }, null)])]), (0, _dropdownWrapper["default"])(_vue.h, props.theme.dropdown, cols, props.displayColumnsDropdown)]);
      }
    });
  }
};
exports["default"] = _default2;