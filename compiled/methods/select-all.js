"use strict";

module.exports = function () {
  if (this.selectedRows.length)
  this.selectedRows = this.selectedRows.length ? [] : this.data;
};