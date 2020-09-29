"use strict";

module.exports = function (rowId) {
  var _this = this;

  this.selectedRows = this.selectedRows.filter(function (row) {
    return String(row[_this.opts.uniqueKey]) !== String(rowId);
  });
  return this.selectedRows;
};