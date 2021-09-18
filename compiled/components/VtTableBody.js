"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

var _RLTableBody = _interopRequireDefault(require("./renderless/RLTableBody"));

var _VtNoResultsRow = _interopRequireDefault(require("./VtNoResultsRow"));

var _VtTableRow = _interopRequireDefault(require("./VtTableRow"));

var _VtGroupRow = _interopRequireDefault(require("./VtGroupRow"));

var _VtChildRow = _interopRequireDefault(require("./VtChildRow"));

var _omit = _interopRequireDefault(require("../helpers/omit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'VtTableBody',
  components: {
    RLTableBody: _RLTableBody["default"],
    VtNoResultsRow: _VtNoResultsRow["default"],
    VtTableRow: _VtTableRow["default"],
    VtChildRow: _VtChildRow["default"],
    VtGroupRow: _VtGroupRow["default"]
  },
  render: function render() {
    return (0, _vue.h)(_RLTableBody["default"], {}, {
      "default": function _default(props) {
        var rows = [];

        if (props.groupBy && props.source === 'client') {
          var addRows = function addRows(data) {
            var rows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
            var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
            data.forEach(function (group) {
              rows.push((0, _vue.h)(_VtGroupRow["default"], {
                level: level,
                value: group.value
              }));

              if (level === props.groupBy.length) {
                if (!props.canToggleGroups || !props.collapsedGroups.includes(group.value)) {
                  group.data.forEach(function (row, index) {
                    rows.push((0, _vue.h)(_VtTableRow["default"], {
                      row: row,
                      index: props.initialIndex + index + 1
                    }));

                    if (props.hasChildRow && props.openChildRows.includes(row[props.uniqueRowId])) {
                      rows.push((0, _vue.h)(_VtChildRow["default"], {
                        row: row,
                        index: props.initialIndex + index + 1
                      }));
                    }
                  });
                }
              } else {
                if (!props.canToggleGroups || !props.collapsedGroups.includes(group.value)) {
                  addRows(group.data, rows, level + 1);
                }
              }
            });
            return rows;
          };

          rows = addRows(props.data);
        } else {
          props.data.forEach(function (row, index) {
            rows.push((0, _vue.h)(_VtTableRow["default"], {
              row: row,
              index: props.initialIndex + index + 1
            }));

            if (props.hasChildRow && props.openChildRows.includes(row[props.uniqueRowId])) {
              rows.push((0, _vue.h)(_VtChildRow["default"], {
                row: row,
                index: props.initialIndex + index + 1
              }));
            }
          });
        }

        return props.override ? (0, _vue.h)(props.override, {
          props: (0, _omit["default"])(props)
        }) : (0, _vue.createVNode)("tbody", null, [props.slots.prependBody ? props.slots.prependBody() : '', props.data.length === 0 ? (0, _vue.h)(_VtNoResultsRow["default"]) : '', rows, props.slots.appendBody ? props.slots.appendBody() : '']);
      }
    });
  }
};
exports["default"] = _default2;