"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  name: 'RLTableHead',
  inject: ['opts', 'slots', 'componentsOverride', 'theme'],
  render: function render() {
    return this.$slots["default"]({
      opts: this.opts(),
      slots: this.slots(),
      override: this.componentsOverride.tableHead,
      "class": this.theme.thead
    });
  }
};
exports["default"] = _default;