"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  inject: ['page', 'limit', 'allFilteredData'],
  render: function render() {
    return this.$scopedSlots["default"]({
      from: (this.page() - 1) * this.limit() + 1,
      to: this.page() * this.limit() > this.allFilteredData().length ? this.allFilteredData().length : this.page() * this.limit(),
      total: this.allFilteredData().length
    });
  }
};
exports["default"] = _default;