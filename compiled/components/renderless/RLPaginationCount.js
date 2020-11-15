"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  inject: ['page', 'limit', 'opts', 'allFilteredData', 'source', 'tableData', 'count'],
  render: function render() {
    return this.$slots["default"]({
      from: this.opts().pagination.virtual ? 1 : (this.page() - 1) * this.limit() + 1,
      to: this.getTo(),
      total: this.source === 'client' ? this.allFilteredData().length : this.count()
    });
  },
  methods: {
    getTo: function getTo() {
      if (this.source === 'client') {
        return this.page() * this.limit() > this.allFilteredData().length ? this.allFilteredData().length : this.page() * this.limit();
      }

      return this.tableData().length;
    }
  }
};
exports["default"] = _default;