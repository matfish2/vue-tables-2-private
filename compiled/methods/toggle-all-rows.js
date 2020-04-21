"use strict";

module.exports = function (e) {
  var _this = this;

  if (e.target.checked) {
    if (this.opts.selectable.only) {
      this.selectedRows = this.data.filter(function (row) {
        return _this.opts.selectable.only(row);
      });
    } else {
      this.selectedRows = this.data;
    }
  } else {
    this.selectedRows = [];
  }

  this.dispatch('select', this.selectedRows);
};