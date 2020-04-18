"use strict";

module.exports = function (row) {
  var id = this.opts.uniqueKey;
  return !!this.selectedRows.find(function (Row) {
    return Row[id] === row[id];
  });
};