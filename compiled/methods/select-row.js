"use strict";

module.exports = function (rowId) {
  var _this = this;

  if (alreadySelected(rowId, this.selectedRows, this.opts.uniqueKey)) {
    console.warn("Row ".concat(rowId, " already selected"));
    return;
  }

  var row = this.data.find(function (row) {
    return String(row[_this.opts.uniqueKey]) === String(rowId);
  });

  if (!row) {
    console.warn("Row ".concat(rowId, " was not found"));
    return;
  }

  this.selectedRows.push(row);
  return this.selectedRows;
};

function alreadySelected(rowId, selectedRows, IdKey) {
  return !!selectedRows.find(function (row) {
    return String(row[IdKey]) === String(rowId);
  });
}