"use strict";

module.exports = function (rowId) {
  var _this = this;

  if (!!this.selectedRows.find(function (row) {
    return String(row[_this.opts.uniqueKey]) === String(rowId);
  })) {
    this.unselectRow(rowId);
  } else {
    this.selectRow(rowId);
  }

  return this.selectedRows;
};