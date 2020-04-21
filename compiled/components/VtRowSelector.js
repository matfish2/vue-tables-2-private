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
  render: function render() {
    var h = arguments[0];
    return h("r-l-row-selector", {
      scopedSlots: {
        "default": function _default(props) {
          return props.override ? h(props.override, {
            attrs: {
              props: props
            }
          }) : h("td", {
            "class": "VueTables__select-row VueTables__select-single"
          }, [h("input", {
            attrs: {
              type: props.type,
              name: "selected_row[]",
              disabled: props.disabled
            },
            domProps: {
              "checked": props.selected
            },
            on: {
              "click": function click(e) {
                return props.toggleRow(e, props.row, props.index);
              }
            }
          })]);
        }
      }
    });
  }
};
exports["default"] = _default2;