"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _RLTableBody = _interopRequireDefault(require("./renderless/RLTableBody"));

var _VtNoResultsRow = _interopRequireDefault(require("./VtNoResultsRow"));

var _VtTableRow = _interopRequireDefault(require("./VtTableRow"));

var _VtGroupRow = _interopRequireDefault(require("./VtGroupRow"));

var _VtChildRow = _interopRequireDefault(require("./VtChildRow"));

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
    var h = arguments[0];
    return h("r-l-table-body", {
      scopedSlots: {
        "default": function _default(props) {
          var rows = [];

          if (props.groupBy) {
            var addRows = function addRows(data) {
              var rows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
              var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
              data.forEach(function (group) {
                rows.push(h("vt-group-row", {
                  attrs: {
                    level: level,
                    type: group.type,
                    value: group.value
                  }
                }));

                if (level === props.groupBy.length) {
                  if (!props.canToggleGroups || !props.collapsedGroups.includes(group.value)) {
                    group.data.forEach(function (row, index) {
                      rows.push(h("vt-table-row", {
                        attrs: {
                          row: row,
                          index: props.initialIndex + index + 1
                        }
                      }));

                      if (props.hasChildRow && props.openChildRows.includes(row[props.uniqueRowId])) {
                        rows.push(h("vt-child-row", {
                          attrs: {
                            row: row,
                            index: props.initialIndex + index + 1
                          }
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
              rows.push(h("vt-table-row", {
                attrs: {
                  row: row,
                  index: props.initialIndex + index + 1
                }
              }));

              if (props.hasChildRow && props.openChildRows.includes(row[props.uniqueRowId])) {
                rows.push(h("vt-child-row", {
                  attrs: {
                    row: row,
                    index: props.initialIndex + index + 1
                  }
                }));
              }
            });
          }

          return props.override ? h(props.override, {
            attrs: {
              props: props
            }
          }) : h("tbody", {
            "class": props.theme.tbody
          }, [props.slots.prependBody, props.data.length === 0 ? h("vt-no-results-row") : '', rows, props.slots.appendBody]);
        }
      }
    });
  }
};
exports["default"] = _default2;