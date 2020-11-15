"use strict";

var _vue = require("vue");

module.exports = function (row, index, scopedSlot) {
  // scoped slot
  if (scopedSlot) return scopedSlot({
    row: row,
    index: index
  });
  var childRow = this.opts.childRow; // function

  if (typeof childRow === 'function') return childRow.apply(this, [_vue.h, row]); // component

  return (0, _vue.h)(childRow, {
    data: row
  });
};