"use strict";

module.exports = function () {
  return !!(this.opts.childRow || this.$parent.$slots.child_row);
};