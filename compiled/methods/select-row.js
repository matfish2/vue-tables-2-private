"use strict";

module.exports = function (row) {
  var id = this.opts.uniqueKey;

  if (this.opts.selectable.type === 'single') {
    this.selectedRows = [row];
  } else {
    if (this.isRowSelected(row)) {
      this.selectedRows = this.selectedRows.filter(function (R) {
        return R[id] !== row.id;
      });
    } else {
      this.selectedRows.push(row);
    }
  }
};