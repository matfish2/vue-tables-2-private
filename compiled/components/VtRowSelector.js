"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _RLRowSelector = _interopRequireDefault(require("./renderless/RLRowSelector"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'VtRowSelector',
  components: {
    RLRowSelector: _RLRowSelector["default"]
  },
  props: ['row'],
  render: function render() {
    var h = arguments[0];
    return h("r-l-row-selector", {
      attrs: {
        row: this.row
      },
      scopedSlots: {
        "default": function _default(props) {
          return props.override ? h(props.override, {
            attrs: {
              props: props
            }
          }) : h("td", [h("input", {
            attrs: {
              type: "checkbox"
            },
            domProps: {
              "checked": props.isRowSelected(props.row)
            },
            on: {
              "change": function change() {
                return props.selectRow(props.row);
              }
            }
          })]);
        }
      }
    });
  }
};
exports["default"] = _default2;