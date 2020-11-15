"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  name: 'RLChildRow',
  props: ['row', 'index'],
  inject: ['colspan', 'getChildRowTemplate', 'opts', 'slots', 'componentsOverride'],
  render: function render() {
    return this.$slots["default"]({
      opts: this.opts(),
      childRow: this.getChildRowTemplate(this.row, this.index, this.slots()['child_row']),
      colspan: this.colspan(),
      "class": this.opts().rowClassCallback ? this.opts().rowClassCallback(this.row) : '',
      override: this.componentsOverride.childRow
    });
  }
};
exports["default"] = _default;