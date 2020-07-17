"use strict";

module.exports = function () {
  this.selectedRows = [];
  this.dispatch('select', this.selectedRows);
};