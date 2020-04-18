"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  name: 'RLRowSelector',
  inject: ['opts', 'theme', 'colspan', 'slots', 'selectRow', 'isRowSelected', 'componentsOverride'],
  props: ['row'],
  render: function render() {
    return this.$scopedSlots["default"]({
      type: this.opts().selectable.type,
      callback: this.opts().selectable.callback,
      row: this.row,
      selectRow: this.selectRow,
      isRowSelected: this.isRowSelected,
      override: this.componentsOverride.rowSelector
    });
  }
};
exports["default"] = _default;