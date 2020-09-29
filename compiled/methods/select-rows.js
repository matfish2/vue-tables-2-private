"use strict";

module.exports = function (rowIds) {
  var _this = this;

  rowIds.forEach(function (id) {
    return _this.selectRow(id);
  });
  return this.selectedRows;
};