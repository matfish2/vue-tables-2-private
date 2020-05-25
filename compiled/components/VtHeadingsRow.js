"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _RLHeadingsRow = _interopRequireDefault(require("./renderless/RLHeadingsRow"));

var _VtTableHeading = _interopRequireDefault(require("./VtTableHeading"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'VtHeadingsRow',
  components: {
    RLHeadingsRow: _RLHeadingsRow["default"],
    VtTableHeading: _VtTableHeading["default"]
  },
  render: function render() {
    var h = arguments[0];
    return h("r-l-headings-row", {
      scopedSlots: {
        "default": function _default(props) {
          var headings = [];

          if (props.selectable) {
            var checkbox = props.selectable === 'single' ? '' : h("input", {
              attrs: {
                type: "checkbox"
              },
              on: {
                "click": function click(e) {
                  return props.toggleAll(e);
                }
              }
            });
            headings.push(h("th", {
              "class": "VueTables__select-row VueTables__select-all ".concat(props.theme.th)
            }, [checkbox]));
          }

          if (props.childRowTogglerFirst) {
            headings.push(h("th", {
              "class": props.theme.th
            }));
          }

          props.columns.map(function (column) {
            headings.push(h("vt-table-heading", {
              attrs: {
                column: column
              }
            }));
          });

          if (props.childRowTogglerLast) {
            headings.push(h("th", {
              "class": props.theme.th
            }));
          }

          return h("tr", [headings]);
        }
      }
    });
  }
};
exports["default"] = _default2;