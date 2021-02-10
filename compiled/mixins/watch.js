"use strict";

var _resizeableColumns = _interopRequireDefault(require("../helpers/resizeable-columns"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = {
  columns: function columns() {
    var _this = this;

    if (this.opts.resizableColumns) {
      this.$nextTick(function () {
        (0, _resizeableColumns["default"])(_this.$el.querySelector("table"), _this.hasChildRow, _this.opts.childRowTogglerFirst, _this.resizableColumns, _this.opts.stickyHeader);
      });
    }
  }
};