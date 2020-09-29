"use strict";

module.exports = function (rowIds) {
  var _this = this;

  rowIds = rowIds.map(function (id) {
    return String(id);
  });
  this.selectedRows = this.selectedRows.filter(function (row) {
    return !rowIds.includes(String(row[_this.opts.uniqueKey]));
  });
  return this.selectedRows;
};