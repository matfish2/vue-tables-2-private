"use strict";

module.exports = function (row) {
  return !!this.selectedRows.find(function (Row) {
    return Row.id === row.id;
  });
};