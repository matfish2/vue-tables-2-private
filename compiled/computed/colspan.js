"use strict";

module.exports = function () {
  var span = this.allColumns.length;
  if (this.hasChildRow) span++;
  if (this.opts.selectable.mode) span++;
  return span;
};