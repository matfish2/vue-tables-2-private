"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

var _RLHeadingsRow = _interopRequireDefault(require("./renderless/RLHeadingsRow"));

var _VtTableHeading = _interopRequireDefault(require("./VtTableHeading"));

var _omit = _interopRequireDefault(require("../helpers/omit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'VtHeadingsRow',
  components: {
    RLHeadingsRow: _RLHeadingsRow["default"],
    VtTableHeading: _VtTableHeading["default"]
  },
  render: function render() {
    return (0, _vue.h)(_RLHeadingsRow["default"], {}, {
      "default": function _default(props) {
        if (props.override) {
          return (0, _vue.h)(props.override, {
            props: (0, _omit["default"])(props)
          });
        }

        var headings = [];

        if (props.selectable) {
          var checkbox = props.opts.selectable.mode === 'single' ? '' : (0, _vue.createVNode)("input", {
            "id": "vt-toggle-all",
            "type": "checkbox",
            "onClick": function onClick(e) {
              return props.toggleAll(e);
            }
          }, null);
          headings.push((0, _vue.createVNode)("th", {
            "class": "VueTables__select-row VueTables__select-all ".concat(props.theme.th),
            "style": props.thStyle
          }, [checkbox]));
        }

        if (props.childRowTogglerFirst) {
          headings.push((0, _vue.createVNode)("th", {
            "style": props.thStyle
          }, null));
        }

        props.columns.map(function (column) {
          headings.push((0, _vue.h)(_VtTableHeading["default"], {
            column: column
          }));
        });

        if (props.childRowTogglerLast) {
          headings.push((0, _vue.createVNode)("th", {
            "style": props.thStyle
          }, null));
        }

        return (0, _vue.createVNode)("tr", null, [headings]);
      }
    });
  }
};
exports["default"] = _default2;