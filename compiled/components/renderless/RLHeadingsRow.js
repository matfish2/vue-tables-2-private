"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  name: 'RLHeadingRow',
  inject: ['opts', 'theme', 'hasChildRow', 'allColumns', 'toggleAllRows'],
  render: function render() {
    return this.$scopedSlots["default"]({
      opts: this.opts(),
      columns: this.allColumns(),
      selectable: this.opts().selectable.mode,
      toggleAll: this.toggleAllRows,
      hasChildRow: this.hasChildRow,
      childRowTogglerFirst: this.hasChildRow() && this.opts().showChildRowToggler && this.opts().childRowTogglerFirst,
      childRowTogglerLast: this.hasChildRow() && this.opts().showChildRowToggler && !this.opts().childRowTogglerFirst
    });
  }
};
exports["default"] = _default;