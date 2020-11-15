"use strict";

module.exports = function (value) {
  if (this.$parent.$slots && this.$parent.$slots['__group_meta']) {
    var data = this.opts.groupMeta.find(function (val) {
      return val.value === value;
    });
    if (!data) return '';
    return this.$parent.$slots['__group_meta'](data);
  }

  return '';
};